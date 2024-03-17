import React from 'react'
import { motion } from 'framer-motion'

export default function SlidingText() {

    const sliderVariant = {
        initial: {
            x: "-300%"
        },
        animate: {
            x: "350%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
            },
        },
    };

    const sliderVariantt = {
        initial: {
            x: "300%"
        },
        animate: {
            x: "-250%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
            },
        },
    };


  return (
    <div>
        <motion.div
    style={{position:"absolute", fontSize:"30vh",bottom:"-300px",whiteSpace:"nowrap",width:"50%",fontWeight:"bold", color:"rgba(255,255,255,1)"}}
     className='slidingTextContainer'
     variants={sliderVariant}
     initial="initial"
     animate="animate"
     >
      React Framer-Motion
    </motion.div>
    <motion.div
    style={{position:"absolute", fontSize:"30vh",bottom:"0",whiteSpace:"nowrap",width:"50%",fontWeight:"bold", color:"rgba(255,255,255,1)"}}
     className='slidingTextContainer'
     variants={sliderVariantt}
     initial="initial"
     animate="animate"
     >
      JavaScript Node.Js
    </motion.div>
    </div>
  
  )
}