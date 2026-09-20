import { timeline, certifications } from '../data/content'
import './styles/Education.css'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-head">
        <span className="section-index">Education</span>
        <h2>Education &amp; certifications.</h2>
      </div>

      <ol className="timeline">
        {timeline.map((item) => (
          <li className="timeline__item" key={item.title}>
            <div className="timeline__marker" />
            <div className="timeline__content">
              <span className="timeline__period">{item.period}</span>
              <h3>{item.title}</h3>
              {item.place && <p className="timeline__place">{item.place}</p>}
              {item.points.length > 0 && (
                <ul className="timeline__points">
                  {item.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      {certifications.length > 0 && (
        <div className="certifications">
          {certifications.map((c) => (
            <div className="certification" key={c.name}>
              <span className="certification__dot" />
              <div>
                <h4>{c.name}</h4>
                {c.issuer && <p>{c.issuer}{c.year ? ` · ${c.year}` : ''}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
