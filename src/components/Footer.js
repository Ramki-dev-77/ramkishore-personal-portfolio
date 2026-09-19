import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MessageCircleIcon } from "./BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{
      borderTop: "1px solid var(--border-color)",
      background: "var(--bg-secondary)",
      padding: "4rem 0 2.5rem",
      position: "relative",
      zIndex: 2
    }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem"
        }}>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.4rem" }}>
              <span className="gradient-text">Ramki</span>.dev
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "450px" }}>
              Passionate Full Stack Developer crafting dynamic, high-performance web applications with modern technologies.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a 
              href="https://github.com/Ramki-dev-77" 
              target="_blank" 
              rel="noreferrer" 
              className="social-pill"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ramkishore-a-v-aa866828b/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-pill"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href="https://wa.me/9952982610" 
              target="_blank" 
              rel="noreferrer" 
              className="social-pill"
              aria-label="WhatsApp"
            >
              <MessageCircleIcon size={20} />
            </a>
            <a 
              href="mailto:ramkishore1706@gmail.com" 
              className="social-pill"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--border-color)",
          paddingTop: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontSize: "0.88rem",
          color: "var(--text-muted)"
        }}>
          <p>© {new Date().getFullYear()} Ramkishore A V. Built with React & modern web technologies.</p>
          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem", borderRadius: "999px" }}
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
