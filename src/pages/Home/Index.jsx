import React from 'react'
import Connect from '../../components/Connect'
import Education from '../../components/Education'
import Experience from '../../components/Experience'
import Hero from '../../components/Hero'
import OtherProjects from '../../components/OtherProjects'
import Projects from '../../components/Projects'

const Index = () => {
  return (
    <React.Fragment>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <OtherProjects />
        <Connect />
    </React.Fragment>
  )
}

export default Index