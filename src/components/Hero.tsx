import type { Personal, Contact } from '../types/portfolio';

interface HeroProps {
  personal: Personal;
  contact: Contact;
}

export function Hero({ personal, contact }: HeroProps) {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-header">
        <img
          src="/photo.jpg"
          alt={`Photo of ${personal.name}`}
          className="hero-photo"
          width={140}
          height={140}
        />
        <div>
          <p className="eyebrow">
            {personal.location} · {personal.availability}
          </p>
          <h1 id="hero-title">{personal.title.replace('Software Engineer', 'Software\nEngineer').split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br aria-hidden="true" />}
            </span>
          ))}</h1>
        </div>
      </div>
      <p className="tagline">{personal.tagline}</p>
      <div className="hero-links" role="group" aria-label="Quick links">
        <a href="#work" className="btn btn-primary">View my work</a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          LinkedIn
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          GitHub
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        <a href={`mailto:${contact.email}`} className="btn">
          Email me
        </a>
      </div>
    </section>
  );
}
