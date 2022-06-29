import React from 'react';
import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";
import About from "./about";
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home/>} />
              <Route path='projects' element={<Projects/>} />
              <Route path='contact' element={<Contact/>} />
              <Route path='about' element={<About/>} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;