import { motion } from "framer-motion";
import { SiCsharp, SiDart, SiDotnet, SiFlutter, SiRedux } from "react-icons/si";

function About() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 200, transition: {type: "tween", duration: 1 }}}
        animate={{ opacity: 1, transition: {type: "tween", duration: 1} }}
        exit={{ x: window.innerWidth, opacity: 0, transition: {type: "tween", duration: 1}}}> 
            <section className='about-me-section'>
                <h2>About Me</h2>
                <p> Software Engineer with 3+ years of experience in the FinTech industry, specializing in .NET-based systems and cross-platform application development.
                    Experienced in building, maintaining, and enhancing scalable web, desktop, and mobile applications. Strong focus on clean architecture, maintainable code, and
                    delivering reliable production-ready solutions. Comfortable working across full-stack environments with particular strength in C#, .NET, and Flutter.
                </p>
                <p>I thrive on new challenges and am passionate about creating user-centric applications.
                    I am driven to apply my skills while constantly learning and innovating.
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
                    <i className="fab"><SiCsharp title="C#" /></i>
                    <i className="fab"><SiDotnet title=".NET" /></i>
                    <i className="fab"><SiDart title="Dart" /></i>
                    <i className="fab"><SiFlutter title="Flutter" /></i>
                    </div>
            </section>
        </motion.div>
    )
  };

export default About;