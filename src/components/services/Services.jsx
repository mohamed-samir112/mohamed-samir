import React from 'react'
import './Services.css'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <section id='services'>
      <div className='top_section'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container_services">
        <article className='card'>
          <MdDesignServices className="icon" />
          <h3>Web Design</h3>
          <p className='text-light'>I create modern and responsive web designs
              that combine aesthetics with functionality and focus on delivering fast, user-friendly interfaces with clean layouts, strong branding, and optimized performance across all devices.</p>
        </article>
        <article className='card'>
          <IoIosRocket className="icon" />
          <h3>Fast Performance</h3>
          <p className='text-light'>   I build fast and optimized web applications focused on performance, speed, and smooth user experience.</p>
        </article>
        <article className='card'>
          <FaCode className="icon" />
          <h3>Clean Code</h3>
          <p className='text-light'>I write clean, maintainable, and well-structured code following best practices and modern standards. 
  My focus is on readability, scalability, and making the code easy to understand and update.</p>
        </article>
      </div>
    </section>
  )
}

export default Services
