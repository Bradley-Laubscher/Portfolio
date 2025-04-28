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
        
        <a
          href="https://next-up-8qce.onrender.com"
          target="_blank"
          rel="noreferrer"
          className="projects"
          style={{ backgroundImage: 'url(/Resources/NextUp.png)' }}
        >
          <div className="tooltip">
            <img src="/Resources/info.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              A game tracking tool with notifications regarding updates and sales. Makes use of the IGDB(Twitch) and Steam API for the gathering of game information.<br /><br />Built using:<br /> .NET/c#
            </span>
          </div>
          <p className="project-name">NextUp</p>
        </a>

        <a
          href="https://surfspot.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="projects"
          style={{ backgroundImage: 'url(/Resources/Surfboards.jpg)'}}
        >
          <div className="tooltip">
            <img src="/Resources/info.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              An application displaying surf conditions for some of Cape Town's local spots and notifying subscribers when the conditions are good. Making use of the Open-Meteo marine API.<br /><br />Built using:<br /> Dart and Flutter
            </span>
          </div>
          <p className="project-name">Surf Spot</p>
        </a>

        <a
          href="https://bradley-laubscher.github.io/marketplace/"
          target="_blank"
          rel="noreferrer"
          className="projects"
          style={{ backgroundImage: 'url(/Resources/Marketplace.jpg)' }}
        >
          <div className="tooltip">
            <img src="/Resources/info.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              A dynamic marketplace for multiple merchant types.<br /><br />Built using:<br /> Dart and Flutter
            </span>
          </div>
          <p className="project-name">Marketplace</p>
        </a>

        <a
          href="https://dulynoted-webapp.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="projects"
          style={{ backgroundImage: 'url(/Resources/NotePad.jpeg)' }}
        >
          <div className="tooltip">
            <img src="/Resources/info.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              A notepad webapp that allows the user to take notes, create categories for notes, and remove/update/filter notes.<br /><br />Built using:<br /> JavaScript, React, Redux, Html, and CSS
            </span>
          </div>
          <p className="project-name">Duly Noted</p>
        </a>

        <a
          href="https://redditminimalproject.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="projects"
          style={{ backgroundImage: 'url(/Resources/RedditLogo.jpg)' }}
        >
          <div className="tooltip">
            <img src="/Resources/info.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              A webapp used to search Reddit's database and display articles that match the search.<br /><br />Built using:<br /> JavaScript, React, Html, and CSS
            </span>
          </div>
          <p className="project-name">Reddit Minimal</p>
        </a>

        <a
          href="https://top-travel-destinations.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="projects"
          style={{ backgroundImage: 'url(/Resources/Travel.jpg)' }}
        >
          <div className="tooltip">
            <img src="/Resources/info.png" alt="more information icon" className="infoIcon" />
            <span className="tooltiptext">
              A website providing information on top travel destinations around the world and a few tips for traveling.<br /><br />Built using:<br /> Next.js, React, Javascript, JSX, and CSS
            </span>
          </div>
          <p className="project-name">Top Travel Destinations</p>
        </a>

      </section>
    </motion.div>
  );
}

export default Projects;