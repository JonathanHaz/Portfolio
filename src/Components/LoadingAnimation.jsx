import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './LoadingAnimation.css';

const LoadingAnimation = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: '-150%', transition: { duration: 1, delay: 0.3 } });
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, [controls]);

  return (
    <div className="loading-animation-container">
      <motion.div
        initial={{ y: 0 }}
        animate={isLoading ? 'visible' : 'hidden'}
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        className="loading-overlay"
        animate={controls}
      />
      {children}
    </div>
  );
};

export default LoadingAnimation;
