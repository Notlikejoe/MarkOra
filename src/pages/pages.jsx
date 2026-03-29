import React, { useMemo, useState } from 'react';
import {
  contactChannels,
  impactNotes,
  journey,
  offices,
  principles,
  projects,
  services,
  socialLinks,
  stats,
  workFilters,
} from '../data';
import { SectionLabel } from '../components/Layout';

function useScrollReveal(selector) {
  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector]);
}

export function HomePage({ onNavigate }) {
  const featured = projects.slice(0, 3);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);
  const [heroOffset, setHeroOffset] = useState({ x: 0, y: 0 });
  const activeService = services[activeServiceIndex];
  const activeSignal = impactNotes[activeSignalIndex];
  const activeProject = featured[activeSignalIndex % featured.length];
  const orbitLabels = ['SEO', 'Branding', 'Analytics', 'Content', 'Social Media', 'Web Design', 'PPC', 'Strategy'];

  useScrollReveal('.home-scroll-reveal');

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveServiceIndex((current) => (current + 1) % services.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  function handleHeroMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    setHeroOffset({ x, y });
  }

  function handleStoryMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const nextIndex = Math.max(0, Math.min(impactNotes.length - 1, Math.floor(relativeX * impactNotes.length)));
    setActiveSignalIndex(nextIndex);
  }

  function resetHeroMove() {
    setHeroOffset({ x: 0, y: 0 });
  }

  return (
    <>
      <section className="home-hero-canvas" onMouseMove={handleHeroMove} onMouseLeave={resetHeroMove}>
        <div className="hero-canvas-bg">
          <div className="hero-canvas-grid" />
          <div
            className="hero-canvas-glow hero-canvas-glow-left"
            style={{ transform: `translate(${heroOffset.x * -18}px, ${heroOffset.y * -12}px)` }}
          />
          <div
            className="hero-canvas-glow hero-canvas-glow-right"
            style={{ transform: `translate(${heroOffset.x * 20}px, ${heroOffset.y * 14}px)` }}
          />
          <svg
            className="hero-canvas-lines"
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{ transform: `translate(${heroOffset.x * 8}px, ${heroOffset.y * 6}px)` }}
          >
            <path d="M800 240 L360 360" />
            <path d="M800 240 L620 178" />
            <path d="M800 240 L1010 170" />
            <path d="M800 240 L1250 320" />
            <path d="M800 240 L1180 560" />
            <path d="M800 240 L900 660" />
            <path d="M800 240 L620 690" />
            <path d="M800 240 L390 560" />
          </svg>
          {orbitLabels.map((label, index) => (
            <span
              key={label}
              className={`hero-orbit-pill orbit-${index + 1}`}
              style={{ animationDelay: `${index * 0.45}s` }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="hero-canvas-inner shell">
          <div className="hero-canvas-copy reveal-up">
            <div className="eyebrow-pill">
              <span className="pulse-dot" />
              <span>Dubai • MENA Region</span>
            </div>
            <p className="hero-kicker">Growth command system for brands that want sharper attention, stronger perception, and measurable lift.</p>
            <p className="home-brand-mark">MarkOra</p>
            <h1 className="home-title command-title">
              <span className="headline-line headline-line-1">Digital strategy.</span>
              <span className="gradient-text command-highlight headline-line headline-line-2">Engineered</span>
              <span className="headline-line headline-line-3">for growth.</span>
            </h1>
            <p className="hero-subtitle command-subtitle">
              Every channel. Every signal. One clean command system uniting brand, content, paid media, and analytics.
            </p>
            <div className="hero-actions">
              <button className="cta-pill large" onClick={() => onNavigate('contact')}>Start Your Growth Plan</button>
              <button className="ghost-pill" onClick={() => onNavigate('work')}>See Case Studies</button>
            </div>
            <div className="hero-proof-line command-proof-line">
              {stats.map((item, index) => (
                <div key={item.label} className="hero-proof-inline" style={{ animationDelay: `${0.12 + index * 0.08}s` }}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-command-graphic reveal-up-delayed"
            style={{ transform: `translate(${heroOffset.x * 14}px, ${heroOffset.y * 10}px)` }}
          >
            <div className="command-core-mark">M</div>
            <div className="command-core-caption">Growth Command System</div>
            <div className="command-core-pulse pulse-one" />
            <div className="command-core-pulse pulse-two" />
          </div>
        </div>
      </section>

      <section className="ticker-shell">
        <div className="ticker-track">
          <div className="ticker-group">
            <span>Brand Strategy</span>
            <span>Content Systems</span>
            <span>Paid Media</span>
            <span>Social Management</span>
            <span>Dubai</span>
            <span>Cairo</span>
            <span>Amman</span>
          </div>
          <div className="ticker-group" aria-hidden="true">
            <span>Brand Strategy</span>
            <span>Content Systems</span>
            <span>Paid Media</span>
            <span>Social Management</span>
            <span>Dubai</span>
            <span>Cairo</span>
            <span>Amman</span>
          </div>
        </div>
      </section>

      <section className="shell metrics-bar home-scroll-reveal">
        <div className="metric-grid">
          {stats.map((item) => (
            <div key={item.label} className="metric-item">
              <div className="metric-line" />
              <div className="metric-value">{item.value}</div>
              <div className="metric-label">{item.label}</div>
            </div>
          ))}
          <div className="journey-card">
            <p className="mini-label">Journey</p>
            {journey.map((step) => (
              <div key={`${step.year}-${step.text}`} className="journey-row">
                <span>{step.year}</span>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-space home-story-grid">
        <div className="story-panel story-panel-copy home-scroll-reveal">
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="section-title">A sharper homepage needed a sharper narrative.</h2>
          <p className="story-copy">
            The new direction leads with emotion first, then proves credibility through motion, campaign framing, and a stronger sense of regional sophistication.
          </p>
          <div className="story-signal-list" role="radiogroup" aria-label="MarkOra focus areas">
            {impactNotes.map((item, index) => (
              <button
                type="button"
                key={item.label}
                className={index === activeSignalIndex ? 'story-signal-chip active' : 'story-signal-chip'}
                onMouseEnter={() => setActiveSignalIndex(index)}
                onFocus={() => setActiveSignalIndex(index)}
                role="radio"
                aria-checked={index === activeSignalIndex}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </button>
            ))}
          </div>
        </div>
        <div
          className="story-panel story-panel-visual home-scroll-reveal home-scroll-reveal-delay-1"
          onMouseMove={handleStoryMove}
        >
          <div className="story-visual-topline">
            <p className="mini-label accent">Cursor Focus</p>
            <span>{activeProject.year}</span>
          </div>
          <div className="story-visual-frame">
            <div className="story-visual-scan" />
            <div className="story-visual-glow" style={{ '--project-color': activeProject.color }} />
            <div className="story-visual-copy">
              <p className="story-visual-label">{activeSignal.label}</p>
              <h3>{activeSignal.value}</h3>
              <p>{activeProject.title}</p>
            </div>
            <div className="story-visual-bars" aria-hidden="true">
              {featured.map((project, index) => (
                <span
                  key={project.id}
                  className={index === activeSignalIndex ? 'story-bar active' : 'story-bar'}
                  style={{ '--bar-color': project.color, '--bar-delay': `${index * 0.18}s` }}
                />
              ))}
            </div>
            <div className="story-visual-tags">
              {activeProject.tags.slice(0, 3).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell section-space home-scroll-reveal">
        <SectionLabel>What We Offer</SectionLabel>
        <div className="services-home-grid">
          <div className="services-list">
            {services.map((service, index) => (
              <article
                key={service.key}
                className={`service-row ${service.key === activeService.key ? 'active' : ''}`}
                onMouseEnter={() => setActiveServiceIndex(index)}
                style={{ '--service-delay': `${index * 0.08}s` }}
              >
                <span className="service-row-glow" />
                <div>
                  <p className="service-number">{service.number}</p>
                  <h3>{service.title}</h3>
                  <p>{service.blurb}</p>
                </div>
                <span className="service-ghost-number">{service.number}</span>
              </article>
            ))}
          </div>

          <div className="glass-panel service-feature home-scroll-reveal home-scroll-reveal-delay-1">
            <p className="mini-label accent">Featured Service</p>
            <div className="service-feature-progress">
              {services.map((service, index) => (
                <span
                  key={service.key}
                  className={index === activeServiceIndex ? 'service-progress-dot active' : 'service-progress-dot'}
                />
              ))}
            </div>
            <h3>{activeService.title}</h3>
            <p className="service-feature-copy">{activeService.description}</p>
            <div className="tag-row">
              {activeService.deliverables.map((item) => (
                <span key={item} className="tag accent-tag">{item}</span>
              ))}
            </div>
            <div className="service-feature-footer">
              <div>
                <span className="mini-label">Why it works</span>
                <p>Sharper market fit and clearer perceived value.</p>
              </div>
              <button className="text-link" onClick={() => onNavigate('services')}>Explore all services</button>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section-space home-scroll-reveal">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="featured-project-grid featured-project-grid-home">
          {featured.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-beam" />
              <div className="project-art" style={{ '--project-color': project.color }}>
                <span>{project.category}</span>
              </div>
              <div className="project-body">
                <div className="project-topline">
                  <p>{project.type}</p>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="text-link" onClick={() => onNavigate('work')}>Open project library</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function ServicesPage({ onNavigate }) {
  const [activeKey, setActiveKey] = useState(services[0].key);
  const activeService = services.find((item) => item.key === activeKey) ?? services[0];

  return (
    <>
      <section className="hero shell compact-hero">
        <div className="hero-copy wide">
          <SectionLabel>Services</SectionLabel>
          <h1 className="hero-title smaller">
            <span>End-to-End</span>
            <span>Solutions for</span>
            <span className="gradient-text">Brand Growth</span>
          </h1>
          <p className="hero-subtitle max-copy">
            We are a marketing agency built to connect brand, creative, paid media, and social into one sharper growth system for premium MENA brands.
          </p>
          <div className="hero-actions">
            <button className="cta-pill large" onClick={() => onNavigate('contact')}>Start a Project</button>
            <button className="ghost-pill" onClick={() => onNavigate('work')}>View Work</button>
          </div>
        </div>
      </section>

      <section className="shell section-space top-tight">
        <div className="services-engine">
          <div className="services-list">
            {services.map((service) => (
              <button
                key={service.key}
                className={`service-row interactive expandable-service ${service.key === activeKey ? 'active expanded' : ''}`}
                onClick={() => setActiveKey(service.key)}
              >
                <div>
                  <p className="service-number">{service.number}</p>
                  <h3>{service.title}</h3>
                  <p>{service.blurb}</p>
                  <div className="expandable-service-body">
                    <p className="service-agency-angle">{service.agencyAngle}</p>
                    <div className="expandable-service-columns">
                      <div>
                        <span className="mini-label">Includes</span>
                        <div className="expandable-chip-row">
                          {service.expandedDeliverables.map((item) => (
                            <span key={item} className="tag">{item}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="mini-label">Core Channels</span>
                        <div className="expandable-chip-row">
                          {service.channels.map((item) => (
                            <span key={item} className="tag accent-tag">{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="service-outcome"><strong>Outcome:</strong> {service.outcome}</p>
                  </div>
                </div>
                <span className="service-ghost-number">{service.number}</span>
              </button>
            ))}
          </div>

          <div className="glass-panel service-feature large-feature">
            <p className="mini-label accent">Deliverables</p>
            <h3>{activeService.title}</h3>
            <p className="service-feature-copy">{activeService.description}</p>
            <div className="tag-row">
              {activeService.deliverables.map((item) => (
                <span key={item} className="tag accent-tag">{item}</span>
              ))}
            </div>
            <div className="feature-note-grid">
              <div>
                <p className="mini-label">Approach</p>
                <p>Commercial strategy paired with premium design execution.</p>
              </div>
              <div>
                <p className="mini-label">Outcome</p>
                <p>Sharper brand presence, stronger acquisition, and more durable growth.</p>
              </div>
            </div>
            <div className="service-feature-footer">
              <div>
                <span className="mini-label">Built for</span>
                <p>{activeService.agencyAngle}</p>
              </div>
              <button className="text-link" onClick={() => onNavigate('contact')}>Request this service</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function WorkPage() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const [workOffset, setWorkOffset] = useState({ x: 0, y: 0 });
  const activeWorkProject = projects[activeWorkIndex];

  useScrollReveal('.work-scroll-reveal');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  function handleWorkMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const nextIndex = Math.max(0, Math.min(projects.length - 1, Math.floor(relativeX * projects.length)));
    setWorkOffset({ x, y });
    setActiveWorkIndex(nextIndex);
  }

  function resetWorkMove() {
    setWorkOffset({ x: 0, y: 0 });
  }

  return (
    <>
      <section className="shell page-hero work-scroll-reveal">
        <SectionLabel>Selected Projects</SectionLabel>
        <h1 className="hero-title smaller">
          <span>Case studies and</span>
          <span>campaign systems</span>
          <span className="gradient-text">built to move markets.</span>
        </h1>
      </section>

      <section className="shell work-spotlight work-scroll-reveal home-scroll-reveal-delay-1">
        <div className="work-spotlight-copy">
          <p className="mini-label accent">Featured Case</p>
          <h2>{activeWorkProject.title}</h2>
          <p className="work-spotlight-text">{activeWorkProject.description}</p>
          <div className="tag-row work-spotlight-tags">
            {activeWorkProject.tags.map((tag, index) => (
              <span key={tag} className={index === 0 ? 'tag accent-tag' : 'tag'}>{tag}</span>
            ))}
          </div>
          <div className="work-spotlight-results">
            {activeWorkProject.results.map((result) => (
              <div key={result} className="work-result-row">{result}</div>
            ))}
          </div>
        </div>

        <div
          className="work-spotlight-stage"
          style={{ '--project-color': activeWorkProject.color }}
          onMouseMove={handleWorkMove}
          onMouseLeave={resetWorkMove}
        >
          <div
            className="work-spotlight-beam"
            style={{ transform: `translate(${workOffset.x * 22}px, ${workOffset.y * 16}px)` }}
          />
          <div className="work-spotlight-stage-grid">
            <div
              className="work-spotlight-frame"
              style={{ transform: `translate(${workOffset.x * -10}px, ${workOffset.y * -8}px)` }}
            >
              <span>{activeWorkProject.category}</span>
              <strong>{activeWorkProject.type}</strong>
              <p>{activeWorkProject.year}</p>
            </div>
            <div className="work-spotlight-selector">
              <p className="mini-label accent">Project Library</p>
              <div className="work-spotlight-orbits">
                {projects.slice(0, 6).map((project, index) => (
                  <button
                    key={project.id}
                    className={project.id === activeWorkProject.id ? 'work-orbit-chip active' : 'work-orbit-chip'}
                    onMouseEnter={() => setActiveWorkIndex(index)}
                    onFocus={() => setActiveWorkIndex(index)}
                    onClick={() => setActiveWorkIndex(index)}
                  >
                    <span className="work-orbit-title">{project.title}</span>
                    <span className="work-orbit-meta">{project.category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell tilted-gallery work-scroll-reveal home-scroll-reveal-delay-2">
        {projects.slice(0, 6).map((project, index) => (
          <button
            key={project.id}
            className={project.id === activeWorkProject.id ? 'gallery-card active' : 'gallery-card'}
            style={{ '--project-color': project.color, '--rotation': `${index % 2 === 0 ? -4 : 4}deg` }}
            onMouseEnter={() => setActiveWorkIndex(index)}
            onClick={() => setActiveWorkIndex(index)}
          >
            <span>{project.title}</span>
            <p>{project.category}</p>
          </button>
        ))}
      </section>

      <section className="shell filter-bar work-scroll-reveal">
        {workFilters.map((item) => (
          <button
            key={item}
            className={filter === item ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </section>

      <section className="shell project-grid section-space top-tight work-scroll-reveal">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card project-card-large">
            <div className="project-card-beam" />
            <div className="project-art tall" style={{ '--project-color': project.color }}>
              <span>{project.category}</span>
            </div>
            <div className="project-body">
              <div className="project-topline">
                <p>{project.type}</p>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="text-link" onClick={() => setSelected(project)}>View Details</button>
            </div>
          </article>
        ))}
      </section>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            <p className="mini-label accent">{selected.category}</p>
            <h3>{selected.title}</h3>
            <p className="modal-copy">{selected.description}</p>
            <div className="tag-row">
              {selected.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="results-list">
              {selected.results.map((result) => (
                <div key={result} className="result-row">{result}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function AboutPage({ onNavigate }) {
  return (
    <>
      <section className="shell page-hero">
        <SectionLabel>About MarkOra</SectionLabel>
        <h1 className="hero-title smaller">
          <span>We are the bridge</span>
          <span>between vision and</span>
          <span className="gradient-text warm">Brand Growth.</span>
        </h1>
        <p className="hero-subtitle max-copy">
          Born in Dubai. Built for MENA brands that need strategy, creative, and performance working as one.
        </p>
      </section>

      <section className="shell metrics-bar about-metrics">
        <div className="metric-grid">
          {stats.map((item) => (
            <div key={item.label} className="metric-item">
              <div className="metric-value">{item.value}</div>
              <div className="metric-label">{item.label}</div>
            </div>
          ))}
          <div className="journey-card">
            <p className="mini-label">Journey</p>
            {journey.map((step) => (
              <div key={`${step.year}-${step.text}`} className="journey-row">
                <span>{step.year}</span>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-space">
        <SectionLabel>What We Offer</SectionLabel>
        <h2 className="section-title">Four core services. One growth system.</h2>
        <div className="principles-grid services-preview-grid">
          {services.map((service) => (
            <article key={service.key} className="glass-panel principle-card">
              <p className="mini-label accent">{service.number}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section-space">
        <SectionLabel>Why MarkOra</SectionLabel>
        <div className="principles-grid">
          {principles.map((item) => (
            <article key={item.title} className="glass-panel principle-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section-space office-section">
        <div>
          <SectionLabel>Regional Presence</SectionLabel>
          <h2 className="section-title">Built in Dubai, operating across the region.</h2>
        </div>
        <div className="office-list">
          {offices.map((office) => (
            <div key={office.city} className="office-row glass-panel">
              <div className="office-city">
                <span className={office.active ? 'pulse-dot' : 'muted-dot'} />
                <span>{office.city}</span>
              </div>
              <span className={office.active ? 'office-badge active' : 'office-badge'}>{office.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="shell cta-banner">
        <div>
          <p className="mini-label accent">Ready to grow</p>
          <h2>Let us build something extraordinary together.</h2>
        </div>
        <button className="cta-pill large" onClick={() => onNavigate('contact')}>Start a Conversation</button>
      </section>
    </>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project Inquiry from ${formData.get('name') || 'Website Visitor'}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.get('name') || ''}`,
        `Email: ${formData.get('email') || ''}`,
        `Company: ${formData.get('company') || ''}`,
        `Service Interest: ${formData.get('service_interest') || ''}`,
        `Budget Range: ${formData.get('budget_range') || ''}`,
        '',
        `${formData.get('project_details') || ''}`,
      ].join('\n'),
    );
    window.location.href = `mailto:hello@mark-ora.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="shell page-hero">
        <SectionLabel>Start a Conversation</SectionLabel>
        <h1 className="hero-title contact-title">
          <span>Let us build</span>
          <span>something</span>
          <span className="gradient-text">extraordinary</span>
          <span className="gradient-text cool">together</span>
        </h1>
      </section>

      <section className="shell contact-layout section-space top-tight">
        <div>
          <p className="mini-label">Project Brief</p>
          {submitted ? (
            <div className="success-panel">
              <p className="mini-label accent">Message Sent</p>
              <h3>Your email app should be open.</h3>
              <p>Review the drafted message and send it to hello@mark-ora.com to complete your inquiry.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  <span>Name *</span>
                  <input type="text" name="name" autoComplete="name" placeholder="Your full name…" required />
                </label>
                <label>
                  <span>Email *</span>
                  <input type="email" name="email" autoComplete="email" spellCheck={false} placeholder="your@email.com…" required />
                </label>
              </div>

              <div className="form-grid">
                <label>
                  <span>Company</span>
                  <input type="text" name="company" autoComplete="organization" placeholder="Company name…" />
                </label>
                <label>
                  <span>Service Interest</span>
                  <select name="service_interest" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Brand Strategy</option>
                    <option>Digital Marketing</option>
                    <option>Content Creation</option>
                    <option>Social Media</option>
                    <option>Full-Service Partnership</option>
                  </select>
                </label>
              </div>

              <label>
                <span>Budget Range</span>
                <select name="budget_range" defaultValue="">
                  <option value="" disabled>Select budget range</option>
                  <option>AED 5,000 - 10,000</option>
                  <option>AED 10,000 - 25,000</option>
                  <option>AED 25,000 - 50,000</option>
                  <option>AED 50,000+</option>
                </select>
              </label>

              <label>
                <span>Project Details *</span>
                <textarea
                  rows="6"
                  name="project_details"
                  placeholder="Tell us about the brand, goals, and timing…"
                  required
                />
              </label>

              <button type="submit" className="cta-pill large">Send Message</button>
            </form>
          )}
        </div>

        <aside className="contact-sidebar">
          <div className="sidebar-block">
            <p className="mini-label">Contact</p>
            {contactChannels.map((channel) => (
              <div key={channel.label} className="sidebar-link-block">
                <span>{channel.label}</span>
                <a href={channel.href}>{channel.value}</a>
              </div>
            ))}
          </div>

          <div className="sidebar-block">
            <p className="mini-label">Offices</p>
            {offices.map((office) => (
              <div key={office.city} className="office-row compact">
                <div className="office-city">
                  <span className={office.active ? 'pulse-dot' : 'muted-dot'} />
                  <span>{office.city}</span>
                </div>
                <span className={office.active ? 'office-badge active' : 'office-badge'}>{office.tag}</span>
              </div>
            ))}
          </div>

          <div className="sidebar-block">
            <p className="mini-label">Follow</p>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="sidebar-social-link">
                <span>{link.label}</span>
                <span>↗</span>
              </a>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}

export function PrivacyPage() {
  return (
    <>
      <section className="shell page-hero">
        <SectionLabel>Privacy Policy</SectionLabel>
        <h1 className="hero-title smaller">
          <span>Privacy that is</span>
          <span>clear, practical,</span>
          <span className="gradient-text">and proportionate.</span>
        </h1>
      </section>

      <section className="shell section-space top-tight legal-layout">
        <article className="legal-card">
          <h2>What We Collect</h2>
          <p>When you contact MarkOra, we may collect your name, email address, phone number, company name, and the project details you choose to share.</p>
        </article>
        <article className="legal-card">
          <h2>How We Use It</h2>
          <p>We use inquiry information to review project requests, reply to potential clients, and continue relevant business conversations. We do not sell contact information.</p>
        </article>
        <article className="legal-card">
          <h2>How Contact Works</h2>
          <p>This website currently opens your email client when you submit the contact form. Your message is sent through your chosen mail provider rather than stored directly by this website.</p>
        </article>
        <article className="legal-card">
          <h2>Third-Party Services</h2>
          <p>The site uses Google Fonts and may link to external platforms such as LinkedIn and Instagram. Their privacy practices are governed by their own policies.</p>
        </article>
        <article className="legal-card">
          <h2>Data Retention</h2>
          <p>If you email MarkOra directly, we may retain that correspondence for normal business, legal, and operational record-keeping.</p>
        </article>
        <article className="legal-card">
          <h2>Contact</h2>
          <p>For privacy-related questions, contact <a href="mailto:hello@mark-ora.com">hello@mark-ora.com</a>.</p>
        </article>
      </section>
    </>
  );
}

export function TermsPage() {
  return (
    <>
      <section className="shell page-hero">
        <SectionLabel>Terms of Service</SectionLabel>
        <h1 className="hero-title smaller">
          <span>Simple terms for</span>
          <span>using the site and</span>
          <span className="gradient-text">contacting the team.</span>
        </h1>
      </section>

      <section className="shell section-space top-tight legal-layout">
        <article className="legal-card">
          <h2>Website Use</h2>
          <p>This website is provided for general information about MarkOra and its services. You may browse, read, and contact us for legitimate business purposes.</p>
        </article>
        <article className="legal-card">
          <h2>No Guaranteed Results</h2>
          <p>Any service descriptions, case-study summaries, or strategic language on this site are informational and do not guarantee identical results for every client.</p>
        </article>
        <article className="legal-card">
          <h2>Intellectual Property</h2>
          <p>Unless otherwise stated, the site design, copy, branding, and original materials are the property of MarkOra and may not be reused without permission.</p>
        </article>
        <article className="legal-card">
          <h2>External Links</h2>
          <p>This site may link to third-party platforms. MarkOra is not responsible for the content, security, or privacy practices of those external sites.</p>
        </article>
        <article className="legal-card">
          <h2>Service Engagement</h2>
          <p>Any client relationship, project scope, pricing, and delivery expectations are governed by a separate written agreement, not by this website alone.</p>
        </article>
        <article className="legal-card">
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to <a href="mailto:hello@mark-ora.com">hello@mark-ora.com</a>.</p>
        </article>
      </section>
    </>
  );
}
