import React from 'react'
import './Projects.css'
const portfolioData =[
  {
    id:1,
    image:"src/assets/ecommarce.png",
    title:"E-commerace website",
    github:"https://github.com/mohamed-samir112/Ecommerace-project",
    demo:"https://ecommerace-project-opal.vercel.app/",
  },
  {
    id:2,
    image:"src/assets/najez.png",
    title:"Landing Page najez website",
    github:"https://najez-task.netlify.app/",
    demo:"https://najez-task.netlify.app/",
  },
  {
    id:3,
    image:"src/assets/mawakeet.png",
    title:"Mawakeet Elsalaah",
    github:"https://github.com/mohamed-samir112/mawakeet-salah",
    demo:"https://najez-task.netlify.app/",
  },
  {
    id:4,
    image:"src/assets/list.png",
    title:"Todo list app",
    github:"https://github.com/mohamed-samir112/todoList-react",
    demo:"https://to-do-listapp-react.netlify.app/",
  },
]

function Projects() {
  return (
    <section id='projects' className='projects'>
      <div className='top_section'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className='container projects_container'>
        {portfolioData.map(({id,image ,title,github,demo})=>(

        <article  key={id} className='portfolio_item'>
          <div className='portfolio_item_img'>
            <img src = {image } alt="not found" />

          </div>
          <h3>{title}</h3>
          <div className="portfolio_item_btns">
            <a href={github} target='_blank' className='btn'>Github</a>
            <a href= {demo} target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
