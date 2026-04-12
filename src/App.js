import { Link }  from 'react-router-dom';
import './styling/about.css';
import './styling/contact.css';
import './styling/home.css';
import './styling/projects.css';
import './styling/shared.css';
import AnimatedRoutes from "./components/animatedRoutes";
import BlurImage from './components/blurImage';

function App() {
  return (
    <div>
      <div>
        <BlurImage 
          className="backgroundImage"
          src='./Resources/laptop.jpg'
          base64='./Resources/laptop-small.jpg'
          alt='laptop open in the dark'
        />
        <section className='background'>
          <nav>
            <span className='logo1'>
              <Link to='/'><img src="../Resources/house.png" alt="House icon" /></Link>
            </span>
            <Link to='/about' className='navLinks'>About Me</Link>
            <Link to='/projects' className='navLinks'>Projects</Link>
            <Link to='/contact' className='navLinks'>Contact</Link>
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
