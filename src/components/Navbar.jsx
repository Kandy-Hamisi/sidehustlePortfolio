import React from 'react';
// import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
   

    return ( 
        <div className='navbar-section'>
                <div className="navbar-logo">
                    <h1 className="logo-text">Kandy<span>Hamisi</span></h1>
                </div>

                <div className="hamburger-menu">
                    <figure>
                        <AiOutlineMenu className='hamburger-btn'/>
                    </figure>
                </div>

                {/* navbar */}
                <nav className="nav">
                    <ul className="menu-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to={''}>Experience</Link>
                        </li>
                        <li>
                            <a href="#education">Education</a>
                        </li>
                        <li>
                            <a href="#education">Projects</a>
                        </li>
                        <li>
                            <Link to="/gifts">Gifts</Link>
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