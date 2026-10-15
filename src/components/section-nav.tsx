import { useEffect, useState } from 'react'
import { nav } from '../site'
import { ThemeToggle } from './theme-provider'

export function SectionNav() {
  const [active, setActive] = useState<(typeof nav)[number]['id']>('topo')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const ids = nav.map((item) => item.id)
    let frame = 0

    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / max)))

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4

      if (atBottom) {
        setActive(ids[ids.length - 1] ?? 'topo')
        return
      }

      const line = Math.min(window.innerHeight * 0.28, 140)
      let current: (typeof ids)[number] = ids[0] ?? 'topo'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', update)
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', update)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <nav className="rail" aria-label="Seções">
      <div className="rail-group">
        <div className="rail-track" aria-hidden="true">
          <span style={{ height: `${progress * 100}%` }} />
        </div>
        <ul className="rail-links">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`/#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ThemeToggle />
    </nav>
  )
}
