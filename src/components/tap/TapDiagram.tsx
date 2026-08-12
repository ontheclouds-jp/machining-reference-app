import { TapEntry } from "@/types";

interface Props {
  entry: TapEntry | undefined;
}

function buildTeeth(xWall: number, xTip: number) {
  const lines: { y: number }[] = [];
  for (let y = 70; y < 350; y += 18) {
    lines.push({ y });
  }
  return lines.map(({ y }) => (
    <line
      key={y}
      x1={xWall}
      y1={y}
      x2={xTip}
      y2={y + 9}
      className="steel-edge"
    />
  ));
}

export default function TapDiagram({ entry }: Props) {
  const drillLabel = entry ? `φ${entry.drill}` : "-";
  const pitchLabel = entry ? `P ${entry.pitch}` : "-";

  return (
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="hatchPattern2"
          patternUnits="userSpaceOnUse"
          width="8"
          height="8"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="8" stroke="#2a5578" strokeWidth="1.4" />
        </pattern>
        <marker id="arrowStart2" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto">
          <path d="M7,0 L7,6 L1,3 z" className="dim-arrow" />
        </marker>
        <marker id="arrowEnd2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M1,0 L1,6 L7,3 z" className="dim-arrow" />
        </marker>
      </defs>

      <rect x="30" y="60" width="115" height="320" fill="url(#hatchPattern2)" stroke="#5a8bb0" strokeWidth="1.2" />
      <rect x="275" y="60" width="115" height="320" fill="url(#hatchPattern2)" stroke="#5a8bb0" strokeWidth="1.2" />
      <line x1="30" y1="60" x2="145" y2="60" className="steel-edge" />
      <line x1="275" y1="60" x2="390" y2="60" className="steel-edge" />
      <line x1="145" y1="60" x2="145" y2="380" className="steel-edge" />
      <line x1="275" y1="60" x2="275" y2="380" className="steel-edge" />
      <path d="M145,360 L210,380 L275,360" className="steel-edge" />

      <g>{buildTeeth(145, 158)}</g>
      <g>{buildTeeth(275, 262)}</g>

      <line
        x1="145"
        y1="40"
        x2="275"
        y2="40"
        className="dim-line"
        markerStart="url(#arrowStart2)"
        markerEnd="url(#arrowEnd2)"
      />
      <line x1="145" y1="30" x2="145" y2="60" className="dim-line" strokeDasharray="2,2" />
      <line x1="275" y1="30" x2="275" y2="60" className="dim-line" strokeDasharray="2,2" />
      <text x="210" y="32" textAnchor="middle" className="dim-text hi">
        {drillLabel}
      </text>

      <line
        x1="300"
        y1="150"
        x2="300"
        y2="180"
        className="dim-line"
        markerStart="url(#arrowStart2)"
        markerEnd="url(#arrowEnd2)"
      />
      <text x="312" y="170" textAnchor="start" className="dim-text">
        {pitchLabel}
      </text>
    </svg>
  );
}
