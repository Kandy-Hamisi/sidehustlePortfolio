import React, { useState } from 'react'
import Intro from './Intro'
import ProjectCard from './ProjectCard'
import thunder from "../assets/images/thunderbg.jpg";
import pizza from '../assets/images/pizza-bg.jpg'
import aspa from '../assets/images/asparagus.jpg'


const OtherProjects = () => {

    const [moreProjects, setMoreProjects] = useState(false);

    const handleShowMore = () => {
        if (!moreProjects) {
            setMoreProjects(true)
        } else {
            setMoreProjects(false);
        }
    }

  return (
    <section className='other-projects'>
        <Intro title="Other Interesting Projects"/>
        <div className="simple-project-splitter">
            <ProjectCard image={thunder}/>
            <ProjectCard image={pizza} />
            <ProjectCard image={aspa} />
        </div>
        
        {
            moreProjects && <div className="simple-project-splitter later-display">
                <ProjectCard image={pizza}/>
                <ProjectCard image={aspa} />
                <ProjectCard image={thunder} />
            </div>
        }
        <div className="show-more">
            <h3 onClick={handleShowMore}>
                {
                    (moreProjects) ? "Show Less.."
                        : "Show More..."
                }
            </h3>
        </div>
    </section>
  )
}

export default OtherProjects