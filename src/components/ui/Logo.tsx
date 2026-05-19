import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const LOGO_PATH = "/brand/logo.png";

const SIZES = {
  sm: 40,
  md: 48,
  lg: 72,
  xl: 160,
} as const;

type LogoProps = {
  size?: keyof typeof SIZES;
  href?: string | null;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  onClick?: () => void;
};

export function Logo({
  size = "md",
  href = "/",
  className,
  imageClassName,
  priority = false,
  onClick,
}: LogoProps) {
  const px = SIZES[size];
  const useCustomSize = Boolean(imageClassName);

  const image = (
    <Image
      src={LOGO_PATH}
      alt={`${BRAND.name} — Graphic Designer logo`}
      width={px}
      height={px}
      priority={priority}
      className={cn("object-contain", imageClassName)}
      style={useCustomSize ? undefined : { width: px, height: px }}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90",
          className
        )}
      >
        {image}
      </Link>
    );
  }

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      {image}
    </span>
  );
}
