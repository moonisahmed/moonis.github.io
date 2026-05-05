import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa6';
import type { Contact } from '../types/portfolio';

interface FooterProps {
  name: string;
  contact: Contact;
}

export function Footer({ name, contact }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} {name}</p>
        <div className="footer-links" role="group" aria-label="Social links">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="footer-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
