import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import "../styles/Card.css";

function ProjectCard({ heading, description, technology, image, category, githubUrl, onOpenDetails }) {
  // Split technology string into badges
  const techList = technology ? technology.split(",").map(t => t.trim()) : [];

  return (
    <div className="project-card glass-card">
      <div className="project-image-wrapper">
        <img 
          src={image} 
          alt={`Screenshot and preview of ${heading}`} 
          className="project-thumbnail" 
          loading="lazy"
        />
        {category && (
          <span className="project-category-badge">{category}</span>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{heading}</h3>

        <p className="project-description">
          {description.length > 210 ? `${description.slice(0, 210)}...` : description}
        </p>

        <div className="project-tech-tags">
          {techList.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          <a
            href={githubUrl || "https://github.com/Ramki-dev-77"}
            target="_blank"
            rel="noreferrer"
            className="project-btn project-btn-outline"
            title={`View ${heading} source code on GitHub`}
          >
            <GithubIcon size={16} />
            <span>Code</span>
          </a>

          <button
            type="button"
            className="project-btn project-btn-primary"
            onClick={() => onOpenDetails && onOpenDetails({ heading, description, technology, image, category, githubUrl })}
          >
            <ExternalLink size={16} />
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;