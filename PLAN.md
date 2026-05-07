# Topographia Sacra

A Wroot Press series of geographical editions of place-heavy biblical books, pairing the World English Bible text with maps of the places named in each chapter. Identifications follow the *Anchor Bible Dictionary* (Freedman, 1992); disputed sites get footnotes naming the alternative candidates.

The first edition is **The Book of Joshua**. The series is structured to extend to Judges, Samuel, Kings, and other place-heavy books, sharing a single canonical gazetteer across the whole corpus.

This document is the buildout plan and the working contract for the series. If you (Claude Code, future Wilson, or a collaborator) are picking up where chapters 6 and 7 of Joshua left off, read this first.

---

## Architecture

A static site, no build step. Files are served directly. The data lives in JSON, the chrome lives in HTML/CSS/JS. Deployed to `topographia.wrootpress.com`.

```
.
├── index.html                  Series landing (printed title-page treatment)
├── gazetteer.html              Master gazetteer (cross-book, all places)
├── assets/
│   ├── edition.css             Shared stylesheet (17th-c imprint register)
│   └── chapter.js              Chapter renderer (reads data-book + data-chapter)
├── data/
│   ├── gazetteer.json          Canonical cross-book place index (source of truth)
│   └── books.json              Series manifest — drives the landing page
└── books/
    └── joshua/
        ├── index.html          Book chapter index (reads meta.json)
        ├── meta.json           Book-level config: title, chapter count, built[]
        ├── chapters/
        │   ├── 6.json          Chapter 6 verses + footnotes (built)
        │   ├── 7.json          Chapter 7 verses + footnotes (built)
        │   └── ...             One per chapter
        ├── 6/index.html        Chapter 6 page (data-book="joshua" data-chapter="6")
        ├── 7/index.html        Chapter 7 page (data-book="joshua" data-chapter="7")
        └── N/index.html        One per chapter; identical except data-chapter="N"
```

To **add a chapter** within an existing book: (1) create `books/{book}/chapters/N.json`, (2) create `books/{book}/N/index.html` (copy any existing chapter template, change `data-chapter`), (3) add `N` to `built` in `books/{book}/meta.json`, (4) fill in any missing places in `data/gazetteer.json` (each appearance entry needs `book`, `chapter`, `verses`).

To **add a new book**: create `books/{slug}/{meta.json,index.html,chapters/}`, add an entry to `data/books.json`, and append `book: "{slug}"` on each appearance entry as you tag places. The shared gazetteer + renderer + CSS need no changes.

## Visual register

