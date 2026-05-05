import { useState, useCallback, useEffect } from 'react';

interface NavbarProps {
  name: string;
}

export function Navbar({ name }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-name" aria-label={`${name} - Go to top`}>
          {name}
        </a>
        <button
          className="nav-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={toggleMenu}
        >
          <span aria-hidden="true" />
        </button>
        <div
          id="nav-menu"
          className={`nav-links${isOpen ? ' open' : ''}`}
          role="menubar"
        >
          <a href="#about" role="menuitem" onClick={closeMenu}>About</a>
          <a href="#work" role="menuitem" onClick={closeMenu}>Work</a>
          <a href="#contact" role="menuitem" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
