import { content } from '../data/content'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="03 / Skills" title="Tools I use">
      <dl className="grid gap-8 sm:grid-cols-2">
        {content.skills.map((group) => (
          <div key={group.label}>
            <dt className="font-mono text-xs tracking-widest text-muted uppercase">{group.label}</dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm transition-colors duration-150 hover:border-accent/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
