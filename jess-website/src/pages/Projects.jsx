import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Vien Planner',
    description:
      'A planning application designed to help users organize and manage their schedules efficiently. Built with a focus on clean UX and practical daily-use features.',
    github: 'https://github.com/dazej/Planner',
    live: null,
    tags: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'OAuth', 'Unit Testing', 'QA Testing'],
    color: '#7ec8e3',
    highlights: [
      'Architected and developed a full-stack planning application using React.js, Node.js, and MongoDB Atlas, implementing OAuth authentication and a dynamic scheduling system.',
      'Implemented unit testing and QA reviews across all stages of the project, ensuring consistent bug identification and removal.',
    ],
  },
  {
    title: 'ODEV.v2',
    description:
      'A full-stack e-commerce platform with a complete product catalog, user authentication, and order management — rebuilt from the ground up with a redesigned architecture and expanded functionality.',
    github: 'https://github.com/dazej/ODEV.v2',
    live: null,
    tags: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'SQL', 'Unit Testing', 'QA Testing'],
    color: '#f2b5c0',
    highlights: [
      'Architected and developed a full-stack e-commerce platform using React.js, Node.js, and PostgreSQL, implementing user authentication and a complete product catalog.',
      'Led as co-scrum master, managing sprint planning, daily standups, and code reviews that resulted in on-time delivery of all project milestones.',
      'Consistently implemented QA testing for all stages of the project, ensuring bug identification and removal.',
    ],
  },
]

const experience = [
  {
    company: 'IQ Fiber',
    role: 'Customer Technical Support Representative',
    dates: 'March 2026 – Present',
    location: 'Jacksonville, FL',
    bullets: [
      'Acted as the first point of contact for customer inquiries via phone, email, and chat, providing technical and account support for fiber internet and Wi-Fi services.',
      'Diagnosed and resolved internet connectivity and hardware/software issues while documenting interactions and managing trouble tickets.',
      'Processed new service orders, scheduled installations, handled billing inquiries, and updated customer accounts.',
      'Monitored and followed up on service requests and escalations to ensure timely resolution and customer satisfaction.',
    ],
  },
  {
    company: 'Cleaveland & Cleaveland P.L.',
    role: 'Legal Assistant / Receptionist',
    dates: 'September 2025 – February 2026',
    location: 'Jacksonville, FL',
    bullets: [
      'Coordinated professional communication among attorneys, clients, courts, and opposing counsel to support smooth case progression.',
      'Safeguarded confidential legal and client information in compliance with ethical and privacy standards.',
      'Organized and maintained detailed physical and digital case files, improving file retrieval and administrative efficiency.',
      'Managed receptionist functions and assisted with advertising initiatives to support office operations and client engagement.',
    ],
  },
  {
    company: 'Lutheran Social Services of N.E. FL',
    role: 'Refugee Employment Program Assistant',
    dates: 'March 2022 – April 2025',
    location: 'Jacksonville, FL',
    bullets: [
      'Developed and implemented automated workflow processes that reduced case processing time by 80% and improved data consistency across departments.',
      'Created data-driven research reports on regional labor trends, resulting in 35% improved job placement rates for program participants.',
      'Developed and executed quality assurance protocols for a training program for 7 new hires, reducing onboarding time from 1 month to 2 weeks.',
      'Documented process improvements and created user guides to ensure consistent implementation of new workflows.',
      'Collaborated with cross-functional teams to design and implement process improvements that enhanced departmental efficiency.',
    ],
  },
]

export default function Projects() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <div className="projects-page">

      {/* ── Projects ── */}
      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          {projects.map((project) => {
            const isOpen = openProject === project.title
            return (
              <div key={project.title} className="project-card pixel-card">
                <div className="project-header" style={{ borderLeftColor: project.color }}>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag" style={{ background: project.color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn"
                    >
                      &#128279; GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn orange"
                    >
                      &#9654; Live Site
                    </a>
                  )}
                  {project.highlights && (
                    <button
                      className="pixel-btn project-highlights-toggle"
                      style={{ borderColor: project.color, background: isOpen ? project.color : 'transparent' }}
                      onClick={() => setOpenProject(isOpen ? null : project.title)}
                    >
                      {isOpen ? '▴ Hide Details' : '▾ View Details'}
                    </button>
                  )}
                </div>
                {isOpen && project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Work Experience ── */}
      <section className="experience-section">
        <h2 className="section-title">Experience</h2>

        {experience.length === 0 ? (
          <div className="pixel-card experience-placeholder">
            <p>&#9670; Work experience coming soon!</p>
            <p className="placeholder-note">
              To add experience, open <code>src/pages/Projects.jsx</code> and fill in the{' '}
              <code>experience</code> array at the top of the file.
            </p>
          </div>
        ) : (
          <div className="experience-list">
            {experience.map((job, i) => (
              <div key={i} className="experience-card pixel-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-company">{job.company}</h3>
                    <p className="experience-role">{job.role}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-dates">{job.dates}</span>
                    {job.location && <span className="experience-location">{job.location}</span>}
                  </div>
                </div>
                <ul className="experience-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  )
}
