import { useState } from 'react';
import type { Personal, Contact } from '../types/portfolio';

interface HeroProps {
  personal: Personal;
  contact: Contact;
}

export function Hero({ personal, contact }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-header">
        {!imageError ? (
          <img
            src="/photo.jpg"
            alt={`Photo of ${personal.name}`}
            className={`hero-photo${imageLoaded ? ' loaded' : ''}`}
            width={140}
            height={140}
            loading="eager"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="hero-photo hero-photo-fallback" aria-hidden="true">
            {personal.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="eyebrow">
            {personal.location} · {personal.availability}
          </p>
          <h1 id="hero-title">
            {personal.titleDisplay.map((line, i) => (
              <span key={i}>
                {line}
                {i < personal.titleDisplay.length - 1 && <br aria-hidden="true" />}
              </span>
            ))}
          </h1>
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
