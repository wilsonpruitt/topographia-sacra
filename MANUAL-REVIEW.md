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

**Added by Claude 2026-05-07 (Joshua 13):**
- [ ] `shihor` — claimed `5:1212`
- [ ] `ekron` — claimed `2:415`
- [ ] `ashkelon` — claimed `1:487`
- [ ] `avvim` — claimed `1:531`
- [ ] `mearah` — claimed `4:656`
- [ ] `aphek-of-amorites` — claimed `1:275` (shared with Sharon Aphek; verify both)
- [ ] `gebal` — claimed `1:683`
- [ ] `lebanon-region` — claimed `4:269`
- [ ] `lebo-hamath` — claimed `3:36`
- [ ] `medeba` — claimed `4:656` (same page as Mearah — almost certainly one is wrong)
- [ ] `dibon` — claimed `2:194`
- [ ] `gilead` — claimed `2:1020`
- [ ] `bashan` — claimed `1:623`
- [ ] `bamoth-baal` — claimed `1:619`
- [ ] `beth-baal-meon` — claimed `1:550`
- [ ] `jahaz` — claimed `3:612`
- [ ] `kedemoth` — claimed `4:10`
- [ ] `mephaath` — claimed `4:696`
- [ ] `kiriathaim` — claimed `4:84` (shared with Kiriath-jearim — verify both)
- [ ] `sibmah` — claimed `6:1`
- [ ] `zereth-shahar` — claimed `6:1083`
- [ ] `beth-peor` — claimed `1:692` (shared with Beth-horon; verify both)
- [ ] `jazer` — claimed `3:650`
- [ ] `rabbah-ammon` — claimed `5:598`
- [ ] `ramath-mizpeh` — claimed `5:617`
- [ ] `betonim` — claimed `1:707`
- [ ] `mahanaim` — claimed `4:472`
- [ ] `debir-east` — claimed `2:115` (shared with southern Debir; verify both)
- [ ] `beth-haram` — claimed `1:680`
- [ ] `beth-nimrah` — claimed `1:692` (shared with Beth-horon and Beth-peor; verify all three)
- [ ] `succoth-east` — claimed `6:217`
- [ ] `zaphon` — claimed `6:1040`

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
- [ ] **Aphek-of-Amorites** (13:4) — pin placed at Afqa (Lebanon) on the Adonis source; alternative is Tell Afaq SE of Damascus. Verify primary.
- [ ] **Lebo-hamath** (13:5) — pin at Lebweh in northern Beqaa. Verify against scholarly atlases; some place the boundary further south.
- [ ] **Aroer that is near Rabbah** (13:25) — currently re-uses the Arnon Aroer pin as a placeholder, with footnote noting the duplication. Add a separate gazetteer entry with a real coordinate (or document it as `unknown`) once the location is decided.
- [ ] **Mahanaim** (13:26, 30) — pin at Tell edh-Dhahab el-Gharbi (west mound). The east mound (el-Sharqi) is the alternative; both are candidates. Confirm which mound.
- [ ] **Mephaath, Jazer, Ramath-Mizpeh, Beth-haram, Zaphon** (13:18, 25, 26, 27) — all conjectural; coordinates approximate and based on commonly-cited candidates. Verify against Sacred Bridge / Macmillan.
- [ ] **Beth Baal Meon** (13:17) — pin at Khirbet Maʿin SW of Madaba. Confirm.
- [ ] **Tribal polygons (Reuben, Gad, half-Manasseh-east)** — added 13 ch.13 as honest convex approximations anchored on already-gazetted boundary cities, NOT traced from the boundary text. Replace with sourced or text-traced polygons before treating as final.
- [ ] **Joshua 13 WEB text** — keyed from ebible.org; spot-check.

## Joshua 15 — gazetteer entries (132 added)

The boundary description (vv.&nbsp;1-12) and Caleb appendix (vv.&nbsp;13-19) entries have full id text and ABD guesses. The four districts (Negev vv.&nbsp;21-32, Shephelah vv.&nbsp;33-44, hill country vv.&nbsp;48-60, wilderness vv.&nbsp;61-62) contain ~95 town entries, most marked `tier: unknown` with skeleton id text. Verification work needed:

