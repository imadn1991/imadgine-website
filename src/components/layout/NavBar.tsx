"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/denken", label: "Denken" },
  { href: "/samenwerken", label: "Samenwerken" },
  { href: "/over", label: "Over" },
  { href: "/projecten", label: "Projecten" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="bg-paper border-b-4 border-ink sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-none">
        <Link
          href="/"
          className="text-2xl font-black uppercase text-ink font-headline tracking-tighter"
        >
          IMADGINE
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline uppercase tracking-tighter px-2 py-1 transition-all hover:translate-y-0.5 hover:translate-x-0.5 ${
                  isActive
                    ? "text-orange font-black border-b-2 border-orange"
                    : "text-ink font-medium hover:bg-orange hover:text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/samenwerken"
          className="bg-orange text-white px-6 py-2 font-label font-bold uppercase text-sm border-2 border-ink hard-shadow active-shift"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
