import { useEffect } from 'react';
import AOS from '../node_modules/aos/dist/aos.js';
import '../node_modules/aos/dist/aos.css';

import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact.js';



function App() {
  useEffect( () => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (        
      <div className="App">
        <Navbar />
        <Hero />
        <Portfolio />
        <Contact />
        
      </div>  
  );
}

export default App;
