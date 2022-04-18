import React from 'react';
import ExpCard from './ExpCard';
import Intro from './Intro';


function Experience() {
    const sideHustleTasks = [
        'Working around with react',
        'Building applications'
    ];
    
    const gdscMku = [
        'Development of frontends',
        'Mastering HTML5 and CSS 3',
        'Working with Frontend APIs'
    ]
    return ( 
        <div className='experience-section' id="experience">
            <Intro title="My Experience" />

            <div className="exp-splitter">
                <ExpCard
                 company="GDSC Mount Kenya University"
                 position="Frontend Web Developer Member"
                 companyrole="Web Developer"
                 date="Aug 2019 - present"
                 task={gdscMku}
                />
                <ExpCard
                 company="Side Hustle"
                 position="Software Engineer Intern"
                 companyrole="Intern"
                 date="Apr 2022 - present"
                 task={sideHustleTasks}
                />
                <ExpCard
                 company="Thika Technical Training Center"
                 position="Software Engineer Attache"
                 companyrole="Attache"
                 date="Apr 2021 - Aug 2021"
                 task={sideHustleTasks}
                />
            </div>

        </div>
     );
}

export default Experience;