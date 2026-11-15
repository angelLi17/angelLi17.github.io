import Markdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import { formatDate } from '../lib/formatDate'
import { getPost } from '../lib/posts'
import { withBase } from '../lib/withBase'
import NotFound from './NotFound'
import styles from './Page.module.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined

  if (!post) return <NotFound />

  return (
    <article>
      <header className={styles.postHeader}>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className="meta">
          <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time>
          {post.edited && (
            <>
              {' · edited '}
              <time dateTime={post.edited.toISOString()}>{formatDate(post.edited)}</time>
            </>
          )}
        </p>
      </header>
      <div className={styles.prose}>
        <Markdown
          components={{
            img: ({ src, alt }) => <img src={src ? withBase(src) : src} alt={alt ?? ''} />,
            a: ({ href, children }) =>
              href?.startsWith('http') ? (
                <a href={href} target="_blank" rel="noreferrer">
                  {children}
                </a>
              ) : (
                <a href={href ? withBase(href) : href}>{children}</a>
              ),
          }}
        >
          {post.body}
        </Markdown>
      </div>
      <Link to="/blog" className={styles.back}>
        ← All posts
      </Link>
    </article>
  )
}
