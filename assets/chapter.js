/* ─────────────────────────────────────────────────────────────────────
   Topographia Sacra · chapter renderer
   Loaded by every chapter page; reads book + chapter from the page's
   <body data-book="..." data-chapter="N"> attributes.
   Uses absolute paths so depth doesn't matter.
   ───────────────────────────────────────────────────────────────────── */

(async function () {
  const book = document.body.dataset.book;
  const chapter = parseInt(document.body.dataset.chapter, 10);
  if (!book || !chapter) {
    console.error("No book or chapter set on <body data-book='...' data-chapter='N'>");
    return;
  }

  let gazetteer, books, meta, chapterData;
  try {
    [gazetteer, books, meta, chapterData] = await Promise.all([
      fetch("/data/gazetteer.json").then(r => r.json()),
      fetch("/data/books.json").then(r => r.json()),
      fetch(`/books/${book}/meta.json`).then(r => r.json()),
      fetch(`/books/${book}/chapters/${chapter}.json`).then(r => r.json())
    ]);
  } catch (err) {
    console.error("Failed to load chapter data:", err);
    document.getElementById("text-col").innerHTML =
      "<p>Could not load chapter data. Try refreshing.</p>";
    return;
  }

  const bookMeta = books.books[book];

  /* ── Title block ────────────────────────────────────────────── */
  document.getElementById("chapter-title").textContent = chapterData.title;
  document.getElementById("chapter-eyebrow").textContent =
    `${bookMeta.title} · Chapter ${toRoman(chapter)}`;
  document.getElementById("chapter-subtitle").textContent =
    `World English Bible · Verses 1–${chapterData.verses.length}`;
  document.title =
    `${bookMeta.title.replace(/^The Book of /, "")} ${chapter} · ${chapterData.title} — Topographia Sacra`;

  /* ── Pager ──────────────────────────────────────────────────── */
  const pagerPrev = document.getElementById("pager-prev");
  const pagerNext = document.getElementById("pager-next");
  if (chapter > 1) {
    pagerPrev.innerHTML = `<a href="../${chapter - 1}/">← Chapter ${toRoman(chapter - 1)}</a>`;
  }
  if (chapter < meta.chapters) {
    pagerNext.innerHTML = `<a href="../${chapter + 1}/">Chapter ${toRoman(chapter + 1)} →</a>`;
  }

  /* ── Render verses ──────────────────────────────────────────── */
  const textCol = document.getElementById("text-col");
  const footnotesEl = document.getElementById("footnotes-list");

  chapterData.verses.forEach(({ n, html }) => {
    const p = document.createElement("p");
    p.className = "verse";
    p.id = "v" + n;
    p.innerHTML = `<span class="verse-num">${n}</span>${html}`;
    textCol.insertBefore(p, document.getElementById("footnotes"));
  });

  if (chapterData.footnotes && chapterData.footnotes.length) {
    chapterData.footnotes.forEach(fn => {
      const p = document.createElement("p");
      p.className = "footnote";
      p.id = "fn-" + fn.marker;
      p.innerHTML = `<span class="footnote-marker">${fn.marker}.</span> ${fn.html}`;
      footnotesEl.appendChild(p);
    });
  } else {
    document.getElementById("footnotes").style.display = "none";
  }

  /* ── Map ────────────────────────────────────────────────────── */
  const placeKeysInChapter = chapterData.places || [];
  const places = placeKeysInChapter
    .map(key => ({ key, ...gazetteer[key] }))
    .filter(p => p.coords);

  if (!places.length) {
    document.querySelector(".map-col").style.display = "none";
    document.querySelector(".reader").style.gridTemplateColumns = "1fr";
    return;
  }

  const map = L.map("map", {
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    minZoom: 6,
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd"
  }).addTo(map);

  const markerByKey = {};
  places.forEach(p => {
    const initial = p.name.replace(/^The\s+/i, "")[0];
    const icon = L.divIcon({
      className: "",
      html: `<div class="pin tier-${p.tier}" data-key="${p.key}">${initial}</div>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13]
    });
    const marker = L.marker(p.coords, { icon }).addTo(map);
    marker.bindPopup(buildPopup(p), { offset: [0, -4] });
    marker.on("click", () => activate(p.key));
    markerByKey[p.key] = marker;
  });

  /* ── Route polyline (opt-in: chapterData.route = [key, key, ...]) ─ */
  if (Array.isArray(chapterData.route) && chapterData.route.length >= 2) {
    const routeCoords = chapterData.route
      .map(k => gazetteer[k]?.coords)
      .filter(c => Array.isArray(c));
    if (routeCoords.length >= 2) {
      L.polyline(routeCoords, {
        color: "#7A5A3A",
        weight: 2,
        opacity: 0.65,
        dashArray: "7 5"
      }).addTo(map);
    }
  }

  // Default view: framed to include the chapter's pins plus reasonable
  // surrounding context. If the chapter has a `view` override, use it.
  if (chapterData.view) {
    map.setView(chapterData.view.center, chapterData.view.zoom);
  } else {
    const bounds = L.latLngBounds(places.map(p => p.coords));
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 11 });
  }

  /* ── Cross-highlighting ─────────────────────────────────────── */
  let activeKey = null;

  function activate(key) {
    if (activeKey === key) { clear(); return; }
    clear();
    activeKey = key;

    const marker = markerByKey[key];
    if (marker) {
      marker._icon?.querySelector(".pin")?.classList.add("is-active");
      map.panTo(gazetteer[key].coords, { animate: true });
      marker.openPopup();
    }

    document.querySelectorAll(`.place[data-key="${key}"]`).forEach(el => {
      el.classList.add("is-active");
      el.closest(".verse")?.classList.add("is-active");
    });

    const first = document.querySelector(`.place[data-key="${key}"]`);
    if (first) {
      const r = first.getBoundingClientRect();
      if (r.top < 80 || r.bottom > window.innerHeight - 80) {
        first.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }

  function clear() {
    if (!activeKey) return;
    document.querySelectorAll(".pin.is-active").forEach(el => el.classList.remove("is-active"));
    document.querySelectorAll(".place.is-active, .verse.is-active").forEach(el => {
      el.classList.remove("is-active");
    });
    activeKey = null;
  }

  document.querySelectorAll(".place").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      activate(el.dataset.key);
    });
  });

  /* Footnote marker → scroll to footnote */
  document.querySelectorAll("sup.footnote-marker").forEach(el => {
    el.addEventListener("click", () => {
      const target = document.getElementById("fn-" + el.textContent.trim());
      target?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  /* ── helpers ────────────────────────────────────────────────── */
  function buildPopup(p) {
    const tierLabel = {
      identified: "Identified",
      probable: "Probable identification",
      conjectural: "Conjectural"
    }[p.tier] || p.tier;
    const ref = p.abd ? `<div class="popup-ref">ABD · ${p.abd}</div>` : "";
    return `
      <div class="popup-name">${p.name}</div>
      <div class="popup-tier">${tierLabel}</div>
      <div class="popup-id">${p.id}</div>
      ${ref}
    `;
  }

  function toRoman(num) {
    const map = [
      [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
      [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
      [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];
    let result = "";
    for (const [val, sym] of map) {
      while (num >= val) { result += sym; num -= val; }
    }
    return result;
  }
})();
