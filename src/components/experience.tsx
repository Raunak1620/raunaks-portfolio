"use client";

import { FadeIn, SectionHeading } from "@/components/fade-in";
import { resume } from "@/data/resume";
import { useState } from "react";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Production networks, identity, and escalation-grade operations."
        />
        <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
          {resume.experience.map((job, index) => (
            <ExperienceItem key={`${job.company}-${job.role}`} job={job} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ExperienceItem({
  job,
  index,
}: {
  job: (typeof resume.experience)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0);
  const preview = job.bullets.slice(0, 4);
  const rest = job.bullets.slice(4);
  const shown = expanded ? job.bullets : preview;

  return (
    <li className="relative">
      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]" />
      <FadeIn>
        <article className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {job.company}
                {"client" in job && job.client ? ` · Client: ${job.client}` : ""}
                {" · "}
                {job.location}
              </p>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {job.start} — {job.end}
            </p>
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted sm:text-[15px]">
            {shown.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {rest.length > 0 ? (
            <button
              type="button"
              className="mt-5 text-sm font-medium text-accent transition hover:underline"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
            >
              {expanded ? "Show less" : `Show ${rest.length} more achievements`}
            </button>
          ) : null}
        </article>
      </FadeIn>
    </li>
  );
}
