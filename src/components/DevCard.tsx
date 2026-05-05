import './DevCard.css';

const BAR_HEIGHTS: number[] = [40, 70, 55, 90, 60, 80, 45, 95, 65, 75];

const TAGS: string[] = [
  'React',
  'TypeScript',
  'Node.js',
  'GraphQL',
  'AWS',
  'PostgreSQL',
];

export function DevCard() {
  return (
    <div className="dev-card">
      {/* Section 1 — avatar + identity */}
      <div className="dev-card-header">
        <div className="dev-card-avatar-wrapper">
          <img
            src="/photo.jpg"
            alt="Moonis Ahmed"
            className="dev-card-avatar"
            width={44}
            height={44}
          />
          <div className="dev-card-pip" aria-hidden="true" />
        </div>
        <div>
          <p className="dev-card-name">Moonis Ahmed</p>
          <p className="dev-card-handle">@moonisahmed</p>
        </div>
      </div>

      {/* Section 2 — activity bars */}
      <div className="dev-card-bars" aria-hidden="true">
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="dev-card-bar"
            style={{
              height: `${h}%`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>

      {/* Section 3 — tech tags */}
      <div className="dev-card-tags">
        {TAGS.map((tag, i) => (
          <span
            key={tag}
            className="dev-card-tag"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
