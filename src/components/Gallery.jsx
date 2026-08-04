import { useState } from "react";
import { ImagePlus, Maximize2, X, Download } from "lucide-react";

/**
 * Clean 6-card interactive screenshot grid gallery with lightbox modal preview and download functionality.
 */
export default function Gallery({ id, count = 6 }) {
  const [activeModal, setActiveModal] = useState(null);
  const [candidateIndices, setCandidateIndices] = useState({});

  const screenshotTitles = [
    "01 / Primary System Dashboard",
    "02 / Model Inference & AI Engine",
    "03 / Facility Discovery & Spatial Matching",
    "04 / Collector Dispatch & GPS Routing",
    "05 / OTP Chain-of-Custody Handoff",
    "06 / Transaction Audit & Wallet Payouts",
  ];

  const getCandidateUrls = (projId, index) => {
    const num = index + 1;
    const typoId = projId.includes("cyclo") ? projId.replace("cyclo", "cylo") : projId;
    return [
      `/projects/${projId}/${projId}-sc-${num}.png`,
      `/projects/${projId}/${projId}-sc-${num}.jpg`,
      `/projects/${projId}/${typoId}-sc-${num}.png`,
      `/projects/${projId}/${typoId}-sc-${num}.jpg`,
      `/projects/${projId}/${num}.png`,
      `/projects/${projId}/${num}.jpg`,
      `/projects/${projId}/${num}.jpeg`,
      `/projects/${projId}/${num}.webp`,
    ];
  };

  const handleImageError = (index) => {
    setCandidateIndices((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  return (
    <div className="w-full">
      {/* Clean 6-Card Interactive Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
        {Array.from({ length: count }).map((_, i) => {
          const candidates = getCandidateUrls(id, i);
          const candidateIdx = candidateIndices[i] || 0;
          const currentSrc = candidates[candidateIdx];
          const isFailedAll = candidateIdx >= candidates.length;

          return (
            <div
              key={i}
              onClick={() => setActiveModal(i)}
              className="group relative border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-3.5 flex flex-col justify-between cursor-pointer hover:border-accent dark:hover:border-accent-dark transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between text-ink-soft dark:text-void-soft mb-2.5">
                <span className="tag-mono text-[11px] font-bold tracking-wider text-accent dark:text-accent-dark">
                  {screenshotTitles[i] || `0${i + 1} / Screenshot`}
                </span>
                <Maximize2 size={13} className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all text-accent dark:text-accent-dark" />
              </div>

              <div className="aspect-video w-full overflow-hidden border border-line/40 dark:border-void-line/40 bg-ink/[0.02] dark:bg-void-ink/[0.04]">
                {!isFailedAll ? (
                  <img
                    src={currentSrc}
                    alt={`Project screenshot ${i + 1}`}
                    onError={() => handleImageError(i)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 p-4 text-center">
                    <ImagePlus size={20} className="opacity-40 text-accent dark:text-accent-dark" />
                    <span className="tag-mono text-[10.5px] opacity-60">
                      /projects/{id}/{i + 1}.png
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Preview Modal with Centered Download Button Below Image */}
      {activeModal !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-paper dark:bg-void border border-line dark:border-void-line p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-line dark:border-void-line pb-4 mb-4">
              <span className="tag-mono text-xs font-bold text-accent dark:text-accent-dark">
                {screenshotTitles[activeModal] || `Screenshot 0${activeModal + 1}`}
              </span>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 hover:text-accent dark:hover:text-accent-dark transition-colors"
                title="Close preview"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image Preview Window */}
            <div className="aspect-video w-full bg-paper/80 dark:bg-void-ink/20 border border-line/60 dark:border-void-line/60 flex flex-col items-center justify-center overflow-hidden">
              {(() => {
                const candidates = getCandidateUrls(id, activeModal);
                const candidateIdx = candidateIndices[activeModal] || 0;
                const currentSrc = candidates[candidateIdx];
                const isFailedAll = candidateIdx >= candidates.length;

                return !isFailedAll ? (
                  <img
                    src={currentSrc}
                    alt={`Full preview ${activeModal + 1}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <ImagePlus size={32} className="opacity-40 text-accent dark:text-accent-dark" />
                    <p className="tag-mono text-xs text-ink-soft dark:text-void-soft">
                      Screenshot Asset: <span className="font-bold text-ink dark:text-void-ink">/projects/{id}/{activeModal + 1}.png</span>
                    </p>
                    <span className="tag-mono text-[10.5px] text-ink-soft/60 dark:text-void-soft/60">
                      1920 × 1080 Full HD Render
                    </span>
                  </div>
                );
              })()}
            </div>

            {/* Centered Download Button Below Image */}
            {(() => {
              const candidates = getCandidateUrls(id, activeModal);
              const candidateIdx = candidateIndices[activeModal] || 0;
              const currentSrc = candidates[candidateIdx];
              const isFailedAll = candidateIdx >= candidates.length;

              if (isFailedAll) return null;

              return (
                <div className="mt-5 flex items-center justify-center">
                  <a
                    href={currentSrc}
                    download={`${id}-screenshot-${activeModal + 1}.png`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tag-mono uppercase tracking-wider bg-ink text-paper dark:bg-void-ink dark:text-void border border-line dark:border-void-line hover:bg-accent hover:border-accent dark:hover:bg-accent-dark dark:hover:border-accent-dark transition-all duration-200 shadow-sm hover:shadow-md"
                    title="Download full resolution screenshot"
                  >
                    <Download size={14} />
                    <span>Download Screenshot</span>
                  </a>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
