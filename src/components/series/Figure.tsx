import type { CoverFigure } from "@/data/resources";

/**
 * The diagram printed on a volume's cover: a real figure from the guide's
 * topic, drawn in currentColor on a 100x100 field and set off-center so the
 * rest of the cover stays empty. Strokes don't scale, so the line weight is
 * the same on a 64px spine thumbnail and a 400px cover.
 */
export default function Figure({
  kind,
  stroke = 1.5,
  className = "",
}: {
  kind: CoverFigure;
  stroke?: number;
  className?: string;
}) {
  const line = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    vectorEffect: "non-scaling-stroke" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const thin = { ...line, strokeWidth: Math.max(stroke * 0.5, 0.75) };
  const dashed = { ...thin, strokeDasharray: "2 3" };

  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      {FIGURES[kind]({ line, thin, dashed })}
    </svg>
  );
}

type Stroke = {
  fill: string;
  stroke: string;
  strokeWidth: number;
  vectorEffect: "non-scaling-stroke";
  strokeLinecap: "round";
  strokeLinejoin: "round";
  strokeDasharray?: string;
};
type Strokes = Record<"line" | "thin" | "dashed", Stroke>;

const axes = (s: Strokes, x = 50, y = 50) => (
  <>
    <path d={`M4 ${y}H96`} {...s.thin} />
    <path d={`M${x} 96V4`} {...s.thin} />
  </>
);

const FIGURES: Record<CoverFigure, (s: Strokes) => React.ReactNode> = {
  // z = e^{iθ} on the unit circle
  "complex-plane": (s) => {
    const cx = 44, cy = 56, r = 32, t = (38 * Math.PI) / 180;
    const zx = cx + r * Math.cos(t), zy = cy - r * Math.sin(t);
    return (
      <>
        {axes(s, cx, cy)}
        <circle cx={cx} cy={cy} r={r} {...s.line} />
        <path d={`M${cx} ${cy}L${zx} ${zy}`} {...s.line} />
        <path d={`M${zx} ${zy}V${cy}M${zx} ${zy}H${cx}`} {...s.dashed} />
        <path d={`M${cx + 9} ${cy}A9 9 0 0 0 ${cx + 9 * Math.cos(t)} ${cy - 9 * Math.sin(t)}`} {...s.thin} />
        <circle cx={zx} cy={zy} r={2.4} fill="currentColor" />
      </>
    );
  },
  // y = x² − 2 with its vertex
  parabola: (s) => (
    <>
      {axes(s, 46, 70)}
      <path d="M18 8Q46 132 74 8" {...s.line} />
      <path d="M32 46H60" {...s.dashed} />
      <circle cx={46} cy={70} r={2.4} fill="currentColor" />
    </>
  ),
  // a cubic crossing the axis at three roots
  polynomial: (s) => (
    <>
      {axes(s, 50, 54)}
      <path d="M8 92C22 4 38 6 50 54S78 104 92 14" {...s.line} />
      {[15.5, 50, 84.3].map((x) => (
        <circle key={x} cx={x} cy={54} r={2.2} fill="currentColor" />
      ))}
    </>
  ),
  // a triangle, its incircle and the bisectors meeting at the incenter
  incircle: (s) => (
    <>
      <path d="M10 86L92 86L58 14Z" {...s.line} />
      <circle cx={54.45} cy={62.21} r={23.79} {...s.thin} />
      <path d="M10 86L54.45 62.21M92 86L54.45 62.21M58 14L54.45 62.21" {...s.dashed} />
      <circle cx={54.45} cy={62.21} r={2.2} fill="currentColor" />
    </>
  ),
  // a curve and its tangent at a point
  tangent: (s) => (
    <>
      {axes(s, 14, 86)}
      <path d="M14 78C34 74 44 20 62 22S86 60 96 40" {...s.line} />
      <path d="M22 77.3L64 2.3" {...s.thin} />
      <circle cx={43.1} cy={39.7} r={2.4} fill="currentColor" />
    </>
  ),
  // a definite integral approximated by rectangles
  area: (s) => (
    <>
      {axes(s, 12, 86)}
      {/* left-endpoint rectangles: heights are the curve's value at each x */}
      {[30, 42, 54, 66].map((x, i) => {
        const h = [32.5, 44.6, 52.4, 50.9][i];
        return <rect key={x} x={x} y={86 - h} width={12} height={h} {...s.thin} fill="currentColor" fillOpacity={0.12} />;
      })}
      <path d="M12 70C30 58 48 26 64 34S86 62 96 54" {...s.line} />
      <path d="M30 86V30M78 86V40" {...s.dashed} />
    </>
  ),
  // the normal curve with ±1σ marked
  "bell-curve": (s) => (
    <>
      <path d="M4 84H96" {...s.thin} />
      <path d="M4 83C26 83 34 18 50 18S74 83 96 83" {...s.line} />
      <path d="M36 84V48M64 84V48" {...s.dashed} />
      <path d="M50 84V18" {...s.thin} />
    </>
  ),
  // a lattice path through a grid of points
  lattice: (s) => (
    <>
      {Array.from({ length: 6 }, (_, i) =>
        Array.from({ length: 6 }, (_, j) => (
          <circle key={`${i}-${j}`} cx={16 + i * 14} cy={16 + j * 14} r={1.6} fill="currentColor" />
        ))
      )}
      <path d="M16 86V72H44V44H58V30H86V16" {...s.line} />
    </>
  ),
};