17th-c imprint: laid-paper cream + sepia ink + map-blue accent. Display in **IM Fell English** / **IM Fell English SC** (Igino Marini's digitization of the John Fell types cut for OUP in the 1670s, free on Google Fonts). Body in **EB Garamond**. Chapter pages open with a printed title-block: rule, fleuron (`❦`), thin rule, then book + chapter line in small caps. No engravings or black-letter — typographic ornament only.

Map pin tiers: solid map-blue (identified), paler map-blue (probable), outlined cream (conjectural).

---

## Editorial conventions

### Text

- **Source:** World English Bible (WEB). Public domain. Copy verse text *exactly* from a canonical WEB source. Do not paraphrase, modernize, or substitute punctuation.
- **Smart quotes:** Use Unicode curly quotes (` " " ' ' `) in all verse text. They render correctly in EB Garamond and read better than straight quotes. JSON requires them as `\u201C \u201D \u2018 \u2019` (or just paste them and let the encoding handle it).
- **The divine name:** WEB uses "Yahweh" — preserve this, don't substitute "the LORD."
- **Verse numbers:** stored as `n: <integer>`, rendered by the chapter renderer as a superscript Inter glyph. Don't include verse numbers inside the `html` field.

### Place tagging

Every named place that resolves to a coordinate gets wrapped:

```html
<span class="place" data-key="jericho">Jericho</span>
```

The `data-key` must match a key in `data/gazetteer.json` exactly. The visible text inside the span is whatever the verse actually says — so "Jericho", "the city", "the camp" (for Gilgal in Joshua 6:11), or "your fathers" if context makes that a geographical reference. The renderer uses the key for cross-highlighting; the visible text stays true to the WEB.

**When NOT to tag:**
- Generic geography ("the river", "the mountain") that doesn't resolve to a specific named place.
- Tribal names used as people-groups ("the children of Judah") rather than territories.
- Places named in lists that the chapter doesn't *narratively* engage with — though for the tribal allotment chapters (15–19) every place in the list will need a tag and a gazetteer entry.

### Footnotes

Footnotes are scoped per chapter, numbered from 1, and live in the `footnotes` array of `chapters/N.json`. Markers in the verse HTML look like:

```html
<sup class="footnote-marker">1</sup>
```

The renderer makes these clickable; clicking scrolls to the footnote.

A place needs a footnote if any of these are true:

1. **Disputed identification** — list the leading candidates with their proponents, name the consensus, mark which one the pin shows.
2. **Conjectural location** — explain the basis for the conjecture and cite an *ABD* page.
3. **Unidentified** — explain that no site has been confirmed and what the textual reasons are (e.g., the place may be a common noun, as with Shebarim in 7:5).
4. **Stratigraphic complication** — for sites whose archaeology is famously hard to align with the biblical narrative (Jericho, Ai), a footnote acknowledges the issue without pretending to resolve it.

Footnote prose is dense but not academic. The aim is "scholarly trade edition," not "journal article." Italicize the place name once at the start of the note. End with the *ABD* reference. Keep notes to 2–4 sentences except for genuinely contested cases (Ai, Gilgal).

### Map view per chapter

Each chapter's `view` field in `books/{book}/chapters/N.json` sets the initial map center and zoom. If omitted, the renderer auto-fits to the chapter's pins with `maxZoom: 11`. Set `view` explicitly when:
- The auto-fit zooms in too far on a tightly clustered campaign (chapters 6, 7, 8 — keep them at zoom 11 with Jerusalem visible).
- The chapter spans a wide area (chapter 10's southern campaign, chapter 11's northern campaign — these need wider framing).
- A specific landmark (the Jordan, Jerusalem, the Dead Sea) should be visible for orientation.

---

## Gazetteer schema

`data/gazetteer.json` is the canonical place index. Each entry:

```json
"jericho": {
  "name": "Jericho",
  "name_alt": ["Tell es-Sultan"],
  "coords": [31.8714, 35.4442],
  "tier": "identified",
  "id": "Tell es-Sultan, on the western edge of the Jordan Valley...",
  "abd": "3:723–740",
  "alternatives": [
    { "site": "alternative site name", "source": "scholar / school" }
  ],
  "appearances": [
    { "chapter": 6, "verses": [1, 2, 6, 25, 26] }
  ]
}
```

**Keys** are stable lowercase slugs, hyphenated, used in `data-key=` attributes throughout the chapter HTMLs. Once a key is set, never change it without updating every chapter that references it.

**Tiers:**
- `identified` — scholarly consensus, archaeological confirmation. Solid fen-blue pin.
- `probable` — leading candidate, some scholarly dispute. Lighter fen-mist pin.
- `conjectural` — best guess, multiple candidates, or general region only. Outlined pin.
- `unknown` — named but unlocatable. **No coordinates, no pin** — `coords: null`. Listed in the gazetteer page and in chapter footnotes only.

**Coordinates:** WGS84 decimal degrees, `[lat, lng]`. Source from *ABD*, the *Sacred Bridge* atlas (Rainey & Notley 2006), or Carta's *Bible Atlas*. Round to 4 decimal places (~10m precision is fine; we don't need archaeological precision).

**The `abd` field** is a string reference like `"1:125–130"` (volume:pages). When a place isn't in *ABD*, put the reference you used in its place ("Sacred Bridge §X" or similar).

**The `alternatives` array** is for disputed identifications. List leading candidates with their proponents. The chapter footnote should cite this material when relevant.

**The `appearances` array** is the cross-reference index. Every chapter appearance gets logged here — this powers the gazetteer page's per-place chapter list. When you add a tag for a place in a new chapter, update its appearances.

---

## Per-chapter buildout checklist

For each chapter:

1. **Read the WEB text** of the chapter end to end.
2. **List every named place.** Cross-check with a Bible atlas index for places whose Hebrew name is rare or might use a non-obvious English transliteration.
3. **For each new place** (not already in `gazetteer.json`):
   - Look up in *ABD* — find the entry, record the volume:page reference.
   - Decide the tier (identified / probable / conjectural / unknown).
   - Record coordinates from the leading identification, or `null` for unknown sites.
   - Write a 1–3 sentence `id` field summarizing the geographical identification.
   - If disputed, populate `alternatives` with the candidates.
