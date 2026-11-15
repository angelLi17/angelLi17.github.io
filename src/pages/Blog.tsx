import PostList from '../components/PostList'
import { posts } from '../lib/posts'

export default function Blog() {
  return (
    <>
      <h1 className="page-heading">Blog</h1>
      <PostList posts={posts} />
    </>
  )
}
