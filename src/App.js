import React from "react";
import { Routes, Route, Link}  from 'react-router-dom';
import Home from "./Components/home";
import Projects from "./Components/projects";
import Contact from "./Components/contact";
import About from "./Components/about";
import './Styling/about.css';
import './Styling/contact.css';
import './Styling/home.css';
import './Styling/projects.css';
import './Styling/shared.css';

function App() {
  return (
    <div>
      <div>
        <section className='background'>
          <header>
            <nav>
              <span className='logo1'><Link to='/'><img src="../Resources/Four Point Star.png" alt="Star with a cirlce around it" /></Link></span>
              <Link to='/about'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
              <span className='logo1'><Link to='/'><img src="../Resources/Four Point Star.png" alt="Star with a cirlce around it" /></Link></span>
            </nav>
          </header>
        </section>
      </div>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='projects' element={<Projects/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='about' element={<About/>} />
          </Routes>
      </div>
    </div> 
  );
}

export default App;
