import React from "react";
import '../styles/personal.css';
// import myImage from './My_Image-removebg-preview.png';
import SocialMediaComponent from "./SocialMediaComponent";
import About from "./About";
import cartoonRam from '../Images/ramki_flat_illustration.png';
function Home(){
    return(
        <div>
        <br></br>
            <div className="biography">
                <div className="biography-img">
                    <img src={cartoonRam} height={350} width={360} className="myImage"/>
                </div>      
                <div className="biography-bio">
                        <h2>Hello, I'm</h2>
                        <h1>Ramkishore A V</h1>
                        <h2>Passionate Full Stack Developer</h2>
                        <p>"I’m currently studying <span>B.Tech in Information Technology</span> at Sri Venkateswara College of Engineering. I’m diving deep into web development and am excited about building dynamic, user-friendly web applications, both on the frontend and backend. I’m continuously learning and experimenting with trending and popular technologies."</p>
                        <a href="assets\Ramkishore Resume.pdf" download="Ramkishore_Resume.pdf">
                            <button>Download Resume</button>
                        </a>
                        <br></br>
                        <div className="social-media-container">
                        <div className="social-media-links">
                            {/* <p style={{fontSize:20}}>👉</p> */}
                            <SocialMediaComponent name="LinkedIn" link="https://www.linkedin.com/in/ramkishore-a-v-aa866828b/" source="assets/linkedin.png"/>

                            <SocialMediaComponent name="Whatsapp" link="https://wa.me/9952982610" source="assets/whatsapp.png"/>

                            <SocialMediaComponent name="Gmail" link="mailto:ramkishore1706@gmail.com" source="assets/gmail.png"/>

                            <SocialMediaComponent name="Instagram" link="https://www.linkedin.com/in/ramkishore-a-v-aa866828b/" source="assets/instagram.png"/>

                        </div>
                </div>
                </div>  
            </div>
            <br></br>
            <About />
        </div>
    );
}

export default Home;