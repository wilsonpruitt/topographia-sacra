# Manual Review Items

Things that need a human eye against authoritative sources before they should be treated as production-correct. Add new items as they come up; tick them off as they're verified.

## ABD page references

I (Claude) drafted gazetteer entries without having ABD volumes in front of me. Volume-letter ranges are correct; specific page numbers are best-estimate. Verify each against the actual *Anchor Bible Dictionary* and correct the `abd` field where wrong.

**Pre-existing (came with the repo, provenance unknown — verify):**
- [ ] `jericho` — claimed `3:723–740`
- [ ] `gilgal` — claimed `2:1022–1024`
- [ ] `jordan` — claimed `3:953–958`
- [ ] `ai` (chapter 7 — already in repo) — verify whichever page is on it

**Added by Claude 2026-05-07:**
- [ ] `shittim` — claimed `5:1222`
- [ ] `adam` — claimed `1:62`
- [ ] `zarethan` — claimed `6:1041`
- [ ] `dead-sea` — claimed `2:65`

## Identifications and coordinates

Pin choices made on best understanding of current scholarship; flag if a different candidate should be primary, or if the coordinates need adjustment.

- [ ] **Shittim** (`[31.8407, 35.6810]`, Tell el-Hammam). Tell el-Hammam is the leading recent candidate but is also the site Steven Collins has controversially proposed for Sodom — pin choice may want to default to Tell el-Kefrein (the older consensus) instead, especially if you don't want the project to read as endorsing Collins's broader claims. Footnote already names both.
- [ ] **Zarethan** (`[32.2350, 35.5810]`, Tell es-Saʿidiyeh). Pritchard's identification is widely held but not universal; verify it's still the leading candidate vs Tell Umm Hamad.
- [ ] **Adam** (`[32.0985, 35.5520]`, Tell ed-Damiyeh). Generally secure — confirm coordinates against an atlas.
- [ ] **Dead Sea** (`[31.5, 35.5]`, mid-sea). Pin sits in the middle of the lake; consider whether the north shore (where the Jordan empties) is more useful for narrative-context purposes when chapters reference it as the destination of the Jordan's flow.
- [ ] **The Jordan** (`[31.8378, 35.5450]`). Pin sits at the traditional crossing-point opposite Jericho (el-Maghtas / Qasr el-Yahud). Confirm this is the desired anchor for chapters that reference the Jordan as a corridor or boundary rather than a crossing.

## Footnote coverage decisions

- [ ] **Joshua 3 v.16 — the crossing point.** The chapter's Adam footnote covers the geographic mechanism, but the *crossing point itself* (opposite Jericho, traditional el-Maghtas) is unfootnoted. Decide whether a separate Jordan footnote belongs on v.16 or v.17 explaining where the crossing happened.
- [ ] **Jordan footnote, ch. 1.** Deferred from ch. 1 with the reasoning that the crossing-point note belongs in ch. 3. Confirm ch. 3 should carry that note (see above).

## WEB text accuracy

I (Claude) keyed verses from memory, with smart quotes manually inserted. The WEB is public domain and authoritative — paste from a canonical source (e.g., ebible.org/web/) and diff before treating any chapter as final.

- [ ] Joshua 1
- [ ] Joshua 2
- [ ] Joshua 3
- [ ] Joshua 6 (came with repo — provenance unknown)
- [ ] Joshua 7 (came with repo — provenance unknown)

## Site-level

- [ ] GitHub push deferred — `gh` is authed as `littleeachdayapp-droid` but other Wroot Press repos live under `wilsonpruitt`. Decide which account this repo lives under and push.
- [ ] Vercel project currently deployed via CLI; consider connecting to the GitHub repo for auto-deploys once GitHub is sorted.

## How to use this file

When you verify an item, tick the box and (if a value changed) note the correction in the commit message. When a new chapter introduces a new gazetteer entry or contested decision, add it to the relevant section here.
