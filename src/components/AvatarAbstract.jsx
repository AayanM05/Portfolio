import { motion } from "framer-motion";

export default function AvatarAbstract({ className = "" }) {
  return (
    <div 
      className={`aspect-[4/5] w-full max-w-[280px] sm:max-w-sm mx-auto md:-translate-y-6 md:translate-x-5 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full p-2.5 border border-line/80 dark:border-void-line bg-paper/90 dark:bg-void/90 backdrop-blur-sm group shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
      >
        {/* Technical Corner Brackets */}
        <span className="absolute top-1 left-1 text-xs tag-mono text-accent dark:text-accent-dark font-mono font-bold select-none pointer-events-none z-30">┌</span>
        <span className="absolute top-1 right-1 text-xs tag-mono text-accent dark:text-accent-dark font-mono font-bold select-none pointer-events-none z-30">┐</span>
        <span className="absolute bottom-1 left-1 text-xs tag-mono text-accent dark:text-accent-dark font-mono font-bold select-none pointer-events-none z-30">└</span>
        <span className="absolute bottom-1 right-1 text-xs tag-mono text-accent dark:text-accent-dark font-mono font-bold select-none pointer-events-none z-30">┘</span>

        {/* Inner Image Wrapper */}
        <div className="relative w-full h-full overflow-hidden border border-line/40 dark:border-void-line/60">
          <img
            src="/profile.png"
            alt="Aayan Mulla"
            className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
          />

          {/* Soft bottom vignette overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 group-hover:opacity-30 transition-opacity duration-500" />

          {/* Developer Tag Badge */}
          <span className="absolute top-3 left-3 tag-mono text-accent dark:text-accent-dark font-mono font-bold text-[10px] tracking-wider px-2 py-0.5 bg-paper/85 dark:bg-void/85 backdrop-blur-md border border-line/40 dark:border-void-line/60 shadow-sm z-20">
            {`{ CLASS: DEVELOPER }`}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
