import React from 'react';
import './Contact.css';
import avatar from '../../assets/profile.png';

export default function Contact() {
  const currentDateTime = new Date().toLocaleString();

  const handleEmailClick = () => {
    window.open('mailto:yonatanhazan1337@gmail.com');
  };

  return (
    <div className='contactContainer' id='contact'>
      <div className='medium'>
        <div className='avatar'>
          <img src={avatar} alt="" />
          <h1>Contact Me And Let's Work Together!</h1>
        </div>
        <div className='row'></div>
        <div className='btns'>
          <button>+972586775225</button>
          <button onClick={handleEmailClick}>yonatanhazan1337@gmail.com</button>
        </div>
      </div>
      <footer className='footer'>
        <div className='time'>
          <h1>Local Time</h1>
          <p>{currentDateTime}</p>
        </div>
        <div className='copyright'>
          <p>©2024 Made By Jonathan Hazan</p>
        </div>
        <div className='socials'>
          <h1>Socials</h1>
          <div className='socials-info'>
            <p><a href="">Linkendin</a></p>
            <p><a href="">Instagram</a></p>
            <p><a href="">Github</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
