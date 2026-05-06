import type { Stat } from '../types/portfolio';

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <dl className="stats">
      {stats.map((stat, index) => (
        <div key={index}>
          <dd className="stat-val">{stat.value}</dd>
          <dt className="stat-label">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
