import React from "react";
import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 200, transition: {type: "fade", duration: 1 }}}
        animate={{ opacity: 1, transition: {type: "fade", duration: 1} }}
        exit={{ x: window.innerWidth, opacity: 0, transition: {type: "fade", duration: 1}}}>
            <section className='contact-me'>
                <h2>Contact Me</h2>
                <ul>
                    <li>Email: bradleylaubscher@gmail.com</li>
                    <li>Mobile: 0720647765</li>
                    <li><i className="fab fa-linkedin" title='LinkedIn'></i>: <a href='https://www.linkedin.com/in/bradley-laubscher-408711130' target='_blank' rel="noreferrer">Bradley Laubscher</a></li>
                    <li><i className="fab fa-github-square" title='GitHub'></i>: <a href='https://github.com/Bradley-Laubscher/Portfolio' target='_blank' rel="noreferrer">Bradley-Laubscher</a></li>
                </ul>
            </section>
        </motion.div>
    )
  };

export default Contact;