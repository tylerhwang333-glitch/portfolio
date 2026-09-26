import type { ReactNode } from 'react'

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
  /** Opens in a new tab. Off for mailto: and same-site links. */
  external?: boolean
  label?: string
}

const variants = {
  primary: 'bg-accent text-accent-fg hover:brightness-110',
  secondary: 'border border-line bg-surface text-fg hover:border-accent hover:text-accent',
}

const sizes = {
  md: 'px-4 py-2.5 text-sm',
  sm: 'px-3 py-1.5 text-xs',
}

export function ButtonLink({ href, children, variant = 'secondary', size = 'md', external = true, label }: ButtonLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center gap-2 rounded-lg font-medium transition-[color,border-color,filter] duration-150 ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </a>
  )
}
