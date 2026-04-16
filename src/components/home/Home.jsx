import React from 'react'
import './Home.css'
import HomeSocials from './HomeSocials'
import  { useState,useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  const text = "Mohamed Samir";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='home'>
    <div className="container home_container">
        <h1 className='say-hi'>Hi, I'm </h1>
        <h1 className="typing">{displayText}</h1>      
        <h3 className='text-light'> Frontend Developer</h3>

        <div className='btns'>
        <a href='/assets/mycvlastv.pdf' className='btn' download >Download CV</a>
        <a 
            href="https://wa.me/201102152653" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"> Let's talk <FaWhatsapp /></a>
                  </div>
        <div  className=" me  floating">
        <img src='/assets/me.png'  alt='not found'/>
                </div>
        
      
      
      <a href='#about' className='scroll_down'>Scroll Down</a>
      <HomeSocials/>
      
    </div>

    
    </div>
  )
}

export default Home

