import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa6';
import type { Contact as ContactType, Personal } from '../types/portfolio';

interface ContactProps {
  contact: ContactType;
  location: Personal['location'];
}

export function Contact({ contact, location }: ContactProps) {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-label">Contact</h2>
      <div className="contact-inner">
        <p>
          I'm currently open to new opportunities. Whether it's a full-time
          role, a contract, or just a conversation — feel free to reach out.
        </p>
        <div className="contact-links" role="group" aria-label="Contact options">
          <a href={`mailto:${contact.email}`} className="btn btn-primary">
            <FaEnvelope className="btn-icon" aria-hidden="true" />
            {contact.email}
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
        </div>
        <p className="contact-location">Based in {location}</p>
      </div>
    </section>
  );
}
