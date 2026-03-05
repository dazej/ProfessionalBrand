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
  },
  {
    school: 'University of North Florida',
    degree: 'Bachelor of Arts',
    field: 'International Studies',
    concentration: null,
    status: 'Completed',
    dates: '2023',
    color: '#f2b5c0',
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
