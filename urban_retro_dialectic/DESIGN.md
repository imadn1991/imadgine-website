# Design System: The Gritty Grid

## 1. Overview & Creative North Star
**Creative North Star: "The Gritty Grid"**

This design system is a manifesto against the "generic smooth." It is built for a mission-driven, urban-centric experience that feels like a high-end independent publication found in a gallery or a street corner in a bustling metropolis. We are moving away from the soft, rounded, "safe" aesthetics of modern SaaS. Instead, we embrace **Urban Retro Dialectic**—the tension between structured architectural grids and the raw, unpolished reality of the street.

The layout should feel like a physical object. We achieve this through intentional asymmetry, extreme typographic contrast, and a refusal to use rounded corners. Everything is sharp, tactile, and unapologetic. This is not a "user interface"; it is a digital broadside.

---

## 2. Colors
Our palette is restricted to three pillars: **PAPER**, **INK**, and **ORANGE**. This mimics the limited-run printing processes of underground zines.

*   **PAPER (#fbf9f2):** Our primary surface. It is not white; it is the color of high-grade unbleached paper stock. Use `surface` for the main background.
*   **INK (#121216):** Our structural soul. Use `on-surface` for text and `outline` for our signature heavy borders.
*   **BOLD ORANGE (#ab3600 / #FF5F1F):** The action catalyst. Use `primary` for CTAs and `primary-container` for highlight moments.

### The "Ink-Stroke" Rule
Forget the 1px divider. In this system, 1px lines are forbidden for sectioning. Structural boundaries must be defined by either:
1.  **Tonal Shifts:** A `surface-container-low` section sitting directly against a `surface` background.
2.  **Heavy Architecture:** A 2px or 4px solid `INK` border (`outline`). If it’s not heavy, it’s not there.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of paper.
*   **Base:** `surface`
*   **Secondary Content:** `surface-container-low`
*   **Interactive Elements/Cards:** `surface-container-highest`
Each layer should feel like it was physically placed on top of the previous one. To add "visual soul," apply a 1-2% **stipple noise overlay** to all surface containers to kill the digital flatness.

---

## 3. Typography
We use typography as a structural element, not just for legibility.

*   **Display & Headlines (Bricolage Grotesque):** This is our "Street Voice." It’s quirky, high-contrast, and aggressive. Use `display-lg` through `headline-sm` with tight letter-spacing (-0.02em) to create an editorial impact.
*   **Body & Titles (Work Sans):** Our "Information Layer." Work Sans provides a neutral, utilitarian counterpoint to the display face. Use `body-md` for standard reading and `title-lg` for sub-headers.
*   **Metadata (Geist Mono):** The "Technical Layer." All labels, timestamps, and data-driven metadata must use `label-md` in Geist Mono. This creates a "mission-driven" feel, reminiscent of a shipping manifest or a terminal.

---

## 4. Elevation & Depth
We reject the concept of "Z-axis" depth through light and shadow. Depth here is **Tonal and Structural**.

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. A `surface-container-lowest` card on a `surface-container-low` background creates a "lifted" effect without a single drop shadow.
*   **Zero Roundedness:** All `border-radius` values are set to `0px`. Sharp corners communicate intentionality and precision.
*   **The "Ink Bleed" Shadow:** When a floating element (like a modal or a primary button) requires a shadow, do not use a soft blur. Use a hard-edged, offset shadow (e.g., `4px 4px 0px #121216`). It should look like a second layer of paper offset behind the first.
*   **Stipple Textures:** Use CSS grain filters on `primary-container` elements. This "Gritty" texture prevents the Bold Orange from looking too "techy" and brings it back to the "Urban Retro" aesthetic.

---

## 5. Components

### Buttons
*   **Primary:** Bold Orange (`primary`) background, 2px Ink (`outline`) border, 0px radius. Text in `label-md` Geist Mono, all-caps.
*   **Secondary:** Paper (`surface`) background, 4px Ink (`outline`) border. This is the "Heavy" variant.
*   **Interaction:** On hover, the button should shift 2px down and 2px right, with the hard shadow disappearing to simulate a physical press.

### Cards & Lists
*   **The Divider Ban:** Never use horizontal rules to separate list items. Use a `surface-container-low` background for even rows and `surface` for odd rows, or use generous vertical spacing (24px+) to allow the grid to breathe.
*   **Heavy Borders:** Use a 2px `outline` on cards to make them feel like framed art pieces.

### Input Fields
*   **Style:** No 4-sided boxes. Use a 2px bottom-border only (`outline`).
*   **Labels:** Always use Geist Mono (`label-sm`) placed *above* the input, never inside as a placeholder.
*   **Focus State:** The bottom border changes to Bold Orange (`primary`) with a subtle stipple texture appearing behind the text area.

### Chips & Metadata
*   Small, rectangular boxes with 1px `outline`. Geist Mono text. These should look like tiny price tags or industrial labels.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace the Grid:** Use thick Ink lines to define the page structure.
*   **Extreme Scale:** Pair massive `display-lg` headlines with tiny `label-sm` mono text for high-end editorial drama.
*   **Intentional Asymmetry:** Let some elements hang off the grid or align to the far right to break the "template" feel.
*   **Texture:** Add subtle noise to backgrounds to give the "Paper" a tactile quality.

### Don't:
*   **No Rounding:** Never use a border-radius. If it’s not a 90-degree angle, it’s a mistake.
*   **No Soft Shadows:** Avoid Gaussian blurs. Use hard-edged offsets or nothing at all.
*   **No Generic Icons:** Use raw, geometric icons or thick-stroke illustrations. Avoid thin, "friendly" icon sets.
*   **No "Safe" Spacing:** Don't be afraid of "wasted" space. Large gaps of `PAPER` background create the feeling of a premium, independent publication.