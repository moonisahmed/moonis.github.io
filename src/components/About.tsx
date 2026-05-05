import type { About as AboutType, SkillGroup } from '../types/portfolio';
import { Stats } from './Stats';
import { Skills } from './Skills';

interface AboutProps {
  about: AboutType;
  skills: SkillGroup[];
}

export function About({ about, skills }: AboutProps) {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
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
