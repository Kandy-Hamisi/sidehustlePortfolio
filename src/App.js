import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import { Route, Routes} from 'react-router-dom'
import Index from './pages/Home/Index';
// import GiftIndex from './pages/Gifts/GiftIndex';

const App = () => {
  return (
    <div>
        <Navbar />
          {/* <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gifts" element={<GiftIndex />} />
          </Routes> */}
          <Index />
        <Footer />
    </div>
  )
}

export default App;
