"use client";

import { useState, useCallback } from "react";

const FAMILY_PROFILE = {
  gezin: "Imad (kok, amateur), vrouw, zoontje 1.5 jaar",
  doelen: "Meer energie, algemene fitheid, gebalanceerd gezinsdieet",
  keukens: [
    "Mediterraan/Grieks",
    "Midden-Oosters/Marokkaans",
    "Aziatisch (Thai, Japans, Chinees)",
    "Mexicaans/Latijns",
    "Indiaas",
  ],
  favoriete_basis: ["Pasta/noodles", "Flatbread/naan", "Aardappel/zoete aardappel"],
  pit: "Licht — beetje pit mag, nooit dominant",
  allergieën: [
    "Varkensvlees (verboden)",
    "Rauwe noten (allergie Imad)",
    "Steenvruchten: perzik, pruim, abrikoos, kersen, mango, amandelen (allergie Imad)",
    "Pinda's (aften bij Imad — volledig vermijden)",
  ],
  vis: "Af en toe, niet te vaak",
  kookniveau: "Amateur — smaak staat voorop boven techniek",
  kooktijd: "Doordeweeks max 35 min actief, weekend uitdagender mag",
  peuter: "Zoontje 1.5 jaar eet altijd mee — aparte aanpassing verplicht (geen honing, laag zout, geen pinda's)",
  vrouw: "Geen vet draadjesvlees — altijd mager vlees",
  maateenheden: "ALTIJD grammen en milliliters — nooit stuks, eetlepels of theelepels",
  extra: "Smaak en genot zijn prioriteit. Batch-koken en weekmenu-vriendelijk.",
};

const buildSystemPrompt = (geheugen) => `
Je bent de persoonlijke familienutritionist en chef-kok van Restaurant Najah.

GEZINSPROFIEL:
${JSON.stringify(FAMILY_PROFILE, null, 2)}

GEHEUGEN (eerder gemaakte recepten en feedback):
${geheugen.length > 0 ? JSON.stringify(geheugen, null, 2) : "Nog geen geschiedenis."}

ABSOLUTE REGELS:

1. Genereer NOOIT een recept dat al in het geheugen staat
1. Gebruik ALTIJD grammen of milliliters — nooit stuks, eetlepels of andere maten
1. Altijd een peuter-aanpassing sectie
1. Altijd allergie-check vermelden
1. Altijd macros per portie (kcal, eiwit, vet, koolhydraten)
1. Verwerk feedback uit het geheugen actief in nieuwe recepten
1. Varieer over alle keukens — niet alleen Mediterraan
1. Boodschappenlijst gegroepeerd: vlees/vis, groenten, zuivel, droog/blik, kruiden/specerijen

OUTPUTFORMAAT — antwoord ALTIJD met pure JSON, geen markdown, geen uitleg erbuiten:

Voor een recept:
{
  "type": "recept",
  "title": "…",
  "keuken": "…",
  "dag": "doordeweeks of weekend",
  "actieve_tijd_minuten": number,
  "totale_tijd_minuten": number,
  "beschrijving": "…",
  "porties": number,
  "ingredienten": [
    { "naam": "…", "hoeveelheid": number, "eenheid": "g of ml" }
  ],
  "stappen": [
    { "titel": "…", "instructie": "…", "timer_seconden": number or null }
  ],
  "peuter_aanpassing": "…",
  "allergie_check": "…",
  "macros_per_portie": {
    "kcal": number,
    "eiwit_g": number,
    "vet_g": number,
    "koolhydraten_g": number
  },
  "batch_tip": "…"
}

Voor een weekmenu:
{
  "type": "weekmenu",
  "week": [
    {
      "dag": "Maandag",
      "ontbijt": "…",
      "snack_ochtend": "…",
      "avondeten": "recept titel + keuken",
      "snack_avond": "…"
    }
  ]
}

Voor een boodschappenlijst:
{
  "type": "boodschappenlijst",
  "gebaseerd_op": ["recept1", "recept2"],
  "categorieën": {
    "vlees_vis": [{ "naam": "…", "hoeveelheid": number, "eenheid": "g of ml" }],
    "groenten": […],
    "zuivel": […],
    "droog_blik": […],
    "kruiden_specerijen": […],
    "overig": […]
  }
}
`;

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@300;400;600&display=swap');

