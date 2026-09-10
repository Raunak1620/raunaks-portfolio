import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Outfit, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { resume } from "@/data/resume";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(resume.seo.url),
  title: resume.seo.title,
  description: resume.seo.description,
  keywords: [...resume.seo.keywords],
  authors: [{ name: resume.name, url: resume.contact.linkedin }],
  openGraph: {
    title: resume.seo.title,
    description: resume.seo.description,
    url: resume.seo.url,
    siteName: resume.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: resume.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: resume.seo.title,
    description: resume.seo.description,
    images: ["/og.svg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070b10" },
    { media: "(prefers-color-scheme: light)", color: "#f4f6f8" },
  ],
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full bg-bg font-sans text-ink">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
