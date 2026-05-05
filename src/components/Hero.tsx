import { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaBriefcase } from 'react-icons/fa6';
import type { Personal, Contact } from '../types/portfolio';
import { useInView } from '../hooks/useInView';
import { useRef } from 'react';

interface HeroProps {
  personal: Personal;
  contact: Contact;
}

export function Hero({ personal, contact }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section ref={ref} id="hero" className={`hero ${inView ? 'in-view' : ''}`} aria-labelledby="hero-title">
      <div className="hero-header">
        <div className="photo-wrapper">
          <div className="ring ring-outer"></div>
          <div className="ring ring-inner"></div>
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
          <div className="pulse-dot"></div>
        </div>
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
        <a href="#work" className="btn btn-primary">
          <FaBriefcase className="btn-icon" aria-hidden="true" />
          View my work
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <FaLinkedinIn className="btn-icon" aria-hidden="true" />
          LinkedIn
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <FaGithub className="btn-icon" aria-hidden="true" />
          GitHub
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        <a href={`mailto:${contact.email}`} className="btn">
          <FaEnvelope className="btn-icon" aria-hidden="true" />
          Email me
        </a>
      </div>
    </section>
  );
}
