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
                  A self-motivated Web Developer and former teacher from Hong Kong, excited to build a new career path in the UK. 
                </p>                
                <p>
                  I have dedicated myself to learning modern Frontend Frameworks and Backend languages, after acquiring the basics of HTML, CSS, and JavaScript through my Certificate in Frontend Web Developing. I have also developed multiple projects with MERN, React, Node.js, Express, MongoDB, JavaScript, Bootstrap and Material UI. 
                </p>                
                <p>
                  Recent experience has enabled an understanding of the latest tech stacks and advanced my problem-solving and communication skills.
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