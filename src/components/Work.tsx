import type { WorkExperience } from '../types/portfolio';
import { WorkCard } from './WorkCard';

interface WorkProps {
  work: WorkExperience[];
}

export function Work({ work }: WorkProps) {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <h2 id="work-heading" className="section-label">Work experience</h2>
      <div className="work-list" role="list">
        {work.map((job, index) => (
          <WorkCard key={index} work={job} />
        ))}
      </div>
    </section>
  );
}
