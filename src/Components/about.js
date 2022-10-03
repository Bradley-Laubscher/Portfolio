import React from "react";
import { motion } from "framer-motion";
import { SiRedux } from "react-icons/si";
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
                <p> I am a self-taught developer, pursuing a career within the field of software development. 
                    I thoroughly enjoy solving problems and working on challenging tasks which led me to the field of software development. 
                    What started as an experiment, building basic static websites and completing simple coding challenges has turned into
                    an ever-growing passion for software development.
                </p>
                <p> From the moment I took on the task of learning software development I knew I was hooked, building my first static website, 
                    resolving issues, and eventually achieving my goals and experiencing the satisfaction of my accomplishments.
                    I look forward to expanding my knowledge within the field while building a career which I am proud of.
                </p>
                <p> I am sure the path ahead will involve winding roads, gruelling challenges,  as well as many error messages, however, I am keen to take 
                    on those challenges in search of the growth and eureka moments which follow.</p>
                    <h2 id='skills'>Skills</h2>
                    <div className='skills-list'>
                        <i className="fab fa-html5" title='Html'></i>
                        <i className="fab fa-css3-alt" title='CSS'></i>
                        <i className="fab fa-js" title='JavaScript'></i>
                        <i className="fab fa-react" title='React'></i>
                        <i className="fab"><SiRedux title='Redux' /></i>
                        <i className="fab fa-git" title='Git'></i>
                        <i className="fab fa-github" title='GitHub'></i>
                        <i className="fab fa-chrome" title='Chrome'></i>
                        <i className="fas fa-terminal" title='Terminal'></i>
                        <i className="fab"><FaAngular title='AngularJS'/></i>
                        <i className="fab"><SiNextdotjs title='Next.js'/></i>
                    </div>
            </section>
        </motion.div>
    )
  };

export default About;