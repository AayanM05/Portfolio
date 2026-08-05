import { useEffect } from "react";
import { X, Download, FileText } from "lucide-react";

/**
 * Generic PDF viewer popup — styled identically to the Gallery lightbox.
 * Props:
 *   open        — boolean, whether modal is visible
 *   onClose     — function, called to close the modal
 *   src         — string, path to the PDF file
 *   label       — string, shown in the modal header (e.g. "BE MARKSHEET · PDF PREVIEW")
 *   downloadName— string, filename used when downloading (e.g. "be-marksheet.pdf")
 */
export default function PdfModal({ open, onClose, src, label = "DOCUMENT · PDF PREVIEW", downloadName = "document.pdf" }) {
  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isCapacitor = typeof window !== "undefined" && !!window.Capacitor;

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-paper dark:bg-void border border-line dark:border-void-line p-4 sm:p-6 shadow-2xl flex flex-col h-[calc(80dvh+4px)] md:h-[95dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-line dark:border-void-line pb-4 mb-4 shrink-0">
          <span className="tag-mono text-xs font-bold text-accent dark:text-accent-dark flex items-center gap-2">
            <FileText size={13} />
            {label.toUpperCase()}
          </span>
          <button
            onClick={onClose}
            className="p-1 hover:text-accent dark:hover:text-accent-dark transition-colors"
            title="Close preview"
          >
            <X size={18} />
          </button>
        </div>

        {/* PDF Viewer — fills ALL remaining space */}
        <div className="flex-1 w-full border border-line/60 dark:border-void-line/60 bg-paper/80 dark:bg-void-ink/20 overflow-hidden" style={{ minHeight: 0 }}>
          {isCapacitor ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center gap-4">
              <FileText size={48} className="text-accent dark:text-accent-dark opacity-60" />
              <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-wider text-ink dark:text-void-ink">
                App Preview Limited
              </h3>
              <p className="text-xs sm:text-sm font-medium text-ink-soft dark:text-void-soft max-w-xs leading-relaxed">
                Direct PDF previews are not supported inside the app player. Use the button below to view it in your browser!
              </p>
            </div>
          ) : (
            <iframe
              src={`${src}#toolbar=0&navpanes=0&scrollbar=1`}
              title={label}
              className="w-full h-full"
              style={{ border: "none", display: "block" }}
            />
          )}
        </div>

        {/* Download Button */}
        <div className="mt-4 sm:mt-5 flex items-center justify-center shrink-0">
          <a
            href={src}
            download={downloadName}
            onClick={(e) => {
              if (isCapacitor) {
                e.preventDefault();
                window.open(src, "_system");
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tag-mono uppercase tracking-wider bg-ink text-paper dark:bg-void-ink dark:text-void shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.38)] dark:shadow-[0_12px_32px_rgba(255,255,255,0.12)] hover:-translate-y-[1px] transition-all duration-300"
          >
            <Download size={14} />
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  );
}
