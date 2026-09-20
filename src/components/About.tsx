import { useEffect, useState } from 'react'
import { about } from '../data/content'
import { useInView } from '../hooks/useInView'
import './styles/About.css'

function Stat({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const numeric = parseFloat(value)
    if (Number.isNaN(numeric)) {
      setDisplay(value)
      return
    }
    const suffix = value.replace(/[0-9.]/g, '')
    const duration = 900
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      const current = (numeric * eased).toFixed(value.includes('.') ? 2 : 0)
      setDisplay(current + suffix)
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <div className="about__stat" ref={ref}>
      <span className="about__stat-value">{display}</span>
      <span className="about__stat-label">{label}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <span className="section-index">About</span>
        <h2>Software built with intent, grounded in AI &amp; ML.</h2>
      </div>

      <div className="about__grid">
        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="about__stats">
          {about.stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
