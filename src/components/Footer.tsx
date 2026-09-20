import { profile } from '../data/content'
import './styles/Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>{profile.name} · {year}</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
