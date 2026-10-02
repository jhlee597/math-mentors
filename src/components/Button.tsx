import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  /** primary: ink slab · secondary: ink outline · inverse/inverseOutline: for ink fields */
  variant?: "primary" | "secondary" | "inverse" | "inverseOutline";
  size?: "md" | "lg";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  /** Swap the trailing arrow for another icon (or null for none). */
  icon?: ReactNode;
  /** Extra attributes for a plain download link. */
  download?: boolean;
};

const base =
  "group inline-flex items-center justify-between gap-8 border-2 font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "border-ink bg-ink text-paper hover:bg-neutral-700 hover:border-neutral-700",
  secondary: "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
  inverse: "border-paper bg-paper text-ink hover:bg-neutral-300 hover:border-neutral-300",
  inverseOutline: "border-paper/60 bg-transparent text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-13 px-5 text-base",
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
  icon,
  download,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const trailing =
    icon === undefined ? (
      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
    ) : (
      icon
    );
  const content = (
    <>
      <span>{children}</span>
      {trailing}
    </>
  );

  if (href) {
    const external = /^https?:\/\//.test(href);
    if (download || /\.pdf$/.test(href)) {
      return (
        <a href={href} download={download} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
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
