export type ResumeData = {
  name: string
  title: string
  summary: string
  skills: string[]
  experience: Array<{ title: string; org?: string; period?: string; bullets?: string[] }>
  education: Array<{ title: string; org?: string; period?: string; details?: string }>
  projects: Array<{ title: string; description: string; tech: string[]; repoUrl?: string }>
}

export const resumeData: ResumeData = {
  name: 'Javad Shamekhi',
  title: 'Fullstack Developer',
  summary: 'Building reliable fullstack apps with Next.js and Spring Boot.',
  skills: [
    'Java', 'Spring Boot', 'SQL', 'PostgreSQL', 'MySQL', 'Redis', 'Next.js', 'TypeScript', 'Tailwind CSS'
  ],
  experience: [
    {
      title: 'Intern - ERP Company',
      org: 'Backoffice Systems',
      period: '2024',
      bullets: [
        'Built complex SQL queries and views for operational dashboards',
        'Optimized slow queries reducing median latency by ~40%',
        'Collaborated with seniors to improve data integrity'
      ]
    },
    {
      title: 'Personal Projects',
      org: 'Spring Boot & Next.js',
      period: '2024–2025',
      bullets: [
        'Implemented REST APIs with authentication and role-based access',
        'Built responsive UIs with Next.js, TypeScript, Tailwind',
        'Used PostgreSQL and Redis for persistence and caching'
      ]
    }
  ],
  education: [
    { title: 'B.Sc. Computer Science', org: 'Your University', period: '2019–2023', details: 'Software engineering and databases' },
  ],
  projects: [
    {
      title: 'Task Manager API',
      description: 'Spring Boot REST API with JWT auth, PostgreSQL, and Redis caching.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'JWT'],
      repoUrl: 'https://github.com/JavadShamekhi/task-manager-api',
    },
    {
      title: 'Project Planner',
      description: 'Next.js app for planning projects with drag-and-drop and Markdown notes.',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      repoUrl: 'https://github.com/JavadShamekhi/project-planner',
    },
  ],
}


