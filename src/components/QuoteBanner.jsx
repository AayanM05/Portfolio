import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

/**
 * Short, punchy statement banner — not a long pull-quote.
 * Keep `line` to roughly 3-7 words; this is meant to be a beat,
 * not a paragraph.
 */
export default function QuoteBanner({ line, attribution }) {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden bg-paper dark:bg-void">
      {/* Background grid texture blended smoothly at top and bottom */}
      <div
        className="pointer-events-none absolute inset-0 grid-texture text-ink dark:text-void-ink"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
        }}
      />
      <div className="max-w-container mx-auto px-6 md:px-10 py-[107px] md:py-[139px] text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/*
            ─── QUOTE TEXT STYLE TOGGLE ───────────────────────────────────────
            Switch between three styles by uncommenting the desired <p> block
            and commenting out the other two.

            STYLE 1 — FILLED (active, matches section headings):
          */}
          <span className="font-display text-display-md text-accent dark:text-accent-dark leading-none select-none">"</span>
          <p
            className="font-display font-bold text-display-md leading-[1.35] max-w-4xl mx-auto tracking-[0.035em] uppercase text-ink dark:text-void-ink"
          >
          {/*
            STYLE 2 — OUTLINE ONLY (theme-blue thin stroke):
            <p
              className="font-display font-bold text-display-md leading-[1.35] max-w-4xl mx-auto tracking-[0.035em] uppercase text-accent dark:text-accent-dark"
              style={{
                WebkitTextStroke: "0.1px #003D99",
                WebkitTextFillColor: "transparent",
              }}
            >

            STYLE 3 — OUTLINE with explicit color per theme (more visible):
            <p
              className="font-display font-bold text-display-md leading-[1.35] max-w-4xl mx-auto tracking-[0.035em] uppercase"
              style={{
                WebkitTextStroke: theme === "dark" ? "0.5px #FFFFFF" : "0.5px #000000",
                WebkitTextFillColor: "transparent",
              }}
            >
          */}
            {(() => {
              const breakWord = "Then ";
              const idx = line.toLowerCase().indexOf("then ");
              if (idx !== -1) {
                const end = idx + breakWord.length;
                return (
                  <>
                    {line.slice(0, end).trimEnd()}
                    <br />
                    {line.slice(end)}
                  </>
                );
              }
              return line;
            })()}
          </p>
          {attribution && (
            <p className="font-mono text-xs tracking-widest uppercase text-ink-soft dark:text-void-soft mt-6">
              {attribution}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
