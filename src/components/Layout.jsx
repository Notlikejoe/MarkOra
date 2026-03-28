import React, { useState } from 'react';
import { contactChannels, navItems, socialLinks } from '../data';

export function Header({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigate(pageKey) {
    setMenuOpen(false);
    onNavigate(pageKey);
  }

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <button className="brand" onClick={() => handleNavigate('home')}>
          <span>Mark</span>
          <span className="brand-gradient">Ora</span>
        </button>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={currentPage === item.key ? 'nav-link active' : 'nav-link'}
              onClick={() => handleNavigate(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="cta-pill" onClick={() => handleNavigate('contact')}>
          Start a Project
        </button>

        <button
          className={menuOpen ? 'mobile-menu-toggle active' : 'mobile-menu-toggle'}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={menuOpen ? 'mobile-menu-panel open' : 'mobile-menu-panel'}>
        <div className="shell mobile-menu-shell">
          <p className="mini-label accent">Navigate</p>
          <div className="mobile-menu-links">
            {navItems.map((item) => (
              <button
                key={item.key}
                className={currentPage === item.key ? 'mobile-nav-link active' : 'mobile-nav-link'}
                onClick={() => handleNavigate(item.key)}
              >
                <span>{item.label}</span>
                <span className="mobile-nav-arrow">/</span>
              </button>
            ))}
          </div>
          <button className="cta-pill mobile-menu-cta" onClick={() => handleNavigate('contact')}>
            Start a Project
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-column">
          <p className="footer-kicker">MarkOra Growth Studio</p>
          <button className="brand footer-brand" onClick={() => onNavigate('home')}>
            <span>Mark</span>
            <span className="brand-gradient">Ora</span>
          </button>
          <p className="footer-copy">
            End-to-end marketing systems for ambitious hospitality, retail, and lifestyle brands across the MENA region.
          </p>
          <div className="footer-location-row">
            <span>Dubai</span>
            <span>Cairo</span>
            <span>Amman</span>
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-label">Navigation</p>
          <div className="footer-links">
            {navItems.map((item) => (
              <button key={item.key} className="footer-link" onClick={() => onNavigate(item.key)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-label">Core Services</p>
          <div className="footer-links">
            <button className="footer-link" onClick={() => onNavigate('services')}>Brand Strategy</button>
            <button className="footer-link" onClick={() => onNavigate('services')}>Creative Production</button>
            <button className="footer-link" onClick={() => onNavigate('services')}>Performance Marketing</button>
            <button className="footer-link" onClick={() => onNavigate('services')}>Social Media</button>
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-label">Contact</p>
          <div className="footer-links footer-contact-links">
            {contactChannels.map((channel) => (
              <a key={channel.label} className="footer-link footer-contact-link" href={channel.href}>
                <span>{channel.label}</span>
                <strong>{channel.value}</strong>
              </a>
            ))}
          </div>
          <p className="footer-label footer-social-label">Social</p>
          <div className="footer-links footer-social-links">
            {socialLinks.map((link) => (
              <a key={link.label} className="footer-link" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>© 2026 MarkOra. All rights reserved.</p>
        <div className="footer-bottom-links">
          <button className="footer-bottom-link" onClick={() => onNavigate('contact')}>Start a Project</button>
          <a href="mailto:hello@mark-ora.com">hello@mark-ora.com</a>
        </div>
      </div>
    </footer>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="section-label-row">
      <span className="section-line" />
      <span className="section-label">{children}</span>
    </div>
  );
}

export function BackgroundOrbs() {
  return (
    <>
      <div className="bg-orb bg-orb-top" />
      <div className="bg-orb bg-orb-left" />
      <div className="bg-grid" />
    </>
  );
}
