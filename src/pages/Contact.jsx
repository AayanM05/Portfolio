import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Send, ArrowUpRight } from "lucide-react";
import { profile, quickFacts } from "../data/content";
import AbstractField from "../components/AbstractField";
import DetectionFrame from "../components/DetectionFrame";
import Section from "../components/Section";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

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
              <DetectionFrame tag="PAGE: CONTACT" always>
                <h1
                  className="font-display font-bold text-[calc(3.2rem+13px)] md:text-display-lg leading-[1.05] sm:leading-none md:leading-[1.02] mt-4 flex flex-col"
                  style={{ letterSpacing: "0.017em" }}
                >
                  <span>LET'S BUILD</span>
                  <span className="-ml-[2px]">SOMETHING.</span>
                </h1>
              </DetectionFrame>
            </motion.div>

            {/* Quick Status Badges Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-2 md:gap-2.5 max-w-3xl"
            >
              {[
                "CONNECT",
                "CHAT",
                "DISCUSS PROJECTS",
                "OPEN TO HIRE",
                "FRESHER DEVELOPER ROLES",
                "READY TO RELOCATE",
                "FULL-STACK",
                "BACKEND / AI",
                "AVAILABLE IMMEDIATELY",
                "RESPONSE: < 24 HOURS",
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
              Currently seeking fresher full-stack and backend developer roles across India, open to relocation anywhere. Whether you want to discuss potential engineering opportunities, review technical system architecture, or chat about machine learning builds, I am always open to connecting and responding promptly.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Main Dispatch Section */}
      <Section eyebrow="Dispatch" title="Send a direct message">
        <div className="mt-[22px] grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <DetectionFrame tag="DISPATCH: EMAIL" always>
              <div className="border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-7 md:p-9 transition-all duration-300 hover:border-ink/40 dark:hover:border-void-ink/40 shadow-sm hover:shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="tag-mono text-xs font-bold text-accent dark:text-accent-dark tracking-wider uppercase">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="E.G. ALEX MORGAN"
                      className="w-full mt-2 bg-paper/50 dark:bg-void-ink/5 border border-line/60 dark:border-void-line/80 px-4 py-3 text-sm font-medium text-ink dark:text-void-ink outline-none focus:border-ink dark:focus:border-void-ink transition-colors uppercase placeholder:text-ink-soft/40 dark:placeholder:text-void-soft/40"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="tag-mono text-xs font-bold text-accent dark:text-accent-dark tracking-wider uppercase">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ALEX@COMPANY.COM"
                      className="w-full mt-2 bg-paper/50 dark:bg-void-ink/5 border border-line/60 dark:border-void-line/80 px-4 py-3 text-sm font-medium text-ink dark:text-void-ink outline-none focus:border-ink dark:focus:border-void-ink transition-colors uppercase placeholder:text-ink-soft/40 dark:placeholder:text-void-soft/40"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="tag-mono text-xs font-bold text-accent dark:text-accent-dark tracking-wider uppercase">
                      Project / Role Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="WHAT WOULD YOU LIKE TO BUILD OR DISCUSS?"
                      className="w-full mt-2 bg-paper/50 dark:bg-void-ink/5 border border-line/60 dark:border-void-line/80 px-4 py-3 text-sm font-medium text-ink dark:text-void-ink outline-none focus:border-ink dark:focus:border-void-ink transition-colors resize-none uppercase placeholder:text-ink-soft/40 dark:placeholder:text-void-soft/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-ink text-paper dark:bg-void-ink dark:text-void font-bold text-xs tag-mono tracking-wider uppercase shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
                  >
                    Send Message <Send size={15} />
                  </button>

                  <p className="tag-mono text-[10.5px] text-ink-soft/70 dark:text-void-soft/70 text-center tracking-wider uppercase pt-2">
                    Direct Mailto Trigger — Opens Your Default Mail Client
                  </p>
                </form>
              </div>
            </DetectionFrame>
          </motion.div>

          {/* Contact Direct Channels */}
          <div className="space-y-6">
            {/* Email Card */}
            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group block border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-6 sm:p-7 transition-all duration-300 hover:border-ink/40 dark:hover:border-void-ink/40 hover:-translate-y-[1px] shadow-sm hover:shadow-md max-w-full overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 border border-line/60 dark:border-void-line/80 bg-paper/60 dark:bg-void-ink/5 flex items-center justify-center shrink-0 text-accent dark:text-accent-dark group-hover:border-ink/40 dark:group-hover:border-void-ink/40 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-sm sm:text-base md:text-xl lg:text-2xl uppercase tracking-wider text-ink dark:text-void-ink transition-colors break-all">
                      {profile.email}
                    </h3>
                    <p className="text-xs tag-mono text-ink-soft dark:text-void-soft mt-1">
                      Direct Inbox · Replies within 24 hours
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-ink-soft/60 dark:text-void-soft/60 group-hover:text-ink dark:group-hover:text-void-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
              </div>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group block border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-6 sm:p-7 transition-all duration-300 hover:border-ink/40 dark:hover:border-void-ink/40 hover:-translate-y-[1px] shadow-sm hover:shadow-md max-w-full overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 border border-line/60 dark:border-void-line/80 bg-paper/60 dark:bg-void-ink/5 flex items-center justify-center shrink-0 text-accent dark:text-accent-dark group-hover:border-ink/40 dark:group-hover:border-void-ink/40 transition-colors">
                    <Github size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-sm sm:text-base md:text-xl lg:text-2xl uppercase tracking-wider text-ink dark:text-void-ink transition-colors break-all">
                      {profile.github}
                    </h3>
                    <p className="text-xs tag-mono text-ink-soft dark:text-void-soft mt-1">
                      Public Commits & Source Code
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-ink-soft/60 dark:text-void-soft/60 group-hover:text-ink dark:group-hover:text-void-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
              </div>
            </motion.a>
          </div>
        </div>
      </Section>

      {/* Quick Facts Section matching Projects page selection grid */}
      <Section eyebrow="Overview" title="Quick Facts">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickFacts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-6 hover:border-accent dark:hover:border-accent-dark transition-all duration-200"
            >
              <span className="tag-mono text-accent dark:text-accent-dark font-bold text-xs uppercase tracking-wider">
                {f.label}
              </span>
              <p className="font-display font-medium text-lg md:text-xl uppercase tracking-wider text-ink dark:text-void-ink mt-3">
                {f.value}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
