import { content } from '../data/content'
import { ButtonLink } from './ButtonLink'
import { FileIcon, GitHubIcon, LinkedInIcon } from './icons'

export function Hero() {
  const { profile, education } = content
  return (
    <section aria-labelledby="hero-title" className="pt-16 pb-16 sm:pt-24 sm:pb-20">
      <p className="font-mono text-xs tracking-wide text-muted sm:text-sm">
        {education.degree} <span className="text-accent">/</span> {education.school}{' '}
        <span className="text-accent">/</span> {education.graduation}
      </p>
      <h1 id="hero-title" className="mt-5 text-5xl font-extrabold tracking-tighter sm:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{profile.tagline}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        {profile.github && (
          <ButtonLink href={profile.github} variant="primary">
            <GitHubIcon /> GitHub
          </ButtonLink>
        )}
        {profile.linkedin && (
          <ButtonLink href={profile.linkedin}>
            <LinkedInIcon /> LinkedIn
          </ButtonLink>
        )}
        {profile.resume && (
          <ButtonLink href={profile.resume}>
            <FileIcon /> Resume
          </ButtonLink>
        )}
      </div>

      <a
        href="#projects"
        className="mt-12 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors duration-150 hover:text-accent"
      >
        <span aria-hidden="true">↓</span> See projects
      </a>
    </section>
  )
}
