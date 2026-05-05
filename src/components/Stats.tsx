import type { Stat } from '../types/portfolio';

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="stats">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="stat-val">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
