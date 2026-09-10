"use client";

import { FadeIn, SectionHeading } from "@/components/fade-in";
import { resume } from "@/data/resume";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Work that changed how the network is inventoried, connected, and onboarded."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {resume.projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {project.date}
                  </p>
                  <span className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-bg px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-ink">Mentorship</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {resume.mentorship.map((item) => (
              <div key={item.title}>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {item.dates}
                </p>
                <h4 className="mt-2 font-medium text-ink">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
