import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'


// Component
import Hero from './component/Hero/Hero.js';
import Navbar from './component/Navbar/Navbar.js';
import Portfolio from './component/Portfolio/Portfolio.js';
import Contact from './component/Contact/Contact.js';
import Footer from './component/Footer/Footer.js';
import About from './component/About/About.js';


function App() {

  useEffect( () => {
    AOS.init();
    AOS.refresh();
  }, [ ]);

  const notifySuccess = () => toast.success('Message Sent.', {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }); 

  const notifyError = () => toast.error('Error: Please Try Later.', {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (        
    <div className="App">
      
      <ToastContainer
        className="contact-toast"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />

      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact notifySuccess={ notifySuccess } notifyError={ notifyError }  />
      <Footer />
      
    </div>  
  );
}

export default App;
