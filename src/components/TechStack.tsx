import { skillGroups } from '../data/content'
import './styles/TechStack.css'

export default function TechStack() {
  return (
    <section id="skills" className="section techstack">
      <div className="section-head">
        <span className="section-index">Skills</span>
        <h2>What I build with.</h2>
      </div>

      <div className="techstack__grid">
        {skillGroups.map((group) => (
          <div className="techstack__group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="techstack__pills">
              {group.skills.map((skill) => (
                <span className="techstack__pill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
