import React from "react";
import aboutMe from "../Images/undraw_developer-avatar_f6ac.png";
import journey from "../Images/undraw_luggage_k1gn.png";
import current from "../Images/undraw_designer_efwz.png";
import { AboutComponentImg, AboutComponentBio } from "./AboutComponent";
import { Sparkles, Code, Trophy, Briefcase, GraduationCap } from "lucide-react";
import "../styles/personal.css";

function About() {
  const stats = [
    {
      icon: <GraduationCap size={24} />,
      number: "4th yr",
      label: "B.Tech IT @ SVCE"
    },
    {
      icon: <Code size={24} />,
      number: "6+",
      label: "Full Stack Projects"
    },
    {
      icon: <Briefcase size={24} />,
      number: "1",
      label: "Ashok Leyland Internship"
    },
    {
      icon: <Trophy size={24} />,
      number: "1st",
      label: "SIH Hackathon Winner"
    }
  ];

  return (
    <section id="about" className="about-section">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">
        {/* <Sparkles size={14} /> */}
        Background & Story
      </span>
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>
      <p className="section-subtitle">
        Get to know my engineering mindset, academic journey at SVCE, and passion for building impactful technology.
      </p>
    </div>

    {/* Quick Stats Grid */}
    <div className="about-stats-grid">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-card glass-card">
          <div className="stat-icon-box">
            {stat.icon}
          </div>
          <div className="stat-number gradient-text">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>

    {/* Storytelling Bento Cards */}
    <div className="story-cards-wrapper">
      
      {/* Card 1: Want to know about me */}
      <div className="story-card glass-card">
        <AboutComponentBio
          heading="Want to know about me?"
          bio="I'm currently pursuing my 4th year B.Tech in Information Technology at Sri Venkateswara College of Engineering. As a passionate Full-Stack Developer, I enjoy building dynamic, user-friendly websites and applications that solve real-world problems. Over the years, I've developed a strong foundation in frontend and backend technologies, while continuously exploring new tools and frameworks. I'm passionate about transforming ideas into meaningful digital experiences and contributing to projects that create a positive impact."
        />
        <AboutComponentImg
          myImage={aboutMe}
          altText="Developer avatar illustration"
        />
      </div>

      {/* Card 2: My Journey */}
      <div className="story-card reverse glass-card">
        <AboutComponentImg
          myImage={journey}
          altText="Journey illustration"
        />
        <AboutComponentBio
          heading="My Journey"
          bio="My journey into technology began with curiosity about how websites and applications work. I started with HTML, CSS, and JavaScript, gradually expanding my knowledge into React, Node.js, Express, and databases. Throughout my engineering journey, every project and challenge has helped me grow both technically and personally. From academic projects to real-world development experiences, I've learned the importance of writing clean code, solving problems efficiently, and continuously adapting to emerging technologies."
        />
      </div>

      {/* Card 3: What I'm Currently Working On */}
      <div className="story-card glass-card">
        <AboutComponentBio
          heading="What I'm Currently Working On?"
          bio="As a final-year student, I'm focusing on strengthening my full-stack development skills and preparing myself for a career in software development. I'm actively working with React, Node.js, Express, TypeScript, and SQL to build scalable and user-friendly applications. Alongside development, I'm improving my problem-solving skills by practicing Data Structures and Algorithms in Java and Python. I'm also working on projects that combine practical functionality with modern technology, while continuously learning and preparing for industry opportunities."
        />
        <AboutComponentImg
          myImage={current}
          altText="Working on modern tech illustration"
        />
      </div>

    </div>
  </div>
</section>
  );
}

export default About;
