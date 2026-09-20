# Shubh Gupta — Portfolio

A 3D-accented personal portfolio built with React, TypeScript, React Three Fiber, and GSAP.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Where to edit content

Everything text-based lives in one file: `src/data/content.ts`.
No component code needs to change — just edit the values there:

- `profile` — name, tagline, subline, status line, resume path
- `about` — bio paragraphs and stat numbers
- `skillGroups` — your skills, grouped
- `projects` — **placeholder data, replace with your real projects** (name, description, tech, GitHub/live links)
- `timeline` — education / experience timeline
- `certifications` — certifications list
- `achievements` — **placeholder, add your real achievements**
- `contact` — **placeholder, add your real email / GitHub / LinkedIn**

## Resume

Drop your resume PDF into `public/resume.pdf` (or change `profile.resumeUrl` in
`content.ts` to point wherever you host it). The "Download Resume" button links there.

## Tech stack

React 18 · TypeScript · Vite · Three.js · @react-three/fiber · GSAP · react-icons
