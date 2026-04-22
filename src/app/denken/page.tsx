/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";

const filters = [
  "Alle Essays",
  "Identiteit",
  "Beleid & wijk",
  "Voetbal",
  "Opvoeding & jeugd",
  "Systemen",
];

const essays = [
  {
    id: 1,
    variant: "featured",
    category: "Beleid & wijk",
    date: "12 Oct 2024",
    title: "De Onzichtbare Grens in de Wijk",
    excerpt:
      "Waarom we beleid maken voor mensen die we niet spreken, en de realiteit van de straat negeren voor een Excel-sheet.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXzwyw4TdA8XAXFJQzX3p5178Uq-kfTb2-dY5NYZny9u8_RUG9PJC4qu-tdWPRo9CzCjO1hesb7iNcDrxSIyhtdf1XbOTM4-DAhRJ4VkRZ2kVgUPz0Va2uAIkpZoPzjKV_Hf9Z3qX32Jy5nv_DhC688H-Ke68Ob4CCZLvhOFE_eDaz4hDykCZv2m5UBMaHNNQzuOYR2D3IgQsc3j2ny9Msm68vRTq9_JhRpb-eqjCt_mPIbzljUdBxpTEiYKumNnVlX5rzkTRMtl0",
    colSpan: "md:col-span-8",
  },
  {
    id: 2,
    variant: "small",
    category: "Voetbal",
    date: "04 Oct",
    title: "De Zondagse Mis",
    excerpt:
      "Hoe het amateurvoetbal de laatste plek is waar de maatschappij nog echt samenkomt.",
    colSpan: "md:col-span-4",
  },
  {
    id: 3,
    variant: "small",
    category: "Identiteit",
    date: "28 Sep",
    title: "Vreemdeling in Eigen Spiegel",
    excerpt:
      "Over de zoektocht naar een thuis tussen twee werelden die beide niet helemaal passen.",
    icon: "identity_platform",
    colSpan: "md:col-span-4",
  },
  {
    id: 4,
    variant: "featured-reverse",
    category: "Systemen",
    date: "15 Sep",
    title: "De Paradox van de Planner",
    excerpt:
      "Waarom elke poging om de stad te 'optimaliseren' de ziel juist verder naar de randen drukt.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpJae8yLo-S-HTW4PRBYF8njODYF5EI1GMCLN4hzGm5cSyLKX1ZM5x7SCpxTg0OO_yayMF3verr4eXbcnEENpMpfuUaLzqSAPmMempVeIrhINX_d2EEiU9EUqLMlUn1vWYPO14tMU4QtXbQVhEjzbdKhmE1oz2RtMG6RI5cVtW0iE4RIsG2piU_Fe0tp-zTf3E_6Q9RpZ55kkDbm9bynLKxD6n4cQ5p-0fr0W-T2dG_TciGj5WeNGNxfzfQfSOBmlciN6s9x5-Ukk",
    colSpan: "md:col-span-8",
  },
  {
    id: 5,
    variant: "small",
    category: "Opvoeding & jeugd",
    date: "02 Sep",
    title: "Vaders van de Straat",
    excerpt:
      "De onzichtbare rollen die mannen spelen in het grootbrengen van een buurt.",
    colSpan: "md:col-span-4",
  },
  {
    id: 6,
    variant: "accent",
    category: "Beleid & wijk",
    date: "21 Aug",
    title: "De Papieren Wijk",
    excerpt:
      "Wanneer beleid alleen nog maar over cijfers gaat, verliezen we de mensen uit het oog.",
    colSpan: "md:col-span-4",
  },
  {
    id: 7,
    variant: "small",
    category: "Systemen",
    date: "10 Aug",
    title: "Lof der Vertraging",
    excerpt:
      "In een stad die altijd rent, is stilstand de ultieme vorm van verzet.",
    colSpan: "md:col-span-4",
  },
];

