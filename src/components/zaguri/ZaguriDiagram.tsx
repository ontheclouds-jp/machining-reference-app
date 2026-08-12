import { ZaguriEntry } from "@/types";

interface Props {
  data: ZaguriEntry;
}

export default function ZaguriDiagram({ data }: Props) {
  return (
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="hatchPattern"
          patternUnits="userSpaceOnUse"
          width="8"
          height="8"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="8" stroke="#2a5578" strokeWidth="1.4" />
        </pattern>
        <marker id="arrowStart" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto">
          <path d="M7,0 L7,6 L1,3 z" className="dim-arrow" />
        </marker>
        <marker id="arrowEnd" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M1,0 L1,6 L7,3 z" className="dim-arrow" />
        </marker>
      </defs>

      <g>
        <rect x="30" y="120" width="115" height="260" className="hatch" stroke="#5a8bb0" strokeWidth="1.2" />
        <rect x="275" y="120" width="115" height="260" className="hatch" stroke="#5a8bb0" strokeWidth="1.2" />
        <line x1="30" y1="120" x2="145" y2="120" className="steel-edge" />
        <line x1="275" y1="120" x2="390" y2="120" className="steel-edge" />
      </g>

      <g>
        <line className="steel-edge" x1="145" y1="120" x2="145" y2="170" />
        <line className="steel-edge" x1="275" y1="120" x2="275" y2="170" />
        <line className="steel-edge" x1="145" y1="170" x2="180" y2="170" />
        <line className="steel-edge" x1="240" y1="170" x2="275" y2="170" />
      </g>

      <g>
        <line className="steel-edge" x1="180" y1="170" x2="180" y2="380" />
        <line className="steel-edge" x1="240" y1="170" x2="240" y2="380" />
      </g>

      <rect x="160" y="100" width="100" height="40" fill="#3a6a92" stroke="#8fc4e8" strokeWidth="1.4" />
      <rect x="192" y="140" width="36" height="230" fill="#3a6a92" stroke="#8fc4e8" strokeWidth="1.4" />

      <line
        x1="160"
        y1="80"
        x2="260"
        y2="80"
        className="dim-line"
        markerStart="url(#arrowStart)"
        markerEnd="url(#arrowEnd)"
      />
      <line x1="160" y1="70" x2="160" y2="100" className="dim-line" strokeDasharray="2,2" />
      <line x1="260" y1="70" x2="260" y2="100" className="dim-line" strokeDasharray="2,2" />
      <text x="210" y="72" textAnchor="middle" className="dim-text">
        dk {data.dk}
      </text>

      <line
        x1="145"
        y1="55"
        x2="275"
        y2="55"
        className="dim-line"
        markerStart="url(#arrowStart)"
        markerEnd="url(#arrowEnd)"
      />
      <line x1="145" y1="45" x2="145" y2="120" className="dim-line" strokeDasharray="2,2" />
      <line x1="275" y1="45" x2="275" y2="120" className="dim-line" strokeDasharray="2,2" />
      <text x="210" y="47" textAnchor="middle" className="dim-text hi">
        D {data.D}
      </text>

      <line
        x1="180"
        y1="400"
        x2="240"
        y2="400"
        className="dim-line"
        markerStart="url(#arrowStart)"
        markerEnd="url(#arrowEnd)"
      />
      <line x1="180" y1="380" x2="180" y2="408" className="dim-line" strokeDasharray="2,2" />
      <line x1="240" y1="380" x2="240" y2="408" className="dim-line" strokeDasharray="2,2" />
      <text x="210" y="415" textAnchor="middle" className="dim-text">
        d&prime; {data.dprime}
      </text>

      <line
        x1="300"
        y1="120"
        x2="300"
        y2="170"
        className="dim-line"
        markerStart="url(#arrowStart)"
        markerEnd="url(#arrowEnd)"
      />
      <line x1="275" y1="120" x2="305" y2="120" className="dim-line" strokeDasharray="2,2" />
      <line x1="275" y1="170" x2="305" y2="170" className="dim-line" strokeDasharray="2,2" />
      <text x="312" y="150" textAnchor="start" className="dim-text hi">
        H2 {data.H2}
      </text>

      <line
        x1="330"
        y1="100"
        x2="330"
        y2="140"
        className="dim-line"
        markerStart="url(#arrowStart)"
        markerEnd="url(#arrowEnd)"
      />
      <line x1="260" y1="100" x2="335" y2="100" className="dim-line" strokeDasharray="2,2" />
      <line x1="275" y1="140" x2="335" y2="140" className="dim-line" strokeDasharray="2,2" />
      <text x="342" y="124" textAnchor="start" className="dim-text">
        K {data.K}
      </text>
    </svg>
  );
}
