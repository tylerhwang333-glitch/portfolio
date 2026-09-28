import { useId, useState, type MouseEvent } from 'react'
import type { Project } from '../types'
import { ButtonLink } from './ButtonLink'
import { ChevronIcon, ExternalIcon, GitHubIcon } from './icons'

function initials(title: string) {
  return title
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
}

function Thumbnail({ project }: { project: Project }) {
  if (project.image) {
    // Screenshots come in a range of aspect ratios, so each sits whole inside a
    // uniform frame (object-contain) rather than being cropped to fill it.
    return (
      <div className="flex aspect-video w-full items-center justify-center overflow-hidden border-b border-line bg-surface-2 p-3 sm:p-4">
        <img
          src={project.image}
          alt={project.imageAlt || `Screenshot of ${project.title}`}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full rounded-md object-contain shadow-sm ring-1 ring-line"
        />
      </div>
    )
  }
  // Fallback tile: decorative, so hidden from screen readers (the title is right below it).
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[5/2] w-full items-center justify-center overflow-hidden border-b border-line bg-surface-2"
      style={{
        backgroundImage:
          'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        backgroundPosition: 'center',
      }}
    >
      <span className="rounded-md bg-surface-2 px-3 py-1 font-mono text-3xl font-medium tracking-tight text-muted transition-colors duration-200 group-hover:text-accent">
        {initials(project.title)}
      </span>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  // Clicking anywhere on the card toggles highlights, except on its links/buttons.
  const onCardClick = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('a, button')) return
    setOpen((o) => !o)
  }

  return (
    <article
      onClick={onCardClick}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-line bg-surface transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/60"
    >
      <Thumbnail project={project} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
          {project.hackathon && (
            <span className="rounded-full border border-accent/40 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent">
              Hackathon
            </span>
          )}
        </div>
        {project.hackathon && <p className="mt-1 font-mono text-xs text-muted">Built at {project.hackathon}</p>}
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        <ul aria-label="Tech stack" className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted">
              {t}
            </li>
          ))}
        </ul>

        <div
          id={panelId}
          inert={!open}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="mt-5 space-y-2 border-l-2 border-accent/50 pl-4 text-sm leading-relaxed">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {project.github && (
            <ButtonLink href={project.github} size="sm" label={`${project.title} source code on GitHub`}>
              <GitHubIcon width={14} height={14} /> GitHub
            </ButtonLink>
          )}
          {project.demo && (
            <ButtonLink href={project.demo} size="sm" variant="primary" label={`${project.title} live demo`}>
              <ExternalIcon width={14} height={14} /> Live Demo
            </ButtonLink>
          )}
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((o) => !o)}
            className="ml-auto inline-flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1.5 font-mono text-xs text-muted transition-colors duration-150 hover:text-accent"
          >
            {open ? 'Hide' : 'Highlights'}
            <span className="sr-only"> for {project.title}</span>
            <ChevronIcon
              width={14}
              height={14}
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>
    </article>
  )
}
