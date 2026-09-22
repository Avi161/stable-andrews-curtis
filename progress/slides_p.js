/* September progress deck. Every number comes from window.P (stats.js), which
   data/make_stats.py writes from the ACSolverX records and the same-machine re-runs.
   Nothing below is typed by hand except words.

   Look: the SURF talk's. Figtree titles that state the takeaway, Plex Mono labels,
   ink = baseline / control, blue = the new method, orange = cost / unsolved / worse.
   Slide ids are stable (p01..., a1...) so review comments keep pointing at the
   right slide after reordering. */
(function () {
  var P = window.P || {};
  var INK = '#191813', BLUE = '#2B54C4', OR = '#E05B2B', PAPER = '#FAF9F6';
  var MONO = 'IBM Plex Mono, monospace';

  /* ---------- formatting ---------- */
  function k(x) { return x == null ? '—' : Math.round(x).toLocaleString('en-US'); }
  function f1(x) { return x == null ? '—' : Number(x).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }); }
  function f2(x) { return x == null ? '—' : Number(x).toFixed(2); }
  function pct(a, b) { return Math.round(100 * a / b) + '%'; }
  function ratio(a, b) { var r = a / b; return (r >= 10 ? Math.round(r) : r.toFixed(1)) + '×'; }
  function get(o, path, d) { return path.split('.').reduce(function (a, p) { return a && a[p] != null ? a[p] : undefined; }, o) ?? d; }

  /* ---------- svg primitives ---------- */
  function t(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" font-family="' + (o.sans ? 'Figtree' : MONO) + '" font-size="' + (o.size || 24) + '"' +
      (o.weight ? ' font-weight="' + o.weight + '"' : '') + (o.anchor ? ' text-anchor="' + o.anchor + '"' : '') +
      (o.fill ? ' fill="' + o.fill + '"' : '') + (o.op != null ? ' fill-opacity="' + o.op + '"' : '') +
      (o.extra || '') + '>' + s + '</text>';
  }
  function r(x, y, w, h, fill, o) {
    o = o || {};
    return '<rect x="' + x + '" y="' + y + '" width="' + Math.max(0, w) + '" height="' + h + '" fill="' + fill + '"' +
      (o.op != null ? ' fill-opacity="' + o.op + '"' : '') + (o.stroke ? ' stroke="' + o.stroke + '" stroke-width="' + (o.sw || 1.5) + '"' : '') +
      (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + (o.rx ? ' rx="' + o.rx + '"' : '') + '/>';
  }
  function l(x1, y1, x2, y2, stroke, o) {
    o = o || {};
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + stroke + '" stroke-width="' + (o.sw || 1.5) + '"' +
      (o.op != null ? ' stroke-opacity="' + o.op + '"' : '') + (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + '/>';
  }
  function c(x, y, rad, fill, o) {
    o = o || {};
    return '<circle cx="' + x + '" cy="' + y + '" r="' + rad + '" fill="' + fill + '"' + (o.op != null ? ' fill-opacity="' + o.op + '"' : '') +
      (o.stroke ? ' stroke="' + o.stroke + '" stroke-width="' + (o.sw || 2) + '"' : '') + '/>';
  }
  function hatch(id, color) {
    return '<defs><pattern id="' + id + '" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
      '<rect width="10" height="10" fill="' + color + '"/><line x1="0" y1="0" x2="0" y2="10" stroke="#fff" stroke-width="3.2"/></pattern></defs>';
  }
  function check(x, y, color) {   /* status glyph: filled circle with a white tick or ! */
    return c(x, y, 22, color) + (color === BLUE
      ? '<path d="M' + (x - 10) + ' ' + y + ' l7 7 l13 -14" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
      : t(x, y + 9, '!', { sans: true, weight: 700, size: 28, anchor: 'middle', fill: '#fff' }));
  }
  function svg(inner) {
    return '<svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" fill="' + INK + '">' + inner + '</svg>';
  }
  function foot(s) {                         /* wraps at ' · ' into at most two centred lines */
    var parts = s.split(' · '), lines = [''], max = 118;
    parts.forEach(function (p) {
      var cur = lines[lines.length - 1], next = cur ? cur + ' · ' + p : p;
      if (next.length > max && cur) lines.push(p); else lines[lines.length - 1] = next;
    });
    var y0 = 746 - (lines.length - 1) * 26;
    return lines.map(function (ln, i) { return t(800, y0 + i * 26, ln, { anchor: 'middle', size: 20, op: 0.4 }); }).join('');
  }
  function add(id, title, kicker, inner) {
    DECK.register(id, '<header><h1>' + title + '</h1>' + (kicker ? '<div class="kicker">' + kicker + '</div>' : '') +
      '</header><div class="viz">' + svg(inner) + '</div>');
    DECK.ORDER.push(id);
  }
  function logy(v, lo, hi, y0, y1) { return y0 - (Math.log10(v) - Math.log10(lo)) / (Math.log10(hi) - Math.log10(lo)) * (y0 - y1); }
  function logx(v, lo, hi, x0, x1) { return x0 + (Math.log10(v) - Math.log10(lo)) / (Math.log10(hi) - Math.log10(lo)) * (x1 - x0); }
  function tickLabel(v) { return v >= 1e6 ? (v / 1e6) + 'M' : v >= 1e3 ? (v / 1e3) + 'k' : String(v); }


  /* ---------- flowchart pieces (talk style: outlined boxes, tinted diamonds, filled finish) ---------- */
  function fdefs(id) {
    return '<defs><marker id="' + id + '-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
      '<path d="M0 0 L10 5 L0 10 z" fill="#6b6a64"/></marker>' +
      '<marker id="' + id + '-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
      '<path d="M0 0 L10 5 L0 10 z" fill="' + BLUE + '"/></marker></defs>';
  }
  function fbox(x, y, w, h, title, sub, o) {
    o = o || {};
    var fill = o.done ? BLUE : (o.tint ? 'rgba(43,84,196,0.08)' : '#fff'), stroke = o.done || o.tint ? BLUE : 'rgba(25,24,19,0.25)';
    var tc = o.done ? '#fff' : INK, cx = x + w / 2, subs = [].concat(sub || []);
    var ty = y + h / 2 + (subs.length ? -8 - 10 * (subs.length - 1) : 8);
    var out = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="12" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.6"/>';
    out += t(cx, ty, title, { sans: true, weight: 600, size: 22, anchor: 'middle', fill: tc });
    subs.forEach(function (sl, i) { out += t(cx, ty + 26 + i * 21, sl, { size: 16, anchor: 'middle', fill: o.done ? '#fff' : INK, op: o.done ? 0.9 : 0.6 }); });
    if (o.stat) [].concat(o.stat).forEach(function (sl, i) { out += t(x + w, y + h + 22 + i * 20, sl, { size: 16, anchor: 'end', fill: BLUE }); });
    return out;
  }
  function fdia(cx, cy, w, h, l1, l2) {
    return '<path d="M' + (cx - w / 2) + ' ' + cy + ' L' + cx + ' ' + (cy - h / 2) + ' L' + (cx + w / 2) + ' ' + cy + ' L' + cx + ' ' + (cy + h / 2) + ' Z" fill="rgba(43,84,196,0.08)" stroke="' + BLUE + '" stroke-width="1.6"/>' +
      t(cx, cy + (l2 ? -3 : 7), l1, { sans: true, weight: 600, size: 19, anchor: 'middle' }) + (l2 ? t(cx, cy + 20, l2, { size: 15, anchor: 'middle', op: 0.6 }) : '');
  }
  function fpath(id, d, o) {
    o = o || {};
    return '<path d="' + d + '" fill="none" stroke="' + (o.blue ? BLUE : '#6b6a64') + '" stroke-width="1.8"' + (o.dash ? ' stroke-dasharray="7 6"' : '') +
      ' marker-end="url(#' + id + (o.blue ? '-b' : '-a') + ')"/>';
  }
  function flab(x, y, s0, o) { o = o || {}; return t(x, y, s0, { size: 16, anchor: o.anchor || 'middle', fill: o.blue ? BLUE : INK, op: o.blue ? 1 : 0.55 }); }

  var H = P.head || {}, R = P.runs || {}, S = P.s60 || {}, BS = P.bs || {};
  var R2 = P.rank2 || {}, S2 = R2.s60_F || {}, M2 = R2.ms640_F || {};
  var msNew = R2.ms640_protocol || {}, msOld = R.ms640_OLDCASCADE_b1000_protocol || {};
  var msNewSearch = msNew.search_wall, msNewBatch = msNew.batch_wall_including_verification;

  /* =====================================================================
     p01  title
     ===================================================================== */
  DECK.register('p01-title',
    '<h1>September progress</h1>' +
    '<div class="sub">Andrews–Curtis search · 20 Aug → 22 Sep 2026</div>' +
    '<div class="hint">→ / space next · m slides · c comment on a slide · f fullscreen</div>');
  DECK.ORDER.push('p01-title');

  /* =====================================================================
     p02  everything at 1,000 units
     ===================================================================== */
  (function () {
    var C2 = P.rank2_census || {};
    var rows = [
      { name: 'MS-640', sub: 'solved Miller–Schupp · ' + f1(msNewSearch) + ' s in all', got: 640, of: 640 },
      { name: 'subset-60', sub: 'the talk’s benchmark · ' + f1(S2.wall) + ' s', got: S2.solved, of: S2.rows },
      { name: 'AC19, Aut-minimal', sub: 'the last ' + (C2.rows - C2.solved) + ' need 1,048–10,080 units', got: C2.solved, of: C2.rows }
    ];
    var s = '';
    rows.forEach(function (row, i) {
      var y = 170 + i * 160, frac = row.got / row.of;
      s += t(60, y, row.name, { sans: true, weight: 600, size: 38 });
      s += t(60, y + 36, row.sub, { size: 22, op: 0.5 });
      s += r(470, y - 28, 560, 36, INK, { op: 0.08 }) + r(470, y - 28, 560 * frac, 36, BLUE, { op: 0.85 });
      s += t(1545, y, k(row.got) + ' / ' + k(row.of), { sans: true, weight: 700, size: 44, anchor: 'end', fill: BLUE });
    });
    add('p02-everything', 'One simple solver, 1,000 units per row', 'Nielsen search · 14 Sep', s);
  })();


  /* =====================================================================
     p02b  how the solver works
     ===================================================================== */
  (function () {
    var id = 'pf1', s = fdefs(id), C = (P.rank2_census || {}).stages || {}, M = P.rank2_ms640 || {};
    var nC = (P.rank2_census || {}).rows || 72779, nM = 640;
    function pc(a, n) { return (100 * a / n).toFixed(1) + '%'; }
    function st(key) { var a = C[key] || {}, b = M[key] || {};
      return ['AC19 ' + k(a.rows) + ' (' + pc(a.rows, nC) + ') · median ' + k(a.median) + ' units', 'MS-640 ' + k(b.rows) + ' (' + pc(b.rows, nM) + ')']; }
    s += fbox(30, 60, 190, 90, 'presentation', ['(r₁, r₂)']);
    s += fbox(270, 60, 330, 90, 'A · Whitehead descent', ['apply a Nielsen map', 'while it shortens']);
    s += fdia(770, 105, 300, 120, 'B · primitive?', 'a letter used once');
    s += fbox(970, 60, 270, 90, 'substitute it away', ['r = x^±1 yⁿ  or  xᵐ y^±1'], { tint: true, stat: st('B') });
    s += fdia(770, 300, 300, 120, 'C · BS-shaped?', 'g^a h^p g^-a h^q');
    s += fbox(970, 255, 270, 90, 'pinch cascade', ['b⁻¹a → a²b⁻¹  (one move)', 'repeat until one b left'], { tint: true, stat: st('C') });
    s += fbox(1300, 190, 270, 110, '(x, y)', ['AC path, replayed by', 'an independent verifier'], { done: true });
    s += '<rect x="20" y="420" width="1560" height="250" rx="16" fill="none" stroke="rgba(25,24,19,0.18)" stroke-dasharray="8 7"/>';
    s += t(120, 448, 'D · best-first search with whatever is left of the 1,000 units', { size: 17, op: 0.6 });
    s += fbox(40, 480, 280, 100, 'pop the shortest', ['smallest |r₁| + |r₂| first']);
    s += fdia(468, 530, 200, 110, 'visited?', 'this search');
    s += fbox(590, 480, 330, 100, 'expand', ['AC substitutions', '+ 4 Nielsen maps']);
    s += fbox(960, 480, 240, 100, 'canonical form', ['8 signed permutations']);
    s += fdia(1370, 530, 290, 120, 'child finishes?', 'test B and C');
    st('D').forEach(function (sl, i) { s += t(1340, 442 + i * 20, sl, { size: 16, anchor: 'end', fill: BLUE }); });
    s += fpath(id, 'M220 105 H264') + fpath(id, 'M600 105 H614');
    s += fpath(id, 'M920 105 H964', { blue: true }) + flab(942, 92, 'yes', { blue: true });
    s += fpath(id, 'M1240 105 H1435 V184', { blue: true });
    s += fpath(id, 'M770 165 V234') + flab(790, 205, 'no', { anchor: 'start' });
    s += fpath(id, 'M920 300 H964', { blue: true }) + flab(942, 287, 'yes', { blue: true });
    s += fpath(id, 'M1240 300 H1265 V245 H1294', { blue: true });
    s += fpath(id, 'M770 360 V395 H90 V474') + flab(790, 385, 'no', { anchor: 'start' });
    s += fpath(id, 'M320 530 H362');
    s += fpath(id, 'M568 530 H584') + flab(577, 508, 'no');
    s += fpath(id, 'M920 530 H954') + fpath(id, 'M1200 530 H1219');
    s += fpath(id, 'M1370 470 V306', { blue: true }) + flab(1390, 400, 'yes', { anchor: 'start', blue: true });
    s += fpath(id, 'M1370 590 V640 H180 V586') + flab(900, 632, 'no — queue the children, pop again');
    s += fpath(id, 'M468 585 V640', { dash: true }) + flab(488, 614, 'yes: skip', { anchor: 'start' });
    s += t(40, 250, 'BS cascade (6 Sep) = the smaller version:', { size: 20, op: 0.6 });
    s += t(40, 278, 'A and C, then a search', { size: 20, op: 0.6 });
    s += t(40, 306, 'Nielsen search adds B and checks B, C', { size: 20, op: 0.6 });
    s += t(40, 334, 'on every child', { size: 20, op: 0.6 });
    s += foot('one budget of 1,000 units per row, shared by all stages · a unit = one popped state, one Nielsen map, or one substitution');
    add('p02b-flow', 'How Nielsen search works', '1,000 units per row', s);
  })();

  /* =====================================================================
     p03  MS-640 timing, same machine
     ===================================================================== */
  (function () {
    var s = '', x0 = 640, pxs = 140;            /* 140 svg units per second */
    s += t(270, 330, f1(msNewSearch) + ' s', { sans: true, weight: 700, size: 150, anchor: 'middle', fill: BLUE });
    s += t(270, 392, '640 / 640 solved', { size: 26, anchor: 'middle', op: 0.55 });
    var bars = [
      { name: 'BS cascade · 6 Sep', search: msOld.search_wall_s, col: INK, a: 0.35, y: 190 },
      { name: 'Nielsen search · 14 Sep', search: msNewSearch, col: BLUE, a: 0.85, y: 370 }
    ];
    bars.forEach(function (b) {
      s += t(x0, b.y - 18, b.name, { sans: true, weight: 600, size: 28, fill: b.col === BLUE ? BLUE : INK });
      s += r(x0, b.y, b.search * pxs, 58, b.col, { op: b.a });
      s += t(x0 + b.search * pxs + 14, b.y + 38, f1(b.search) + ' s', { size: 26, fill: b.col === BLUE ? BLUE : INK });
    });
    s += l(x0, 500, x0 + 6 * pxs, 500, INK);
    [0, 2, 4, 6].forEach(function (v) {
      s += l(x0 + v * pxs, 500, x0 + v * pxs, 510, INK) + t(x0 + v * pxs, 540, v + ' s', { size: 22, anchor: 'middle', op: 0.6 });
    });
    s += t(1070, 620, 'work: ' + k(msNew.total_units) + ' units · plain greedy needed ' + k(P.greedy_ms640_nodes) + ' nodes',
      { size: 24, anchor: 'middle', op: 0.6 });
    s += foot('search time, all 640 rows, same container, one core');
    add('p03-ms640', 'MS-640 in ' + f1(msNewSearch) + ' seconds', '1,000 units per row · one core', s);
  })();

  /* =====================================================================
     p04-p06  subset-60
     ===================================================================== */
  (function () {
    var g = S.greedy || {}, n = { units: S2.units, subs: S2.substitution, pops: S2.pops, nielsen: S2.nielsen, wall: S2.wall };
    var panels = [
      { head: 'nodes explored', y: 110, items: [
        { lab: 'mean', a: g.nodes.mean, b: n.units.mean, word: 'fewer', fmt: k, fmtb: f1 },
        { lab: 'median', a: g.nodes.median, b: n.units.median, word: 'fewer', fmt: f1, fmtb: k }] },
      { head: 'path length · substitution moves', y: 390, items: [
        { lab: 'mean', a: g.path.mean, b: n.subs.mean, word: 'shorter', fmt: f1, fmtb: f1 },
        { lab: 'median', a: g.path.median, b: n.subs.median, word: 'shorter', fmt: f1, fmtb: f1 }] }
    ];
    var s = hatch('p04-h', OR);
    panels.forEach(function (p) {
      s += t(150, p.y, p.head, { sans: true, weight: 600, size: 30 });
      p.items.forEach(function (it, j) {
        var x = 150 + j * 720, y = p.y + 40, w = 560;
        s += t(x, y, it.lab, { size: 22, op: 0.5 });
        s += t(x + w, y, ratio(it.a, it.b) + ' ' + it.word, { sans: true, weight: 600, size: 28, anchor: 'end' });
        s += r(x, y + 14, w, 44, 'url(#p04-h)');
        s += t(x + w - 12, y + 45, it.fmt(it.a), { size: 24, anchor: 'end', fill: '#fff' });
        var wb = Math.max(6, w * it.b / it.a);
        s += r(x, y + 68, wb, 44, BLUE, { op: 0.85 });
        s += t(x + wb + 12, y + 99, it.fmtb(it.b), { size: 24, fill: BLUE });
      });
    });
    s += r(150, 652, 22, 18, 'url(#p04-h)') + t(182, 668, 'plain greedy', { size: 22, fill: OR });
    s += r(400, 652, 22, 18, BLUE, { op: 0.85 }) + t(432, 668, 'Nielsen search', { size: 22, fill: BLUE });
    s += t(1430, 668, 'each panel scaled to its own greedy bar', { size: 20, anchor: 'end', op: 0.4 });
    s += foot('greedy: 1,000,000 nodes, cap 24 · ours: 1,000 units, charging every pop, basis change, evaluation and move · popped states alone: ' +
      f1(n.pops.mean) + ' mean · paths also carry ' + f1(n.nielsen.mean) + ' Nielsen maps');
    add('p04-s60', 'Subset-60: all 60 in ' + f1(n.wall) + ' seconds', 'the talk’s 60 · all solved by both · one core', s);
  })();

  (function () {
    var rows = (S.per_row || []).slice().sort(function (a, b) { return a.greedy - b.greedy; });
    var x0 = 170, x1 = 1500, y0 = 610, y1 = 90, lo = 1, hi = 1e6, s = '';
    [1, 10, 100, 1000, 1e4, 1e5, 1e6].forEach(function (v) {
      var y = logy(v, lo, hi, y0, y1);
      s += l(x0, y, x1, y, INK, { op: 0.07, sw: 1 }) + t(x0 - 16, y + 8, tickLabel(v), { size: 22, anchor: 'end', op: 0.6 });
    });
    rows.forEach(function (row, i) {
      var x = x0 + 10 + i * (x1 - x0 - 20) / (rows.length - 1);
      var yg = logy(Math.max(1, row.greedy), lo, hi, y0, y1), yn = logy(Math.max(1, row.r2), lo, hi, y0, y1);
      s += l(x, yg, x, yn, INK, { op: 0.12, sw: 2 });
      s += c(x, yg, 6.5, OR, { op: 0.85 }) + c(x, yn, 6.5, BLUE, { op: 0.9 });
    });
    var gmax = get(S, 'greedy.nodes.max'), nmax = get(S2, 'units.max'), nDone = false;
    rows.forEach(function (row, i) {
      var x = x0 + 10 + i * (x1 - x0 - 20) / (rows.length - 1);
      if (row.greedy === gmax && i === rows.length - 1) s += t(x - 4, logy(gmax, lo, hi, y0, y1) - 20, k(gmax), { size: 24, anchor: 'end', fill: OR });
      if (row.r2 === nmax && !nDone) { nDone = true; s += t(x, logy(nmax, lo, hi, y0, y1) - 20, k(nmax), { size: 24, anchor: 'middle', fill: BLUE }); }
    });
    s += c(x0 + 20, 118, 7, OR) + t(x0 + 38, 126, 'plain greedy · nodes', { size: 22, fill: OR });
    s += c(x0 + 20, 156, 7, BLUE) + t(x0 + 38, 164, 'Nielsen search · units', { size: 22, fill: BLUE });
    s += t((x0 + x1) / 2, 668, 'the 60 presentations, by greedy cost →', { size: 22, anchor: 'middle', op: 0.5 });
    s += foot('worst row of each: greedy nodes (1,000,000-node budget, cap 24) vs Nielsen search units (1,000-unit budget) · log scale');
    add('p05-s60-rows', 'Worst case: ' + k(gmax) + ' → ' + k(nmax), 'subset-60 · one dot per presentation', s);
  })();

  (function () {
    var arms = [
      { name: 'plain greedy', sub: '10,000 nodes · ' + k(248227) , got: get(S, 'greedy10k.solved'), col: INK, op: 0.3 },
      { name: 'S20_MK2 · L + 20S + 2MK', sub: '10,000 nodes', got: get(S, 's20_10k.solved'), col: INK, op: 0.3 },
      { name: 'BS cascade · 6 Sep', sub: '1,000 units · ' + k(get(S, 'cascade.units.total')) + ' spent · ' + f1(get(S, 'cascade.wall')) + ' s', got: get(S, 'cascade.solved'), col: BLUE, op: 0.4 },
      { name: 'Nielsen search · 14 Sep', sub: '1,000 units · ' + k(get(S2, 'units.total')) + ' spent · ' + f1(S2.wall) + ' s', got: S2.solved, col: BLUE, op: 0.85 }
    ];
    arms[0].sub = '10,000 nodes';
    var s = '';
    arms.forEach(function (a, i) {
      var y = 130 + i * 140;
      s += t(80, y, a.name, { sans: true, weight: 600, size: 32, fill: a.col === BLUE && a.op > 0.5 ? BLUE : INK });
      s += t(80, y + 34, a.sub, { size: 22, op: 0.5 });
      s += r(700, y - 28, 600, 44, INK, { op: 0.06 }) + r(700, y - 28, 600 * a.got / S.rows, 44, a.col, { op: a.op });
      s += t(1330, y + 4, a.got + ' / ' + S.rows, { sans: true, weight: 700, size: 40, fill: a.col === BLUE && a.op > 0.5 ? BLUE : INK });
    });
    s += foot('same 60 rows · spent = units charged over all 60 · times: one core, same machine');
    add('p06-s60-arms', get(S, 'greedy10k.solved') + ' → ' + get(S, 's20_10k.solved') + ' → 60 of 60', 'subset-60 · four solvers', s);
  })();



  /* =====================================================================
     p07  BS(1,2) collapse, ms622
     ===================================================================== */
  (function () {
    var d = get(P, 'ms622.max_rel_len', []), n = d.length - 1;
    var x0 = 150, x1 = 1420, y0 = 620, top = 140, sy = (y0 - 120) / top, s = '';
    function X(i) { return x0 + i * (x1 - x0) / n; }
    function Y(v) { return y0 - v * sy; }
    s += l(x0, y0, x1, y0, INK) + l(x0, y0, x0, 110, INK);
    [0, 50, 100].forEach(function (v) { s += t(x0 - 14, Y(v) + 8, v, { size: 22, anchor: 'end', op: 0.6 }); });
    [0, 64, 128, 192, n].forEach(function (v) { s += l(X(v), y0, X(v), y0 + 10, INK) + t(X(v), y0 + 34, v, { size: 22, anchor: 'middle', op: 0.6 }); });
    s += t(x1, y0 + 64, 'move →', { size: 22, anchor: 'end', op: 0.5 });
    s += t(60, 360, 'longest relator', { size: 24, anchor: 'middle', op: 0.5, extra: ' transform="rotate(-90 60 360)"' });
    var peak = Math.max.apply(null, d), ip = d.indexOf(peak);
    s += l(x0, Y(peak), x1, Y(peak), BLUE, { dash: '11 7', op: 0.35 });
    s += '<polyline fill="none" stroke="' + BLUE + '" stroke-width="4" stroke-linejoin="round" points="' +
      d.map(function (v, i) { return X(i).toFixed(1) + ',' + Y(v).toFixed(1); }).join(' ') + '"/>';
    s += c(X(ip), Y(peak), 8, BLUE);
    s += t(X(ip), Y(peak) - 22, peak + ' letters', { sans: true, weight: 600, size: 30, anchor: 'middle', fill: BLUE });
    s += t(X(0) + 24, Y(72), 'y x y⁻¹ = x²', { size: 26, fill: BLUE });
    s += t(X(0) + 24, Y(72) + 30, 'after 2 Nielsen maps', { size: 20, op: 0.5 });
    s += t(X(ip) + 90, Y(peak) - 14, 'then y = x¹²⁷', { size: 24 });
    s += t(X(214), Y(80), '127 erasures', { size: 24, op: 0.6 });
    s += t(x1 + 14, y0 + 6, '(y⁻¹, x⁻¹)', { size: 22, op: 0.6 });
    s += foot('each step  y x → x² y  is one AC substitution with the 5-letter relator · Britton reduction in BS(1,2), compiled into AC moves');
    add('p07-bs12', 'BS(1,2): grow to ' + peak + ', then collapse', 'ms622 · ' + n + ' moves · no search · greedy: 78,774 nodes', s);
  })();

  /* =====================================================================
     p08  every MS row is BS(n, n+1)
     ===================================================================== */
  (function () {
    var m = get(BS, 'ms640.by_m', {}), acc = get(BS, 'ms640.accept_by_m', {}), a19 = BS.ac19_autmin || {};
    var keys = Object.keys(m).sort(function (a, b) { return a - b; });
    var s = '', base = 590, sc = 2.2, bw = 96;
    keys.forEach(function (key, i) {
      var x = 150 + i * 145, tot = m[key], ok = acc[key] || 0, hOk = ok * sc, hBad = (tot - ok) * sc;
      s += r(x, base - hOk, bw, hOk, BLUE, { op: 0.85 });
      s += r(x, base - hOk - hBad, bw, hBad, OR, { op: 0.8 });
      s += t(x + bw / 2, base - hOk - hBad - 14, tot, { sans: true, weight: 700, size: 32, anchor: 'middle' });
      s += t(x + bw / 2, base + 32, 'n = ' + key, { size: 22, anchor: 'middle', op: 0.6 });
    });
    s += l(130, base, 1170, base, INK);
    s += r(150, 662, 20, 18, BLUE, { op: 0.85 }) + t(180, 678, 'Britton check passes · ' + (get(BS, 'ms640.accept_m1') + get(BS, 'ms640.accept_mgt1')), { size: 22, fill: BLUE });
    s += r(600, 662, 20, 18, OR, { op: 0.8 }) + t(630, 678, 'stalls · ' + (get(BS, 'ms640.stall_m1') + get(BS, 'ms640.stall_mgt1')), { size: 22, fill: OR });
    s += l(1255, 110, 1255, 620, INK, { op: 0.12 });
    s += t(1420, 150, 'AC19 Aut-min', { sans: true, weight: 600, size: 28, anchor: 'middle' });
    s += t(1420, 270, pct(a19.bs, a19.rows), { sans: true, weight: 700, size: 84, anchor: 'middle' });
    s += t(1420, 308, 'carry one', { size: 22, anchor: 'middle', op: 0.55 });
    s += t(1420, 450, pct(a19.m1, a19.bs), { sans: true, weight: 700, size: 84, anchor: 'middle', fill: BLUE });
    s += t(1420, 488, 'of those: BS(1,2)', { size: 22, anchor: 'middle', op: 0.55 });
    s += t(1420, 540, k(a19.m1) + ' / ' + k(a19.bs), { size: 22, anchor: 'middle', op: 0.4 });
    s += foot('MS-640 roots: 640 / 640 carry the relator (MS(n, w) starts with it), companion exponent ±1 on the stable letter · a stall is not a counterexample');
    add('p08-bs-where', 'Every MS row is BS(n, n+1)', 'x⁻¹yⁿx = yⁿ⁺¹ · MS-640, by n', s);
  })();

  /* =====================================================================
     p09  trivial group vs an AC path
     ===================================================================== */
  (function () {
    var ms = BS.ms640 || {};
    var rows = [
      { n: '01', what: 'the group is trivial', gloss: 'companion exponent ±1 ⇒ perfect ⇒ trivial (Miller–Schupp)', num: ms.bs + ' / ' + ms.rows, col: BLUE },
      { n: '02', what: 'an AC path, n = 1', gloss: 'Britton reduction, one substitution per letter moved', num: ms.accept_m1 + ' / ' + ms.m1, col: BLUE },
      { n: '03', what: 'an AC path, n > 1', gloss: 'only when every pinch divides', num: ms.accept_mgt1 + ' / ' + ms.mgt1, col: OR }
    ];
    var s = '';
    rows.forEach(function (row, i) {
      var y = 170 + i * 175;
      s += check(110, y - 12, row.col);
      s += t(170, y - 4, row.what, { sans: true, weight: 600, size: 38 });
      s += t(170, y + 36, row.gloss, { size: 22, op: 0.45 });
      s += t(1520, y + 6, row.num, { sans: true, weight: 700, size: 64, anchor: 'end', fill: row.col });
      if (i < rows.length - 1) s += l(80, y + 88, 1520, y + 88, INK, { op: 0.12, sw: 1 });
    });
    s += t(800, 690, 'the other ' + (ms.stall_m1 + ms.stall_mgt1) + ' are solved by search — a stall is not a counterexample', { size: 24, anchor: 'middle', op: 0.6 });
    add('p09-bs-trivial', 'Trivial always, an AC path not always', 'MS-640 roots · consecutive BS relator', s);
  })();


  /* =====================================================================
     p11  AC19: how the census count moved
     ===================================================================== */
  (function () {
    var total = get(H, 'census.rows');
    var rows = [
      { name: 'plain greedy', sub: '1,000 nodes', v: P.census_greedy_1k, col: INK, op: 0.28 },
      { name: 'S20_MK2', sub: '1,000 nodes', v: P.census_s20_1k, col: INK, op: 0.28 },
      { name: 'BS cascade', sub: '501 nodes', v: P.census_cascade501, col: INK, op: 0.28 },
      { name: 'census policy', sub: '1,000 units · 9 Sep', v: H.policy_solved, col: INK, op: 0.45 },
      { name: 'Nielsen search', sub: '1,000 units · 14 Sep', v: get(P, 'rank2_census.solved'), col: BLUE, op: 0.85 }
    ];
    var x0 = 600, lo = 64000, sc = 880 / (73000 - lo), s = hatch('p11-h', BLUE);
    rows.forEach(function (row, i) {
      var y = 130 + i * 100, w = (row.v - lo) * sc;
      s += t(80, y + 4, row.name, { sans: true, weight: 600, size: 28, fill: row.op > 0.5 ? BLUE : INK });
      s += t(80, y + 32, row.sub, { size: 20, op: 0.45 });
      s += row.hatch ? r(x0, y - 22, w, 40, 'url(#p11-h)', { op: 0.55 }) : r(x0, y - 22, w, 40, row.col, { op: row.op });
      s += t(x0 + w + 12, y + 7, k(row.v), { size: 24, fill: row.col === BLUE ? BLUE : INK });
    });
    var xa = x0 + (total - lo) * sc;
    s += t(80, 668, 'every row in every bar is an explicit AC path, replayed move by move', { size: 20, fill: BLUE, op: 0.9 });
    s += foot('Nielsen search: the last ' + (total - get(P, 'rank2_census.solved')) + ' rows solve at 1,048–10,080 units · axis from ' + k(lo));
    add('p11-census', 'AC19 Aut-min: ' + k(get(P, 'rank2_census.solved')) + ' of ' + k(total), '1,000 units per row', s);
  })();



  /* =====================================================================
     p13b  fixed basis: unsolved after each node budget
     ===================================================================== */
  (function () {
    var F = P.ladder_full || {}, bud = F.budgets || [], g = F.greedy || [], s2 = F.s20 || [], s = '';
    var base = 560, lo = 1, hi = 30000;
    function Y(v) { return logy(Math.max(1, v), lo, hi, base, 120); }
    [1, 10, 100, 1000, 10000].forEach(function (v) {
      s += l(120, Y(v), 1180, Y(v), INK, { op: 0.07, sw: 1 }) + t(108, Y(v) + 8, tickLabel(v), { size: 20, anchor: 'end', op: 0.5 });
    });
    bud.forEach(function (b, i) {
      var x = 150 + i * 148;
      s += r(x, Y(g[i]), 56, base - Y(g[i]), OR, { op: 0.8 }) + t(x + 28, Y(g[i]) - 10, k(g[i]), { size: 16, anchor: 'middle', fill: OR });
      s += r(x + 62, Y(s2[i]), 56, base - Y(s2[i]), BLUE, { op: 0.85 }) + t(x + 90, Y(s2[i]) - 10, k(s2[i]), { size: 16, anchor: 'middle', fill: BLUE });
      s += t(x + 59, base + 34, tickLabel(b), { size: 22, anchor: 'middle', op: 0.6 });
    });
    s += l(120, base, 1180, base, INK);
    s += t(650, base + 70, 'node budget per row', { size: 22, anchor: 'middle', op: 0.5 });
    s += l(1240, 110, 1240, 600, INK, { op: 0.12 });
    s += t(1400, 160, 'solved at 10M', { sans: true, weight: 600, size: 28, anchor: 'middle' });
    s += t(1400, 260, k(F.rows - g[g.length - 1]), { sans: true, weight: 700, size: 56, anchor: 'middle', fill: OR });
    s += t(1400, 296, 'plain greedy', { size: 22, anchor: 'middle', op: 0.6 });
    s += t(1400, 400, k(F.rows - s2[s2.length - 1]), { sans: true, weight: 700, size: 56, anchor: 'middle', fill: BLUE });
    s += t(1400, 436, 'S20_MK2', { size: 22, anchor: 'middle', op: 0.6 });
    s += t(1400, 520, 'of ' + k(F.rows), { size: 22, anchor: 'middle', op: 0.45 });
    s += foot('unsolved AC19 Aut-min rows, fixed basis, log scale · 100 and 1k from the full 10k run · 10k → 10M: each rung ran the previous failures' +
      ' · fresh 10k re-run: ' + k(F.check_10k.greedy) + ' / ' + k(F.check_10k.s20) + ' · ≈' + P.ladder_core_hours + ' core-hours for 1M–10M');
    add('p13b-ladder', 'Fixed basis: ' + g[g.length - 1] + ' and ' + s2[s2.length - 1] + ' left at 10M nodes', 'AC19 Aut-min · unsolved after each budget', s);
  })();

  /* =====================================================================
     p13c  nodes and path by difficulty, rows both arms solve
     ===================================================================== */
  (function () {
    var D = P.difficulty || {}, bins = (D.bins || []).filter(function (b) { return b.n > 0; }), s = '';
    function lab(b) { return (b.lo ? tickLabel(b.lo) : '0') + '–' + tickLabel(b.hi); }
    function num(v) { return v >= 1000 ? k(v) : (Math.round(v) === v ? String(v) : v.toFixed(1)); }
    function pair(x, y, a, b) {
      return t(x - 16, y, num(a), { size: 22, anchor: 'end', fill: OR }) + t(x, y, '→', { size: 20, anchor: 'middle', op: 0.4 }) +
        t(x + 16, y, num(b), { size: 22, fill: BLUE });
    }
    var cols = [560, 830, 1110, 1390];
    s += t((cols[0] + cols[1]) / 2, 62, 'nodes explored', { sans: true, weight: 600, size: 24, anchor: 'middle' });
    s += t((cols[2] + cols[3]) / 2, 62, 'path length · substitution moves', { sans: true, weight: 600, size: 24, anchor: 'middle' });
    s += l(430, 76, 960, 76, INK, { op: 0.15 }) + l(990, 76, 1520, 76, INK, { op: 0.15 });
    ['difficulty', 'rows', 'mean', 'median', 'mean', 'median'].forEach(function (h, i) {
      var x = [60, 360, cols[0], cols[1], cols[2], cols[3]][i];
      s += t(x, 108, h, { size: 19, op: 0.45, anchor: i === 0 ? 'start' : (i === 1 ? 'end' : 'middle') });
    });
    bins.forEach(function (b, i) {
      var y = 160 + i * 66;
      s += t(60, y, lab(b) + ' nodes', { sans: true, weight: 600, size: 26 });
      s += t(360, y, k(b.n), { size: 22, anchor: 'end', op: 0.7 });
      s += pair(cols[0], y, b.g.nodes_mean, b.s.nodes_mean) + pair(cols[1], y, b.g.nodes_median, b.s.nodes_median);
      s += pair(cols[2], y, b.g.path_mean, b.s.path_mean) + pair(cols[3], y, b.g.path_median, b.s.path_median);
      s += l(60, y + 26, 1520, y + 26, INK, { op: 0.08, sw: 1 });
    });
    var ly = 160 + bins.length * 66 + 10;
    s += r(60, ly, 20, 16, OR, { op: 0.85 }) + t(90, ly + 15, 'plain greedy', { size: 20, fill: OR });
    s += r(280, ly, 20, 16, BLUE, { op: 0.85 }) + t(310, ly + 15, 'S20_MK2', { size: 20, fill: BLUE });
    s += t(1520, ly + 15, k(D.both) + ' rows solved by both · S20_MK2 alone: ' + D.s20_only + ' · greedy alone: ' + D.greedy_only,
      { size: 20, anchor: 'end', op: 0.6 });
    s += foot('difficulty = the larger of the two node counts, so each band holds the rows both arms solve within that budget · ' +
      'nodes = popped states · caps 48 up to 1M, 64 at 5M and 10M · unsolved at 10M: ' + D.unsolved.greedy + ' / ' + D.unsolved.s20);
    add('p13c-difficulty', 'Harder rows: far fewer nodes, similar paths', 'AC19 Aut-min · greedy → S20_MK2 · rows both solve', s);
  })();

  /* =====================================================================
     p13d  the same bands, as a chart
     ===================================================================== */
  (function () {
    var D = P.difficulty || {}, bins = (D.bins || []).filter(function (b) { return b.n > 0; }), s = '';
    var y0 = 560, y1 = 130;
    function band(b) { return (b.lo ? tickLabel(b.lo) : '0') + '–' + tickLabel(b.hi); }
    function panel(x0, x1, title, lo, hi, logScale, key, ticks) {
      var out = t((x0 + x1) / 2, 92, title, { sans: true, weight: 600, size: 24, anchor: 'middle' });
      function Y(v) { return logScale ? logy(Math.max(lo, v), lo, hi, y0, y1) : y0 - (v - lo) / (hi - lo) * (y0 - y1); }
      ticks.forEach(function (v) {
        out += l(x0, Y(v), x1, Y(v), INK, { op: 0.07, sw: 1 }) + t(x0 - 10, Y(v) + 7, logScale ? tickLabel(v) : v, { size: 18, anchor: 'end', op: 0.5 });
      });
      var gw = (x1 - x0) / bins.length;
      bins.forEach(function (b, i) {
        var gx = x0 + i * gw + gw * 0.14, bw = gw * 0.34;
        [['g', OR, 0.8], ['s', BLUE, 0.85]].forEach(function (a, j) {
          var m = b[a[0]][key + '_mean'], md = b[a[0]][key + '_median'], x = gx + j * bw;
          out += r(x, Y(m), bw - 3, y0 - Y(m), a[1], { op: a[2] });
          out += l(x - 2, Y(md), x + bw - 1, Y(md), INK, { sw: 3 });
        });
        out += t(x0 + i * gw + gw / 2, y0 + 26, band(b), { size: 16, anchor: 'middle', op: 0.6 });
      });
      out += l(x0, y0, x1, y0, INK);
      return out;
    }
    s += panel(110, 760, 'nodes explored (log)', 1, 1e7, true, 'nodes', [1, 10, 100, 1000, 1e4, 1e5, 1e6, 1e7]);
    s += panel(880, 1530, 'path length · substitution moves', 0, 140, false, 'path', [0, 35, 70, 105, 140]);
    s += t(435, y0 + 56, 'difficulty band (nodes needed)', { size: 18, anchor: 'middle', op: 0.45 });
    s += t(1205, y0 + 56, 'difficulty band (nodes needed)', { size: 18, anchor: 'middle', op: 0.45 });
    s += r(110, 650, 20, 16, OR, { op: 0.8 }) + t(140, 665, 'plain greedy', { size: 20, fill: OR });
    s += r(330, 650, 20, 16, BLUE, { op: 0.85 }) + t(360, 665, 'S20_MK2', { size: 20, fill: BLUE });
    s += l(520, 658, 550, 658, INK, { sw: 3 }) + t(560, 665, 'median (bar = mean)', { size: 20, op: 0.7 });
    s += foot('same bands as the table: rows both arms solve, grouped by the larger node count · ' + k(D.both) + ' rows · caps 48 up to 1M, 64 at 5M and 10M');
    add('p13d-difficulty-chart', 'The gap grows with difficulty; paths do not', 'AC19 Aut-min · greedy vs S20_MK2', s);
  })();

  /* =====================================================================
     p14  the originals solve, their Aut-min representatives do not
     ===================================================================== */
  (function () {
    var O = (P.originals || []).slice().sort(function (a, b) { return a.orbit === b.orbit ? a.nodes - b.nodes : (a.orbit < b.orbit ? -1 : 1); });
    var x0 = 150, x1 = 1480, lo = 100, hi = 2e7, y0 = 560, y1 = 110, s = '';
    function Y(v) { return logy(v, lo, hi, y0, y1); }
    [100, 1000, 1e4, 1e5, 1e6, 1e7].forEach(function (v) {
      s += l(x0, Y(v), x1, Y(v), INK, { op: 0.07, sw: 1 }) + t(x0 - 14, Y(v) + 8, tickLabel(v), { size: 20, anchor: 'end', op: 0.5 });
    });
    s += l(x0, Y(1e7), x1, Y(1e7), OR, { dash: '10 7', op: 0.8, sw: 2 });
    s += t(x1, Y(1e7) - 16, 'every Aut-min representative: unsolved at 10,000,000 nodes · 0 / ' + P.orig_orbits, { size: 22, anchor: 'end', fill: OR });
    var prev = null, gx = 0;
    O.forEach(function (o, i) {
      var x = x0 + 20 + i * (x1 - x0 - 40) / (O.length - 1);
      if (o.orbit !== prev) { gx++; prev = o.orbit; }
      s += l(x, Y(o.nodes), x, Y(1e7), INK, { op: 0.08, sw: 2 });
      s += c(x, Y(o.nodes), 7, BLUE, { op: 0.9 });
    });
    var med = P.orig_median_nodes;
    s += l(x0, Y(med), x1, Y(med), BLUE, { dash: '4 6', op: 0.5 });
    s += t(x0 + 10, Y(2e6), 'originals: ' + O.length + ' / ' + O.length + ' solve · median ' + k(med) + ' nodes', { size: 22, fill: BLUE });
    s += t((x0 + x1) / 2, y0 + 40, 'the ' + O.length + ' dataset originals of the ' + P.orig_orbits + ' orbits, grouped by orbit', { size: 22, anchor: 'middle', op: 0.5 });
    s += foot('plain greedy, 10,000,000-node budget, cap 64, on both spellings · the representative is shorter (median start 25 → 19 letters) and still harder');
    add('p14-well', 'The shortest spelling is the hardest', 'AC19 · original spelling vs its Aut-min representative', s);
  })();

  /* =====================================================================
     p14b  the same moves from both starting points
     ===================================================================== */
  (function () {
    var want = ['ac19x_21044', 'ac19x_8769', 'ac19x_39050', 'ac19x_62350', 'ac19x_91095', 'ac19x_115001', 'ac19x_144949', 'ac19x_74462'];
    var byName = {};
    (P.originals || []).forEach(function (o) { byName[o.original] = o; });
    var pick = want.map(function (n) { return byName[n]; }).filter(Boolean), s = '';
    var W = 330, Hh = 220, gapx = 42, gapy = 76, X0 = 70, Y0 = 100;
    pick.forEach(function (o, i) {
      var col = i % 4, row = Math.floor(i / 4), px = X0 + col * (W + gapx), py = Y0 + row * (Hh + gapy);
      var n = o.prof_orig.length - 1, top = Math.max.apply(null, o.prof_rep.concat(o.prof_orig)) * 1.08;
      function X(j) { return px + j * W / n; }
      function Y(v) { return py + Hh - v * Hh / top; }
      s += l(px, py + Hh, px + W, py + Hh, INK, { op: 0.35 }) + l(px, py, px, py + Hh, INK, { op: 0.2 });
      s += t(px, py - 14, o.orbit + ' · ' + o.original, { size: 17, op: 0.6 });
      s += '<polyline fill="none" stroke="' + BLUE + '" stroke-width="2.5" points="' + o.prof_orig.map(function (v, j) { return X(j).toFixed(1) + ',' + Y(v).toFixed(1); }).join(' ') + '"/>';
      s += '<polyline fill="none" stroke="' + OR + '" stroke-width="2.5" points="' + o.prof_rep.map(function (v, j) { return X(j).toFixed(1) + ',' + Y(v).toFixed(1); }).join(' ') + '"/>';
      s += t(px + W, py + 18, o.peak_orig + ' → ' + o.peak_rep, { size: 20, anchor: 'end', fill: OR });
      s += t(px + W, py + Hh + 24, n + ' moves', { size: 16, anchor: 'end', op: 0.45 });
    });
    s += l(470, 30, 510, 30, BLUE, { sw: 3 }) + t(520, 37, 'from the original', { size: 21, fill: BLUE });
    s += l(800, 30, 840, 30, OR, { sw: 3 }) + t(850, 37, 'same moves, from its Aut-min rep', { size: 21, fill: OR });
    var peaks = (P.originals || []).map(function (o) { return o.peak_rep - o.peak_orig; }).filter(function (d) { return d > 0; }).length;
    s += foot('x: AC move · y: total relator length · label: peak from the original → peak from the rep · higher on ' + peaks + ' of ' + (P.originals || []).length +
      ' originals · to trivialise, the rep must climb far above where it starts, which fixed-basis search never reaches');
    add('p14b-profiles', 'Same moves, much higher peak', 'why the Aut-min rows resist 10M nodes', s);
  })();


  /* =====================================================================
     p16  the nine rows that beat 10M nodes
     ===================================================================== */
  (function () {
    var rows = (P.nine || []).slice().sort(function (a, b) { return a.units - b.units; });
    var x0 = 330, x1 = 1450, lo = 10, hi = 1e7, s = '';
    function X(v) { return logx(v, lo, hi, x0, x1); }
    rows.forEach(function (row, i) {
      var y = 110 + i * 52;
      s += t(x0 - 30, y + 8, row.name, { size: 22, anchor: 'end', op: 0.7 });
      s += l(X(row.units), y, X(hi), y, INK, { op: 0.12, sw: 10 });
      s += t(X(hi) + 14, y + 8, '⊗', { size: 26, fill: OR });
      s += c(X(row.units), y, 9, BLUE);
      s += t(X(row.units) - 16, y + 8, k(row.units), { size: 22, anchor: 'end', fill: BLUE });
    });
    var ya = 110 + rows.length * 52 + 10;
    s += l(x0, ya, x1, ya, INK);
    [10, 100, 1000, 1e4, 1e5, 1e6, 1e7].forEach(function (v) { s += l(X(v), ya, X(v), ya + 10, INK) + t(X(v), ya + 38, tickLabel(v), { size: 22, anchor: 'middle', op: 0.6 }); });
    s += t(X(1e7), 80, '10M nodes: fail', { size: 22, anchor: 'middle', fill: OR });
    s += foot('plain greedy and S20_MK2 both stop at 10,000,000 nodes (≈' + P.ladder_core_hours + ' core-hours for the 1M–10M rungs) · Nielsen search: 1,000 units, ordinary AC paths');
    var u = rows.map(function (r0) { return r0.units; });
    add('p16-nine', '10,000,000 nodes → ' + Math.min.apply(null, u) + ' units', 'the 9 rows no fixed-basis search solved', s);
  })();



  /* =====================================================================
     p19  path length in AC moves
     ===================================================================== */
  (function () {
    var M2a = M2 || {}, ms = { substitution: get(M2a, 'substitution.total'), nielsen: get(M2a, 'nielsen.total'), total: get(M2a, 'ac_moves.total'), median: get(M2a, 'ac_moves.median'), max: get(M2a, 'ac_moves.max') }, s = hatch('p19-h', OR);
    var sc = 1000 / P.greedy_ms640_path, x0 = 380;
    s += t(80, 190, 'plain greedy', { sans: true, weight: 600, size: 30 });
    s += r(x0, 158, P.greedy_ms640_path * sc, 50, 'url(#p19-h)');
    s += t(x0 + P.greedy_ms640_path * sc + 14, 192, k(P.greedy_ms640_path), { size: 26, fill: OR });
    s += t(80, 300, 'Nielsen search', { sans: true, weight: 600, size: 30, fill: BLUE });
    s += r(x0, 268, ms.substitution * sc, 50, BLUE, { op: 0.85 });
    s += r(x0 + ms.substitution * sc, 268, ms.nielsen * sc, 50, BLUE, { op: 0.3 });
    s += t(x0 + ms.total * sc + 14, 302, k(ms.substitution) + ' + ' + k(ms.nielsen), { size: 26, fill: BLUE });
    s += t(x0, 360, 'substitutions + Nielsen maps, all 640 paths', { size: 22, op: 0.5 });
    [[ms.median, 'median, MS-640'], [ms.max, 'longest, MS-640'], [get(S2, 'ac_moves.median'), 'median, subset-60'], [get(S2, 'ac_moves.max'), 'longest, subset-60']]
      .forEach(function (p, i) {
        var x = 260 + i * 360;
        s += t(x, 530, k(p[0]), { sans: true, weight: 700, size: 64, anchor: 'middle' });
        s += t(x, 570, p[1], { size: 22, anchor: 'middle', op: 0.55 });
      });
    s += t(800, 624, 'AC moves per path', { size: 22, anchor: 'middle', op: 0.45 });
    s += foot('AC moves = substitutions + Nielsen maps; signed permutations are free · greedy: saved 1,000,000-node run · not a lower bound');
    add('p19-moves', 'MS-640 paths: ' + ratio(P.greedy_ms640_path, ms.substitution) + ' shorter', 'substitution moves · all 640', s);
  })();

  /* ---------- core ends here; appendix below ---------- */
  DECK.APPENDIX_START = DECK.ORDER.length;


  /* A2  which rule closed the old policy's rows */
  (function () {
    var parts = [
      { lab: 'plain S20_MK2 search', v: P.policy_route_plain, col: INK, op: 0.35 },
      { lab: 'BS(m, m+1) collapse', v: P.policy_route_bs, col: BLUE, op: 0.85 },
      { lab: 'primitive donor', v: P.policy_route_primitive, col: BLUE, op: 0.45 },
      { lab: 'two-block', v: P.policy_route_twoblock, col: BLUE, op: 0.25 }
    ];
    var tot = parts.reduce(function (a, p) { return a + p.v; }, 0), x = 100, W = 1400, s = '';
    parts.forEach(function (p) {
      var w = W * p.v / tot;
      s += r(x, 230, w, 90, p.col, { op: p.op });
      x += w;
    });
    parts.forEach(function (p, i) {
      var cx = 100 + i * 360, share = 100 * p.v / tot;
      s += r(cx, 396, 20, 18, p.col, { op: p.op });
      s += t(cx + 30, 412, p.lab, { size: 22, op: 0.7 });
      s += t(cx, 480, (share < 1 ? share.toFixed(2) : share.toFixed(1)) + '%', { sans: true, weight: 700, size: 52, fill: p.col === BLUE ? BLUE : INK });
      s += t(cx, 516, k(p.v) + ' rows', { size: 20, op: 0.45 });
    });
    s += t(800, 600, 'BS(1,2) alone: ' + k(P.policy_route_bs12) + ' of the ' + k(P.policy_route_bs) + ' BS closures', { size: 26, anchor: 'middle', fill: BLUE });
    s += foot('the ' + k(tot) + ' rows the 9 Sep census policy solved at 1,000 units, by the rule that produced the terminal certificate');
    add('a2-routes', 'What closed the old policy’s rows', 'AC19 census policy · ' + k(tot) + ' solves', s);
  })();

  /* A3  where rows finish */
  (function () {
    var sets = [
      { name: 'MS-640', st: fromRows(P.rank2_ms640) },
      { name: 'subset-60', st: fromCounts(S2.stages) },
      { name: 'AC19 Aut-min', st: fromRows((P.rank2_census || {}).stages) }
    ];
    function fromRows(o) { o = o || {}; return { B: get(o, 'B.rows', 0), C: get(o, 'C.rows', 0), H: get(o, 'D.rows', 0), terminal: get(o, 'terminal.rows', 0) }; }
    function fromCounts(o) { o = o || {}; return { B: o.B || 0, C: o.C || 0, H: o.D || 0 }; }
    var cols = { B: [BLUE, 0.3, 'primitive finish'], C: [BLUE, 0.6, 'pinch (BS) cascade'], H: [BLUE, 0.9, 'search'] }, s = '';
    sets.forEach(function (set, i) {
      var y = 140 + i * 120, tot = (set.st.B || 0) + (set.st.C || 0) + (set.st.H || 0) + (set.st.terminal || 0), x = 460;
      s += t(80, y + 34, set.name, { sans: true, weight: 600, size: 30 });
      ['B', 'C', 'H'].forEach(function (key) {
        var w = 1000 * (set.st[key] || 0) / tot;
        s += r(x, y, w, 52, cols[key][0], { op: cols[key][1] });
        if (w > 70) s += t(x + w / 2, y + 35, pct(set.st[key], tot), { size: 22, anchor: 'middle', fill: key === 'H' ? '#fff' : INK });
        x += w;
      });
    });
    ['B', 'C', 'H'].forEach(function (key, i) {
      s += r(460 + i * 330, 640, 20, 18, cols[key][0], { op: cols[key][1] }) + t(490 + i * 330, 656, cols[key][2], { size: 22 });
    });
    s += foot('the stage that finished each row · primitive and pinch stages cost no search');
    var share = sets.map(function (set) { var st = set.st, tot = (st.B || 0) + (st.C || 0) + (st.H || 0) + (st.terminal || 0); return Math.round(100 * ((st.B || 0) + (st.C || 0)) / tot); });
    add('a3-stages', Math.min.apply(null, share) + '–' + Math.max.apply(null, share) + '% of rows need no search', 'Nielsen search · finishing stage', s);
  })();
})();
