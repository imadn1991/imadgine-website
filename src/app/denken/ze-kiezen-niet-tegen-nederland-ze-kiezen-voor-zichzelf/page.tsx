/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const metadata = {
  title: "Ze kiezen niet tégen Nederland. Ze kiezen vóór zichzelf. — IMADGINE",
  description:
    "Over Marokkaanse voetballers die kiezen voor Marokko en wat dat zegt over Nederland.",
};

export default function EssayPage() {
  return (
    <div className="relative">
      <div className="fixed inset-0 stipple z-0 pointer-events-none opacity-30" />

      <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-24 relative z-10">
        {/* Back link */}
        <Link
          href="/denken/"
          className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-12"
        >
          ← Terug naar Denken
        </Link>

        <article className="max-w-5xl">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-label text-[11px] bg-primary text-white px-3 py-1 uppercase tracking-tighter">
              Essay
            </span>
            <span className="font-label text-[11px] border border-ink px-3 py-1 uppercase tracking-tighter">
              Identiteit
            </span>
            <span className="font-label text-[11px] text-on-surface-variant uppercase">
              22 Apr 2026
            </span>
          </div>

          {/* Title */}
          <h1 className="font-headline text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-12 border-l-8 border-primary-container pl-8">
            Ze kiezen niet tégen Nederland. Ze kiezen vóór zichzelf.
          </h1>

          {/* Body */}
          <div className="font-body text-lg md:text-xl leading-relaxed text-on-surface space-y-8">
            <p>
              Rafael van der Vaart zei het onlangs. Dat Marokkaanse voetballers
              niets toevoegen aan het Nederlands elftal. Het is een uitspraak die
              past in een patroon. Kijk naar een klein stukje van de
              werkelijkheid, trek een grote conclusie en ga naar huis.
            </p>

            <p>
              Maar laten we even doordenken. De discussie gaat over spelers als{" "}
              <strong>Anass Salah-Eddine</strong> en{" "}
              <strong>Souffian El Karouani</strong>, twee van de grotere talenten
              die voor Marokko hebben gekozen. Eerder deden{" "}
              <strong>Soufyan Amrabat</strong>,{" "}
              <strong>Noussair Mazraoui</strong> en <strong>Hakim Ziyech</strong>{" "}
              hetzelfde. En steeds opnieuw volgt dezelfde reflex: hadden ze wel
              de kwaliteit voor Oranje? Of: zouden ze überhaupt in aanmerking
              zijn gekomen?
            </p>

            <p>
              Dat is precies de verkeerde vraag. Want de reden waarom deze
              jongens voor Marokko kiezen, heeft niets te maken met of ze goed
              genoeg zijn voor Nederland. De redenen zijn simpeler en tegelijk
              veel ongemakkelijker. De eerste reden: de afweging is er gewoon
              niet meer. Tien jaar geleden was kiezen voor Marokko, kiezen voor
              een land dat nauwelijks voorkwam in de latere rondes van
              internationale toernooien. Die rekening is anders geworden. Marokko
              haalde de halve finale van het WK, als eerste Afrikaanse land ooit.
              Marokko heeft nu meer dan tien jaar geïnvesteerd, ontwikkeld en
              gestructureerd. De sportieve reden om voor Nederland te kiezen
              boven Marokko is weggevallen. En dat is voor Nederland een veel
              groter probleem dan één speler meer of minder.
            </p>

            <p>
              Want wat Marokko de afgelopen jaren heeft laten zien, gaat allang
              niet meer over één elftal. Het U20-team won in oktober 2025 het
              wereldkampioenschap in Chili, 2-0 tegen Argentinië in de finale.
              Eerste Arabische land ooit. Het U17-team bereikte de kwartfinale
              van het WK in Qatar. Het Olympisch team pakte brons in Parijs 2024,
              ook dat voor het eerst voor een Arabisch land. De mannen wonnen de
              Arab Cup. De zaalvoetbalmannen staan zesde van de wereld en zijn
              drie keer op rij Afrikaans kampioen. De zaalvoetbalvrouwen wonnen
              de allereerste editie van de Afrika Cup. De vrouwen deden voor het
              eerst mee aan een WK in 2023 en haalden de finale van de Afrika Cup
              in 2024. Dit is geen toeval meer, dit is een visie.
            </p>

            <p>
              En die visie heeft een Nederlandse handtekening. Pim Verbeek,
              inmiddels overleden, was rond 2010 een van de architecten van de
              ontwikkeling die Marokkaans voetbal in gang heeft gezet. Een
              Nederlander. Die niet alleen zijn kennis meenam, maar ook een
              principe: je speelt op kwaliteit, niet op relaties. In Marokko was
              dat op dat moment geen vanzelfsprekendheid. Verbeek maakte het wel
              zo. En het is hem niet makkelijk gemaakt, waarom weet ik dat?
              Omdat ik als jonge voetballer midden in die ontwikkeling bewoog,
              als pupil van trainer Verbeek. Hij had lef om spelers uit Europa te
              selecteren ook als dat ten koste ging van spelers uit de competitie
              en met contacten in de media en bestuur. Onder zijn leiding haalden
              we de finale van de Afrika Cup U20 en ook de Olympische Spelen van
              2012 in Londen. En op dat fundament is de rest gebouwd. Nederland
              heeft gebouwd aan de ontwikkeling die Marokko nu maakt.
            </p>

            <p>
              Maar er is ook een tweede reden. Eentje die zwaarder weegt en die
              mij ook pijn doet. Want naast de sportieve afweging is er een
              maatschappelijke. En die is minstens zo bepalend. Deze jongens
              groeien op in Nederland. Ze worden gevormd door Nederland. Maar ze
              worden ook beoordeeld door Nederland.
            </p>

            <p>
              Het is als kiezen tussen je vader en je moeder. Ik kan het weten,
              want ik heb die keuze zelf op mijn negentiende moeten maken. Na
              twee jeugd-EK&apos;s met Oranje U17 en U19 koos ik toch voor
              Marokko. Niet omdat ik minder van Nederland hou. Maar omdat de een
              je onvoorwaardelijk omarmt en de ander steeds vraagt of je je best
              wel genoeg doet. En als een buurjongen iets fout doet, word jij
              daar ook op beoordeeld. Dan hoor je opeens bij de &quot;ander&quot;.
              Rafael zou waarschijnlijk hebben gezegd dat ik niet goed genoeg was
              voor het Nederlands elftal. Misschien heeft hij gelijk. Maar dat
              maakt dit punt niet minder waar.
            </p>

            {/* Image */}
            <figure className="my-12 border-2 border-ink w-4/5 mx-auto">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E12AQHqKsY-mC3T3A/article-inline_image-shrink_1500_2232/B4EZ1UvOrDIQAU-/0/1775243161282?e=1778716800&v=beta&t=lpofuErYcmkcnM1FV3B4SaaomMJNyurLFXEkam74U54"
                alt="Voetbal International — illustratie bij het artikel"
                className="w-full object-cover"
              />
              <figcaption className="font-label text-xs uppercase tracking-widest px-4 py-3 border-t-2 border-ink text-on-surface-variant">
                Bron: Instagram @voetbalinternational.nl
              </figcaption>
            </figure>

            <p>
              De discussie begint altijd bij de keuze van een speler. Alleen
              begint het proces veel eerder. Bij Eredivisie-wedstrijden valt me
              op dat commentatoren jongens zoals Ouaissa of Ould-Chikh aanduiden
              als &quot;de Marokkaan&quot;. Laatst nog in een bericht van VI werd
              Ouaissa beschreven als de Marokkaanse Limburger. Waarom niet gewoon
              Limburger? En dit zijn jongens die hier geboren en opgegroeid zijn,
              die hun eerste teug zuurstof in dit land hebben ingeademd. En ik
              snap dat dit mensen niet opvalt. Het is onderhuids. Het is niet
              iets waar je zelfs als jonge voetballer bewust bij stilstaat, maar
              het vormt je wel. Het heeft impact. Want voor een jongen die
              opgroeit in Overvecht, Amsterdam-West of Rotterdam-Zuid is het geen
              detail. Het is een bevestiging van wat hij al de hele tijd voelt.
              Het maakt niet uit wat ik doe, wat ik bereik, hoe goed ik mijn
              best doe. Echt erbij horen zal ik nooit.
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-8 border-primary-container pl-8 py-4 my-10 bg-surface-container-low border-2 border-l-8 border-primary-container p-8">
              <p className="font-body text-xl md:text-2xl italic text-on-surface leading-relaxed">
                &ldquo;De Marokkaanse gemeenschap is voor meer dan de helft
                verantwoordelijk voor de geweldscriminaliteit. Dat is in absolute
                zin, dus nog niet eens relatief. Dan kun je niet zeggen dat er
                niets aan de hand is, zeker niet als je ziet dat dit ook speelt
                in België en voor een groot deel in Frankrijk.&rdquo;
              </p>
              <cite className="font-label text-sm uppercase tracking-widest mt-6 block text-on-surface-variant not-italic">
                — Sander Schaepman, Vandaag Inside (SBS6, 22 januari 2026)
              </cite>
            </blockquote>

            <p>
              Zonder nuance, zonder context, zonder tegenspraak aan tafel.
              Mainstream media lieten het grotendeels passeren. Het waren
              TikTok-kanalen die de onzinnigheid ervan blootlegden. Dat zegt meer
              dan genoeg. Het betekent dat je over deze groep kunt zeggen wat je
              wilt, dat het doorgaat en dat het geloofd wordt.
            </p>

            {/* Closing — visually emphasised */}
            <div className="border-4 border-ink p-8 md:p-12 bg-on-surface text-surface hard-shadow mt-12">
              <p className="font-body text-xl md:text-2xl leading-relaxed">
                Als je wil dat de volgende generatie voor Nederland kiest, moet
                je twee dingen doen. Het voetbalsysteem vernieuwen, want de
                voorsprong bestaat niet meer. En de maatschappij veranderen, want
                een warm bad geef je niet alleen op het moment dat het jou
                uitkomt. Anders is de keuze allang gemaakt.{" "}
                <em className="font-black">En terecht.</em>
              </p>
            </div>
          </div>

          {/* Author footer */}
          <div className="mt-16 pt-8 border-t-4 border-ink flex items-center justify-between flex-wrap gap-6">
            <div>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                Geschreven door
              </p>
              <p className="font-headline text-2xl font-black uppercase tracking-tighter">
                Imad Najah
              </p>
              <p className="font-label text-xs uppercase tracking-widest text-primary mt-1">
                IMADGINE — Urban Advisory
              </p>
            </div>
            <div className="flex gap-3">
              <span className="font-label text-[11px] border border-ink px-3 py-1.5 uppercase tracking-tighter">
                Identiteit
              </span>
              <span className="font-label text-[11px] border border-ink px-3 py-1.5 uppercase tracking-tighter">
                Voetbal
              </span>
              <span className="font-label text-[11px] border border-ink px-3 py-1.5 uppercase tracking-tighter">
                Beleid & wijk
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
