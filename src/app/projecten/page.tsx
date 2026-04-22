/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ProjectenPage() {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-8 py-20">
      {/* Header */}
      <header className="mb-24 border-l-8 border-primary-container pl-8">
        <p className="font-label text-sm tracking-widest uppercase mb-4 text-primary-container">
          Geselecteerde Werken / 2024
        </p>
        <h1 className="text-7xl md:text-9xl font-headline font-black uppercase leading-[0.85] tracking-tighter mb-8">
          HET <span className="text-primary-container">STRAAT</span>
          <br />
          PERSPECTIEF.
        </h1>
        <p className="max-w-2xl text-xl font-body font-medium leading-relaxed opacity-90">
          Wij transformeren complexe stedelijke vraagstukken naar tastbare
          impact. Van diepgravend onderzoek tot strategische
          interventies—altijd met de voeten in de klei.
        </p>
      </header>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
        {/* Project 1 */}
        <div className="md:col-span-8 group relative bg-white border-4 border-ink p-0 overflow-hidden ink-bleed-shadow transition-transform hover:-translate-y-1">
          <div className="aspect-video bg-ink overflow-hidden grayscale contrast-125">
            <img
              alt="Overvecht als Spiegel"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnX91Dc29f7eol0RFrlBDsGtCQ2UCJnjGUd8QdCJDBinwPOPth24aKN8LtAfLqRwjBu6GwGgnxTsamncU5xR09T9rB_HR2MnpUgw4hG5OSQ505GIrTtXv8yxkO1-d49ikBTolbYtJ4bq0w5geShDUD8cj1YVUwh3vgPjdmQZcF4ZUdjEL7_XxgcXr4CVJxOcuEwSAvsQBLhIyKW0X0hiONegwct2SRSmmijx08mTej57q9NoOJxZsgg1YiBa6-lTnhUHAdIbyhRb0"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <span className="font-label text-xs font-bold px-3 py-1 bg-ink text-paper tracking-tighter">
                ONDERZOEK
              </span>
              <span className="font-label text-xs opacity-50 uppercase">
                UTRECHT / 01
              </span>
            </div>
            <h2 className="text-4xl font-headline font-black uppercase mb-4 group-hover:text-primary-container transition-colors">
              Overvecht als Spiegel
            </h2>
            <p className="font-body text-lg opacity-80 max-w-xl">
              Een diepgravend kwalitatief onderzoek naar de geleefde ervaringen
              en de ongeschreven codes van de wijk Overvecht.
            </p>
          </div>
          <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 bg-primary-container border-2 border-ink">
            <span className="material-symbols-outlined text-white">
              north_east
            </span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="md:col-span-4 group relative bg-paper border-4 border-ink p-8 flex flex-col justify-between ink-bleed-shadow">
          <div>
            <div className="mb-12">
              <span className="font-label text-xs font-bold px-3 py-1 bg-primary-container text-white tracking-tighter">
                STRATEGIE
              </span>
            </div>
            <h2 className="text-3xl font-headline font-black uppercase mb-6 leading-none">
              Systeemwereld vs Leefwereld
            </h2>
            <p className="font-body opacity-80 mb-8">
              Strategisch advies voor de gemeente Utrecht om de kloof tussen
              beleidskaders en de straatwerkelijkheid te dichten.
            </p>
          </div>
          <div className="aspect-square bg-gray-200 border-2 border-ink overflow-hidden grayscale mix-blend-multiply opacity-70">
            <img
              alt="Strategie"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-a4u6GPHhUonBxdKQoknUS4XA8Cx4HekApAP1IwOAz34YNUqZwn6z4XGqY9WZE0mml-fkIVqMQ46OhIXTyVQZQwbzKxau4Dd4RM8tCtvuqqBabhVo1sq7xM1tndiunwllMa3RxIlCJ_kUpmsPYLwNexRdtDl6TBSbf_u-5qlgAI7JUYM-r9YUUVfrfCiX0t2NRAArtr1CCrFc8SsgVAHMyZXG2BZnXApUEyIfH-KQh8y63_a5IpmImSJ0QwVC7DUmZKNd1PVVY0"
            />
          </div>
        </div>

        {/* Project 3 */}
        <div className="md:col-span-5 group relative bg-ink text-paper border-4 border-ink p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(255,95,31,1)]">
          <div className="mb-8">
            <span className="font-label text-xs font-bold px-3 py-1 bg-white text-ink tracking-tighter">
              COACHING
            </span>
            <h2 className="text-4xl font-headline font-black uppercase mt-8 mb-4">
              De Weg van de Held
            </h2>
            <p className="font-body opacity-70 text-lg">
              Intensieve trajectcoaching voor young professionals in de publieke
              sector gericht op persoonlijk leiderschap en maatschappelijke
              impact.
            </p>
          </div>
          <div className="border-t border-white/20 pt-8 flex items-center gap-4">
            <span
              className="material-symbols-outlined text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              stars
            </span>
            <span className="font-label text-xs uppercase tracking-widest">
              Toekomstig Leiderschap
            </span>
          </div>
        </div>

        {/* CTA tile */}
        <div className="md:col-span-7 group relative bg-primary-container border-4 border-ink p-12 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(18,18,22,1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="relative text-center">
            <h3 className="text-5xl md:text-6xl font-headline font-black text-ink uppercase leading-[0.8] mb-6">
              UW PROJECT
              <br />
              HIER?
            </h3>
            <Link
              href="/samenwerken"
              className="inline-block bg-ink text-white px-8 py-4 font-label font-bold uppercase tracking-tighter hover:bg-ink/90 transition-all"
            >
              Laten we praten
            </Link>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <section className="border-t-4 border-ink pt-16 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h4 className="font-label text-xs font-bold uppercase tracking-widest text-primary-container mb-6">
            METHODIEK_04
          </h4>
          <p className="font-body font-bold text-2xl uppercase tracking-tighter leading-tight">
            De stad is geen Excel-sheet. Het is een levend organisme dat vraagt
            om radicale eerlijkheid.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-2 gap-8 font-label text-sm">
          <div className="border-l border-ink/20 pl-6">
            <p className="font-bold mb-2">PARTICIPATIE</p>
            <p className="opacity-60">
              Wij gaan verder dan de standaard enquêtes en praten met de stemmen
              die vaak ongehoord blijven.
            </p>
          </div>
          <div className="border-l border-ink/20 pl-6">
            <p className="font-bold mb-2">ANALYSE</p>
            <p className="opacity-60">
              Data is pas relevant wanneer het gecombineerd wordt met
              contextuele intelligentie uit de straat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
