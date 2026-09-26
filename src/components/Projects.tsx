import { content } from '../data/content'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" eyebrow="01 / Projects" title="Things I've built">
      <ul className="grid gap-6 md:grid-cols-2">
        {content.projects.map((p) => (
          <li key={p.title} className="flex [&>article]:flex-1">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
