interface Props {
  holeKey: string;
  shaftKey: string;
  holeUpper: number; // mm
  holeLower: number; // mm
  shaftUpper: number; // mm
  shaftLower: number; // mm
}

const SCALE = 1.6; // px per micron
const ZERO_Y = 210;

export default function ToleranceDiagram({
  holeKey,
  shaftKey,
  holeUpper,
  holeLower,
  shaftUpper,
  shaftLower,
}: Props) {
  const holeRectY = ZERO_Y - holeUpper * 1000 * SCALE;
  const holeRectH = Math.max((holeUpper - holeLower) * 1000 * SCALE, 2);

  const shaftRectY = ZERO_Y - shaftUpper * 1000 * SCALE;
  const shaftRectH = Math.max((shaftUpper - shaftLower) * 1000 * SCALE, 2);

  return (
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1={ZERO_Y} x2="380" y2={ZERO_Y} stroke="#5a8bb0" strokeWidth="1.4" strokeDasharray="6,4" />
      <text x="385" y={ZERO_Y + 4} className="dim-text" fontSize="11">
        0
      </text>
      <text x="20" y={ZERO_Y + 4} className="dim-text" fontSize="11" textAnchor="end">
        呼び径
      </text>

      <rect
        x="150"
        y={holeRectY}
        width="70"
        height={holeRectH}
        fill="#ffb454"
        fillOpacity="0.35"
        stroke="#ffb454"
        strokeWidth="1.4"
      />
      <text x="185" y={holeRectY - 8} textAnchor="middle" className="dim-text hi" fontSize="12">
        穴 {holeKey}
      </text>

      <rect
        x="230"
        y={shaftRectY}
        width="70"
        height={shaftRectH}
        fill="#4fd1c5"
        fillOpacity="0.35"
        stroke="#4fd1c5"
        strokeWidth="1.4"
      />
      <text
        x="265"
        y={shaftRectY + shaftRectH + 24}
        textAnchor="middle"
        className="dim-text"
        fontSize="12"
        fill="#4fd1c5"
      >
        軸 {shaftKey}
      </text>
    </svg>
  );
}
