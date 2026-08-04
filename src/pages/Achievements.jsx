import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { researchPaper, certifications, education, quotes, profile } from "../data/content";
import DetectionFrame from "../components/DetectionFrame";
import AbstractField from "../components/AbstractField";
import QuoteBanner from "../components/QuoteBanner";
import Section from "../components/Section";
import StatStrip from "../components/StatStrip";

const careerPrinciples = [
  {
    step: "01",
    title: "Depth Beats Breadth",
    detail: "Rather than superficial framework tutorials, every milestone represents deep architectural execution — from peer-reviewed research to production Django builds.",
  },
  {
    step: "02",
    title: "Peer-Reviewed Validation",
    detail: "System design decisions and machine learning benchmark evaluations verified and published in JACIIE (Paper ID SP-2026-015).",
  },
  {
    step: "03",
    title: "Fresher Developer Roles",
    detail: "Prepared to bring production-grade backend reliability and computer-vision expertise to software engineering teams in Pune or Mumbai.",
  },
];

export default function Achievements() {
  const be = education.find((e) => e.id === "be");

  const academicStats = [
    { value: "7.01", label: "Final CGPA" },
    { value: "7.88", label: "4th Yr SGPA" },
    { value: "83.89%", label: "Diploma Aggregate" },
    { value: "86.20%", label: "SSC Board Aggregate" },
  ];

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
              <DetectionFrame tag="PAGE: ACHIEVEMENTS" always>
                <h1
                  className="font-display font-bold text-[calc(3.2rem+13px)] md:text-display-lg leading-[1.05] sm:leading-none md:leading-[1.02] mt-4 flex flex-col"
                  style={{ letterSpacing: "0.017em" }}
                >
                  <span>HONORS &</span>
                  <span className="-ml-[2px]">MILESTONES.</span>
                </h1>
              </DetectionFrame>
            </motion.div>

            {/* Achievement Badges Strip without SGPA and YOLO */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-2 md:gap-2.5 max-w-3xl"
            >
              {[
                "RESEARCH PAPER",
                "CERTIFICATIONS",
                "INTERNSHIP",
                "ACHIEVEMENTS",
                "JACIIE 2026",
                "PAPER ID: SP-2026-015",
                "ELITE SOFTWARES INTERNSHIP",
                "TNS INDIA FOUNDATION",
                "BE COMPUTER ENGINEERING",
                "CGPA 7.01",
              ].map((tag, idx) => (
                <span
                  key={tag}
                  className={`tag-mono text-[9.5px] sm:text-[10.5px] md:text-[11.5px] font-bold px-2 py-0.5 md:px-2.5 md:py-1 border border-line/60 dark:border-void-line/80 text-accent dark:text-accent-dark bg-paper/60 dark:bg-void-ink/5 tracking-wider uppercase ${
                    idx >= 6 ? "hidden md:inline-flex" : "inline-flex"
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
              A documented track record of academic engineering, industry development internships, and peer-reviewed scientific research. Every achievement reflects verified milestones, rigorous benchmark evaluations, and real-world system deployments.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Main Highlights Grid Section */}
      <Section eyebrow="Milestones" title="Publications & Certifications">
        <div className="mt-[73px] md:mt-[113px] pt-4 grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          {/* Published Research Paper Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <DetectionFrame tag="CLASS: PUBLICATION" always className="h-full">
              <div className="border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-8 md:p-11 h-full flex flex-col justify-between transition-all duration-300 hover:border-accent dark:hover:border-accent-dark shadow-sm hover:shadow-md">
                <div>
                  <span className="tag-mono text-[11px] font-bold px-3 py-1 border border-accent dark:border-accent-dark text-accent dark:text-accent-dark bg-accent/10 dark:bg-accent-dark/10 tracking-widest uppercase inline-block">
                    Published Research Paper
                  </span>
                  <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-ink/90 dark:text-void-ink/90 mt-6 leading-snug">
                    {researchPaper.title}
                  </h2>
                  <p className="text-xs md:text-sm font-bold text-ink-soft dark:text-void-soft mt-4">
                    {researchPaper.venue}
                  </p>
                  <p className="text-[12.5px] md:text-[14px] font-medium text-ink-soft/90 dark:text-void-soft/90 mt-3 leading-relaxed">
                    {researchPaper.detail}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3.5">
                  <a
                    href={researchPaper.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-ink text-paper dark:bg-void-ink dark:text-void font-bold text-xs tag-mono tracking-wider uppercase shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:opacity-90 transition-all duration-200 w-fit"
                  >
                    View Research Paper <ExternalLink size={14} />
                  </a>
                  <a
                    href="/docs/certificates/jaciie-paper-certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 border border-line/80 dark:border-void-line/80 bg-paper/80 dark:bg-void-ink/10 text-ink dark:text-void-ink font-bold text-xs tag-mono tracking-wider uppercase shadow-sm hover:shadow-md hover:-translate-y-[1px] hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark transition-all duration-200 w-fit"
                  >
                    View Publication Certificate <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </DetectionFrame>
          </motion.div>

          {/* Industry Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full mt-[32px] md:mt-0"
          >
            <DetectionFrame tag="CLASS: CERTIFICATIONS" always className="h-full">
              <div className="border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-8 md:p-11 h-full flex flex-col justify-between transition-all duration-300 hover:border-accent dark:hover:border-accent-dark shadow-sm hover:shadow-md">
                <div className="space-y-9">
                  <span className="tag-mono text-[11px] font-bold px-3 py-1 border border-accent dark:border-accent-dark text-accent dark:text-accent-dark bg-accent/10 dark:bg-accent-dark/10 tracking-widest uppercase inline-block">
                    Industry Certifications
                  </span>

                  {/* Cert 1 */}
                  <div className="border-b border-line/40 dark:border-void-line/40 pb-8">
                    <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-wider text-ink/90 dark:text-void-ink/90">
                      {certifications[0].title}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-ink-soft dark:text-void-soft mt-2">
                      {certifications[0].issuer} · {certifications[0].date}
                    </p>
                    <a
                      href={certifications[0].url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-ink text-paper dark:bg-void-ink dark:text-void font-bold text-xs tag-mono tracking-wider uppercase shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:opacity-90 transition-all duration-200 w-fit"
                    >
                      View Certificate <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Cert 2 */}
                  <div className="pt-2">
                    <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-wider text-ink/90 dark:text-void-ink/90">
                      {certifications[1].title}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-ink-soft dark:text-void-soft mt-2">
                      {certifications[1].issuer} · {certifications[1].date}
                    </p>
                    <a
                      href={certifications[1].url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-ink text-paper dark:bg-void-ink dark:text-void font-bold text-xs tag-mono tracking-wider uppercase shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:opacity-90 transition-all duration-200 w-fit"
                    >
                      View Certificate <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </DetectionFrame>
          </motion.div>
        </div>

        {/* Academic Performance Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-[97px] md:mt-[113px]"
        >
          <DetectionFrame tag="CLASS: ACADEMIC" always>
            <div className="border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-8 md:p-11 transition-all duration-300 hover:border-accent dark:hover:border-accent-dark shadow-sm hover:shadow-md">
              <span className="tag-mono text-[11px] font-bold px-3 py-1 border border-accent dark:border-accent-dark text-accent dark:text-accent-dark bg-accent/10 dark:bg-accent-dark/10 tracking-widest uppercase inline-block">
                Academic Performance
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-ink/90 dark:text-void-ink/90 mt-6">
                {be.title}
              </h2>
              <p className="text-xs md:text-sm font-bold text-ink-soft dark:text-void-soft mt-2">
                {be.place}
              </p>
              <p className="text-[12.5px] md:text-[14px] font-medium text-ink-soft/90 dark:text-void-soft/90 mt-3 max-w-2xl leading-relaxed">
                {be.detail}
              </p>

              <div className="mt-10 pt-8 border-t border-line/40 dark:border-void-line/40">
                <StatStrip stats={academicStats} border={false} />
              </div>

              <a
                href={be.marksheetUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-ink text-paper dark:bg-void-ink dark:text-void font-bold text-xs tag-mono tracking-wider uppercase shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:opacity-90 transition-all duration-200 w-fit"
              >
                View Degree Marksheet <ExternalLink size={14} />
              </a>
            </div>
          </DetectionFrame>
        </motion.div>
      </Section>

      {/* Quote Banner */}
      <div style={{ margin: "17px 0" }}>
        <QuoteBanner line={quotes.achievements.line} attribution={profile.name} />
      </div>

      {/* Career Principles 3-Card Grid matching Projects page selection grid */}
      <Section eyebrow="Standards" title="Engineering Principles">
        <div className="grid md:grid-cols-3 gap-6">
          {careerPrinciples.map((cp, i) => (
            <motion.div
              key={cp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-7 flex flex-col justify-between hover:border-accent dark:hover:border-accent-dark transition-all duration-200"
            >
              <div>
                <span className="tag-mono text-accent dark:text-accent-dark font-bold text-lg">
                  {cp.step}
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl mt-4 uppercase tracking-wider text-ink dark:text-void-ink">
                  {cp.title}
                </h3>
                <p className="text-[12.5px] md:text-[14px] font-medium text-ink-soft dark:text-void-soft mt-3 leading-relaxed">
                  {cp.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
