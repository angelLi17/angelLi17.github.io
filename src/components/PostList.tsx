import { Link } from 'react-router-dom'
import { formatDate } from '../lib/formatDate'
import type { Post } from '../types'
import styles from './PostList.module.css'

export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return <p className="hint">Nothing here yet, check back soon.</p>

  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <time className="meta" dateTime={post.date.toISOString()}>
            {formatDate(post.date)}
          </time>
          {post.draft && <span className={styles.draft}>draft</span>}
          <h3 className={styles.title}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          {post.summary && <p className={styles.summary}>{post.summary}</p>}
        </li>
      ))}
    </ul>
  )
}
