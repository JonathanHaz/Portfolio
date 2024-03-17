import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profile from '../../assets/newPP.png';

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
        delay: 0.1,
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
    <div className='hero-container'>
      <div className='hero-content'>
        <div className='hero-info'>
          <h1 key={currentText}>
            Hello World! I'm
            <motion.span 
              className='text-change'
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {Array.from(currentText).map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
              ))}
            </motion.span>
          </h1>
          <p >Passionate about creating efficient and scalable web applications.</p>
          <p >Let's build something amazing together!</p>
          <button>Contact</button>
        </div>
        <motion.div className='hero-image'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={profile} alt="" />
        </motion.div>
      </div>
    </div>
  );
}
