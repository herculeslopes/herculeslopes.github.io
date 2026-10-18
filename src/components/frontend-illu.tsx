import { useEffect, useState, type CSSProperties } from 'react'
import { motion } from 'motion/react'
import { useIllustrationPlay } from './use-illustration-play'

const tools = ['React', 'Next.js', 'TanStack', 'Tailwind', 'Motion', 'TypeScript'] as const

const scenes = [
  { id: 'painel', url: 'painel' },
  { id: 'inicio', url: 'inicio' },
  { id: 'app', url: 'app' },
  { id: 'produto', url: 'produto' },
] as const

const fade = { duration: 0.32, ease: 'easeOut' as const }

function Piece({
  show,
  colored,
  quiet,
  ink,
  style,
  label,
  labelColor,
  labelOn,
  live,
  motionKind,
}: {
  show: boolean
  colored: boolean
  quiet: string
  ink: string
  style: CSSProperties
  label?: string
  labelColor?: string
  labelOn?: boolean
  live?: boolean
  motionKind?: 'nudge' | 'scale'
}) {
  const moving = Boolean(live && motionKind && show)
  return (
    <motion.div
      className="fe-piece"
      style={style}
      initial={false}
      animate={{
        opacity: show ? 1 : 0,
        x: moving && motionKind === 'nudge' ? [0, 8, 0] : 0,
        scale: moving && motionKind === 'scale' ? [1, 1.06, 1] : 1,
      }}
      transition={
        moving
          ? { duration: 1.15, repeat: Infinity, ease: 'easeInOut' }
          : fade
      }
    >
      <span className="fe-fill" style={{ background: quiet }} />
      <motion.span
        className="fe-fill"
        style={{ background: ink }}
        initial={false}
        animate={{ opacity: colored ? 1 : 0 }}
        transition={fade}
      />
      {label ? (
        <motion.span
          className="fe-label"
          style={{ color: labelColor ?? 'var(--text)' }}
          initial={false}
          animate={{ opacity: labelOn ? 1 : 0 }}
          transition={fade}
        >
          {label}
        </motion.span>
      ) : null}
    </motion.div>
  )
}

function Painel({ step, live }: { step: number; live: boolean }) {
  const color = step >= 4
  const named = step >= 6
  return (
    <>
      <Piece show={step >= 2} colored={color} quiet="var(--frame)" ink="var(--bg)" style={{ left: '3%', top: '4%', width: '94%', height: '12%' }} />
      <Piece show={step >= 1} colored={color} quiet="var(--frame)" ink="var(--text)" style={{ left: '3%', top: '20%', width: '20%', height: '76%' }} />
      <Piece
        show={step >= 1}
        colored={color}
        quiet="var(--frame)"
        ink="var(--mint)"
        label="Painel"
        labelColor="var(--mint-ink)"
        labelOn={named}
        style={{ left: '26%', top: '20%', width: '71%', height: '24%' }}
      />
      <motion.span
        className="fe-meter"
        style={{ transformOrigin: 'left center' }}
        initial={false}
        animate={{
          opacity: step >= 5 ? 1 : 0,
          scaleX: step >= 5 ? 1 : 0.18,
        }}
        transition={live && step >= 5 ? { duration: 0.7, ease: 'easeOut' } : fade}
      />
      <Piece show={step >= 1} colored={color} quiet="var(--frame)" ink="var(--bg)" style={{ left: '26%', top: '48%', width: '71%', height: '48%' }} />
      {[0, 1, 2].map((row) => (
        <Piece
          key={row}
          show={step >= 3}
          colored={color}
          quiet="var(--bg)"
          ink={row === 0 ? 'var(--mint)' : 'var(--hover)'}
          live={live && step >= 5 && row === 2}
          motionKind={row === 2 ? 'nudge' : undefined}
          style={{ left: '29%', top: `${54 + row * 13}%`, width: '65%', height: '9%' }}
        />
      ))}
    </>
  )
}

function Landing({ step, live }: { step: number; live: boolean }) {
  const color = step >= 4
  const named = step >= 6
  return (
    <>
      <Piece show={step >= 2} colored={color} quiet="var(--frame)" ink="var(--bg)" style={{ left: '3%', top: '4%', width: '94%', height: '11%' }} />
      <Piece
        show={step >= 1}
        colored={color}
        quiet="var(--frame)"
        ink="var(--mint)"
        label="Início"
        labelColor="var(--mint-ink)"
        labelOn={named}
        style={{ left: '3%', top: '19%', width: '94%', height: '40%' }}
      />
      {[0, 1, 2].map((chip) => (
        <Piece
          key={chip}
          show={step >= 3}
          colored={color}
          quiet="var(--bg)"
          ink={chip === 1 ? 'var(--text)' : 'var(--hover)'}
          live={live && step >= 5 && chip === 1}
          motionKind={chip === 1 ? 'nudge' : undefined}
          style={{ left: `${8 + chip * 22}%`, top: '46%', width: '18%', height: '8%' }}
        />
      ))}
      <Piece show={step >= 1} colored={color} quiet="var(--frame)" ink="var(--bg)" style={{ left: '3%', top: '63%', width: '46%', height: '33%' }} />
      <Piece show={step >= 1} colored={color} quiet="var(--frame)" ink="var(--text)" style={{ left: '51%', top: '63%', width: '46%', height: '33%' }} />
    </>
  )
}

