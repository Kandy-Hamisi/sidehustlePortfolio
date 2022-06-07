import React from 'react';
import { FcReadingEbook } from 'react-icons/fc';

function EduCard(props) {
    // const myTasks = props.task.map((tasks) => {
    //     return <li>{tasks}</li>
    // });
    return ( 
        <div className="container">
            <div className='experience-card'>
                <div className="exp-details">
                    <div className="bullet-icon"><FcReadingEbook/></div>
                    <div className="exp-info">
                        <h4 className='position'>{props.position}</h4>
                        <h5 className='company'>{props.company} . {props.companyrole}</h5>
                        <h6 className='dates'>{props.date}</h6>
                    </div>
                </div>                
            </div>
        </div>
     );
}

export default EduCard;