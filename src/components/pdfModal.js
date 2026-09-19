import React, { useEffect } from "react";
import { X, Download, FileText } from "lucide-react";
import "../styles/PdfModal.css";

export default function PdfModal({ open, onClose, pdfUrl }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-area">
            <FileText size={20} style={{ color: "var(--accent-primary)" }} />
            <span>Ramkishore A V Preview</span>
          </div>

          <div className="modal-actions">
            <a
              href={pdfUrl}
              download="Resume.pdf"
              className="modal-btn modal-btn-download"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button
              className="modal-btn modal-btn-close"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="modal-body">
          <iframe
            title="Ramkishore Resume Preview"
            src={`${pdfUrl}#toolbar=1&view=FitH`}
            type="application/pdf"
          />
        </div>
      </div>
    </div>
  );
}
