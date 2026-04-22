/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function SamenwerkenPage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 stipple z-0 pointer-events-none" />

      <main className="relative z-10">
        {/* Hero */}
        <section className="px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <span className="font-label text-sm tracking-[0.3em] uppercase text-primary font-bold mb-4 block">
              Advisory &amp; Strategie
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold leading-[0.9] tracking-tighter uppercase mb-8">
              Samen
              <br />
              werken
            </h1>
            <p className="text-2xl md:text-3xl font-body font-light max-w-2xl border-l-4 border-primary pl-6 py-2">
              &lsquo;Ik werk met mensen die iets willen veranderen maar vast
              zitten in hoe het altijd ging.&rsquo;
            </p>
          </div>
          <div className="md:col-span-4 md:mt-12">
            <div className="ink-border-medium p-2 bg-surface-container-high hard-shadow rotate-2">
              <img
                alt="Urban Architecture"
                className="w-full grayscale contrast-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-fhkB3GhfQvB-SGJFCwQ2TmQ7ZDzJp3B5pU2cZtaaMaN-Y1jw8ZdNwAlbHU15d5iAKTnotYdeT3LzA63ZeRPQSrkmtO31BG-a54FyzDIaxQPwIhYmazqLuENnhbDXRYwHCiDY1nmn-UV2mVpqJjiebcRrfoCGn6frjmclK7vcxFP3BtLTFsNwbHsntVnBooMHXlVrQOTN-iGidms7T7vjHpCDRWPWktI0cm_Fgfp91DQlVch0kv3UkDB0nGCs57nfh4RuDBdMhRE"
              />
            </div>
          </div>
        </section>

        {/* Methode */}
        <section className="bg-ink text-paper py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 font-headline text-[15rem] leading-none pointer-events-none select-none font-black uppercase">
            GRIT
          </div>
          <div className="max-w-4xl relative z-10">
            <h2 className="font-label text-primary-container text-xl uppercase tracking-widest mb-6">
              Mijn Aanpak
            </h2>
            <p className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-12">
              &lsquo;Ik begin altijd met wat er écht speelt...&rsquo;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-body text-lg opacity-90">
              <p>
                Geen dikke rapporten die in een lade verdwijnen. Ik graaf diep
                in de architectuur van je organisatie of project om de blokkades
                te vinden die vooruitgang in de weg staan.
              </p>
              <p>
                Mijn methode is rauw, eerlijk en gericht op directe impact. We
                bouwen niet voort op wankele fundamenten; we breken af wat niet
                werkt en reconstrueren vanuit de kern.
              </p>
            </div>
          </div>
        </section>

        {/* Diensten */}
        <section className="px-6 md:px-12 py-24 bg-surface">
          <div className="mb-16 flex justify-between items-end border-b-4 border-ink pb-4">
            <h2 className="text-4xl font-headline font-black uppercase tracking-tighter">
              Diensten
            </h2>
            <span className="font-label text-sm uppercase opacity-60 pb-1">
              Focus &amp; Executie
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="md:col-span-2 ink-border-medium p-8 flex flex-col justify-between group hover:bg-primary-container transition-colors duration-300">
              <div>
                <span className="font-label font-bold text-primary group-hover:text-white">
                  01
                </span>
                <h3 className="text-3xl font-headline font-extrabold uppercase mt-4 mb-6 group-hover:text-white">
                  Strategische Herijking
                </h3>
                <p className="font-body group-hover:text-white opacity-80">
                  Wanneer de koers onduidelijk is geworden door ruis. We
                  strippen de strategie tot de essentie en bouwen een nieuw,
                  robuust plan.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <span className="material-symbols-outlined text-4xl group-hover:text-white">
                  architecture
                </span>
              </div>
            </div>

            {/* Service 2 */}
            <div className="md:col-span-2 ink-border-medium p-8 flex flex-col justify-between group hover:bg-ink hover:text-paper transition-colors duration-300">
              <div>
                <span className="font-label font-bold text-primary">02</span>
                <h3 className="text-3xl font-headline font-extrabold uppercase mt-4 mb-6">
                  Cultuur Interventie
                </h3>
                <p className="font-body opacity-80">
                  Patronen doorbreken die innovatie gijzelen. Geen
                  &lsquo;heisessies&rsquo;, maar directe confrontatie met de
                  werkelijkheid op de werkvloer.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <span className="material-symbols-outlined text-4xl">
                  groups
                </span>
              </div>
            </div>

            {/* Service 3 */}
            <div className="md:col-span-1 ink-border-medium p-8 bg-surface-container-high flex flex-col group hover:-translate-y-1 transition-transform">
              <span className="font-label font-bold text-primary">03</span>
              <h3 className="text-2xl font-headline font-extrabold uppercase mt-4 mb-4">
                Project Audit
              </h3>
              <p className="text-sm font-body mb-8 opacity-70">
                Een kritische blik op lopende trajecten. Waar lekt energie en
                waar ligt de onbenutte potentie?
              </p>
              <div className="mt-auto">
                <span className="material-symbols-outlined text-2xl">
                  troubleshoot
                </span>
              </div>
            </div>

            {/* Service 4 */}
            <div className="md:col-span-3 ink-border-medium p-8 flex items-center gap-12 group hover:bg-primary-container transition-all">
              <div className="flex-1">
                <span className="font-label font-bold text-primary group-hover:text-white">
                  04
                </span>
                <h3 className="text-3xl font-headline font-extrabold uppercase mt-2 group-hover:text-white">
                  Executive Soundboarding
                </h3>
                <p className="font-body mt-4 group-hover:text-white opacity-80">
                  Individuele begeleiding voor leiders die durven te twijfelen.
                  Een filter voor je wildste ideeën en een spiegel voor je
                  blinde vlekken.
                </p>
              </div>
              <div className="hidden md:block w-32 h-32 bg-ink overflow-hidden">
                <img
                  alt="Detail"
                  className="w-full h-full object-cover grayscale brightness-50"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXj2w23tAbYguV-ddFXheCdpPHNpR-Eh4l3vOevYhcAOZrlVHd_hVLUvL6r5HmEuZmogA_q49NxXY6o71I_R0MDNGMyl53c6VN0MU4xzMbCsmAzl1C9MkbyxpRbAp4Bpukm5AtGWbtrL0Y8hRWSS4OtQn5b6IczVHKeF3wTizzWHWK-OoHABqDnt0tOJegrh88FQe8aI1WT87vj9nTSVL3XedMv3MX-ROCivOQddz6zPgMNuYqAYTGM5_WG3QVnsOc6tNQSiyOYA"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-32 flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-headline font-black uppercase mb-8">
              Klaar om te bouwen?
            </h2>
            <p className="font-body text-xl mb-12">
              Geen gladde verkooppraatjes. Alleen werk dat ertoe doet. Laten we
              praten over wat er echt speelt.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:info@imadgine.nl"
                className="inline-block bg-primary text-white text-xl font-label font-bold uppercase px-12 py-6 hard-shadow interaction-shift"
              >
                Start een gesprek
              </a>
              <Link
                href="/denken"
                className="inline-block bg-surface text-on-surface border-4 border-ink text-xl font-label font-bold uppercase px-12 py-6 hard-shadow interaction-shift"
              >
                Download Manifesto
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
