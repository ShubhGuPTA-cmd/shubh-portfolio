import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import HeroScene from './three/HeroScene'
import { profile } from '../data/content'
import './styles/Hero.css'

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero__status', { opacity: 0, y: 12, duration: 0.6 })
        .from('.hero__line', { opacity: 0, y: 28, duration: 0.8, stagger: 0.1 }, '-=0.25')
        .from('.hero__subline', { opacity: 0, y: 16, duration: 0.6 }, '-=0.35')
        .from('.hero__actions a', { opacity: 0, y: 14, duration: 0.5, stagger: 0.08 }, '-=0.3')
        .from('.hero__canvas', { opacity: 0, duration: 1.1 }, '-=0.9')
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero" ref={root}>
      <div className="hero__canvas"><HeroScene /></div>
      <div className="hero__scrim" />

      <div className="hero__content">
        <span className="hero__status">{profile.status}</span>

        <h1 className="hero__headline">
          <span className="hero__line">Hi, I'm {profile.name} —</span>
          <span className="hero__line hero__line--accent">{profile.tagline}</span>
        </h1>

        <p className="hero__subline">{profile.subline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--filled">View My Projects</a>
          <a href={profile.resumeUrl} className="btn btn--ghost" download>Download Resume</a>
          <a href="#contact" className="btn btn--text">Let's Connect</a>
        </div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
