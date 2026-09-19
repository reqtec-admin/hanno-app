"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Directory" },
  { href: "/assess", label: "Stack assess" },
  { href: "/alternatives", label: "Alternatives" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/methodology", label: "Methodology" },
];

export function Nav() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07090b]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-teal-400 text-sm font-black text-ink-950">
            H
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-ink-50">HANNO</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const active = path === l.href || (l.href !== "/" && path.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3 py-1.5 text-sm ${
                  active ? "bg-white/10 text-teal-300" : "text-ink-300 hover:text-ink-50"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <a
          href="https://www.reqtec.com/products/hanno"
          className="rounded-full bg-teal-400 px-3 py-1.5 text-sm font-medium text-ink-950"
        >
          REQtec
        </a>
      </div>
      <nav className="flex gap-1 overflow-x-auto px-4 pb-3 md:hidden">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1 text-xs text-ink-300"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
