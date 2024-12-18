import React from "react";
import { motion } from "framer-motion";
import { SiDart, SiFlutter, SiRedux } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

function About() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 200, transition: {type: "fade", duration: 1 }}}
        animate={{ opacity: 1, transition: {type: "fade", duration: 1} }}
        exit={{ x: window.innerWidth, opacity: 0, transition: {type: "fade", duration: 1}}}> 
            <section className='about-me-section'>
                <h2>About Me</h2>
                <p> Self-taught Software Engineer with two years of experience in the FinTech industry, specializing in both front-end 
                    and back-end development, with a stronger focus on front-end technologies.
                </p>
                <p>I thrive on new challenges and am passionate about creating user-centric applications that enhance user experience. 
                    Eager to leverage my skills in a dynamic environment, I am committed to continuous learning and innovation. 
                </p>
                    <h2 id='skills'>Skills</h2>
                    <div className='skills-list'>
                    <i className="fab fa-html5" title="Html"></i>
                    <i className="fab fa-css3-alt" title="CSS"></i>
                    <i className="fab fa-js" title="JavaScript"></i>
                    <i className="fab fa-react" title="React"></i>
                    <i className="fab"><SiRedux title="Redux" /></i>
                    <i className="fab fa-git" title="Git"></i>
                    <i className="fab fa-github" title="GitHub"></i>
                    <i className="fab fa-chrome" title="Chrome"></i>
                    <i className="fas fa-terminal" title="Terminal"></i>
                    <i className="fab"><FaAngular title="AngularJS" /></i>
                    <i className="fab"><SiNextdotjs title="Next.js" /></i>
                    <i className="fab"><SiDart title="Dart" /></i>
                    <i className="fab"><SiFlutter title="Flutter" /></i>
                    </div>
            </section>
        </motion.div>
    )
  };

export default About;