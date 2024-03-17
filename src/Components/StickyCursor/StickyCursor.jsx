import React, { useEffect } from 'react';
import './StickyCursor.css';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function StickyCursor() {
    const cursorSize = 20;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    };

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    };

    const manageMouseMove = e => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 1.1);
        mouse.y.set(clientY - cursorSize / 1.1);
    };



    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        
        };
    }, []);

    return (
        <motion.div
            className='cursor'
            style={{ left: smoothMouse.x, top: smoothMouse.y }}
        ></motion.div>
    );
}
