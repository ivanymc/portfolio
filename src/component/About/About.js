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
                  Senior Full-Stack Engineer with end-to-end ownership of production SaaS platforms, specialising in React, TypeScript, and AWS serverless architecture across frontend, backend API development, and cloud-native systems. I focus on building scalable, production-grade systems that deliver measurable commercial impact, including contributing 5% of total financial requirements and increasing deal conversion by 20% and monthly commissions by 40%.
                </p>

                <p>
                  I led architecture and end-to-end delivery of {' '}
                  <a href="https://financeguru.co.uk" target="_blank" rel="noopener noreferrer">
                    FinanceGuru
                  </a>, 
                  a production business-loan comparison SaaS operating within a regulated financial services environment, owning system design, AWS cloud infrastructure, and full-stack implementation.
                </p>

                <p>
                  Previously, I delivered high-impact frontend systems at Evolok and built reusable, enterprise-grade components that improved user engagement and reduced engineering overhead.
                </p>

                <p>
                  I also build and ship my own products. I founded {' '} 
                  <a href="https://vibeteach.app/" target="_blank" rel="noopener noreferrer">
                    VibeTeach
                  </a>, 
                  an AI-powered SaaS that automates teaching material creation and saves educators up to 10 hours per week. I am currently building a production-focused React Native mobile application. I hold full UK working rights with no sponsorship required.
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