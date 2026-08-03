import { motion } from "framer-motion";
import { skills, dailyTools } from "../data/content";
import AbstractField from "../components/AbstractField";
import Section, { formatEyebrow } from "../components/Section";
import SkillRow from "../components/SkillRow";

export default function Skills() {
  return (
    <>
      <section className="relative pt-hero-top pb-20 md:pt-hero-top-lg md:pb-28 px-6 md:px-10 overflow-hidden">
        <AbstractField variant="compact" />
        <div className="max-w-container mx-auto relative">
          <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">{formatEyebrow("Capabilities")}</span>
          <h1 className="font-display text-display-lg mt-4 max-w-2xl">Skills</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft dark:text-void-soft leading-relaxed">
            Hover or tap a skill to see where it's actually been used — a real project, or the
            context it came from.
          </p>

          <div className="mt-16 space-y-28">
            {skills.map((group, gi) => (
              <div key={group.category}>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="tag-mono px-2 py-1 border border-line dark:border-void-line text-accent dark:text-accent-dark">
                    {group.tag}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl">{group.category}</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: (gi * 0.05) + i * 0.03 }}
                    >
                      <SkillRow skill={item} />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Toolbox" title="What I reach for daily" bordered>
        <div className="flex flex-wrap gap-3">
          {dailyTools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="tag-mono px-4 py-2.5 border border-line dark:border-void-line text-ink-soft dark:text-void-soft"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Approach" title="How I pick up new stacks" bordered narrow>
        <p className="text-lg text-ink-soft dark:text-void-soft leading-relaxed">
          Django was the stack I learned first, during my internship. Spring Boot was the one I taught
          myself afterward, on purpose — proof I could get productive in an unfamiliar framework without
          a class schedule forcing it. Documentation and architecture always come before the first line
          of backend code.
        </p>
      </Section>
    </>
  );
}
