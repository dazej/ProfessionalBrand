import { useState } from 'react'
import './Education.css'

const degrees = [
  {
    school: 'Florida State College at Jacksonville',
    degree: 'Bachelor of Applied Sciences',
    field: 'Information Systems Technology',
    concentration: 'Application Development',
    status: 'In Progress',
    dates: '— Expected Dec 2026',
    color: '#7ec8e3',
    achievements: [
      'National Society of Leadership and Success Member',
      'Academic Achievement Award',
    ],
  },
  {
    school: 'University of North Florida',
    degree: 'Bachelor of Arts',
    field: 'International Studies',
    concentration: null,
    status: 'Completed',
    dates: '2023',
    color: '#f2b5c0',
    achievements: [
      'Graduated Summa Cum Laude',
      "Dean's List",
    ],
  },
]

const certifications = [
  {
    name: 'CompTIA A+ Help Desk Support',
    issuer: 'CompTIA',
    year: 'Completed 2026',
    color: '#f4a261',
  },
  {
    name: 'Full Stack Web Development',
    issuer: 'Fullstack Academy',
    year: 'Completed 2024',
    color: '#b5d5a8',
  },
]

export default function Education() {
  const [openAchievements, setOpenAchievements] = useState({})

  const toggleAchievements = (school) =>
    setOpenAchievements(prev => ({ ...prev, [school]: !prev[school] }))

  return (
    <div className="education-page">

      {/* ── Degrees ── */}
      <section className="edu-section">
        <h2 className="section-title">Education</h2>
        <div className="edu-list">
          {degrees.map((item) => (
            <div key={item.school} className="edu-card pixel-card">
              <div className="edu-card-top" style={{ borderLeftColor: item.color }}>
                <div>
                  <h3 className="edu-school">{item.school}</h3>
                  <p className="edu-degree">{item.degree}</p>
                  <p className="edu-field">{item.field}</p>
                  {item.concentration && (
                    <p className="edu-concentration">
                      Concentration: {item.concentration}
                    </p>
                  )}
                </div>
                <div className="edu-right">
                  <span
                    className="edu-status"
                    style={{ background: item.color }}
                    data-status={item.status}
                  >
                    {item.status}
                  </span>
                  <span className="edu-dates">{item.dates}</span>
                </div>
              </div>

              {item.achievements && item.achievements.length > 0 && (
                <>
                  <button
                    className="edu-achievements-toggle pixel-btn"
                    onClick={() => toggleAchievements(item.school)}
                  >
                    {openAchievements[item.school] ? '▾' : '▸'} Achievements
                  </button>
                  {openAchievements[item.school] && (
                    <ul className="edu-achievements">
                      {item.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="edu-section">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-list">
          {certifications.map((cert) => (
            <div key={cert.name} className="cert-card pixel-card">
              <div className="cert-badge" style={{ background: cert.color }}>
                &#9733;
              </div>
              <div className="cert-info">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer} &mdash; {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
