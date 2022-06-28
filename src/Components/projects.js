import React from "react";

function Projects() {
    return (
        <div>
            <main id="swup" classNameName="transition-fade">
                <section className='projects-container'>
                    <div className='projects top-travel-destinations'>
                        <p className='project-name'>Top Travel Destinations</p>
                        <button><a href='https://bradley-laubscher.github.io/Top-Travel-Destinations/index.html' target='_blank' rel="noreferrer">Learn More</a></button>
                    </div>
                    <div className='projects tea-cozy'>
                        <p className='project-name'>Tea Cozy</p>
                        <button><a href='https://bradley-laubscher.github.io/Tea-Cozy/' target='_blank' rel="noreferrer">Learn More</a></button>
                    </div>
                    <div className='projects surf-club'>
                        <p className='project-name'>Surf Club</p>
                        <button><a href='https://bradley-laubscher.github.io/Surf-Club/' target='_blank' rel="noreferrer">Learn More</a></button>
                    </div>
                    <div className='projects top-travel-destinations'>
                        <p className='project-name'>Top Travel Destinations</p>
                        <button>Learn More</button>
                    </div>
                </section>
            </main>
        </div>
    )
  };

export default Projects;