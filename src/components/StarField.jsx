import { useEffect, useRef } from 'react'

export default function StarField({ count = 180 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animFrameId
    let width, height
    let stars = []

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      initStars()
    }

    function initStars() {
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.2,
        opacity: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.08 + 0.02,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.12,
      }))
    }

    let tick = 0
    function draw() {
      ctx.clearRect(0, 0, width, height)
      tick += 0.016

      stars.forEach((s) => {
        const twinkle = Math.sin(tick * s.twinkleSpeed * 60 + s.twinkleOffset) * 0.35 + 0.65
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.gold
          ? `rgba(201, 162, 39, ${s.opacity * twinkle})`
          : `rgba(255, 255, 255, ${s.opacity * twinkle})`
        ctx.fill()

        // Slow drift downward
        s.y += s.speed
        if (s.y > height) {
          s.y = 0
          s.x = Math.random() * width
        }
      })

      animFrameId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animFrameId)
      ro.disconnect()
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  )
}
