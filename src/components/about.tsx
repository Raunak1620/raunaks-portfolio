"use client";

import { FadeIn, SectionHeading } from "@/components/fade-in";
import { resume } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Enterprise networks that stay up, stay secure, and stay observable."
        />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {resume.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-3xl border border-line bg-surface p-6">
            <dl className="space-y-5">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  Role
                </dt>
                <dd className="mt-1 text-ink">{resume.title}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  Current
                </dt>
                <dd className="mt-1 text-ink">
                  {resume.experience[0].company}
                  {resume.experience[0].client
                    ? ` · Client: ${resume.experience[0].client}`
                    : null}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  Experience
                </dt>
                <dd className="mt-1 text-ink">{resume.yearsExperience} years</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  Focus
                </dt>
                <dd className="mt-1 text-ink">
                  Cisco ISE · ZTNA · Automation · Aviation-scale ops
                </dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
