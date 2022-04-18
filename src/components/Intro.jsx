import React from 'react';

function Intro(props) {
    return ( 
        <div className="section-intro">
            <h1 className='intro-title'>{props.title}</h1>
            <hr/>
        </div>
     );
}

export default Intro;