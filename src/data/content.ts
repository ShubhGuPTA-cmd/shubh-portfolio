// ─────────────────────────────────────────────────────────────
// All editable site content lives here. Replace anything marked
// PLACEHOLDER with your real details — nothing else needs to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Shubh Gupta',
  tagline: 'AI/ML Engineer in the Making',
  subline:
    'Computer Science undergraduate specializing in AI & ML, building intelligent applications and practical software solutions with Python, Java, and machine learning.',
  status: 'B.Tech CSE — AI & ML · SRMIST · Expected 2028',
  resumeUrl: '/resume.pdf', // PLACEHOLDER — drop your resume PDF into /public and keep this filename, or change the path
}

export const about = {
  paragraphs: [
    "I'm Shubh Gupta, a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at SRM University of Science & Technology, Kattankulathur.",
    'I enjoy turning ideas into practical software — from database-driven applications to AI-powered solutions. My technical foundation includes Python, Java, C, MySQL, machine learning, and application development.',
    "I'm a self-driven learner who enjoys solving problems, exploring new technologies, and building projects that combine software engineering with AI/ML.",
  ],
  stats: [
    { value: '8.52', label: 'CGPA' },
    { value: '95.4%', label: 'Class XII' },
    { value: '90.4%', label: 'Class X' },
    { value: '2028', label: 'Expected Graduation' },
  ],
}

export const skillGroups = [
  { title: 'Languages', skills: ['Python', 'Java', 'C', 'SQL'] },
  { title: 'AI / ML', skills: ['Machine Learning', 'Data Analysis', 'NLP', 'AI/ML Fundamentals'] },
  { title: 'Development', skills: ['Application Development', 'Full-Stack Development', 'REST APIs', 'CRUD Operations', 'Role-Based Access'] },
  { title: 'Database', skills: ['MySQL', 'Relational Database Design', 'Transactions'] },
  { title: 'Currently Exploring', skills: ['Deep Learning', 'Generative AI', 'Computer Vision', 'Advanced ML', 'Cloud'] },
]

export type Project = {
  name: string
  description: string
  tech: string[]
  github?: string
  live?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Resume Matcher — AI Resume-to-JD Screener',
    description:
      'NLP tool that scores how well a resume matches a job description. Embeds both texts with a sentence-transformers model (all-MiniLM-L6-v2) and compares them via cosine similarity to produce a 0-100 match score, then cross-references a skill taxonomy to flag skills present in the JD but missing from the resume. PDF parsing via PyPDF2, interactive UI built with Streamlit.',
    tech: ['Python', 'sentence-transformers', 'scikit-learn', 'Streamlit', 'NLP'],
    live: 'https://resume-matcherz.streamlit.app',
    featured: true,
  },
  {
    name: 'Titanic Survival Prediction — Naive Bayes Classifier',
    description:
      'End-to-end ML pipeline on the Titanic dataset: EDA, missing-value imputation, one-hot encoding, and feature scaling with pandas and NumPy. Trained a Gaussian Naive Bayes classifier achieving 78.2% accuracy (0.73 precision, 0.70 recall, 0.71 F1) on a stratified 80/20 train-test split, with survival patterns and model performance visualized via Matplotlib/Seaborn.',
    tech: ['Python', 'pandas', 'scikit-learn', 'Matplotlib/Seaborn'],
    github: 'https://github.com/ShubhGuPTA-cmd/ML-experiments',
    featured: true,
  },
  {
    name: 'Online Complaint Management System',
    description:
      'Full-stack web application using JSP and Servlets for the presentation and controller layers, with JDBC handling direct SQL interaction against a MySQL backend. Role-based access for admins and users across the full complaint lifecycle, with a normalized relational schema and parameterized JDBC queries for reliable storage and retrieval. Potential AI/ML extension: NLP-based auto-categorization and urgency scoring of incoming complaints.',
    tech: ['Java', 'JSP/Servlets', 'JDBC', 'MySQL'],
    github: 'https://github.com/ShubhGuPTA-cmd/Online-Complaint-System',
  },
  {
    name: 'Airline Management System',
    description:
      'Web-based reservation system with JSP/Servlets on the front end and JDBC-driven MySQL queries for flight schedules, bookings, and passenger data. Normalized relational schema with CRUD operations and JDBC transactions keeping booking and seat-availability data consistent; DAO/servlet/JSP separation of concerns for a maintainable architecture. Potential AI/ML extension: a fare-prediction model trained on historical pricing data.',
    tech: ['Java', 'JSP/Servlets', 'JDBC', 'MySQL'],
    github: 'https://github.com/ShubhGuPTA-cmd/FLIGHT-MANAGEMENT-SYSTEM',
  },
]

export const timeline = [
  {
    period: '2028 — Expected',
    title: 'B.Tech — Computer Science & Engineering (AI & ML)',
    place: 'SRM University of Science & Technology, Kattankulathur',
    points: [] as string[],
  },
  {
    period: '2026 — Present',
    title: 'AI/ML & Software Development',
    place: '',
    points: [
      'Machine learning projects',
      'Java application development',
      'Database systems',
      'AI/ML experimentation',
      'Hackathon projects',
    ],
  },
]

export const certifications = [
  { name: 'Oracle Certified — Java SE 21', issuer: 'Oracle', year: '' },
  { name: 'Programming in Java — NPTEL', issuer: 'IIT Kharagpur (Elite, 71%)', year: 'Jul–Oct 2025' },
  { name: 'Tata GenAI Powered Data Analytics Job Simulation', issuer: 'Forage', year: 'Sept 2026' },
]

export const contact = {
  email: 'shubhiit557@gmail.com',
  github: 'https://github.com/ShubhGuPTA-cmd', // confirm this is your GitHub username
  linkedin: 'https://linkedin.com/in/your-username', // PLACEHOLDER — send your LinkedIn URL
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
  // Achievements section removed — add back to nav if it's reinstated
]