function AppCard({ step, live }: { step: number; live: boolean }) {
  const color = step >= 4
  const named = step >= 6
  return (
    <>
      <Piece
        show={step >= 1}
        colored={color}
        quiet="var(--frame)"
        ink="var(--bg)"
        style={{ left: '27%', top: '3%', width: '46%', height: '94%', borderRadius: '1.1rem' }}
      />
      <Piece show={step >= 2} colored={color} quiet="var(--bg)" ink="var(--hover)" style={{ left: '32%', top: '8%', width: '36%', height: '5%', borderRadius: '99px' }} />
      <Piece
        show={step >= 1}
        colored={color}
        quiet="var(--bg)"
        ink="var(--mint)"
        label="App"
        labelColor="var(--mint-ink)"
        labelOn={named}
        style={{ left: '32%', top: '17%', width: '36%', height: '16%', borderRadius: '0.7rem' }}
      />
      {[0, 1, 2].map((row) => (
        <Piece
          key={row}
          show={step >= 3}
          colored={color}
          quiet="var(--frame)"
          ink={row === 0 ? 'var(--mint)' : 'var(--hover)'}
          live={live && step >= 5 && row === 1}
          motionKind={row === 1 ? 'nudge' : undefined}
          style={{ left: '32%', top: `${40 + row * 16}%`, width: '36%', height: '12%', borderRadius: '0.55rem' }}
        />
      ))}
    </>
  )
}

function Product({ step, live }: { step: number; live: boolean }) {
  const color = step >= 4
  const named = step >= 6
  return (
    <>
      <Piece show={step >= 2} colored={color} quiet="var(--frame)" ink="var(--bg)" style={{ left: '3%', top: '4%', width: '94%', height: '11%' }} />
      <Piece
        show={step >= 1}
        colored={color}
        quiet="var(--frame)"
        ink="var(--mint)"
        label="Peça"
        labelColor="var(--mint-ink)"
        labelOn={named}
        style={{ left: '3%', top: '19%', width: '44%', height: '77%' }}
      />
      <Piece show={step >= 1} colored={color} quiet="var(--frame)" ink="var(--text)" style={{ left: '51%', top: '19%', width: '46%', height: '16%' }} />
      {[0, 1, 2].map((swatch) => (
        <Piece
          key={swatch}
          show={step >= 3}
          colored={color}
          quiet="var(--bg)"
          ink={['var(--mint)', 'var(--text)', 'var(--hover)'][swatch]}
          style={{ left: `${51 + swatch * 16}%`, top: '42%', width: '12%', height: '14%' }}
        />
      ))}
      <Piece
        show={step >= 1}
        colored={color}
        quiet="var(--frame)"
        ink="var(--mint)"
        live={live && step >= 5}
        motionKind="scale"
        style={{ left: '51%', top: '64%', width: '46%', height: '18%', borderRadius: '0.7rem' }}
      />
    </>
  )
}

const views = [Painel, Landing, AppCard, Product]

export function FrontendIllu() {
  const { ref, play } = useIllustrationPlay<HTMLDivElement>()
  const [scene, setScene] = useState(0)
  const [step, setStep] = useState(6)

  useEffect(() => {
    if (!play) return
    let dead = false
    let timer = 0
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, ms)
      })

    const run = async () => {
      await sleep(900)
      while (!dead) {
        setStep(0)
        await sleep(420)
        if (dead) return
        for (let next = 1; next <= tools.length; next += 1) {
          setStep(next)
          await sleep(next === tools.length ? 1300 : 640)
          if (dead) return
        }
        setStep(0)
        await sleep(400)
        if (dead) return
        setScene((current) => (current + 1) % scenes.length)
        await sleep(180)
      }
    }

    void run()
    return () => {
      dead = true
      window.clearTimeout(timer)
    }
  }, [play])

  const View = views[scene]
  const current = scenes[scene]

  return (
    <div
      ref={ref}
      className="fe-stage"
      role="img"
      aria-label="Ferramentas de frontend acendem e montam interfaces diferentes."
      data-illu="frontend"
      data-scene={current.id}
      data-step={step}
      data-play={play ? 'on' : 'off'}
    >
      <ol className="fe-tools" aria-hidden="true">
        {tools.map((tool, index) => {
          const on = step === index + 1
          return (
            <li key={tool} className="fe-tool" data-on={on ? 'true' : 'false'}>
              <motion.span
                className="fe-tool-bg"
                initial={false}
                animate={{ opacity: on ? 1 : 0 }}
                transition={fade}
              />
              <span className="fe-tool-name">{tool}</span>
              <motion.span
                className="fe-tool-name fe-tool-name-on"
                initial={false}
                animate={{ opacity: on ? 1 : 0 }}
                transition={fade}
              >
                {tool}
              </motion.span>
            </li>
          )
        })}
      </ol>
      <div className="fe-canvas" aria-hidden="true">
        <div className="fe-chrome">
          <span className="fe-dots">
            <span />
            <span />
            <span />
          </span>
          <span className="fe-url">{current.url}</span>
        </div>
        <div className="fe-screen">
          <View step={step} live={play} />
        </div>
      </div>
    </div>
  )
}
