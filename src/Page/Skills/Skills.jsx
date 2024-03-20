import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiBootstrap, SiMaterialdesignicons, SiMongodb, SiPostman } from 'react-icons/si';
import { IoLogoFirebase } from "react-icons/io5";
import { FaNode } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { RiGithubFill } from 'react-icons/ri';
import { TbBrandVscode } from 'react-icons/tb';
import { motion } from 'framer-motion';
import './Skills.css';

export default function Skills() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <motion.section
      id='skills'
      className='skills-container'>
        <h1 style={{fontSize:"40px"}}>My Skills</h1>
        <h1>Here are some of my skills on which I have been working on for the past year.</h1>
      <div className="card-container">
        <div className='card' data-aos="flip-left" data-aos-delay="400">
          <h2>Frontend Skills</h2>
          <div className='skills'>
            <div className='skill'>
              <div className='skill-card'>
                <FaHtml5 />
                <p>HTML5</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <FaCss3Alt/>
                <p>CSS3</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <FaJs />
                <p>JavaScript</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <FaReact />
                <p>React</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card' data-aos="flip-right" data-aos-delay="800">
          <h2>Backend Skills</h2>
          <div className='skills'>
            <div className='skill'>
              <div className='skill-card'>
                <FaNode />
                <p>Node.js</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <SiMongodb />
                <p>MongoDB</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <IoLogoNodejs />
                <p>Express.js</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
              <IoLogoFirebase />
                <p>Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card' data-aos="flip-up" >
        <h2>Other</h2>
        <div className='skills'>
          <div className='skill'>
            <div className='skill-card'>
              <FaGitAlt />
              <p>Git</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-card'>
              <RiGithubFill />
              <p>GitHub</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-card'>
              <TbBrandVscode />
              <p>VSCode</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-card'>
              <SiPostman />
              <p>Postman</p>
            </div>
          </div>
        </div>
      </div>
      </motion.section>
  );
}
