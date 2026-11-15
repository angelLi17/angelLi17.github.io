import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { formatDate } from '../lib/formatDate'
import styles from './Layout.module.css'

/** Date of the latest git commit ("YYYY-MM-DD"), set by the dev/build scripts in package.json. */
const lastEditedRaw: string | undefined = import.meta.env.VITE_LAST_EDITED
const lastEdited = lastEditedRaw?.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  ? new Date(+lastEditedRaw.slice(0, 4), +lastEditedRaw.slice(5, 7) - 1, +lastEditedRaw.slice(8, 10))
  : undefined

const links = [
  { to: '/portfolio', text: 'Portfolio' },
  { to: '/blog', text: 'Blog' },
]

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={`wrapper ${styles.headerInner}`}>
          <Link to="/" className={styles.title}>
            angel li
          </Link>
          <nav className={styles.nav}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className={`wrapper ${styles.content}`}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={`wrapper ${styles.footerInner}`}>
          <div>
            <p className={styles.footerName}>angel li</p>
            {lastEdited && <p className={styles.lastEdited}>Last edited {formatDate(lastEdited)}</p>}
          </div>
          <p className={styles.footerRight}>
            EECS @ UC Berkeley. Computer vision, teaching, and things I'm building.
          </p>
        </div>
      </footer>
    </div>
  )
}
