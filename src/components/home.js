import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Home() {
    return (
      <motion.div 
      className='home-container'
      initial={{ opacity: 0, transition: {type: "tween", duration: 1 }}}
      animate={{ opacity: 1, transition: {type: "tween", duration: 1}}}
      exit={{ x: window.innerWidth, opacity: 0, transition: {type: "tween", duration: 1}}}>
        <h2 className='headings'> Hello!</h2>
        <h1 className='headings'>I'm Bradley Laubscher</h1>
        <Link to='/about' className='homeButtons'>Learn more about me</Link>
        <Link to='/projects' className='homeButtons'>View my work</Link>
      </motion.div>
    )
  };

export default Home;