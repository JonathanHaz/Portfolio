import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profile from '../../assets/newPP.png';
import SlidingText from '../../Components/SlidingText';

export default function Hero() {
  const [isJonathan, setIsJonathan] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJonathan(prevIsJonathan => !prevIsJonathan);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const currentText = isJonathan ? " Jonathan Hazan" : " Full Stack Developer";

  return (
    <div className='hero-container' id='home'>
      <div className='hero-content'>
              <motion.div className='hero-info'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.4 }}
        >

          <h1 key={currentText}>
            Hello World! I'm
            <motion.span 
              className='text-change'
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {Array.from(currentText).map((letter, index) => (
                <motion.span style={{fontSize:'48px'}} key={index} variants={letterVariants}>{letter}</motion.span>
              ))}
            </motion.span>
          </h1>
          <p >Passionate about creating efficient and scalable web applications.</p>
          <p >Let's build something amazing together!</p>
          <button className='heroBTN'><a href="https://drive.google.com
          /file/d/1beZID9UmXeNPL1cDppSdDPWn7bXigyZx/view?usp=sharing">Resume</a></button>
        </motion.div>
        <motion.div className='hero-image'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img src={profile} alt="" />
        </motion.div>
      </div>
      <SlidingText/>
    </div>
  );
}
