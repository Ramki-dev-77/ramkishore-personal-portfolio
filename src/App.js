import React, { useState, useEffect } from "react";
import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import PdfModal from "./components/pdfModal";
import { ArrowUp } from "lucide-react";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  // Scroll listener for progress bar and back to top
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      setShowBackToTop(totalScroll > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resumeUrl = `${process.env.PUBLIC_URL}/assets/Resume.pdf`;

  return (
    <div className="App">
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="bg-ambient"></div>
      <div className="bg-grid"></div>

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Router>
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Page Routes */}
        <Routes>
          <Route
            path="/"
            element={<Home openResumeModal={resumeModalOpen} />}
          />
          <Route
            path="/ramkishore-personal-portfolio"
            element={<Home openResumeModal={resumeModalOpen} />}
          />
          <Route
            path="/about"
            element={
              <div style={{ paddingTop: "5rem", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1 }}>
                  <About />
                </div>
                <Footer />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div style={{ paddingTop: "5rem", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1 }}>
                  <Projects />
                </div>
                <Footer />
              </div>
            }
          />
        </Routes>

        {/* Global Resume Modal (can be triggered from anywhere) */}
        <PdfModal
          open={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
          pdfUrl={resumeUrl}
        />
      </Router>

      {/* Back to Top Floating Button */}
      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        title="Scroll back to top"
        aria-label="Scroll back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;

