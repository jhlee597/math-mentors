import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "md" | "lg";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

const base =
  "group inline-flex items-center gap-3 rounded-md transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-stone-900 text-stone-50 hover:bg-accent",
  secondary:
    "border border-stone-300 bg-transparent text-stone-900 hover:border-stone-900",
  inverse: "bg-background text-stone-900 hover:bg-white",
  ghost: "text-stone-600 hover:text-stone-900",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-4 py-2.5 text-[13px]",
  lg: "px-5 py-3 text-sm",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
        &rarr;
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
