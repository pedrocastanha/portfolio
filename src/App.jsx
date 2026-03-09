import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Process from './components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Stack />
        <Process />
        <Contact />
      </main>
    </>
  );
}

export default App;
