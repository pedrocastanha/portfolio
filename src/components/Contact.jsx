import { useState } from 'react';
import './Contact.css';

const email = 'pedrocastanhacosta1945@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <>
      <section className="contact-section" id="contato">
        <div className="contact-status" data-reveal>
          <i />
          <span>Aberto a conversas sobre AI Engineering, plataforma de IA e liderança técnica.</span>
        </div>
        <div className="contact-main" data-reveal>
          <p>04 / Contato</p>
          <h2>Tem um problema que<br />merece sair do <em>slide?</em></h2>
          <div className="contact-actions">
            <a href={`mailto:${email}`} className="contact-email">{email}<span>↗</span></a>
            <button type="button" onClick={copyEmail} className="copy-email" aria-live="polite">
              {copied ? 'E-mail copiado ✓' : 'Copiar e-mail'}
            </button>
          </div>
        </div>
        <div className="contact-links" data-reveal>
          <a href="https://www.linkedin.com/in/pedro-castanheira-costa-1946b8214/" target="_blank" rel="noreferrer">
            <span>LinkedIn</span><strong>Experiência e contato</strong><b>↗</b>
          </a>
          <a href="https://github.com/pedrocastanha" target="_blank" rel="noreferrer">
            <span>GitHub</span><strong>Código e produtos abertos</strong><b>↗</b>
          </a>
        </div>
      </section>
      <footer className="site-footer">
        <span>Pedro Castanheira Costa</span>
        <span>AI Engineer · Maringá, PR</span>
        <span>© 2026</span>
      </footer>
    </>
  );
}
