import React from "react";
import { ProjectCard } from "./ProjectDesc";
import '../styles/Card.css'
function Projects(){
    let projects = [
            {
                id:1,
                projectName : "Youtube Clone",
                projectDescription : "A static clone of the YouTube homepage designed using only HTML and CSS. This project replicates the core layout and visual structure of YouTube, including the header, sidebar navigation, video thumbnails, and responsive grid.",
                technology : "HTML,CSS",
                projectImage : "/project_images/image1.png"
            },
            {
                id:2,
                projectName : "Tamilnadu Weather Application",
                projectDescription : "A weather application developed using Node.js and Axios to fetch real-time weather data for various cities in Tamil Nadu using a public REST API (e.g., OpenWeatherMap) to retrieve current weather conditions and display them in a user-friendly format.",
                technology:"Node.js, REST API, Axios",
                projectImage : "/project_images/image2.svg"
            },
            {
                id:3,
                projectName : "Blog Application",
                projectDescription : "A full-stack blog application built using Node.js, Express.js, and EJS as the templating engine. This project allows users to create, view, and read blog posts dynamically, demonstrating my understanding of server-side rendering, routing, and template-driven content management.",
                technology : "Node.js, Express, EJS",
                projectImage : "/project_images/image3.png"
            },
            {
                id:4,
                projectName : "My Book Shelf",
                projectDescription : "A CRUD-based web application that allows users to add, view, edit, and delete notes about books they’ve read. Built using Node.js, Express.js, and EJS for server-side rendering, with PostgreSQL as the backend database.",
                technology : "PostgreSQL, EJS, Node.js, Express",
                projectImage : "/project_images/image4.svg"
            },
            {
                id:5,
                projectName : "Mondrian Painting",
                projectDescription : "A digital recreation of Piet Mondrian’s abstract art using pure HTML and CSS, with a strong focus on CSS Grid layout. This project demonstrates my ability to design complex layouts using modern CSS techniques, and attention to visual balance, spacing, and color.",
                technology : "HTML, CSS, CSS Grid",
                projectImage : "/project_images/image5.png"
            },
            {
                id:6,
                projectName : "Electricity Bill Manager",
                projectDescription : "The Electricity Bill Manager is a software application designed to efficiently handle the management of electricity bills using standard CRUD (Create, Read, Update, Delete) operations. It allows users to securely store, manage, and update customer billing information, ensuring accuracy, ease of access nd adding,removing,updating customers.",
                technology:"Node.js, MySQL, Ejs, HTML,CSS & JS",
                projectImage : "/project_images/image6.svg"
            },
            
            
        ];
    return (
        <>
        <h1 style={{color:'black',textAlign:'center'}}>Projects</h1>
        <div className="project-container">
                {projects.map(project => {
                    return(
                        <>
                            <ProjectCard heading={project.projectName} description={project.projectDescription} technology={project.technology} image={project.projectImage}/>
                        </>
                        
                    )
                })}
                
        </div>
        </>
    );
}

export default Projects;