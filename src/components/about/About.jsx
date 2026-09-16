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
              Motivated Software Engineer with a strong foundation in programming, data structures,
algorithms, and software development principles. Experienced in building responsive
web applications using React.js, JavaScript, and modern front-end technologies, with a
growing specialization in Python automation, web automation, data processing, and
Excel automation. Passionate about writing clean, maintainable code, automating
repetitive tasks, solving technical problems, and continuously learning new technologies
to build efficient and reliable software solutions
              </p>


          </div>

    </section>
  )
}

export default About
