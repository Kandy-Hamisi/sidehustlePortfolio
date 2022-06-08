import React from 'react';
import './App.css';
import Connect from './components/Connect';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import OtherProjects from './components/OtherProjects';
// import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Index from './pages/Home/Index';
import GiftIndex from './pages/Gifts/GiftIndex';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gifts" element={<GiftIndex />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
