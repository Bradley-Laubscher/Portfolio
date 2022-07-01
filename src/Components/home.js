import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Home() {
    return (
      <motion.div 
      className='home-container'
      initial={{ opacity: 0, transition: {type: "fade", duration: 1 }}}
      animate={{ opacity: 1, transition: {type: "fade", duration: 1}}}
      exit={{ x: window.innerWidth, opacity: 0, transition: {type: "fade", duration: 1}}}>
        <h2 className='headings'> Hello!</h2>
        <h1 className='headings'>I'm Bradley Laubscher</h1>
        <button  className='homeButtons button1'><Link to='/about'>Learn more about me</Link></button>
        <button className='homeButtons button2'><Link to='/projects'>View my work</Link></button>
      </motion.div>
    )
  };

export default Home;