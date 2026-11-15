export interface Post {
  slug: string
  title: string
  date: Date
  /** Optional "edited: YYYY-MM-DD" frontmatter. */
  edited?: Date
  summary: string
  draft: boolean
  body: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  role: string
  dates: string
  tags: string[]
  /** Sentences joined into one paragraph on the portfolio page. */
  description: string[]
  links?: ProjectLink[]
}
