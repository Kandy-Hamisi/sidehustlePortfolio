import React from 'react'

const ProjectCard = (props) => {
  return (
    <article className='project-card'>
        <figure className='project-card-img'>
            <img src={props.image} alt="me-pic" />
        </figure>
        <div className="project-info">
            <ul>
                <li>I did this and that to achieve a couple</li>
                <li>Did you know that there is something in nothing</li>
                <li>Blacks are whites and whites are blacks</li>
                <li>Think about it</li>
            </ul>
        </div>
        <div className="project-techs">
            <span>Firebase</span><span>React Auth</span><span>React Router</span>
        </div>
    </article>
  )
}

export default ProjectCard;