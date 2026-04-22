/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function OverPage() {
  return (
    <div className="relative">
      <div className="fixed inset-0 stipple z-0 pointer-events-none" />

      <main className="relative z-10">
        {/* Hero */}
        <section className="border-b-4 border-ink grid grid-cols-1 md:grid-cols-12 min-h-[819px]">
          <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-end gap-6 bg-surface">
            <span className="font-label text-xs uppercase tracking-widest text-primary-container font-bold">
              Het verhaal achter de grit
            </span>
            <h1 className="font-headline text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter text-on-surface">
              VAN DE STRAAT NAAR{" "}
              <span className="text-primary-container">STRATEGIE</span>.
            </h1>
            <p className="font-body text-xl md:text-2xl max-w-xl text-on-surface leading-tight">
              Mijn reis begon op de pleintjes van Overvecht. Waar voetbal niet
              alleen een spel was, maar een les in veerkracht, observatie en
              eerlijkheid.
            </p>
          </div>
          <div className="md:col-span-5 relative bg-ink overflow-hidden min-h-[400px] md:min-h-full">
            <img
              alt="Overvecht Utrecht architecture"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbLFBBSXPXxjW786D0cCP7q3PpqvKVpfHYUSkc4fqs0VPromNYahygsYjjW2NGVVVyOlswB19fp4325uqJvJ1aBnb1QmpBhN7LdV92VbXyEKpu4AqGsQvfBxkNskccixkMnON22DH4ZB9LFrCath0YWlXB4MfGVEtABecmisTD2GnIuUqOsSbllZDlS4-rA5Rw7y0HikRXwE_8vjV5P-BRkObUjmyBFh1dm0zgNLU5HKlOdvA-KENriDzoekpHpuRrTYu7Bgkyy0c"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            <div className="absolute bottom-6 right-6 bg-ink p-4 border border-surface text-paper font-label text-[10px] uppercase tracking-tighter leading-none">
              Locatie: 3564 Utrecht / 52.1226° N, 5.1090° E
            </div>
          </div>
        </section>

        {/* Het Verhaal — krantkolommen */}
        <section className="p-8 md:p-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-b-4 border-ink">
          <div className="flex flex-col gap-4">
            <h3 className="font-headline text-3xl font-extrabold uppercase border-b-2 border-ink pb-2">
              De Oorsprong
            </h3>
            <p className="font-body text-lg leading-relaxed">
              Opgegroeid in de rauwe maar warme omgeving van{" "}
              <strong>Overvecht</strong>, Utrecht. Hier leerde ik dat kansen
              niet worden gegeven, maar gecreëerd. Het trapveldje was mijn
              eerste klaslokaal. Daar leerde ik over hiërarchie, teamspirit en
              het belang van een scherpe blik.
            </p>
            <div className="mt-4 p-4 bg-surface-container-low border-2 border-ink hard-shadow">
              <span className="material-symbols-outlined text-primary-container block mb-2">
                sports_soccer
              </span>
              <p className="font-label text-xs uppercase font-bold">
                Voetbal Mentality:
              </p>
              <p className="font-body text-sm italic">
                &ldquo;Je bent zo goed als je laatste pass.&rdquo;
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-headline text-3xl font-extrabold uppercase border-b-2 border-ink pb-2">
              Scouting &amp; Visie
            </h3>
            <p className="font-body text-lg leading-relaxed">
              Mijn passie voor voetbal evolueerde naar <strong>scouting</strong>
              . Het herkennen van potentieel dat anderen over het hoofd zien.
              Diezelfde analytische blik vormde de basis voor IMADGINE. Ik zie
              geen problemen, ik zie systemen die geoptimaliseerd kunnen worden
              door menselijke intuïtie te koppelen aan keiharde data.
            </p>
            <div className="mt-4 p-4 bg-primary-container text-on-primary-container border-2 border-ink hard-shadow">
              <span className="material-symbols-outlined block mb-2">
                visibility
              </span>
              <p className="font-label text-xs uppercase font-bold">
                De IMADGINE Keuze:
              </p>
              <p className="font-body text-sm">
                Altijd kiezen voor de onconventionele weg. Grit boven gemak.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-headline text-3xl font-extrabold uppercase border-b-2 border-ink pb-2">
              De Missie
            </h3>
            <p className="font-body text-lg leading-relaxed">
              IMADGINE is niet zomaar een bureau; het is een manifest. Wij
              werken voor de makers, de doeners en de dromers die begrijpen dat
              innovatie pijn moet doen om te kunnen groeien. Wij brengen de
              menselijke warmte terug in een kille, digitale wereld.
            </p>
            <div className="mt-auto pt-8">
              <img
                alt="Old newspaper texture"
                className="w-full h-32 object-cover border-2 border-ink grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChY_gci73SE6KuP3dgvEt2sOPyKqzPD5hVnqAAFxD5cxfJnMMS8k7HODtaJZoOhYVoe89kVsJFwJ8iFvvsuuiI2KX6GhiuPPj1AepMXRaSEgjkAJFlXxkVKvmfYHEMV1tXh9uptxxbHbasIyPHB7Kzm_7YUugiOvmLeiEEyVMt9XX87PXyC4FqjI8newODn3UGAkxHCjIFSaz0FFRgaQ12laj7fN42CTGOlP2IW5aQZ9eZ-MuBjT4vuCtCOaJiR_lvfWmC8Qo4DlY"
              />
            </div>
          </div>
        </section>

        {/* Credentials — De Stempel */}
        <section className="bg-ink text-paper p-8 md:p-20">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <span className="font-label text-primary-container uppercase text-xs font-bold tracking-widest">
                Gekwalificeerde Grit
              </span>
              <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-2">
                DE STEMPEL.
              </h2>
            </div>
            <div className="font-label text-sm uppercase opacity-60 max-w-xs text-right">
              Kennis zonder karakter is waardeloos. Karakter zonder kennis is
              gevaarlijk. Ik heb beide.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 border-2 border-paper p-8 bg-paper text-on-surface hover:bg-primary-container hover:text-white transition-colors duration-300">
              <span className="font-label text-xs uppercase opacity-60">
                Leadership &amp; Policy
              </span>
              <h4 className="font-headline text-4xl font-black uppercase mt-4 mb-2">
                Harvard Kennedy School
              </h4>
              <p className="font-body text-sm">
                Executive Education in Public Leadership. Het snijvlak van
                macht, moraal en maatschappelijke impact.
              </p>
              <div className="mt-8 flex justify-end">
                <span className="material-symbols-outlined text-4xl">
                  school
                </span>
              </div>
            </div>

            <div className="md:col-span-1 border-2 border-paper p-8 flex flex-col justify-between">
              <div>
                <span className="font-label text-xs uppercase opacity-60">
                  Innovation
                </span>
                <h4 className="font-headline text-2xl font-black uppercase mt-4">
                  HBO Business Innovation
                </h4>
              </div>
              <p className="font-body text-xs mt-4">
                Systemisch denken toegepast op moderne markt-dynamieken.
              </p>
            </div>

            <div className="md:col-span-1 border-2 border-paper p-8 flex flex-col justify-between bg-primary">
              <div>
                <span className="font-label text-xs uppercase text-paper/60">
                  Ethics
                </span>
                <h4 className="font-headline text-2xl font-black uppercase mt-4 text-paper">
                  Ethical Leadership Academy
                </h4>
              </div>
              <p className="font-body text-xs text-paper/90 mt-4">
                Besluitvorming geworteld in integriteit en menselijke maat.
              </p>
            </div>

            <div className="md:col-span-4 h-64 relative border-2 border-paper overflow-hidden">
              <img
                alt="Utrecht Oudegracht"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk48d7OKLl7UJXVAEiWZVROQbMl9T-tTm2D5koMHJTKS_DRTk9JuFG7BTOf2RH4WvPgYfAZcBLjR098TX0eKVgf3AhlFbIOA2VLjnP_HX1ypToZqqvCiF9oa4yICiDypwseNgQR2m7Sb_7Q78CDehK3reep8YNJ6lSCe0K2zdYm0e_hKA-89iRKMp_3227mxGiNA6SXiL9BGB7jQl1803HM4UrFfyNJ-XwQkiMMqxyRiBsjGSSnrLH5qxlSYWkOx3SzOMXav7xblA"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h5 className="font-headline text-4xl md:text-6xl font-black uppercase text-white drop-shadow-lg text-center px-4">
                  Utrecht Roots, Global Vision.
                </h5>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface border-y-4 border-ink py-24 px-8 overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-headline text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              KLAAR OM HET{" "}
              <span className="text-primary-container">ECHT</span> TE MAKEN?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                href="/samenwerken"
                className="bg-ink text-paper px-10 py-5 font-label font-bold uppercase text-lg border-2 border-ink hard-shadow active-shift flex items-center gap-4"
              >
                START EEN PROJECT
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/denken"
                className="bg-transparent text-on-surface px-10 py-5 font-label font-bold uppercase text-lg border-4 border-ink hard-shadow active-shift"
              >
                LEES HET MANIFESTO
              </Link>
            </div>
          </div>
          <div className="absolute top-4 left-0 w-full overflow-hidden opacity-10 select-none whitespace-nowrap font-label text-8xl font-black uppercase pointer-events-none">
            IMADGINE IMADGINE IMADGINE IMADGINE IMADGINE IMADGINE
          </div>
          <div className="absolute bottom-4 left-0 w-full overflow-hidden opacity-10 select-none whitespace-nowrap font-label text-8xl font-black uppercase pointer-events-none">
            GRITTY GRID GRITTY GRID GRITTY GRID GRITTY GRID
          </div>
        </section>
      </main>
    </div>
  );
}
