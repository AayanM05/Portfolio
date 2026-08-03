import { motion } from "framer-motion";

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
        className="relative w-full h-full"
      >
        {/* Soft Ambient Background Glow Halo */}
        <div className="absolute -inset-5 rounded-3xl bg-gradient-to-tr from-accent/25 via-accent/10 to-transparent dark:from-accent-dark/35 dark:via-accent-dark/15 blur-2xl opacity-85 pointer-events-none z-0" />

        {/* Structural Accent Backplate */}
        <div className="absolute inset-0 border border-accent/40 dark:border-accent-dark/50 bg-accent/5 dark:bg-accent-dark/10 pointer-events-none z-0 translate-x-3.5 translate-y-3.5 shadow-md" />

        {/* Main Image Container */}
        <div className="relative w-full h-full border border-line/80 dark:border-void-line bg-paper-hero dark:bg-void-ink/5 overflow-hidden group shadow-[0_24px_50px_rgba(0,0,0,0.18)] dark:shadow-[0_28px_65px_rgba(0,0,0,0.95)] z-10">
          <img
            src="/profile.png"
            alt="Aayan Mulla"
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />

          {/* Bottom subtle gradient vignette */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Technical Corner Brackets */}
          <span className="absolute top-2 left-2 text-[10px] tag-mono text-accent dark:text-accent-dark select-none pointer-events-none">┌</span>
          <span className="absolute top-2 right-2 text-[10px] tag-mono text-accent dark:text-accent-dark select-none pointer-events-none">┐</span>
          <span className="absolute bottom-2 left-2 text-[10px] tag-mono text-accent dark:text-accent-dark select-none pointer-events-none">└</span>
          <span className="absolute bottom-2 right-2 text-[10px] tag-mono text-accent dark:text-accent-dark select-none pointer-events-none">┘</span>

          {/* Developer Tag */}
          <span className="absolute top-4 left-4 tag-mono text-accent dark:text-accent-dark font-mono font-bold text-[10px] tracking-wider z-20 drop-shadow">
            {`{ CLASS: DEVELOPER }`}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
