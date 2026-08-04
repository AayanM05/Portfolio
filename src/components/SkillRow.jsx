import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";

export default function SkillRow({ skill }) {
  const [open, setOpen] = useState(false);
  const related = (skill.relatedProjectIds || [])
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 3);

  const hasPopover = related.length > 0 || skill.relatedNote;

  return (
    <div
      className="relative border-b border-line dark:border-void-line pb-3"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button type="button" className="w-full flex items-center justify-between text-left py-1" aria-expanded={open}>
        <span className="text-[13.3px] font-medium tracking-wide uppercase text-ink dark:text-void-ink">{skill.name}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark shrink-0 ml-2" />
      </button>

      <AnimatePresence>
        {open && hasPopover && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute z-10 left-0 top-full mt-2 w-72 max-w-[90vw] border border-line dark:border-void-line bg-paper dark:bg-void p-4 shadow-lg"
          >
            {related.length > 0 ? (
              <>
                <span className="tag-mono text-accent dark:text-accent-dark">
                  Used in {related.length > 1 ? `${related.length} projects` : "project"}
                </span>
                <div className="mt-2 space-y-2">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      to={`/projects/${p.id}`}
                      className="block hover:text-accent dark:hover:text-accent-dark transition-colors"
                    >
                      <span className="font-display text-base">{p.name}</span>
                      <span className="block text-ink-soft dark:text-void-soft text-xs mt-0.5">{p.tagline}</span>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <>
                <span className="tag-mono text-accent dark:text-accent-dark">Context</span>
                <p className="text-ink-soft dark:text-void-soft text-sm mt-1">{skill.relatedNote}</p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
