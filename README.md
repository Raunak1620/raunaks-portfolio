# Raunak Raj — Portfolio

Static Next.js portfolio for **Raunak Raj**, Senior Network Engineer. All copy lives in `src/data/resume.ts` so you can update text without touching components.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Replace `public/resume.pdf` with the latest PDF any time — the Download buttons already point there.

## Edit content

Open `src/data/resume.ts` and change:

- name, title, tagline, summary
- contact (email, phone, LinkedIn, GitHub)
- experience, skills, projects, certifications, education
- `seo.url` after you know your Vercel domain

## Production build

```bash
npm run build
```

This generates a static site in `out/` (`output: "export"` in `next.config.ts`).

## Free deploy on Vercel

### Option A — Import from GitHub (recommended)

1. Create a GitHub repository and push this project:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/raunak-portfolio.git
   git push -u origin main
   ```

2. Go to [https://vercel.com/new](https://vercel.com/new) and sign in with GitHub (Hobby plan is free).
3. Click **Import** on this repository.
4. Leave the defaults:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output: detected automatically
5. Click **Deploy**.

After the first deploy, every `git push` to `main` republishes the site.

Update `seo.url` in `src/data/resume.ts` to your `*.vercel.app` URL (or custom domain), then push again so Open Graph tags match.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Accept the defaults. For production:

```bash
vercel --prod
```

No environment variables, database, or paid APIs are required.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Fully static export
