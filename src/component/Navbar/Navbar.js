import { useEffect, useRef} from 'react';
import './style.css'


const Navbar = () => {

  const navRef = useRef(null);

  useEffect( () => {
     window.addEventListener("scroll", () => {
      window.scrollY > navRef.current.offsetHeight + 500
      ? navRef.current.classList.remove("nav-transparent")
      : navRef.current.classList.add("nav-transparent") 
    })
  }, [ ]);
   
  
  return ( 
    <nav ref={ navRef } className="navbar navbar-expand-sm fixed-top nav-transparent" >
      <div className="container d-flex align-items-center justify-content-between ">

        <ul className="navbar-nav flex-row">                        
          <li> <a href="#home" className="nav-link"> Home </a> </li>
          <li> <a href="#portfolio" className="nav-link"> Portfolio </a> </li>
          <li> <a href="#about" className="nav-link"> About </a> </li>
          <li> <a href="#contact" className="nav-link"> Contact </a> </li>
        </ul>

        <ul className="navbar-nav flex-row ms-auto"> 
          <li> <a href="https://www.linkedin.com/in/ivanchanuk/" title='Linkedin' target="_blank" rel="noreferrer"> <i className="bi bi-linkedin" /> </a> </li>
          <li> <a href="https://github.com/ivanymc" title='Github' target="_blank" rel="noreferrer"> <i className="bi bi-github " /> </a> </li>
        </ul>


        { /*

        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
          <i className="bi bi-list mobile-nav-toggle" />
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">                   
            <ul className="navbar-nav ms-auto">                        
                <li> <a href="https://github.com/ivanymc" target="_blank" rel="noreferrer"> <i className="bi bi-github mx-2"></i> </a> </li>
                
                <li> <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"> <i className="bi bi-linkedin mx-2"></i> </a> </li>
                <li> <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> <i className="bi bi-facebook mx-2"></i> </a> </li>
                <li> <a href="https://www.twitter.com" target="_blank" rel="noreferrer"> <i className="bi bi-twitter mx-2"></i> </a> </li>                     
            </ul>
        </div>
        */ }

      </div>
    </nav>
  );
}
 
export default Navbar;