import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/content'
import './styles/Projects.css'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section projects">
      <div className="section-head">
        <span className="section-index">Projects</span>
        <h2>Things I've built.</h2>
      </div>

      {featured.length > 0 && (
        <div className="projects__featured">
          {featured.map((project) => (
            <article className="project-card project-card--featured" key={project.name}>
              <div className="project-card__body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="project-card__links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="View source on GitHub">
                    <FiGithub /> Source
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="View live project">
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {other.length > 0 && (
        <div className="projects__other">
          <h3 className="projects__other-title">Other Projects</h3>
          <div className="projects__other-grid">
            {other.map((project) => (
              <article className="project-row" key={project.name}>
                <div>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <div className="project-card__tech">
                    {project.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="project-card__links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="View source on GitHub">
                      <FiGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="View live project">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
