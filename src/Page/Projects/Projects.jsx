import React from 'react'
import { useState } from 'react'
import Project from './Comps/Project/Project'
import Modal from './Comps/Modal/Modal'

export default function Projects() {

    const projects = [
        {
            title: "Resume builder",
            src: "AkaxaDS.webp",
            color: "#00000"
        },
        {
            title: "E-Commerce",
            src: "AOTEren.webp",
            color: "#00000"
        },
        {
            title: "JobQ",
            src: "AOTJacket.webp",
            color: "#00000"
        },
        {
            title: "Recipe",
            src: "AOTLevi.webp",
            color: "#00000"
        },
    ]

    const [modal, setModal] = useState({active:false, index:0})

  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <h2>Here are some of my projects</h2>
      <div className='project-card'>
        {
            projects.map((project,index)=>{
                return <Project key={index} index={index} title={project.title} setModal={setModal}/>
            })
        }
      </div>
      <Modal modal={modal} projects={projects}/>
    </div>
  )
}
