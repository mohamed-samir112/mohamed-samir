import React from 'react'
import './About.css'
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


function About() {
  return (
    <section className="about" id="about">
      <div className='container about_container'>
        
        <div className="about_cards">
          <div className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Year</small>
          </div>

          <div className="about_card">
        <FiUser className='about_icon' />
        <h5>Projects</h5>
        <small>5+ Completed</small>
            </div>

          <div className="about_card">
        <VscFolderLibrary className='about_icon' />
        <h5>Graduation</h5>
        <small> 2024</small>
            </div>

        </div>

            <p className="about_desc">
              I'm Frontend Developer with a strong focus on building scalable and responsive web applications using Reactjs,Nextjs Experienced in developing interactive user interfaces and optimizing performance.
              Skilled in HTML, CSS, JavaScript, and modern frontend tools. Passionate about creating seamless user experiences and writing clean, maintainable code.
              Built multiple projects, including e-commerce platforms and dynamic web applications. Currently seeking an opportunity to contribute and grow in a professional environment.
              </p>


          </div>

    </section>
  )
}

export default About
