# Shubh Gupta — Portfolio

A personal portfolio website with an interactive 3D hero, built to showcase my work in AI/ML and software development.

**Live site:** [shubh-gupta.vercel.app](https://shubh-gupta.vercel.app)

## About

I'm a B.Tech CSE (AI & ML) student at SRM Institute of Science & Technology, Kattankulathur (expected 2028). This site brings together my background, skills, projects, education, and certifications in one place.

## Features

- Interactive 3D hero: a rotating wireframe sphere and neural-network node graph that responds to mouse movement (React Three Fiber)
- Dark, futuristic theme with purple and cyan accents
- Smooth entrance animation on load (GSAP)
- Animated count-up stats in the About section
- Sections for About, Skills, Projects, Education and Certifications, and Contact
- Downloadable resume
- Fully responsive, with a mobile navigation menu
- Respects the `prefers-reduced-motion` setting
- All content lives in a single data file, so updates never touch component code

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 18, TypeScript |
| Build tool | Vite |
| 3D | Three.js, React Three Fiber |
| Animation | GSAP |
| Icons | react-icons |
| Styling | Plain CSS with custom properties |
| Hosting | Vercel |

## Projects Featured

- **Resume Matcher** — NLP-based resume-to-job-description scorer using sentence-transformer embeddings and cosine similarity ([live demo](https://resume-matcherz.streamlit.app))
- **Titanic Survival Prediction** — Gaussian Naive Bayes classifier with a full scikit-learn pipeline
- **Online Complaint Management System** — Java, JSP/Servlets, JDBC and MySQL
- **Airline Management System** — Java, JSP/Servlets, JDBC and MySQL

## Project Structure

```
shubh-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── three/
│   │   │   └── HeroScene.tsx      # 3D scene
│   │   ├── styles/                # One CSS file per component
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── TechStack.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── content.ts             # All site content
│   ├── hooks/
│   │   └── useInView.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  # Design tokens and base styles
├── index.html
├── package.json
└── vite.config.ts
```

## Getting Started

**Prerequisites:** Node.js 18 or newer.

```bash
# Clone the repository
git clone https://github.com/ShubhGuPTA-cmd/shubh-portfolio.git
cd shubh-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

## Updating Content

Nearly everything on the site is controlled from `src/data/content.ts`:

- `profile` — name, tagline, status line, resume path
- `about` — bio paragraphs and stats
- `skillGroups` — skills by category
- `projects` — project cards (set `featured: true` to highlight one)
- `timeline` and `certifications` — education section
- `contact` — email, GitHub, LinkedIn

To change the resume, replace `public/resume.pdf` with the new file, keeping the same filename.

## Deployment

The site is deployed on Vercel and connected to this repository. Every push to `main` triggers an automatic redeploy.

```bash
git add .
git commit -m "describe your change"
git push
```

Vercel settings: Framework preset **Vite**, build command `npm run build`, output directory `dist`.

## Contact

- Email: [shubhiit557@gmail.com](mailto:shubhiit557@gmail.com)
- GitHub: [ShubhGuPTA-cmd](https://github.com/ShubhGuPTA-cmd)
- Portfolio: [shubh-gupta.vercel.app](https://shubh-gupta.vercel.app)
