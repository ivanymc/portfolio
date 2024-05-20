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
                  A Full Stack Developer with 2 years’ experience, currently advancing my career in the UK with full working rights.
                </p>                
                <p>
                  During my tenure at Evolok, I played a pivotal role in enhancing the development team’s efficiency and elevating project outcomes. Leveraging my expertise in JavaScript, AngularJS, Bootstrap, and Git, I led the creation and maintenance of innovative widget features, notably spearheading the development of a social signing and linking process. Additionally, I engineered a user-friendly drag-and-drop, multi-column responsive dashboard, empowering clients to effortlessly construct widgets without the need for console coding. My dedication to meticulous web page styling across diverse client projects ensured a seamless and visually appealing user experience, ultimately contributing to heightened client satisfaction and increased user engagement. 
                </p>                
                <p>
                  My achievements at Evolok underscore my ability to drive innovation and deliver impactful results. I am poised to bring this track record of success to your organization, ready to make meaningful contributions to its continued growth and success.
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