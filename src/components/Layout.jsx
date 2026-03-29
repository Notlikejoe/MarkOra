import React, { useState } from 'react';
import { contactChannels, navItems, socialLinks } from '../data';

const PAGE_PATHS = {
  home: '/',
  services: '/services',
  work: '/work',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
};

function pageHref(pageKey) {
  return PAGE_PATHS[pageKey] ?? '/';
}

function shouldHandleClientNavigation(event) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

function PageLink({ pageKey, className, currentPage, onNavigate, children, ...props }) {
  const isActive = currentPage === pageKey;
  const mergedClassName = `${className}${isActive ? ' active' : ''}`;

  return (
    <a
      {...props}
      href={pageHref(pageKey)}
      className={mergedClassName}
      aria-current={isActive ? 'page' : undefined}
      onClick={(event) => {
        if (!shouldHandleClientNavigation(event)) return;
        event.preventDefault();
        onNavigate(pageKey);
      }}
    >
      {children}
    </a>
  );
}

export function Header({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigate(pageKey) {
    setMenuOpen(false);
    onNavigate(pageKey);
  }

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a
          className="brand"
          href="/"
          onClick={(event) => {
            if (!shouldHandleClientNavigation(event)) return;
            event.preventDefault();
            handleNavigate('home');
          }}
        >
          <span>Mark</span>
          <span className="brand-gradient">Ora</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <PageLink
              key={item.key}
              pageKey={item.key}
              className="nav-link"
              currentPage={currentPage}
              onNavigate={handleNavigate}
            >
              {item.label}
            </PageLink>
          ))}
        </nav>

        <PageLink pageKey="contact" className="cta-pill" currentPage={currentPage} onNavigate={handleNavigate}>
          Start a Project
        </PageLink>

        <button
          className={menuOpen ? 'mobile-menu-toggle active' : 'mobile-menu-toggle'}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav-panel" className={menuOpen ? 'mobile-menu-panel open' : 'mobile-menu-panel'}>
        <div className="shell mobile-menu-shell">
          <p className="mini-label accent">Navigate</p>
          <div className="mobile-menu-links">
            {navItems.map((item) => (
              <PageLink
                key={item.key}
                pageKey={item.key}
                className="mobile-nav-link"
                currentPage={currentPage}
                onNavigate={handleNavigate}
              >
                <span>{item.label}</span>
                <span className="mobile-nav-arrow" aria-hidden="true">/</span>
              </PageLink>
            ))}
          </div>
          <PageLink
            pageKey="contact"
            className="cta-pill mobile-menu-cta"
            currentPage={currentPage}
            onNavigate={handleNavigate}
          >
            Start a Project
          </PageLink>
        </div>
      </div>
    </header>
  );
}

export function Footer({ currentPage, onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-column">
          <p className="footer-kicker">MarkOra Growth Studio</p>
          <a
            className="brand footer-brand"
            href="/"
            onClick={(event) => {
              if (!shouldHandleClientNavigation(event)) return;
              event.preventDefault();
              onNavigate('home');
            }}
          >
            <span>Mark</span>
            <span className="brand-gradient">Ora</span>
          </a>
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
              <PageLink
                key={item.key}
                pageKey={item.key}
                className="footer-link"
                currentPage={currentPage}
                onNavigate={onNavigate}
              >
                {item.label}
              </PageLink>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-label">Core Services</p>
          <div className="footer-links">
            <PageLink pageKey="services" className="footer-link" currentPage={currentPage} onNavigate={onNavigate}>Brand Strategy</PageLink>
            <PageLink pageKey="services" className="footer-link" currentPage={currentPage} onNavigate={onNavigate}>Creative Production</PageLink>
            <PageLink pageKey="services" className="footer-link" currentPage={currentPage} onNavigate={onNavigate}>Performance Marketing</PageLink>
            <PageLink pageKey="services" className="footer-link" currentPage={currentPage} onNavigate={onNavigate}>Social Media</PageLink>
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
          <PageLink pageKey="contact" className="footer-bottom-link" currentPage={currentPage} onNavigate={onNavigate}>
            Start a Project
          </PageLink>
          <PageLink pageKey="privacy" className="footer-bottom-link" currentPage={currentPage} onNavigate={onNavigate}>
            Privacy
          </PageLink>
          <PageLink pageKey="terms" className="footer-bottom-link" currentPage={currentPage} onNavigate={onNavigate}>
            Terms
          </PageLink>
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
