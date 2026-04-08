export type Project = {
  title: string
  period?: string
  description: string
  highlights: string[]
  tech: string[]
  imageSrc?: string
  imageAlt?: string
  links?: {
    live?: string
    github?: string
  }
}

export type EducationItem = {
  program: string
  institute: string
  location?: string
  start: string
  end: string
  details?: string[]
}

export const PROFILE = {
  name: 'Sachin Marmat',
  role: 'Full Stack Web Developer',
  location: 'Jaipur, India',
  email: 'sb6583425@gmail.com',
  phone: '+91 9664034435',
  whatsapp: '+91 9664034435',
  linkedin: 'https://www.linkedin.com/in/sachin-marmat-66b55531a/',
  github: 'https://github.com/sachinmarmat',
  resumeUrl: '/cv.pdf',
}

export const ABOUT = {
  headline:
    'I’m a full stack developer building modern, responsive web applications end-to-end (front-end + back-end).',
  paragraphs: [
    'I build polished user interfaces with React and Tailwind, and I create reliable back-end APIs and server-side functionality.',
    'I care about performance, accessibility, and developer experience—writing maintainable code that scales as your product grows.',
  ],
}

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL', 'MySQL'] },
  { group: 'Tools', items: ['Git & GitHub', 'Vite', 'VS Code', 'Figma (basic)'] },
  { group: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
]

export const PROJECTS: Project[] = [
  {
    title: 'Job Portal',
    period: '2025',
    description:
      'A modern job portal with job listing, search, filters, and responsive UI.',
    highlights: [
      'Implemented responsive job listing, search, filters, and responsive UI',
      'Optimized UI with reusable components and consistent design system',
      'Added accessibility-friendly interactions and keyboard navigation',
    ],
    tech: ['React', 'Node.js', 'Express', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Nodemailer', 'Mongoose', 'MongoDB'],
    imageSrc: '/project1.webp',
    imageAlt: 'Job Portal project preview',
    links: { live: 'https://pixel-ui-six.vercel.app/', github: 'https://github.com/sachinmarmat/Pixel-ui' },
  },
  {
    title: 'IT Solution Website',
    period: '2025',
    description:
      'A modern IT solution website with IT solutions, IT services, and IT support.',
    highlights: [
      'Implemented responsive IT solution listing, search, filters, and responsive UI',
      'Optimized UI with reusable components and consistent design system',
      'Added accessibility-friendly interactions and keyboard navigation',
    ],
    tech: ['React', 'Node.js', 'Express', 'JavaScript', 'Tailwind CSS', 'Mongoose', 'MongoDB'],
    imageSrc: '/project2.webp',
    imageAlt: 'IT Solution Website project preview',
    links: { live: 'https://pixelmainwebfrontend.vercel.app/', github: 'https://github.com/your-username/project' },
  },
  {
    title: 'Astrology Website',
    period: '2026',
    description: 'A professional astrology website with astrology services, astrology readings, and astrology predictions.',
    highlights: ['Smooth section navigation', 'Clean typography and layout', 'Deploy-ready build'],
    tech: ['React', 'Node.js', 'Express','Mongoose', 'MongoDB'],
    imageSrc: '/Astro.webp',
    imageAlt: 'Astrology Website project preview',
    links: { live: 'https://www.panditpurshotamgaur.com/', github: 'https://github.com/your-username/project' },
  },
]

export const EDUCATION: EducationItem[] = [
  {
    program: 'Bachelor of computer application',
    institute: 'University of Maharaja College jaipur',
    location: 'Jaipur, India',
    start: '2022',
    end: '2025',
    details: ['Relevant coursework: Data Structures, Web Development, DBMS'],
  },
]

