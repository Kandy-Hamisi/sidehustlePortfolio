import React from 'react'
import Intro from './Intro'
import ProjectItem from './ProjectItem'
import board from '../assets/images/board.jpeg';
import pizza from '../assets/images/pizza-bg.jpg';
import thunder from '../assets/images/thunderbg.jpg';

const Projects = () => {
  return (
    <section className='project-section'>
        <Intro title="I Build Things" />
        <ProjectItem image={board}/>
        <ProjectItem image={pizza} position="floater" />
        <ProjectItem image={thunder} link="https://weather-app.vercel.app"/>
    </section>
  )
}

export default Projects