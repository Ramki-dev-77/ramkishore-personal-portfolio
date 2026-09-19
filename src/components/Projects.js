import React, { useState } from "react";
import ProjectCard from "./ProjectDesc";
import { Sparkles, X } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import "../styles/Card.css";
import image1 from "../Images/project_images/image1.png";
import image2 from "../Images/project_images/image2.svg";
import image3 from "../Images/project_images/image3.png";
import image4 from "../Images/project_images/image4.svg";
import image5 from "../Images/project_images/image5.png";
import image6 from "../Images/project_images/image6.svg";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      projectName: "YouTube Clone",
      category: "Frontend",
      filterGroup: "Frontend",
      projectDescription: "A static clone of the YouTube homepage designed using only HTML and CSS. This project replicates the core layout and visual structure of YouTube, including the header, sidebar navigation, video thumbnails, and responsive grid system.",
      technology: "HTML5, CSS3, Flexbox, CSS Grid",
      projectImage: image1,
      githubUrl: "https://github.com/Ramki-dev-77"
    },
    {
      id: 2,
      projectName: "Tamilnadu Weather Application",
      category: "REST API & Backend",
      filterGroup: "Node.js & DB",
      projectDescription: "A weather application developed using Node.js and Axios to fetch real-time weather data for various cities across Tamil Nadu. Integrates with public REST weather APIs to retrieve temperature, humidity, and atmospheric conditions in a clean, user-friendly format.",
      technology: "Node.js, REST API, Axios, JavaScript",
      projectImage: image2,
      githubUrl: "https://github.com/Ramki-dev-77"
    },
    {
      id: 3,
      projectName: "Blog Application",
      category: "Full Stack",
      filterGroup: "Full Stack",
      projectDescription: "A full-stack blog application built using Node.js, Express.js, and EJS as the templating engine. This project allows users to create, view, edit, and read blog posts dynamically, demonstrating strong understanding of server-side rendering, routing, and template-driven content management.",
      technology: "Node.js, Express.js, EJS, SSR, JavaScript",
      projectImage: image3,
      githubUrl: "https://github.com/Ramki-dev-77"
    },
    {
      id: 4,
      projectName: "My Book Shelf",
      category: "Full Stack CRUD",
      filterGroup: "Full Stack",
      projectDescription: "A CRUD-based web application that allows users to add, view, edit, and delete notes about books they’ve read. Built using Node.js, Express.js, and EJS for server-side rendering, with PostgreSQL as the relational database for persistent storage.",
      technology: "PostgreSQL, EJS, Node.js, Express.js, SQL",
      projectImage: image4,
      githubUrl: "https://github.com/Ramki-dev-77"
    },
    {
      id: 5,
      projectName: "Mondrian Painting",
      category: "CSS Architecture",
      filterGroup: "Frontend",
      projectDescription: "A digital recreation of Piet Mondrian’s iconic abstract modernist art using pure HTML and CSS, with a deep focus on complex CSS Grid layout rules. Demonstrates advanced ability to engineer visual balance, spacing, and geometric responsiveness.",
      technology: "HTML5, CSS3, CSS Grid, Modern Layout",
      projectImage: image5,
      githubUrl: "https://github.com/Ramki-dev-77"
    },
    {
      id: 6,
      projectName: "Electricity Bill Manager",
      category: "Enterprise Full Stack",
      filterGroup: "Node.js & DB",
      projectDescription: "The Electricity Bill Manager is a software application designed to efficiently handle the management of electricity bills using standard CRUD operations. Securely stores, retrieves, and updates customer billing information with MySQL and Node.js.",
      technology: "Node.js, MySQL, EJS, HTML5, CSS3, JavaScript",
      projectImage: image6,
      githubUrl: "https://github.com/Ramki-dev-77"
    }
  ];

  const filterCategories = ["All", "Full Stack", "Frontend", "Node.js & DB"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.filterGroup === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            {/* <Sparkles size={14} /> */}
            Featured Work
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of full-stack systems, dynamic web applications, and responsive frontend recreations I've built.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="project-filters">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="project-container">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              heading={project.projectName}
              description={project.projectDescription}
              technology={project.technology}
              image={project.projectImage}
              category={project.category}
              githubUrl={project.githubUrl}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true">
          <div 
            className="glass-card" 
            style={{ 
              maxWidth: "650px", 
              width: "90%", 
              maxHeight: "90vh", 
              overflowY: "auto", 
              padding: "2rem", 
              position: "relative",
              margin: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="copy-btn"
              style={{ position: "absolute", top: "1.25rem", right: "1.25rem", padding: "0.5rem" }}
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              <X size={22} />
            </button>

            <div style={{ maxHeight: "280px", borderRadius: "16px", overflow: "hidden", marginBottom: "1.5rem", background: "rgba(0,0,0,0.2)" }}>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.heading} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
              <span className="section-tag" style={{ margin: 0, fontSize: "0.78rem" }}>
                {selectedProject.category}
              </span>
            </div>

            <h3 style={{ fontSize: "1.85rem", fontWeight: 800, marginBottom: "1rem" }}>
              {selectedProject.heading}
            </h3>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1.02rem", marginBottom: "1.5rem" }}>
              {selectedProject.description}
            </p>

            <div style={{ marginBottom: "1.8rem" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Technologies Used
              </div>
              <div className="project-tech-tags">
                {selectedProject.technology.split(",").map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href={selectedProject.githubUrl || "https://github.com/Ramki-dev-77"}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <GithubIcon size={18} />
                <span>View Source Code</span>
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
