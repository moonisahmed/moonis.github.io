import type { WorkExperience } from '../types/portfolio';

interface WorkCardProps {
  work: WorkExperience;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <article className="work-card" role="listitem">
      <header className="work-header">
        <h3 className="work-title">{work.title}</h3>
        <time
          className="work-period"
          dateTime={`${work.startDate}/${work.endDate}`}
        >
          {work.period}
        </time>
      </header>
      <p className="work-company">
        {work.company} · {work.location}
      </p>
      <p className="work-desc">{work.description}</p>
      {work.bullets.length > 0 && (
        <ul className="work-bullets" aria-label="Key achievements">
          {work.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
      <ul className="work-stack" aria-label="Technologies used">
        {work.stack.map((tech, index) => (
          <li key={index} className="tag">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
