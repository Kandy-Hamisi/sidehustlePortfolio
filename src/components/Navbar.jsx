import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <div className='navbar-section'>
                <div className="navbar-logo">
                    <h1 className="logo-text">Kandy<span>Hamisi</span></h1>
                </div>

                {/* navbar */}
                <nav className="nav">
                    <ul className="menu-nav">
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#education">Education</a>
                        </li>
                        <li>
                            <a href="#connect">Connect</a>
                        </li>
                    </ul>
                </nav>
        </div>
     );
}

export default Navbar;