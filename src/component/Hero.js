import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import heroImg from '../asset/heroimg.png';
import CV from '../asset/Resume.pdf';

const Hero = () => {

    let typed = useRef(null);

    useEffect( () => {
        typed.current = new Typed( document.querySelector('.hero-job-title') , {
            strings: ["Teacher.", "Front-end Developer."],
            loop: true,
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 2000,            
        });
        return () => { typed.current.destroy(); }
    }, [ ])      
    
    return ( 
        <div className="hero-home container" data-aos="fade-right">
            <span className="anchor" id="home" />

            <div className="hero-content-row row">
                <div className="hero-img-col col-lg-4 col-sm-12">
                    <img className='hero-img' src={ heroImg } alt="propic" title="Profile Picture" /> 
                </div>

                <div className="hero-details-col col-lg-8 col-sm-12">
                    <div className="hero-job-typed"> Hello! I'm </div>
                    <h1 className="hero-name"> Ivan Chan </h1>
                    <div className="hero-job-typed"> A <span className="hero-job-title" ref={ typed }> </span> </div>
                    <a className="hero-cv-button btn btn-secondary py-3 mt-5 mb-3"
                        role="button" 
                        href={ CV }
                        download="Ivan Chan's Resume"
                        title="Download CV">
                        Download CV 
                    </a>
                </div>  

                <div className="hero-scroll-down-col col-lg-12 col-sm-12">
                    <a href="#portfolio" className="hero-scroll-down-button" title="See More">
                        <i className="bi bi-chevron-double-down"></i>
                    </a>
                </div>                  
            </div>
                     
        </div>
    );
}
 
export default Hero;