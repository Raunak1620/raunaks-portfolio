"use client";

import { FadeIn } from "@/components/fade-in";
import { resume } from "@/data/resume";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 mesh-bg" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-signal/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent">
              {resume.location}
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-7xl">
              {resume.name}
            </h1>
            <p className="mt-5 text-lg font-medium text-accent sm:text-xl">
              {resume.title}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {resume.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.12} className="mt-8 flex flex-wrap gap-3">
            <a
              href={resume.contact.resumePdf}
              className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-on-accent transition hover:-translate-y-0.5 hover:brightness-110"
              download
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm font-semibold text-ink transition hover:border-accent/60 hover:text-accent"
            >
              Contact
            </a>
            <a
              href={resume.contact.linkedin}
              className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm font-medium text-muted transition hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={resume.contact.github}
              className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm font-medium text-muted transition hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.18}>
          <div className="grid grid-cols-2 gap-3">
            {resume.highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-line bg-surface/80 p-5 shadow-glow backdrop-blur"
              >
                <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
