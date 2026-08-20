DECK.register('s06b-rotate', `
<header>
  <h1>Four S-moves, fourteen elementary AC</h1>
  <div class="kicker">the formula</div>
</header>
<div class="viz">
<svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" fill="#191813">
  <g text-anchor="middle">
    <text x="800" y="72" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="24" fill="#191813" fill-opacity="0.55">⟨ YYXyx, YYx ⟩  →  ⟨ YYYx, YYx ⟩  →  ⟨ Y, YYx ⟩</text>
    <text x="800" y="112" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="24" fill="#191813" fill-opacity="0.55">⟨ Y, Xy ⟩  →  ⟨ Y, X ⟩</text>
    <text x="430" y="320" font-family="Figtree" font-weight="700" font-size="140" fill="#191813">14</text>
    <text x="430" y="388" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.55">elementary AC moves</text>
    <text x="800" y="308" font-family="Figtree" font-weight="600" font-size="56" fill="#191813" fill-opacity="0.28">=</text>
    <text x="1170" y="320" font-family="Figtree" font-weight="700" font-size="140" fill="#2B54C4">4</text>
    <text x="1170" y="388" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#2B54C4">S-moves</text>
    <text x="800" y="500" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="24" fill="#191813" fill-opacity="0.5">8 + 3 + 2 + 1  ·  cyclic reduce free</text>
  </g>
</svg>
</div>
`);

DECK.register('s08-stable', `
<div class="step-root" data-steps="4" data-step="0">
<header>
  <h1>Stable Andrews–Curtis</h1>
  <div class="kicker">the main work this summer</div>
</header>
<div class="viz">
<svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" fill="#191813">

  <g data-at="0" text-anchor="middle">
    <text x="800" y="88" font-family="Figtree" font-weight="600" font-size="40">stabilize</text>
    <text x="340" y="188" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="30">⟨ x, y | r₁, r₂ ⟩</text>
    <text x="800" y="192" font-size="48" fill="#2B54C4">→</text>
    <text x="1260" y="188" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="30">⟨ x, y, z | r₁, r₂, z ⟩</text>
    <text x="800" y="320" font-family="Figtree" font-weight="600" font-size="40">destabilize</text>
    <text x="340" y="420" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="30">⟨ x, y, z | r₁, r₂, z ⟩</text>
    <text x="800" y="424" font-size="48" fill="#2B54C4">→</text>
    <text x="1260" y="420" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="30">⟨ x, y | r₁, r₂ ⟩</text>
    <text x="800" y="560" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.5">two extra moves · with these, does a path always exist?</text>
  </g>

  <g data-at="1 2 3 4" text-anchor="middle">
    <text x="800" y="72" font-family="Figtree" font-weight="600" font-size="44" fill="#2B54C4">Lemma 11</text>
    <text x="800" y="118" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="24" fill="#191813" fill-opacity="0.5">Shehper et al.</text>
  </g>

  <g data-at="1" text-anchor="middle">
    <text x="800" y="220" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="32">⟨ x₁,…,xₙ, y  |  r₁,…,rₙ,  y⁻¹w ⟩</text>
    <text x="800" y="300" font-size="48" fill="#2B54C4">∼</text>
    <text x="800" y="380" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="32">⟨ x₁,…,xₙ  |  rᵢ with y replaced by w ⟩</text>
    <text x="800" y="500" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.55">if an extra letter is defined as a word, substitute and drop it</text>
  </g>

  <g data-at="2" text-anchor="middle">
    <text x="800" y="300" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="36">⟨ x, y, z | <tspan fill="#2B54C4">z</tspan><tspan fill-opacity="0.28">·</tspan><tspan fill="#2B54C4">z</tspan><tspan fill-opacity="0.28">·</tspan>x, y<tspan fill-opacity="0.28">·</tspan><tspan fill="#2B54C4">z</tspan><tspan fill-opacity="0.28">·</tspan>Y, <tspan fill="#2B54C4">Z</tspan><tspan fill-opacity="0.28">·</tspan>Xy ⟩</text>
    <text x="800" y="392" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.55">the stable form · <tspan fill="#2B54C4" fill-opacity="1">z</tspan> ≡ Xy</text>
  </g>

  <g data-at="3" text-anchor="middle">
    <text x="800" y="222" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.35">⟨ x, y, z | z·z·x, y·z·Y, Z·Xy ⟩</text>
    <text x="800" y="310" font-size="42" fill="#2B54C4">↓</text>
    <text x="856" y="302" text-anchor="start" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="24" fill="#191813" fill-opacity="0.5">replace every z by Xy</text>
    <text x="800" y="418" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="34">⟨ x, y, z | <tspan fill="#2B54C4">Xy</tspan><tspan fill-opacity="0.28">·</tspan><tspan fill="#2B54C4">Xy</tspan><tspan fill-opacity="0.28">·</tspan>x, y<tspan fill-opacity="0.28">·</tspan><tspan fill="#2B54C4">Xy</tspan><tspan fill-opacity="0.28">·</tspan>Y, <tspan fill="#E05B2B">Yx</tspan><tspan fill-opacity="0.28">·</tspan><tspan fill="#E05B2B">Xy</tspan> ⟩</text>
    <text x="800" y="510" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.55"><tspan fill="#E05B2B" fill-opacity="1">Yx·Xy</tspan> = 1</text>
  </g>

  <g data-at="4" text-anchor="middle">
    <text x="800" y="222" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.35">⟨ x, y, z | Xy·Xy·x, y·Xy·Y, Yx·Xy ⟩</text>
    <text x="800" y="310" font-size="42" fill="#2B54C4">↓</text>
    <text x="856" y="302" text-anchor="start" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="24" fill="#191813" fill-opacity="0.5">destabilize · drop z</text>
    <text x="800" y="418" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="36">⟨ x, y | <tspan fill="#2B54C4">Xy</tspan><tspan fill-opacity="0.28">·</tspan><tspan fill="#2B54C4">Xy</tspan><tspan fill-opacity="0.28">·</tspan>x, y<tspan fill-opacity="0.28">·</tspan><tspan fill="#2B54C4">Xy</tspan><tspan fill-opacity="0.28">·</tspan>Y ⟩</text>
    <text x="800" y="510" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.55">two generators again</text>
  </g>

  <g>
    <circle class="dot d0" cx="752" cy="708" r="7"/>
    <circle class="dot d1" cx="776" cy="708" r="7"/>
    <circle class="dot d2" cx="800" cy="708" r="7"/>
    <circle class="dot d3" cx="824" cy="708" r="7"/>
    <circle class="dot d4" cx="848" cy="708" r="7"/>
  </g>
</svg>
</div>
</div>
`);

