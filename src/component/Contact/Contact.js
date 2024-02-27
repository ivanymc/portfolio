import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './style.css';

const Contact = ({ notifySuccess, notifyError }) => {

  const emailFormRef = useRef(null);
  const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;
  
  const [isLoading, setIsLoading] = useState(false);
  
  const sendEmail = e => {
    e.preventDefault();

    setIsLoading(true);


    emailjs.sendForm(
      YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID,
      emailFormRef.current,
      YOUR_PUBLIC_KEY
    )
      .then( result => {
        console.log(result.text);
        setIsLoading(false);
        notifySuccess();
        emailFormRef.current.reset();
      })
      .catch( error => {
        console.log(error.text);
        setIsLoading(false);
        notifyError();
      });
  }; 

    return (
      <>       
        <span className="anchor" id="contact" />
        <div className="contact container mb-4" data-aos="fade-up" data-aos-delay="50">
          
          <div className="section-title py-3 mt-3">
              <h2> contact </h2>
          </div>          

          <div className="row mt-1">

            <div className="contact-col col-lg-4">
              <div className="info-box my-lg-4">
             
                <div className="contact-email">
                  <a href="mailto:ivanchanymuk@gmail.com" target="_top" rel="noreferrer" title="Email">
                    <i className="bi bi-envelope" />
                  </a>
                  <h4> Email: </h4>
                    <p> ivanchanymuk@gmail.com </p>
                </div>

                <div className="contact-phone">
                  <a href='https://wa.me/447853480901' target="_black" rel="noreferrer" title="Phone">
                    <i className="bi bi-phone" />
                  </a>
                  <h4>Phone / Whatsapp: </h4>
                    <p> 078534 80901 </p>  
                </div>

              </div>

            </div>

            <div className="msg-col col-lg-8 mt-3 mt-lg-0">

              <form className="email-form" ref={ emailFormRef } onSubmit={ sendEmail }>
                <div className="row">
                  <div className="col-md-5 form-group">
                    <input type="text" name="user_name" className="form-control" id="name" placeholder="Name" required />
                  </div>
                  <div className="col-md-7 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="user_email" id="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="user_subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group my-3">
                  <textarea className="form-control" name="user_message" rows="4" placeholder="Message" required />
                </div>
               
                <div className="d-grid text-center">
                  { !isLoading && <button type="submit"> Send Message </button> }
                  { isLoading && <button type="submit"> <div className="spinner-border spinner-border-sm" role="status" /> </button> }
                </div>
              </form>

            </div>
          </div>       
          
        </div>
      </>
     );
}
 
export default Contact;