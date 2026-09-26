export interface Link {
  label: string
  href: string
}

export interface Project {
  title: string
  /** One-line description shown on the card. */
  description: string
  tech: string[]
  /** Shown in the expandable "highlights" panel, not on the card face. */
  highlights: string[]
  /** Shows a "Hackathon" badge. Put the event name here, e.g. "Berkeley AI Hackathon 2026". */
  hackathon?: string
  github?: string
  demo?: string
  /** Path under /public, e.g. "/screenshots/rankup.png". Leave empty for the fallback tile. */
  image?: string
  imageAlt?: string
}

export interface Experience {
  role: string
  org: string
  orgUrl?: string
  start: string
  end: string
  bullets: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Education {
  school: string
  degree: string
  graduation: string
  courses: string[]
  activities: string[]
}

export interface Profile {
  name: string
  tagline: string
  location?: string
  email: string
  github: string
  linkedin: string
  /** Path to the resume under /public. Leave empty to hide the Resume button. */
  resume: string
}

export interface SiteContent {
  profile: Profile
  projects: Project[]
  experience: Experience[]
  skills: SkillGroup[]
  education: Education
}
