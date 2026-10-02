export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-balance font-display text-3xl font-light tracking-[-0.025em] text-neutral-950">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-sm leading-relaxed text-neutral-500">{subtitle}</p>}
    </div>
  );
}