- [ ] **All ABD references for ch.&nbsp;15 entries** — especially the boundary cities (Akrabbim, Beth Hoglah, Adummim, En Shemesh, En Rogel, Hinnom, Rephaim, Nephtoah, Chesalon, Beth Shemesh, Timnah, Jabneel) and identified district sites (Beersheba, Ziklag, Eshtaol, Zorah, Socoh-Shephelah, Keilah, Mareshah, Jattir, Maon, Carmel, Ziph-hill, Halhul, Beth Zur, Gedor, En Gedi). Page numbers are best-guess.
- [ ] **Multiple-instance disambiguation slugs**: `kedesh-judah`, `hazor-judah-1`, `hazor-hadattah`, `kerioth-hezron`, `ziph-negev`, `ziph-hill`, `socoh-shephelah`, `socoh-hill`, `tappuah-shephelah` (vs already-gazetted `tappuah`), `aphekah` (vs `aphek` and `aphek-of-amorites`), `timnah-judah`, `timnah-hill`, `zanoah-shephelah`, `zanoah-hill`, `baalah-negev`, `rabbah-judah` (vs `rabbah-ammon`), `gibeah-judah`, `jezreel-judah`, `carmel-judah`, `mizpah-shephelah`, `gederah-judah`, `mount-seir-judah`, `beth-shemesh-judah`, `jabneel-judah`, `beth-dagon-judah`, `achzib-judah`, `goshen-hill`, `rimmon-negev`, `ashnah-1`, `ashnah-2`, `en-gannim-shephelah`. Confirm naming convention is sustainable as more chapters add to the gazetteer.
- [ ] **Skeleton entries** (~80 of them, marked `tier: unknown`) — verify whether any have been securely identified since the standard reference works and need upgrading. Especially: Kabzeel, Moladah, Hazar Shual, Shaaraim, Adithaim, Mizpah-Shephelah, Joktheel, Naamah, Iphtah, Nezib, Achzib-Judah, Shamir, Holon, Giloh, Beth Tappuah, Aphekah, Halhul (already promoted), Rabbah-Judah, Middin, Secacah, Nibshan, City of Salt.
- [ ] **Ziklag pin** at Khirbet a-Raʿi (recent claim) vs Tel Sera (older default) — confirm which to use as primary.
- [ ] **Kiriath Sannah** (v.&nbsp;49) — given as a third name for Debir alongside Kiriath Sepher; not separately tagged. Confirm this gloss is correct, and decide whether to add it as `name_alt` on the existing Debir entry.
- [ ] **Wilderness district / Qumran-area** (vv.&nbsp;61-62) — Cross de Vaux's identifications (Khirbet Mird, Khirbet Qumran, Ain Feshkha, Khirbet es-Samra) against the four unidentified names. Footnote currently records the proposal as speculative; if scholarship has solidified, upgrade tiers.
- [ ] **Joshua 15 WEB text** — keyed from ebible.org; spot-check.

## Judah polygon (text-traced)

- [ ] **Judah polygon** (`tribal-territories.geojson`) — replaced placeholder rectangle with text-traced version (24 vertices) following the Joshua 15:1-12 boundary description. Still `approximate: true` because the unidentified waypoints (Stone of Bohan, Mount Ephron, Mount Seir-Judah, Shikkeron, Mount Baalah) are interpolated rather than placed. Refine when those are securely located.

## Ephraim polygon (text-traced)

- [ ] **Ephraim polygon** — added with ch.16 from Josh 16:5-8. Michmethath is interpolated; the western reach of the Brook of Kanah to the Mediterranean is generalized; the v.7 Ataroth (treated as = Ataroth-Addar) may be a separate Jordan-valley site. `approximate: true`.

## Manasseh-West polygon (text-traced)

- [ ] **Manasseh-West polygon** — added with ch.17 from Josh 17:7-10. Northern boundary (Asher line) is impressionistic; eastern boundary (Issachar line) is approximate. The 'three heights' enclaves (Beth-Shean, Ibleam, Dor, Endor, Taanach, Megiddo) lie outside the polygon, in adjacent tribes per the text. `approximate: true`.

