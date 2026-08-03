import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECT_SNIPPETS = {
  erecyclo: [
    "// yolov8 model inference",
    "/* haversine algorithm */",
    "// razorpay webhook",
    "{ OTP_CHAIN_OF_CUSTODY }",
    "/* PostgreSQL spatial index */",
    "// redis task queue",
    "/* YOLOv8 19.6k dataset */",
  ],
  elearny: [
    "// spring boot controller",
    "/* course enrollment */",
    "// mysql relational query",
    "{ JWT_AUTH_BEARER }",
    "/* hibernate ORM entity */",
    "// security filter chain",
    "/* Spring Security filter */",
  ],
  seizedeals: [
    "// django e-commerce",
    "/* product catalog query */",
    "// checkout order webhook",
    "{ STRIPE_PAYMENT_INTENT }",
    "/* admin dashboard views */",
    "// session cart manager",
    "/* Django ORM queryset */",
  ],
};

const DEFAULT_SNIPPETS = [
  "// full-stack architecture",
  "/* microservice pipeline */",
  "// automated webhook",
  "{ REST_API_ENDPOINT }",
  "/* database migration */",
  "// high performance backend",
];

const POSITIONS = [
  { top: "20%", left: "12%" },
  { top: "68%", left: "42%" },
  { top: "24%", left: "48%" },
  { top: "72%", left: "15%" },
  { top: "42%", left: "10%" },
  { top: "76%", left: "50%" },
  { top: "18%", left: "38%" },
];

export default function ProjectThumb({ id, name, className = "" }) {
  const snippets = PROJECT_SNIPPETS[id] || DEFAULT_SNIPPETS;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Triggers next snippet at 3.1s (when previous is ~90% slowly faded out)
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % snippets.length);
    }, 3100);

    return () => clearInterval(timer);
  }, [snippets.length]);

  const currentSnippet = snippets[index];
  const pos = POSITIONS[index % POSITIONS.length];

  return (
    <div
      className={`relative overflow-hidden bg-[#06080F] border border-line dark:border-void-line [perspective:800px] ${className}`}
    >
      {/* 1. Soft radial glow center accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,61,153,0.3)_0%,transparent_75%)] pointer-events-none" />

      {/* 2. Smooth emergence -> 1.5s hold -> slow disappearance -> next emerges near 90% gone */}
      <div className="absolute inset-0 pointer-events-none select-none font-mono text-[10px] md:text-[11px] text-accent/90 font-medium">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ scale: 0.25, opacity: 0, filter: "blur(6px)" }}
            animate={{
              scale: [0.25, 1, 1, 1.2],
              opacity: [0, 0.95, 0.95, 0],
              filter: ["blur(6px)", "blur(0px)", "blur(0px)", "blur(5px)"],
            }}
            transition={{
              duration: 3.5,
              times: [0, 0.17, 0.60, 1], // 0-0.6s emergence, 0.6-2.1s (1.5s hold), 2.1-3.5s (1.4s slow disappear)
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              maxWidth: "80%",
              transformOrigin: "center center",
            }}
            className="truncate tracking-wider drop-shadow-[0_2px_8px_rgba(0,61,153,0.6)] text-accent dark:text-accent-dark font-mono"
          >
            {currentSnippet}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Clean center project name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4">
        <span className="font-display text-2xl md:text-3xl text-paper tracking-wider uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] text-center truncate">
          {name}
        </span>
      </div>
    </div>
  );
}
