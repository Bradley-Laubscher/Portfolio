import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home-heading'>
            <h1>Hi, I'm Bradley Laubscher</h1>
            <span className='entry-link'>
              <h2><Link to='/about'>Learn more about me here!</Link></h2>
            </span>
        </div>
    )
  };

export default Home;