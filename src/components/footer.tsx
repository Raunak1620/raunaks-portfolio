import { resume } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {resume.name}. Built for production networks.
        </p>
        <ul className="flex flex-wrap gap-5 text-sm">
          <li>
            <a
              className="text-muted transition hover:text-accent"
              href={`mailto:${resume.contact.email}`}
            >
              Email
            </a>
          </li>
          <li>
            <a
              className="text-muted transition hover:text-accent"
              href={resume.contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-muted transition hover:text-accent"
              href={resume.contact.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-muted transition hover:text-accent"
              href={resume.contact.resumePdf}
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
