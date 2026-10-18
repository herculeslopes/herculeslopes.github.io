import { useEffect, useRef, useState, type ReactNode } from 'react'
import { LayoutGroup, motion } from 'motion/react'
import { useIllustrationPlay } from './use-illustration-play'

const ROW = 48
const VISIBLE = 5
const SCENE_MS = 1700
const MARK_MS = 780
const SEND_MS = 1150
const MORPH_MS = 860
const PAUSE_MS = 1300
const TRAVEL = 108

const slugs = ['mensagem', 'pagamento', 'cadastro', 'alerta', 'arquivo'] as const

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
type Beat = 'scene' | 'mark' | 'send' | 'morph' | 'idle' | 'fade'

const seed: Row[] = [5, 4, 3, 2, 1].map((id) => ({
  id,
  type: (id - 1) % events.length,
  key: `seed-${id}`,
}))

const settle = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
const travelEase = { duration: 1.05, ease: [0.45, 0, 0.2, 1] as const }

function Chip({ type, layoutId }: { type: number; layoutId?: string }) {
  const event = events[type]
  return (
    <motion.span
      className="db-chip"
      style={{ background: event.color }}
      layoutId={layoutId}
      transition={{ layout: { duration: 0.86, ease: [0.22, 1, 0.36, 1] } }}
    >
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor">
        {event.icon}
      </svg>
    </motion.span>
  )
}

function AlertScene({ beat }: { beat: Beat }) {
  const showing = beat === 'scene'
  return (
    <motion.div
      className="db-window"
      initial={{ scale: 0.76 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="db-win-bar">
        <i />
        <i />
        <i />
      </div>
      <div className="db-win-body">
        <span className="db-win-line" />
        <span className="db-win-line db-win-line-2" />
        <span className="db-win-hit" />
        <motion.span
          className="db-cursor-run"
          initial={{ x: '8%', y: 4, opacity: 0 }}
          animate={{ x: '64%', y: 46, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg className="db-cursor" viewBox="0 0 12 16" aria-hidden="true">
            <path fill="currentColor" d="M1 1.2 10.6 7.2 6.4 8.1 8.6 14.2 6.5 15.1 4.2 8.8 1 11.2V1.2Z" />
          </svg>
        </motion.span>
        <motion.span
          className="db-bug"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: showing ? 1 : 0, scale: showing ? 1 : 0.86 }}
          transition={{ duration: 0.32, delay: showing ? 1.15 : 0 }}
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16 8.2c2.2 0 3.7 1.5 3.7 3.3v1.8c1 .3 1.9.7 2.6 1.2l1.9-1.9 1.5 1.5-1.8 1.8c.2.5.3 1 .3 1.6s-.1 1.1-.3 1.6l1.8 1.8-1.5 1.5-1.9-1.9c-.7.5-1.6.9-2.6 1.2v1.8c0 1.8-1.5 3.3-3.7 3.3s-3.7-1.5-3.7-3.3v-1.8c-1-.3-1.9-.7-2.6-1.2l-1.9 1.9-1.5-1.5 1.8-1.8c-.2-.5-.3-1-.3-1.6s.1-1.1.3-1.6l-1.8-1.8 1.5-1.5 1.9 1.9c.7-.5 1.6-.9 2.6-1.2v-1.8c0-1.8 1.5-3.3 3.7-3.3Z"
            />
            <circle cx="24.5" cy="7.2" r="3.2" fill="#e23b3b" />
          </svg>
        </motion.span>
      </div>
    </motion.div>
  )
}

function MessageScene({ beat }: { beat: Beat }) {
  return (
    <div className="db-phone">
      <div className="db-phone-top" />
      <span className="db-bubble db-bubble-quiet" />
      <motion.span
        className="db-bubble"
        initial={{ y: 28, opacity: 0 }}
        animate={{ y: 0, opacity: beat === 'scene' ? 1 : 0 }}
        transition={{
          y: { duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.3, delay: beat === 'scene' ? 0.4 : 0 },
        }}
      />
    </div>
  )
}

function SignupScene({ beat }: { beat: Beat }) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (beat !== 'scene') return
    const steps = ['s', 'se', 'sen', 'senh', 'senha', '••••••']
    let index = 0
    setText('')
    const timer = window.setInterval(() => {
      setText(steps[Math.min(index, steps.length - 1)])
      index += 1
      if (index >= steps.length) window.clearInterval(timer)
    }, 220)
    return () => window.clearInterval(timer)
  }, [beat])

  return (
    <div className="db-form">
      <span className="db-field" />
      <span className="db-field db-field-pass" style={{ opacity: beat === 'scene' ? 1 : 0 }}>
        {text}
      </span>
    </div>
  )
}

function PaymentScene({ beat }: { beat: Beat }) {
  return (
    <div className="db-pay">
      <span className="db-pay-band" />
      <span className="db-pay-ok" />
      <motion.span
        className="db-pay-check"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: beat === 'scene' ? 1 : 0, scale: beat === 'scene' ? 1 : 0.8 }}
        transition={{ duration: 0.35, delay: beat === 'scene' ? 0.95 : 0 }}
      />
    </div>
  )
}

