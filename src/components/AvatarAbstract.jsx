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
        className="relative w-full h-full border border-line dark:border-void-line bg-paper-hero dark:bg-void-ink/5 overflow-hidden group shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
      >
        <img
          src="/profile.png"
          alt="Aayan Mulla"
          className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
        />

        {/* Soft bottom vignette overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Developer Tag */}
        <span className="absolute top-4 left-4 tag-mono text-accent dark:text-accent-dark font-mono font-bold text-[10px] tracking-wider z-20 drop-shadow">
          {`{ CLASS: DEVELOPER }`}
        </span>
      </motion.div>
    </div>
  );
}
