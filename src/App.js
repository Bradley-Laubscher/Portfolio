import React from "react";
import { Link }  from 'react-router-dom';
import './Styling/about.css';
import './Styling/contact.css';
import './Styling/home.css';
import './Styling/projects.css';
import './Styling/shared.css';
import AnimatedRoutes from "./Components/animatedRoutes";

function App() {
  return (
    <div>
      <div>
        <section className='background'>
          <nav>
            <span className='logo1'>
              <Link to='/'><img src="../Resources/house.png" alt="Star with a cirlce around it" /></Link>
            </span>
            <Link to='/about' className='navLinks'>About Me</Link>
            <Link to='/projects' className='navLinks'>Projects</Link>
            <Link to='/contact' className='navLinks'>Contact</Link>
            <span className='logo2'>
              <Link to='/'><img src="../Resources/house.png" alt="Star with a cirlce around it" /></Link>
            </span>
          </nav>
        </section>
      </div>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </div> 
  );
}

export default App;
