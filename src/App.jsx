import React, { useEffect, useState } from 'react'
import './App.css'

import photo from './assets/kashika.jpeg'

// Delhi High Court background photo — see instructions below.
// Put your photo at src/assets/delhi-high-court.jpg, then uncomment:
import courtPhoto from './assets/delhi-high-court.jpg'

const NAV_ITEMS = [
  { id: 'profile', label: 'Profile' },
  { id: 'practice', label: 'Practice Areas' },
  { id: 'chamber', label: 'Chamber' },
  { id: 'contact', label: 'Contact' },
]

const PRACTICE_AREAS = [
  {
    tag: 'Cr.',
    title: 'Criminal Matters',
    body:
      'Bail applications, trial defence and representation before the District Courts, protecting your rights at every stage of a criminal proceeding.',
  },
  {
    tag: 'Cv.',
    title: 'Civil Matters',
    body:
      'Suits for recovery, injunctions and contractual disputes, carried from filing through to final decree with careful drafting and follow-through.',
  },
  {
    tag: 'Fm.',
    title: 'Family Matters',
    body:
      'Divorce, maintenance, custody and matrimonial disputes, handled with the discretion and patience these matters deserve.',
  },
  {
    tag: 'Pr.',
    title: 'Property Matters',
    body:
      'Title disputes, partition suits and tenancy litigation before the District Courts of Delhi, from notice to final relief.',
  },
]

function JusticeSeal() {
  return (
    <svg viewBox="0 0 160 160" className="seal" aria-hidden="true">
      <defs>
        <path id="sealCircle" d="M80,18 a62,62 0 1,1 -0.1,0" />
      </defs>
      <circle cx="80" cy="80" r="74" className="seal-ring-outer" />
      <circle cx="80" cy="80" r="56" className="seal-ring-inner" />
      <text className="seal-text">
        <textPath href="#sealCircle" startOffset="0%">
          ADVOCATE &#8226; DISTRICT COURTS OF DELHI &#8226; HIGH COURT OF DELHI &#8226;
        </textPath>
      </text>
      {/* scales of justice, simplified */}
      <g className="seal-icon" strokeLinecap="round" strokeLinejoin="round">
        <line x1="80" y1="48" x2="80" y2="100" />
        <line x1="58" y1="58" x2="102" y2="58" />
        <path d="M58,58 l-12,26 a13,13 0 0 0 24,0 z" />
        <path d="M102,58 l-12,26 a13,13 0 0 0 24,0 z" />
        <line x1="68" y1="110" x2="92" y2="110" />
        <line x1="80" y1="100" x2="80" y2="110" />
      </g>
    </svg>
  )
}

function ThreadDivider() {
  return (
    <div className="thread-divider" role="presentation">
      <span className="thread-knot" />
      <span className="thread-line" />
      <span className="thread-knot" />
    </div>
  )
}

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export default function App() {
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id))
  useReveal()
  const [navOpen, setNavOpen] = useState(false)

  const handleNavClick = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setNavOpen(false)
  }

  return (
    <div className="page">
      <header className="masthead">
        <span className="masthead-mark">AK</span>
        <button
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="site-nav"
          onClick={() => setNavOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav
        id="site-nav"
        className={`tabs ${navOpen ? 'tabs-open' : ''}`}
        aria-label="Section navigation"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`tab ${active === item.id ? 'tab-active' : ''}`}
            onClick={handleNavClick(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <main>
        <section id="profile" className="hero">
          <div className="hero-text reveal">
            <p className="eyebrow">In the Courts of Delhi</p>
            <h1>
              Advocate
              <br />
              Kashika
            </h1>
            <p className="hero-subtitle">
              District Courts of Delhi, Tis Hazari &middot; High Court of
              Delhi
            </p>
            <ul className="tag-row">
              <li>Criminal</li>
              <li>Civil</li>
              <li>Family</li>
              <li>Property</li>
            </ul>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+918700822508">
                Call for Appointment
              </a>
              <a
                className="btn btn-ghost"
                href="mailto:chaliyakashika6@gmail.com"
              >
                Write an Email
              </a>
            </div>
          </div>

          <div className="hero-figure reveal">
            <div className="id-card">
              <div className="id-card-photo">
                <img src={photo} alt="Advocate Kashika" className="id-photo" />
              </div>
              <div className="id-card-footer">
                <span>Advocate</span>
                <span>Delhi</span>
              </div>
            </div>
            <div className="seal-wrap">
              <JusticeSeal />
            </div>
          </div>
        </section>

        <ThreadDivider />

        <section className="court-band reveal">
  <img src={courtPhoto} alt="" className="court-band-img" />
  <div className="court-band-overlay">
    <p className="eyebrow eyebrow-light">Also Appearing Before</p>
    <h2>High Court of Delhi</h2>
  </div>
</section>

        <ThreadDivider />

        <section id="practice" className="practice reveal">
          <p className="eyebrow">Practice Areas</p>
          <h2>Matters handled</h2>
          <div className="practice-grid">
            {PRACTICE_AREAS.map((area) => (
              <article className="file-card" key={area.title}>
                <span className="file-tab">{area.tag}</span>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
              </article>
            ))}
          </div>
        </section>

        <ThreadDivider />

        <section id="chamber" className="chamber reveal">
          <div className="chamber-inner">
            <div>
              <p className="eyebrow">Chamber</p>
              <h2>Where to find the chamber</h2>
              <address>
                Chamber No. 37B, Western Wing
                <br />
                Tis Hazari Courts Complex
                <br />
                Delhi
              </address>
              <p className="chamber-note">
                Practising before the District Courts of Delhi at Tis
                Hazari, and the High Court of Delhi.
              </p>
            </div>
            <div className="chamber-plate" aria-hidden="true">
              <span>37B</span>
              <small>Western Wing</small>
            </div>
          </div>
        </section>

        <ThreadDivider />

        <section id="contact" className="contact reveal">
          <p className="eyebrow">For Appointment</p>
          <h2>Get in touch</h2>
          <div className="contact-grid">
            <a className="contact-row" href="tel:+918700822508">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+91 87008 22508</span>
            </a>
            <a
              className="contact-row"
              href="mailto:chaliyakashika6@gmail.com"
            >
              <span className="contact-label">Email</span>
              <span className="contact-value">chaliyakashika6@gmail.com</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Advocate Kashika</span>
        <span>District Courts of Delhi, Tis Hazari</span>
      </footer>
    </div>
  )
}
