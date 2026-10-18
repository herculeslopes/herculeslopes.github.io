import { motion } from 'motion/react'
import { useIllustrationPlay } from './use-illustration-play'

const nodes = [
  { name: 'Webhook', col: 1, row: 1, mint: true },
  { name: 'n8n', col: 2, row: 1, mint: false },
  { name: 'CRM', col: 3, row: 1, mint: false },
  { name: 'E-mail', col: 1, row: 2, mint: false },
  { name: 'Banco', col: 2, row: 2, mint: false },
  { name: 'Chat', col: 3, row: 2, mint: false },
] as const

const tracks = [
  { axis: 'x' as const, top: 50, left: '26%', width: '13%', height: 8 },
  { axis: 'x' as const, top: 50, left: '61%', width: '13%', height: 8 },
  { axis: 'y' as const, top: 80, left: 'calc(50% - 4px)', width: 8, height: 96 },
  { axis: 'x' as const, top: 198, left: '26%', width: '13%', height: 8 },
  { axis: 'x' as const, top: 198, left: '61%', width: '13%', height: 8 },
]

function Stream({
  play,
  axis,
  delay,
  rest,
}: {
  play: boolean
  axis: 'x' | 'y'
  delay: number
  rest: string
}) {
  const running =
    axis === 'x'
      ? { x: ['-100%', '0%'], opacity: [0, 1, 1, 0] }
      : { y: ['-100%', '0%'], opacity: [0, 1, 1, 0] }
  const still =
    axis === 'x' ? { x: rest, opacity: 1 } : { y: rest, opacity: 1 }

  return (
    <motion.span
      className="flow-runner"
      initial={false}
      animate={play ? running : still}
      transition={
        play
          ? {
              duration: 2.6,
              delay,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.14, 0.8, 1],
            }
          : { duration: 0 }
      }
    >
      <span className="flow-dot" />
    </motion.span>
  )
}

export function FlowIllu() {
  const { ref, play } = useIllustrationPlay<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="flow-stage"
      role="img"
      aria-label="Fluxo n8n: um webhook passa pelo n8n e segue para CRM, e-mail, banco e chat."
      data-illu="flow"
      data-play={play ? 'on' : 'off'}
    >
      <div aria-hidden="true">
        {tracks.map((track, index) => (
          <div
            key={`${track.axis}-${index}`}
            className="flow-track"
            data-axis={track.axis}
            style={{
              top: track.top,
              left: track.left,
              width: track.width,
              height: track.height,
            }}
          >
            <span className="flow-bar" />
            <Stream play={play} axis={track.axis} delay={index * 0.2} rest="-68%" />
            <Stream play={play} axis={track.axis} delay={index * 0.2 + 0.92} rest="-34%" />
          </div>
        ))}
        {nodes.map((node) => (
          <div
            key={node.name}
            className="flow-node"
            data-col={node.col}
            data-row={node.row}
            data-mint={node.mint ? 'true' : 'false'}
          >
            {node.name}
          </div>
        ))}
      </div>
    </div>
  )
}
