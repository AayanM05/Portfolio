import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects, quotes } from "../data/content";
import ProjectCard from "../components/ProjectCard";
import AbstractField from "../components/AbstractField";
import DetectionFrame from "../components/DetectionFrame";
import QuoteBanner from "../components/QuoteBanner";
import Section, { formatEyebrow } from "../components/Section";

const criteria = [
  {
    title: "Solves Real-World Problems",
    detail: "Every project is designed around an actual user workflow, real failure modes, and clear business logic rather than generic tutorial demos.",
  },
  {
    title: "Expands Stack Mastery",
    detail: "Chosen to master new framework architectures, complex system integrations, and advanced backend patterns hands-on in production code.",
  },
  {
    title: "Production-Grade Deployment",
    detail: "Fully documented, debugged, and deployed on cloud platforms — engineered to run reliably outside localhost environments.",
  },
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsSectionRef = useRef(null);
  const PROJECTS_PER_PAGE = 6;

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    setTimeout(() => {
      if (projectsSectionRef.current) {
        const topOffset = projectsSectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: Math.max(0, topOffset), behavior: "smooth" });
      }
    }, 20);
  };

  return (
    <>
      {/* Projects Hero Section matching Home Hero design system */}
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
              <DetectionFrame tag="PAGE: PROJECTS" always>
                <h1
                  className="font-display font-bold text-[calc(3.2rem+13px)] md:text-display-lg leading-[1.05] sm:leading-none md:leading-[1.02] mt-4 flex flex-col"
                  style={{ letterSpacing: "0.017em" }}
                >
                  <span>PROJECT</span>
                  <span className="-ml-[2px]">CATALOG.</span>
                </h1>
              </DetectionFrame>
            </motion.div>

            {/* Tech Stack Tags (3+ lines) */}
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
                "REACT.JS",
                "JAVASCRIPT",
                "MYSQL",
                "POSTGRESQL",
                "REDIS",
                "REST APIS",
                "DOCKER",
                "AWS",
                "OPENCV",
                "TAILWIND CSS",
                "FIREBASE",
                "CELERY",
                "HIBERNATE",
                "GIT",
                "INTELLIJ IDEA",
                "RAILWAY",
                "MICROSERVICES",
              ].map((tag, idx) => (
                <span
                  key={tag}
                  className={`tag-mono text-[9.5px] sm:text-[10.5px] md:text-[11.5px] font-bold px-2 py-0.5 md:px-2.5 md:py-1 border border-line/60 dark:border-void-line/80 text-accent dark:text-accent-dark bg-paper/60 dark:bg-void-ink/5 tracking-wider ${
                    idx >= 10 ? "hidden md:inline-flex" : "inline-flex"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 md:mt-8 max-w-2xl text-sm md:text-base font-medium text-ink-soft dark:text-void-soft leading-relaxed"
            >
              A curated collection of full-stack engineering builds — spanning real-time AI computer vision, Spring Boot backend microservices, and production web platforms. Select any project to inspect system architecture, schema design, and technical case studies.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Projects Grid Section (Outside Hero) */}
      <div ref={projectsSectionRef}>
        <Section eyebrow="Selected Work" title="All builds" className="!pb-[135px] md:!pb-[167px]">
          <div className="grid md:grid-cols-3 gap-8">
            {currentProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {/* Centered Site-Themed Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 pt-10 border-t border-line/40 dark:border-void-line/40 flex items-center justify-center gap-3">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 tag-mono text-xs font-bold uppercase tracking-wider border border-line dark:border-void-line bg-paper dark:bg-void text-ink dark:text-void-ink disabled:opacity-30 disabled:pointer-events-none hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark transition-all duration-200"
              >
                <ChevronLeft size={15} /> Prev
              </button>

              <div className="flex items-center gap-2 px-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 tag-mono text-xs font-bold transition-all duration-200 ${
                      currentPage === pageNum
                        ? "bg-ink text-paper dark:bg-void-ink dark:text-void border border-ink dark:border-void-ink shadow-sm"
                        : "text-ink-soft dark:text-void-soft border border-line/50 dark:border-void-line/60 hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark"
                    }`}
                  >
                    0{pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 tag-mono text-xs font-bold uppercase tracking-wider border border-line dark:border-void-line bg-paper dark:bg-void text-ink dark:text-void-ink disabled:opacity-30 disabled:pointer-events-none hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark transition-all duration-200"
              >
                Next <ChevronRight size={15} />
              </button>
            </div>
          )}
        </Section>
      </div>

      <QuoteBanner line={quotes.projects.line} attribution="Aayan Mulla" />

      <Section eyebrow="Selection" title="How I choose what to build">
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
              <span className="tag-mono text-accent dark:text-accent-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl md:text-2xl mt-3">{c.title}</h3>
              <p className="text-[12.5px] md:text-[14px] font-medium text-ink-soft dark:text-void-soft mt-3 leading-relaxed">{c.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
