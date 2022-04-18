import React from 'react';
import { FcBriefcase } from 'react-icons/fc';

function ExpCard(props) {
    const myTasks = props.task.map((tasks) => {
        return <li>{tasks}</li>
    });
    return ( 
        <div className="container">
            <div className='experience-card'>
                <div className="exp-details">
                    <div className="bullet-icon"><FcBriefcase/></div>
                    <div className="exp-info">
                        <h4 className='position'>{props.position}</h4>
                        <h5 className='company'>{props.company} . {props.companyrole}</h5>
                        <h6 className='dates'>{props.date}</h6>
                        <div className="tasks">
                            <ul className="task-container">
                                {myTasks}
                            </ul>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
     );
}

export default ExpCard;