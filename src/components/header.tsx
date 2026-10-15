import { useEffect, useState } from 'react'
import { nav } from '../site'
import { ThemeToggle } from './theme-provider'

export function Header() {
  const [active, setActive] = useState<(typeof nav)[number]['id']>('topo')

  useEffect(() => {
    const ids = nav.map((item) => item.id)
    let frame = 0

    const update = () => {
      frame = 0
      const header = document.querySelector('.site-header')
      const line = (header?.getBoundingClientRect().bottom ?? 72) + 40
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4

      if (atBottom) {
        setActive(ids[ids.length - 1] ?? 'topo')
        return
      }

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
    <header className="site-header">
      <div className="brand-bar" />
      <div className="wrap bar">
        <a className="mark" href="/#topo" aria-label="Início">
          HL
        </a>
        <nav className="nav" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
