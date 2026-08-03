import { useState } from "react";
import { Github, Mail, Send } from "lucide-react";
import { profile, quickFacts } from "../data/content";
import AbstractField from "../components/AbstractField";
import Section, { formatEyebrow } from "../components/Section";

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
      <section className="relative pt-hero-top pb-20 md:pt-hero-top-lg md:pb-28 px-6 md:px-10 overflow-hidden">
        <AbstractField variant="compact" />
        <div className="max-w-container mx-auto relative">
          <span className="tag-mono text-[1.2rem] font-bold tracking-wider text-accent dark:text-accent-dark">{formatEyebrow("Get in touch")}</span>
          <h1 className="font-display text-display-lg mt-4 max-w-2xl">Let's build something.</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft dark:text-void-soft leading-relaxed">
            Open to fresher developer roles in Pune or Mumbai. The fastest way to reach me is email.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mt-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="tag-mono text-ink-soft dark:text-void-soft">Name</label>
                <input
                  id="name" name="name" required value={form.name} onChange={handleChange}
                  className="w-full mt-2 bg-transparent border-b border-line dark:border-void-line py-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="tag-mono text-ink-soft dark:text-void-soft">Email</label>
                <input
                  id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                  className="w-full mt-2 bg-transparent border-b border-line dark:border-void-line py-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="tag-mono text-ink-soft dark:text-void-soft">Message</label>
                <textarea
                  id="message" name="message" required rows={4} value={form.message} onChange={handleChange}
                  className="w-full mt-2 bg-transparent border-b border-line dark:border-void-line py-3 outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper dark:bg-void-ink dark:text-void font-medium hover:opacity-85 transition-opacity"
              >
                Send message <Send size={16} />
              </button>
              <p className="tag-mono text-ink-soft dark:text-void-soft !mt-3">
                Opens your email app — this site doesn't run a backend.
              </p>
            </form>

            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 border border-line dark:border-void-line p-6 hover:border-accent dark:hover:border-accent-dark transition-colors group"
              >
                <span className="w-11 h-11 rounded-full border border-line dark:border-void-line flex items-center justify-center shrink-0 group-hover:border-accent dark:group-hover:border-accent-dark transition-colors">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="tag-mono text-ink-soft dark:text-void-soft">Email</p>
                  <p className="font-display text-lg mt-1">{profile.email}</p>
                </div>
              </a>
              <a
                href={profile.githubUrl} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 border border-line dark:border-void-line p-6 hover:border-accent dark:hover:border-accent-dark transition-colors group"
              >
                <span className="w-11 h-11 rounded-full border border-line dark:border-void-line flex items-center justify-center shrink-0 group-hover:border-accent dark:group-hover:border-accent-dark transition-colors">
                  <Github size={18} />
                </span>
                <div>
                  <p className="tag-mono text-ink-soft dark:text-void-soft">GitHub</p>
                  <p className="font-display text-lg mt-1">{profile.github}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Quick facts" title="Before you write in" bordered>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {quickFacts.map((f) => (
            <div key={f.label} className="border-t border-line dark:border-void-line pt-5">
              <p className="tag-mono text-ink-soft dark:text-void-soft">{f.label}</p>
              <p className="font-display text-xl mt-2">{f.value}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
