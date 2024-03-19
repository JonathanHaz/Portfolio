import React from 'react';
import './Contact.css';
import avatar from '../../assets/profile.png';

export default function Contact() {
  // Get the current date and time
  const currentDateTime = new Date().toLocaleString();

  return (
    <div className='contactContainer'>
      <div className='medium'>
        <div className='avatar'>
          <img src={avatar} alt="" />
          <h1>Contact Me And Let's Work Together!</h1>
        </div>
        <div className='row'></div>
        <div className='btns'>
          <button>+972586775225</button>
          <button>yonatanhazan1337@gmail.com</button>
        </div>
      </div>
      <footer className='footer'>
        <div className='time'>
          <h1>Local Time</h1>
          <p>{currentDateTime}</p>
        </div>
        <div className='socials'>
          <h1>Socials</h1>
          <div className='socials-info'>
            <p>Linkendin</p>
            <p>Instagram</p>
            <p>Github</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
