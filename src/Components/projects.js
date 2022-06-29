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
                    <div className='tooltip'>
                        <img src='../Resources/info-2.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>Built using:<br/> JavaScript, React, Redux, Html and CSS</span>
                    </div>
                    <p className='project-name'>Duly Noted</p>
                    <button><a href='' target='_blank' rel='noreferrer' >Visit Site</a></button>
                </div> */}
                {/* <div className='projects reddit-app'>
                    <div className='tooltip'>
                        <img src='../Resources/info-2.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>Built using:<br/> JavaScript, React, Html and CSS</span>
                    </div>
                    <p className='project-name'>Reddit-App</p>
                    <button><a href='' target='_blank' rel='noreferrer' >Visit Site</a></button>
                </div> */}
                <div className='projects top-travel-destinations'>
                    <div className='tooltip'>
                        <img src='../Resources/info-2.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>Built using:<br/> Html and CSS</span>
                    </div>
                    <p className='project-name'>Top Travel Destinations</p>
                    <button><a href='https://bradley-laubscher.github.io/Top-Travel-Destinations/index.html' target='_blank' rel="noreferrer">Visit Site</a></button>
                </div>
                <div className='projects tea-cozy'>
                    <div className='tooltip'>
                        <img src='../Resources/info-2.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>Built using:<br/> Html and CSS</span>
                    </div>
                    <p className='project-name'>Tea Cozy</p>
                    <button><a href='https://bradley-laubscher.github.io/Tea-Cozy/' target='_blank' rel="noreferrer">Visit Site</a></button>
                </div>
                <div className='projects surf-club'>
                    <div className='tooltip'>
                        <img src='../Resources/info-2.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>Built using:<br/> Html and CSS</span>
                    </div>
                    <p className='project-name'>Surf Club</p>
                    <button><a href='https://bradley-laubscher.github.io/Surf-Club/' target='_blank' rel="noreferrer">Visit Site</a></button>
                </div>
            </section>
        </motion.div>
    )
  };

export default Projects;