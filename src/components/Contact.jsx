import './Contact.css';

export default function Contact() {
  return (
    <>
      <section className="section" id="contato">
        <div className="contact-lay">
          <div>
            <p className="s-label">// disponível agora</p>
            <div className="contact-big">Vamos<br/><em>construir</em><br/>algo.</div>
          </div>
          <div className="c-links">
            <a href="https://www.linkedin.com/in/pedro-castanheira-1946b8214/" target="_blank" rel="noreferrer" className="c-link">
              <div><span className="cl-type">LinkedIn</span><span className="cl-val">Pedro Castanheira Costa</span></div>
              <span className="cl-arrow">↗</span>
            </a>
            <a href="https://github.com/pedrocastanha" target="_blank" rel="noreferrer" className="c-link">
              <div><span className="cl-type">GitHub</span><span className="cl-val">@pedrocastanha</span></div>
              <span className="cl-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <span>Maringá, PR · Brasil</span>
        <div className="f-mark">Pedro Castanheira</div>
        <span>© 2026</span>
      </footer>
    </>
  );
}
