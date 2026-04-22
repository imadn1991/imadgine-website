/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  type: "Essay" | "Column" | "Analyse";
  image?: string;
  imageAlt?: string;
};

const articles: Article[] = [
  {
    slug: "ze-kiezen-niet-tegen-nederland-ze-kiezen-voor-zichzelf",
    title: "Ze kiezen niet tégen Nederland. Ze kiezen vóór zichzelf.",
    excerpt:
      "Rafael van der Vaart zei dat Marokkaanse voetballers niets toevoegen aan Oranje. De verkeerde vraag. Waarom deze jongens kiezen, heeft niets te maken met of ze goed genoeg zijn voor Nederland — en alles met wat Nederland zelf doet.",
    date: "22 Apr 2026",
    categories: ["Identiteit", "Voetbal", "Beleid & wijk"],
    type: "Essay",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQHqKsY-mC3T3A/article-inline_image-shrink_1500_2232/B4EZ1UvOrDIQAU-/0/1775243161282?e=1778716800&v=beta&t=lpofuErYcmkcnM1FV3B4SaaomMJNyurLFXEkam74U54",
    imageAlt: "Voetbal International — illustratie bij het artikel",
  },
];

export default function DenkenPage() {
  return (
    <div className="relative">
      <div className="fixed inset-0 stipple z-0 pointer-events-none opacity-30" />

      <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-24 relative z-10">
        {/* Page hero */}
        <header className="mb-20 border-b-4 border-ink pb-12">
          <span className="font-label text-primary font-bold tracking-widest uppercase mb-4 block">
            Manifesto / Denken
          </span>
          <h1 className="text-6xl md:text-9xl font-black font-headline uppercase leading-[0.85] tracking-tighter mb-8">
            Hier <br /> Schrijf <br /> Ik.
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl text-on-surface leading-tight">
            Over wat ik zie, wat ik mis, en wat ik denk dat anders kan. Geen
            column voor een krant. Geen LinkedIn-post. Gewoon denken, op papier.
          </p>
        </header>

        {/* Articles grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/denken/${article.slug}/`}
              className="group block border-4 border-ink bg-surface hover:hard-shadow transition-all hover:-translate-x-1 hover:-translate-y-1"
            >
              {article.image && (
                <div className="border-b-4 border-ink overflow-hidden aspect-[16/9]">
                  <img
                    src={article.image}
                    alt={article.imageAlt ?? ""}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-8 md:p-10">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="font-label text-[11px] bg-primary text-white px-3 py-1 uppercase tracking-tighter">
                    {article.type}
                  </span>
                  {article.categories.slice(0, 2).map((cat) => (
                    <span
                      key={cat}
                      className="font-label text-[11px] border border-ink px-3 py-1 uppercase tracking-tighter"
                    >
                      {cat}
                    </span>
                  ))}
                  <span className="font-label text-[11px] text-on-surface-variant uppercase ml-auto">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-headline text-2xl md:text-3xl font-black uppercase leading-tight tracking-tighter mb-6 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="font-body text-base md:text-lg leading-relaxed text-on-surface-variant mb-8">
                  {article.excerpt}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest font-bold group-hover:text-primary transition-colors">
                  Lees verder
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
