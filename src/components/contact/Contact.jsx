import React from 'react'
import './Contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessage3Line } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';



const contactData =[
  {
    id:1,
    icon:<MdOutlineMail />,
    title:"Email",
    info:"ms5395832@gmail.com",
    link:"mailto:ms5395832@gmail.com?subject=Contact%20Me&body=Hello%20Mohamed%20I%20want%20to%20contact%20you"
  },
  {
    id:2,
    icon:<RiMessage3Line />,
    title:"messenger",
    info:"mohamed samir",
    link:"https://m.me/Mohamed.Samir"
  },
  {
    id:3,
    icon:<BsWhatsapp />,
    title:"whatsApp",
    info:"01102152653",
    link:"https://wa.me/201102152653"
  },
]


function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8bwhb5s', 'template_97szmwk', form.current,'rGM6Hb2JO7X837RhE',
      )
    e.target.reset();
  };
  return (
    <section className='contact' id='contact' >
        <div className='top_section'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
        {contactData.map(({id,icon,title,info,link})=>(
        <article key={id} className='contact_option'>
          {icon}
          <h4>{title}</h4>
          <h5>{info}</h5>
          <a href={link} target='_blank'>Send Message</a>
        </article>
      ))}
        </div>
        <form  ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Full Name' name='name' />
          <input type="email" placeholder='Your Email' name='email' />
          <textarea rows={10}  placeholder='Your Message' name="message" id=""></textarea>
          <button className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
