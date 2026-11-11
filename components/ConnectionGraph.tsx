import type { Company } from "@/lib/types";

export function ConnectionGraph({ company }: { company: Company }) {
  const orgs = company.orgs ?? [];
  if (orgs.length === 0) return null;

  const centerX = 200;
  const centerY = 160;
  const radius = 110;

  const nodes = orgs.map((org, i) => {
    const angle = (i / orgs.length) * Math.PI * 2 - Math.PI / 2;
    return {
      ...org,
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  });

  return (
    <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-5">
      <h2 className="text-sm uppercase tracking-wider text-ink-300">Connection graph</h2>
      <p className="mt-1 text-xs text-ink-300">
        Company linked to associated nonprofits. Click a node label for the source.
      </p>
      <div className="mt-4 flex justify-center">
        <svg viewBox="0 0 400 320" className="w-full max-w-md">
          {nodes.map((n) => (
            <line
              key={`e-${n.name}`}
              x1={centerX}
              y1={centerY}
              x2={n.x}
              y2={n.y}
              stroke="#2BA2C2"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
          ))}
          <circle cx={centerX} cy={centerY} r="36" fill="#073644" stroke="#2BA2C2" strokeWidth="2" />
          <text
            x={centerX}
            y={centerY + 4}
            textAnchor="middle"
            fill="#EBF1F5"
            fontSize="11"
            fontWeight="600"
          >
            {company.shortName}
          </text>
          {nodes.map((n) => (
            <g key={n.name}>
              <circle cx={n.x} cy={n.y} r="28" fill="#151B20" stroke="#5EC8E0" strokeWidth="1.5" />
              <text
                x={n.x}
                y={n.y + 3}
                textAnchor="middle"
                fill="#EBF1F5"
                fontSize="8"
                fontWeight="500"
              >
                {n.name.split(" ")[0]}
              </text>
              <a href={n.sourceUrl} target="_blank" rel="noreferrer">
                <title>{n.name} — {n.relation}</title>
              </a>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
