import React, { useState } from 'react';
import Project from './Comps/Project/Project';
import './Projects.css'
import Modal from './Comps/Modal/Modal';
import jobq from './Comps/Modal/images/jobq.jpg';
import movie from './Comps/Modal/images/movie.jpg';
import resume from './Comps/Modal/images/resume.png'
import ecommerce from './Comps/Modal/images/ecommerce.png'

export default function Projects() {
    const projects = [
        {
            title: "Resume builder",
            src: resume,
            link:"https://github.com/JonathanHaz/JobQ"
        },
        {
            title: "E-Commerce",
            src: ecommerce,
            link:"https://github.com/JonathanHaz/JobQ"
        },
        {
            title: "JobQ",
            src: jobq,
            link:"https://github.com/JonathanHaz/JobQ"
        },
        {
            title: "Movie App",
            src: movie,
            link:"https://github.com/JonathanHaz/MovieProject"
        },
    ];

    const [modal, setModal] = useState({active: false, index: 0});

    return (
        <div className='main'>
            <div className='body'>
                <h1>Here are some of my projects</h1>
                {projects.map((project, index) => {
                    return <Project key={index} index={index} link={project.link} title={project.title} setModal={setModal} />;
                })}
            </div>
            <Modal modal={modal} projects={projects} />
        </div>
    );
}
