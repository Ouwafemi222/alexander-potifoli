"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative text-sm font-medium text-text-secondary transition-colors hover:text-accent",
        className
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}
