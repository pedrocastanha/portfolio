import { useEffect } from 'react';
import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Contact from './components/Contact';
import ProjectPage from './components/ProjectPage';

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  });
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const isProjectPage = path.startsWith('/projetos/');
  const rawProjectSlug = isProjectPage ? path.replace('/projetos/', '') : '';
  const aliases = {
    'git-analyzer': 'gitcast'
  };
  const projectSlug = aliases[rawProjectSlug] ?? rawProjectSlug;

  useReveal();

  return (
    <>
      <Nav isProjectPage={isProjectPage} />
      {isProjectPage ? (
        <ProjectPage slug={projectSlug} />
      ) : (
        <main id="main-content">
          <Hero />
          <Projects />
          <Experience />
          <Stack />
          <Contact />
        </main>
      )}
    </>
  );
}

export default App;
