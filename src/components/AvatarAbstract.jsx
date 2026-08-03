import { motion } from "framer-motion";

/**
 * Placeholder portrait — an abstract, detection-frame-themed silhouette
 * rather than a stock photo of a stranger. Swap this out for a real photo
 * by dropping a file at /public/avatar.jpg and replacing this component's
 * usage with a plain <img src="/avatar.jpg" /> inside the same wrapper.
 */
export default function AvatarAbstract({ className = "" }) {
  return (
    <div 
      style={{ position: "relative", top: "-27px", left: "22px" }}
      className={`aspect-[4/5] w-full max-w-sm mx-auto ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full border border-line dark:border-void-line bg-ink dark:bg-void-ink/95 overflow-hidden"
      >
        <svg viewBox="0 0 300 375" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="avatar-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0052CC" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0052CC" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect width="300" height="375" fill="url(#avatar-grad)" />
          {/* Low-poly silhouette */}
          <path
            d="M150 90 L195 130 L190 210 L215 260 L200 330 L100 330 L85 260 L110 210 L105 130 Z"
            fill="none"
            stroke="#F3F3EE"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          <circle cx="150" cy="110" r="42" fill="none" stroke="#F3F3EE" strokeOpacity="0.5" strokeWidth="1.5" />
          <line x1="0" y1="130" x2="300" y2="130" stroke="#F3F3EE" strokeOpacity="0.08" />
          <line x1="0" y1="230" x2="300" y2="230" stroke="#F3F3EE" strokeOpacity="0.08" />
        </svg>

        <span className="absolute top-4 left-4 tag-mono text-accent font-mono font-medium">
          {`{ CLASS: DEVELOPER }`}
        </span>
      </motion.div>
    </div>
  );
}
