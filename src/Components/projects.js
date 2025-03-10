import React from "react";
import { motion } from "framer-motion";

function Projects() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 200, transition: {type: "fade", duration: 1 }}}
        animate={{ opacity: 1, transition: {type: "fade", duration: 1}}}
        exit={{ x: window.innerWidth, opacity: 0, transition: {type: "fade", duration: 1}}}>
            <section className='projects-container'>
                <div className='projects sa-surf-spots' style={{backgroundImage: 'url(/Resources/map-of-south-africa.gif)'}}>
                    <div className='tooltip'>
                        <img src='/Resources/info-2.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>A webapp build to display marked popular surf spots on a map of South Africa<br/>Built using:<br/> AngularJS, JavaScript, Html and CSS</span>
                    </div>
                    <p className='project-name'>SA Surf Spots</p>
                    <button><a href='https://sa-surf-spots.vercel.app/' target='_blank' rel="noreferrer">Visit Site</a></button>
                </div>
                <div className='projects duly-noted' style={{backgroundImage: 'url(/Resources/NotePad.jpeg)'}}>
                    <div className='tooltip'>
                        <img src='/Resources/info.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>A notepad webapp which allows the user to take notes, create categories for notes and remove/update/filter notes.<br/>Built using:<br/> JavaScript, React, Redux, Html and CSS</span>
                    </div>
                    <p className='project-name'>Duly Noted</p>
                    <button><a href='https://dulynoted-webapp.netlify.app/' target='_blank' rel='noreferrer' >Visit Site</a></button>
                </div>
                <div className='projects reddit-app' style={{backgroundImage: 'url(/Resources/RedditLogo.jpg)'}}>
                    <div className='tooltip'>
                        <img src='/Resources/info-2.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>A webapp used to search Reddits database and display articles which match the search.<br/>Built using:<br/> JavaScript, React, Html and CSS</span>
                    </div>                   
                    <p className='project-name'>Reddit Minimal</p>
                    <button><a href='https://redditminimalproject.netlify.app/' target='_blank' rel='noreferrer' >Visit Site</a></button>
                </div>
                <div className='projects top-travel-destinations' style={{backgroundImage: 'url(/Resources/Travel.jpg)'}}>
                    <div className='tooltip'>
                        <img src='/Resources/info-2.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>A website providing information on top travel destination around the world and a few tips for traveling.<br/>Built using:<br/> Next.js, React, Javascript, JSX and CSS</span>
                    </div>
                    <p className='project-name'>Top Travel Destinations</p>
                    <button><a href='https://top-travel-destinations.vercel.app/' target='_blank' rel="noreferrer">Visit Site</a></button>
                </div>
                <div className='projects tea-cozy' style={{backgroundImage: 'url(/Resources/organic\\ tea.jpg)'}}>
                    <div className='tooltip'>
                        <img src='/Resources/info-2.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>A homepage for a tea store advertising their products, location and contact info.<br/>Built using:<br/> Html and CSS</span>
                    </div>
                    <p className='project-name'>Tea Cozy</p>
                    <button><a href='https://bradley-laubscher.github.io/Tea-Cozy/' target='_blank' rel="noreferrer">Visit Site</a></button>
                </div>
                <div className='projects surf-club' style={{backgroundImage: 'url(/Resources/Surf-boards.jpg)'}}>
                    <div className='tooltip'>
                        <img src='/Resources/info.png' alt='more information icon' className='infoIcon'></img>
                        <span className='tooltiptext'>A homepage for a surf club advertising their purpose and displaying a few images to entice surfers to join.<br/>Built using:<br/> Html and CSS</span>
                    </div>
                    <p className='project-name'>Surf Club</p>
                    <button><a href='https://bradley-laubscher.github.io/Surf-Club/' target='_blank' rel="noreferrer">Visit Site</a></button>
                </div>
                
            </section>
        </motion.div>
    )
  };

export default Projects;