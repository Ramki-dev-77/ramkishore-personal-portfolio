import React from "react";
import '../styles/personal.css';
import { useState } from "react";
import SocialMediaComponent from "./SocialMediaComponent";
import About from "./About";
import cartoonRam from '../Images/ramki_flat_illustration.png';
import LinkedIn from '../Images/logo/linkedin.png';
import Whatsapp from '../Images/logo/whatsapp.png';
import Insta from '../Images/logo/instagram.png';
import Gmail from '../Images/logo/gmail.png';
import PdfModal from "./pdfModal";
function Home(){
    const [open, setOpen] = useState(false);
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
                        <a href="assets\2127230801077_RAMKISHORE_A_V_RESUME.pdf" download="Ramkishore Resume.pdf" style={{width:'fit-content'}}>
                            <button style={{width:150}}>Download Resume</button>
                        </a>
                        <div>
                        </div>
                        <br></br>
                        <div className="social-media-container">
                        <div className="social-media-links">
                            <SocialMediaComponent name="LinkedIn" link="https://www.linkedin.com/in/ramkishore-a-v-aa866828b/" source={LinkedIn}/>

                            <SocialMediaComponent name="Whatsapp" link="https://wa.me/9952982610" source={Whatsapp}/>

                            <SocialMediaComponent name="Gmail" link="mailto:ramkishore1706@gmail.com" source={Gmail}/>

                            <SocialMediaComponent name="Instagram" link="https://www.linkedin.com/in/ramkishore-a-v-aa866828b/" source={Insta}/>

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