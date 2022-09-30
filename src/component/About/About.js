import './style.css'
import heroImg from '../../asset/heroimg.png'

const About = () => {
  return ( 
    <>    
      <span className="anchor" id="about" />
      <div className="about container" data-aos="fade-up" data-aos-delay="50">
        
        <div className="section-title pb-3 mt-5">
            <h2> about </h2>
        </div>

        <div className="about-container" >

          <div className="row">
            <div className="col-lg-4">
              <img src={ heroImg } loading="lazy" alt="Ivan Chan" />
            </div>

            <div className="col-lg-8 pt-4 pt-lg-0 gx-5 gx-lg-2">              
              <div className="about-text">
                <p>
                  Hello!&#128075; I am Ivan Chan.
                </p>
                <p>
                  A self-motivated Web Developer and former teacher from Hong Kong, dedicated to have a new career path in UK.
                </p>                
                <p>
                  I tirelessly learn by myself the modern Frontend Framework and Backend language after acquiring the basics of HTML, CSS and JavaScript from the Certificate in Frontend Web Developer. I also developed multiple projects with MERN, React, Node.js, Express, MongoDB, JavaScript, Bootstrap and Material UI etc. which has proven myself as an autodidact and fast learner.
                </p>                
                <p>
                  Besides, having worked in an IT company enabled me to get in touch with the latest tech stacks and advanced my problem-solving skills and communication skills.
                </p>
                  
              </div>

            </div>
          </div>

        
        
        </div>

          
      </div>
    </> 
  );
}
 
export default About;