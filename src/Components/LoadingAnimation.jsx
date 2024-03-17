import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LoadingAnimation = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: '-150%', transition: { duration: 1, delay: .3 } });
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, [controls]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={isLoading ? 'visible' : 'hidden'}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      style={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0, // Adjust this value to control the curve
          backgroundColor: 'purple',
          zIndex: 9999,
          borderBottomRightRadius: '40%', 
          borderBottomLeftRadius: '40%', 
          width: '110%', // Increase the width
          height: '150%', // Increase the width
          marginLeft: '-5%', // Adjusting to center the curve
        }}
        animate={controls}
      />
      {children}
    </motion.div>
  );
};

export default LoadingAnimation;
