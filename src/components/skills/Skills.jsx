import React from 'react'
import './Skills.css'
const skillsData=[ 
  {
    id:1,
    image:"/assets/html.png",
    title:'HTML',
    disc:" backbone of every website",

  },
  {
    id:2,
    image:"/assets/css3.svg",
    title:'CSS',
    disc:"Brings life to web pages with styling",

  },
  {
    id:3,
    image:"/assets/javascript.svg",
    title:'Javascript',
    disc:"Adds interactivity and dynamic features",

  },
  {
    id:4,
    image:"/assets/react.svg",
    title:'Reactjs',
    disc:"fast, scalable, and interactive user interfaces",

  },
  {
    id:5,
    image:"/assets/next.png",
    title:'Nextjs',
    disc:"Fast,Server-side, React, Framework",

  },
  {
    id:6,
    image:"/assets/bootstrap.svg",
    title:'Bootstrap',
    disc:"development with responsive components",

  },
  {
    id:7,
    image:"/assets/sql.png",
    title:'Sql& plSql',
    disc:"Database Management",

  },
  {
    id:8,
    image:"/assets/vite.svg",
    title:'Vite',
    disc:"Build Tool",

  },
  {
    id:9,
    image:"/assets/tailwindcss.svg",
    title:'Tailwind css',
    disc:"User Interface",

  },
  {
    id:10,
    image:"/assets/git.svg",
    title:'Git Hup',
    disc:"Code Management",

  },
  {
    id:11,
    image:"/assets/typescript.svg",
    title:'Type script',
    disc:"Interaction",

  },
  {
    id:12,
    image:"/assets/materialui.svg",
    title:'MaterialUI',
    disc:"Component Library",
  
  },
]
function Skills() {
  return (
    <section  id ="skills"className='skills' >
      <div className='top_section'>
        <h5>What Skills I Have</h5>
        <h2>My Skills </h2>
      </div>
      <div className='container container_skills'>
        {skillsData.map(({id ,image, title,disc})=>( 
        <article key={id}className="card_skill">
          <div className="icon">
            <img src={image} alt="not found" />
          </div>
          <div className="content">
            <h4>{title}</h4>
            <p className="text-light">{disc}</p>
          </div>
        </article>
        ))}
       
      </div>

    </section>
  )
}

export default Skills

