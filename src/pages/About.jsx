import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { timelineItems, profile, quotes, values, learningApproach } from "../data/content";
import AbstractField from "../components/AbstractField";
import DetectionFrame from "../components/DetectionFrame";
import QuoteBanner from "../components/QuoteBanner";
import Section, { formatEyebrow } from "../components/Section";
import StatStrip from "../components/StatStrip";
import AvatarAbstract from "../components/AvatarAbstract";

export default function About() {
  return (
    <>
      {/* About Hero Section matching Home Hero design system */}
      <div className="relative overflow-hidden bg-paper dark:bg-void pb-20 md:pb-28">
        <AbstractField variant="hero" />

        {/* Hero Section */}
        <section className="relative pt-[156px] pb-12 md:pt-40 md:pb-16 px-6 md:px-10 translate-y-[2px]">
          <div className="max-w-container mx-auto relative grid md:grid-cols-[1.3fr_1fr] gap-14 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <DetectionFrame tag="PAGE: ABOUT" always>
                  <h1
                    className="font-display font-bold text-display-lg leading-[1.05] sm:leading-none md:leading-[1.02] mt-4 flex flex-col"
                    style={{ letterSpacing: "0.017em" }}
                  >
                    <span>ENGINEER FIRST,</span>
                    <span className="-ml-[2px]">THEN DEVELOPER.</span>
                  </h1>
                </DetectionFrame>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 max-w-2xl space-y-5 text-sm md:text-base font-medium text-ink-soft dark:text-void-soft leading-relaxed"
              >
                <p>
                  I'm {profile.name}, a full-stack developer based in {profile.location}, working mainly across
                  Java/Spring Boot and Python/Django. I graduated with a Bachelor of Engineering (BE) in Computer Engineering,
                  and I like projects that don't stop at a working demo. <Link to="/projects/erecyclo" className="font-semibold text-ink-soft dark:text-void-soft hover:text-accent dark:hover:text-accent-dark transition-colors duration-200">eRecyclo</Link>, my
                  flagship project, went from a trained YOLOv8 model to a peer-reviewed paper.
                </p>
                <p>
                  My internship at Elite Softwares put me on Django full-time, building <Link to="/projects/seizedeals" className="font-semibold text-ink-soft dark:text-void-soft hover:text-accent dark:hover:text-accent-dark transition-colors duration-200">SeizeDeals</Link> end to end.
                  Outside of that, I picked up Spring Boot on my own through <Link to="/projects/elearny" className="font-semibold text-ink-soft dark:text-void-soft hover:text-accent dark:hover:text-accent-dark transition-colors duration-200">eLearny</Link>, a full LMS I built with
                  proper documentation before writing a line of backend code, because I wanted to prove I could
                  work the way a real engineering team does, not just follow a tutorial.
                </p>
                <p>I'm currently looking for fresher developer roles.</p>
              </motion.div>

              {/* Profile photo on mobile view (positioned above CGPA and project counters) */}
              <AvatarAbstract className="mt-12 mb-14 md:hidden" />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 md:mt-12"
              >
                <StatStrip
                  border={false}
                  stats={[
                    { value: "7.01", label: "Final CGPA" },
                    { value: "12", label: "Shipped projects" },
                    { value: "3", label: "Published paper" },
                    { value: "2", label: "Full stacks" },
                  ]}
                />
              </motion.div>
            </div>

            {/* Profile photo on desktop view */}
            <AvatarAbstract className="hidden md:block" />
          </div>
        </section>
      </div>

      {/* Timeline */}
      <Section eyebrow="Journey" title="Timeline">
        <div className="relative">
          {/* Center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-line dark:bg-void-line -translate-x-1/2" />

          <div className="space-y-14 md:space-y-6">
            {timelineItems.map((item, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative md:grid md:grid-cols-2 md:gap-14 md:py-8"
                >
                  {/* Center dot — desktop only */}
                  <span className="hidden md:block absolute left-1/2 top-10 w-3 h-3 rounded-full bg-accent dark:bg-accent-dark -translate-x-1/2 z-10" />

                  <div className={isRight ? "md:col-start-2 md:text-left" : "md:col-start-1 md:text-right"}>
                    <div className="border-l-2 md:border-l-0 border-line dark:border-void-line pl-6 md:pl-0">
                      <div className={`tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark flex items-center gap-2 ${!isRight ? "md:justify-end" : "justify-start"}`}>
                        <span>{formatEyebrow(item.category)}</span>
                        <span>·</span>
                        <span>{item.period}</span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl mt-2">{item.title}</h3>
                      <p className="text-xs md:text-sm font-medium text-ink-soft/70 dark:text-void-soft/70 mt-1">{item.place}</p>
                      <p className={`text-[12.5px] md:text-[14px] font-medium text-ink-soft dark:text-void-soft mt-3 leading-relaxed max-w-lg ${!isRight ? "md:ml-auto md:mr-0" : ""}`}>
                        {item.detail}
                      </p>
                      {item.marksheetUrl && (
                        <a
                          href={item.marksheetUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 mt-3 tag-mono text-[11px] md:text-[12.5px] text-accent dark:text-accent-dark hover:opacity-75 transition-opacity font-semibold"
                        >
                          {item.linkText} <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      <QuoteBanner line={quotes.about.line} attribution={profile.name} />

      {/* Values */}
      <Section eyebrow="Principles" title="What I optimize for">
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-line dark:border-void-line p-8"
            >
              <span className="tag-mono text-accent dark:text-accent-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl mt-4">{v.title}</h3>
              <p className="text-[12.5px] md:text-[14px] font-medium text-ink-soft dark:text-void-soft mt-3 leading-relaxed">{v.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Learning approach */}
      <Section eyebrow={learningApproach.eyebrow} title={learningApproach.title} narrow>
        <p className="-mt-4 md:-mt-8 text-[13.4px] md:text-[16.3px] font-medium text-ink-soft dark:text-void-soft leading-relaxed">{learningApproach.body}</p>
      </Section>

      <Section narrow className="text-center">
        <h2 className="font-display font-bold text-display-md tracking-[0.035em] mx-auto text-center">Curious about the work itself?</h2>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mt-8 px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-ink text-paper dark:bg-void-ink dark:text-void font-medium hover:opacity-85 transition-opacity"
        >
          See the projects <ArrowUpRight size={16} className="md:hidden" /><ArrowUpRight size={18} className="hidden md:block" />
        </Link>
      </Section>
    </>
  );
}