4. **For each existing place** referenced in this chapter, add a `{chapter, verses}` entry to its `appearances` array.
5. **Write the chapter JSON** (`books/{book}/chapters/N.json`):
   - Pick a chapter title (a phrase, not a sentence — see existing chapters).
   - List `places`: array of all gazetteer keys appearing in the chapter, in any order.
   - Set `view` if needed.
   - Verses: paste WEB text, tag places with `<span class="place" data-key="...">...</span>`, add `<sup class="footnote-marker">N</sup>` for footnoted places.
   - Footnotes: number from 1 in the order they appear in the chapter.
6. **Create `books/{book}/N/index.html`** by copying `books/{book}/6/index.html` and changing `data-chapter="6"` to `data-chapter="N"`. That is the only edit.
7. **Add `N` to the `built` array** in `books/{book}/meta.json`.
8. **Test locally:** serve the directory with `python3 -m http.server` and open `/joshua/N/`. Verify: the verses render, the footnotes render, the pins appear, clicking a place name highlights its pin and vice versa, the prev/next pager links work.

---

## Known traps

**Chapter 13–21 is a different artifact.** The tribal allotment chapters are dense lists of toponyms — chapter 15 alone names ~120 places, many appearing nowhere else in scripture. A meaningful fraction are unidentified. Before starting these, decide:

1. Whether to overlay tribal allotment polygons on the basemap (yes; data is available from the Macmillan/Carta atlases, or from open-licensed GeoJSON like [openbible.info](https://openbible.info/geo/)).
2. Whether the reading UI needs a "places by region" sidebar mode for these chapters specifically.
3. Whether some unidentified-only sites get pinned at their general region (e.g., "somewhere in the Judean Shephelah") with a clearly marked `conjectural` tier and a footnote, vs. omitted from the map entirely.

I would *not* try to start chapter 15 without making these decisions first. Chapters 1–12 should be done first; treat 13–21 as a phase 2.

**Chapter 10 (the long campaign).** Makkedah → Libnah → Lachish → Eglon → Hebron → Debir is a route, not a cluster. Worth considering whether to draw a polyline in narrative order. The renderer doesn't currently support this; if added, do it as an opt-in `route: [key, key, ...]` field in the chapter JSON.

**Cumulative campaign view.** A toggle showing "all places mentioned through chapter N" rather than only this chapter's places would be powerful for chapters 6–12. Not implemented; consider for phase 2.

**The Ai problem.** Chapter 7 already exercises the disputed-site footnote pattern at full volume. Use that footnote (`chapters/7.json`, marker 1) as the template for every other contested identification you write.

---

## Suggested buildout order

1. **Chapter 1** — short, only one tagged place ("the Jordan"), good for getting the rhythm down.
2. **Chapters 2–5** — narrative setup; modest place counts; no major surprises beyond the spies' route into Jericho and Achan-related details.
3. **Chapters 8–12** — the southern and northern campaigns. Heavy named-place density but mostly identifiable sites.
4. **Decision point.** Make the chapter-13–21 architectural decisions described under "Known traps" before proceeding.
5. **Chapters 13–21** — the tribal allotment chapters. Slowest going.
6. **Chapters 22–24** — short narrative coda. Mostly already-gazetted places.

After all chapters are done:

- Audit the gazetteer for consistency (every key referenced in any chapter exists; every entry has `appearances` filled in).
- Generate a printable-PDF version (separate concern, separate file).
- Consider Hebrew (Westminster Leningrad Codex) and/or Vulgate parallel columns as a v2 feature.

---

## Reference works (in order of use)

- **Anchor Bible Dictionary** (Freedman, ed., Doubleday 1992). Primary identification authority. Cite as `vol:page`.
- **Rainey & Notley, *The Sacred Bridge*** (Carta 2006). For routes, regions, and contested identifications where *ABD* is too brief.
- **Aharoni & Avi-Yonah, *The Macmillan Bible Atlas*** (multiple editions). For coordinates and tribal allotment polygons.
- **openbible.info** geographic data — open-licensed coordinates, useful for sanity-checking, NOT a substitute for *ABD* on disputed cases.

---

## Tone

This is a Wroot Press edition. The visual register is *quiet, English, slightly bookish* — restraint, precision, generous typography. The footnote register is *scholarly trade* — informed, plain, willing to acknowledge dispute, not posing as a journal article. Don't oversell certainty (not every identification is settled); don't undersell consensus (most identifications in chapters 1–12 are not seriously contested).

Reject any output that drifts toward generic SaaS aesthetics or devotional simplification. The brand sheet at `wroot-labs/design-system/` is the judge.
