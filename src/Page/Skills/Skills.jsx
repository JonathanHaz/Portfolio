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
      className='skills-container' data-aos="fade-up" data-aos-delay="100">
        <h1 style={{fontSize:"40px"}}>My Skills</h1>
        <h1>Here are some of my skills on which I have been working on for the past year.</h1>
      <div className="card-container">
        <div className='card' data-aos="flip-left" data-aos-delay="400">
          <h2>Frontend Skills</h2>
          <div className='skills'>
            <div className='skill'>
              <div className='skill-card'>
                <FaHtml5 style={{color:'rgb(252,74,11)'}} />
                <p>HTML5</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <FaCss3Alt style={{color:'rgb(33,76,229)'}} />
                <p>CSS3</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <FaJs style={{color:'rgb(247,223,30)'}} />
                <p>JavaScript</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <FaReact style={{color:'rgb(0,217,253)'}} />
                <p>React</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <SiBootstrap style={{color:'rgb(141,26,255)'}} />
                <p>Bootstrap</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <SiMaterialdesignicons style={{color:'rgb(0,127,255)'}} />
                <p>Material UI</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card' data-aos="flip-right" data-aos-delay="800">
          <h2>Backend Skills</h2>
          <div className='skills'>
            <div className='skill'>
              <div className='skill-card'>
                <FaNode style={{color:'rgb(114,169,113)'}} />
                <p>Node.js</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <SiMongodb style={{color:'rgb(82,171,76)'}} />
                <p>MongoDB</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
                <IoLogoNodejs style={{color:'rgb(105,159,99)'}} />
                <p>Express.js</p>
              </div>
            </div>
            <div className='skill'>
              <div className='skill-card'>
              <IoLogoFirebase style={{color:'rgb(255,204,50)'}} />
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
              <FaGitAlt style={{color:'rgb(240,80,51)'}} />
              <p>Git</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-card'>
              <RiGithubFill style={{color:'rgb(0,0,0)'}} />
              <p>GitHub</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-card'>
              <TbBrandVscode style={{color:'rgb(37,174,244)'}} />
              <p>VSCode</p>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-card'>
              <SiPostman style={{color:'rgb(255,108,56)', backgroundColor:'white', borderRadius:'50%'}} />
              <p>Postman</p>
            </div>
          </div>
        </div>
      </div>
      </motion.section>
  );
}
