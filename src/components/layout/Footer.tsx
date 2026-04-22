"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink border-t-4 border-ink text-paper">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-black text-paper font-headline uppercase tracking-tight">
            IMADGINE
          </div>
          <div className="font-label text-xs uppercase tracking-widest text-paper opacity-80">
            © 2024 IMADGINE — BUILT ON THE GRITTY GRID
          </div>
        </div>
        <div className="flex gap-8">
          <Link
            href="/denken"
            className="font-label text-xs uppercase tracking-widest text-paper opacity-80 hover:text-orange hover:opacity-100 transition-all"
          >
            Denken
          </Link>
          <Link
            href="/samenwerken"
            className="font-label text-xs uppercase tracking-widest text-paper opacity-80 hover:text-orange hover:opacity-100 transition-all"
          >
            Samenwerken
          </Link>
          <Link
            href="/over"
            className="font-label text-xs uppercase tracking-widest text-paper opacity-80 hover:text-orange hover:opacity-100 transition-all"
          >
            Over
          </Link>
          <Link
            href="/projecten"
            className="font-label text-xs uppercase tracking-widest text-paper opacity-80 hover:text-orange hover:opacity-100 transition-all"
          >
            Projecten
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:info@imadgine.nl"
            className="w-10 h-10 border-2 border-paper flex items-center justify-center text-paper hover:bg-orange hover:border-orange transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">
              alternate_email
            </span>
          </a>
          <button
            onClick={() =>
              navigator.share?.({ title: "IMADGINE", url: "https://imadgine.nl" })
            }
            className="w-10 h-10 border-2 border-paper flex items-center justify-center text-paper hover:bg-orange hover:border-orange transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">share</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
