import { content } from '../data/content'
import { ButtonLink } from './ButtonLink'
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export function Footer() {
  const { profile } = content
  return (
    <footer id="contact" aria-labelledby="contact-title" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">04 / Contact</p>
        <h2 id="contact-title" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Let's talk
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          I'm looking for software engineering internships. The fastest way to reach me is email.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block text-xl font-semibold break-all text-accent underline-offset-4 hover:underline sm:text-2xl"
        >
          {profile.email}
        </a>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${profile.email}`} external={false}>
            <MailIcon /> Email
          </ButtonLink>
          {profile.github && (
            <ButtonLink href={profile.github}>
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

        <p className="mt-20 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
