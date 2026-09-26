import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <div id="top" />
      <Header />
      <main id="main" className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
