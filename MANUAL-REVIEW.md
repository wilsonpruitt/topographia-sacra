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
- [ ] `mount-ebal` — claimed `2:257`
- [ ] `mount-gerizim` — claimed `2:993`
- [ ] `gibeon` — claimed `2:1010`
- [ ] `chephirah` — claimed `1:898`
- [ ] `beeroth` — claimed `1:646`
- [ ] `kiriath-jearim` — claimed `4:84`
- [ ] `jerusalem` — claimed `3:747`
- [ ] `hebron` — claimed `3:106`
- [ ] `jarmuth` — claimed `3:645`
- [ ] `lachish` — claimed `4:114`
- [ ] `eglon` — claimed `2:319`
- [ ] `beth-horon` — claimed `1:692`
- [ ] `azekah` — claimed `1:537`
- [ ] `makkedah` — claimed `4:478`
- [ ] `valley-of-aijalon` — claimed `1:130`
- [ ] `libnah` — claimed `4:322`
- [ ] `gezer` — claimed `2:998`
- [ ] `debir` — claimed `2:114`
- [ ] `kadesh-barnea` — claimed `4:1`
- [ ] `gaza` — claimed `2:912`
- [ ] `goshen-of-judah` — claimed `2:1077`
- [ ] `hazor` — claimed `3:87`
- [ ] `madon` — claimed `4:469`
- [ ] `shimron` — claimed `5:1219`
- [ ] `achshaph` — claimed `1:55`
- [ ] `chinneroth` — claimed `1:909`
- [ ] `dor` — claimed `2:223`
- [ ] `mount-hermon` — claimed `3:158`
- [ ] `merom` — claimed `4:706`
- [ ] `sidon` — claimed `6:17`
- [ ] `misrephoth-maim` — claimed `4:881`
- [ ] `mount-halak` — claimed `3:25`
- [ ] `baal-gad` — claimed `1:545`
- [ ] `anab` — claimed `1:222`
- [ ] `gath` — claimed `2:908`
- [ ] `ashdod` — claimed `1:478`
- [ ] `heshbon` — claimed `3:181`
- [ ] `ashtaroth` — claimed `1:491`
- [ ] `arnon` — claimed `1:399`
- [ ] `aroer` — claimed `1:399`
- [ ] `jabbok` — claimed `3:587`
- [ ] `beth-jeshimoth` — claimed `1:687`
- [ ] `pisgah` — claimed `5:373`
- [ ] `edrei` — claimed `2:309`
- [ ] `salecah` — claimed `5:902`
- [ ] `geder` — claimed `2:923`
- [ ] `hormah` — claimed `3:288`
- [ ] `arad` — claimed `1:331`
- [ ] `adullam` — claimed `1:80`
- [ ] `tappuah` — claimed `6:319`
- [ ] `hepher` — claimed `3:138`
- [ ] `aphek` — claimed `1:275`
- [ ] `lasharon` — claimed `4:233`
- [ ] `taanach` — claimed `6:287`
- [ ] `megiddo` — claimed `4:666`
- [ ] `kedesh` — claimed `4:11`
- [ ] `jokneam` — claimed `3:937`
- [ ] `mount-carmel` — claimed `1:874`
- [ ] `tirzah` — claimed `6:573`

## Identifications and coordinates

Pin choices made on best understanding of current scholarship; flag if a different candidate should be primary, or if the coordinates need adjustment.

