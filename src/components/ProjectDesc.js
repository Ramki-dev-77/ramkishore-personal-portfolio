import React from 'react';
import '../styles/Card.css'
function ProjectCard(props){
    return(
        <div>
            <div className='project-card'>
                <img src={props.image} height={200} width={320} />

                <div className='project-manager'>
                    <p>
                        <span style={{fontWeight:'bold',color:'black'}}>Title : </span> {props.heading}
                    </p>
                    <p>
                        <span style={{fontWeight:'bold',color:'black'}}>Description : </span>
                        {(props.description).length > 270 ? (props.description).slice(0,270)+"..." : (props.description)}
                    </p>
                    <p>
                        <span style={{fontWeight:'bold',color:'black'}}>Technologies : </span>
                        {props.technology}
                    </p>
                </div>
            </div>
        </div>
        
    );
}


export {ProjectCard};