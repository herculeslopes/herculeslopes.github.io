import { createFileRoute } from '@tanstack/react-router'
import { motion, useReducedMotion } from 'motion/react'
import { site } from '../site'
import { Reveal } from '../components/reveal'

export const Route = createFileRoute('/')({
  component: Home,
})

const offers = [
  {
    title: 'Sites',
    text: 'Páginas para apresentar um trabalho com clareza.',
  },
  {
    title: 'Soluções',
    text: 'Sistemas que tiram um processo do papel.',
  },
  {
    title: 'Ciclo completo',
    text: 'Interface, regras e dados no mesmo projeto.',
  },
]

const projects = [
  {
    name: 'SISMOB',
    meta: 'PortosRio · 2022',
    text: 'Aplicação web em Django e React para a catalogação de imóveis da autoridade portuária.',
    tags: ['Django', 'React'],
    placeholder: false,
  },
  {
    name: 'Próximo projeto',
    meta: 'Reservado',
    text: 'Espaço reservado. O próximo projeto ainda não está definido.',
    tags: [],
    placeholder: true,
  },
]

function ProjectCard({
  project,
  reduce,
}: {
  project: (typeof projects)[number]
  reduce: boolean | null
}) {
  return (
    <motion.article
      className={project.placeholder ? 'card card-empty' : 'card'}
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      <p className="meta">{project.meta}</p>
      <h3>{project.name}</h3>
      <p>{project.text}</p>
      {project.placeholder ? <p className="note">Texto provisório</p> : null}
      {project.tags.length > 0 ? (
        <ul className="tags">
          {project.tags.map((tag) => (
            <li className="tag" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  )
}

function Home() {
  const reduce = useReducedMotion()

  return (
    <>
      <main id="conteudo">
        <section className="hero" id="topo" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div>
              <p className="kicker">Texto provisório</p>
              <motion.h1
                id="hero-title"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0 : 0.35, ease: 'easeOut' }}
              >
                <span className="line">Hércules</span>
                <span className="line mark-word">Lopes</span>
              </motion.h1>
              <p className="role">{site.role}</p>
              <p className="lede">Sites e sistemas, do começo ao fim.</p>
              <p className="hero-meta">
                <span>{site.location}</span>
              </p>
            </div>
            <div
              className="photo"
              role="img"
              aria-label="Espaço reservado para a foto de Hércules Lopes"
            >
              <span className="photo-kicker">Foto</span>
              <span className="photo-note">Espaço reservado</span>
            </div>
          </div>
        </section>

        <section className="section" id="sobre" aria-labelledby="sobre-title">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <span className="index" aria-hidden="true">
                  01
                </span>
                <h2 id="sobre-title">Sobre</h2>
              </div>
              <div className="prose">
                <p>
                  Sou desenvolvedor full-stack e atuo em todo o ciclo de vida do
                  software. Já trabalhei em equipe, com metodologias ágeis e Git.
                </p>
                <p className="note">Texto provisório, a partir do currículo.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="trabalho" aria-labelledby="trabalho-title">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <span className="index" aria-hidden="true">
                  02
                </span>
                <h2 id="trabalho-title">O que eu construo</h2>
              </div>
              <div className="prose">
                <p>Sites e soluções, do início ao fim — não uma lista de cursos.</p>
                <p className="note">Posicionamento provisório.</p>
              </div>
              <ul className="work-list">
                {offers.map((offer) => (
                  <li className="work-item" key={offer.title}>
                    <h3>{offer.title}</h3>
                    <p>{offer.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section" id="projetos" aria-labelledby="projetos-title">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <span className="index" aria-hidden="true">
                  03
                </span>
                <h2 id="projetos-title">Projetos</h2>
              </div>
              <ul className="project-grid">
                {projects.map((project) => (
                  <li key={project.name}>
                    <ProjectCard project={project} reduce={reduce} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section" id="contato" aria-labelledby="contato-title">
          <div className="wrap">
            <Reveal>
              <div className="section-head">
                <span className="index" aria-hidden="true">
                  04
                </span>
                <h2 id="contato-title">Contato</h2>
              </div>
              <div className="contact-block">
                <p>Para um projeto ou uma conversa.</p>
                <a className="email" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <div className="socials">
                  <a href={site.github} target="_blank" rel="noreferrer noopener">
                    GitHub
                    <span className="sr-only"> (abre em uma nova aba)</span>
                  </a>
                  <a href={site.linkedin} target="_blank" rel="noreferrer noopener">
                    LinkedIn
                    <span className="sr-only"> (abre em uma nova aba)</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <p>Hércules Lopes · texto provisório</p>
        </div>
      </footer>
    </>
  )
}
