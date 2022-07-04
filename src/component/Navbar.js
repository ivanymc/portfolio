
const Navbar = () => {
    return ( 
        <nav id="navbar" className="navbar navbar-expand-md fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                     
                <ul className="navbar-nav flex-row">                        
                    <li> <a href="#home" className="nav-link mx-2 "> Home </a> </li>
                    <li> <a href="#portfolio" className="nav-link mx-2 "> Portfolio </a> </li>
                    { /* 
                    <li> <a href="#about" className="nav-link mx-2 "> About </a> </li>
                    */}
                    <li> <a href="#contact" className="nav-link mx-2 me-2 "> Contact </a> </li>
                </ul>
                <ul className="navbar-nav ms-auto"> 
                    <li> <a href="https://github.com/ivanymc" target="_blank" rel="noreferrer"> <i className="bi bi-github mx-2"></i> </a> </li>
                </ul>

                { /*
                <button className="navbar-toggler mb-2 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
                    <span className="navbar-toggler-icon"></span>
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