import React from "react";
import { Briefcase, Award, GraduationCap, CheckCircle, Calendar, Sparkles } from "lucide-react";
import "../styles/personal.css";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Ashok Leyland",
    location: "Chennai, India",
    period: "2024",
    type: "Industry Internship",
    icon: <Briefcase size={22} />,
    description: "Contributed as a Frontend Developer for the core industrial monitoring project: 'Design and Development of OT (Operational Technology) Monitoring System'.",
    highlights: [
      "Engineered real-time dashboard UI components to visualize operational telemetry and OT metrics.",
      "Collaborated with cross-functional engineering teams to implement responsive, accessible layouts.",
      "Awarded a prestigious Letter of Recommendation from Ashok Leyland leadership for outstanding project contribution and engineering excellence."
    ]
  },
  {
    role: "Winner - SIH Internal Hackathon",
    company: "Sri Venkateswara College of Engineering",
    location: "Sriperumbudur, Tamil Nadu",
    period: "2024",
    type: "Competition & Innovation",
    icon: <Award size={22} />,
    description: "Competed in the Smart India Hackathon (SIH) internal collegiate rounds against competitive teams, building innovative technological solutions for real-world problem statements.",
    highlights: [
      "Secured 1st place in the college-level SIH hackathon evaluation round.",
      "Architected rapid prototypes demonstrating frontend responsiveness, backend routing, and data persistence.",
      "Presented technical demos and system architecture diagrams before industry & faculty evaluation panels."
    ]
  },
  {
    role: "B.Tech in Information Technology",
    company: "Sri Venkateswara College of Engineering (SVCE)",
    location: "Anna University Affiliation",
    period: "2023 - Present",
    type: "Academic Foundation",
    icon: <GraduationCap size={22} />,
    description: "Pursuing Bachelor of Technology with focus on full-stack development, database management systems, data structures, algorithms, and modern software engineering.",
    highlights: [
      "Actively practicing Data Structures & Algorithms (DSA) in Java.",
      "Built 6+ full-stack web applications spanning REST APIs, EJS templating, Node.js, and PostgreSQL/MySQL.",
      "Active participant in open-source development, developer forums, and technical workshops."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            {/* <Sparkles size={14} /> */}
            Career & Milestones
          </span>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Industry internship experience, hackathon accomplishments, and foundational engineering milestones.
          </p>
        </div>

        <div className="timeline-wrapper">
          {experiences.map((item, index) => (
            <div key={index} className="timeline-card glass-card">
              <div className="timeline-icon-box">
                {item.icon}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-company">
                      {item.company} • <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{item.location}</span>
                    </p>
                  </div>

                  <div className="timeline-period">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="timeline-description">{item.description}</p>

                <ul className="timeline-highlights">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>
                      <CheckCircle size={16} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
