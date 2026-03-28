import React, { useEffect, useMemo, useState } from 'react';
import { BackgroundOrbs, Footer, Header } from './components/Layout';
import { AboutPage, ContactPage, HomePage, ServicesPage, WorkPage } from './pages/pages';

const VALID_PAGES = new Set(['home', 'services', 'work', 'about', 'contact']);

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '').trim().toLowerCase();
  return VALID_PAGES.has(hash) ? hash : 'home';
}

export default function App() {
  const [page, setPage] = useState(getPageFromHash());

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const currentPage = useMemo(() => page, [page]);

  function navigate(nextPage) {
    window.location.hash = nextPage === 'home' ? '' : nextPage;
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app-shell">
      <BackgroundOrbs />
      <Header currentPage={currentPage} onNavigate={navigate} />
      <main>
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigate} />}
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
