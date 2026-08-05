import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, profile } from "../data/content";
import { useTheme } from "../hooks/useTheme";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/40 dark:border-void-line/40 bg-paper/80 dark:bg-void/80 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
      <div className="max-w-container mx-auto px-6 md:px-10 h-[81px] flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3.5 group ml-[1px] md:ml-0 lg:-ml-[16px]" onClick={() => setOpen(false)}>
          <span className="w-12 h-12 border-2 border-black dark:border-white rounded-none flex items-center justify-center font-display text-xl md:text-2xl text-accent dark:text-accent-dark shrink-0 bg-transparent group-hover:border-accent dark:group-hover:border-accent-dark transition-colors duration-300 leading-none antialiased tracking-[0.12em] pl-[0.12em]">
            AM
          </span>
          <div className="flex flex-col justify-center leading-tight">
            <span className="font-mono text-sm md:text-base font-bold tracking-wider text-black dark:text-white uppercase transition-colors">
              {profile.name}
            </span>
            <span className="tag-mono text-[10px] md:text-[11px] text-ink-soft dark:text-void-soft font-medium tracking-[0.15em]">
              FULL-STACK DEVELOPER
            </span>
          </div>
        </NavLink>

        <div className="flex items-center gap-4 md:gap-5 lg:gap-10">
          <nav className="hidden md:flex items-center gap-3.5 lg:gap-8">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `tag-mono text-[12.7px] transition-colors ${
                    isActive
                      ? "text-accent dark:text-accent-dark"
                      : "text-ink-soft dark:text-void-soft hover:text-ink dark:hover:text-void-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle color theme"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-line dark:border-void-line hover:border-accent dark:hover:border-accent-dark transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-line dark:border-void-line"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[81px] bottom-0 h-[calc(100vh-81px)] bg-paper dark:bg-void z-50 md:hidden overflow-y-auto px-8 py-10 flex flex-col justify-between border-t border-line/40 dark:border-void-line/40"
          >
            <div className="flex flex-col gap-1 pt-1">
              {nav.map((item, idx) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `tag-mono text-base tracking-wider transition-colors flex items-center justify-between py-3 border-b border-line/30 dark:border-void-line/50 ${
                      isActive
                        ? "text-accent dark:text-accent-dark font-bold"
                        : "text-ink dark:text-void-ink font-semibold hover:text-accent dark:hover:text-accent-dark"
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-ink-soft/60 dark:text-void-ink/50 font-mono">
                    0{idx + 1}
                  </span>
                </NavLink>
              ))}
            </div>

            <div className="pt-6 border-t border-line/30 dark:border-void-line/50 flex flex-col gap-1.5">
              <span className="tag-mono text-xs text-accent dark:text-accent-dark font-bold uppercase tracking-wider">
                {profile.name}
              </span>
              <span className="tag-mono text-[10px] text-ink-soft dark:text-void-soft font-medium tracking-wider uppercase">
                {profile.role}
              </span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
