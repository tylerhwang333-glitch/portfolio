import { content } from '../data/content'
import { Section } from './Section'

export function Experience() {
  const { experience, education } = content
  return (
    <Section id="experience" eyebrow="02 / Experience" title="Where I've worked">
      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={`${job.role}-${job.start}`} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <p className="font-mono text-xs text-muted sm:pt-1.5">
              <time>{job.start}</time> – <time>{job.end}</time>
            </p>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
              <p className="text-sm text-accent">
                {job.orgUrl ? (
                  <a href={job.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {job.org}
                  </a>
                ) : (
                  job.org
                )}
              </p>
              <ul className="mt-4 space-y-2 text-muted">
                {job.bullets.map((b) => (
                  <li key={b} className="relative pl-5 leading-relaxed">
                    <span aria-hidden="true" className="absolute left-0 font-mono text-accent">
                      ›
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8">
        <h3 className="font-mono text-xs tracking-widest text-muted uppercase sm:pt-1.5">Education</h3>
        <div>
          <p className="text-lg font-semibold tracking-tight">{education.school}</p>
          <p className="text-sm text-muted">
            {education.degree} · {education.graduation}
          </p>
          <p className="mt-4 text-sm text-muted">
            <span className="font-medium text-fg">Coursework:</span> {education.courses.join(', ')}
          </p>
          {education.activities.length > 0 && (
            <p className="mt-2 text-sm text-muted">
              <span className="font-medium text-fg">Activities:</span> {education.activities.join('; ')}
            </p>
          )}
        </div>
      </div>
    </Section>
  )
}
