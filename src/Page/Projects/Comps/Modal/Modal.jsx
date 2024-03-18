import React from 'react';
import './Modal.css';

import d from './images/AkaxaDS.webp'
// import AkaxaDS from './images/AkaxaDS.webp';
// import AOTEren from './images/AOTEren.webp';
// import AOTJacket from './images/AOTJacket.webp';
// import AOTLevi from './images/AOTLevi.webp';

export default function Modal({ modal, projects }) {
    const images = [AkaxaDS, AOTEren, AOTJacket, AOTLevi];

    return (
        <div className='modalContainer'>
            <div className='modalSlider'>
                {projects.map((project, index) => {
                    const { title } = project;
                    return (
                        <div key={index} className='modal'>
                            <img
                                src={images[index]}
                                width={300}
                                height={0}
                                alt={title}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
