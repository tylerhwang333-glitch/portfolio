import { content } from '../data/content'
import { ThemeToggle } from './ThemeToggle'

const nav = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-medium transition-colors duration-150 hover:text-accent">
          {content.profile.name}
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex gap-6 text-sm text-muted">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors duration-150 hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
