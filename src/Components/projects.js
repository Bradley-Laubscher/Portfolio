import React from "react";
import { motion } from "framer-motion";

function Projects() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 200, transition: {type: "fade", duration: 1 }}}
        animate={{ opacity: 1, transition: {type: "fade", duration: 1}}}
        exit={{ x: window.innerWidth, opacity: 0, transition: {type: "fade", duration: 1}}}>
            <section className='projects-container'>
                {/* <div className='projects duly-noted'>
                    <p className='project-name'>Duly Noted</p>
                    <button><a href='' target='_blank' rel='noreferrer' >Learn More</a></button>
                </div> */}
                {/* <div className='projects reddit-app'>
                    <p className='project-name'>Reddit-App</p>
                    <button><a href='' target='_blank' rel='noreferrer' >Learn More</a></button>
                </div> */}
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
            </section>
        </motion.div>
    )
  };

export default Projects;