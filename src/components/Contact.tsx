import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { contact } from '../data/content'
import './styles/Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__box">
        <span className="section-index">Contact</span>
        <h2>Let's build something.</h2>
        <p>
          Open to internships, collaborations, and interesting problems in AI/ML
          and software development. The best way to reach me is email.
        </p>

        <a className="contact__email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>

        <div className="contact__links">
          <a href={contact.github} target="_blank" rel="noreferrer">
            <FiGithub /> GitHub <FiArrowUpRight className="contact__links-arrow" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn <FiArrowUpRight className="contact__links-arrow" />
          </a>
          <a href={`mailto:${contact.email}`}>
            <FiMail /> Email <FiArrowUpRight className="contact__links-arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
