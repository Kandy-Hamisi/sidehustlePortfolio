import React from 'react';
import { ExternalLink } from 'react-external-link';

function Footer() {
    return ( 
        <div className='footer-section' id="footer">
            <h4>Developed by <ExternalLink href="https://github.com/Kandy-Hamisi/" className="devname">Kandy Hamisi</ExternalLink> </h4>
        </div>
     );
}

export default Footer;