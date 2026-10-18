import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useIllustrationPlay } from './use-illustration-play'
import {
  MotionMark,
  NextMark,
  QueryMark,
  ReactMark,
  TailwindMark,
  TypeScriptMark,
} from './brand-marks'

const tools = [
  { name: 'React', Mark: ReactMark },
  { name: 'Next.js', Mark: NextMark },
  { name: 'TanStack Query', Mark: QueryMark },
  { name: 'Tailwind', Mark: TailwindMark },
  { name: 'Motion', Mark: MotionMark },
  { name: 'TypeScript', Mark: TypeScriptMark },
] as const

const scenes = [
  {
    id: 'painel',
    url: 'painel',
    title: 'Painel de operações',
    host: 'painel.exemplo',
    snippet: 'Totais, série e lista no mesmo lugar, fáceis de encontrar.',
  },
  {
    id: 'inicio',
    url: 'inicio',
    title: 'Página de início',
    host: 'inicio.exemplo',
    snippet: 'Uma página direta, publicada e pronta para a busca.',
  },
] as const

const ease = [0.22, 1, 0.36, 1] as const
const enter = { duration: 0.55, ease }

const bars = [
  [0.34, 0.78, 0.56],
  [0.52, 0.96, 0.7],
  [0.28, 0.68, 0.46],
  [0.44, 0.88, 0.62],
] as const

function ToolList({ step }: { step: number }) {
  return (
    <ol className="fe-tools" aria-hidden="true">
      {tools.map((tool, index) => {
        const on = step === index + 1
        const Icon = tool.Mark
        return (
          <li key={tool.name} className="fe-tool" data-on={on ? 'true' : 'false'}>
            <span className="fe-tool-bg" />
            <span className="fe-tool-row">
              <Icon className="fe-ico" />
              <span>{tool.name}</span>
            </span>
          </li>
        )
      })}
    </ol>
  )
}

function Structure({ step }: { step: number }) {
  const show = step === 1
  return (
    <motion.div
      className="if-layer"
      initial={false}
      animate={{ opacity: show ? 1 : 0 }}
      transition={enter}
    >
      <span className="if-block" style={{ left: '6%', top: '8%', width: '88%', height: '14%' }} />
      <span className="if-block" style={{ left: '6%', top: '28%', width: '24%', height: '64%' }} />
      <span className="if-block" style={{ left: '34%', top: '28%', width: '60%', height: '28%' }} />
      <span className="if-block" style={{ left: '34%', top: '62%', width: '28%', height: '30%' }} />
      <span className="if-block" style={{ left: '66%', top: '62%', width: '28%', height: '30%' }} />
    </motion.div>
  )
}

function SearchResult({
  step,
  title,
  host,
  snippet,
}: {
  step: number
  title: string
  host: string
  snippet: string
}) {
  const show = step === 2
  return (
    <motion.div
      className="if-layer serp"
      initial={false}
      animate={{ opacity: show ? 1 : 0 }}
      transition={enter}
    >
      <div className="serp-field">
        <span className="serp-glass" />
        <span className="serp-query" />
      </div>
      <motion.article
        className="serp-hit"
        initial={false}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
        transition={{ duration: 0.7, ease, delay: show ? 0.12 : 0 }}
      >
        <div className="serp-copy">
          <p className="serp-title">{title}</p>
          <p className="serp-url">{host}</p>
          <p className="serp-snip">{snippet}</p>
        </div>
        <div className="serp-thumb" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </motion.article>
      <article className="serp-hit serp-quiet">
        <div className="serp-copy">
          <p className="serp-title">Notas soltas</p>
          <p className="serp-url">notas.exemplo</p>
          <p className="serp-snip">Um resultado comum, abaixo do primeiro.</p>
        </div>
      </article>
      <article className="serp-hit serp-quiet">
        <div className="serp-copy">
          <p className="serp-title">Arquivo antigo</p>
          <p className="serp-url">arquivo.exemplo</p>
          <p className="serp-snip">Outra página, mais abaixo na lista.</p>
        </div>
      </article>
    </motion.div>
  )
}

