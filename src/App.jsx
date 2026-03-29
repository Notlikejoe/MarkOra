import React, { useEffect, useMemo, useState } from 'react';
import { BackgroundOrbs, Footer, Header } from './components/Layout';
import { AboutPage, ContactPage, HomePage, PrivacyPage, ServicesPage, TermsPage, WorkPage } from './pages/pages';

const PAGE_PATHS = {
  home: '/',
  services: '/services',
  work: '/work',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
};

const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_PATHS).map(([page, path]) => [path, page]),
);

const PAGE_META = {
  home: {
    title: 'MarkOra | Growth Systems for Premium MENA Brands',
    description:
      'MarkOra is a Dubai-based marketing agency building brand strategy, content systems, paid media, and social management for premium MENA brands.',
  },
  services: {
    title: 'Services | MarkOra',
    description:
      'Explore MarkOra services across brand strategy, digital marketing, content creation, and social media management.',
  },
  work: {
    title: 'Work | MarkOra',
    description:
      'Review selected MarkOra case studies, campaign systems, and creative work built for premium hospitality, retail, and lifestyle brands.',
  },
  about: {
    title: 'About | MarkOra',
    description:
      'Learn about MarkOra, a Dubai-based marketing partner built to connect strategy, creative, media, and reporting into one growth system.',
  },
  contact: {
    title: 'Contact | MarkOra',
    description:
      'Start a conversation with MarkOra about brand strategy, creative production, paid media, or social growth across the MENA region.',
  },
  privacy: {
    title: 'Privacy Policy | MarkOra',
    description: 'Read how MarkOra handles website inquiries, contact information, and communication data.',
  },
  terms: {
    title: 'Terms of Service | MarkOra',
    description: 'Review the terms governing use of the MarkOra website and communications.',
  },
};

function getPageFromLocation() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  return PATH_TO_PAGE[pathname] ?? 'home';
}

export default function App() {
  const [page, setPage] = useState(getPageFromLocation());

  useEffect(() => {
    const onLocationChange = () => setPage(getPageFromLocation());

    window.addEventListener('popstate', onLocationChange);

    if (window.location.hash) {
      const legacyPage = window.location.hash.replace('#', '').trim().toLowerCase();
      const nextPath = PAGE_PATHS[legacyPage] ?? '/';
      window.history.replaceState({}, '', nextPath);
      onLocationChange();
    }

    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  useEffect(() => {
    const meta = PAGE_META[page];
    const canonicalHref = `${window.location.origin}${PAGE_PATHS[page]}`;

    document.title = meta.title;

    function upsertMeta(selector, attributes) {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }

    function upsertLink(selector, attributes) {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }

    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalHref });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: `${window.location.origin}/og-image.svg` });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: `${window.location.origin}/og-image.svg` });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#0b0f19' });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalHref });
  }, [page]);

  const currentPage = useMemo(() => page, [page]);

  function navigate(nextPage) {
    const nextPath = PAGE_PATHS[nextPage] ?? '/';
    window.history.pushState({}, '', nextPath);
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <BackgroundOrbs />
      <Header currentPage={currentPage} onNavigate={navigate} />
      <main id="main-content" tabIndex="-1">
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigate} />}
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'privacy' && <PrivacyPage />}
        {currentPage === 'terms' && <TermsPage />}
      </main>
      <Footer currentPage={currentPage} onNavigate={navigate} />
    </div>
  );
}
