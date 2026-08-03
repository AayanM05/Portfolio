import { motion } from "framer-motion";
import { projects, quotes } from "../data/content";
import ProjectCard from "../components/ProjectCard";
import AbstractField from "../components/AbstractField";
import QuoteBanner from "../components/QuoteBanner";
import Section, { formatEyebrow } from "../components/Section";

const criteria = [
  { title: "Solves a real problem", detail: "Not a to-do app — something with an actual user and an actual failure mode if it's wrong." },
  { title: "Forces a new skill", detail: "eLearny existed so I'd have to learn Spring Boot properly, not just read about it." },
  { title: "Survives production", detail: "Deployed, debugged under real load, and documented — not left running on localhost." },
];

export default function Projects() {
  return (
    <>
      <section className="relative pt-hero-top pb-20 md:pt-hero-top-lg md:pb-28 px-6 md:px-10 overflow-hidden">
        <AbstractField variant="compact" />
        <div className="max-w-container mx-auto relative">
          <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">{formatEyebrow("Work")}</span>
          <h1 className="font-display font-bold text-display-lg mt-4 max-w-2xl">Projects</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft dark:text-void-soft leading-relaxed">
            Three builds, three different problems — a computer-vision platform, a Spring Boot LMS, and a
            Django storefront. Open one for the full case study.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <QuoteBanner line={quotes.projects.line} attribution="Aayan Mulla" />

      <Section eyebrow="Selection" title="How I choose what to build" bordered>
        <div className="grid md:grid-cols-3 gap-10">
          {criteria.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-line dark:border-void-line pt-6"
            >
              <span className="tag-mono text-accent dark:text-accent-dark">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl mt-3">{c.title}</h3>
              <p className="text-ink-soft dark:text-void-soft mt-3 leading-relaxed">{c.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
