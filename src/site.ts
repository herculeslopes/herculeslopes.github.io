/**
 * Site-wide facts and the future custom domain.
 * Change `url` when herculeslopes.com replaces GitHub Pages.
 * Page copy is provisional — it only restates the CV, and it is marked as such.
 */
export const site = {
  name: 'Hércules Lopes',
  role: 'Desenvolvedor full-stack',
  locale: 'pt-BR',
  email: 'contato@herculeslopes.com',
  location: 'Rio de Janeiro, RJ',
  url: 'https://herculeslopes.github.io',
  futureUrl: 'https://herculeslopes.com',
  github: 'https://github.com/herculeslopes',
  linkedin: 'https://www.linkedin.com/in/herculeslopes',
} as const

export const nav = [
  { id: 'topo', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'trabalho', label: 'Trabalho' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
] as const
