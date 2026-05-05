import { FaLinkedinIn, FaGithub, FaEnvelope, FaBriefcase } from 'react-icons/fa6';
import type { Personal, Contact } from '../types/portfolio';
import { useInView } from '../hooks/useInView';
import { useRef } from 'react';
import { DevCard } from './DevCard';

interface HeroProps {
  personal: Personal;
  contact: Contact;
}

export function Hero({ personal, contact }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section ref={ref} id="hero" className={`hero ${inView ? 'in-view' : ''}`} aria-labelledby="hero-title">
      <div className="hero-header">
        <DevCard />
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
