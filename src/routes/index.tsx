import { createFileRoute } from '@tanstack/react-router'
import { site } from '../site'
import { Reveal } from '../components/reveal'
import { ThemeToggle } from '../components/theme-provider'
import { FrontendIllu } from '../components/frontend-illu'
import { FlowIllu } from '../components/flow-illu'
import { DatabaseIllu } from '../components/database-illu'

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

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="card">
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
    </article>
  )
}

function Portrait() {
  return (
    <div className="portrait-slot">
      <div className="portrait-offset" aria-hidden="true" />
      <div className="portrait">
        <svg
          className="portrait-svg"
          viewBox="0 0 280 360"
          role="img"
          aria-label="Ilustração provisória no lugar da foto"
        >
          <rect className="mint-fill" width="14" height="360" />
          <circle cx="162" cy="124" r="48" fill="currentColor" />
          <path d="M68 360h176l-36-132H104L68 360z" fill="currentColor" />
        </svg>
        <span className="portrait-cover" aria-hidden="true" />
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <main id="conteudo">
        <section className="hero" id="topo" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title" className="hero-enter">
                <span className="name">{site.name}</span>
                <span className="role">
                  Desenvolvedor{' '}
                  <span className="mark-word">
                    <span className="mark-text">full stack</span>
                    <span className="mark-sweep" aria-hidden="true">
                      full stack
                    </span>
                  </span>
                </span>
              </h1>
              <p className="lede hero-enter">Sites e sistemas, do começo ao fim.</p>
              <p className="hero-meta hero-enter">
                <span>{site.location}</span>
              </p>
            </div>
            <Portrait />
          </div>
        </section>

        <section className="section" id="sobre" aria-labelledby="sobre-title">
          <div className="wrap">
            <Reveal>
              <h2 id="sobre-title">Sobre</h2>
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
              <h2 id="trabalho-title">O que eu construo</h2>
              <div className="prose">
                <p>Sites e soluções, do início ao fim — não uma lista de cursos.</p>
                <p className="stack">
                  Next.js · n8n · Supabase · React · TypeScript · PostgreSQL · Docker
                </p>
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

        <section className="section" id="frontend" aria-labelledby="frontend-title">
          <div className="wrap">
            <Reveal>
              <h2 id="frontend-title">Frontend</h2>
              <div className="prose section-lead">
                <p>A interface ganha forma uma camada de cada vez.</p>
                <p className="note">Ilustração provisória.</p>
              </div>
              <FrontendIllu />
            </Reveal>
          </div>
        </section>

        <section className="section" id="automacoes" aria-labelledby="automacoes-title">
          <div className="wrap">
            <Reveal>
              <h2 id="automacoes-title">Automações</h2>
              <div className="prose section-lead">
                <p>Um gatilho entra, o n8n encaminha, e cada sistema do outro lado recebe a sua parte.</p>
                <p className="note">Ilustração provisória.</p>
              </div>
              <FlowIllu />
            </Reveal>
          </div>
        </section>

        <section className="section" id="dados" aria-labelledby="dados-title">
          <div className="wrap">
            <Reveal>
              <h2 id="dados-title">Banco de dados</h2>
              <div className="prose section-lead">
                <p>No Supabase, o evento vira uma linha no topo. A tabela mostra só o que cabe.</p>
                <p className="note">Ilustração provisória.</p>
              </div>
              <DatabaseIllu />
            </Reveal>
          </div>
        </section>

        <section className="section" id="projetos" aria-labelledby="projetos-title">
          <div className="wrap">
            <Reveal>
              <h2 id="projetos-title">Projetos</h2>
              <ul className="project-grid">
                {projects.map((project) => (
                  <li key={project.name}>
                    <ProjectCard project={project} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section" id="contato" aria-labelledby="contato-title">
          <div className="wrap">
            <Reveal>
              <h2 id="contato-title">Contato</h2>
              <div className="contact-block">
                <p>Para um projeto ou uma conversa.</p>
                <a className="email" href={`mailto:${site.email}`}>
                  {site.email.split('@')[0]}@<wbr />
                  {site.email.split('@')[1]}
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
        <div className="wrap footer-bar">
          <p>Hércules Lopes · texto provisório</p>
          <ThemeToggle />
        </div>
      </footer>
    </>
  )
}
