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
                  Full-Stack Engineer with end-to-end ownership of production SaaS platforms, specialising in React, TypeScript, and AWS serverless architecture. I have a proven track record of delivering clear commercial impact, including a 5% contribution to total financial requirements, a 20% increase in deal conversion, and a 40% uplift in monthly commissions through scalable, production-grade systems.
                </p>

                <p>
                  Led delivery, system architecture, and cloud infrastructure for
                  <a href="https://financeguru.co.uk" target="_blank" rel="noopener noreferrer">
                    FinanceGuru
                  </a>,
                  a business-loan comparison SaaS operating within a regulated financial services environment. As the sole engineer, I owned full-stack development, platform reliability, and cross-functional collaboration, significantly improving underwriting speed and operational efficiency.
                </p>

                <p>
                  Previously at Evolok, I delivered high-impact, reusable frontend systems and a drag-and-drop dashboard used across enterprise clients, improving user engagement while reducing ongoing engineering effort.
                </p>

                <p>
                  Alongside my professional work, I build and ship my own products. I founded
                  <a href="https://vibeteach.app/" target="_blank" rel="noopener noreferrer">
                    VibeTeach
                  </a>,
                  an AI-powered SaaS that automates teaching material creation and saves educators up to 10 hours per week. I am also developing a production-focused React Native mobile application. I hold full UK working rights with no sponsorship required.
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