"use client";

import { FadeIn, SectionHeading } from "@/components/fade-in";
import { resume } from "@/data/resume";

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications and education that back the production work."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <h3 className="mb-4 font-display text-lg font-semibold text-ink">
              Certifications
            </h3>
            <ul className="space-y-3">
              {resume.certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface px-5 py-4"
                >
                  <div>
                    <p className="font-medium text-ink">{cert.name}</p>
                    <p className="text-sm text-muted">{cert.issuer}</p>
                  </div>
                  {cert.date ? (
                    <p className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                      {cert.date}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h3 className="mb-4 font-display text-lg font-semibold text-ink">
              Education
            </h3>
            {resume.education.map((item) => (
              <article
                key={item.school}
                className="rounded-3xl border border-line bg-surface p-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {item.dates}
                </p>
                <h4 className="mt-3 font-display text-xl font-semibold text-ink">
                  {item.degree}
                </h4>
                <p className="mt-1 text-sm text-muted">
                  {item.school} · {item.location}
                </p>
                <p className="mt-4 text-sm text-ink">{item.detail}</p>
              </article>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