DECK.register('s07-hump', `
  <header><h1>ΔL &gt; 0 on 26.5% of paths</h1><div class="kicker">greedy vs PPO-SUB-DRT · 12,670 solved by both</div></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="s07-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#191813"/></marker>
    </defs>
    <rect x="180" y="36" width="22" height="22" fill="#191813"/>
    <text x="212" y="54" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813">greedy</text>
    <rect x="360" y="36" width="22" height="22" fill="#2B54C4"/>
    <text x="392" y="54" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813">PPO-SUB-DRT</text>
    <text x="48" y="340" transform="rotate(-90 48 340)" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.45">presentations</text>
    <line x1="150" y1="80" x2="150" y2="580" stroke="#191813" stroke-width="1.5" marker-end="url(#s07-ah)"/>
    <line x1="150" y1="580" x2="1040" y2="580" stroke="#191813" stroke-width="1.5" marker-end="url(#s07-ah)"/>
    <line x1="144" y1="580" x2="156" y2="580" stroke="#191813" stroke-width="1.5"/>
    <line x1="144" y1="330" x2="156" y2="330" stroke="#191813" stroke-width="1.5"/>
    <line x1="144" y1="80" x2="156" y2="80" stroke="#191813" stroke-width="1.5"/>
    <text x="136" y="588" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">0</text>
    <text x="136" y="338" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">5,000</text>
    <text x="136" y="88" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">10,000</text>
    <rect x="190" y="114.2" width="52" height="465.8" fill="#191813"/>
    <rect x="248" y="324.6" width="52" height="255.4" fill="#2B54C4"/>
    <rect x="360" y="505.6" width="52" height="74.4" fill="#191813"/>
    <rect x="418" y="477.1" width="52" height="102.9" fill="#2B54C4"/>
    <rect x="530" y="515.7" width="52" height="64.3" fill="#191813"/>
    <rect x="588" y="465.9" width="52" height="114.1" fill="#2B54C4"/>
    <rect x="700" y="551.4" width="52" height="28.6" fill="#191813"/>
    <rect x="758" y="477.6" width="52" height="102.4" fill="#2B54C4"/>
    <rect x="870" y="577" width="52" height="3" fill="#191813"/>
    <rect x="928" y="521.4" width="52" height="58.6" fill="#2B54C4"/>
    <g text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="20">
      <g fill="#191813">
        <text x="216" y="100">9,316</text>
        <text x="386" y="491">1,487</text>
        <text x="556" y="501">1,286</text>
        <text x="726" y="537">572</text>
        <text x="896" y="563">9</text>
      </g>
      <g fill="#2B54C4">
        <text x="274" y="310">5,109</text>
        <text x="444" y="463">2,058</text>
        <text x="614" y="451">2,283</text>
        <text x="784" y="463">2,047</text>
        <text x="954" y="507">1,173</text>
      </g>
    </g>
    <text x="245" y="614" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">0</text>
    <text x="415" y="614" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">1–2</text>
    <text x="585" y="614" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">3–5</text>
    <text x="755" y="614" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">6–10</text>
    <text x="925" y="614" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">11+</text>
    <text x="595" y="656" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#191813" fill-opacity="0.7">ΔL  =  max L  −  L₀</text>
    <text x="595" y="694" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="21" fill="#191813" fill-opacity="0.42">L = |r₁| + |r₂| · max taken over the solution path</text>
    <text x="1180" y="150" font-family="'IBM Plex Mono', monospace" font-size="34" fill="#191813">73.5%</text>
    <text x="1180" y="184" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.55">ΔL = 0 · L never exceeds L₀</text>

    <text x="1180" y="264" font-family="'IBM Plex Mono', monospace" font-size="34" fill="#E05B2B">26.5%</text>
    <text x="1180" y="298" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.55">ΔL &gt; 0 · L exceeds L₀ en route</text>

    <text x="1180" y="386" font-family="Figtree" font-weight="600" font-size="30" fill="#191813">path length</text>
    <rect x="1180" y="406" width="195.5" height="38" fill="#2B54C4"/>
    <rect x="1375.5" y="406" width="105.1" height="38" fill="#191813" fill-opacity="0.22"/>
    <rect x="1480.6" y="406" width="39.4" height="38" fill="#E05B2B"/>
    <text x="1180" y="480" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#2B54C4">57.5% PPO shorter</text>
    <text x="1180" y="512" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.5">30.9% equal</text>
    <text x="1180" y="544" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#E05B2B">11.6% greedy shorter</text>

    <text x="1180" y="608" font-family="'IBM Plex Mono', monospace" font-size="30" fill="#2B54C4">+18.4 moves</text>
    <text x="1180" y="640" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.55">saved when ΔL ≥ 11</text>
    <text x="1180" y="672" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.55">27% fewer moves overall</text>

    <text x="1180" y="704" font-family="'IBM Plex Mono', monospace" font-size="20" fill="#191813" fill-opacity="0.42">beam width 1,024</text>
  </svg></div>
`);

