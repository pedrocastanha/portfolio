import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Process from './components/Process';
import Contact from './components/Contact';
import ProjectPage from './components/ProjectPage';

function App() {
  const path = window.location.pathname;
  const isProjectPage = path.startsWith('/projetos/');
  const rawProjectSlug = isProjectPage ? path.replace('/projetos/', '') : '';
  const projectAliases = {
    'bot-de-matricula': 'lead-qualifier',
    'olivia-agente-conversacional': 'duda',
    thessie: 'duda'
  };
  const projectSlug = projectAliases[rawProjectSlug] ?? rawProjectSlug;

  return (
    <>
      <Nav isProjectPage={isProjectPage} />
      {isProjectPage ? (
        <ProjectPage slug={projectSlug} />
      ) : (
        <main>
          <Hero />
          <Marquee />
          <Projects />
          <Stack />
          <Process />
          <Contact />
        </main>
      )}
    </>
  );
}

export default App;
