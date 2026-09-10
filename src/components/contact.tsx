"use client";

import { FadeIn, SectionHeading } from "@/components/fade-in";
import { resume } from "@/data/resume";
import { FormEvent, useState } from "react";

export function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${resume.contact.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
  }

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk networks, identity, and production operations."
          description="Reach me directly, or send a short note — the form opens your mail app. No backend, no waiting list."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn className="space-y-4">
            <ContactRow
              label="Email"
              value={resume.contact.email}
              href={`mailto:${resume.contact.email}`}
            />
            <ContactRow
              label="Phone"
              value={resume.contact.phone}
              href={resume.contact.phoneHref}
            />
            <ContactRow
              label="LinkedIn"
              value="linkedin.com/in/raunakkk"
              href={resume.contact.linkedin}
            />
            <ContactRow
              label="GitHub"
              value="github.com/raunakkk"
              href={resume.contact.github}
            />
          </FadeIn>

          <FadeIn delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-line bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-muted">
                  Name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2.5 text-ink outline-none ring-accent/40 focus:ring-2"
                  />
                </label>
                <label className="block text-sm text-muted">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2.5 text-ink outline-none ring-accent/40 focus:ring-2"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm text-muted">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-line bg-bg px-3 py-2.5 text-ink outline-none ring-accent/40 focus:ring-2"
                />
              </label>
              <button
                type="submit"
                className="mt-5 inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-on-accent transition hover:brightness-110"
              >
                Send message
              </button>
              {status ? (
                <p className="mt-3 text-sm text-muted" role="status">
                  {status}
                </p>
              ) : null}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="flex items-center justify-between rounded-2xl border border-line bg-surface px-5 py-4 transition hover:border-accent/40"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>
        <span className="block font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {label}
        </span>
        <span className="mt-1 block text-ink">{value}</span>
      </span>
      <span aria-hidden className="text-muted">
        →
      </span>
    </a>
  );
}
