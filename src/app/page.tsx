/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="stipple absolute inset-0 z-0 pointer-events-none" />

      {/* Split Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-outline relative z-10">
        <div className="bg-surface p-12 md:p-24 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-outline">
          <span className="font-label text-xs uppercase tracking-widest text-primary-container mb-4 block">
            PROCESS_01
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-8">
            DENKEN
          </h1>
          <p className="font-body text-xl md:text-2xl max-w-md mb-12">
            Strategische diepgang voor stedelijke vraagstukken. Wij analyseren
            de onzichtbare krachten die de stad vormen.
          </p>
          <div>
            <Link
              href="/denken"
              className="inline-block bg-surface border-4 border-outline px-8 py-4 font-label font-bold text-lg btn-shadow uppercase tracking-tighter hover:bg-surface-container-high transition-colors"
            >
              ONZE VISIE
            </Link>
          </div>
        </div>

        <div className="bg-primary-container p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="stipple absolute inset-0 opacity-10 pointer-events-none" />
          <span className="font-label text-xs uppercase tracking-widest text-on-primary-container mb-4 block relative z-10">
            PROCESS_02
          </span>
          <h2 className="font-headline text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-8 text-on-primary-container relative z-10">
            SAMEN
            <br />
            WERKEN
          </h2>
          <p className="font-body text-xl md:text-2xl max-w-md mb-12 text-on-primary-container relative z-10">
            Samen bouwen aan veerkrachtige wijken. Geen bureaucratie, maar
            radicale actie op de grond.
          </p>
          <div className="relative z-10">
            <Link
              href="/samenwerken"
              className="inline-block bg-outline text-surface px-8 py-4 font-label font-bold text-lg btn-shadow uppercase tracking-tighter hover:bg-on-surface-variant transition-colors"
            >
              DOE MEE
            </Link>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="p-4 md:p-8 bg-surface-container-low border-b-2 border-outline">
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {[
            {
              label: "BRUTAL_STRUCT",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt52x5mhHfowCeN-ljtvJNXkhE9tGEmsMrdxhQUKlAGeMOGWaRzQnehp1PMUQFxCK5w9ezpAeaGlUgQT0HbJS8Lusad5W3LwgTNGPPzUYoIPsCQFPIGgAEEhgv78L9V6xSKVxB02dPLINKM9SUdfe4ZXevh9TWfzhIYEgmJnIf6_XyVIUJgi_YJJRN4dpDxz7NhfhibDFpy5IE3Jg5maoTj1Lo4prbrdIkYdI-Lyle317xBhmjEFsPl-SPXyDcD39TsQQ3VgtA5KY",
              alt: "Brutalist concrete building facade",
            },
            {
              label: "URBAN_FLOW",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh4YpuH7mN0JceEjdLWGvsnj1WPx5FaQQ6leb7eakiMdO00R2qJzjEirOAyT0XN4Xu1N72uq1QFQsbOno4aNdUf-xPtqtlUQLWsn-ME6G9v29xDFg3I2Z7bYBf4d6kjwjm8mmT4x8dQKp_-Wdrb1LeOW9bdymkjxATKZRfb6aJXpBsmfQTvY8ZNhDLImvMGi63EFSLUTYXyO6zo9kYJeZuGS3Eq3TTyG818-amiurQ9tY9mdeinewvF8JGLu0ivByinJePfIt7FG0",
              alt: "Street lights at night",
            },
            {
              label: "STREET_GRID",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6mpqOaMwp8FeKH4HSZwOzomWYtm3DR0mzYLcJMOVV81K9Xq5jxxzlphaLbgp0bNDpal0Uqxq2hXY7eCoREmlKDwJMVpoF4VKZD90ha7CPNUHSiijjYa90jaleUBbgTiypvSFcD4Ti9RA-dlli0zqOdNf10iPsJPAy3bq2xukXRNi7xY5BkMU3YPRnKY63QE6Puk28osnd-oHRxxZh2H1C3TxQGRl7PueJrdsTZo3evE8j2WqdzMgR4z8pk-5QLrmaSd6AgnYlSJg",
              alt: "High angle crosswalk shot",
            },
            {
              label: "RAW_METAL",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZrjJ9Ho33TAMsCRDAEMwLusQQys1IHpYKRByP6QPsf8njRWLMpLPbXdYYJHMsp8Kc7mtl5upknGMMiPzmUv11579jCckPsmtBLJ5cwCdRluzsqDKIP451dDSl53OU1vSIOcDGKb5f0pLy9AI8GMt7LM6I_nj3R17n7d63Gx42QxxujfY8QqVUqU-aYMxXZYZ1LL3FS8ZqDOxmZYFjXQgmBS0EXH2nEkx13OkUnlQI1r6RhNwNR4i7rXzyQKs0AVmGHZ1zlYhg_sc",
              alt: "Rusted metal industrial architecture",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex-none w-80 h-[500px] border-2 border-outline bg-surface relative group overflow-hidden"
            >
              <img
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                src={item.src}
                alt={item.alt}
              />
              <div className="absolute bottom-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 font-label text-xs font-bold uppercase border border-outline">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Over Mij */}
      <section className="px-6 py-20 md:py-32 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 border-b-2 border-outline">
        <div className="flex-1">
          <span className="font-label text-sm uppercase tracking-widest text-primary-container mb-6 block">
            ABOUT_FOUNDER
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-8">
            HET GEZICHT ACHTER DE GRID.
          </h2>
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <p className="font-body text-xl md:text-2xl mb-10 leading-relaxed text-on-surface">
            Geen consultants in pak, maar een partner die de straat kent.
            IMADGINE brengt expertise en praktijk samen om steden menselijker te
            maken.
          </p>
          <Link
            href="/over"
            className="inline-block bg-primary-container text-on-primary-container px-12 py-5 font-label font-bold text-xl btn-shadow border-2 border-outline uppercase tracking-tighter"
          >
            OVER MIJ
          </Link>
        </div>
      </section>

      {/* Laatste Artikel */}
      <section className="bg-surface-container-highest p-6 md:p-12 relative">
        <div className="stipple absolute inset-0 opacity-5 pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="flex justify-between items-end mb-12">
            <h3 className="font-headline text-4xl font-black uppercase tracking-tighter">
              LAATSTE ARTIKEL
            </h3>
            <span className="font-label text-sm uppercase tracking-tighter opacity-60">
              ARCHIVE_2024
            </span>
          </div>
          <article className="grid grid-cols-1 md:grid-cols-12 border-2 border-outline bg-surface">
            <div className="md:col-span-7 h-96 md:h-auto border-b-2 md:border-b-0 md:border-r-2 border-outline overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGNCF44N6uI3ed9_phTJGDJrUrMSs4dw90wEZK-Lq5Z3bMGvAgs9ZwXfODYQ7p37IHwhDgSHA_R8qz45-9po4VgGScO9pZQ_AHJmOpKBFOiJyFDZfVpnKknKigLtTMEfrJh4g6u4A1EXS4mPRoQtGp8xutTniIaKnuBmj3YEPD-bA5ZOjXWEGZkN4yguoXBq_NExccMEgvg9eafTl0ewvYnRDuCZsvdtFgjINb-XSFPnFcX2AHbFeCGAXn0sifRmyJepf3Asr2mKs"
                alt="Abstract urban landscape with power lines"
              />
            </div>
            <div className="md:col-span-5 p-10 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-6">
                  <span className="bg-outline text-surface px-2 py-1 font-label text-xs uppercase">
                    URBANISM
                  </span>
                  <span className="border border-outline px-2 py-1 font-label text-xs uppercase">
                    SOCIOLOGY
                  </span>
                </div>
                <h4 className="font-headline text-4xl font-extrabold uppercase leading-none tracking-tighter mb-6">
                  De onzichtbare grens in de wijk
                </h4>
                <p className="font-body text-lg mb-8 text-on-surface-variant">
                  Hoe fysieke architectuur onbewust uitsluiting creëert en wat
                  we kunnen doen om de muren te slechten. Een diepe duik in
                  sociaal-ruimtelijke segregatie.
                </p>
              </div>
              <Link
                href="/denken"
                className="flex items-center gap-4 font-label font-bold uppercase tracking-widest text-primary hover:text-primary-container transition-colors group"
              >
                LEES ESSAY
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