## Benjamin polygon (text-traced)

- [ ] **Benjamin polygon** — added with ch.18 from Josh 18:11-20. Narrow east-west strip in central hill country. `approximate: true`.

## Six new tribal polygons (Simeon, Zebulun, Issachar, Asher, Naphtali, Dan)

- [ ] **Simeon** — notional Negev block around Beersheba; Simeon's town list overlaps Judah's, so the polygon is necessarily approximate.
- [ ] **Zebulun** — anchored on Sarid, Hannathon, Bethlehem-Zebulun, Chisloth-Tabor; northern border at Iphtah-El interpolated.
- [ ] **Issachar** — anchored on Jezreel (Tel Yizreel), Shunem, Mt Tabor, En-Gannim (Jenin); eastern border (Jordan) generalized.
- [ ] **Asher** — coastal strip; northern reach to Sidon/Tyre is aspirational ('even to great Sidon'), not effective control.
- [ ] **Naphtali** — eastern Galilee from Sea of Galilee north into Hula basin; western boundary with Asher impressionistic.
- [ ] **Dan** — coastal plain; Leshem/Tel Dan northern enclave deliberately excluded (named only after the conquest in v. 47).
All six marked `approximate: true`.

## Acts 8-12 — gazetteer entries (8 added)

- [ ] **Caesarea** = Caesarea Maritima (Tel Caesarea) — secure.
- [ ] **Damascus** at the Old City of Damascus — secure.
- [ ] **Tarsus** — secure.
- [ ] **Lydda** at modern Lod — secure.
- [ ] **Sharon** as a coastal-plain region pin — confirm centroid.
- [ ] **Phoenicia** as a coastal region pin — confirm centroid.
- [ ] **Samaria-city** at Sebaste / Sebastiya — secure (the Acts 8:5 'city of Samaria' identification is the editorial default; some readers prefer 'a city of Samaria' i.e. region).
- [ ] **Ethiopia** as a region pin at Meroe — confirm whether Meroe centroid is the right anchor (some prefer a more northern Nubian centroid like Napata).
- [ ] **Acts 9:25 / 2 Cor 11:32-33** — Nabataean / Aretas IV detail noted in footnote; flag whether to mention again at 2 Cor when those books are added.
- [ ] **Acts 12 Herod Agrippa I death-at-Caesarea** — Josephus parallel noted in footnote.

## Acts 3-7 — gazetteer entries (9 added)

- [ ] **Cyprus** as a region pin in central Troodos — confirm placement.
- [ ] **Antioch (Syrian)** at modern Antakya — secure.
- [ ] **Alexandria** — secure.
- [ ] **Cilicia** as a region pin — confirm centroid.
- [ ] **Haran** at modern Harran in southeastern Turkey — secure.
- [ ] **Canaan-region** as a regional tag — confirm whether this should be folded with the existing slug `canaan-something` or kept as the broad Greek-period term.
- [ ] **Midian** as a region pin — placed in NW Saudi Arabia (Madyan); confirm placement.
- [ ] **Mount Sinai** at Jebel Musa (traditional). Footnote names alternatives (Jebel al-Lawz, Har Karkom, Jebel Sin Bishar). Decide if a tier-downgrade is warranted given the genuine scholarly disagreement.
- [ ] **Babylon** at Babil — secure.
- [ ] **Acts 7:16 Abraham/Jacob tomb-at-Shechem conflation** — footnote noted; confirm the editorial framing is right.
- [ ] **Acts 7:43 'beyond Babylon' substitution** — Stephen's modification of Amos 5:27 ('beyond Damascus' in the MT/LXX); footnote noted.

## Acts 1-2 — gazetteer entries (20 added)

