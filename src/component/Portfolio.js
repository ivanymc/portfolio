import { useState } from 'react';
import todoListImg from '../asset/todolist.gif';
import videoplayerImg from '../asset/videoplayer.gif';
import hikinghkImg from '../asset/hiking.hk.gif';
import reactblogImg from '../asset/reactblog.gif';
import portfolioImg from '../asset/portfoilo.gif';



const Portfolio = () => {

    const projects = [ {
        id: "project0",
        name: "Todo List",        
        description: "CRUD Todo List with Local Storage.",
        img: todoListImg,
        liveURL: "https://ivanymc.github.io/ToDo-List/",
        githubURL: "https://github.com/ivanymc/ToDo-List",
        skills: ["localStorage"],
    }, {
        id: "project1",
        name: "HTML5 Video Player",        
        description: "HTML5 Video Player which can play multiple text track and audio track.",
        img: videoplayerImg,
        liveURL: "https://ivanymc.github.io/videoPlayer/",
        githubURL: "https://github.com/ivanymc/videoPlayer",
        skills: ["bootstrap", "videojs", "ffmpeg"],
    }, {
        id: "project2",
        name: "Hiking.hk",        
        description: "Hiking information website with shopping-cart demo, chat-box demo and Local Storage.",
        img: hikinghkImg,
        liveURL: "https://ivanymc.github.io/hiking.hk-website/",
        githubURL: "https://github.com/ivanymc/hiking.hk-website",
        skills: ["bootstrap", "localStorage"],
    }, {
        id: "project3",
        name: "Simple Blog",        
        description: "Simple CRUD Blog bulit by React and fetch data from fake REST API.",
        img: reactblogImg,
        liveURL: "https://github.com/ivanymc/react-blog",
        githubURL: "https://github.com/ivanymc/react-blog",
        skills: ["react", "bootstrap", "restApi"],
    }, {
        id: "project4",
        name: "Portfolio",        
        description: "Portfolio website bulit by React, AOS and Typed.js",
        img: portfolioImg,
        liveURL: "/",
        githubURL: "",
        skills: ["react", "bootstrap", "aos", "typedjs"],
    } ];


    const [ filter, setFilter ] = useState(projects);
    
    const handleBtnFilter = e => {
        e.preventDefault();

        // Remove ALL filter-active
        let allFilterButton = document.querySelectorAll('.portfolio-filter button');      
        Array.from(allFilterButton).forEach( button => button.classList.remove("filter-active"));

        // Add filter-active to the button you click
        e.target.classList.add("filter-active");

        // Button value        
        let filterButtonValue = e.target.value;              
        
        if (filterButtonValue === 'all') {
            // Show all  
            setFilter(projects);

        } else {
            // looking for the project which contain centain skill
            let filteredArray = projects.filter( item => (item.skills).includes(filterButtonValue) );
            setFilter(filteredArray);
        }
    }


    return (               
    
        <div className="portfolio container">
            <span className="anchor" id="portfolio" />

            <div className="section-title pb-3">
                <h2> portfolio </h2>
            </div>
            
            <div className="portfolio-filter-col col-12">
                <ul className="portfolio-filter">
                    <button className="filter-active" value="all" onClick={ e => handleBtnFilter(e) }>All</button>
                    <button value="react" onClick={ (e) => handleBtnFilter(e) }> react </button>
                    <button value="bootstrap" onClick={ e => handleBtnFilter(e) }> bootstrap </button>
                    <button value="restApi" onClick={ e => handleBtnFilter(e) }> rest Api </button>

                    <button value="ffmpeg" onClick={ e => handleBtnFilter(e) }> ffmpeg </button>   
                    <button value="videojs" onClick={ e => handleBtnFilter(e) }> video.js </button>          
                    <button value="aos" onClick={ e => handleBtnFilter(e) }> aos </button>
                    <button value="typedjs" onClick={ e => handleBtnFilter(e) }> typedjs </button>

                    <button value="localStorage" onClick={ e => handleBtnFilter(e) }> local Storage </button>
                </ul>
            </div>

            <div className="portfolio-cards row">
                
                { filter.map( project => (                
                    <div key={ project.id } id={ project.id } className="portfolio-card-col col-lg-6 col-sm-12 my-2" data-aos="fade-right">
                        <div className="portfolio-card card">
                            <img className='project-card-img card-img' src={ project.img } alt="Project" title="Project" />

                            <div className="project-card-img-overlay card-img-overlay">
                                <h3 className="project-name "> { project.name } </h3>
                                <div className="project-description mb-auto"> {project.description} </div>
                                <div className="project-skills-used">
                                                                        
                                    { project.skills.join(" , ") } 
                                </div> 

                                <div className="project-url mt-auto row">
                                    <div className="project-live-url col">
                                        <a href={ project.liveURL } target="_blank" rel="noreferrer" title="Website">
                                            <i className="bi bi-globe"></i>
                                        </a>                                        
                                        </div>
                                    <div className="project-github-url col">
                                        <a href={ project.githubURL } target="_blank" rel="noreferrer" title="Code">
                                            <i className="bi bi-github" />
                                        </a>  
                                    </div>
                                </div>                                 
                            </div>
                        </div>                      
                    </div>   
                ))}
            </div>
        
        </div>
    );
}
 
export default Portfolio;