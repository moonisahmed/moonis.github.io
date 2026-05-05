import type { About as AboutType, SkillGroup } from '../types/portfolio';
import { Stats } from './Stats';
import { Skills } from './Skills';
import { useInView } from '../hooks/useInView';
import { useRef, useEffect } from 'react';

interface AboutProps {
  about: AboutType;
  skills: SkillGroup[];
}

export function About({ about, skills }: AboutProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  useEffect(() => {
    if (!inView) return;

    const statElements = ref.current?.querySelectorAll('.stat-val');
    if (!statElements) return;

    statElements.forEach((el) => {
      const text = el.textContent || '';
      const match = text.match(/(\d+(?:\.\d+)?)/);
      if (!match) return;

      const target = parseFloat(match[1]);
      if (isNaN(target)) return;

      let current = 0;
      const duration = 1000; // 1 second
      const start = Date.now();

      const animate = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        current = target * easeOut;

        el.textContent = Math.floor(current).toString() + (text.includes('K+') ? 'K+' : text.includes('%') ? '%' : text.includes(' yrs') ? ' yrs' : '');

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          el.textContent = text; // restore original
        }
      };

      requestAnimationFrame(animate);
    });
  }, [inView]);

  return (
    <section ref={ref} id="about" className={`section ${inView ? 'in-view' : ''}`} aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-label">About</h2>
      <div className="about-grid">
        <div className="about-text">
          {about.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Stats stats={about.stats} />
      </div>
      <Skills skills={skills} />
    </section>
  );
}
