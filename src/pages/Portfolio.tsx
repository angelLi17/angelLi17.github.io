import { projects } from '../content/projects'
import styles from './Page.module.css'

export default function Portfolio() {
  return (
    <>
      <h1 className="page-heading">Portfolio</h1>
      <ul className={styles.projects}>
        {projects.map((project) => (
          <li key={project.id}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectSummary}>{project.description.join(' ')}</p>
            {project.links && (
              <p className={styles.projectSummary}>
                {project.links.map((link, i) => (
                  <span key={link.href}>
                    {i > 0 && ' · '}
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label} ↗
                    </a>
                  </span>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
