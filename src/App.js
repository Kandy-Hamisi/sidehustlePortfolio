import React from 'react';
import './App.css';
import Connect from './components/Connect';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OtherProjects from './components/OtherProjects';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <OtherProjects />
      <Connect />
      <Footer />
    </div>
  )
}

export default App;