:root {
  --ink: #1a1208;
  --cream: #f5efe3;
  --gold: #c4922a;
  --gold-light: #e8c87a;
  --spice: #8b3a1e;
  --sage: #5c6b4a;
  --warm-gray: #9a8f82;
  --card-bg: #fdf8f0;
  --border: rgba(196,146,42,0.25);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--cream);
  color: var(--ink);
  font-family: 'Josefin Sans', sans-serif;
  min-height: 100vh;
}

.app {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

.header {
  text-align: center;
  padding: 3rem 0 2rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 2.5rem;
  position: relative;
}
.header::before {
  content: '◆';
  display: block;
  color: var(--gold);
  font-size: 1rem;
  margin-bottom: 0.75rem;
  letter-spacing: 0.5rem;
}
.header h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 0.15em;
  color: var(--ink);
  line-height: 1;
}
.header h1 span { color: var(--gold); font-style: italic; }
.header p {
  margin-top: 0.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--warm-gray);
}

.nav {
  display: flex;
  gap: 0;
  margin-bottom: 2.5rem;
  border: 1px solid var(--border);
  border-radius: 2px;
  overflow: hidden;
}
.nav button {
  flex: 1;
  padding: 0.85rem 1rem;
  background: transparent;
  border: none;
  border-right: 1px solid var(--border);
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--warm-gray);
  cursor: pointer;
  transition: all 0.2s;
}
.nav button:last-child { border-right: none; }
.nav button:hover { background: rgba(196,146,42,0.08); color: var(--gold); }
.nav button.active {
  background: var(--gold);
  color: white;
}

.input-section { margin-bottom: 2rem; }
.input-row {
  display: flex;
  gap: 0.75rem;
}
.input-row input {
  flex: 1;
  padding: 1rem 1.25rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 2px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.85rem;
  color: var(--ink);
  letter-spacing: 0.05em;
  outline: none;
  transition: border-color 0.2s;
}
.input-row input:focus { border-color: var(--gold); }
.input-row input::placeholder { color: var(--warm-gray); }
.btn-gold {
  padding: 1rem 2rem;
  background: var(--gold);
  border: none;
  border-radius: 2px;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}
.btn-gold:hover { background: var(--spice); }
.btn-gold:disabled { background: var(--warm-gray); cursor: not-allowed; }

.recipe-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 2px;
  margin-bottom: 2rem;
  overflow: hidden;
  animation: fadeIn 0.4s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
.recipe-header {
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid var(--border);
  position: relative;
}
.recipe-tag {
  display: inline-block;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--border);
  padding: 0.25rem 0.75rem;
  margin-bottom: 0.75rem;
  margin-right: 0.5rem;
}
.recipe-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}
.recipe-desc {
  font-size: 0.8rem;
  color: var(--warm-gray);
  line-height: 1.6;
  letter-spacing: 0.03em;
}
.recipe-meta {
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border);
  background: rgba(196,146,42,0.04);
}
.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.meta-label {
  font-size: 0.55rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--warm-gray);
}
.meta-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: var(--gold);
}
.recipe-body { padding: 1.75rem 2rem; }

.section-title {
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.ingredients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.4rem;
  margin-bottom: 2rem;
}
.ingredient-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background: white;
  border: 1px solid var(--border);
  font-size: 0.78rem;
  letter-spacing: 0.03em;
}
.ingredient-amount {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  color: var(--gold);
  white-space: nowrap;
  margin-left: 0.5rem;
}

.steps-list { margin-bottom: 2rem; }
.step-item {
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);
}
.step-item:last-child { border-bottom: none; margin-bottom: 0; }
.step-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 300;
  color: var(--gold-light);
  line-height: 1;
  min-width: 2rem;
}
.step-content { flex: 1; }
.step-title {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--spice);
  margin-bottom: 0.35rem;
}
.step-text {
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--ink);
  letter-spacing: 0.02em;
}
.step-timer {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: var(--sage);
  border: 1px solid var(--sage);
  padding: 0.2rem 0.6rem;
  text-transform: uppercase;
}

