import React from 'react';
import EduCard from './EduCard';
import Intro from './Intro';

function Education() {
    return ( 
        <div className='education-section' id="education">
            <Intro title="My Education" />

            <div className="exp-splitter">
                <EduCard
                 company="ALX Software Engineering"
                 position="Software Engineering"
                 companyrole="Cohort 7"
                 date="May 2022 - Present"
                 task=""
                />
                <EduCard
                 company="Mount Kenya University"
                 position="Bsc Information Technology"
                 companyrole="2nd Class Upper Division"
                 date="May 2018 - Dec 2021"
                 task=""
                />
                <EduCard
                 company="Sacred Heart High School"
                 position="Kenya Certificate of Secondary Education"
                 companyrole="Student"
                 date="Feb 2014 - Nov 2017"
                 task=""
                />
            </div>
        </div>
     );
}

export default Education;