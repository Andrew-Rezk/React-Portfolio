import React from 'react'
import img from '../img/laptop.jpg'

 const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '570px'}}>
      <h1 style={{ color: "white", fontSize:"150px", fontFamily:"Playfair Display SC", paddingTop:"20px"}}>Andrew Rezk</h1>
      <p style={{ color: "white", marginTop:"200px", fontSize:"50px", fontFamily:"Playfair Display SC"}} >Full Stack Web Developer</p>
      <div class="d-flex align-items-center justify-content-center">
        <a class="social-icon" href="../img/resume.pdf" download="Andrew Rezk Resume" title="Download Resume"><i class="fas fa-download fa-3x px-4"></i></a>
        <a class="social-icon" href="https://www.linkedin.com/in/andrew-rezk-b7145121b/" target="_blank" title="Linkedin"><i class="fa-brands fa-linkedin fa-3x px-4" aria-hidden="true"></i></a>
        <a class="social-icon" href="https://github.com/settings/profile" target="_blank" title="Github Repository"><i class="fab fa-github fa-3x px-4" aria-hidden="true"></i></a>
      </div>
  </div>
  )
}

export default Header