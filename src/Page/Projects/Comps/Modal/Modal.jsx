import React,{useEffect, useRef} from 'react';
import './Modal.css';
import { motion } from 'framer-motion';
import gsap from 'gsap';

    const scaleAnimation = {
        initial: {scale: 0, x: "-50%", y: "-50%"},
        open: {scale: 1.3, x:"-50%" , y:"-50%", transition:{duration: 0.4, ease:[.76,0,.24,1]}},
        closed: {scale: 0, x:"-50%" , y:"-50%", transition:{duration: 0.4, ease:[.32,0,.67,0]}}
    }

export default function Modal({ modal, projects }) {

    const {active, index} = modal
    const container = useRef(null)

    useEffect(()=>{
        const moveContainerX = gsap.quickTo(container.current, "left", {duration:0.8, ease:"power3"})
        const moveContainerY = gsap.quickTo(container.current, "top", {duration:0.8, ease:"power3"})

        window.addEventListener( "mousemove", (e)=>{
            const {clientX, clientY} = e;
            moveContainerX(clientX);
            moveContainerY(clientY);
        })
    },[])

    return (
        <motion.div ref={container}  variants={scaleAnimation} initial="initial" animate={active ? "open" : "closed"} className='modalContainer'>
        <div style={{ top: index * -100 + "%" }} className='modalSlider'>
            {projects.map((project, index) => {
                const { title, src, link } = project; 
                return (
                    <div key={index} className='modal'>
                        <img
                            src={src} 
                            alt={title}
                            width={150}
                            height={0}
                        />
                    </div>
                );
            })}
        </div>
    </motion.div>
    
    );
}
