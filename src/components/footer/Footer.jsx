import React from 'react'
import './Footer.css'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer >
      <div className='sections'>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skils</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </div>
      <div className="footer_copyright">
        <small>&copy; <a href="#">Mohamed Samir</a> Built with Reactjs</small>
      </div>
    </footer>
  )
}

export default Footer
