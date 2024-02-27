import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';
import './style.css'

// Assets
import CV from '../../asset/Resume.docx';

const Hero = () => {
  
  const typedRef = useRef(null);

  useEffect( () => {
    
    const typed = new Typed( typedRef.current , {
      strings: ["Front-end Web Developer.", "Teacher."],
      loop: true,
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 2000,            
    });
    return () => { typed.destroy(); }
  }, [ ]) 
     
  
  return ( 
    <>    
      <span className="anchor" id="home" />
      <div className="hero-home">        
        <div className="hero-container">
          

          <h1 className='hero-name'>Ivan Chan</h1>

          <div className='hero-job-typed'>
            <span> Hello! I'm a </span>
            <span className="hero-job-title" ref={ typedRef } /> 
          </div>

          <a className="hero-cv-button btn btn-primary"
            role="button" 
            href={ CV }
            download="Ivan Chan's CV"
            title="Download CV">
            Download CV 
          </a>

          <a href="#portfolio" className="hero-scroll-down-button" title="See My Work"> 
            <i className="bi bi-chevron-double-down" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;