DECK.register('s09-funnel', `
<div class="step-root" data-steps="3" data-step="0">
<header>
  <h1>261 problems are really 124</h1>
  <div class="kicker">261  →  124</div>
</header>
<div class="viz">
<svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" fill="#191813">
  <defs>
    <marker id="s09-ah-y" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#E05B2B"/></marker>
    <marker id="s09-ah-x" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#191813" fill-opacity="0.35"/></marker>
    <marker id="s09-ah-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#2B54C4"/></marker>
  </defs>

  <!-- 0: two distinct unsolved presentations -->
  <g data-at="0" font-family="Figtree" font-weight="600" font-size="32" text-anchor="middle">
    <text x="84" y="210" text-anchor="start" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="20" fill="#191813" fill-opacity="0.4">unsolved</text>
    <text x="360" y="210" font-size="40" fill="#191813" fill-opacity="0.35">⟨</text>
    <text x="912" y="210" font-size="30" fill="#191813" fill-opacity="0.35">,</text>
    <text x="1214" y="210" font-size="40" fill="#191813" fill-opacity="0.35">⟩</text>
    <g transform="translate(394, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(450, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(506, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(562, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(618, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(674, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(730, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(786, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(842, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <g transform="translate(926, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(982, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1038, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(1094, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <g transform="translate(1150, 168)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <text x="800" y="328" font-size="52" fill="#191813" fill-opacity="0.28">≠</text>
    <text x="84" y="422" text-anchor="start" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="20" fill="#191813" fill-opacity="0.4">unsolved</text>
    <text x="360" y="422" font-size="40" fill="#191813" fill-opacity="0.35">⟨</text>
    <text x="912" y="422" font-size="30" fill="#191813" fill-opacity="0.35">,</text>
    <text x="1214" y="422" font-size="40" fill="#191813" fill-opacity="0.35">⟩</text>
    <g transform="translate(394, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(450, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(506, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(562, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(618, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(674, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(730, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(786, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(842, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <g transform="translate(926, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(982, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1038, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1094, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(1150, 380)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
  </g>

  <!-- 1: y ↦ y⁻¹ with letter-to-letter arrows; both Aut rows and the other presentation visible -->
  <g data-at="1" font-family="Figtree" font-weight="600" font-size="32" text-anchor="middle">
    <text x="800" y="48" font-family="Figtree" font-weight="600" font-size="44" fill="#E05B2B">automorphism</text>
    <text x="800" y="92" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="30" fill="#E05B2B">y ↦ y⁻¹</text>
    <text x="360" y="170" font-size="40" fill="#191813" fill-opacity="0.35">⟨</text>
    <text x="912" y="170" font-size="30" fill="#191813" fill-opacity="0.35">,</text>
    <text x="1214" y="170" font-size="40" fill="#191813" fill-opacity="0.35">⟩</text>
    <g transform="translate(394, 128)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="37">Y</text></g>
    <g transform="translate(450, 128)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="37">Y</text></g>
    <g transform="translate(506, 128)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="37">Y</text></g>
    <g transform="translate(562, 128)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="37">Y</text></g>
    <g transform="translate(618, 128)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(674, 128)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="27">y</text></g>
    <g transform="translate(730, 128)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="27">y</text></g>
    <g transform="translate(786, 128)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="27">y</text></g>
    <g transform="translate(842, 128)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <g transform="translate(926, 128)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="37">Y</text></g>
    <g transform="translate(982, 128)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1038, 128)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="37">Y</text></g>
    <g transform="translate(1094, 128)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <g transform="translate(1150, 128)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <path class="xline slow" marker-end="url(#s09-ah-y)" d="M420.0 190 L420.0 272"/>
    <path class="xline slow" marker-end="url(#s09-ah-y)" d="M476.0 190 L476.0 272"/>
    <path class="xline slow" marker-end="url(#s09-ah-y)" d="M532.0 190 L532.0 272"/>
    <path class="xline slow" marker-end="url(#s09-ah-y)" d="M588.0 190 L588.0 272"/>
    <path class="s09-arrow-x" marker-end="url(#s09-ah-x)" d="M644.0 190 L644.0 272"/>
    <path class="xline slow" marker-end="url(#s09-ah-y)" d="M700.0 190 L700.0 272"/>
    <path class="xline slow" marker-end="url(#s09-ah-y)" d="M756.0 190 L756.0 272"/>
    <path class="xline slow" marker-end="url(#s09-ah-y)" d="M812.0 190 L812.0 272"/>
    <path class="s09-arrow-x" marker-end="url(#s09-ah-x)" d="M868.0 190 L868.0 272"/>
    <path class="xline slow" marker-end="url(#s09-ah-y)" d="M952.0 190 L952.0 272"/>
    <path class="s09-arrow-x" marker-end="url(#s09-ah-x)" d="M1008.0 190 L1008.0 272"/>
    <path class="xline slow" marker-end="url(#s09-ah-y)" d="M1064.0 190 L1064.0 272"/>
    <path class="s09-arrow-x" marker-end="url(#s09-ah-x)" d="M1120.0 190 L1120.0 272"/>
    <path class="s09-arrow-x" marker-end="url(#s09-ah-x)" d="M1176.0 190 L1176.0 272"/>
    <text x="360" y="320" font-size="40" fill="#191813" fill-opacity="0.35">⟨</text>
    <text x="912" y="320" font-size="30" fill="#191813" fill-opacity="0.35">,</text>
    <text x="1214" y="320" font-size="40" fill="#191813" fill-opacity="0.35">⟩</text>
    <g transform="translate(394, 278)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="27">y</text></g>
    <g transform="translate(450, 278)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="27">y</text></g>
    <g transform="translate(506, 278)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="27">y</text></g>
    <g transform="translate(562, 278)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="27">y</text></g>
    <g transform="translate(618, 278)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(674, 278)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="37">Y</text></g>
    <g transform="translate(730, 278)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="37">Y</text></g>
    <g transform="translate(786, 278)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="37">Y</text></g>
    <g transform="translate(842, 278)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <g transform="translate(926, 278)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="27">y</text></g>
    <g transform="translate(982, 278)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1038, 278)"><rect width="52" height="60" fill="#E05B2B" stroke="#FAF9F6" stroke-width="3.5"/><text x="26" y="42" fill="#fff" font-size="27">y</text></g>
    <g transform="translate(1094, 278)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <g transform="translate(1150, 278)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <text x="800" y="438" font-size="44" fill="#191813" fill-opacity="0.28">≠</text>
    <text x="360" y="520" font-size="40" fill="#191813" fill-opacity="0.35">⟨</text>
    <text x="912" y="520" font-size="30" fill="#191813" fill-opacity="0.35">,</text>
    <text x="1214" y="520" font-size="40" fill="#191813" fill-opacity="0.35">⟩</text>
    <g transform="translate(394, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(450, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(506, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(562, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(618, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(674, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(730, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(786, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(842, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <g transform="translate(926, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(982, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1038, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1094, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(1150, 478)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
  </g>

  <!-- 2: invert Aut image (reverse + invert letters); Q already canonical -->
  <g data-at="2" font-family="Figtree" font-weight="600" font-size="32" text-anchor="middle">
    <text x="800" y="48" font-family="Figtree" font-weight="600" font-size="44" fill="#2B54C4">invert</text>
    <text x="800" y="92" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="24" fill="#191813" fill-opacity="0.5">each relator → reverse, invert letters</text>
    <text x="168" y="230" text-anchor="start" font-size="32">⟨ x, y |</text>
    <text x="912" y="230" font-size="30" fill="#191813" fill-opacity="0.35">,</text>
    <text x="1214" y="230" text-anchor="start" font-size="32">⟩</text>
    <g class="s09-wrap" transform="translate(394, 188)"><g class="s09-hop s09-inv" style="--dx:8"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="27">y</text><text class="s09-inv-to" x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap" transform="translate(450, 188)"><g class="s09-hop s09-inv" style="--dx:6"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="27">y</text><text class="s09-inv-to" x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap" transform="translate(506, 188)"><g class="s09-hop s09-inv" style="--dx:4"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="27">y</text><text class="s09-inv-to" x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap" transform="translate(562, 188)"><g class="s09-hop s09-inv" style="--dx:2"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="27">y</text><text class="s09-inv-to" x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap" transform="translate(618, 188)"><g class="s09-hop s09-inv" style="--dx:0"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="37">X</text><text class="s09-inv-to" x="26" y="42" font-size="27">x</text></g></g>
    <g class="s09-wrap" transform="translate(674, 188)"><g class="s09-hop s09-inv" style="--dx:-2"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="37">Y</text><text class="s09-inv-to" x="26" y="42" font-size="27">y</text></g></g>
    <g class="s09-wrap" transform="translate(730, 188)"><g class="s09-hop s09-inv" style="--dx:-4"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="37">Y</text><text class="s09-inv-to" x="26" y="42" font-size="27">y</text></g></g>
    <g class="s09-wrap" transform="translate(786, 188)"><g class="s09-hop s09-inv" style="--dx:-6"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="37">Y</text><text class="s09-inv-to" x="26" y="42" font-size="27">y</text></g></g>
    <g class="s09-wrap" transform="translate(842, 188)"><g class="s09-hop s09-inv" style="--dx:-8"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="27">x</text><text class="s09-inv-to" x="26" y="42" font-size="37">X</text></g></g>
    <g class="s09-wrap" transform="translate(926, 188)"><g class="s09-hop s09-inv" style="--dx:4"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="27">y</text><text class="s09-inv-to" x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap" transform="translate(982, 188)"><g class="s09-hop s09-inv" style="--dx:2"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="37">X</text><text class="s09-inv-to" x="26" y="42" font-size="27">x</text></g></g>
    <g class="s09-wrap" transform="translate(1038, 188)"><g class="s09-hop s09-inv" style="--dx:0"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="27">y</text><text class="s09-inv-to" x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap" transform="translate(1094, 188)"><g class="s09-hop s09-inv" style="--dx:-2"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="27">x</text><text class="s09-inv-to" x="26" y="42" font-size="37">X</text></g></g>
    <g class="s09-wrap" transform="translate(1150, 188)"><g class="s09-hop s09-inv" style="--dx:-4"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text class="s09-inv-from" x="26" y="42" font-size="27">x</text><text class="s09-inv-to" x="26" y="42" font-size="37">X</text></g></g>
    <text x="800" y="338" font-size="44" fill="#191813" fill-opacity="0.28">≠</text>
    <text x="168" y="450" text-anchor="start" font-size="32">⟨ x, y |</text>
    <text x="912" y="450" font-size="30" fill="#191813" fill-opacity="0.35">,</text>
    <text x="1214" y="450" text-anchor="start" font-size="32">⟩</text>
    <g transform="translate(394, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(450, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(506, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(562, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(618, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(674, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(730, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(786, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(842, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <g transform="translate(926, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(982, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1038, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1094, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(1150, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <text x="800" y="540" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="22" fill="#191813" fill-opacity="0.5">⟨ XyyyxYYYY, XXYxY ⟩ · other already canonical</text>
  </g>

  <!-- 3: Booth-rotate inverted P onto Q -->
  <g data-at="3" font-family="Figtree" font-weight="600" font-size="32" text-anchor="middle">
    <text x="800" y="48" font-family="Figtree" font-weight="600" font-size="44" fill="#2B54C4">rotate</text>
    <text x="800" y="92" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="24" fill="#191813" fill-opacity="0.5">cyclic to lex-min</text>
    <text x="168" y="230" text-anchor="start" font-size="32">⟨ x, y |</text>
    <text x="912" y="230" font-size="30" fill="#191813" fill-opacity="0.35">,</text>
    <text x="1214" y="230" text-anchor="start" font-size="32">⟩</text>
    <path class="s06-arr s06-arr-x s09-arr-h1" marker-end="url(#s09-ah-b)" d="M420 184 Q 644 72 868 184"/>
    <path class="s06-arr s06-arr-y s09-arr-h2" marker-end="url(#s09-ah-y)" d="M420 184 Q 644 72 868 184"/>
    <path class="s06-arr s06-arr-y s09-arr-h3" marker-end="url(#s09-ah-y)" d="M420 184 Q 644 72 868 184"/>
    <path class="s06-arr s06-arr-y s09-arr-h4" marker-end="url(#s09-ah-y)" d="M420 184 Q 644 72 868 184"/>
    <path class="s06-arr s06-arr-x s09-arr-h5" marker-end="url(#s09-ah-b)" d="M420 184 Q 644 72 868 184"/>
    <path class="s06-arr s06-arr-x s09-arr-h1" marker-end="url(#s09-ah-b)" d="M952 184 Q 1064 84 1176 184"/>
    <path class="s06-arr s06-arr-x s09-arr-h2" marker-end="url(#s09-ah-b)" d="M952 184 Q 1064 84 1176 184"/>
    <path class="s06-arr s06-arr-y s09-arr-h3" marker-end="url(#s09-ah-y)" d="M952 184 Q 1064 84 1176 184"/>
    <path class="s06-arr s06-arr-x s09-arr-h4" marker-end="url(#s09-ah-b)" d="M952 184 Q 1064 84 1176 184"/>
    <g class="s09-wrap s09-z-r1-0" transform="translate(394, 188)"><g class="s09-hop s09-rot-r1-0"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g></g>
    <g class="s09-wrap s09-z-r1-1" transform="translate(450, 188)"><g class="s09-hop s09-rot-r1-1"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g></g>
    <g class="s09-wrap s09-z-r1-2" transform="translate(506, 188)"><g class="s09-hop s09-rot-r1-2"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g></g>
    <g class="s09-wrap s09-z-r1-3" transform="translate(562, 188)"><g class="s09-hop s09-rot-r1-3"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g></g>
    <g class="s09-wrap s09-z-r1-4" transform="translate(618, 188)"><g class="s09-hop s09-rot-r1-4"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g></g>
    <g class="s09-wrap" transform="translate(674, 188)"><g class="s09-hop s09-rot-r1-s"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap" transform="translate(730, 188)"><g class="s09-hop s09-rot-r1-s"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap" transform="translate(786, 188)"><g class="s09-hop s09-rot-r1-s"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap" transform="translate(842, 188)"><g class="s09-hop s09-rot-r1-s"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap s09-z-r2-0" transform="translate(926, 188)"><g class="s09-hop s09-rot-r2-0"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g></g>
    <g class="s09-wrap s09-z-r2-1" transform="translate(982, 188)"><g class="s09-hop s09-rot-r2-1"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g></g>
    <g class="s09-wrap s09-z-r2-2" transform="translate(1038, 188)"><g class="s09-hop s09-rot-r2-2"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g></g>
    <g class="s09-wrap s09-z-r2-3" transform="translate(1094, 188)"><g class="s09-hop s09-rot-r2-3"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g></g>
    <g class="s09-wrap" transform="translate(1150, 188)"><g class="s09-hop s09-rot-r2-4"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g></g>
    <g transform="translate(800, 332)">
      <circle r="26" fill="#2B54C4"/>
      <path d="M -9 1 L -2.5 8.5 L 11 -9" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <text x="168" y="450" text-anchor="start" font-size="32">⟨ x, y |</text>
    <text x="912" y="450" font-size="30" fill="#191813" fill-opacity="0.35">,</text>
    <text x="1214" y="450" text-anchor="start" font-size="32">⟩</text>
    <g transform="translate(394, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(450, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(506, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(562, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(618, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(674, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(730, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(786, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">y</text></g>
    <g transform="translate(842, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <g transform="translate(926, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(982, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1038, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">X</text></g>
    <g transform="translate(1094, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="37">Y</text></g>
    <g transform="translate(1150, 408)"><rect width="52" height="60" fill="#fff" stroke="#191813" stroke-opacity="0.18" stroke-width="1.5"/><text x="26" y="42" font-size="27">x</text></g>
    <text x="800" y="518" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#2B54C4">same presentation</text>
    <text x="800" y="560" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="22" fill="#191813" fill-opacity="0.5">this map does 88% of the merging</text>
  </g>

  <text x="800" y="640" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="28" fill="#191813" fill-opacity="0.45">261  →  124</text>

  <g>
    <circle class="dot d0" cx="764" cy="708" r="7"/>
    <circle class="dot d1" cx="788" cy="708" r="7"/>
    <circle class="dot d2" cx="812" cy="708" r="7"/>
    <circle class="dot d3" cx="836" cy="708" r="7"/>
  </g>
</svg>
</div>
</div>
`);

