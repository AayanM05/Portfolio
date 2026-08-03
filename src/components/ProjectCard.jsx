import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import DetectionFrame from "./DetectionFrame";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="group block h-full">
      <DetectionFrame className="h-full">
        <div className="border border-line dark:border-void-line h-full flex flex-col transition-all duration-300 group-hover:border-accent dark:group-hover:border-accent-dark group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_20px_50px_rgba(0,61,153,0.25)] group-hover:-translate-y-1 bg-paper dark:bg-void overflow-hidden">
          <div className="p-7 md:p-8 flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-1.5 font-mono text-[10px] md:text-[11px] font-bold text-accent dark:text-accent-dark tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-dark shrink-0 animate-pulse" />
              {`CLASS: ${project.class}`}
            </div>
            <h3 className="font-display font-bold text-[33px] md:text-[37px] tracking-[0.035em] text-ink dark:text-void-ink leading-tight">
              {project.name}
            </h3>
            <div className="flex items-start justify-between gap-3">
              <p className="text-[11px] md:text-xs font-medium text-ink-soft dark:text-void-soft leading-relaxed flex-1 line-clamp-4">
                {project.summary || project.tagline}
              </p>
              <ArrowUpRight
                size={20}
                className="shrink-0 mt-0.5 text-ink-soft dark:text-void-soft group-hover:text-accent dark:group-hover:text-accent-dark group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
            <div className="flex flex-wrap gap-2.5 mt-auto pt-2 pb-[15px]">
              {project.stack.slice(0, project.id === "elearny" ? 4 : 5).map((s) => (
                <span
                  key={s}
                  className="tag-mono px-2.5 py-1.5 border border-line dark:border-void-line text-ink-soft dark:text-void-soft group-hover:border-accent/50 dark:group-hover:border-accent-dark/50 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DetectionFrame>
    </Link>
  );
}
