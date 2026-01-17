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
                  Senior-leaning Full-Stack Engineer with end-to-end ownership of production SaaS platforms, specialising in React, TypeScript, Node.js and AWS cloud architecture. I hold full UK working rights.
                </p>

                <p>
                  Currently the sole engineer behind 
                  <a href="https://financeguru.co.uk" target="_blank" rel="noopener noreferrer">FinanceGuru</a>, 
                  a business-loan comparison SaaS, where I am responsible for system architecture, cloud infrastructure and feature delivery across a React/TypeScript frontend and a serverless AWS backend integrated with Zoho CRM and Sanity CMS. My work has directly driven measurable commercial impact, including a 20% increase in deals won, a 40% uplift in monthly commissions, and a 50% reduction in underwriting response times through a real-time AWS data pipeline.
                </p>

                <p>
                  Previously at Evolok, I delivered reusable UI systems and a drag-and-drop dashboard used across enterprise clients, improving engagement by 30% while reducing ongoing engineering effort.
                </p>

                <p>
                  Alongside this, I build and ship my own products, including 
                  <a href="https://vibeteach.app/" target="_blank" rel="noopener noreferrer">VibeTeach</a>, 
                  an AI-powered SaaS that auto-generates teaching materials in one click, helping educators save up to 10 hours per week. I am currently developing a production-focused React Native mobile app.
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