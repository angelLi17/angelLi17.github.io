import type { Post } from '../types'

const files = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(FRONTMATTER)
  if (!match) return { data: {}, body: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i === -1) continue
    const key = line.slice(0, i).trim()
    const value = line.slice(i + 1).trim().replace(/^(['"])(.*)\1$/, '$2')
    data[key] = value
  }
  return { data, body: match[2].trim() }
}

/**
 * Parse a leading "YYYY-MM-DD" as a local date so it never shifts a day in US timezones.
 * Anything after the date is ignored; an unreadable value gives undefined instead of an Invalid Date.
 */
function parseDate(value: string | undefined): Date | undefined {
  const match = value?.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (!match) return undefined
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
}

function toPost(path: string, raw: string): Post {
  const filename = path.split('/').pop()!.replace(/\.md$/, '')
  const datePrefix = filename.match(/^\d{4}-\d{2}-\d{2}/)?.[0]
  const { data, body } = parseFrontmatter(raw)
  return {
    slug: filename.replace(/^\d{4}-\d{2}-\d{2}-/, ''),
    title: data.title ?? filename,
    date: parseDate(data.date) ?? parseDate(datePrefix) ?? new Date(1970, 0, 1),
    edited: parseDate(data.edited),
    summary: data.summary ?? '',
    draft: data.draft === 'true',
    body,
  }
}

// Files starting with "_" (like _template.md) are ignored.
// Drafts show up while running `npm run dev` but never in the deployed site.
export const posts: Post[] = Object.entries(files)
  .filter(([path]) => !path.split('/').pop()!.startsWith('_'))
  .map(([path, raw]) => toPost(path, raw))
  .filter((post) => import.meta.env.DEV || !post.draft)
  .sort((a, b) => b.date.getTime() - a.date.getTime())

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
