import React, { useState, useEffect } from "react";
import "../styles/personal.css";
import SocialMediaComponent from "./SocialMediaComponent";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import PdfModal from "./pdfModal";
import cartoonRam from "../Images/ramki_flat_illustration.png";
import LinkedIn from "../Images/logo/linkedin.png";
import Whatsapp from "../Images/logo/whatsapp.png";
import Insta from "../Images/logo/instagram.png";
import Gmail from "../Images/logo/gmail.png";
import { 
  ArrowRight, 
  Download, 
  Eye, 
  Code2, 
  Server, 
  Database, 
  Cpu 
} from "lucide-react";

const ROLES = [
  "Passionate Full Stack Developer",
  "Frontend Specialist (React)",
  "Backend & REST API Builder (Node.js)",
  "Problem Solver (DSA in Java)",
  "B.Tech IT @ SVCE"
];

function Home({ openResumeModal }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const resumeUrl = `${process.env.PUBLIC_URL}/assets/Resume.pdf`;

  // Typing effect
  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isModalActive = openResumeModal || modalOpen;

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Bio & CTAs */}
            <div className="hero-content">
              {/* <div className="status-badge">
                <span className="status-dot"></span>
                <span>Available for Internships & Projects</span>
              </div> */}

              <span className="hero-greeting">Hello, I'm</span>
              <h1 className="hero-name">
                <span className="gradient-text">Ramkishore</span> A V
              </h1>

              <div className="hero-role-wrapper">
                <span className="rotating-role">{displayText}</span>
              </div>

              <p className="hero-bio">
                I’m currently pursuing <span className="highlight">B.Tech in Information Technology</span> at Sri Venkateswara College of Engineering. I’m diving deep into web development and am excited about building dynamic, user-friendly web applications, both on the frontend and backend. Continuously learning and experimenting with modern, trending technologies.
              </p>

              {/* Action Buttons */}
              <div className="hero-actions">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="btn btn-primary"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={17} />
                </button>

                  {/* <button
                    onClick={() => scrollToSection("contact")}
                    className="btn btn-secondary"
                  >
                    <span>Get In Touch</span>
                  </button> */}

                <button
                  onClick={() => setModalOpen(true)}
                  className="btn btn-secondary"
                  title="Preview Resume in Modal"
                >
                  <Eye size={17} />
                  <span>Preview Resume</span>
                </button>

                <a
                  href={resumeUrl}
                  download="Resume.pdf"
                  className="btn btn-secondary"
                  title="Download Resume PDF"
                >
                  <Download size={17} />
                  <span>Download</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="hero-socials">
                <SocialMediaComponent
                  name="LinkedIn"
                  link="https://www.linkedin.com/in/ramkishore-a-v-aa866828b/"
                  source={LinkedIn}
                />
                <SocialMediaComponent
                  name="Whatsapp"
                  link="https://wa.me/9952982610"
                  source={Whatsapp}
                />
                <SocialMediaComponent
                  name="Gmail"
                  link="mailto:ramkishore1706@gmail.com"
                  source={Gmail}
                />
                <SocialMediaComponent
                  name="Instagram"
                  link="https://www.linkedin.com/in/ramkishore-a-v-aa866828b/"
                  source={Insta}
                />
              </div>
            </div>

            {/* Right Column: Visual Avatar & Floating Chips */}
            <div className="hero-visual">
              <div className="avatar-halo"></div>

              <div className="avatar-wrapper">
                <img
                  src={cartoonRam}
                  alt="Ramkishore A V - Developer Avatar"
                  className="avatar-img"
                  loading="eager"
                />
              </div>

              {/* Floating Tech Badges */}
              <div className="floating-chip chip-react">
                <Code2 size={16} style={{ color: "#61dafb" }} />
                <span>React.js</span>
              </div>

              <div className="floating-chip chip-node">
                <Server size={16} style={{ color: "#68a063" }} />
                <span>Node.js</span>
              </div>

              <div className="floating-chip chip-db">
                <Database size={16} style={{ color: "#336791" }} />
                <span>PostgreSQL</span>
              </div>

              <div className="floating-chip chip-java">
                <Cpu size={16} style={{ color: "#e76f00" }} />
                <span>DSA (Python)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }} 
          className="scroll-indicator" 
          aria-label="Scroll down to About section"
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll</span>
        </a>
      </section>

      {/* About Section */}
      <About />

      {/* Experience & Achievements Section */}
      <Experience />

      {/* Technical Skills Section */}
      <Skills />

      {/* Projects Showcase Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* PDF Resume Modal */}
      <PdfModal
        open={isModalActive}
        onClose={() => setModalOpen(false)}
        pdfUrl={resumeUrl}
      />
    </div>
  );
}

export default Home;
