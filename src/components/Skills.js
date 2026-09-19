import React from "react";
import { 
  Layout, 
  Server, 
  Database, 
  Code2, 
  Wrench, 
  Sparkles,
  Layers,
  Cpu
} from "lucide-react";
import "../styles/personal.css";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout size={22} />,
    description: "Crafting intuitive, responsive, and high-performance interfaces",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "CSS Grid & Flexbox", "Responsive UI/UX"]
  },
  {
    title: "Backend & Server",
    icon: <Server size={22} />,
    description: "Developing robust APIs, routing, and scalable server architectures",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Axios", "EJS Templating", "Server-Side Rendering"]
  },
  {
    title: "Databases & Storage",
    icon: <Database size={22} />,
    description: "Relational schema design, querying, and persistent data management",
    skills: ["PostgreSQL", "MySQL", "CRUD Operations", "Database Design", "Relational Modeling"]
  },
  {
    title: "Programming Languages",
    icon: <Code2 size={22} />,
    description: "Core algorithms, data structures, and object-oriented programming",
    skills: ["Java (DSA)", "JavaScript", "C Language", "Problem Solving", "OOP Principles"]
  },
  {
    title: "Tools & Version Control",
    icon: <Wrench size={22} />,
    description: "Modern developer workflow, testing, debugging, and collaboration",
    skills: ["Git", "GitHub", "Visual Studio Code", "Postman", "npm", "Chrome DevTools"]
  },
  {
    title: "Engineering Mindset",
    icon: <Cpu size={22} />,
    description: "Foundational software development principles and clean code philosophy",
    skills: ["Clean Code", "Agile Learning", "API Integration", "Modular Architecture", "Performance Optimization"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            {/* <Sparkles size={14} /> */}
            Technical Expertise
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical stack, frameworks, languages, and development tools.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card glass-card">
              <div className="category-card-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <div>
                  <h3>{category.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "2px" }}>
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="skill-badges-container">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">
                    <Layers size={14} style={{ color: "var(--accent-primary)" }} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
