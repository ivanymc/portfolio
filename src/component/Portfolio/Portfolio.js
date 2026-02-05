import { useEffect, useRef, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { getMediaPaths } from './portfolioMediaHelper';
import './style.css';


const Portfolio = () => {

	const portfolioRef = useRef(null);
	const [ filter, setFilter ] = useState(null);
	const [ expandedDescriptions, setExpandedDescriptions ] = useState({});

	const SERVER_URL = process.env.REACT_APP_SERVER_URL;
	const { data, isLoading, error } = useFetch(SERVER_URL);


	// Display all projects at the beginning
	useEffect( () => {
		setFilter(data);
	}, [ data ])

	const handleBtnFilter = e => {
		e.preventDefault();

		// Scroll to the fliter
		portfolioRef.current.scrollIntoView({ behavior: 'smooth' });

		// Remove ALL filter-active
		let allFilterButton = document.querySelectorAll('.portfolio-filter button');
		Array.from(allFilterButton).forEach( button => button.classList.remove("filter-active"));

		// Add filter-active to the button you click
		Array.from(allFilterButton)
			.find( activeButton => activeButton.value === e.target.value )
			.classList.add("filter-active");

		// Button value
		let filterButtonValue = e.currentTarget.value;
		if (filterButtonValue === 'all') {
				// Show all
				setFilter(data);
		} else {
				// looking for the project which contain centain skill
				let filteredArray = data.filter( item => (item.skills).includes(filterButtonValue) );
				setFilter(filteredArray);
		}
	};

	const toggleDescription = (projectId) => {
		setExpandedDescriptions(prev => ({
			...prev,
			[projectId]: !prev[projectId]
		}));
	};

	return (
		<>	            
			<span className="anchor" id="portfolio" ref={ portfolioRef } />
			<div className="portfolio container" data-aos="fade-up" data-aos-delay="50">
				<div className="section-title py-3 mt-3">
						<h2> portfolio </h2>
				</div>
				
				<div className="portfolio-filter-col col-12">
						<ul className="portfolio-filter">
							<button className="filter-active" value="all" onClick={ e => handleBtnFilter(e) }>All</button>
							
							<button value="typescript" onClick={ e => handleBtnFilter(e) }> typescript </button>
							<button value="mern" onClick={ e => handleBtnFilter(e) }> mern </button>
							<button value="react" onClick={ e => handleBtnFilter(e) }> react </button>
							<button value="zustand" onClick={ e => handleBtnFilter(e) }> zustand </button>
							<button value="react query" onClick={ e => handleBtnFilter(e) }> react query </button>
							<button value="jest" onClick={ e => handleBtnFilter(e) }> jest </button>
							<button value="tailwindCSS" onClick={ e => handleBtnFilter(e) }> tailwindCSS </button>

							<button value="node.js" onClick={ e => handleBtnFilter(e) }> node.js </button>
							<button value="mongodb" onClick={ e => handleBtnFilter(e) }> mongodb </button>		

							<button value="openai" onClick={ e => handleBtnFilter(e) }> openai </button>

							<button value="stripe" onClick={ e => handleBtnFilter(e) }> stripe </button>


							<div style={{ display: "none" }}>
							<button value="rest api" onClick={ e => handleBtnFilter(e) }> rest api </button>
							<button value="bootstrap" onClick={ e => handleBtnFilter(e) }> bootstrap </button>
							<button value="material ui" onClick={ e => handleBtnFilter(e) }> material ui </button>	
							<button value="express" onClick={ e => handleBtnFilter(e) }> express </button>
								<button value="ejs" onClick={ e => handleBtnFilter(e) }> ejs </button>

								<button value="git" onClick={ e => handleBtnFilter(e) }> git </button>

								<button value="electron" onClick={ e => handleBtnFilter(e) }> electron </button>
							<button value="firebase" onClick={ e => handleBtnFilter(e) }> firebase </button>

								<button value="socket.io" onClick={ e => handleBtnFilter(e) }> socket.io </button>		

								<button value="passport" onClick={ e => handleBtnFilter(e) }> passport </button>		
								<button value="bcrypt" onClick={ e => handleBtnFilter(e) }> bcrypt </button>		
								<button value="jsonwebtoken" onClick={ e => handleBtnFilter(e) }> jsonwebtoken </button>		


								<button value="ffmpeg" onClick={ e => handleBtnFilter(e) }> ffmpeg </button>   
								<button value="video.js" onClick={ e => handleBtnFilter(e) }> video.js </button>  

								<button value="email.js" onClick={ e => handleBtnFilter(e) }> email.js </button>
								<button value="aos" onClick={ e => handleBtnFilter(e) }> aos </button>
								<button value="typed.js" onClick={ e => handleBtnFilter(e) }> typed.js </button>

								<button value="local storage" onClick={ e => handleBtnFilter(e) }> local storage </button>
							</div>					

						</ul>
				</div>

				{ isLoading && <div className="spinner-border spinner-border-sm" role="status" /> }
				{ error && <div> Fail to fetch </div> }

				<div className="portfolio-cards row">				
					
					{ filter && filter.map( (project, index) => {
						return (                
							<div key={ index } id={ project.id } className="portfolio-card-col col-lg-4 col-md-6 col-xs-12 my-2 gx-4" data-aos="zoom-in" data-aos-delay="50">

								<a href={ project.liveURL } target="_blank" rel="noreferrer">
									<div className="portfolio-card card">

										<img src={ getMediaPaths(project.id).img } loading="lazy" alt={ project.description } />
										{ project.video && <div className="hover-message"> Keep hovering to play </div> }

										<div className="project-card-img-overlay card-img-overlay">

											{ project.video && (
												<video muted loop preload="auto"
													className="project-card-video"
													src={ getMediaPaths(project.id).video }
													onMouseOver={ e => e.currentTarget.play() }
													onMouseLeave= { e => e.currentTarget.pause() }
													onError={ e => e.currentTarget.style.display = 'none' }
												/>
											)}

										</div>

									</div>
								</a>

								<div className="portfolio-cards-lowergrid">
									<a href={ project.liveURL } className="col-9" target="_blank" title="Live" rel="noreferrer">
										<div className="project-name"> { project.name } </div>
									</a>

									<div className="project-url col-2 ms-auto me-1">
										<div className="project-live-url me-1">
											<a href={ project.liveURL } target="_blank" title="Live" rel="noreferrer">
												<i className="bi bi-globe2" />
											</a>                                        
										</div>

									{ project.githubURL && 
										<div className="project-github-url mx-1">
											<a href={ project.githubURL } target="_blank" title="Code" rel="noreferrer">
												<i className="bi bi-github" />
											</a>  
										</div>
									}
									</div>
								</div> 	

								<div className="project-description-wrapper">
									<div className={`project-description ${expandedDescriptions[project.id] ? 'expanded' : 'collapsed'}`}>
										{ project.description }
									</div>
									{project.description && project.description.length > 150 && (
										<button
											className="show-more-btn btn-xs"
											onClick={() => toggleDescription(project.id)}
										>
											{expandedDescriptions[project.id] ? 'Show less' : 'Show more'}
										</button>
									)}
								</div>

								<div className="project-skills-col col-12 mb-2">

									{ [...project.skills].sort().map( (skill, index) => (
										<button className="project-skills-used"
											key={ index }
											value={ skill }
											onClick={ e => handleBtnFilter(e) }
										>
											{ skill }
										</button>
									))}

								</div>								

							</div>   
						)
					})}

				</div>
			
			</div>
		</>
	);
}
 
export default Portfolio;