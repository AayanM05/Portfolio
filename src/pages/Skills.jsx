import { motion } from "framer-motion";
import { skills, dailyTools, profile, quotes } from "../data/content";
import AbstractField from "../components/AbstractField";
import DetectionFrame from "../components/DetectionFrame";
import Section from "../components/Section";
import SkillRow from "../components/SkillRow";
import QuoteBanner from "../components/QuoteBanner";

export default function Skills() {
  return (
    <>
      {/* Hero Section matching Projects page design system 100% */}
      <div className="relative overflow-hidden bg-paper dark:bg-void pb-20 md:pb-28">
        <AbstractField variant="hero" />

        {/* Hero Section */}
        <section className="relative pt-[189px] pb-[112px] md:pt-[182px] md:pb-[128px] px-6 md:px-10 translate-y-[11px] md:translate-y-[2px]">
          <div className="max-w-container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <DetectionFrame tag="PAGE: SKILLS" always>
                <h1
                  className="font-display font-bold text-[calc(3.2rem+13px)] md:text-display-lg leading-[1.05] sm:leading-none md:leading-[1.02] mt-4 flex flex-col"
                  style={{ letterSpacing: "0.017em" }}
                >
                  <span>TECHNICAL</span>
                  <span className="-ml-[2px]">CAPABILITIES.</span>
                </h1>
              </DetectionFrame>
            </motion.div>

            {/* Core Capability Badges Strip including OS & Support */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-2 md:gap-2.5 max-w-3xl"
            >
              {[
                "JAVA",
                "SPRING BOOT",
                "PYTHON",
                "DJANGO",
                "YOLOV8",
                "POSTGRESQL",
                "MYSQL",
                "CELERY",
                "REDIS",
                "REST APIS",
                "DOCKER",
                "RAILWAY",
                "LINUX / OS",
                "HARDWARE & SUPPORT",
                "GIT / GITHUB",
                "TAILWIND CSS",
              ].map((tag, idx) => (
                <span
                  key={tag}
                  className={`tag-mono text-[9.5px] sm:text-[10.5px] md:text-[11.5px] font-bold px-2 py-0.5 md:px-2.5 md:py-1 border border-line/60 dark:border-void-line/80 text-accent dark:text-accent-dark bg-paper/60 dark:bg-void-ink/5 tracking-wider uppercase ${
                    idx >= 9 ? "hidden md:inline-flex" : "inline-flex"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-sm md:text-base font-medium text-ink-soft dark:text-void-soft leading-relaxed"
            >
              Hover or tap any skill to inspect where it has been applied across real production builds, microservice backends, and machine learning pipelines. Every capability listed reflects hands-on architecture, schema design, and verified code implementations rather than tutorial explorations.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Main Skills Matrix Section — No card-like outer wrappers, clean structural lines & 28px category gap */}
      <Section eyebrow="Matrix" title="Core Engineering Stack">
        <div className="space-y-24 md:space-y-28">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b-2 border-ink dark:border-void-ink">
                <h2 className="font-display font-bold text-xl md:text-2xl uppercase tracking-wider text-ink dark:text-void-ink">
                  {group.category}
                </h2>
                <span className="tag-mono text-[10px] md:text-[11px] font-bold px-2 py-0.5 md:px-2.5 md:py-1 border border-line/60 dark:border-void-line/80 text-accent dark:text-accent-dark bg-paper/60 dark:bg-void-ink/5 tracking-wider uppercase inline-flex">
                  {group.tag}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
                {group.items.map((item) => (
                  <SkillRow key={item.name} skill={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quote Banner */}
      <div style={{ margin: "17px 0" }}>
        <QuoteBanner line={quotes.skills.line} attribution={profile.name} />
      </div>

      {/* Toolbox Section */}
      <Section eyebrow="Toolbox" title="What I reach for daily">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {dailyTools.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-4 flex items-center justify-between group hover:border-accent dark:hover:border-accent-dark transition-all duration-200"
            >
              <span className="tag-mono text-xs font-bold text-ink dark:text-void-ink group-hover:text-accent dark:group-hover:text-accent-dark transition-colors uppercase">
                {tool}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 dark:bg-accent-dark/40 group-hover:bg-accent dark:group-hover:bg-accent-dark transition-colors" />
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
