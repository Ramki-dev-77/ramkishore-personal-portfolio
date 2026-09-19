import React, { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ExternalLink 
} from "lucide-react";
import { GithubIcon, LinkedinIcon, MessageCircleIcon } from "./BrandIcons";
import "../styles/personal.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = "ramkishore1706@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending with realistic feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            {/* <Sparkles size={14} /> */}
            Let's Connect
          </span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, an internship opportunity, or want to collaborate? Feel free to reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Cards */}
          <div className="contact-info-col">
            <div className="contact-card-item glass-card">
              <div className="contact-icon-wrapper">
                <Mail size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Email Address</span>
                <span className="contact-card-value">{email}</span>
              </div>
              <button 
                onClick={handleCopyEmail} 
                className="copy-btn" 
                title={copied ? "Copied!" : "Copy email to clipboard"}
                aria-label="Copy email"
              >
                {copied ? <Check size={18} style={{ color: "var(--accent-emerald)" }} /> : <Copy size={18} />}
              </button>
            </div>

            <a 
              href="https://wa.me/9952982610" 
              target="_blank" 
              rel="noreferrer" 
              className="contact-card-item glass-card"
            >
              <div className="contact-icon-wrapper" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}>
                <MessageCircleIcon size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">WhatsApp Direct</span>
                <span className="contact-card-value">+91 99529 82610</span>
              </div>
              <ExternalLink size={16} style={{ color: "var(--text-muted)" }} />
            </a>

            <a 
              href="https://www.linkedin.com/in/ramkishore-a-v-aa866828b/" 
              target="_blank" 
              rel="noreferrer" 
              className="contact-card-item glass-card"
            >
              <div className="contact-icon-wrapper" style={{ background: "rgba(10, 102, 194, 0.15)", color: "#0a66c2" }}>
                <LinkedinIcon size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">Ramkishore A V</span>
              </div>
              <ExternalLink size={16} style={{ color: "var(--text-muted)" }} />
            </a>

            <a 
              href="https://github.com/Ramki-dev-77" 
              target="_blank" 
              rel="noreferrer" 
              className="contact-card-item glass-card"
            >
              <div className="contact-icon-wrapper">
                <GithubIcon size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">@Ramki-dev-77</span>
              </div>
              <ExternalLink size={16} style={{ color: "var(--text-muted)" }} />
            </a>

            <div className="contact-card-item glass-card">
              <div className="contact-icon-wrapper">
                <MapPin size={22} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Location & College</span>
                <span className="contact-card-value">Chennai, Tamil Nadu • SVCE</span>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="contact-form-card glass-card">
            <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              Send a Message
            </h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Leave your feedback, project inquiry, or message and I'll get back to you promptly.
            </p>

            {submitted && (
              <div className="form-status-alert" style={{ marginBottom: "1.5rem" }}>
                <Check size={18} />
                <span>Thank you! Your message has been prepared. You can also reach me directly at {email}.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Project Inquiry / Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: "100%", padding: "1rem" }}
                disabled={loading}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
