import { Link } from 'react-router-dom'
import Hypercube from '../components/Hypercube'
import styles from './Page.module.css'

export default function Home() {
  return (
    <>
      <Hypercube />
      <p className={styles.intro}>
        Hi, I'm Angel, an EECS student at UC Berkeley working on computer vision. Read more{' '}
        <Link to="/about">about me</Link> or see what I've been <Link to="/portfolio">building</Link>.
      </p>
    </>
  )
}
