import { contents, resolveRoute } from './content';
import Nav from './components/Nav';
import Hero from './components/Hero';
import EvidenceGraph from './components/EvidenceGraph';
import Work from './components/Work';
import Method from './components/Method';
import Path from './components/Path';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CasePage from './components/CasePage';

function App({ url }) {
  const route = resolveRoute(url);
  const c = contents[route.lang];

  return (
    <>
      <a className="skip-link" href="#main">
        {c.ui.skip}
      </a>
      <Nav c={c} route={route} />
      <main id="main" tabIndex={-1}>
        {route.page === 'home' ? (
          <>
            <Hero c={c} />
            <Work c={c} />
            <EvidenceGraph c={c} />
            <Method c={c} />
            <Path c={c} />
            <Contact c={c} />
          </>
        ) : (
          <CasePage c={c} slug={route.slug} />
        )}
      </main>
      <Footer c={c} />
    </>
  );
}

export default App;