export default function DenkenPage() {
  const [activeFilter, setActiveFilter] = useState("Alle Essays");

  const visibleEssays = essays.filter(
    (e) =>
      activeFilter === "Alle Essays" ||
      e.category === activeFilter
  );

  return (
    <div className="relative">
      <div className="fixed inset-0 stipple z-0 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-24 relative z-10">
        {/* Hero */}
        <header className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <span className="font-label text-primary font-bold tracking-widest uppercase mb-4 block">
                Manifesto / Denken
              </span>
              <h1 className="text-6xl md:text-9xl font-black font-headline uppercase leading-[0.85] tracking-tighter mb-8">
                Hier <br /> Schrijf <br /> Ik.
              </h1>
              <p className="text-xl md:text-3xl font-light max-w-2xl text-on-surface leading-tight">
                Over wat ik zie, wat ik mis, en wat ik denk dat anders kan. Geen
                column voor een krant. Geen LinkedIn-post. Gewoon denken, op
                papier.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col gap-6 w-full">
              <div className="bg-primary-container p-1 ink-border-heavy hard-shadow rotate-1 h-64 relative overflow-hidden group">
                <img
                  alt="Urban Texture"
                  className="w-full h-full object-cover filter contrast-125 grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARWc4SzG_zEa1Utptes-IlUzOMgW9gCl1yWpuVgUVOS4qmOLNifpVzewk8KuvR1d606adG3V-jLnBg41Lt2JlSUssLEZnFpS9uZL5RrocN0BKpjFXnHwa4YnLlafVwD05aCMOZMeCiIs-hcVXVIpmEIE3fbm2HCNOUrG2JbJenx8-SrK6lRwQHLmzzXp8khv4SD6dkINntd31TWWk6ph0JZ3it6qvwTbVAF58daeTY-rjwfyZHxOM5SpOdRHifxgfP6SMWx1t0PVQ"
                />
                <div className="absolute inset-0 bg-primary opacity-20 mix-blend-multiply" />
              </div>
              <div className="font-label text-xs uppercase tracking-widest bg-surface-container-highest p-4 border-l-4 border-primary">
                [Status: Ongefilterd] <br />
                [Locatie: De Straat] <br />
                [Moment: Nu]
              </div>
            </div>
          </div>
        </header>

        {/* Filter Tags */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-4 items-center border-t-2 border-b-2 border-outline py-6">
            <span className="font-label text-xs uppercase font-bold mr-4 text-outline">
              Filter op:
            </span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1 border border-outline font-label text-xs uppercase transition-colors ${
                  activeFilter === filter
                    ? "bg-primary-container text-white"
                    : "hover:bg-primary-container hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {visibleEssays.map((essay) => {
            if (essay.variant === "featured") {
              return (
                <article key={essay.id} className={`${essay.colSpan} group`}>
                  <div className="bg-surface-container-low ink-border-medium flex flex-col md:flex-row h-full overflow-hidden">
                    <div className="md:w-1/2 overflow-hidden border-r-0 md:border-r-2 border-outline">
                      <img
                        alt={essay.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={essay.image}
                      />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <span className="font-label text-[10px] bg-primary text-white px-2 py-0.5 uppercase tracking-tighter">
                            Featured Essay
                          </span>
                          <span className="font-label text-[10px] text-outline uppercase">
                            {essay.date}
                          </span>
                        </div>
                        <h2 className="text-4xl font-black font-headline uppercase leading-none mb-6 group-hover:text-primary transition-colors">
                          {essay.title}
                        </h2>
                        <p className="text-on-surface-variant font-body mb-8">
                          {essay.excerpt}
                        </p>
                      </div>
                      <Link
                        href="#"
                        className="font-label text-xs font-bold uppercase flex items-center gap-2 group/link"
                      >
                        Lees Verder
                        <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-2">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            if (essay.variant === "featured-reverse") {
              return (
                <article key={essay.id} className={`${essay.colSpan} group`}>
                  <div className="bg-surface-container-highest ink-border-medium flex flex-col md:flex-row-reverse h-full overflow-hidden">
                    <div className="md:w-2/5 overflow-hidden border-l-0 md:border-l-2 border-outline">
                      <img
                        alt={essay.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-90"
                        src={essay.image}
                      />
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between mb-6">
                          <span className="font-label text-[10px] border border-outline px-2 py-0.5 uppercase">
                            {essay.category}
                          </span>
                          <span className="font-label text-[10px] text-outline uppercase">
                            {essay.date}
                          </span>
                        </div>
                        <h2 className="text-3xl font-black font-headline uppercase leading-tight mb-4 group-hover:text-primary transition-colors">
                          {essay.title}
                        </h2>
                        <p className="text-on-surface-variant font-body">
                          {essay.excerpt}
                        </p>
                      </div>
                      <Link
                        href="#"
                        className="mt-6 font-label text-xs font-bold uppercase flex items-center gap-2 group/link"
                      >
                        Open Archief
                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            if (essay.variant === "accent") {
              return (
                <article key={essay.id} className={`${essay.colSpan} group`}>
                  <div className="bg-primary-container p-8 border-4 border-[#121216] h-full flex flex-col justify-between hard-shadow">
                    <div>
                      <div className="flex justify-between mb-6">
                        <span className="font-label text-[10px] bg-[#121216] text-white px-2 py-0.5 uppercase">
                          Policy
                        </span>
                        <span className="font-label text-[10px] text-[#121216] uppercase">
                          {essay.date}
                        </span>
                      </div>
                      <h2 className="text-2xl font-black font-headline uppercase leading-tight mb-4 text-[#121216]">
                        {essay.title}
                      </h2>
                      <p className="text-sm font-body text-[#121216] opacity-80">
                        {essay.excerpt}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="mt-8 font-label text-xs font-bold uppercase flex items-center gap-2 text-[#121216] hover:underline"
                    >
                      Lees Essay
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </article>
              );
            }

            return (
              <article key={essay.id} className={`${essay.colSpan} group`}>
                <div className="bg-surface p-8 ink-border-medium h-full flex flex-col justify-between hover:bg-surface-container-highest transition-colors relative overflow-hidden">
                  {essay.icon && (
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <span className="material-symbols-outlined text-8xl">
                        {essay.icon}
                      </span>
                    </div>
                  )}
                  <div className="z-10">
                    <div className="flex justify-between mb-6">
                      <span className="font-label text-[10px] border border-outline px-2 py-0.5 uppercase">
                        {essay.category}
                      </span>
                      <span className="font-label text-[10px] text-outline uppercase">
                        {essay.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black font-headline uppercase leading-tight mb-4 group-hover:text-primary transition-colors">
                      {essay.title}
                    </h2>
                    <p className="text-sm font-body text-on-surface-variant line-clamp-3">
                      {essay.excerpt}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="mt-8 font-label text-xs font-bold uppercase flex items-center gap-2 group/link z-10"
                  >
                    Lees Essay
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}

          {/* Callout quote — always visible */}
          <article className="md:col-span-12">
            <div className="bg-[#121216] p-12 text-center border-4 border-primary relative">
              <div className="absolute inset-0 stipple opacity-5 pointer-events-none" />
              <h2 className="font-headline text-5xl md:text-7xl font-black text-[#fbf9f2] uppercase tracking-tighter mb-8 italic">
                &ldquo;Echt denken begint waar de structuur ophoudt.&rdquo;
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
          </article>
        </div>

        {/* Load More */}
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-4 ink-border-heavy font-label font-bold uppercase text-lg interaction-shift hard-shadow bg-surface hover:bg-primary-container hover:text-white transition-colors">
            Toon Meer Gedachten
          </button>
        </div>
      </div>
    </div>
  );
}