- [ ] **Shittim** (`[31.8407, 35.6810]`, Tell el-Hammam). Tell el-Hammam is the leading recent candidate but is also the site Steven Collins has controversially proposed for Sodom — pin choice may want to default to Tell el-Kefrein (the older consensus) instead, especially if you don't want the project to read as endorsing Collins's broader claims. Footnote already names both.
- [ ] **Zarethan** (`[32.2350, 35.5810]`, Tell es-Saʿidiyeh). Pritchard's identification is widely held but not universal; verify it's still the leading candidate vs Tell Umm Hamad.
- [ ] **Adam** (`[32.0985, 35.5520]`, Tell ed-Damiyeh). Generally secure — confirm coordinates against an atlas.
- [ ] **Dead Sea** (`[31.5, 35.5]`, mid-sea). Pin sits in the middle of the lake; consider whether the north shore (where the Jordan empties) is more useful for narrative-context purposes when chapters reference it as the destination of the Jordan's flow.
- [ ] **The Jordan** (`[31.8378, 35.5450]`). Pin sits at the traditional crossing-point opposite Jericho (el-Maghtas / Qasr el-Yahud). Confirm this is the desired anchor for chapters that reference the Jordan as a corridor or boundary rather than a crossing.
- [ ] **Mount Ebal / Mount Gerizim** (`[32.2350, 35.2720]` / `[32.2000, 35.2740]`). Summits estimated; verify against an atlas. The Ebal v.30 footnote covers the MT-vs-Samaritan/4QJosh<sup>a</sup> textual question, which Wilson should sanity-check.
- [ ] **Beeroth** (`[31.901, 35.215]`, el-Bireh). Disputed; alternatives Khirbet el-Burj and Nebi Samwil. Confirm el-Bireh remains the appropriate primary.
- [ ] **Gibeon, Chephirah, Kiriath Jearim** — all identified, but verify coordinates vs. Sacred Bridge / Macmillan.
- [ ] **Lachish stratigraphy footnote** (10:31). Late Bronze destruction layer dating + chronology debate paraphrased — sanity-check against Ussishkin or a current handbook before treating as final.
- [ ] **Eglon** (`[31.5695, 34.7700]`, Tell Aitun). Confirm Tell Aitun / Khirbet ʿAjlan is still the consensus over Tell el-Hesi.
- [ ] **Makkedah** (`[31.5800, 34.9300]`, Khirbet el-Qom). Disputed; Khirbet Beit Maqdum the alternative. Confirm primary.
- [ ] **Libnah** (`[31.6230, 34.8730]`, Tel Burna). Verify Tel Burna is the current consensus.
- [ ] **Debir** (`[31.4011, 35.0167]`, Khirbet Rabud). Confirm Kochavi's identification has held.
- [ ] **Goshen-of-Judah** (`[31.3800, 34.9000]`). Region with no precise center — verify the regional-pin approach is acceptable, or refine the location.
- [ ] **Beth Horon** — pin marks Upper Beth Horon (Beit ʿUr al-Foqa). Coordinates of upper village need verification; lower village (Beit ʿUr al-Tahta) is mentioned in the entry but not separately pinned.
- [ ] **Madon** (Qarn Hattin). Verify Qarn Hattin remains a defensible primary, vs Tel Madin.
- [ ] **Achshaph** (Tell Keisan). Confirm consensus.
- [ ] **Merom** (`[32.969, 35.486]`, Lake Hula default). Pin sits at the traditional Hula identification; the Tell Meron alternative is increasingly favored. Decide whether to switch.
- [ ] **Misrephoth Maim, Mount Halak, Baal Gad** — all conjectural; coordinates approximate. Verify or downgrade tier as appropriate.
- [ ] **Heshbon, Arad** — both have the Late-Bronze stratigraphic problem (no LB occupation despite the conquest narrative). Decide whether to add a footnote in their first respective chapters of action (Heshbon currently footnoted nowhere; Arad currently footnoted nowhere). The chapter-12 listing is too thin to carry the discussion; might want a footnote when these places appear in narrative chapters (Heshbon in Numbers-territory; Arad never gets a real Joshua chapter beyond 12).
- [ ] **Shimron Meron** (12:20). Treated as a single tag pointing at `shimron`. Some scholars treat “Shimron Meron” as a scribal join of Shimron + Meron (and notice the LXX has separate kings, hitting 32 not 31). Decide whether to disambiguate.
- [ ] **Goyim in Gilgal** (12:23). Tag intentionally omitted; footnote explains. If you'd prefer a Galilean Gilgal pin (e.g. Jiljulieh) flag here.
- [ ] **Multiple Apheks** (12:18). Verify the Sharon Aphek is the right primary.

## Footnote coverage decisions

- [ ] **Joshua 3 v.16 — the crossing point.** The chapter's Adam footnote covers the geographic mechanism, but the *crossing point itself* (opposite Jericho, traditional el-Maghtas) is unfootnoted. Decide whether a separate Jordan footnote belongs on v.16 or v.17 explaining where the crossing happened.
- [ ] **Jordan footnote, ch. 1.** Deferred from ch. 1 with the reasoning that the crossing-point note belongs in ch. 3. Confirm ch. 3 should carry that note (see above).

## WEB text accuracy

I (Claude) keyed verses from memory, with smart quotes manually inserted. The WEB is public domain and authoritative — paste from a canonical source (e.g., ebible.org/web/) and diff before treating any chapter as final.

- [ ] Joshua 1
- [ ] Joshua 2
- [ ] Joshua 3
- [ ] Joshua 4
- [ ] Joshua 5
- [ ] Joshua 6 (came with repo — provenance unknown)
- [ ] Joshua 7 (came with repo — provenance unknown)
- [ ] Joshua 8
- [ ] Joshua 9
- [ ] Joshua 10
- [ ] Joshua 11
- [ ] Joshua 12

## Site-level

- [ ] GitHub push deferred — `gh` is authed as `littleeachdayapp-droid` but other Wroot Press repos live under `wilsonpruitt`. Decide which account this repo lives under and push.
- [ ] Vercel project currently deployed via CLI; consider connecting to the GitHub repo for auto-deploys once GitHub is sorted.

## How to use this file

When you verify an item, tick the box and (if a value changed) note the correction in the commit message. When a new chapter introduces a new gazetteer entry or contested decision, add it to the relevant section here.
