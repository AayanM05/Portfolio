import { motion } from "framer-motion";

export default function AvatarAbstract({ className = "" }) {
  return (
    <div 
      className={`aspect-[4/5] w-full max-w-[280px] sm:max-w-sm mx-auto translate-y-[13px] md:-translate-y-[11px] md:translate-x-5 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full"
      >
        {/* Theme Accent Color Bottom Glow / Shadow */}
        <div className="absolute -bottom-5 inset-x-6 h-20 bg-accent/40 dark:bg-accent-dark/25 blur-2xl rounded-full z-0 pointer-events-none" />

        {/* 4 Corner L-Brackets — Bold, Crisp & Precisely Positioned */}
        <div className="absolute -top-2.5 -left-2.5 w-4 h-4 border-t-2 border-l-2 border-accent dark:border-accent-dark z-30 pointer-events-none" />
        <div className="absolute -top-2.5 -right-2.5 w-4 h-4 border-t-2 border-r-2 border-accent dark:border-accent-dark z-30 pointer-events-none" />
        <div className="absolute -bottom-2.5 -left-2.5 w-4 h-4 border-b-2 border-l-2 border-accent dark:border-accent-dark z-30 pointer-events-none" />
        <div className="absolute -bottom-2.5 -right-2.5 w-4 h-4 border-b-2 border-r-2 border-accent dark:border-accent-dark z-30 pointer-events-none" />

        {/* Main Image Container */}
        <div className="relative w-full h-full border border-line dark:border-void-line bg-paper dark:bg-void overflow-hidden group shadow-[0_20px_50px_rgba(0,61,153,0.35)] dark:shadow-[0_20px_50px_rgba(0,61,153,0.20)] z-10">
          <img
            src="/profile.png"
            alt="Aayan Mulla"
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />

          {/* Bottom subtle gradient vignette */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 group-hover:opacity-30 transition-opacity duration-500" />

          {/* Developer Tag (Bottom Right, No Background) */}
          <span className="absolute bottom-4 right-4 tag-mono text-accent dark:text-accent-dark font-mono font-bold text-[10.5px] tracking-wider z-20 drop-shadow-md">
            {`{ CLASS: DEVELOPER }`}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
