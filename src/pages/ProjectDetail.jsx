import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { projects, allProjectsCatalog } from "../data/content";
import DetectionFrame from "../components/DetectionFrame";
import AbstractField from "../components/AbstractField";
import CodeBlock from "../components/CodeBlock";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import StatStrip from "../components/StatStrip";

export default function ProjectDetail() {
  const { id } = useParams();
  const catalogList = projects;
  const project = catalogList.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = catalogList.findIndex((p) => p.id === id);
  const prev = currentIndex > 0 ? catalogList[currentIndex - 1] : null;
  const next = currentIndex < catalogList.length - 1 ? catalogList[currentIndex + 1] : null;

  const mainLang = project.mainLanguage || (project.stack && project.stack.slice(0, 2).join(" · "));
  const mainLangTokens = (mainLang || "").toLowerCase().split(/[\s·\/\&\,]+/).filter(Boolean);

  const secondaryStack = (project.stack || []).filter((tag) => {
    const tagLower = tag.toLowerCase().trim();
    return !mainLangTokens.some((token) => token.length > 1 && (tagLower.includes(token) || token.includes(tagLower)));
  });

  return (
    <>
      {/* Project Detail Hero Section matching Home/Projects design system */}
      <div className="relative overflow-hidden bg-paper dark:bg-void pb-16 md:pb-24">
        <AbstractField variant="hero" />

        <section className="relative pt-[179px] pb-[96px] md:pt-[182px] md:pb-[112px] px-6 md:px-10 -translate-y-[11px] md:translate-y-0">
          <div className="max-w-container mx-auto relative">
            <div className="mt-4 grid md:grid-cols-[1fr_auto] gap-8 md:gap-14 items-start">
              <div>
                <DetectionFrame tag={`CLASS: ${project.class}`} always>
                  <h1 className="font-display font-bold text-[calc(3.2rem+13px)] md:text-display-lg leading-none uppercase mt-3 mb-[11px] md:mb-0 tracking-wide">
                    {project.name}
                  </h1>
                </DetectionFrame>

                <p className="mt-6 max-w-2xl text-sm md:text-base font-medium text-ink-soft dark:text-void-soft leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack Tags Container */}
                <div className="mt-6 max-w-2xl flex flex-col gap-3">
                  {/* Main Highlighted Language Tag Badge (Positioned directly above secondary tech tags) */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="tag-mono text-[11px] md:text-xs font-bold px-3 py-1.5 border border-accent dark:border-accent-dark text-accent dark:text-accent-dark bg-accent/10 dark:bg-accent-dark/10 tracking-widest uppercase shadow-sm">
                      {mainLang}
                    </span>
                  </div>

                  {/* Secondary Tech Stack Tags (No duplicates from main highlight badge) */}
                  {secondaryStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {secondaryStack.map((s) => (
                        <span
                          key={s}
                          className="tag-mono text-[10.5px] md:text-[11.5px] font-bold px-2.5 py-1 border border-line/60 dark:border-void-line/80 text-accent dark:text-accent-dark bg-paper/60 dark:bg-void-ink/5 tracking-wider uppercase"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons in Right Column (shifted downside by md:mt-14) */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3.5 w-full md:w-56 mt-4 md:mt-14">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-ink text-paper dark:bg-void-ink dark:text-void font-bold text-xs tag-mono tracking-wider uppercase shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.38)] hover:-translate-y-0.5 transition-all duration-300 dark:shadow-[0_12px_32px_rgba(255,255,255,0.12)]"
                  >
                    Live Demo <ExternalLink size={15} />
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink/30 text-paper/50 dark:bg-void-ink/30 dark:text-void/40 font-bold text-xs tag-mono tracking-wider uppercase border border-dashed border-line/80 dark:border-void-line/80 cursor-not-allowed select-none opacity-60 shadow-none relative"
                    title="Live demo currently unavailable"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} className="opacity-40" />
                    <span className="text-[9.5px] text-accent dark:text-accent-dark font-mono font-bold tracking-widest lowercase ml-1">(soon)</span>
                  </button>
                )}

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-ink text-paper dark:bg-void-ink dark:text-void font-bold text-xs tag-mono tracking-wider uppercase shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.38)] hover:-translate-y-0.5 transition-all duration-300 dark:shadow-[0_12px_32px_rgba(255,255,255,0.12)]"
                >
                  View Source <Github size={15} />
                </a>
              </div>
            </div>

            {/* Numerical Metrics Strip without top hr line */}
            {project.metrics && (
              <div className="mt-14">
                <StatStrip stats={project.metrics} border={false} />
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Overview Context */}
      <Section eyebrow="Context" title="Why it exists">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          <div className="border-t-2 border-ink dark:border-void-ink pt-6">
            <span className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-ink dark:text-void-ink">
              The Problem
            </span>
            <p className="text-[12.5px] md:text-[14.5px] font-medium text-ink-soft dark:text-void-soft leading-relaxed mt-4">
              {project.problem}
            </p>
          </div>
          <div className="border-t-2 border-ink dark:border-void-ink pt-6">
            <span className="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-ink dark:text-void-ink">
              The Outcome
            </span>
            <p className="text-[12.5px] md:text-[14.5px] font-medium text-ink-soft dark:text-void-soft leading-relaxed mt-4">
              {project.outcome}
            </p>
          </div>
        </div>
      </Section>

      {/* Build Approach */}
      <Section eyebrow="Build" title="How it was built" className="!-mt-[37px] md:!-mt-[37px]">
        <div className="grid sm:grid-cols-2 gap-6">
          {project.approach.map((step, i) => (
            <div key={i} className="border border-line/60 dark:border-void-line/60 bg-paper dark:bg-void p-7 transition-all duration-200 hover:border-accent/60 dark:hover:border-accent-dark/60">
              <span className="tag-mono text-accent dark:text-accent-dark font-bold text-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[12.5px] md:text-[14.5px] font-medium text-ink-soft dark:text-void-soft leading-relaxed mt-4">
                {step}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Code Snippet Viewer */}
      {project.codeSnippet && (
        <Section eyebrow="Code" title="Inside the implementation" className="!-mt-[37px] md:!-mt-[37px]">
          <CodeBlock filename={project.codeSnippet.filename} code={project.codeSnippet.code} />
        </Section>
      )}

      {/* Gallery */}
      <Section eyebrow="Gallery" title="Screenshots & Assets" className="!-mt-[44px] md:!-mt-[44px]">
        <Gallery id={project.id} />
      </Section>

      {/* Previous & Next Project Navigation Footer Bar */}
      <Section className="pt-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          {/* Previous Project Card (Left) */}
          {prev ? (
            <Link
              to={`/projects/${prev.id}`}
              className="group relative border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-6 flex flex-col justify-between transition-all duration-300 hover:border-accent dark:hover:border-accent-dark hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-ink-soft/70 dark:text-void-soft/70 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors mb-4">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="tag-mono text-[11px] font-bold uppercase tracking-wider">
                  Previous Case Study
                </span>
              </div>

              <div>
                <h4 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-ink dark:text-void-ink group-hover:text-accent dark:group-hover:text-accent-dark transition-colors duration-200">
                  {prev.name}
                </h4>
                <p className="text-xs tag-mono text-ink-soft dark:text-void-soft mt-1.5">
                  {prev.class}
                </p>
              </div>
            </Link>
          ) : (
            <div className="relative border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-6 flex flex-col justify-between cursor-not-allowed select-none">
              <div className="flex items-center gap-2 text-ink-soft/70 dark:text-void-soft/70 mb-4">
                <ArrowLeft size={16} className="opacity-50" />
                <span className="tag-mono text-[11px] font-bold uppercase tracking-wider text-ink-soft/70 dark:text-void-soft/70">
                  No Previous Case Study
                </span>
              </div>

              <div>
                <h4 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-ink/70 dark:text-void-ink/70">
                  NO PREVIOUS
                </h4>
                <p className="text-xs tag-mono text-ink-soft/60 dark:text-void-soft/60 mt-1.5">
                  Start of Catalog
                </p>
              </div>
            </div>
          )}

          {/* Next Project Card (Right) */}
          {next ? (
            <Link
              to={`/projects/${next.id}`}
              className="group relative border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-6 flex flex-col justify-between text-right transition-all duration-300 hover:border-accent dark:hover:border-accent-dark hover:shadow-md"
            >
              <div className="flex items-center justify-end gap-2 text-ink-soft/70 dark:text-void-soft/70 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors mb-4">
                <span className="tag-mono text-[11px] font-bold uppercase tracking-wider">
                  Next Case Study
                </span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </div>

              <div>
                <h4 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-ink dark:text-void-ink group-hover:text-accent dark:group-hover:text-accent-dark transition-colors duration-200">
                  {next.name}
                </h4>
                <p className="text-xs tag-mono text-ink-soft dark:text-void-soft mt-1.5">
                  {next.class}
                </p>
              </div>
            </Link>
          ) : (
            <div className="relative border border-line/70 dark:border-void-line/80 bg-paper dark:bg-void p-6 flex flex-col justify-between text-right cursor-not-allowed select-none">
              <div className="flex items-center justify-end gap-2 text-ink-soft/70 dark:text-void-soft/70 mb-4">
                <span className="tag-mono text-[11px] font-bold uppercase tracking-wider text-ink-soft/70 dark:text-void-soft/70">
                  No Next Case Study
                </span>
                <ArrowRight size={16} className="opacity-50" />
              </div>

              <div>
                <h4 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-ink/70 dark:text-void-ink/70">
                  NO NEXT
                </h4>
                <p className="text-xs tag-mono text-ink-soft/60 dark:text-void-soft/60 mt-1.5">
                  End of Catalog
                </p>
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
