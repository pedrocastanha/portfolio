import { LINKS } from '../content';

function Footer({ c }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} Pedro Castanheira Costa</p>
        <p>{c.footer.note}</p>
        <a href={LINKS.source} rel="noopener" target="_blank">
          {c.footer.source}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
