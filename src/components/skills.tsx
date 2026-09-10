"use client";

import { FadeIn, SectionHeading } from "@/components/fade-in";
import { resume } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A multi-vendor stack across campus, security, cloud, and automation."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {resume.skills.map((group, index) => (
            <FadeIn key={group.category} delay={index * 0.04}>
              <article className="h-full rounded-3xl border border-line bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex rounded-full border border-line bg-bg px-3 py-1.5 text-xs text-muted transition hover:border-accent/50 hover:text-accent">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