- [ ] **Mount of Olives** at Jebel et-Tur — secure.
- [ ] **Akeldama** on the southern slope of the Hinnom valley — confirm primary location vs other Crusader-era proposals.
- [ ] **Nazareth** — secure.
- [ ] **Judea / Samaria-region / Galilee-region** — three Roman provincial / regional tags. Pin placement notional; verify centroids.
- [ ] **Pentecost roll-call regions** (Parthia, Media, Elam, Mesopotamia, Cappadocia, Pontus, Asia-province, Phrygia, Pamphylia, Libya, Crete, Arabia) — all `tier: region` with notional centroid pins. None of these is wrong, but all the centroids are best-guess; a more careful editorial pass might pick more specific 'capital' pins (Hecatompylos for Parthia, Ecbatana for Media, Susa for Elam, etc.).
- [ ] **Cyrene** at Shahhat — secure.
- [ ] **Rome** — secure.
- [ ] **Asia-province slug** disambiguates from a future generic "Asia" if that ever appears. Confirm naming convention.
- [ ] **Acts is the first edition where most pins are *outside* the Levant.** The 17th-c. Topographia Sacra visual register stays consistent; verify it still reads well at the very wide zoom of ch. 2.

## Ruth — gazetteer entries (2 added)

- [ ] **Bethlehem-Judah** at modern Beit Lahm — secure identification.
- [ ] **Moab** as a region pin in the central plateau — confirm placement; the book uses the term loosely for the kingdom east of the Dead Sea between Arnon and Heshbon.

## Jonah — gazetteer entries (2 added)

