import Image from "next/image";

type LogoProps = {
  /** Display width in pixels */
  size?: number;
  className?: string;
  priority?: boolean;
  /** Compact transparent mark for navigation */
  variant?: "full" | "mark";
};

export function Logo({
  size = 48,
  className = "",
  priority = false,
  variant = "full",
}: LogoProps) {
  const src = variant === "mark" ? "/logo-mark.png" : "/logo.jpg";

  return (
    <Image
      src={src}
      alt="The Ambition Room"
      width={variant === "mark" ? 520 : 1024}
      height={variant === "mark" ? 520 : 1024}
      priority={priority}
      sizes={`${size}px`}
      className={`select-none object-contain ${className}`.trim()}
      style={{ width: size, height: "auto", maxWidth: "100%" }}
    />
  );
}
