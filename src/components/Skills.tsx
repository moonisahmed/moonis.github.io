import type { SkillGroup } from '../types/portfolio';

interface SkillsProps {
  skills: SkillGroup[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <div className="skills-section" role="region" aria-label="Skills">
      <div className="skills-grid">
        {skills.map((group, index) => (
          <div key={index} className="skill-group">
            <h3>{group.category}</h3>
            <ul className="skill-tags" aria-label={`${group.category} skills`}>
              {group.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
