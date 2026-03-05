import './Home.css'

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-greeting">&#9733; Hello, I&#39;m</p>
          <h1 className="hero-name">Jessica Adams</h1>
          <p className="hero-title">&#9654; Software Developer</p>
          <p className="hero-title">&#9654; IT Technician</p>
           <p className="hero-title">&#9654; AI/ML Engineer</p>
          <p className="hero-bio">
           Detail-oriented and adaptable professional with 3+ years in client service, 
           database management, administrative support, and software development. Proven ability to collaborate
           with internal teams, integrate systems accurately, and communicate effectively. 
           Committed to delivering outstanding service and motivated by opportunities to 
           transform lives through innovation and technology.
          </p>
        </div>

        <div className="hero-photos">
          <div className="photo-frame">
            <img src="/IMG_0710.jpeg" className="photo-img" alt="Jessica Adams" />
          </div>
          <div className="photo-frame">
            <img src="/IMG_4893.jpeg" className="photo-img" alt="Jessica Adams" />
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="skills-section">
        <h2 className="section-title">Skills</h2>

        <div className="skills-category">
          <p className="skills-category-label">Languages &amp; Frameworks</p>
          <div className="skills-grid">
            {['JavaScript', 'Python', 'SQL', 'React', 'Node.js', 'Express', 'Java', 'React Native'].map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <p className="skills-category-label">Databases &amp; Systems</p>
          <div className="skills-grid">
            {['Git', 'GitHub', 'VS Code', 'Postman', 'PostgreSQL', 'MacOS', 'Windows OS'].map((skill) => (
              <span key={skill} className="skill-badge badge-blue">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <p className="skills-category-label">Other</p>
          <div className="skills-grid">
            {[
              'REST APIs', 'JSON', 'HTML', 'CSS', 'Data Analysis', 'Database Design',
              'QA Testing', 'Report Automation', 'Enrollment Support',
              'Technical Troubleshooting', 'Tier 1 / Tier 2 Support',
              'End-User Support', 'System Diagnostics & Problem Resolution',
            ].map((skill) => (
              <span key={skill} className="skill-badge badge-green">{skill}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
