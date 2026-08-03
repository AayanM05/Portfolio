# Aayan Mulla — Portfolio

React + Vite + Tailwind + Framer Motion + React Router.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build for production
```bash
npm run build
```
Output goes to `dist/`. Deploy that folder to Netlify, Vercel, GitHub Pages, etc.

## Before you deploy
- Add your resume as `public/resume.pdf` (the Home page "Download Resume" button links to `/resume.pdf`).
- Update project/skill content in `src/data/content.js` any time your projects or skills change — everything on the site pulls from that one file.
- Swap `profile.email` / `profile.githubUrl` in `src/data/content.js` if either changes.

## Structure
- `src/pages/` — one file per page (Home, About, Projects, ProjectDetail, Skills, Achievements, Contact)
- `src/components/` — Nav, Footer, ProjectCard, DetectionFrame (signature corner-bracket motif), Marquee, AbstractField
- `src/data/content.js` — all real content in one place
- `src/hooks/useTheme.js` — light/dark theme toggle (persists to localStorage)
