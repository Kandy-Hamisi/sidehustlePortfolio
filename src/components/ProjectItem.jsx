import React from 'react'
import { ExternalLink } from 'react-external-link';
const ProjectItem = (props) => {
  return (
    <article className={props.position}>
        <div className="project-displays">
            <figure className='project-img'>
                <ExternalLink target="_blank" href={props.link}>
                    <img src={props.image} alt="dashboard project" />
                </ExternalLink>
            </figure>
            
            <div className="project-detail-card">
                <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, vero!</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul>
            </div>
        </div>
        <div className="project-techs">
            <span>React</span>
            <span>Vercel</span>
            <span>React Icons</span>
        </div>
    </article>
        
    
  )
}

export default ProjectItem