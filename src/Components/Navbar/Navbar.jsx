import React from 'react';
import './Navbar.css';

export default function Navbar() {


  return (
    <div className='navbar'>
      <h2>JonathanH</h2>
      <ul className='navlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#" >Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className='navBTN'><a href="https://github.com/JonathanHaz" target="_blank">Github Profile</a></button>
    </div>
  );
}
