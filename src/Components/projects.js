import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, transition: { type: "fade", duration: 1 } }}
      animate={{ opacity: 1, transition: { type: "fade", duration: 1 } }}
      exit={{
        x: window.innerWidth,
        opacity: 0,
        transition: { type: "fade", duration: 1 },
      }}
    >
      <section className="projects-container">
        <div className="projects" style={{ backgroundImage: 'url(/Resources/Marketplace.jpg)' }}>
          <div className="tooltip">
            <img src="/Resources/info-2.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              A dynamic marketplace for multiple merchant types.<br />Built using:<br /> Dart and Flutter
            </span>
          </div>
          <p className="project-name">Marketplace</p>
          <button className="visit-btn">
            <a href="https://bradley-laubscher.github.io/marketplace/" target="_blank" rel="noreferrer">
              Visit
            </a>
          </button>
        </div>
        <div className="projects" style={{ backgroundImage: 'url(/Resources/map-of-south-africa.gif)' }}>
          <div className="tooltip">
            <img src="/Resources/info-2.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
            An application displaying surf conditions for some of Cape Towns local spots. Making use of the Open-Meteo marine API.<br />Built using:<br /> Dart and Flutter
            </span>
          </div>
          <p className="project-name">Surf Spot</p>
          <button className="visit-btn">
            <a href="https://bradley-laubscher.github.io/surfspot/" target="_blank" rel="noreferrer">
              Visit
            </a>
          </button>
        </div>
        <div className="projects" style={{ backgroundImage: 'url(/Resources/NotePad.jpeg)' }}>
          <div className="tooltip">
            <img src="/Resources/info.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              A notepad webapp that allows the user to take notes, create categories for notes, and remove/update/filter
              notes.<br />Built using:<br /> JavaScript, React, Redux, Html, and CSS
            </span>
          </div>
          <p className="project-name">Duly Noted</p>
          <button className="visit-btn">
            <a href="https://dulynoted-webapp.netlify.app/" target="_blank" rel="noreferrer">
              Visit
            </a>
          </button>
        </div>
        <div className="projects" style={{ backgroundImage: 'url(/Resources/RedditLogo.jpg)' }}>
          <div className="tooltip">
            <img src="/Resources/info-2.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              A webapp used to search Reddit's database and display articles that match the search.<br />Built using:<br />
              JavaScript, React, Html, and CSS
            </span>
          </div>
          <p className="project-name">Reddit Minimal</p>
          <button className="visit-btn">
            <a href="https://redditminimalproject.netlify.app/" target="_blank" rel="noreferrer">
              Visit
            </a>
          </button>
        </div>
        <div className="projects" style={{ backgroundImage: 'url(/Resources/Travel.jpg)' }}>
          <div className="tooltip">
            <img src="/Resources/info-2.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              A website providing information on top travel destinations around the world and a few tips for
              traveling.<br />Built using:<br /> Next.js, React, Javascript, JSX, and CSS
            </span>
          </div>
          <p className="project-name">Top Travel Destinations</p>
          <button className="visit-btn">
            <a href="https://top-travel-destinations.vercel.app/" target="_blank" rel="noreferrer">
              Visit
            </a>
          </button>
        </div>
        <div className="projects" style={{ backgroundImage: 'url(/Resources/Surf-boards.jpg)' }}>
          <div className="tooltip">
            <img src="/Resources/info.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              A homepage for a surf club advertising their purpose and displaying a few images to entice surfers to
              join.<br />Built using:<br /> Html and CSS
            </span>
          </div>
          <p className="project-name">Surf Club</p>
          <button className="visit-btn">
            <a href="https://bradley-laubscher.github.io/Surf-Club/" target="_blank" rel="noreferrer">
              Visit
            </a>
          </button>
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;