import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul className='navlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}
