// import React from "react";
// import myImage from './My_Image-removebg-preview.png';
import aboutMe from '../Images/undraw_developer-avatar_f6ac.png';
import journey from '../Images/undraw_luggage_k1gn.png';
import skills from '../Images/undraw_certificate_71gt.png';
import current from '../Images/undraw_designer_efwz.png';
import { AboutComponentImg,AboutComponentBio } from "./AboutComponent.js";
function About(){
    return(
        <div class="about-page">
            <h1>About</h1>
            <div className="about_me_container">
                <AboutComponentBio heading="Want to know about me?" bio="Currently pursuing 2nd yr B.Tech in Information Technology at Sri Venkateswara College of Engineering. I have a strong interest in building dynamic, user-friendly websites and applications. With a focus on both frontend and backend technologies, I enjoy experimenting with new tools and frameworks to create meaningful and efficient web experiences.I'm also aspired to work on open source projects to explore and invest my knowledge."/>
                <AboutComponentImg myImage={aboutMe}/>
            </div>
            <br></br>
            <div className="about_me_container">
                <AboutComponentImg myImage={journey}/>
                <AboutComponentBio heading="My Journey" bio="Since I started learning web development, I've been amazed by how the internet connects the world. My journey began with learning the basics of  HTML, CSS, and JavaScript, and quickly expanded to working with advanced frameworks like React, Node.js, and Express. With every project I work on, I am driven to improve my skills and embrace new technologies that shape the digital world."/>
            </div>
            <br></br>
            <div className="about_me_container" style={{padding:"20px"}}>
                <div className="about_me_container_bio">
                    <h1>Skills & Technologies</h1>

                    <ul className="skills">
                         <li>Frontend: HTML, CSS, Bootstrap, JavaScript, React</li>
                        <li>Backend: Node.js, Express.js, MySQL, PostgreSQL</li>
                        <li>Version Control: Git, GitHub</li>
                        <li>Other Tools: Visual Studio Code, Postman</li>
                        <li>Languages: Java, JavaScript, C</li>
                    </ul>
                </div>
                 <div className="about_me_container_img">
                    <img src={skills} height={400} width={300} className="myImage"/>
                </div> 
            </div>
            <br></br>
            <div className="about_me_container">
                <div className="about_me_container_img">
                    <img src={current} height={250} width={400} className="myImage"/>
                </div>
                <div className="about_me_container_bio">
                    <h1>What I'm Currently Working On ?</h1>
                    <p>Currently, I'm focusing on improving my skills in full-stack development and working with modern JavaScript frameworks. I'm building both frontend and backend applications, ensuring they are scalable and user-friendly. I'm also started developing mobile application using <em style={{color:'black',fontWeight:'bold'}}>React Native</em> and problem solving skill by learning <em style={{color:'black',fontWeight:'bold'}}>DSA </em>in java.</p>
                </div>
            </div>
        </div>

    );
}

export default About;