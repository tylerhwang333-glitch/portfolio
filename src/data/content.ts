import type { SiteContent } from '../types'

/**
 * All site content lives here. Edit this file; components never need to change.
 *
 * - Any link left as an empty string ('') is hidden automatically.
 * - Project screenshots: drop an image in public/screenshots/ and set `image: '/screenshots/name.png'`.
 */
export const content: SiteContent = {
  profile: {
    name: 'Tyler Hwang',
    tagline: 'Software engineering student at SJSU building full-stack applications.',
    location: 'San Jose, CA',
    email: 'tylerhwang333@gmail.com',
    github: 'https://github.com/tylerhwang333-glitch',
    linkedin: 'https://www.linkedin.com/in/tyler-hwang-b0275a380/', // TODO: add your LinkedIn URL
    resume: '/screenshots/TylerResumeV2.pdf',
  },

  projects: [
    {
      title: 'Rankup',
      description: 'AI post-game coach for CS2 that flags the decisions that cost a round.',
      hackathon: 'Berkeley AI Hackathon 2026',
      tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Redis', 'Docker', 'Claude API'],
      highlights: [
        'Rule-based detectors for mistakes like over-rotation.',
        "Redis vector index that surfaces a player's recurring mistakes across matches.",
        'Claude-generated coaching reports and drills with a deterministic fallback.',
        'Full stack in Docker Compose behind Nginx.',
      ],
      github: 'https://github.com/tylerhwang333-glitch/berkeleyai-2026', // TODO
      demo: '',
      image: '/screenshots/rankupPhoto.webp',
    },
    {
      title: 'Restaurant Finder',
      description: 'Full-stack app that finds, categorizes, and randomly picks nearby restaurants.',
      tech: ['Python', 'FastAPI', 'React', 'Leaflet'],
      highlights: [
        'FastAPI backend on the Overpass and Nominatim APIs (no API key needed).',
        'Live Leaflet map with category filters and geolocation search.',
        '"Surprise Me" random pick with a case-opening reel animation.',
      ],
      github: 'https://github.com/tylerhwang333-glitch/restuarantFinder', // TODO
      demo: 'https://restuarant-finder-mxiv.vercel.app/', // TODO
      image: '/screenshots/restaurantFinder.webp',
    },
    {
      title: 'Compass',
      description: 'Frontend for an agent that turns one filed issue into a self-running dev loop.',
      hackathon: 'LoopHack 2026',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      highlights: [
        'Live issue-lifecycle timeline (React Router 6) mirroring backend event stages.',
        'Mock localStorage adapter alongside an HTTP adapter, switched by one env variable.',
        'Shared API types across composer, review, and timeline views.',
      ],
      github: 'https://github.com/Cheemasukh962/LoopHack2026', // TODO
      demo: 'http://loop-hack2026.vercel.app/',
      image: '/screenshots/Compass.webp',
    },
    {
      title: 'Internship Alert Bot',
      description: 'Discord bot that alerts a channel to new SWE internships every 30 minutes.',
      tech: ['Python', 'Discord API', 'GitHub Actions'],
      highlights: [
        'Direct ATS poller across Greenhouse, Lever, Ashby, Workday, and SmartRecruiters.',
        'Dedup key that normalizes company and title text across sources.',
        'GitHub Actions schedule that persists seen-listing state back to the repo.',
      ],
      github: 'https://github.com/tylerhwang333-glitch/software-openings', // TODO
      demo: '',
      image: '/screenshots/internshipBot.webp',
    },
  ],

  experience: [
    {
      role: 'Development Team Officer',
      org: 'Software and Computer Engineering Society (SCE) @ SJSU',
      start: 'Aug 2026',
      end: 'Present',
      bullets: [
        'Built a Costco gas price search tool with React, Docker, and Tailwind CSS.',
        "Reverse engineered Costco's REST APIs with Chrome DevTools to gather store data.",
        'Wrote Mocha/Chai unit tests for the JSON parsing logic.',
        'Deployed with Nginx and Docker, serving minified JavaScript.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      org: 'Software and Computer Engineering Society (SCE) @ SJSU',
      start: 'May 2026',
      end: 'Aug 2026',
      bullets: [
        'Built a URL shortening service with Python, FastAPI, SQLite, and Docker used by 500+ users.',
        'Containerized the API and served static content with Nginx.',
        'Added Prometheus metrics and Grafana dashboards for server monitoring.',
      ],
    },
  ],

  skills: [
    { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java'] },
    { label: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Leaflet'] },
    { label: 'Backend', items: ['FastAPI', 'Node.js', 'SQLite', 'Redis'] },
    {
      label: 'Infra / Tools',
      items: ['Docker', 'Docker Compose', 'Nginx', 'GitHub Actions', 'Prometheus', 'Grafana', 'Git', 'Mocha/Chai'],
    },
  ],

  education: {
    school: 'San Jose State University',
    degree: 'B.S. Software Engineering',
    graduation: 'Expected May 2029',
    courses: ['Data Structures and Algorithms', 'Discrete Math', 'Calculus III', 'General Physics II'],
    activities: ['Member & Development Team Officer, Software and Computer Engineering Society (SCE)'],
  },
}
