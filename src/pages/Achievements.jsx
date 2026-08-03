import { ExternalLink } from "lucide-react";
import { researchPaper, certifications, education, quotes, profile } from "../data/content";
import DetectionFrame from "../components/DetectionFrame";
import AbstractField from "../components/AbstractField";
import QuoteBanner from "../components/QuoteBanner";
import Section, { formatEyebrow } from "../components/Section";

export default function Achievements() {
  const be = education.find((e) => e.id === "be");

  return (
    <>
      <section className="relative pt-hero-top pb-20 md:pt-hero-top-lg md:pb-28 px-6 md:px-10 overflow-hidden">
        <AbstractField variant="compact" />
        <div className="max-w-container mx-auto relative">
          <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">{formatEyebrow("Record")}</span>
          <h1 className="font-display text-display-lg mt-4 max-w-2xl">Achievements</h1>

          <div className="mt-24 grid md:grid-cols-2 gap-14">
            <DetectionFrame tag="CLASS: PUBLICATION" always className="h-full">
              <div className="border border-line dark:border-void-line p-8 md:p-10 h-full flex flex-col">
                <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">{formatEyebrow("Published research paper")}</span>
                <h2 className="font-display text-2xl mt-4 leading-snug">{researchPaper.title}</h2>
                <p className="text-ink-soft dark:text-void-soft mt-4">{researchPaper.venue}</p>
                <p className="tag-mono text-ink-soft dark:text-void-soft mt-2">{researchPaper.detail}</p>
                <a
                  href={researchPaper.url}
                  className="inline-flex items-center justify-center gap-2 mt-8 px-6 py-3 bg-ink text-paper dark:bg-void-ink dark:text-void font-medium hover:opacity-85 transition-opacity w-fit"
                >
                  Read the paper <ExternalLink size={15} />
                </a>
              </div>
            </DetectionFrame>

            <DetectionFrame tag="CLASS: CERTIFICATION" always className="h-full">
              <div className="border border-line dark:border-void-line p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">{formatEyebrow("Certification")}</span>
                  
                  {/* Certificate 1 */}
                  <div className="mt-4 flex flex-col justify-between">
                    <div>
                      <h2 className="font-display text-2xl leading-snug">{certifications[0].title}</h2>
                      <p className="text-ink-soft dark:text-void-soft mt-2 text-sm">{certifications[0].issuer} · {certifications[0].date}</p>
                    </div>
                    <a
                      href={certifications[0].url}
                      className="inline-flex items-center gap-1.5 mt-3 tag-mono text-accent dark:text-accent-dark hover:opacity-85 transition-opacity text-[10px] w-fit"
                    >
                      View certificate <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="h-[1px] bg-line dark:bg-void-line my-5" />

                  {/* Certificate 2 */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="font-display text-2xl leading-snug">{certifications[1].title}</h2>
                      <p className="text-ink-soft dark:text-void-soft mt-2 text-sm">{certifications[1].issuer} · {certifications[1].date}</p>
                    </div>
                    <a
                      href={certifications[1].url}
                      className="inline-flex items-center gap-1.5 mt-3 tag-mono text-accent dark:text-accent-dark hover:opacity-85 transition-opacity text-[10px] w-fit"
                    >
                      View certificate <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </DetectionFrame>
          </div>

          <div className="mt-14">
            <DetectionFrame tag="CLASS: ACADEMIC" always>
              <div className="border border-line dark:border-void-line p-8 md:p-10">
                <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">{formatEyebrow("Academic performance")}</span>
                <h2 className="font-display text-2xl mt-4 leading-snug">{be.title}</h2>
                <p className="text-ink-soft dark:text-void-soft mt-4">{be.place}</p>
                <p className="text-ink-soft dark:text-void-soft mt-2 max-w-xl">{be.detail}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-line dark:border-void-line">
                  <div>
                    <p className="font-display text-3xl">7.01</p>
                    <p className="tag-mono text-ink-soft dark:text-void-soft mt-1">Final CGPA</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl">7.88</p>
                    <p className="tag-mono text-ink-soft dark:text-void-soft mt-1">4th yr SGPA</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl">83.89%</p>
                    <p className="tag-mono text-ink-soft dark:text-void-soft mt-1">Diploma</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl">86.20%</p>
                    <p className="tag-mono text-ink-soft dark:text-void-soft mt-1">SSC</p>
                  </div>
                </div>

                <a
                  href={be.marksheetUrl}
                  className="inline-flex items-center justify-center gap-2 mt-10 px-6 py-3 bg-ink text-paper dark:bg-void-ink dark:text-void font-medium hover:opacity-85 transition-opacity w-fit"
                >
                  View final marksheet <ExternalLink size={15} />
                </a>
              </div>
            </DetectionFrame>
          </div>
        </div>
      </section>

      <QuoteBanner line={quotes.achievements.line} attribution={profile.name} />

      <Section eyebrow="Ahead" title="What's next" bordered narrow>
        <p className="text-lg text-ink-soft dark:text-void-soft leading-relaxed">
          I'm looking to bring that same depth-over-breadth approach to a fresher developer role —
          somewhere I can own a real system, not just a ticket queue, in Pune or Mumbai.
        </p>
      </Section>
    </>
  );
}
