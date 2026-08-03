import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile, projects, researchPaper, certifications, quotes, process, dailyTools } from "../data/content";
import Marquee from "../components/Marquee";
import ProjectCard from "../components/ProjectCard";
import AbstractField from "../components/AbstractField";
import DetectionFrame from "../components/DetectionFrame";
import QuoteBanner from "../components/QuoteBanner";
import Section, { formatEyebrow } from "../components/Section";
import AvatarAbstract from "../components/AvatarAbstract";

const toolGroups = [
  {
    title: "Development",
    tools: ["IntelliJ IDEA", "VS Code", "Postman", "Git"]
  },
  {
    title: "Databases",
    tools: ["MySQL Workbench", "pgAdmin"]
  },
  {
    title: "DevOps & Cloud",
    tools: ["Docker Desktop", "Railway", "Firebase Console"]
  },
  {
    title: "Design & Docs",
    tools: ["Figma", "GitHub Desktop", "Notion"]
  }
];

export default function Home() {
  return (
    <>
      {/* Hero & Marquee with continuous background grid extending past marquee */}
      <div className="relative overflow-hidden bg-paper dark:bg-void pb-32 md:pb-44">
        <AbstractField variant="hero" />

        {/* Hero */}
        <section className="relative pt-[156px] pb-12 md:pt-40 md:pb-16 px-6 md:px-10 translate-y-[2px]">
          <div className="max-w-container mx-auto relative grid md:grid-cols-[1.3fr_1fr] gap-14 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <DetectionFrame tag="CLASS: DEVELOPER" always>
                  <h1
                    className="font-display font-bold text-[6.8rem] sm:text-hero leading-[1.05] sm:leading-none md:leading-[1.02] mt-4 flex flex-col"
                    style={{ letterSpacing: "0.017em" }}
                  >
                    <span>AAYAN</span>
                    <span className="-ml-[2px]">MULLA</span>
                  </h1>
                </DetectionFrame>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 max-w-xl text-sm md:text-base font-medium text-ink-soft dark:text-void-soft leading-relaxed"
              >
                {profile.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 flex flex-nowrap items-center gap-2 md:gap-4"
                style={{ marginTop: "calc(3rem + 2.5px)" }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 md:gap-2 px-3.5 md:px-6 py-[10px] text-xs md:text-base whitespace-nowrap border-2 border-transparent bg-ink text-paper dark:bg-void-ink dark:text-void font-medium shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.38)] hover:-translate-y-0.5 transition-all duration-300 dark:shadow-[0_12px_32px_rgba(255,255,255,0.12)]"
                >
                  View Projects <ArrowUpRight size={16} className="md:w-4 md:h-4" />
                </Link>
                <a
                  href="/docs/resume/resume.pdf"
                  className="inline-flex items-center gap-1.5 md:gap-2 px-3.5 md:px-[25px] py-[10px] text-xs md:text-base whitespace-nowrap -ml-0 md:-ml-[8.2px] translate-y-[0.5px] translate-x-[8px] border border-ink bg-paper text-ink dark:border-paper dark:bg-void dark:text-void-ink font-medium shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Download Resume <Download size={16} className="md:w-4 md:h-4" />
                </a>
              </motion.div>
            </div>

            <AvatarAbstract className="hidden md:block" />
          </div>
        </section>

        {/* Marquee - shifted downside by additional 13px */}
        <div className="relative mt-[138px] md:mt-[170px]">
          <Marquee />
        </div>
      </div>

      {/* Featured projects (clean background, no grid) */}
      <Section
        eyebrow="Selected work"
        title="Featured projects"
        action={
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 tag-mono text-ink-soft dark:text-void-soft hover:text-accent dark:hover:text-accent-dark"
          >
            All projects <ArrowUpRight size={14} />
          </Link>
        }
      >
        <div className="grid md:grid-cols-3 gap-6 pb-[38px]">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </Section>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{ margin: "17px 0" }}
      >
        <QuoteBanner line={quotes.home.line} attribution={profile.name} />
      </motion.div>

      {/* How I work */}
      <div style={{ paddingTop: "54px", paddingBottom: "127px" }}>
        <Section
          eyebrow="Process"
          title="How I work"
          className="!py-0"
        >
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-line dark:border-void-line pt-6"
            >
              <span className="tag-mono text-accent dark:text-accent-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl md:text-2xl mt-3">{step.title}</h3>
              <p className="text-[12.5px] md:text-[14px] font-medium text-ink-soft dark:text-void-soft mt-3 leading-relaxed">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      </div>

      {/* Daily tools */}
      <div style={{ margin: "17px 0" }}>
        <Section eyebrow="Toolbox" title="What I reach for daily" tight>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-x-12">
            {toolGroups.map((group, groupIdx) => (
              <div key={group.title} className="flex flex-col">
                <span className="tag-mono text-accent dark:text-accent-dark font-bold text-[10px] md:text-[11px] tracking-wider uppercase">
                  {group.title.trim().replace(/\s+/g, "_")}
                </span>
                <div className="h-[1px] bg-line dark:bg-void-line w-full mt-3 mb-4" />
                <div className="flex flex-col gap-2">
                  {group.tools.map((tool, toolIdx) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.55, delay: (groupIdx * 3 + toolIdx) * 0.03, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ x: 4 }}
                      className="text-xs md:text-sm font-medium py-1 text-ink-soft dark:text-void-soft hover:text-accent dark:hover:text-accent-dark transition-all duration-200 cursor-default flex items-center gap-1.5"
                    >
                      <span className="text-accent/30 dark:text-accent-dark/30 font-mono text-[9px]">/</span>
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Achievement strip */}
      <section>
        <div className="max-w-container mx-auto px-6 md:px-10 py-section grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="border border-line dark:border-void-line p-7 flex flex-col"
          >
            <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">{formatEyebrow("Published research")}</span>
            <p className="font-display text-xl mt-4 leading-snug">{researchPaper.title}</p>
            <p className="text-[11px] md:text-xs font-medium text-ink-soft dark:text-void-soft leading-relaxed mt-4">
              Peer-reviewed and presented at {researchPaper.venue}, covering the full YOLOv8 detection
              pipeline and location-based collector matching behind eRecyclo.
            </p>
            <p className="tag-mono text-accent dark:text-accent-dark mt-4">{researchPaper.detail}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="border border-line dark:border-void-line p-7 flex flex-col justify-between"
          >
            <div>
              <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">{formatEyebrow("Certification")}</span>
              
              <div className="mt-4">
                <p className="font-display text-xl leading-snug">{certifications[0].title}</p>
                <p className="text-[11px] md:text-xs font-medium text-ink-soft dark:text-void-soft leading-relaxed mt-2">
                  Completed Python-Django developer internship building Django e-commerce platform.
                </p>
                <p className="tag-mono text-accent dark:text-accent-dark text-[9px] mt-2">{certifications[0].issuer} · {certifications[0].date}</p>
              </div>

              <div className="h-[1px] bg-line dark:bg-void-line my-4" />

              <div>
                <p className="font-display text-xl leading-snug">{certifications[1].title}</p>
                <p className="text-[11px] md:text-xs font-medium text-ink-soft dark:text-void-soft leading-relaxed mt-2">
                  A structured program covering core Java and SQL fundamentals to reinforce backend development skills.
                </p>
                <p className="tag-mono text-accent dark:text-accent-dark text-[9px] mt-2">{certifications[1].issuer} · {certifications[1].date}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="border border-line dark:border-void-line p-7 flex flex-col"
          >
            <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">{formatEyebrow("Academics")}</span>
            <p className="font-display text-xl mt-4 leading-snug">Bachelor of Engineering in Computer Engineering</p>
            <p className="text-[11px] md:text-xs font-medium text-ink-soft dark:text-void-soft leading-relaxed mt-4">
              At Dr. D.Y. Patil College of Engineering and Innovation, Varale, Pune under Savitribai Phule Pune University (SPPU).
            </p>
            <p className="tag-mono text-accent dark:text-accent-dark mt-4">CGPA 7.01 · July 2026</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
