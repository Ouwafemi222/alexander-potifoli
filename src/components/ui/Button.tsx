import { cn } from "@/lib/utils";
import Link from "next/link";

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-hover shadow-soft",
  secondary:
    "bg-bg-secondary text-text-primary hover:bg-card-hover border border-border",
  outline:
    "border border-border text-text-primary hover:border-accent hover:text-accent",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300",
    variants[variant],
    className
  );

  if (href) {
    if (isExternal(href)) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
