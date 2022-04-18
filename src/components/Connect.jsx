import React from 'react';
import Intro from './Intro';
import { ExternalLink } from 'react-external-link';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
function Connect() {
    return ( 
        <div className='connection-section'>
            <Intro title="Lets CONNECT"/>
            <div className="icon-splitter">
                <ExternalLink href="https://twitter.com/hamisi_kandy"><AiOutlineTwitter className='icons' /></ExternalLink>
                <ExternalLink href="https://github.com/Kandy-Hamisi/"><AiFillGithub className='icons' /></ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/hamisi-kandy-60a646157/"><AiFillLinkedin className='icons' /></ExternalLink>
            </div>
        </div>
     );
}

export default Connect;