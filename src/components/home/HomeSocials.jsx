import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

function HomeSocials() {
  return (
    <div className='home_socials'>
        <a href='https://www.linkedin.com/in/mohamed-samir-8b1495245/' target='_blank'><CiLinkedin /></a>
        <a href='https://github.com/mohamed-samir112/' target='_blank'><FaGithub /></a>
        <a href='#' target='_blank'><FaDribbble /></a>
    </div>
    )
}

export default HomeSocials
