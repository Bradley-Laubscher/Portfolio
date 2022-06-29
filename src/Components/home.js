import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Home() {
    return (
      <motion.div 
      className='home-heading'
      initial={{ opacity: 0, transition: {type: "fade", duration: 1 }}}
      animate={{ opacity: 1, transition: {type: "fade", duration: 1}}}
      exit={{ x: window.innerWidth, opacity: 0, transition: {type: "fade", duration: 1}}}>
        <h1>Hi, I'm Bradley Laubscher</h1>
        <span className='entry-link'>
        <h2><Link to='/about'>Learn more about me <u>here!</u></Link></h2>
        </span>
      </motion.div>
    )
  };

export default Home;