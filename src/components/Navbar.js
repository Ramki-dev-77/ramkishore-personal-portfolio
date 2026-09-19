import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Menu, X, FileText } from "lucide-react";
import "../styles/Navbar.css";

function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy when on home page
      if (location.pathname === "/" || location.pathname === "/ramkishore-personal-portfolio") {
        const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/" && location.pathname !== "/ramkishore-personal-portfolio") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
  };

  const navItems = [
    { label: "Home", id: "hero", path: "/" },
    { label: "About", id: "about", path: "/about" },
    { label: "Skills", id: "skills", path: "/#skills" },
    { label: "Projects", id: "projects", path: "/projects" },
    { label: "Experience", id: "experience", path: "/#experience" },
    { label: "Contact", id: "contact", path: "/#contact" }
  ];

  return (
    <header className={`navbar-header ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => handleNavClick("hero")}>
          <span className="text">Ramki.dev</span>
          {/* <span className="brand-dot"></span> */}
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-desktop-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`nav-link-item ${activeSection === item.id ? "active" : ""}`}
                onClick={() => handleNavClick(item.id)}
                style={{ background: "none", border: "none",color:'black',fontSize:'18px' }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
            {/* <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}

          <button
            onClick={onOpenResume}
            className="nav-resume-btn"
            title="Preview or Download Resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>

          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`mobile-link-item ${activeSection === item.id ? "active" : ""}`}
                onClick={() => handleNavClick(item.id)}
                style={{ width: "100%", textAlign: "left", background: "none", border: "none" }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mobile-resume-action">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="nav-resume-btn"
          >
            <FileText size={16} />
            <span>View & Download Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
