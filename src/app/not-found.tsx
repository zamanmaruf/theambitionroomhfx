import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <Logo variant="mark" size={64} />
      <h1 className="mt-8 font-display text-4xl tracking-wide text-ivory uppercase sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-sm text-[color:var(--body)]">
        This path isn&apos;t part of The Ambition Room.
      </p>
      <Link href="/" className="btn-primary mt-10">
        Return home
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </main>
  );
}
