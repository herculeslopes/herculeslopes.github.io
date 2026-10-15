export type Theme = 'light' | 'dark'
export type CurtainDirection = 'ltr' | 'rtl'

export const THEME_STORAGE_KEY = 'theme'

/** Keep these in sync with the palette in src/styles.css */
export const themeBackground: Record<Theme, string> = {
  light: '#FFFFFF',
  dark: '#101210',
}

export function resolveTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* private mode or blocked storage */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = theme
  document
    .getElementById('theme-color')
    ?.setAttribute('content', themeBackground[theme])
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
}

export function nextTheme(theme: Theme): Theme {
  return theme === 'dark' ? 'light' : 'dark'
}

export function curtainDirection(theme: Theme): CurtainDirection {
  return theme === 'light' ? 'ltr' : 'rtl'
}

/**
 * Runs before first paint. Sets data-theme from localStorage, otherwise
 * the system preference, so the prerendered HTML does not flash the wrong theme.
 */
export const themeBootScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var t=(s==='light'||s==='dark')?s:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');var d=document.documentElement;d.setAttribute('data-theme',t);d.style.colorScheme=t;var m=document.createElement('meta');m.id='theme-color';m.setAttribute('name','theme-color');m.setAttribute('content',t==='light'?'${themeBackground.light}':'${themeBackground.dark}');document.head.appendChild(m);}catch(e){}})();`
