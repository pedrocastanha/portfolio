import { useState } from 'react';
import { LINKS } from '../content';
import { Scribble } from '../sketch/Sketch';
import './Contact.css';

function Contact({ c }) {
  const k = c.contact;
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(k.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${k.email}`;
    }
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="section__inner contact__inner">
        <p className="eyebrow">{k.kicker}</p>
        <h2 id="contact-title" className="section__title contact__title">
          {k.title}
        </h2>
        <p className="section__lede">{k.text}</p>

        <div className="contact__email">
          <a href={`mailto:${k.email}`} className="contact__mail">
            {k.email}
            <Scribble id="contact-scribble" w={420} h={70} />
          </a>
          <button type="button" className="btn btn--small" onClick={copy} aria-live="polite">
            {copied ? k.copied : k.copy}
          </button>
        </div>

        <div className="hero__ctas">
          <a className="btn btn--primary" href={LINKS.linkedin} rel="me noopener" target="_blank">
            LinkedIn
          </a>
          <a className="btn" href={LINKS.github} rel="me noopener" target="_blank">
            GitHub
          </a>
        </div>
        <p className="contact__location">{k.location}</p>
      </div>
    </section>
  );
}

export default Contact;
