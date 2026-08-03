import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { formatEyebrow } from "./Section";

export default function ResumeSection() {
  return (
    <div>
      <div className="max-w-container mx-auto px-6 md:px-10 py-14 md:py-16 pb-20 ">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center md:flex-row md:items-center justify-between gap-6 md:gap-8 border border-line dark:border-void-line p-6 md:p-10 text-center md:text-left"
        >
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-5 text-center md:text-left">
            <span className="w-12 h-12 rounded-full border border-line dark:border-void-line flex items-center justify-center shrink-0 text-accent dark:text-accent-dark">
              <FileText size={20} />
            </span>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">
                {formatEyebrow("Prefer paper")}
              </span>
              <h2 className="font-display text-xl md:text-2xl mt-2 md:mt-3 max-w-md">
                Take the resume.
              </h2>
              <p className="text-ink-soft dark:text-void-soft text-[13px] md:text-sm mt-2 max-w-md">
                Same story, one page, ready to forward.
              </p>
            </div>
          </div>
          <a
            href="/docs/resume/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm md:px-7 md:py-3.5 md:text-base bg-ink text-paper dark:bg-void-ink dark:text-void font-medium hover:opacity-85 transition-opacity shrink-0 w-fit mx-auto md:mx-0"
          >
            Download resume <Download size={17} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
