import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <h1 className="page-heading">404</h1>
      <p>
        Page not found. <Link to="/">Head back home?</Link>
      </p>
    </>
  )
}
