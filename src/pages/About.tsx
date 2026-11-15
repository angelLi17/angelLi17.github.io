import styles from './Page.module.css'

export default function About() {
  return (
    <article>
      <h1 className="page-heading">About</h1>
      <div className={styles.prose}>
        <p>
          I'm a student at UC Berkeley studying Electrical Engineering and Computer Science. Most
          of my work lives where computer vision meets the real world: I do research on grape
          disease detection at Santa Clara University's EPIC Lab, and I'm currently building an OCR
          workflow to translate Assyrian cuneiform. I also like to teach, so on campus I'm a
          teaching intern for CS61A, lecture for CubStart iOS, and help organize Cal Hacks with
          Hackathons at Berkeley.
        </p>
        {/* <p>Things I care about:</p>
        <ul>
          <li>computer vision for women's health radiology</li>
          <li>genetic applications for plant efficiency against climate change</li>
        </ul>
        <p>
          Off the clock: library-hopping around Berkeley, sudoku, graphic design, grocery shopping
          and rollerblading. I speak English and Mandarin.
        </p> */}
        <p>
          Say hi: <a href="mailto:angel_li@berkeley.edu">angel_li@berkeley.edu</a>
          {' · '}
          <a href="https://www.linkedin.com/in/angel-li-yi17/" target="_blank" rel="noreferrer">
            linkedin
          </a>
          {' · '}
          <a href="https://github.com/angelLi17" target="_blank" rel="noreferrer">
            github
          </a>
        </p>
      </div>
    </article>
  )
}
