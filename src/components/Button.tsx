import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  /** Swap the trailing arrow for another icon (or null for none). */
  icon?: ReactNode;
};

const base =
  "group inline-flex items-center justify-between gap-10 transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-neutral-950 text-white hover:bg-neutral-800 active:bg-neutral-700",
  secondary:
    "border border-neutral-300 bg-transparent text-neutral-900 hover:border-neutral-900 active:bg-neutral-100",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "min-h-11 px-5 text-[13px]",
  lg: "min-h-12 px-6 text-sm",
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
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const trailing =
    icon === undefined ? (
      <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
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
