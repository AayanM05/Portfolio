import { motion } from "framer-motion";

/**
 * Ambient abstract shapes — geometric forms and detection-box outlines
 * drifting slowly. Variant controls which composition is used per page
 * so the motif stays consistent without every page looking identical.
 */
export default function AbstractField({ className = "", variant = "hero" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Large soft color fields */}
      <motion.div
        className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full opacity-[0.10] dark:opacity-[0.16]"
        style={{ background: "radial-gradient(circle, #0052CC 0%, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-8%] w-[380px] h-[380px] rounded-full opacity-[0.09] dark:opacity-[0.14]"
        style={{ background: "radial-gradient(circle, #0052CC 0%, transparent 70%)" }}
        animate={{ x: [0, -25, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 grid-texture text-ink dark:text-void-ink" />
    </div>
  );
}