DECK.register('s10-blocks', `
<header>
  <h1>A benchmark subset of 1,190 presentations</h1>
  <div class="kicker">640 solved · 550 unsolved</div>
</header>
<div class="viz">
<svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" fill="#191813">
  <g text-anchor="middle">
    <text x="800" y="210" font-family="Figtree" font-weight="700" font-size="96">1,190</text>
    <text x="800" y="262" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="28" fill="#191813" fill-opacity="0.5">Miller–Schupp presentations</text>
    <rect x="340" y="330" width="495" height="56" fill="#2B54C4"/>
    <rect x="835" y="330" width="425" height="56" fill="#E05B2B"/>
    <text x="520" y="460" font-family="Figtree" font-weight="700" font-size="72" fill="#2B54C4">640</text>
    <text x="520" y="508" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="28" fill="#2B54C4">solved</text>
    <text x="1080" y="460" font-family="Figtree" font-weight="700" font-size="72" fill="#E05B2B">550</text>
    <text x="1080" y="508" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="28" fill="#E05B2B">unsolved</text>
    <text x="1080" y="560" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="24" fill="#191813" fill-opacity="0.5">previous paper · 261 classes</text>
  </g>
</svg>
</div>
`);

DECK.register('s11-compass', `
  <header><h1>A better heuristic: 221 → 39</h1><div class="kicker">70,723 Aut-minimal orbits</div></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="s11-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#191813"/></marker>
    </defs>
    <text x="150" y="72" font-family="'IBM Plex Mono', monospace" font-size="34" fill="#2B54C4">L + 20·S + 2·MK</text>
    <text x="48" y="360" transform="rotate(-90 48 360)" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.45">unsolved</text>
    <line x1="150" y1="100" x2="150" y2="620" stroke="#191813" stroke-width="1.5" marker-end="url(#s11-ah)"/>
    <line x1="150" y1="620" x2="1100" y2="620" stroke="#191813" stroke-width="1.5" marker-end="url(#s11-ah)"/>
    <line x1="144" y1="620" x2="156" y2="620" stroke="#191813" stroke-width="1.5"/>
    <line x1="144" y1="504" x2="156" y2="504" stroke="#191813" stroke-width="1.5"/>
    <line x1="144" y1="387" x2="156" y2="387" stroke="#191813" stroke-width="1.5"/>
    <line x1="144" y1="271" x2="156" y2="271" stroke="#191813" stroke-width="1.5"/>
    <line x1="144" y1="155" x2="156" y2="155" stroke="#191813" stroke-width="1.5"/>
    <text x="136" y="628" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">0</text>
    <text x="136" y="512" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">200</text>
    <text x="136" y="395" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">400</text>
    <text x="136" y="279" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">600</text>
    <text x="136" y="163" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">800</text>
    <text x="150" y="656" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">10,000</text>
    <text x="500" y="656" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">25,000</text>
    <text x="765" y="656" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">50,000</text>
    <text x="1030" y="656" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">100,000</text>
    <line x1="150" y1="614" x2="150" y2="626" stroke="#191813" stroke-width="1.5"/>
    <line x1="500" y1="614" x2="500" y2="626" stroke="#191813" stroke-width="1.5"/>
    <line x1="765" y1="614" x2="765" y2="626" stroke="#191813" stroke-width="1.5"/>
    <line x1="1030" y1="614" x2="1030" y2="626" stroke="#191813" stroke-width="1.5"/>
    <text x="590" y="700" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.45">node budget · log scale</text>
    <polyline points="150,137 500,330 765,434 1030,492" fill="none" stroke="#191813" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="150" cy="137" r="6" fill="#191813"/>
    <circle cx="500" cy="330" r="6" fill="#191813"/>
    <circle cx="765" cy="434" r="6" fill="#191813"/>
    <circle cx="1030" cy="492" r="6" fill="#191813"/>
    <polyline points="150,470 500,543 765,587 1030,597" fill="none" stroke="#2B54C4" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="150" cy="470" r="7" fill="#2B54C4"/>
    <circle cx="500" cy="543" r="7" fill="#2B54C4"/>
    <circle cx="765" cy="587" r="7" fill="#2B54C4"/>
    <circle cx="1030" cy="597" r="7" fill="#2B54C4"/>
    <text x="1018" y="398" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">length · 221</text>
    <text x="1018" y="548" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#2B54C4">L + 20·S + 2·MK · 39</text>
    <text x="1180" y="280" font-family="'IBM Plex Mono', monospace" font-size="32" fill="#191813">95 → 277 / 316</text>
    <text x="1180" y="316" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.55">hardest bin solved</text>
    <text x="1180" y="450" font-family="'IBM Plex Mono', monospace" font-size="36" fill="#191813">563.3 → 263.2</text>
    <text x="1180" y="486" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.55">mean nodes</text>

    <text x="1180" y="596" font-family="'IBM Plex Mono', monospace" font-size="36" fill="#191813">23.5 → <tspan fill="#E05B2B">26.6</tspan></text>
    <text x="1180" y="632" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.55">mean path length</text>
    <text x="1180" y="664" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.55">3 moves longer</text>
  </svg></div>
`);
