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
                  A self-motivated Web Developer from Hong Kong, now carving a career path in the UK with the right to work.
                </p>                
                <p>
                  Proficient in modern Frontend Frameworks while staying updated with the latest technologies. My journey began with the acquisition of foundational knowledge through a Certificate in Frontend Web Development, and I have since developed multiple projects utilizing MERN, React, Node.js, Express, MongoDB, JavaScript, Bootstrap, and Material UI.
                </p>                
                <p>
                  During my tenure at Evolok, I contributed to the development team, leveraging JavaScript, AngularJS, Bootstrap, and Git. My contributions include spearheading the creation and maintenance of new widget features such as new social signing and linking process. Additionally, I developed and maintained a drag-and-drop, multi-column responsive dashboard, enabling clients to build widgets without coding in the console. Moreover, I meticulously styled web pages across diverse client projects, ensuring a cohesive and visually appealing user experience.
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