export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  /** Optional section number shown in the accent color, e.g. "01". */
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="eyebrow">
          {index && <span className="text-accent">{index} / </span>}
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl tracking-tight text-stone-900 ${eyebrow ? "mt-4" : ""}`}>
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-sm leading-relaxed text-stone-500">{subtitle}</p>}
    </div>
  );
}
