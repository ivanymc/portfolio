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
                  Hello!&#128075; I am Ivan.
                </p>
                <p>
                  Full Stack Developer with 3+ years of hands-on experience building scalable, high-impact web applications and serverless cloud systems. I specialise in React, TypeScript, Node.js, AWS, and SQL, and hold full UK working rights.
                </p>                
                <p>
                  At Portman Finance Group, I served as the solo full-stack developer behind FinanceGuru, a business-loan comparison SaaS. I owned the full architecture and implementation, from a React/TypeScript frontend to a serverless AWS backend integrated with Zoho CRM and Sanity CMS. I delivered 6 custom Zoho CRM widgets, contributing to a 20% increase in deals won and a 40% uplift in monthly commissions. Built a serverless analytics pipeline in AWS to process Creditsafe data in real time, cutting response times by 50% and improving reliability for underwriting decisions. 
                </p>                
                <p>
                  At Evolok, I delivered high-impact UI features including social sign-in, social linking, and a drag-and-drop dashboard, raising user engagement by 30% and improving efficiency across multiple clients.
                </p>
                <p>
                  I founded VibeTeach, an AI-powered SaaS that auto-generates teaching materials, including lesson plans, slides, worksheets, and quizzes, helping educators save up to 10 hours per week. I am also developing a React Native mobile app as a personal project.
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