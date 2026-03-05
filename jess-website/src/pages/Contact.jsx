import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'sent' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('sent')
        formRef.current.reset()
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <div className="contact-page">
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">

        {/* ── Form ── */}
        <div className="pixel-card contact-form-card">
          <h3 className="contact-card-title">&#9993; Send a Message</h3>

          {status === 'sent' ? (
            <div className="form-success">
              <p>&#9733; Message sent! I&#39;ll get back to you soon.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="from_name">Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="from_email">Email</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Lets connect! Write your message here."
                  required
                />
              </div>

              {status === 'error' && (
                <p className="form-error">
                  &#9888; Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                className="pixel-btn orange"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* ── Links ── */}
        <div className="contact-links-col">
          <div className="pixel-card contact-link-card">
            <h3 className="contact-card-title">&#9670; LinkedIn</h3>
            <p className="contact-link-desc">
              Connect with me professionally or check out my career history.
            </p>
            <a
              href="https://www.linkedin.com/in/jessicaadams555"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn"
            >
              &#128279; View Profile
            </a>
          </div>

          <div className="pixel-card contact-link-card">
            <h3 className="contact-card-title">&#9993; Email</h3>
            <p className="contact-link-desc">
              Prefer to reach out directly?
            </p>
            <a
              href="mailto:jessicawellsadams@gmail.com"
              className="pixel-btn pink"
            >
              jessicawellsadams@gmail.com
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
