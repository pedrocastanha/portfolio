import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Stack from './components/Stack';
import Process from './components/Process';
import Contact from './components/Contact';
import ProjectPage from './components/ProjectPage';
import BlogPost from './components/BlogPost';

function App() {
  const path = window.location.pathname;
  const isProjectPage = path.startsWith('/projetos/');
  const isBlogPost = path.startsWith('/blog/');
  const rawProjectSlug = isProjectPage ? path.replace('/projetos/', '') : '';
  const blogSlug = isBlogPost ? path.replace('/blog/', '').replace(/\/$/, '') : '';
  const projectAliases = {
    'bot-de-matricula': 'lead-qualifier',
    'olivia-agente-conversacional': 'duda',
    thessie: 'duda',
  };
  const projectSlug = projectAliases[rawProjectSlug] ?? rawProjectSlug;
  const isSubPage = isProjectPage || isBlogPost;

  return (
    <>
      <Nav isProjectPage={isSubPage} />
      {isProjectPage ? (
        <ProjectPage slug={projectSlug} />
      ) : isBlogPost ? (
        <BlogPost slug={blogSlug} />
      ) : (
        <main>
          <Hero />
          <Marquee />
          <Projects />
          <Blog />
          <Stack />
          <Process />
          <Contact />
        </main>
      )}
    </>
  );
}

export default App;
