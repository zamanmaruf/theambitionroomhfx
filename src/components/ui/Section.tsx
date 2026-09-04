import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  as?: "section" | "div" | "footer";
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  eyebrow,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`relative scroll-mt-24 ${className}`.trim()}>
      <div
        className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 ${containerClassName}`.trim()}
      >
        {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
        {children}
      </div>
    </Tag>
  );
}
