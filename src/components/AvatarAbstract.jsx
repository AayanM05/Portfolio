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
        className="relative w-full h-full border border-line dark:border-void-line bg-paper dark:bg-void overflow-hidden group shadow-lg"
      >
        {/* Soft edge-blending vignette overlay for all 4 sides */}
        <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_36px_20px_#FFFFFF] dark:shadow-[inset_0_0_36px_20px_#07070A] transition-all duration-500" />

        <img
          src="/profile.png"
          alt="Aayan Mulla"
          className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 transition-all duration-500 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
        />

        <span className="absolute top-4 left-4 tag-mono text-accent dark:text-accent-dark font-mono font-medium text-[10px] z-20">
          {`{ CLASS: DEVELOPER }`}
        </span>
      </motion.div>
    </div>
  );
}
