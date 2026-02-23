import { useEffect } from "react";
import "../styles/PdfModal.css";

export default function PdfModal({ open, onClose, pdfUrl }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose}>✕</button>

        <iframe
          title="PDF Viewer"
          src={`/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`}
        />
      </div>
    </div>
  );
}
