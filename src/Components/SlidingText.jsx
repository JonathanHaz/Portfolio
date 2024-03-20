import React from 'react';
import { motion } from 'framer-motion';
import './SlidingText.css';

export default function SlidingText() {

    const sliderVariant = {
        initial: {
            x: "-100%"
        },
        animate: {
            x: "200%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 8,
            },
        },
    };

    const sliderVariantt = {
        initial: {
            x: "200%"
        },
        animate: {
            x: "-100%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 8,
            },
        },
    };


    return (
        <div>
            <motion.div
                className='slidingTextContainer'
                variants={sliderVariant}
                initial="initial"
                animate="animate"
            >
                REACT FRAMER-MOTION
            </motion.div>
            <motion.div
                className='slidingTextContainer2'
                variants={sliderVariantt}
                initial="initial"
                animate="animate"
            >
                JAVASCRIPT NODE.JS
            </motion.div>
        </div>

    );
}
