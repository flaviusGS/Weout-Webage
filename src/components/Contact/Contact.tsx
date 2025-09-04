import "./contact.css";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="contact-wrap">
      <div className="container contact-grid">
        <div className="contact-block address">
          <h4 className="contact-label">CONTACT</h4>
          <p>
            Ceyrat 35 B Street <br />
            City Oradea <br />
            Romania, 417598,
            <br />
            Phone: 0758883530
          </p>
        </div>
        <div className="contact-block email">
          <p className="contact-email">
            <a href="mailto:4eightysix@gmail.com">4eightysix@gmail.com</a>
          </p>
        </div>
        {/* <div className="contact-block socials">
          <nav className="contact-socials" aria-label="Social links">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              linkedin
            </a>
          </nav>
        </div> */}
        <div className="contact-foot">
          © {year} — 4EightySix | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
