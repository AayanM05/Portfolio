import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "../data/content";
import DetectionFrame from "../components/DetectionFrame";
import AbstractField from "../components/AbstractField";
import ProjectThumb from "../components/ProjectThumb";
import CodeBlock from "../components/CodeBlock";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import StatStrip from "../components/StatStrip";
import QuoteBanner from "../components/QuoteBanner";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex((p) => p.id === id);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="relative pt-hero-top pb-16 md:pt-hero-top-lg md:pb-20 px-6 md:px-10 overflow-hidden">
        <AbstractField variant="compact" />
        <div className="max-w-container mx-auto relative">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 tag-mono text-ink-soft dark:text-void-soft hover:text-accent dark:hover:text-accent-dark"
          >
            <ArrowLeft size={14} /> All projects
          </Link>

          <div className="mt-10 grid md:grid-cols-[1.3fr_1fr] gap-10 items-start">
            <div>
              <DetectionFrame tag={`CLASS: ${project.class}`} always>
                <h1 className="font-display text-display-lg">{project.name}</h1>
              </DetectionFrame>

              <p className="mt-8 max-w-xl text-lg text-ink-soft dark:text-void-soft leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="tag-mono px-3 py-1.5 border border-line dark:border-void-line text-ink-soft dark:text-void-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper dark:bg-void-ink dark:text-void font-medium hover:opacity-85 transition-opacity"
                  >
                    Live demo <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-6 py-3 border border-dashed border-line dark:border-void-line text-ink-soft dark:text-void-soft tag-mono">
                    Live demo — coming soon
                  </span>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-line dark:border-void-line hover:border-accent dark:hover:border-accent-dark transition-colors"
                >
                  View source <Github size={16} />
                </a>
              </div>
            </div>

            <ProjectThumb id={project.id} name={project.name} className="aspect-[4/3] w-full" />
          </div>

          {project.metrics && (
            <div className="mt-16">
              <StatStrip stats={project.metrics} />
            </div>
          )}
        </div>
      </section>

      <Section eyebrow="Context" title="Why it exists" bordered>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          <div className="border-t-2 border-accent dark:border-accent-dark pt-6">
            <span className="font-display text-2xl">The problem</span>
            <p className="text-ink-soft dark:text-void-soft leading-relaxed mt-4">{project.problem}</p>
          </div>
          <div className="border-t-2 border-ink dark:border-void-ink pt-6">
            <span className="font-display text-2xl">The outcome</span>
            <p className="text-ink-soft dark:text-void-soft leading-relaxed mt-4">{project.outcome}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Build" title="How it was built" bordered>
        <div className="grid sm:grid-cols-2 gap-6">
          {project.approach.map((step, i) => (
            <div key={i} className="border border-line dark:border-void-line p-7">
              <span className="font-display text-3xl text-accent dark:text-accent-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-ink-soft dark:text-void-soft leading-relaxed mt-4">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {project.codeSnippet && (
        <Section eyebrow="Code" title="Inside the implementation" bordered>
          <CodeBlock filename={project.codeSnippet.filename} code={project.codeSnippet.code} />
        </Section>
      )}

      <Section eyebrow="Gallery" title="Screenshots" bordered>
        <Gallery id={project.id} />
      </Section>

      {project.takeaway && <QuoteBanner line={project.takeaway} attribution="Aayan Mulla" />}

      <Section bordered>
        <div className="flex items-center justify-between">
          <span className="tag-mono text-ink-soft dark:text-void-soft">Next project</span>
          <Link
            to={`/projects/${next.id}`}
            className="inline-flex items-center gap-2 font-display text-xl md:text-2xl hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            {next.name} <ArrowUpRight size={20} />
          </Link>
        </div>
      </Section>
    </>
  );
}
