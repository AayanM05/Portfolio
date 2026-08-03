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
        {/* Structural offset backplate */}
        <div className="absolute inset-0 border border-line/60 dark:border-void-line/80 pointer-events-none z-0 translate-x-3 translate-y-3" />

        {/* Main Image Container */}
        <div className="relative w-full h-full border border-line dark:border-void-line bg-paper-hero dark:bg-void-ink/5 overflow-hidden group shadow-xl z-10">
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
