import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Credentials } from "@/components/credentials";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { resume } from "@/data/resume";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-full bg-accent px-4 py-2 text-on-accent transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: resume.name,
            jobTitle: resume.title,
            email: resume.contact.email,
            telephone: resume.contact.phone,
            address: resume.location,
            url: resume.seo.url,
            sameAs: [resume.contact.linkedin, resume.contact.github],
          }),
        }}
      />
    </>
  );
}