function QueryBoard({ step, live }: { step: number; live: boolean }) {
  const show = step >= 3
  const color = step >= 4
  const updating = step === 3 && live
  const named = step >= 6
  const moving = step >= 5 && live
  return (
    <motion.div
      className="if-layer query"
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: moving ? [0, -3, 0] : 0 }}
      transition={
        moving
          ? { opacity: enter, y: { duration: 1.8, ease: 'easeInOut', repeat: Infinity } }
          : enter
      }
    >
      <div className="q-card">
        <motion.span
          className="q-fill"
          initial={false}
          animate={{ opacity: color ? 1 : 0 }}
          transition={enter}
        />
        <motion.span
          className="q-label"
          initial={false}
          animate={{ opacity: named ? 1 : 0 }}
          transition={enter}
        >
          Total
        </motion.span>
        <span className="q-num">
          <motion.span
            initial={false}
            animate={{ opacity: updating ? [1, 0] : show ? 0 : 1 }}
            transition={updating ? { duration: 1.15, ease } : enter}
          >
            128
          </motion.span>
          <motion.span
            initial={false}
            animate={{ opacity: updating ? [0, 1] : show ? 1 : 0 }}
            transition={updating ? { duration: 1.15, ease } : enter}
          >
            136
          </motion.span>
        </span>
        <Pulse on={updating} />
      </div>
      <div className="q-card q-chart">
        <motion.span
          className="q-fill"
          initial={false}
          animate={{ opacity: color ? 1 : 0 }}
          transition={enter}
        />
        <motion.span
          className="q-label"
          initial={false}
          animate={{ opacity: named ? 1 : 0 }}
          transition={enter}
        >
          Série
        </motion.span>
        <div className="q-bars">
          {bars.map((keys, index) => (
            <motion.span
              key={index}
              className="q-bar"
              style={{ transformOrigin: 'center bottom' }}
              initial={false}
              animate={{ scaleY: updating ? [...keys] : show ? keys[2] : keys[0] }}
              transition={updating ? { duration: 1.15, ease } : enter}
            />
          ))}
        </div>
        <Pulse on={updating} />
      </div>
      <div className="q-card q-list">
        <motion.span
          className="q-fill"
          initial={false}
          animate={{ opacity: color ? 1 : 0 }}
          transition={enter}
        />
        <motion.span
          className="q-label"
          initial={false}
          animate={{ opacity: named ? 1 : 0 }}
          transition={enter}
        >
          Lista
        </motion.span>
        {[0, 1, 2].map((row) => (
          <span key={row} className="q-row" style={{ top: `${38 + row * 18}%` }}>
            <motion.i
              initial={false}
              animate={{ scale: updating ? [1, 1.18, 1] : 1 }}
              transition={updating ? { duration: 1.15, ease } : enter}
            />
            <span />
          </span>
        ))}
        <Pulse on={updating} />
      </div>
    </motion.div>
  )
}

function Pulse({ on }: { on: boolean }) {
  return (
    <motion.span
      className="q-pulse"
      initial={false}
      animate={{ opacity: on ? [0, 0.42, 0] : 0 }}
      transition={on ? { duration: 1.15, ease: 'easeInOut' } : { duration: 0.3 }}
    />
  )
}

export function InterfacesIllu() {
  const { ref, play } = useIllustrationPlay<HTMLDivElement>()
  const [scene, setScene] = useState(0)
  const [step, setStep] = useState(6)
  const current = scenes[scene]

  useEffect(() => {
    if (!play) return
    let dead = false
    let timer = 0
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, ms)
      })

    const run = async () => {
      await sleep(1500)
      while (!dead) {
        setStep(0)
        await sleep(560)
        if (dead) return
        const holds = [0, 1250, 2100, 2300, 1250, 1500, 1900]
        for (let next = 1; next <= tools.length; next += 1) {
          setStep(next)
          await sleep(holds[next] ?? 1400)
          if (dead) return
        }
        setStep(0)
        await sleep(560)
        if (dead) return
        setScene((value) => (value + 1) % scenes.length)
        await sleep(320)
      }
    }

    void run()
    return () => {
      dead = true
      window.clearTimeout(timer)
    }
  }, [play])

  return (
    <div
      ref={ref}
      className="fe-stage"
      role="img"
      aria-label="React, Next.js e as outras ferramentas montam a interface. A página aparece no topo da busca e os dados atualizam juntos."
      data-illu="frontend"
      data-scene={current.id}
      data-step={step}
      data-play={play ? 'on' : 'off'}
    >
      <ToolList step={step} />
      <div className="fe-canvas" aria-hidden="true">
        <div className="fe-chrome">
          <span className="fe-dots">
            <span />
            <span />
            <span />
          </span>
          <span className="fe-url">{step === 2 ? 'busca' : current.url}</span>
        </div>
        <div className="fe-screen">
          <Structure step={step} />
          <SearchResult
            step={step}
            title={current.title}
            host={current.host}
            snippet={current.snippet}
          />
          <QueryBoard step={step} live={play} />
        </div>
      </div>
    </div>
  )
}
