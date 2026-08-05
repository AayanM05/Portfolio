import PdfModal from "./PdfModal";

/**
 * ResumeModal — thin wrapper around PdfModal for the resume PDF.
 */
export default function ResumeModal({ open, onClose }) {
  return (
    <PdfModal
      open={open}
      onClose={onClose}
      src="/docs/resume/resume.pdf"
      label="RESUME · PDF PREVIEW"
      downloadName="resume.pdf"
    />
  );
}
