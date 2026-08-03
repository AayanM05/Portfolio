import { motion } from "framer-motion";
import clsx from "clsx";

export function formatEyebrow(text) {
  if (!text) return "";
  return `// ${text.trim().replace(/\s+/g, "_")}`;
}

export default function Section({
  eyebrow,
  title,
  action,
  children,
  className = "",
  bordered = false,
  narrow = false,
  tight = false,
  style,
}) {
  return (
    <section
      style={style}
      className={clsx(
        tight ? "py-12 md:py-16" : "py-section md:py-section-lg",
        "px-6 md:px-10",
        bordered && "border-t border-line dark:border-void-line",
        className
      )}
    >
      <div className={clsx("max-w-container mx-auto", narrow && "max-w-3xl")}>
        {(eyebrow || title || action) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={clsx(
              "flex flex-col md:flex-row md:items-end justify-between gap-4",
              tight ? "mb-8 md:mb-10" : "mb-14 md:mb-20"
            )}
          >
            <div>
              {eyebrow && (
                <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">
                  {formatEyebrow(eyebrow)}
                </span>
              )}
              {title && (
                <h2 className="font-display font-bold text-display-md mt-3 max-w-2xl tracking-[0.035em]">{title}</h2>
              )}
            </div>
            {action && (
              <div className="shrink-0 md:pb-2">
                {action}
              </div>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
