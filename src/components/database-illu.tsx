import { useEffect, useRef, useState, type ReactNode } from 'react'
import { LayoutGroup, motion } from 'motion/react'
import { useIllustrationPlay } from './use-illustration-play'

const ROW = 48
const VISIBLE = 5

const events: { name: string; color: string; icon: ReactNode }[] = [
  {
    name: 'Mensagem',
    color: '#98fbcb',
    icon: <path d="M1.6 3.2h12.8v7.1H8.4L5.2 13v-2.7H1.6V3.2z" />,
  },
  {
    name: 'Pagamento',
    color: '#f0c36a',
    icon: (
      <>
        <path d="M1.8 3.4h12.4v9.2H1.8V3.4z" />
        <path d="M1.8 6.1h12.4v1.6H1.8V6.1z" fill="#102117" opacity="0.28" />
      </>
    ),
  },
  {
    name: 'Cadastro',
    color: '#9eb6ff',
    icon: (
      <>
        <circle cx="8" cy="5" r="2.3" />
        <path d="M3 13.2c.55-2.5 2.35-3.7 5-3.7s4.45 1.2 5 3.7H3z" />
      </>
    ),
  },
  {
    name: 'Alerta',
    color: '#f0a3a3',
    icon: (
      <path d="M8 1.8 14.2 13H1.8L8 1.8zm-.7 4h1.4v3.3H7.3V5.8zm0 4.3h1.4v1.4H7.3v-1.4z" />
    ),
  },
  {
    name: 'Arquivo',
    color: '#c9b6f0',
    icon: <path d="M3.4 1.6h5.4L13 6v8.4H3.4V1.6zm5.1.9v3.3H12" />,
  },
]

type Row = { id: number; type: number; key: string }
type Phase = 'idle' | 'shake' | 'morph'

const seed: Row[] = [5, 4, 3, 2, 1].map((id) => ({
  id,
  type: (id - 1) % events.length,
  key: `seed-${id}`,
}))

function Chip({ type, layoutId }: { type: number; layoutId?: string }) {
  const event = events[type]
  return (
    <motion.span
      className="db-chip"
      style={{ background: event.color }}
      layoutId={layoutId}
      transition={{ layout: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
    >
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor">
        {event.icon}
      </svg>
    </motion.span>
  )
}

export function DatabaseIllu() {
  const { ref, play } = useIllustrationPlay<HTMLDivElement>()
  const [rows, setRows] = useState<Row[]>(seed)
  const [event, setEvent] = useState<Row | null>(null)
  const [phase, setPhase] = useState<Phase>('idle')
  const [morphKey, setMorphKey] = useState<string | null>(null)
  const idRef = useRef(6)

  useEffect(() => {
    if (!play) return
    let dead = false
    let timer = 0
    const arm = (fn: () => void, ms: number) => {
      timer = window.setTimeout(() => {
        if (!dead) fn()
      }, ms)
    }

    const cycle = () => {
      const type = Math.floor(Math.random() * events.length)
      const id = idRef.current
      idRef.current += 1
      const key = `ev-${id}`
      const next = { id, type, key }
      setMorphKey(null)
      setPhase('shake')
      setEvent(next)
      arm(() => {
        setPhase('morph')
        setMorphKey(key)
        setEvent(null)
        setRows((current) => [next, ...current].slice(0, VISIBLE + 1))
        arm(() => {
          setPhase('idle')
          setMorphKey(null)
          setRows((current) => current.slice(0, VISIBLE))
          arm(cycle, 1100)
        }, 820)
      }, 920)
    }

    arm(cycle, 700)
    return () => {
      dead = true
      window.clearTimeout(timer)
    }
  }, [play])

  return (
    <div
      ref={ref}
      className="db-stage"
      role="img"
      aria-label="Tabela Supabase: um evento entra no topo e a linha mais antiga sai."
      data-illu="database"
      data-phase={phase}
      data-play={play ? 'on' : 'off'}
    >
      <LayoutGroup id="database-events">
        <div aria-hidden="true">
          {event ? (
            <motion.div
              className="db-event"
              initial={false}
              animate={{ x: [0, -3, 3, -2, 2, 0] }}
              transition={{ duration: 0.72, ease: [0.45, 0, 0.55, 1] }}
            >
              <Chip type={event.type} layoutId={event.key} />
              <p>{events[event.type].name}</p>
            </motion.div>
          ) : null}
          <div className="db-table">
            {rows.map((row, index) => (
              <motion.div
                key={row.key}
                className="db-row"
                initial={false}
                animate={{
                  y: index * ROW,
                  opacity: index < VISIBLE ? 1 : 0,
                }}
                transition={{
                  duration: play ? 0.62 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="db-id">{row.id}</span>
                <Chip type={row.type} layoutId={row.key === morphKey ? morphKey : undefined} />
                <span className="db-dots">••••••</span>
              </motion.div>
            ))}
          </div>
        </div>
      </LayoutGroup>
    </div>
  )
}