.info-blocks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}
@media (max-width: 600px) { .info-blocks { grid-template-columns: 1fr; } }
.info-block {
  padding: 1rem 1.25rem;
  border: 1px solid var(--border);
  background: white;
}
.info-block.peuter { border-left: 3px solid var(--sage); }
.info-block.allergie { border-left: 3px solid var(--spice); }
.info-block.macros { border-left: 3px solid var(--gold); }
.info-block.batch { border-left: 3px solid #7a9eb5; }
.info-block-title {
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
}
.info-block.peuter .info-block-title { color: var(--sage); }
.info-block.allergie .info-block-title { color: var(--spice); }
.info-block.macros .info-block-title { color: var(--gold); }
.info-block.batch .info-block-title { color: #7a9eb5; }
.info-block p, .info-block span { font-size: 0.78rem; line-height: 1.6; }
.macros-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}
.macro-item { text-align: center; }
.macro-val {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: var(--gold);
  display: block;
}
.macro-lbl {
  font-size: 0.55rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--warm-gray);
}

.feedback-section {
  padding: 1.25rem 2rem;
  background: rgba(196,146,42,0.04);
  border-top: 1px solid var(--border);
}
.feedback-section textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: white;
  border: 1px solid var(--border);
  border-radius: 2px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.8rem;
  color: var(--ink);
  resize: vertical;
  min-height: 70px;
  outline: none;
  margin-bottom: 0.75rem;
  letter-spacing: 0.03em;
}
.feedback-section textarea:focus { border-color: var(--gold); }
.btn-small {
  padding: 0.6rem 1.5rem;
  background: transparent;
  border: 1px solid var(--gold);
  border-radius: 2px;
  color: var(--gold);
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-small:hover { background: var(--gold); color: white; }

.history-list { display: flex; flex-direction: column; gap: 0.75rem; }
.history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: border-color 0.2s;
}
.history-item:hover { border-color: var(--gold); }
.history-left { flex: 1; }
.history-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}
.history-meta {
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--warm-gray);
}
.history-feedback {
  font-size: 0.72rem;
  color: var(--sage);
  font-style: italic;
  margin-top: 0.3rem;
}
.history-arrow { color: var(--gold); font-size: 1.2rem; margin-left: 1rem; }

.week-grid { display: flex; flex-direction: column; gap: 0.75rem; }
.week-day {
  background: var(--card-bg);
  border: 1px solid var(--border);
  overflow: hidden;
}
.week-day-header {
  padding: 0.75rem 1.25rem;
  background: rgba(196,146,42,0.08);
  border-bottom: 1px solid var(--border);
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
}
.week-day-body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
.week-meal {
  padding: 0.75rem 1rem;
  border-right: 1px solid var(--border);
  font-size: 0.75rem;
  line-height: 1.4;
}
.week-meal:last-child { border-right: none; }
.week-meal-label {
  font-size: 0.55rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--warm-gray);
  margin-bottom: 0.3rem;
}

.boodschappen-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
.boodschappen-cat {
  background: var(--card-bg);
  border: 1px solid var(--border);
  overflow: hidden;
}
.boodschappen-cat-header {
  padding: 0.75rem 1.25rem;
  background: rgba(196,146,42,0.08);
  border-bottom: 1px solid var(--border);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
}
.boodschappen-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
  border-bottom: 1px solid var(--border);
  font-size: 0.78rem;
}
.boodschappen-item:last-child { border-bottom: none; }
.boodschappen-amount {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.95rem;
  color: var(--gold);
  white-space: nowrap;
  margin-left: 0.5rem;
}

