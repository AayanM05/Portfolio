import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUp, Github, Mail, MapPin, Copyright } from "lucide-react";
import { profile, nav } from "../data/content";
import { formatEyebrow } from "./Section";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.footer
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-container mx-auto px-6 md:px-10 pt-16 pb-8">
        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left gap-3.5 md:gap-8 pb-0">
          <div>
            <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">
              {formatEyebrow("Open to work")}
            </span>
            <h2 className="font-display font-bold text-display-md mt-3 max-w-none">
              Let's build the next thing.
            </h2>
          </div>
          <a
            href={`mailto:${profile.email}`}
            style={{ transform: "translateY(13px)" }}
            className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2.5 text-xs md:px-6 md:py-3 md:text-base bg-ink text-paper dark:bg-void-ink dark:text-void font-medium hover:opacity-85 transition-opacity shrink-0 w-fit"
          >
            <Mail size={14} className="md:w-4 md:h-4" /> {profile.email}
          </a>
        </div>

        <div className="mt-12 md:mt-[30px] mb-[39px] h-[1px] bg-line dark:bg-void-line w-full" />

        <div 
          style={{ transform: "translateX(7px)" }} 
          className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-0 mt-0 mb-0"
        >
          <div>
            <p className="tag-mono font-bold text-accent dark:text-accent-dark mb-4">Navigate</p>
            <ul className="space-y-3 text-[13px]">
              <li><Link to="/" className="hover:text-accent dark:hover:text-accent-dark transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent dark:hover:text-accent-dark transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-accent dark:hover:text-accent-dark transition-colors">Projects</Link></li>
            </ul>
          </div>
          <div>
            <p className="tag-mono font-bold text-accent dark:text-accent-dark mb-4">Portfolio</p>
            <ul className="space-y-3 text-[13px]">
              <li><Link to="/skills" className="hover:text-accent dark:hover:text-accent-dark transition-colors">Skills</Link></li>
              <li><Link to="/achievements" className="hover:text-accent dark:hover:text-accent-dark transition-colors">Achievements</Link></li>
              <li><Link to="/contact" className="hover:text-accent dark:hover:text-accent-dark transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="tag-mono font-bold text-accent dark:text-accent-dark mb-4">Projects</p>
            <ul className="space-y-3 text-[13px]">
              <li><Link to="/projects/erecyclo" className="hover:text-accent dark:hover:text-accent-dark transition-colors">eRecyclo</Link></li>
              <li><Link to="/projects/elearny" className="hover:text-accent dark:hover:text-accent-dark transition-colors">eLearny</Link></li>
              <li><Link to="/projects/seizedeals" className="hover:text-accent dark:hover:text-accent-dark transition-colors">SeizeDeals</Link></li>
            </ul>
          </div>
          <div>
            <p className="tag-mono font-bold text-accent dark:text-accent-dark mb-4">Connect</p>
            <ul className="space-y-3 text-[13px]">
              <li>
                <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent dark:hover:text-accent-dark transition-colors">
                  <Github size={14} /> GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-accent dark:hover:text-accent-dark transition-colors">
                  <Mail size={14} /> Email
                </a>
              </li>
              <li>
                <div className="inline-flex items-start gap-2">
                  <MapPin size={14} className="shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[13px] leading-snug">
                      Pune,<br />
                      Maharashtra, India
                    </span>
                    <span className="text-ink-soft/60 dark:text-void-soft/50 block text-[11px] mt-1 tag-mono uppercase">
                      Ready to Relocate
                    </span>
                  </div>
                </div>
              </li> 
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "117px", marginBottom: "28px" }} className="h-[1px] bg-line dark:bg-void-line w-full" />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-0">
          <p className="tag-mono text-ink-soft dark:text-void-soft inline-flex items-center gap-1.5">
            <Copyright size={11} className="shrink-0 opacity-70" />
            <span>{new Date().getFullYear()}</span>
            <Link to="/" className="inline-block font-bold text-accent dark:text-accent-dark hover:-translate-y-[1px] transition-transform">{profile.name}</Link>
            <span>· All Rights Reserved</span>
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 tag-mono text-ink-soft dark:text-void-soft hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
