import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { animate } from 'motion/react'
import {
  applyTheme,
  curtainDirection,
  nextTheme,
  resolveTheme,
  themeBackground,
  type CurtainDirection,
  type Theme,
} from '../theme'

type StartViewTransition = (update: () => void) => { finished: Promise<void> }

type ThemeContextValue = {
  theme: Theme
  running: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const curtainRef = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState<Theme>('dark')
  const [running, setRunning] = useState(false)

  useLayoutEffect(() => {
    const resolved = resolveTheme()
    applyTheme(resolved)
    setTheme(resolved)
  }, [])

  const commit = useCallback((next: Theme) => {
    applyTheme(next)
    setTheme(next)
  }, [])

  const toggle = useCallback(() => {
    if (running) return
    const next = nextTheme(theme)
    const direction = curtainDirection(next)
    setRunning(true)

    void runTransition(curtainRef.current, next, direction, () => commit(next))
      .finally(() => {
        document.documentElement.removeAttribute('data-curtain')
        setRunning(false)
      })
  }, [commit, running, theme])

  return (
    <ThemeContext.Provider value={{ theme, running, toggle }}>
      {children}
      <div
        ref={curtainRef}
        className="curtain"
        data-active="false"
        aria-hidden="true"
      />
    </ThemeContext.Provider>
  )
}

export function ThemeToggle() {
  const context = useContext(ThemeContext)
  if (!context) return null

  const { theme, running, toggle } = context
  const label = theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'

  return (
    <button
      type="button"
      className="theme-toggle"
      data-theme-toggle
      onClick={toggle}
      disabled={running}
      aria-label={label}
      suppressHydrationWarning
    >
      <SunIcon />
      <MoonIcon />
      <span className="label-to-light">Claro</span>
      <span className="label-to-dark">Escuro</span>
    </button>
  )
}

function SunIcon() {
  return (
    <svg className="icon-sun" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <path
        d="M8 1.2v2.1M8 12.7v2.1M1.2 8h2.1M12.7 8h2.1M3.2 3.2l1.5 1.5M11.3 11.3l1.5 1.5M12.8 3.2l-1.5 1.5M4.7 11.3l-1.5 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="icon-moon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M10.2 1.6A6.2 6.2 0 1 0 14.4 9 5 5 0 0 1 10.2 1.6z"
        fill="currentColor"
      />
    </svg>
  )
}

async function runTransition(
  curtain: HTMLDivElement | null,
  next: Theme,
  direction: CurtainDirection,
  apply: () => void,
) {
  if (prefersReducedMotion()) {
    await fadeTheme(curtain, next, apply)
    return
  }

  const doc = document as Document & {
    startViewTransition?: StartViewTransition
  }

  if (typeof doc.startViewTransition === 'function') {
    document.documentElement.setAttribute('data-curtain', direction)
    try {
      const transition = doc.startViewTransition(() => {
        apply()
      })
      await transition.finished
    } catch {
      apply()
    }
    return
  }

  await sweepTheme(curtain, direction, apply)
}

async function fadeTheme(
  curtain: HTMLDivElement | null,
  next: Theme,
  apply: () => void,
) {
  if (!curtain) {
    apply()
    return
  }

  curtain.style.background = themeBackground[next]
  curtain.style.transform = 'none'
  curtain.style.opacity = '0'
  curtain.dataset.active = 'true'
  await animate(curtain, { opacity: 1 }, { duration: 0.14, ease: 'easeOut' }).finished
  apply()
  await animate(curtain, { opacity: 0 }, { duration: 0.16, ease: 'easeIn' }).finished
  curtain.dataset.active = 'false'
  curtain.style.opacity = ''
  curtain.style.background = ''
}

async function sweepTheme(
  curtain: HTMLDivElement | null,
  direction: CurtainDirection,
  apply: () => void,
) {
  if (!curtain) {
    apply()
    return
  }

  const enter = direction === 'ltr' ? '-100%' : '100%'
  const exit = direction === 'ltr' ? '100%' : '-100%'
  const ease = [0.77, 0, 0.18, 1] as const

  curtain.style.background = '#98FBCB'
  curtain.style.opacity = '1'
  curtain.dataset.active = 'true'

  await animate(curtain, { x: [enter, '0%'] }, { duration: 0.34, ease }).finished
  apply()
  await animate(curtain, { x: ['0%', exit] }, { duration: 0.4, ease }).finished

  curtain.dataset.active = 'false'
  curtain.style.background = ''
  curtain.style.opacity = ''
}
