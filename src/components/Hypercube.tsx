import { useEffect, useRef } from 'react'
import styles from './Hypercube.module.css'

type Vec4 = [number, number, number, number]

// 16 vertices of a tesseract: every combination of ±1 in four dimensions.
const VERTICES: Vec4[] = Array.from({ length: 16 }, (_, i) => [
  i & 1 ? 1 : -1,
  i & 2 ? 1 : -1,
  i & 4 ? 1 : -1,
  i & 8 ? 1 : -1,
])

// 32 edges: vertex pairs that differ in exactly one coordinate (one bit).
const EDGES: [number, number][] = []
for (let a = 0; a < 16; a++) {
  for (let bit = 1; bit < 16; bit <<= 1) {
    const b = a ^ bit
    if (a < b) EDGES.push([a, b])
  }
}

/** Rotate coordinates i and j of v by angle t. */
function rotate(v: Vec4, i: number, j: number, t: number) {
  const c = Math.cos(t)
  const s = Math.sin(t)
  const vi = v[i]
  const vj = v[j]
  v[i] = vi * c - vj * s
  v[j] = vi * s + vj * c
}

export default function Hypercube() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let size = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      size = canvas.clientWidth
      canvas.width = Math.round(size * dpr)
      canvas.height = Math.round(size * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (time: number) => {
      const t = time / 1000
      const color = getComputedStyle(canvas).color
      const scale = size * 0.18 // keeps every vertex inside the canvas (max extent ≈ 2.5)

      // Spin in two 4D planes (the "inside-out" motion), plus a slow 3D tumble.
      const points = VERTICES.map((vertex) => {
        const v = [...vertex] as Vec4
        rotate(v, 0, 3, t * 0.35) // XW
        rotate(v, 1, 2, t * 0.18) // YZ
        rotate(v, 2, 3, t * 0.22) // ZW
        rotate(v, 0, 2, 0.6) // fixed tilt so it never looks flat

        // 4D → 3D, then 3D → 2D perspective.
        const k4 = 4 / (4 - v[3])
        const x = v[0] * k4
        const y = v[1] * k4
        const z = v[2] * k4
        const k3 = 6 / (6 - z)
        return { x: size / 2 + x * k3 * scale, y: size / 2 + y * k3 * scale, depth: z + v[3] }
      })

      ctx.clearRect(0, 0, size, size)
      ctx.strokeStyle = color
      ctx.fillStyle = color
      ctx.lineWidth = 1

      // Edges further away are drawn lighter, which reads as depth.
      for (const [a, b] of EDGES) {
        const p = points[a]
        const q = points[b]
        ctx.globalAlpha = 0.35 + 0.6 * Math.min(1, Math.max(0, ((p.depth + q.depth) / 2 + 3) / 6))
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(q.x, q.y)
        ctx.stroke()
      }

      ctx.globalAlpha = 0.9
      for (const p of points) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const loop = (time: number) => {
      draw(time)
      frame = requestAnimationFrame(loop)
    }

    const start = () => {
      cancelAnimationFrame(frame)
      resize()
      if (reduceMotion.matches) draw(4000)
      else frame = requestAnimationFrame(loop)
    }

    const observer = new ResizeObserver(() => {
      resize()
      if (reduceMotion.matches) draw(4000)
    })
    observer.observe(canvas)
    reduceMotion.addEventListener('change', start)
    start()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      reduceMotion.removeEventListener('change', start)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} aria-label="A rotating wireframe hypercube" role="img" />
}