- [ ] **Nineveh** at Tell Kuyunjik / Tell Nebi Yunus opposite Mosul — secure identification.
- [ ] **Tarshish** pinned at Tartessos (lower Guadalquivir, southern Spain). The identification is the leading scholarly default but not certain; alternatives are Tarsus in Cilicia, Sardinia, and Carthage. Confirm whether to keep Tartessos as primary or downgrade tier and footnote more strongly.
- [ ] **Jonah ch.4 v.2 text** — WebFetch returned a truncated form ('wasn't this what I said when I was still in my own country?'); the rendered chapter extends to the canonical 'Therefore I hurried to flee to Tarshish, for I knew that you are a gracious God ...' formulation echoing Exodus 34:6. Diff against ebible.org/web/JON04.htm before treating as final.

## Joshua 20-24 — gazetteer entries (19 added)

- [ ] **Bezer** (Reuben city of refuge) at Umm el-ʿAmad — confirm primary; Tell Jalul is alternative.
- [ ] **Ramoth-Gilead** at Tell er-Rumeith — confirm; the equation with Ramath-Mizpeh (13:26) is contested.
- [ ] **Golan** at Sahem el-Jolan — confirm.
- [ ] **Anathoth** at Ras el-Kharrubeh near Anata — secure.
- [ ] **Almon** at Khirbet ʿAlmit — confirm.
- [ ] **Daberath** at Daburiyeh — confirm.
- [ ] **Abdon** at Khirbet ʿAbda — confirm; the 1 Chr 6:74 'Hebron' variant is a known scribal slip.
- [ ] **Be-Eshterah / Ashtaroth** equation — confirmed by 1 Chr 6:71 parallel; flag if convention should fold the slug.
- [ ] **Hammoth-Dor / Hammath** equation — flag if slug should fold.
- [ ] **Jarmuth-Issachar / Remeth** equation — confirm whether to fold.
- [ ] **Two Gath-Rimmons in 21:24-25** — second one is most likely a scribal slip for Bileam (Ibleam); the pin currently re-uses the Dan Gath-Rimmon. Decide whether to fix or footnote.
- [ ] **Mount-Seir-Edom** vs Mount-Seir-Judah — separate slugs in place; confirm convention.
- [ ] **Mount Gaash** — unidentified; flag if any candidate has been proposed in recent literature.
- [ ] **Joseph's tomb at Shechem** (24:32) — pin re-uses Shechem's coords; the traditional tomb is just east of Jacob's Well in modern Nablus. Consider a separate landmark pin.

## Joshua 19 — gazetteer entries (91 added)

The chapter introduces ~90 new toponyms, of which:
- **Identified** (~10): Sharuhen, Sarid, Gath-Hepher, Mount Tabor, Jezreel-Issachar, Shunem, Hannathon, Hammath, Bene-Berak, Tyre, Joppa, Leshem/Dan-city, Aijalon, En-Gannim-Issachar, Bethlehem-Zebulun, Nahalal.
- **Probable** (~10): Chisloth-Tabor/Chesulloth, Rimmon-Zebulun, Jabneel-Naphtali, Rakkath, Ramah-Naphtali, Aphek-Asher, Kanah-Asher, Helkath, Shihor-Libnath, Adami-Nekeb, Shaalabbin, Eltekeh, Gibbethon, Jehud, Gath-Rimmon, Ir-Shemesh (= Beth-Shemesh-Judah), Timnath-Serah.
- **Conjectural / Unknown** (~70): the remainder, mostly hapax-legomena from the four district lists.

- [ ] **Multiple-instance disambiguation slugs** added: jezreel-issachar (vs jezreel-judah), jabneel-naphtali (vs jabneel-judah), edrei-naphtali (vs edrei [Bashan]), beth-shemesh-issachar / beth-shemesh-naphtali (vs beth-shemesh-judah), bethlehem-zebulun, ramah-naphtali / ramah-asher (vs ramah-benjamin / Negev Ramah), en-gannim-issachar (vs en-gannim-shephelah), rimmon-zebulun (vs rimmon-negev), aphek-asher (a fourth Aphek), beth-dagon-asher (vs beth-dagon-judah), rehob-asher, kanah-asher (vs Brook of Kanah), hammon-asher, baalath-dan (vs baalah-negev). Confirm convention is sustainable.
- [ ] **Sharuhen** at Tell el-Farah South vs Tell el-ʿAjjul — confirm primary.
- [ ] **Aphek-Asher** at Tel Afek (Tell Kurdaneh) — confirm.
- [ ] **Adami-Nekeb** — pin at Khirbet et-Tell / Khirbet Damiyeh; confirm.
- [ ] **Shihor-Libnath** at Nahr ez-Zerqa mouth — confirm.
- [ ] **Helkath** — proposals split between Tell el-Qasis and Tell el-Harbaj; flag for tier downgrade if needed.
- [ ] **Bethul** = Chesil question (15:30 / 19:4) — confirm whether to fold or keep separate slugs.
- [ ] **Cana-of-Galilee** confusion — `kanah-asher` is the Asher coast Kanah; the Galilean Cana of John 2 is a different site (Khirbet Qana further south). Confirm we don't conflate when John appears.
- [ ] **Ir-Shemesh** = Beth-Shemesh-Judah — currently a separate slug pointing to the same coords; consider folding as a name_alt.
- [ ] **Skeleton entries** (~70 of them) — verify if any have been securely identified since the standard reference works.

## Joshua 18 — gazetteer entries (22 added incl. Shiloh)

- [ ] **Shiloh** at Khirbet Seilun — secure.
- [ ] **Arabah** as a region pin (mid Jordan rift) — confirm placement; chapter usage limits it to the Jordan-Dead Sea segment.
- [ ] **Wilderness of Beth-Aven** — region pin on eastern slope between Bethel and Jordan; verify against atlas usage.
- [ ] **Geliloth** at Adummim coordinates — confirm whether Geliloth and Gilgal-of-Joshua-5 should be conflated (would change the pin).
- [ ] **Zemaraim** at Khirbet es-Samra — confirm.
- [ ] **Parah** at Khirbet el-Farah — confirm.
- [ ] **Ophrah-Benjamin** at et-Taiyibeh (and the John 11:54 'Ephraim' equation) — confirm.
- [ ] **Ophni** at Jufnah — confirm whether the Ophni→Gophna metathesis is still accepted.
- [ ] **Geba**, **Ramah-Benjamin**, **Mizpeh-Benjamin**, **Mozah**, **Gibeath** — all identified; verify ABD page guesses.
- [ ] **Skeleton entries** Emek-Keziz, Avvim-Benjamin, Chephar-Ammoni, Rekem, Irpeel, Taralah, Eleph, Kiriath-Benjamin — flag if any have been securely identified since the standard reference works.
- [ ] **Zelah** at Khirbet Salah — conjectural; verify.
- [ ] **Kiriath / Gibeath joining** in v.&nbsp;28 — confirm whether to render as 'Gibeath-Kiriath' (a single compound name as some MSS preserve) or as two distinct towns. Gazetteer currently has them as two.

## Joshua 17 — gazetteer entries (6 added)

- [ ] **Shechem** at Tell Balata — secure identification.
- [ ] **En-Tappuah** — pin reuses Tappuah's coordinates; consider whether the spring should have its own pin.
- [ ] **Beth-Shean** at Tel Beth-Shean / Tell el-Husn — secure.
- [ ] **Ibleam** at Khirbet Belameh — confirm.
- [ ] **Endor** at Khirbet Safsafa near Indur — confirm primary.
- [ ] **Valley of Jezreel** — region pin at the valley center; ABD ref is best-guess.

## Joshua 16 — gazetteer entries (9 added)

- [ ] **Luz / Bethel** — added Luz as a separate slug at the same coordinates as Bethel, with footnote noting the disputed identification (twin-site vs older-name). Confirm the editorial choice.
- [ ] **Archites / Japhletites** — clan-zones; Archites pinned south of Bethel, Japhletites unpinned (`tier: unknown`).
- [ ] **Ataroth-Addar** at Khirbet ʿAtara — confirm primary identification.
- [ ] **Michmethath** at Khirbet Makhneh el-Foqa — conjectural; verify whether a more defensible candidate exists.
- [ ] **Taanath-Shiloh** at Khirbet Tana el-Foqa — confirm.
- [ ] **Janoah-Ephraim** at Khirbet Yanun — confirm.
- [ ] **Naarah** at Khirbet el-ʿAuja et-Tahta or Tell el-Jisr — confirm primary.
- [ ] **Brook of Kanah** = Wadi Qana — confirmed; pin sits in central wadi (consider dropping or pluralizing pins along the wadi for clarity).

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
- [ ] Joshua 13
- [ ] Joshua 14
- [ ] Joshua 15
- [ ] Joshua 16
- [ ] Joshua 17
- [ ] Joshua 18
- [ ] Joshua 19
- [ ] Joshua 20
- [ ] Joshua 21
- [ ] Joshua 22
- [ ] Joshua 23
- [ ] Joshua 24
- [ ] Jonah 1
- [ ] Jonah 2
- [ ] Jonah 3 (especially the WebFetch-truncated v.2 — verify full WEB text manually)
- [ ] Jonah 4 (v.2 was extended from canonical WEB; verify)
- [ ] Ruth 1
- [ ] Ruth 2
- [ ] Ruth 3
- [ ] Ruth 4
- [ ] Acts 1
- [ ] Acts 2
- [ ] Acts 3
- [ ] Acts 4
- [ ] Acts 5
- [ ] Acts 6
- [ ] Acts 7
- [ ] Acts 8
- [ ] Acts 9
- [ ] Acts 10
- [ ] Acts 11
- [ ] Acts 12

## Site-level

- [ ] GitHub push deferred — `gh` is authed as `littleeachdayapp-droid` but other Wroot Press repos live under `wilsonpruitt`. Decide which account this repo lives under and push.
- [ ] Vercel project currently deployed via CLI; consider connecting to the GitHub repo for auto-deploys once GitHub is sorted.

## Phase-2 framework data needed

- [ ] **`data/tribal-territories.geojson`** — currently contains only Judah as an approximate placeholder polygon. The other 11 tribes (Reuben, Gad, half-Manasseh-east, Simeon, Benjamin, Ephraim, half-Manasseh-west, Issachar, Zebulun, Asher, Naphtali, Dan) need polygons before chapters 13–19 are built. Sources: openbible.info GeoJSON (CC-BY), or hand-traced from the boundary descriptions in Joshua 13–19 themselves. Mark each `properties.approximate: false` once it reflects sourced data rather than a rectangle.
- [ ] **Judah polygon refinement.** The current Judah polygon is a 9-vertex rectangle covering hill-country-south-of-Jerusalem to the Negev. The actual boundary description in Joshua 15 is far more detailed (the boundary line "from the bay of the salt sea... to the ascent of Akrabbim... to the wilderness of Zin... to Kadesh-barnea" etc.). Replace before treating Judah as final.

## How to use this file

When you verify an item, tick the box and (if a value changed) note the correction in the commit message. When a new chapter introduces a new gazetteer entry or contested decision, add it to the relevant section here.