function FileScene({ beat }: { beat: Beat }) {
  return (
    <div className="db-drop">
      <motion.span
        className="db-sheet"
        initial={{ y: -34, opacity: 0 }}
        animate={{ y: 0, opacity: beat === 'scene' ? 1 : 0 }}
        transition={{
          y: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.3, delay: beat === 'scene' ? 0 : 0 },
        }}
      >
        <i />
      </motion.span>
    </div>
  )
}

function Origin({ type, beat }: { type: number; beat: Beat }) {
  if (type === 3) return <AlertScene beat={beat} />
  if (type === 0) return <MessageScene beat={beat} />
  if (type === 2) return <SignupScene beat={beat} />
  if (type === 1) return <PaymentScene beat={beat} />
  return <FileScene beat={beat} />
}

export function DatabaseIllu() {
  const { ref, play, inView, reduced } = useIllustrationPlay<HTMLDivElement>()
  const [rows, setRows] = useState<Row[]>(seed)
  const [current, setCurrent] = useState<Row | null>(null)
  const [beat, setBeat] = useState<Beat>('idle')
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
      const next: Row = { id, type, key: `ev-${id}` }
      setMorphKey(null)
      setCurrent(next)
      setBeat('scene')
      arm(() => {
        setBeat('mark')
        arm(() => {
          setBeat('send')
          arm(() => {
            setBeat('morph')
            setMorphKey(next.key)
            setRows((list) => [next, ...list].slice(0, VISIBLE + 1))
            arm(() => {
              setBeat('idle')
              setMorphKey(null)
              setCurrent(null)
              setRows((list) => list.slice(0, VISIBLE))
              arm(cycle, PAUSE_MS)
            }, MORPH_MS)
          }, SEND_MS)
        }, MARK_MS)
      }, SCENE_MS)
    }

    arm(cycle, 700)
    return () => {
      dead = true
      window.clearTimeout(timer)
      setBeat('idle')
      setCurrent(null)
      setMorphKey(null)
      setRows((list) => list.slice(0, VISIBLE))
    }
  }, [play])

  useEffect(() => {
    if (!reduced || !inView) return
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
      const next: Row = { id, type, key: `ev-${id}` }
      setCurrent(null)
      setMorphKey(null)
      setBeat('fade')
      setRows((list) => [next, ...list].slice(0, VISIBLE + 1))
      arm(() => {
        setBeat('idle')
        setRows((list) => list.slice(0, VISIBLE))
        arm(cycle, 1600)
      }, 700)
    }

    arm(cycle, 500)
    return () => {
      dead = true
      window.clearTimeout(timer)
    }
  }, [reduced, inView])

  const traveling = current && (beat === 'mark' || beat === 'send')
  const slug = current ? slugs[current.type] : ''

  return (
    <div
      ref={ref}
      className="db-stage"
      role="img"
      aria-label="Cada evento sai da sua origem, percorre o conector e entra no topo da tabela."
      data-illu="database"
      data-phase={beat}
      data-beat={beat}
      data-type={slug}
      data-play={play ? 'on' : 'off'}
    >
      <LayoutGroup id="database-events">
        <div aria-hidden="true">
          <div className="db-scene">
            {current && beat !== 'idle' && beat !== 'fade' ? (
              <motion.div
                key={current.key}
                className="db-scene-fill"
                initial={{ opacity: 0 }}
                animate={{ opacity: beat === 'morph' ? 0 : 1 }}
                transition={{ duration: 0.35 }}
              >
                <Origin type={current.type} beat={beat} />
              </motion.div>
            ) : null}
          </div>
          <span className="db-wire" />
          {traveling ? (
            <motion.div
              className="db-traveler"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: beat === 'send' ? TRAVEL : 0, opacity: 1 }}
              transition={{ y: travelEase, opacity: { duration: 0.3 } }}
            >
              <Chip type={current.type} layoutId={current.key} />
            </motion.div>
          ) : null}
          {traveling && current.type === 2 ? (
            <motion.div
              className="db-flyer-dots"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: beat === 'send' ? TRAVEL + 8 : 0, opacity: 1 }}
              transition={{ y: travelEase, opacity: { duration: 0.3 } }}
            >
              <motion.span
                className="db-dots-fly"
                layoutId={`${current.key}-dots`}
                transition={{ layout: { duration: 0.86, ease: [0.22, 1, 0.36, 1] } }}
              >
                ••••••
              </motion.span>
            </motion.div>
          ) : null}
          <div className="db-table">
            {rows.map((row, index) => (
              <motion.div
                key={row.key}
                className="db-row"
                initial={reduced ? { opacity: 0, y: index * ROW } : false}
                animate={{
                  y: index * ROW,
                  opacity: index < VISIBLE ? 1 : 0,
                }}
                transition={{
                  duration: reduced ? 0.45 : play ? 0.7 : 0,
                  ease: settle.ease,
                }}
              >
                <span className="db-id">{row.id}</span>
                <Chip type={row.type} layoutId={row.key === morphKey ? morphKey : undefined} />
                <motion.span
                  className="db-dots"
                  layoutId={
                    row.key === morphKey && row.type === 2 ? `${row.key}-dots` : undefined
                  }
                  transition={{ layout: { duration: 0.86, ease: [0.22, 1, 0.36, 1] } }}
                >
                  ••••••
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </LayoutGroup>
    </div>
  )
}