.loading {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  color: var(--warm-gray);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.loading-dots span {
  display: inline-block;
  width: 6px; height: 6px;
  background: var(--gold);
  border-radius: 50%;
  margin: 0 2px;
  animation: pulse 1.2s infinite;
}
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes pulse {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--warm-gray);
}
.empty-state p { font-size: 0.75rem; letter-spacing: 0.1em; line-height: 1.8; }

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--cream); }
::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }
`;

function formatTimer(seconden) {
  if (!seconden) return null;
  const m = Math.floor(seconden / 60);
  const s = seconden % 60;
  return m > 0 ? `${m} min${s > 0 ? ` ${s}s` : ""}` : `${s}s`;
}

async function vraagClaude(prompt, geheugen) {
  const response = await fetch("/api/najah", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4000,
      system: buildSystemPrompt(geheugen),
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!response.ok) throw new Error(`API fout: ${response.status}`);
  const data = await response.json();
  const tekst = data.content.find((b) => b.type === "text")?.text || "";
  const clean = tekst.replace(/```json\n?|\n?```/g, "").trim();
  return JSON.parse(clean);
}

function ReceptKaart({ recept, onFeedback, toonFeedback = true }) {
  const [feedback, setFeedback] = useState("");
  const [opgeslagen, setOpgeslagen] = useState(false);

  const stuurFeedback = () => {
    if (!feedback.trim()) return;
    onFeedback(recept.title, feedback);
    setOpgeslagen(true);
    setFeedback("");
  };

  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <div>
          <span className="recipe-tag">{recept.keuken}</span>
          <span className="recipe-tag">{recept.dag}</span>
        </div>
        <h2 className="recipe-title">{recept.title}</h2>
        <p className="recipe-desc">{recept.beschrijving}</p>
      </div>

      <div className="recipe-meta">
        <div className="meta-item">
          <span className="meta-label">Actief</span>
          <span className="meta-value">{recept.actieve_tijd_minuten} min</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Totaal</span>
          <span className="meta-value">{recept.totale_tijd_minuten} min</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Porties</span>
          <span className="meta-value">{recept.porties}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Kcal/portie</span>
          <span className="meta-value">{recept.macros_per_portie?.kcal}</span>
        </div>
      </div>

      <div className="recipe-body">
        <p className="section-title">Ingrediënten</p>
        <div className="ingredients-grid">
          {recept.ingredienten?.map((ing, i) => (
            <div key={i} className="ingredient-item">
              <span>{ing.naam}</span>
              <span className="ingredient-amount">
                {ing.hoeveelheid}{ing.eenheid}
              </span>
            </div>
          ))}
        </div>

        <p className="section-title">Bereiding</p>
        <div className="steps-list">
          {recept.stappen?.map((stap, i) => (
            <div key={i} className="step-item">
              <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
              <div className="step-content">
                <div className="step-title">{stap.titel}</div>
                <div className="step-text">{stap.instructie}</div>
                {stap.timer_seconden && (
                  <span className="step-timer">⏱ {formatTimer(stap.timer_seconden)}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="info-blocks">
          <div className="info-block peuter">
            <div className="info-block-title">👶 Voor je zoontje</div>
            <p>{recept.peuter_aanpassing}</p>
          </div>
          <div className="info-block allergie">
            <div className="info-block-title">⚠️ Allergie check</div>
            <p>{recept.allergie_check}</p>
          </div>
          <div className="info-block macros">
            <div className="info-block-title">Macros per portie</div>
            <div className="macros-grid">
              <div className="macro-item">
                <span className="macro-val">{recept.macros_per_portie?.kcal}</span>
                <span className="macro-lbl">kcal</span>
              </div>
              <div className="macro-item">
                <span className="macro-val">{recept.macros_per_portie?.eiwit_g}g</span>
                <span className="macro-lbl">eiwit</span>
              </div>
              <div className="macro-item">
                <span className="macro-val">{recept.macros_per_portie?.vet_g}g</span>
                <span className="macro-lbl">vet</span>
              </div>
              <div className="macro-item">
                <span className="macro-val">{recept.macros_per_portie?.koolhydraten_g}g</span>
                <span className="macro-lbl">koolhyd.</span>
              </div>
            </div>
          </div>
          {recept.batch_tip && (
            <div className="info-block batch">
              <div className="info-block-title">🍱 Batch tip</div>
              <p>{recept.batch_tip}</p>
            </div>
          )}
        </div>
      </div>

      {toonFeedback && (
        <div className="feedback-section">
          <p className="section-title">Feedback geven</p>
          {opgeslagen ? (
            <p style={{ fontSize: "0.78rem", color: "var(--sage)", letterSpacing: "0.05em" }}>
              ✓ Feedback opgeslagen — wordt meegenomen in volgende recepten
            </p>
          ) : (
            <>
              <textarea
                placeholder="Wat vonden jullie ervan? Te zout, te mild, te complex? Dit wordt onthouden..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button className="btn-small" onClick={stuurFeedback}>
                Feedback opslaan
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function WeekmenuKaart({ weekmenu }) {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h2 className="recipe-title" style={{ fontSize: "1.6rem" }}>Weekmenu Familie Najah</h2>
      </div>
      <div className="recipe-body">
        <div className="week-grid">
          {weekmenu.week?.map((dag, i) => (
            <div key={i} className="week-day">
              <div className="week-day-header">{dag.dag}</div>
              <div className="week-day-body">
                {[
                  { label: "Ontbijt", val: dag.ontbijt },
                  { label: "Snack", val: dag.snack_ochtend },
                  { label: "Avondeten", val: dag.avondeten },
                  { label: "Snack avond", val: dag.snack_avond },
                ].map((meal, j) => (
                  <div key={j} className="week-meal">
                    <div className="week-meal-label">{meal.label}</div>
                    <div>{meal.val}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BoodschappenKaart({ lijst }) {
  const cats = lijst.categorieën || {};
  const labels = {
    vlees_vis: "🥩 Vlees & Vis",
    groenten: "🥦 Groenten",
    zuivel: "🥛 Zuivel",
    droog_blik: "🥫 Droog & Blik",
    kruiden_specerijen: "🌿 Kruiden & Specerijen",
    overig: "📦 Overig",
  };

  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h2 className="recipe-title" style={{ fontSize: "1.6rem" }}>Boodschappenlijst</h2>
        {lijst.gebaseerd_op?.length > 0 && (
          <p className="recipe-desc">Gebaseerd op: {lijst.gebaseerd_op.join(", ")}</p>
        )}
      </div>
      <div className="recipe-body">
        <div className="boodschappen-grid">
          {Object.entries(cats).map(([key, items]) =>
            items?.length > 0 ? (
              <div key={key} className="boodschappen-cat">
                <div className="boodschappen-cat-header">{labels[key] || key}</div>
                {items.map((item, i) => (
                  <div key={i} className="boodschappen-item">
                    <span>{item.naam}</span>
                    <span className="boodschappen-amount">
                      {item.hoeveelheid}{item.eenheid}
                    </span>
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default function RestaurantNajah() {
  const [tab, setTab] = useState("recept");
  const [invoer, setInvoer] = useState("");
  const [bezig, setBezig] = useState(false);
  const [huidig, setHuidig] = useState(null);
  const [fout, setFout] = useState(null);
  const [geschiedenis, setGeschiedenis] = useState(() => {
    try {
      const v = localStorage.getItem("najah_geschiedenis");
      return v ? JSON.parse(v) : [];
    } catch { return []; }
  });

  const slaGeschiedenisOp = useCallback((nieuwe) => {
    setGeschiedenis(nieuwe);
    localStorage.setItem("najah_geschiedenis", JSON.stringify(nieuwe));
  }, []);

  const verwerkFeedback = useCallback((titel, feedbackTekst) => {
    const bijgewerkt = geschiedenis.map((item) =>
      item.title === titel
        ? { ...item, feedback: feedbackTekst, feedback_datum: new Date().toLocaleDateString("nl-NL") }
        : item
    );
    slaGeschiedenisOp(bijgewerkt);
  }, [geschiedenis, slaGeschiedenisOp]);

  const genereer = async () => {
    if (!invoer.trim() && tab !== "weekmenu" && tab !== "boodschappen") return;
    setBezig(true);
    setFout(null);
    setHuidig(null);

    try {
      let prompt = invoer.trim();

      if (tab === "recept" && !prompt) {
        prompt = "Geef me een nieuw recept passend bij ons smaakprofiel.";
      } else if (tab === "weekmenu") {
        prompt = `Maak een compleet weekmenu voor 5 dagen (maandag t/m vrijdag) voor Familie Najah. Doordeweeks snelle recepten, variatie over alle keukens. ${invoer}`;
      } else if (tab === "boodschappen") {
        const laatste3 = geschiedenis.slice(-3).map((r) => r.title);
        prompt = `Maak een boodschappenlijst voor de volgende recepten: ${laatste3.join(", ")}. ${invoer ? `Extra wensen: ${invoer}` : ""}`;
      }

      const resultaat = await vraagClaude(prompt, geschiedenis);

      if (resultaat.type === "recept") {
        const nieuw = {
          ...resultaat,
          datum: new Date().toLocaleDateString("nl-NL"),
          feedback: null,
        };
        slaGeschiedenisOp([...geschiedenis, nieuw]);
      }

      setHuidig(resultaat);
      setInvoer("");
    } catch (e) {
      setFout(`Er ging iets mis: ${e.message}. Controleer of ANTHROPIC_API_KEY is ingesteld.`);
    } finally {
      setBezig(false);
    }
  };

  const tabNav = [
    { id: "recept", label: "Recept" },
    { id: "weekmenu", label: "Weekmenu" },
    { id: "boodschappen", label: "Boodschappen" },
    { id: "geschiedenis", label: `Archief (${geschiedenis.length})` },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="header">
          <h1>Restaurant <span>Najah</span></h1>
          <p>Persoonlijk gezins kooksysteem · Familie Najah</p>
        </div>

        <nav className="nav">
          {tabNav.map((t) => (
            <button
              key={t.id}
              className={tab === t.id ? "active" : ""}
              onClick={() => { setTab(t.id); setHuidig(null); setFout(null); }}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {tab !== "geschiedenis" && (
          <div className="input-section">
            <div className="input-row">
              <input
                type="text"
                placeholder={
                  tab === "recept"
                    ? "Bijv: 'Geef me iets Aziatisch voor doordeweeks' of laat leeg voor een verrassing..."
                    : tab === "weekmenu"
                    ? "Optioneel: extra wensen voor het weekmenu..."
                    : "Optioneel: specifieke recepten of wensen..."
                }
                value={invoer}
                onChange={(e) => setInvoer(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && genereer()}
              />
              <button className="btn-gold" onClick={genereer} disabled={bezig}>
                {bezig ? "..." : tab === "recept" ? "Genereer" : tab === "weekmenu" ? "Plan week" : "Maak lijst"}
              </button>
            </div>
          </div>
        )}

        {bezig && (
          <div className="loading">
            <div className="loading-dots">
              <span /><span /><span />
            </div>
            Najah&apos;s keuken denkt na...
          </div>
        )}

        {fout && (
          <div style={{ padding: "1rem 1.25rem", background: "#fff0f0", border: "1px solid var(--spice)", marginBottom: "1.5rem", fontSize: "0.78rem", color: "var(--spice)" }}>
            {fout}
          </div>
        )}

        {huidig?.type === "recept" && (
          <ReceptKaart recept={huidig} onFeedback={verwerkFeedback} toonFeedback={true} />
        )}
        {huidig?.type === "weekmenu" && (
          <WeekmenuKaart weekmenu={huidig} />
        )}
        {huidig?.type === "boodschappenlijst" && (
          <BoodschappenKaart lijst={huidig} />
        )}

        {tab === "geschiedenis" && (
          <div>
            {geschiedenis.length === 0 ? (
              <div className="empty-state">
                <p>Nog geen recepten opgeslagen.<br />Genereer je eerste recept om te beginnen.</p>
              </div>
            ) : (
              <div className="history-list">
                {[...geschiedenis].reverse().map((recept, i) => (
                  <div
                    key={i}
                    className="history-item"
                    onClick={() => { setHuidig(recept); setTab("recept"); }}
                  >
                    <div className="history-left">
                      <div className="history-title">{recept.title}</div>
                      <div className="history-meta">
                        {recept.keuken} · {recept.dag} · {recept.datum}
                      </div>
                      {recept.feedback && (
                        <div className="history-feedback">&ldquo;{recept.feedback}&rdquo;</div>
                      )}
                    </div>
                    <span className="history-arrow">→</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
