import React from 'react';
import { motion } from 'framer-motion';

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
            style={{
            position: "absolute", 
            fontSize: "10vh",
            bottom: "2em",
            whiteSpace: "nowrap",
            width: "50%",
            fontWeight: "bold", 
            color: "rgba(255,255,255,1)",
            filter: "drop-shadow(30px 10px 4px #00000052)",
            fontFamily: "Sharpie, sans-serif",
            }}
            className='slidingTextContainer'
            variants={sliderVariant}
            initial="initial"
            animate="animate"
                >
                REACT FRAMER-MOTION
            </motion.div>
            <motion.div
                style={{
                    position: "absolute",
                    fontSize: "10vh",
                    bottom: "1em",
                    whiteSpace: "nowrap",
                    width: "50%",
                    fontWeight: "bold",
                    color: "rgba(255,255,255,1)",
                    filter: "drop-shadow(30px 10px 4px #00000052)",
                    fontFamily: "Sharpie, sans-serif",

                }}
                className='slidingTextContainer'
                variants={sliderVariantt}
                initial="initial"
                animate="animate"
            >
                JAVASCRIPT NODE.JS
            </motion.div>
        </div>

    );
}
