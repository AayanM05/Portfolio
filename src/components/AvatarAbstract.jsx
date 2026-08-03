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
        className="relative w-full h-full border border-line dark:border-void-line bg-paper-hero dark:bg-void-ink/10 overflow-hidden group shadow-lg"
      >
        <img
          src="/profile.png"
          alt="Aayan Mulla"
          className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 transition-all duration-500"
        />

        <span className="absolute top-4 left-4 tag-mono text-accent dark:text-accent-dark font-mono font-medium px-2 py-0.5 bg-paper/80 dark:bg-void/80 backdrop-blur-sm border border-line/30 dark:border-void-line/40 text-[10px]">
          {`{ CLASS: DEVELOPER }`}
        </span>
      </motion.div>
    </div>
  );
}
