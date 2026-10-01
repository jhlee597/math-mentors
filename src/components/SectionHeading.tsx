export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`text-2xl tracking-tight text-neutral-900 ${eyebrow ? "mt-4" : ""}`}>
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-sm leading-relaxed text-neutral-500">{subtitle}</p>}
    </div>
  );
}
