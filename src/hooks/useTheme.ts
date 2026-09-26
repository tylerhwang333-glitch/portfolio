import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const readTheme = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

function savedTheme(): string | null {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

export function useTheme() {
  // index.html sets data-theme before first paint; start from whatever it chose.
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0b0d10' : '#fafaf9')
  }, [theme])

  // Follow system changes until the user makes an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (e: MediaQueryListEvent) => {
      if (!savedTheme()) setTheme(e.matches ? 'light' : 'dark')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* storage unavailable; theme still switches for this visit */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
