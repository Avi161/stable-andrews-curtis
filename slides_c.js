/* Closing slides + Q&A appendix. */

DECK.register('s12-cov', `
<div class="step-root" data-steps="4" data-step="0">
  <header><h1>Change of variables</h1><div class="kicker">z = Xy</div></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" fill="#191813">

    <g data-at="0" text-anchor="middle">
      <text x="800" y="88" font-family="Figtree" font-weight="600" font-size="40">z = w(x, y)</text>
      <text x="800" y="200" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="34">⟨ x, y | YY<tspan fill="#2B54C4">X</tspan><tspan fill="#E05B2B">y</tspan>x, <tspan fill="#2B54C4">Y</tspan><tspan fill="#E05B2B">x</tspan> ⟩</text>
      <g font-family="Figtree" font-weight="600" font-size="40" text-anchor="middle">
      <text x="716" y="368" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="34">z =</text>
      <g transform="translate(740, 316)"><rect width="68" height="76" fill="#2B54C4" stroke="#FAF9F6" stroke-width="4"/><text x="34" y="52.06" fill="#fff" font-size="46">X</text></g>
      <g transform="translate(816, 316)"><rect width="68" height="76" fill="#2B54C4" stroke="#FAF9F6" stroke-width="4"/><text x="34" y="52.06" fill="#fff" font-size="34">y</text></g>
      <text x="716" y="508" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="34">z⁻¹ =</text>
      <g transform="translate(740, 456)"><g class="s12-hop s12-swap" style="--fx:76px;--fy:-140px"><rect width="68" height="76" fill="#2B54C4" stroke="#FAF9F6" stroke-width="4"/><text class="s12-flip-pre" x="34" y="52" fill="#fff" font-size="34">y</text><text class="s12-flip-post" x="34" y="52" fill="#fff" font-size="46">Y</text></g></g>
      <g transform="translate(816, 456)"><g class="s12-hop s12-swap" style="--fx:-76px;--fy:-140px"><rect width="68" height="76" fill="#2B54C4" stroke="#FAF9F6" stroke-width="4"/><text class="s12-flip-pre" x="34" y="52" fill="#fff" font-size="46">X</text><text class="s12-flip-post" x="34" y="52" fill="#fff" font-size="34">x</text></g></g>
      </g>
    </g>

    <g data-at="1" text-anchor="middle">
      <text x="800" y="88" font-family="Figtree" font-weight="600" font-size="40">stabilize</text>
      <text x="800" y="200" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="32" fill="#191813" fill-opacity="0.45">⟨ x, y | YYXyx, Yx ⟩</text>
      <text x="800" y="284" font-size="48" fill="#2B54C4">→</text>
      <text x="800" y="380" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="32">⟨ x, y, z | YYXyx, Yx, Z<tspan fill="#2B54C4">X</tspan><tspan fill="#E05B2B">y</tspan> ⟩</text>
      <text x="800" y="468" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.5">z = Xy</text>
    </g>

    <g data-at="2">
      <text x="800" y="88" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="40">substitute · isolate x</text>
      <text class="s12-was" x="800" y="192" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="34">⟨ x, y, z | YY<tspan fill="#2B54C4">Xy</tspan>x, <tspan fill="#2B54C4">Yx</tspan>, ZXy ⟩</text>
      <g font-family="Figtree" font-weight="600" font-size="34" text-anchor="middle">
      <g transform="translate(378, 262)"><rect width="60" height="68" fill="#2B54C4" stroke="#FAF9F6" stroke-width="4"/><text x="30" y="46.58" fill="#fff" font-size="29">z</text></g>
      <g class="s12-hop s12-in-a"><text x="482" y="308" font-size="36" fill="#2B54C4">→</text><g transform="translate(536, 262)"><rect width="60" height="68" fill="#2B54C4" stroke="#FAF9F6" stroke-width="4"/><text x="30" y="46.58" fill="#fff" font-size="39">X</text></g><g transform="translate(604, 262)"><rect width="60" height="68" fill="#2B54C4" stroke="#FAF9F6" stroke-width="4"/><text x="30" y="46.58" fill="#fff" font-size="29">y</text></g></g>
      <g transform="translate(938, 262)"><rect width="60" height="68" fill="#2B54C4" stroke="#FAF9F6" stroke-width="4"/><text x="30" y="46.58" fill="#fff" font-size="39">Z</text></g>
      <g class="s12-hop s12-in-b"><text x="1042" y="308" font-size="36" fill="#2B54C4">→</text><g transform="translate(1096, 262)"><rect width="60" height="68" fill="#2B54C4" stroke="#FAF9F6" stroke-width="4"/><text x="30" y="46.58" fill="#fff" font-size="39">Y</text></g><g transform="translate(1164, 262)"><rect width="60" height="68" fill="#2B54C4" stroke="#FAF9F6" stroke-width="4"/><text x="30" y="46.58" fill="#fff" font-size="29">x</text></g></g>
      </g>
      <text class="s12-post" x="800" y="440" text-anchor="middle" font-size="48" fill="#2B54C4">↓</text>
      <text class="s12-post" x="800" y="530" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="36">⟨ x, y, z | YY<tspan fill="#2B54C4">z</tspan><tspan fill="#E05B2B">x</tspan>, <tspan fill="#2B54C4">Z</tspan>, ZXy ⟩</text>
      <text class="s12-post2" x="800" y="630" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="32" fill="#191813" fill-opacity="0.65">YYz<tspan fill="#E05B2B" fill-opacity="1">x</tspan> = 1  →  <tspan fill="#E05B2B" fill-opacity="1">x</tspan> = Zyy</text>
    </g>

    <g data-at="3" text-anchor="middle">
      <text x="800" y="88" font-family="Figtree" font-weight="600" font-size="40">substitute x · then destabilize</text>
      <g class="s12-was3">
        <text x="800" y="178" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="32">⟨ x, y, z | YYz<tspan fill="#E05B2B">x</tspan>, Z, Z<tspan fill="#E05B2B">X</tspan>y ⟩</text>
        <g class="s12-rule"><text x="800" y="240" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26"><tspan fill="#E05B2B">x</tspan> = Zyy    ·    <tspan fill="#E05B2B">X</tspan> = YYz</text></g>
      </g>
      <g class="s12-sub1">
        <text x="800" y="304" font-size="44" fill="#2B54C4">↓</text>
        <text x="800" y="376" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="32">⟨ x, y, z | YYz<tspan fill="#E05B2B">Zyy</tspan>, Z, Z<tspan fill="#E05B2B">YYz</tspan>y ⟩</text>
      </g>
      <text class="s12-sub2" x="800" y="432" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="24" fill="#191813" fill-opacity="0.55">YYz<tspan fill="#E05B2B" fill-opacity="1">Zyy</tspan>  →  1</text>
      <g class="s12-sub3">
        <text x="800" y="496" font-size="44" fill="#2B54C4">↓</text>
        <text x="800" y="572" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="36">⟨ y, z | Z, Z<tspan fill="#2B54C4">YYz</tspan>y ⟩</text>
        <text x="800" y="632" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.5">destabilize · drop x</text>
      </g>
    </g>

    <g data-at="4" text-anchor="middle">
      <text x="800" y="88" font-family="Figtree" font-weight="600" font-size="40">relabel</text>
      <text x="800" y="200" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="30" fill="#191813" fill-opacity="0.45">⟨ y, z | Z, ZYYzy ⟩</text>
      <text x="800" y="284" font-size="48" fill="#2B54C4">→</text>
      <text x="800" y="380" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="36">⟨ x, y | Y, YXXyx ⟩</text>
      <text x="800" y="468" font-family="'IBM Plex Mono', monospace" font-weight="400" font-size="26" fill="#191813" fill-opacity="0.5">y, z → x, y</text>
    </g>

    <g>
      <circle class="dot d0" cx="752" cy="708" r="7"/>
      <circle class="dot d1" cx="776" cy="708" r="7"/>
      <circle class="dot d2" cx="800" cy="708" r="7"/>
      <circle class="dot d3" cx="824" cy="708" r="7"/>
      <circle class="dot d4" cx="848" cy="708" r="7"/>
    </g>
  </svg></div>
</div>
`);
DECK.register('s12b-subset60', `
<div class="step-root" data-steps="1" data-step="0">
  <header><h1>The subset-60 benchmark</h1><div class="kicker">640 → 60 · then greedy vs best CoV</div></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" fill="#191813">

    <defs>
      <pattern id="s12b-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="10" height="10" fill="#E05B2B"/>
        <line x1="0" y1="0" x2="0" y2="10" stroke="#FAF9F6" stroke-opacity="0.55" stroke-width="3"/>
      </pattern>
    </defs>
    <g data-at="0">
      <text x="446" y="146" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.5">nodes explored</text>
      <text x="470" y="146" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.5">the 640, binned by greedy cost</text>
      <text x="1176" y="146" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#2B54C4">6 picked from each</text>
      <text x="446" y="186" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" font-weight="500" fill="#191813" fill-opacity="0.85">3–10</text>
      <rect x="470" y="170" width="560.0" height="22" fill="#191813" fill-opacity="0.16"/>
      <text x="1044.0" y="187" font-family="'IBM Plex Mono', monospace" font-size="24" font-weight="500" fill="#191813" fill-opacity="0.7">317</text>
      <rect x="1180" y="174" width="14" height="14" fill="#2B54C4"/>
      <rect x="1206" y="174" width="14" height="14" fill="#2B54C4"/>
      <rect x="1232" y="174" width="14" height="14" fill="#2B54C4"/>
      <rect x="1258" y="174" width="14" height="14" fill="#2B54C4"/>
      <rect x="1284" y="174" width="14" height="14" fill="#2B54C4"/>
      <rect x="1310" y="174" width="14" height="14" fill="#2B54C4"/>
      <text x="446" y="230" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" font-weight="500" fill="#191813" fill-opacity="0.85">10–34</text>
      <rect x="470" y="214" width="157.2" height="22" fill="#191813" fill-opacity="0.16"/>
      <text x="641.2" y="231" font-family="'IBM Plex Mono', monospace" font-size="24" font-weight="500" fill="#191813" fill-opacity="0.7">89</text>
      <rect x="1180" y="218" width="14" height="14" fill="#2B54C4"/>
      <rect x="1206" y="218" width="14" height="14" fill="#2B54C4"/>
      <rect x="1232" y="218" width="14" height="14" fill="#2B54C4"/>
      <rect x="1258" y="218" width="14" height="14" fill="#2B54C4"/>
      <rect x="1284" y="218" width="14" height="14" fill="#2B54C4"/>
      <rect x="1310" y="218" width="14" height="14" fill="#2B54C4"/>
      <text x="446" y="274" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" font-weight="500" fill="#191813" fill-opacity="0.85">34–115</text>
      <rect x="470" y="258" width="111.3" height="22" fill="#191813" fill-opacity="0.16"/>
      <text x="595.3" y="275" font-family="'IBM Plex Mono', monospace" font-size="24" font-weight="500" fill="#191813" fill-opacity="0.7">63</text>
      <rect x="1180" y="262" width="14" height="14" fill="#2B54C4"/>
      <rect x="1206" y="262" width="14" height="14" fill="#2B54C4"/>
      <rect x="1232" y="262" width="14" height="14" fill="#2B54C4"/>
      <rect x="1258" y="262" width="14" height="14" fill="#2B54C4"/>
      <rect x="1284" y="262" width="14" height="14" fill="#2B54C4"/>
      <rect x="1310" y="262" width="14" height="14" fill="#2B54C4"/>
      <text x="446" y="318" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" font-weight="500" fill="#191813" fill-opacity="0.85">115–389</text>
      <rect x="470" y="302" width="106.0" height="22" fill="#191813" fill-opacity="0.16"/>
      <text x="590.0" y="319" font-family="'IBM Plex Mono', monospace" font-size="24" font-weight="500" fill="#191813" fill-opacity="0.7">60</text>
      <rect x="1180" y="306" width="14" height="14" fill="#2B54C4"/>
      <rect x="1206" y="306" width="14" height="14" fill="#2B54C4"/>
      <rect x="1232" y="306" width="14" height="14" fill="#2B54C4"/>
      <rect x="1258" y="306" width="14" height="14" fill="#2B54C4"/>
      <rect x="1284" y="306" width="14" height="14" fill="#2B54C4"/>
      <rect x="1310" y="306" width="14" height="14" fill="#2B54C4"/>
      <text x="446" y="362" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" font-weight="500" fill="#191813" fill-opacity="0.85">389–1.3k</text>
      <rect x="470" y="346" width="54.8" height="22" fill="#191813" fill-opacity="0.16"/>
      <text x="538.8" y="363" font-family="'IBM Plex Mono', monospace" font-size="24" font-weight="500" fill="#191813" fill-opacity="0.7">31</text>
      <rect x="1180" y="350" width="14" height="14" fill="#2B54C4"/>
      <rect x="1206" y="350" width="14" height="14" fill="#2B54C4"/>
      <rect x="1232" y="350" width="14" height="14" fill="#2B54C4"/>
      <rect x="1258" y="350" width="14" height="14" fill="#2B54C4"/>
      <rect x="1284" y="350" width="14" height="14" fill="#2B54C4"/>
      <rect x="1310" y="350" width="14" height="14" fill="#2B54C4"/>
      <text x="446" y="406" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" font-weight="500" fill="#191813" fill-opacity="0.85">1.3k–4.4k</text>
      <rect x="470" y="390" width="45.9" height="22" fill="#191813" fill-opacity="0.16"/>
      <text x="529.9" y="407" font-family="'IBM Plex Mono', monospace" font-size="24" font-weight="500" fill="#191813" fill-opacity="0.7">26</text>
      <rect x="1180" y="394" width="14" height="14" fill="#2B54C4"/>
      <rect x="1206" y="394" width="14" height="14" fill="#2B54C4"/>
      <rect x="1232" y="394" width="14" height="14" fill="#2B54C4"/>
      <rect x="1258" y="394" width="14" height="14" fill="#2B54C4"/>
      <rect x="1284" y="394" width="14" height="14" fill="#2B54C4"/>
      <rect x="1310" y="394" width="14" height="14" fill="#2B54C4"/>
      <text x="446" y="450" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" font-weight="500" fill="#191813" fill-opacity="0.85">4.4k–15k</text>
      <rect x="470" y="434" width="49.5" height="22" fill="#191813" fill-opacity="0.16"/>
      <text x="533.5" y="451" font-family="'IBM Plex Mono', monospace" font-size="24" font-weight="500" fill="#191813" fill-opacity="0.7">28</text>
      <rect x="1180" y="438" width="14" height="14" fill="#2B54C4"/>
      <rect x="1206" y="438" width="14" height="14" fill="#2B54C4"/>
      <rect x="1232" y="438" width="14" height="14" fill="#2B54C4"/>
      <rect x="1258" y="438" width="14" height="14" fill="#2B54C4"/>
      <rect x="1284" y="438" width="14" height="14" fill="#2B54C4"/>
      <rect x="1310" y="438" width="14" height="14" fill="#2B54C4"/>
      <text x="446" y="494" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" font-weight="500" fill="#191813" fill-opacity="0.85">15k–50k</text>
      <rect x="470" y="478" width="24.7" height="22" fill="#191813" fill-opacity="0.16"/>
      <text x="508.7" y="495" font-family="'IBM Plex Mono', monospace" font-size="24" font-weight="500" fill="#191813" fill-opacity="0.7">14</text>
      <rect x="1180" y="482" width="14" height="14" fill="#2B54C4"/>
      <rect x="1206" y="482" width="14" height="14" fill="#2B54C4"/>
      <rect x="1232" y="482" width="14" height="14" fill="#2B54C4"/>
      <rect x="1258" y="482" width="14" height="14" fill="#2B54C4"/>
      <rect x="1284" y="482" width="14" height="14" fill="#2B54C4"/>
      <rect x="1310" y="482" width="14" height="14" fill="#2B54C4"/>
      <text x="446" y="538" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" font-weight="500" fill="#191813" fill-opacity="0.85">50k–170k</text>
      <rect x="470" y="522" width="10.6" height="22" fill="#191813" fill-opacity="0.16"/>
      <text x="494.6" y="539" font-family="'IBM Plex Mono', monospace" font-size="24" font-weight="500" fill="#191813" fill-opacity="0.7">6</text>
      <rect x="1180" y="526" width="14" height="14" fill="#2B54C4"/>
      <rect x="1206" y="526" width="14" height="14" fill="#2B54C4"/>
      <rect x="1232" y="526" width="14" height="14" fill="#2B54C4"/>
      <rect x="1258" y="526" width="14" height="14" fill="#2B54C4"/>
      <rect x="1284" y="526" width="14" height="14" fill="#2B54C4"/>
      <rect x="1310" y="526" width="14" height="14" fill="#2B54C4"/>
      <text x="446" y="582" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" font-weight="500" fill="#191813" fill-opacity="0.85">170k–575k</text>
      <rect x="470" y="566" width="10.6" height="22" fill="#191813" fill-opacity="0.16"/>
      <text x="494.6" y="583" font-family="'IBM Plex Mono', monospace" font-size="24" font-weight="500" fill="#191813" fill-opacity="0.7">6</text>
      <rect x="1180" y="570" width="14" height="14" fill="#2B54C4"/>
      <rect x="1206" y="570" width="14" height="14" fill="#2B54C4"/>
      <rect x="1232" y="570" width="14" height="14" fill="#2B54C4"/>
      <rect x="1258" y="570" width="14" height="14" fill="#2B54C4"/>
      <rect x="1284" y="570" width="14" height="14" fill="#2B54C4"/>
      <rect x="1310" y="570" width="14" height="14" fill="#2B54C4"/>
      <rect x="390" y="608" width="110" height="52" rx="14" fill="#191813" fill-opacity="0.05" stroke="#191813" stroke-opacity="0.20" stroke-width="2"/>
      <text x="445" y="641" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">640</text>
      <text x="530" y="642" text-anchor="middle" font-size="28" fill="#191813" fill-opacity="0.35">→</text>
      <rect x="560" y="608" width="210" height="52" rx="14" fill="#191813" fill-opacity="0.05" stroke="#191813" stroke-opacity="0.20" stroke-width="2"/>
      <text x="665" y="641" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">10 log bins</text>
      <text x="800" y="642" text-anchor="middle" font-size="28" fill="#191813" fill-opacity="0.35">→</text>
      <rect x="830" y="608" width="210" height="52" rx="14" fill="#191813" fill-opacity="0.05" stroke="#191813" stroke-opacity="0.20" stroke-width="2"/>
      <text x="935" y="641" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813">6 from each</text>
      <text x="1070" y="642" text-anchor="middle" font-size="28" fill="#191813" fill-opacity="0.35">→</text>
      <rect x="1100" y="608" width="110" height="52" rx="14" fill="#2B54C4" fill-opacity="0.10" stroke="#2B54C4" stroke-opacity="0.55" stroke-width="2"/>
      <text x="1155" y="641" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#2B54C4">60</text>
      <text x="800" y="688" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="21" fill="#191813" fill-opacity="0.45">bins are ×3.37 wide · the 60 cover 45 distinct Aut classes</text>
    </g>
    <g data-at="1">
      <text x="800" y="104" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="34">greedy vs best CoV · all 60 solved by both</text>
      <text x="150" y="168" font-family="Figtree" font-weight="600" font-size="32" fill="#191813">nodes explored</text>
      <text x="150" y="208" font-family="'IBM Plex Mono', monospace" font-size="23" fill="#191813" fill-opacity="0.5">mean</text>
      <text x="670" y="208" text-anchor="end" font-family="Figtree" font-weight="600" font-size="30" fill="#191813">19× fewer</text>
      <rect x="150" y="222" width="520" height="42" fill="url(#s12b-hatch)"/>
      <text x="654" y="252" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-weight="500" font-size="26" fill="#fff">45,244</text>
      <rect x="150" y="274" width="27.4" height="42" fill="#2B54C4"/>
      <text x="191.4" y="304" text-anchor="start" font-family="'IBM Plex Mono', monospace" font-weight="500" font-size="26" fill="#2B54C4">2,383</text>
      <text x="930" y="208" font-family="'IBM Plex Mono', monospace" font-size="23" fill="#191813" fill-opacity="0.5">median</text>
      <text x="1450" y="208" text-anchor="end" font-family="Figtree" font-weight="600" font-size="30" fill="#191813">38× fewer</text>
      <rect x="930" y="222" width="520" height="42" fill="url(#s12b-hatch)"/>
      <text x="1434" y="252" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-weight="500" font-size="26" fill="#fff">1,310</text>
      <rect x="930" y="274" width="13.7" height="42" fill="#2B54C4"/>
      <text x="957.7" y="304" text-anchor="start" font-family="'IBM Plex Mono', monospace" font-weight="500" font-size="26" fill="#2B54C4">34</text>
      <text x="150" y="400" font-family="Figtree" font-weight="600" font-size="32" fill="#191813">path length</text>
      <text x="150" y="440" font-family="'IBM Plex Mono', monospace" font-size="23" fill="#191813" fill-opacity="0.5">mean</text>
      <text x="670" y="440" text-anchor="end" font-family="Figtree" font-weight="600" font-size="30" fill="#191813">1.5× shorter</text>
      <rect x="150" y="454" width="520" height="42" fill="url(#s12b-hatch)"/>
      <text x="654" y="484" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-weight="500" font-size="26" fill="#fff">143</text>
      <rect x="150" y="506" width="353.7" height="42" fill="#2B54C4"/>
      <text x="487.7" y="536" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-weight="500" font-size="26" fill="#fff">97</text>
      <text x="930" y="440" font-family="'IBM Plex Mono', monospace" font-size="23" fill="#191813" fill-opacity="0.5">median</text>
      <text x="1450" y="440" text-anchor="end" font-family="Figtree" font-weight="600" font-size="30" fill="#191813">2.8× shorter</text>
      <rect x="930" y="454" width="520" height="42" fill="url(#s12b-hatch)"/>
      <text x="1434" y="484" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-weight="500" font-size="26" fill="#fff">46.5</text>
      <rect x="930" y="506" width="184.5" height="42" fill="#2B54C4"/>
      <text x="1128.5" y="536" text-anchor="start" font-family="'IBM Plex Mono', monospace" font-weight="500" font-size="26" fill="#2B54C4">16.5</text>
      <text x="150" y="612" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#E05B2B">plain greedy</text>
      <rect x="320" y="596" width="26" height="20" fill="url(#s12b-hatch)"/>
      <text x="362" y="612" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#2B54C4">best CoV</text>
      <rect x="502" y="596" width="26" height="20" fill="#2B54C4"/>
      <text x="1450" y="612" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="20" fill="#191813" fill-opacity="0.42">each panel scaled to its own greedy bar</text>
      <text x="800" y="664" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="20" fill="#191813" fill-opacity="0.42">greedy budget 1,000,000 · best CoV = cheapest of 11–173 starts, budget 20,000 · CoV path counted in the new coordinates</text>
    </g>

    <g>
      <circle class="dot d0" cx="788" cy="708" r="7"/>
      <circle class="dot d1" cx="812" cy="708" r="7"/>
    </g>
  </svg></div>
</div>
`);


DECK.register('s12c-coinflip', `
<div class="step-root" data-steps="1" data-step="0">
  <header><h1>Cost of a change of variables</h1><div class="kicker">66 presentations · 45 CoVs · budget 10,000</div></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" fill="#191813">

    <line x1="470.0" y1="96" x2="470.0" y2="616" stroke="#191813" stroke-opacity="0.07" stroke-width="1"/>
    <line x1="340" y1="486.0" x2="860" y2="486.0" stroke="#191813" stroke-opacity="0.07" stroke-width="1"/>
    <line x1="600.0" y1="96" x2="600.0" y2="616" stroke="#191813" stroke-opacity="0.07" stroke-width="1"/>
    <line x1="340" y1="356.0" x2="860" y2="356.0" stroke="#191813" stroke-opacity="0.07" stroke-width="1"/>
    <line x1="730.0" y1="96" x2="730.0" y2="616" stroke="#191813" stroke-opacity="0.07" stroke-width="1"/>
    <line x1="340" y1="226.0" x2="860" y2="226.0" stroke="#191813" stroke-opacity="0.07" stroke-width="1"/>
    <line x1="860.0" y1="96" x2="860.0" y2="616" stroke="#191813" stroke-opacity="0.07" stroke-width="1"/>
    <line x1="340" y1="96.0" x2="860" y2="96.0" stroke="#191813" stroke-opacity="0.07" stroke-width="1"/>
    <line x1="340" y1="96" x2="340" y2="616" stroke="#191813" stroke-width="1.5"/>
    <line x1="340" y1="616" x2="860" y2="616" stroke="#191813" stroke-width="1.5"/>
    <line x1="340.0" y1="616" x2="340.0" y2="624" stroke="#191813" stroke-width="1.5"/>
    <text x="340.0" y="650" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.6">1</text>
    <line x1="470.0" y1="616" x2="470.0" y2="624" stroke="#191813" stroke-width="1.5"/>
    <text x="470.0" y="650" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.6">10</text>
    <line x1="600.0" y1="616" x2="600.0" y2="624" stroke="#191813" stroke-width="1.5"/>
    <text x="600.0" y="650" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.6">100</text>
    <line x1="730.0" y1="616" x2="730.0" y2="624" stroke="#191813" stroke-width="1.5"/>
    <text x="730.0" y="650" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.6">1k</text>
    <line x1="860.0" y1="616" x2="860.0" y2="624" stroke="#191813" stroke-width="1.5"/>
    <text x="860.0" y="650" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.6">10k</text>
    <line x1="332" y1="616.0" x2="340" y2="616.0" stroke="#191813" stroke-width="1.5"/>
    <text x="322" y="623.0" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.6">1</text>
    <line x1="332" y1="486.0" x2="340" y2="486.0" stroke="#191813" stroke-width="1.5"/>
    <text x="322" y="493.0" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.6">10</text>
    <line x1="332" y1="356.0" x2="340" y2="356.0" stroke="#191813" stroke-width="1.5"/>
    <text x="322" y="363.0" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.6">100</text>
    <line x1="332" y1="226.0" x2="340" y2="226.0" stroke="#191813" stroke-width="1.5"/>
    <text x="322" y="233.0" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.6">1k</text>
    <line x1="332" y1="96.0" x2="340" y2="96.0" stroke="#191813" stroke-width="1.5"/>
    <text x="322" y="103.0" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#191813" fill-opacity="0.6">10k</text>
    <text x="600" y="694" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.6">plain greedy · nodes explored</text>
    <text x="250" y="356" text-anchor="middle" transform="rotate(-90 250 356)" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.6">after the CoV</text>

    <line x1="340" y1="616" x2="860" y2="96" stroke="#191813" stroke-width="2.2" stroke-dasharray="9 7" stroke-opacity="0.55"/>
    <text x="868" y="102" font-family="'IBM Plex Mono', monospace" font-size="21" fill="#191813" fill-opacity="0.45">y = x</text>

    <g data-at="0 1">
      <text x="372" y="140" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#E05B2B" fill-opacity="0.85">more nodes</text>
      <text x="850" y="592" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22" fill="#2B54C4" fill-opacity="0.85">fewer nodes</text>

      <g fill="#E05B2B" fill-opacity="0.42">
      <circle cx="402.0" cy="525.1" r="4"/>
      <circle cx="402.0" cy="537.7" r="4"/>
      <circle cx="418.3" cy="514.8" r="4"/>
      <circle cx="418.3" cy="525.1" r="4"/>
      <circle cx="418.3" cy="506.1" r="4"/>
      <circle cx="418.3" cy="514.8" r="4"/>
      <circle cx="418.3" cy="498.6" r="4"/>
      <circle cx="430.9" cy="506.1" r="4"/>
      <circle cx="430.9" cy="514.8" r="4"/>
      <circle cx="430.9" cy="498.6" r="4"/>
      <circle cx="430.9" cy="506.1" r="4"/>
      <circle cx="430.9" cy="491.9" r="4"/>
      <circle cx="449.9" cy="491.9" r="4"/>
      <circle cx="449.9" cy="498.6" r="4"/>
      <circle cx="449.9" cy="486.0" r="4"/>
      <circle cx="449.9" cy="491.9" r="4"/>
      <circle cx="449.9" cy="480.6" r="4"/>
      <circle cx="464.1" cy="486.0" r="4"/>
      <circle cx="464.1" cy="480.6" r="4"/>
      <circle cx="464.1" cy="480.6" r="4"/>
      <circle cx="464.1" cy="486.0" r="4"/>
      <circle cx="464.1" cy="486.0" r="4"/>
      <circle cx="464.1" cy="486.0" r="4"/>
      <circle cx="464.1" cy="486.0" r="4"/>
      <circle cx="470.0" cy="480.6" r="4"/>
      <circle cx="470.0" cy="480.6" r="4"/>
      <circle cx="470.0" cy="471.2" r="4"/>
      <circle cx="470.0" cy="475.7" r="4"/>
      <circle cx="470.0" cy="475.7" r="4"/>
      <circle cx="475.4" cy="467.0" r="4"/>
      <circle cx="475.4" cy="475.7" r="4"/>
      <circle cx="514.5" cy="424.0" r="4"/>
      <circle cx="514.5" cy="424.0" r="4"/>
      <circle cx="514.5" cy="439.0" r="4"/>
      <circle cx="514.5" cy="432.1" r="4"/>
      <circle cx="514.5" cy="303.6" r="4"/>
      <circle cx="514.5" cy="425.9" r="4"/>
      <circle cx="514.5" cy="303.6" r="4"/>
      <circle cx="514.5" cy="360.1" r="4"/>
      <circle cx="514.5" cy="429.9" r="4"/>
      <circle cx="514.5" cy="360.7" r="4"/>
      <circle cx="514.5" cy="300.3" r="4"/>
      <circle cx="480.3" cy="452.8" r="4"/>
      <circle cx="480.3" cy="471.2" r="4"/>
      <circle cx="503.2" cy="425.9" r="4"/>
      <circle cx="503.2" cy="422.1" r="4"/>
      <circle cx="503.2" cy="441.5" r="4"/>
      <circle cx="503.2" cy="422.1" r="4"/>
      <circle cx="503.2" cy="427.9" r="4"/>
      <circle cx="503.2" cy="427.9" r="4"/>
      <circle cx="503.2" cy="432.1" r="4"/>
      <circle cx="503.2" cy="441.5" r="4"/>
      <circle cx="503.2" cy="449.8" r="4"/>
      <circle cx="539.1" cy="311.5" r="4"/>
      <circle cx="539.1" cy="318.0" r="4"/>
      <circle cx="539.1" cy="337.0" r="4"/>
      <circle cx="539.1" cy="284.0" r="4"/>
      <circle cx="539.1" cy="346.2" r="4"/>
      <circle cx="539.1" cy="346.2" r="4"/>
      <circle cx="539.1" cy="313.8" r="4"/>
      <circle cx="539.1" cy="311.5" r="4"/>
      <circle cx="539.1" cy="311.5" r="4"/>
      <circle cx="539.1" cy="247.7" r="4"/>
      <circle cx="539.1" cy="318.0" r="4"/>
      <circle cx="539.1" cy="318.0" r="4"/>
      <circle cx="539.1" cy="295.9" r="4"/>
      <circle cx="556.2" cy="384.8" r="4"/>
      <circle cx="556.2" cy="355.4" r="4"/>
      <circle cx="556.2" cy="356.0" r="4"/>
      <circle cx="556.2" cy="348.6" r="4"/>
      <circle cx="556.2" cy="384.8" r="4"/>
      <circle cx="556.2" cy="354.9" r="4"/>
      <circle cx="556.2" cy="375.3" r="4"/>
      <circle cx="568.3" cy="383.0" r="4"/>
      <circle cx="568.3" cy="377.8" r="4"/>
      <circle cx="568.3" cy="386.8" r="4"/>
      <circle cx="568.3" cy="377.8" r="4"/>
      <circle cx="568.3" cy="383.0" r="4"/>
      <circle cx="568.3" cy="383.0" r="4"/>
      <circle cx="573.0" cy="266.4" r="4"/>
      <circle cx="573.0" cy="317.1" r="4"/>
      <circle cx="573.0" cy="208.9" r="4"/>
      <circle cx="573.0" cy="266.5" r="4"/>
      <circle cx="573.0" cy="371.5" r="4"/>
      <circle cx="573.0" cy="266.4" r="4"/>
      <circle cx="573.0" cy="180.6" r="4"/>
      <circle cx="573.0" cy="327.4" r="4"/>
      <circle cx="585.2" cy="326.4" r="4"/>
      <circle cx="585.2" cy="325.7" r="4"/>
      <circle cx="585.2" cy="326.0" r="4"/>
      <circle cx="585.2" cy="254.5" r="4"/>
      <circle cx="585.2" cy="254.5" r="4"/>
      <circle cx="585.2" cy="172.4" r="4"/>
      <circle cx="585.2" cy="180.3" r="4"/>
      <circle cx="585.2" cy="326.4" r="4"/>
      <circle cx="585.2" cy="316.6" r="4"/>
      <circle cx="589.5" cy="358.9" r="4"/>
      <circle cx="589.5" cy="350.6" r="4"/>
      <circle cx="589.5" cy="361.3" r="4"/>
      <circle cx="589.5" cy="350.1" r="4"/>
      <circle cx="589.5" cy="351.7" r="4"/>
      <circle cx="589.5" cy="353.8" r="4"/>
      <circle cx="589.5" cy="350.6" r="4"/>
      <circle cx="604.9" cy="309.7" r="4"/>
      <circle cx="604.9" cy="346.7" r="4"/>
      <circle cx="604.9" cy="270.5" r="4"/>
      <circle cx="604.9" cy="295.1" r="4"/>
      <circle cx="604.9" cy="295.3" r="4"/>
      <circle cx="604.9" cy="264.2" r="4"/>
      <circle cx="604.9" cy="231.4" r="4"/>
      <circle cx="604.9" cy="264.2" r="4"/>
      <circle cx="604.9" cy="264.2" r="4"/>
      <circle cx="604.9" cy="205.3" r="4"/>
      <circle cx="604.9" cy="310.0" r="4"/>
      <circle cx="604.9" cy="347.1" r="4"/>
      <circle cx="604.9" cy="347.1" r="4"/>
      <circle cx="604.9" cy="220.2" r="4"/>
      <circle cx="604.9" cy="270.6" r="4"/>
      <circle cx="604.9" cy="204.4" r="4"/>
      <circle cx="608.4" cy="347.1" r="4"/>
      <circle cx="610.8" cy="344.3" r="4"/>
      <circle cx="610.8" cy="341.6" r="4"/>
      <circle cx="610.8" cy="343.0" r="4"/>
      <circle cx="610.8" cy="344.3" r="4"/>
      <circle cx="656.7" cy="288.4" r="4"/>
      <circle cx="656.7" cy="290.3" r="4"/>
      <circle cx="656.7" cy="283.8" r="4"/>
      <circle cx="656.7" cy="283.8" r="4"/>
      <circle cx="656.7" cy="288.4" r="4"/>
      <circle cx="656.7" cy="282.1" r="4"/>
      <circle cx="668.1" cy="282.0" r="4"/>
      <circle cx="668.1" cy="282.6" r="4"/>
      <circle cx="668.1" cy="282.0" r="4"/>
      <circle cx="668.1" cy="282.1" r="4"/>
      <circle cx="668.1" cy="283.8" r="4"/>
      <circle cx="668.1" cy="281.7" r="4"/>
      <circle cx="647.0" cy="294.5" r="4"/>
      <circle cx="647.0" cy="224.1" r="4"/>
      <circle cx="647.0" cy="295.3" r="4"/>
      <circle cx="647.0" cy="264.8" r="4"/>
      <circle cx="647.0" cy="264.7" r="4"/>
      <circle cx="647.0" cy="294.9" r="4"/>
      <circle cx="647.0" cy="236.2" r="4"/>
      <circle cx="647.0" cy="213.5" r="4"/>
      <circle cx="647.0" cy="270.2" r="4"/>
      <circle cx="647.0" cy="224.1" r="4"/>
      <circle cx="647.0" cy="213.2" r="4"/>
      <circle cx="703.8" cy="178.4" r="4"/>
      <circle cx="703.8" cy="180.3" r="4"/>
      <circle cx="703.8" cy="150.1" r="4"/>
      <circle cx="703.8" cy="172.4" r="4"/>
      <circle cx="703.8" cy="172.4" r="4"/>
      <circle cx="703.8" cy="149.4" r="4"/>
      <circle cx="693.7" cy="260.8" r="4"/>
      <circle cx="693.7" cy="260.9" r="4"/>
      <circle cx="689.7" cy="265.1" r="4"/>
      <circle cx="689.7" cy="264.8" r="4"/>
      <circle cx="689.7" cy="204.2" r="4"/>
      <circle cx="689.7" cy="205.1" r="4"/>
      <circle cx="689.7" cy="264.6" r="4"/>
      <circle cx="689.7" cy="190.3" r="4"/>
      <circle cx="689.7" cy="236.2" r="4"/>
      <circle cx="724.9" cy="211.0" r="4"/>
      <circle cx="724.9" cy="219.9" r="4"/>
      <circle cx="724.9" cy="209.9" r="4"/>
      <circle cx="724.9" cy="210.3" r="4"/>
      <circle cx="724.9" cy="209.4" r="4"/>
      <circle cx="702.5" cy="212.3" r="4"/>
      <circle cx="702.5" cy="205.5" r="4"/>
      <circle cx="702.5" cy="188.0" r="4"/>
      <circle cx="702.5" cy="187.9" r="4"/>
      <circle cx="702.5" cy="206.2" r="4"/>
      <circle cx="702.5" cy="206.2" r="4"/>
      <circle cx="702.5" cy="113.7" r="4"/>
      <circle cx="702.5" cy="212.4" r="4"/>
      <circle cx="702.5" cy="205.6" r="4"/>
      <circle cx="702.5" cy="103.0" r="4"/>
      <circle cx="776.1" cy="149.8" r="4"/>
      <circle cx="776.1" cy="149.2" r="4"/>
      <circle cx="776.1" cy="150.1" r="4"/>
      <circle cx="776.1" cy="149.2" r="4"/>
      <circle cx="776.1" cy="149.9" r="4"/>
      <circle cx="776.1" cy="149.8" r="4"/>
      <circle cx="776.1" cy="149.9" r="4"/>
      <circle cx="776.1" cy="140.8" r="4"/>
      <circle cx="801.3" cy="118.6" r="4"/>
      <circle cx="801.3" cy="118.1" r="4"/>
      <circle cx="801.3" cy="118.1" r="4"/>
      <circle cx="801.3" cy="145.5" r="4"/>
      <circle cx="801.3" cy="124.0" r="4"/>
      <circle cx="801.3" cy="118.1" r="4"/>
      <circle cx="801.3" cy="118.1" r="4"/>
      <circle cx="760.2" cy="190.2" r="4"/>
      <circle cx="760.2" cy="190.4" r="4"/>
      <circle cx="760.2" cy="190.2" r="4"/>
      <circle cx="760.2" cy="190.1" r="4"/>
      <circle cx="760.2" cy="190.1" r="4"/>
      <circle cx="760.2" cy="190.3" r="4"/>
      <circle cx="760.2" cy="190.0" r="4"/>
      <circle cx="760.2" cy="190.3" r="4"/>
      <circle cx="760.2" cy="190.3" r="4"/>
      <circle cx="763.6" cy="190.4" r="4"/>
      <circle cx="763.6" cy="190.2" r="4"/>
      <circle cx="763.6" cy="190.4" r="4"/>
      <circle cx="763.6" cy="190.4" r="4"/>
      <circle cx="763.6" cy="190.4" r="4"/>
      <circle cx="763.6" cy="190.1" r="4"/>
      <circle cx="750.7" cy="103.2" r="4"/>
      <circle cx="750.7" cy="204.7" r="4"/>
      <circle cx="750.7" cy="187.9" r="4"/>
      <circle cx="750.7" cy="187.9" r="4"/>
      <circle cx="750.7" cy="113.7" r="4"/>
      <circle cx="750.7" cy="100.6" r="4"/>
      <circle cx="750.7" cy="103.0" r="4"/>
      <circle cx="750.7" cy="99.2" r="4"/>
      <circle cx="798.3" cy="157.6" r="4"/>
      <circle cx="798.3" cy="99.1" r="4"/>
      <circle cx="798.3" cy="126.7" r="4"/>
      <circle cx="798.3" cy="126.8" r="4"/>
      <circle cx="798.3" cy="134.2" r="4"/>
      <circle cx="798.3" cy="134.2" r="4"/>
      <circle cx="798.3" cy="157.6" r="4"/>
      <circle cx="798.3" cy="157.6" r="4"/>
      <circle cx="798.3" cy="99.1" r="4"/>
      <circle cx="838.2" cy="116.6" r="4"/>
      <circle cx="838.2" cy="116.6" r="4"/>
      <circle cx="838.2" cy="116.6" r="4"/>
      <circle cx="835.0" cy="102.0" r="4"/>
      <circle cx="835.0" cy="105.4" r="4"/>
      <circle cx="835.0" cy="102.0" r="4"/>
      <circle cx="835.0" cy="105.1" r="4"/>
      <circle cx="835.0" cy="105.1" r="4"/>
      <circle cx="828.8" cy="126.8" r="4"/>
      <circle cx="828.8" cy="99.1" r="4"/>
      <circle cx="828.8" cy="126.6" r="4"/>
      </g>
      <g fill="#2B54C4" fill-opacity="0.42">
      <circle cx="418.3" cy="554.0" r="4"/>
      <circle cx="418.3" cy="554.0" r="4"/>
      <circle cx="418.3" cy="554.0" r="4"/>
      <circle cx="418.3" cy="554.0" r="4"/>
      <circle cx="418.3" cy="554.0" r="4"/>
      <circle cx="430.9" cy="537.7" r="4"/>
      <circle cx="430.9" cy="537.7" r="4"/>
      <circle cx="430.9" cy="554.0" r="4"/>
      <circle cx="430.9" cy="554.0" r="4"/>
      <circle cx="430.9" cy="554.0" r="4"/>
      <circle cx="449.9" cy="514.8" r="4"/>
      <circle cx="449.9" cy="514.8" r="4"/>
      <circle cx="449.9" cy="525.1" r="4"/>
      <circle cx="449.9" cy="525.1" r="4"/>
      <circle cx="449.9" cy="537.7" r="4"/>
      <circle cx="464.1" cy="506.1" r="4"/>
      <circle cx="464.1" cy="525.1" r="4"/>
      <circle cx="464.1" cy="514.8" r="4"/>
      <circle cx="464.1" cy="537.7" r="4"/>
      <circle cx="464.1" cy="498.6" r="4"/>
      <circle cx="464.1" cy="514.8" r="4"/>
      <circle cx="464.1" cy="514.8" r="4"/>
      <circle cx="470.0" cy="498.6" r="4"/>
      <circle cx="470.0" cy="498.6" r="4"/>
      <circle cx="470.0" cy="525.1" r="4"/>
      <circle cx="470.0" cy="491.9" r="4"/>
      <circle cx="470.0" cy="506.1" r="4"/>
      <circle cx="470.0" cy="514.8" r="4"/>
      <circle cx="470.0" cy="498.6" r="4"/>
      <circle cx="470.0" cy="525.1" r="4"/>
      <circle cx="475.4" cy="506.1" r="4"/>
      <circle cx="475.4" cy="486.0" r="4"/>
      <circle cx="475.4" cy="491.9" r="4"/>
      <circle cx="475.4" cy="491.9" r="4"/>
      <circle cx="514.5" cy="491.9" r="4"/>
      <circle cx="514.5" cy="491.9" r="4"/>
      <circle cx="514.5" cy="480.6" r="4"/>
      <circle cx="514.5" cy="480.6" r="4"/>
      <circle cx="480.3" cy="486.0" r="4"/>
      <circle cx="480.3" cy="498.6" r="4"/>
      <circle cx="480.3" cy="486.0" r="4"/>
      <circle cx="503.2" cy="491.9" r="4"/>
      <circle cx="503.2" cy="475.7" r="4"/>
      <circle cx="503.2" cy="491.9" r="4"/>
      <circle cx="503.2" cy="463.1" r="4"/>
      <circle cx="503.2" cy="498.6" r="4"/>
      <circle cx="503.2" cy="506.1" r="4"/>
      <circle cx="503.2" cy="475.7" r="4"/>
      <circle cx="503.2" cy="498.6" r="4"/>
      <circle cx="503.2" cy="498.6" r="4"/>
      <circle cx="539.1" cy="420.3" r="4"/>
      <circle cx="539.1" cy="420.3" r="4"/>
      <circle cx="556.2" cy="480.6" r="4"/>
      <circle cx="556.2" cy="418.6" r="4"/>
      <circle cx="556.2" cy="486.0" r="4"/>
      <circle cx="556.2" cy="475.7" r="4"/>
      <circle cx="556.2" cy="467.0" r="4"/>
      <circle cx="568.3" cy="441.5" r="4"/>
      <circle cx="568.3" cy="390.8" r="4"/>
      <circle cx="568.3" cy="429.9" r="4"/>
      <circle cx="568.3" cy="491.9" r="4"/>
      <circle cx="568.3" cy="486.0" r="4"/>
      <circle cx="568.3" cy="439.0" r="4"/>
      <circle cx="568.3" cy="392.9" r="4"/>
      <circle cx="568.3" cy="395.1" r="4"/>
      <circle cx="573.0" cy="388.7" r="4"/>
      <circle cx="573.0" cy="471.2" r="4"/>
      <circle cx="573.0" cy="471.2" r="4"/>
      <circle cx="573.0" cy="459.5" r="4"/>
      <circle cx="573.0" cy="388.7" r="4"/>
      <circle cx="573.0" cy="459.5" r="4"/>
      <circle cx="573.0" cy="471.2" r="4"/>
      <circle cx="585.2" cy="467.0" r="4"/>
      <circle cx="585.2" cy="459.5" r="4"/>
      <circle cx="585.2" cy="371.5" r="4"/>
      <circle cx="585.2" cy="471.2" r="4"/>
      <circle cx="585.2" cy="384.8" r="4"/>
      <circle cx="585.2" cy="471.2" r="4"/>
      <circle cx="585.2" cy="459.5" r="4"/>
      <circle cx="589.5" cy="391.8" r="4"/>
      <circle cx="589.5" cy="369.3" r="4"/>
      <circle cx="589.5" cy="383.9" r="4"/>
      <circle cx="589.5" cy="412.1" r="4"/>
      <circle cx="589.5" cy="409.2" r="4"/>
      <circle cx="589.5" cy="369.3" r="4"/>
      <circle cx="589.5" cy="432.1" r="4"/>
      <circle cx="589.5" cy="434.3" r="4"/>
      <circle cx="608.4" cy="386.8" r="4"/>
      <circle cx="608.4" cy="350.6" r="4"/>
      <circle cx="608.4" cy="348.6" r="4"/>
      <circle cx="608.4" cy="356.0" r="4"/>
      <circle cx="608.4" cy="418.6" r="4"/>
      <circle cx="608.4" cy="420.3" r="4"/>
      <circle cx="608.4" cy="418.6" r="4"/>
      <circle cx="608.4" cy="349.1" r="4"/>
      <circle cx="608.4" cy="398.6" r="4"/>
      <circle cx="608.4" cy="352.7" r="4"/>
      <circle cx="608.4" cy="384.8" r="4"/>
      <circle cx="608.4" cy="384.8" r="4"/>
      <circle cx="608.4" cy="349.1" r="4"/>
      <circle cx="608.4" cy="384.8" r="4"/>
      <circle cx="610.8" cy="357.7" r="4"/>
      <circle cx="610.8" cy="348.6" r="4"/>
      <circle cx="610.8" cy="355.4" r="4"/>
      <circle cx="610.8" cy="349.1" r="4"/>
      <circle cx="610.8" cy="363.2" r="4"/>
      <circle cx="610.8" cy="383.0" r="4"/>
      <circle cx="610.8" cy="347.1" r="4"/>
      <circle cx="610.8" cy="361.3" r="4"/>
      <circle cx="610.8" cy="349.1" r="4"/>
      <circle cx="610.8" cy="349.6" r="4"/>
      <circle cx="610.8" cy="376.9" r="4"/>
      <circle cx="610.8" cy="349.6" r="4"/>
      <circle cx="673.3" cy="373.0" r="4"/>
      <circle cx="673.3" cy="329.5" r="4"/>
      <circle cx="673.3" cy="332.7" r="4"/>
      <circle cx="673.3" cy="358.3" r="4"/>
      <circle cx="673.3" cy="297.5" r="4"/>
      <circle cx="673.3" cy="373.8" r="4"/>
      <circle cx="673.3" cy="305.9" r="4"/>
      <circle cx="673.3" cy="305.4" r="4"/>
      <circle cx="673.3" cy="373.8" r="4"/>
      <circle cx="673.3" cy="329.5" r="4"/>
      <circle cx="673.3" cy="305.4" r="4"/>
      <circle cx="673.3" cy="436.6" r="4"/>
      <circle cx="673.3" cy="480.6" r="4"/>
      <circle cx="673.3" cy="332.7" r="4"/>
      <circle cx="673.3" cy="298.3" r="4"/>
      <circle cx="656.7" cy="319.5" r="4"/>
      <circle cx="656.7" cy="343.4" r="4"/>
      <circle cx="656.7" cy="358.9" r="4"/>
      <circle cx="656.7" cy="325.7" r="4"/>
      <circle cx="656.7" cy="357.7" r="4"/>
      <circle cx="656.7" cy="299.9" r="4"/>
      <circle cx="656.7" cy="325.7" r="4"/>
      <circle cx="656.7" cy="343.4" r="4"/>
      <circle cx="656.7" cy="434.3" r="4"/>
      <circle cx="668.1" cy="290.2" r="4"/>
      <circle cx="668.1" cy="293.6" r="4"/>
      <circle cx="668.1" cy="358.9" r="4"/>
      <circle cx="668.1" cy="290.2" r="4"/>
      <circle cx="668.1" cy="325.1" r="4"/>
      <circle cx="668.1" cy="325.7" r="4"/>
      <circle cx="668.1" cy="325.7" r="4"/>
      <circle cx="668.1" cy="299.9" r="4"/>
      <circle cx="668.1" cy="343.4" r="4"/>
      <circle cx="647.0" cy="309.5" r="4"/>
      <circle cx="647.0" cy="342.1" r="4"/>
      <circle cx="647.0" cy="309.7" r="4"/>
      <circle cx="647.0" cy="350.1" r="4"/>
      <circle cx="647.0" cy="342.1" r="4"/>
      <circle cx="647.0" cy="309.7" r="4"/>
      <circle cx="703.8" cy="254.6" r="4"/>
      <circle cx="703.8" cy="370.8" r="4"/>
      <circle cx="703.8" cy="371.5" r="4"/>
      <circle cx="703.8" cy="326.4" r="4"/>
      <circle cx="703.8" cy="471.2" r="4"/>
      <circle cx="703.8" cy="254.7" r="4"/>
      <circle cx="703.8" cy="326.4" r="4"/>
      <circle cx="703.8" cy="370.8" r="4"/>
      <circle cx="703.8" cy="459.5" r="4"/>
      <circle cx="693.7" cy="319.5" r="4"/>
      <circle cx="693.7" cy="280.9" r="4"/>
      <circle cx="693.7" cy="319.8" r="4"/>
      <circle cx="693.7" cy="463.1" r="4"/>
      <circle cx="693.7" cy="392.9" r="4"/>
      <circle cx="693.7" cy="315.5" r="4"/>
      <circle cx="693.7" cy="270.6" r="4"/>
      <circle cx="693.7" cy="321.3" r="4"/>
      <circle cx="693.7" cy="335.0" r="4"/>
      <circle cx="693.7" cy="320.7" r="4"/>
      <circle cx="693.7" cy="391.8" r="4"/>
      <circle cx="693.7" cy="463.1" r="4"/>
      <circle cx="693.7" cy="280.9" r="4"/>
      <circle cx="693.7" cy="391.8" r="4"/>
      <circle cx="693.7" cy="315.5" r="4"/>
      <circle cx="697.1" cy="280.2" r="4"/>
      <circle cx="697.1" cy="320.4" r="4"/>
      <circle cx="697.1" cy="320.1" r="4"/>
      <circle cx="697.1" cy="276.2" r="4"/>
      <circle cx="697.1" cy="463.1" r="4"/>
      <circle cx="697.1" cy="321.0" r="4"/>
      <circle cx="697.1" cy="316.3" r="4"/>
      <circle cx="697.1" cy="320.4" r="4"/>
      <circle cx="697.1" cy="395.1" r="4"/>
      <circle cx="697.1" cy="280.3" r="4"/>
      <circle cx="697.1" cy="259.3" r="4"/>
      <circle cx="697.1" cy="392.9" r="4"/>
      <circle cx="697.1" cy="315.2" r="4"/>
      <circle cx="697.1" cy="322.2" r="4"/>
      <circle cx="697.1" cy="334.6" r="4"/>
      <circle cx="697.1" cy="322.2" r="4"/>
      <circle cx="697.1" cy="463.1" r="4"/>
      <circle cx="689.7" cy="349.6" r="4"/>
      <circle cx="689.7" cy="294.9" r="4"/>
      <circle cx="689.7" cy="270.2" r="4"/>
      <circle cx="689.7" cy="294.9" r="4"/>
      <circle cx="689.7" cy="350.1" r="4"/>
      <circle cx="689.7" cy="309.7" r="4"/>
      <circle cx="689.7" cy="350.1" r="4"/>
      <circle cx="689.7" cy="270.2" r="4"/>
      <circle cx="689.7" cy="342.1" r="4"/>
      <circle cx="689.7" cy="294.9" r="4"/>
      <circle cx="724.9" cy="311.5" r="4"/>
      <circle cx="724.9" cy="295.3" r="4"/>
      <circle cx="724.9" cy="264.2" r="4"/>
      <circle cx="724.9" cy="295.3" r="4"/>
      <circle cx="724.9" cy="311.5" r="4"/>
      <circle cx="724.9" cy="347.1" r="4"/>
      <circle cx="724.9" cy="345.2" r="4"/>
      <circle cx="724.9" cy="294.7" r="4"/>
      <circle cx="724.9" cy="345.2" r="4"/>
      <circle cx="724.9" cy="347.1" r="4"/>
      <circle cx="724.9" cy="264.2" r="4"/>
      <circle cx="702.5" cy="253.7" r="4"/>
      <circle cx="702.5" cy="253.8" r="4"/>
      <circle cx="702.5" cy="253.8" r="4"/>
      <circle cx="776.1" cy="253.1" r="4"/>
      <circle cx="776.1" cy="180.2" r="4"/>
      <circle cx="776.1" cy="253.2" r="4"/>
      <circle cx="776.1" cy="254.1" r="4"/>
      <circle cx="776.1" cy="373.8" r="4"/>
      <circle cx="776.1" cy="371.5" r="4"/>
      <circle cx="776.1" cy="326.7" r="4"/>
      <circle cx="776.1" cy="180.2" r="4"/>
      <circle cx="776.1" cy="471.2" r="4"/>
      <circle cx="776.1" cy="327.4" r="4"/>
      <circle cx="801.3" cy="158.2" r="4"/>
      <circle cx="801.3" cy="158.3" r="4"/>
      <circle cx="760.2" cy="204.3" r="4"/>
      <circle cx="760.2" cy="265.2" r="4"/>
      <circle cx="760.2" cy="341.6" r="4"/>
      <circle cx="760.2" cy="205.1" r="4"/>
      <circle cx="760.2" cy="262.3" r="4"/>
      <circle cx="760.2" cy="197.4" r="4"/>
      <circle cx="760.2" cy="270.3" r="4"/>
      <circle cx="760.2" cy="349.6" r="4"/>
      <circle cx="763.6" cy="265.8" r="4"/>
      <circle cx="763.6" cy="194.2" r="4"/>
      <circle cx="763.6" cy="205.3" r="4"/>
      <circle cx="763.6" cy="346.7" r="4"/>
      <circle cx="763.6" cy="263.1" r="4"/>
      <circle cx="763.6" cy="270.8" r="4"/>
      <circle cx="763.6" cy="197.5" r="4"/>
      <circle cx="763.6" cy="262.8" r="4"/>
      <circle cx="763.6" cy="344.8" r="4"/>
      <circle cx="750.7" cy="207.4" r="4"/>
      <circle cx="750.7" cy="205.5" r="4"/>
      <circle cx="750.7" cy="206.2" r="4"/>
      <circle cx="750.7" cy="252.0" r="4"/>
      <circle cx="750.7" cy="205.6" r="4"/>
      <circle cx="750.7" cy="253.8" r="4"/>
      <circle cx="750.7" cy="212.4" r="4"/>
      <circle cx="750.7" cy="252.0" r="4"/>
      <circle cx="750.7" cy="205.6" r="4"/>
      <circle cx="838.2" cy="145.0" r="4"/>
      <circle cx="838.2" cy="123.5" r="4"/>
      <circle cx="838.2" cy="157.6" r="4"/>
      <circle cx="838.2" cy="157.7" r="4"/>
      <circle cx="838.2" cy="123.5" r="4"/>
      <circle cx="835.0" cy="131.1" r="4"/>
      <circle cx="835.0" cy="279.9" r="4"/>
      <circle cx="835.0" cy="160.5" r="4"/>
      <circle cx="835.0" cy="351.7" r="4"/>
      <circle cx="835.0" cy="153.9" r="4"/>
      <circle cx="835.0" cy="244.1" r="4"/>
      <circle cx="835.0" cy="153.9" r="4"/>
      <circle cx="835.0" cy="343.0" r="4"/>
      <circle cx="835.0" cy="131.1" r="4"/>
      <circle cx="835.0" cy="153.9" r="4"/>
      <circle cx="835.0" cy="280.0" r="4"/>
      <circle cx="835.0" cy="351.1" r="4"/>
      <circle cx="844.6" cy="267.4" r="4"/>
      <circle cx="844.6" cy="127.7" r="4"/>
      <circle cx="844.6" cy="219.2" r="4"/>
      <circle cx="844.6" cy="342.1" r="4"/>
      <circle cx="844.6" cy="340.8" r="4"/>
      <circle cx="844.6" cy="119.2" r="4"/>
      <circle cx="844.6" cy="267.4" r="4"/>
      <circle cx="844.6" cy="127.7" r="4"/>
      <circle cx="844.6" cy="410.6" r="4"/>
      <circle cx="828.8" cy="157.6" r="4"/>
      <circle cx="828.8" cy="134.8" r="4"/>
      <circle cx="828.8" cy="134.2" r="4"/>
      <circle cx="828.8" cy="157.6" r="4"/>
      <circle cx="828.8" cy="157.6" r="4"/>
      <circle cx="828.8" cy="157.2" r="4"/>
      <circle cx="828.8" cy="134.2" r="4"/>
      </g>
      <g fill="#191813" fill-opacity="0.35">
      <circle cx="402.0" cy="554.0" r="4"/>
      <circle cx="402.0" cy="554.0" r="4"/>
      <circle cx="402.0" cy="554.0" r="4"/>
      <circle cx="402.0" cy="554.0" r="4"/>
      <circle cx="418.3" cy="537.7" r="4"/>
      <circle cx="418.3" cy="537.7" r="4"/>
      <circle cx="430.9" cy="525.1" r="4"/>
      <circle cx="430.9" cy="525.1" r="4"/>
      <circle cx="449.9" cy="506.1" r="4"/>
      <circle cx="449.9" cy="506.1" r="4"/>
      <circle cx="464.1" cy="491.9" r="4"/>
      <circle cx="464.1" cy="491.9" r="4"/>
      <circle cx="470.0" cy="486.0" r="4"/>
      <circle cx="470.0" cy="486.0" r="4"/>
      <circle cx="514.5" cy="441.5" r="4"/>
      <circle cx="514.5" cy="441.5" r="4"/>
      <circle cx="480.3" cy="475.7" r="4"/>
      <circle cx="503.2" cy="452.8" r="4"/>
      <circle cx="503.2" cy="452.8" r="4"/>
      <circle cx="556.2" cy="399.8" r="4"/>
      <circle cx="568.3" cy="387.7" r="4"/>
      <circle cx="585.2" cy="370.8" r="4"/>
      <circle cx="724.9" cy="231.1" r="4"/>
      </g>

      <text x="960" y="160" font-family="Figtree" font-weight="600" font-size="34" fill="#191813">each dot is one CoV</text>
      <text x="960" y="202" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.45">546 CoVs that solved</text>

      <text x="960" y="272" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="38" fill="#2B54C4">288</text>
      <text x="1060" y="272" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#2B54C4">fewer nodes</text>
      <text x="960" y="330" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="38" fill="#E05B2B">235</text>
      <text x="1060" y="330" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#E05B2B">more nodes</text>
      <text x="960" y="382" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#191813" fill-opacity="0.45">23</text>
      <text x="1060" y="382" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#191813" fill-opacity="0.45">no change</text>
    </g>

    <g data-at="1">
      <g fill="#191813" stroke="#FAF9F6" stroke-width="1.6">
      <path d="M402.0 546.5 L409.5 554.0 L402.0 561.5 L394.5 554.0 Z"/>
      <path d="M418.3 546.5 L425.8 554.0 L418.3 561.5 L410.8 554.0 Z"/>
      <path d="M430.9 546.5 L438.4 554.0 L430.9 561.5 L423.4 554.0 Z"/>
      <path d="M449.9 530.2 L457.4 537.7 L449.9 545.2 L442.4 537.7 Z"/>
      <path d="M464.1 530.2 L471.6 537.7 L464.1 545.2 L456.6 537.7 Z"/>
      <path d="M470.0 517.6 L477.5 525.1 L470.0 532.6 L462.5 525.1 Z"/>
      <path d="M475.4 498.6 L482.9 506.1 L475.4 513.6 L467.9 506.1 Z"/>
      <path d="M514.5 484.4 L522.0 491.9 L514.5 499.4 L507.0 491.9 Z"/>
      <path d="M480.3 491.1 L487.8 498.6 L480.3 506.1 L472.8 498.6 Z"/>
      <path d="M503.2 484.4 L510.7 491.9 L503.2 499.4 L495.7 491.9 Z"/>
      <path d="M503.2 498.6 L510.7 506.1 L503.2 513.6 L495.7 506.1 Z"/>
      <path d="M539.1 412.8 L546.6 420.3 L539.1 427.8 L531.6 420.3 Z"/>
      <path d="M556.2 478.5 L563.7 486.0 L556.2 493.5 L548.7 486.0 Z"/>
      <path d="M568.3 484.4 L575.8 491.9 L568.3 499.4 L560.8 491.9 Z"/>
      <path d="M573.0 463.7 L580.5 471.2 L573.0 478.7 L565.5 471.2 Z"/>
      <path d="M585.2 463.7 L592.7 471.2 L585.2 478.7 L577.7 471.2 Z"/>
      <path d="M589.5 426.8 L597.0 434.3 L589.5 441.8 L582.0 434.3 Z"/>
      <path d="M604.9 339.6 L612.4 347.1 L604.9 354.6 L597.4 347.1 Z"/>
      <path d="M608.4 412.8 L615.9 420.3 L608.4 427.8 L600.9 420.3 Z"/>
      <path d="M610.8 375.5 L618.3 383.0 L610.8 390.5 L603.3 383.0 Z"/>
      <path d="M673.3 473.1 L680.8 480.6 L673.3 488.1 L665.8 480.6 Z"/>
      <path d="M656.7 426.8 L664.2 434.3 L656.7 441.8 L649.2 434.3 Z"/>
      <path d="M668.1 351.4 L675.6 358.9 L668.1 366.4 L660.6 358.9 Z"/>
      <path d="M647.0 342.6 L654.5 350.1 L647.0 357.6 L639.5 350.1 Z"/>
      <path d="M703.8 463.7 L711.3 471.2 L703.8 478.7 L696.3 471.2 Z"/>
      <path d="M693.7 455.6 L701.2 463.1 L693.7 470.6 L686.2 463.1 Z"/>
      <path d="M697.1 455.6 L704.6 463.1 L697.1 470.6 L689.6 463.1 Z"/>
      <path d="M689.7 342.6 L697.2 350.1 L689.7 357.6 L682.2 350.1 Z"/>
      <path d="M724.9 339.6 L732.4 347.1 L724.9 354.6 L717.4 347.1 Z"/>
      <path d="M702.5 246.3 L710.0 253.8 L702.5 261.3 L695.0 253.8 Z"/>
      <path d="M776.1 463.7 L783.6 471.2 L776.1 478.7 L768.6 471.2 Z"/>
      <path d="M801.3 150.8 L808.8 158.3 L801.3 165.8 L793.8 158.3 Z"/>
      <path d="M760.2 342.1 L767.7 349.6 L760.2 357.1 L752.7 349.6 Z"/>
      <path d="M763.6 339.2 L771.1 346.7 L763.6 354.2 L756.1 346.7 Z"/>
      <path d="M750.7 246.3 L758.2 253.8 L750.7 261.3 L743.2 253.8 Z"/>
      <path d="M798.3 150.1 L805.8 157.6 L798.3 165.1 L790.8 157.6 Z"/>
      <path d="M838.2 150.2 L845.7 157.7 L838.2 165.2 L830.7 157.7 Z"/>
      <path d="M835.0 344.2 L842.5 351.7 L835.0 359.2 L827.5 351.7 Z"/>
      <path d="M844.6 403.1 L852.1 410.6 L844.6 418.1 L837.1 410.6 Z"/>
      <path d="M828.8 150.1 L836.3 157.6 L828.8 165.1 L821.3 157.6 Z"/>
      </g>
      <line x1="960" y1="426" x2="1520" y2="426" stroke="#191813" stroke-opacity="0.14" stroke-width="1"/>
      <path d="M974 462 L985 473 L974 484 L963 473 Z" fill="#191813" stroke="#FAF9F6" stroke-width="1.6"/>
      <text x="1006" y="483" font-family="Figtree" font-weight="600" font-size="32" fill="#191813">best CoV per presentation</text>
      <text x="960" y="540" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#191813">beats greedy on 37 of 40</text>
      <text x="960" y="584" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#191813" fill-opacity="0.5">on 3, no CoV beat greedy</text>
      <text x="960" y="668" font-family="Figtree" font-weight="600" font-size="40" fill="#2B54C4">so the choice matters</text>
    </g>

    <g>
      <circle class="dot d0" cx="1240" cy="734" r="7"/>
      <circle class="dot d1" cx="1264" cy="734" r="7"/>
    </g>
  </svg></div>
</div>
`);

DECK.register('s13-mass', `
<div class="step-root" data-steps="2" data-step="0">
  <header><h1>Abelian mass heuristic</h1><div class="kicker">all 640 Miller–Schupp · budget 100,000</div></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree">

    <text x="70" y="88" font-family="IBM Plex Mono, monospace" font-size="32" fill="#191813">mass = |Σx r₁| + |Σy r₁| + |Σx r₂| + |Σy r₂|</text>
    <text x="1180" y="88" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.40">one pass · no search</text>
    <line x1="70" y1="112" x2="1530" y2="112" stroke="#191813" stroke-opacity="0.12" stroke-width="1"/>
    <line x1="812" y1="160" x2="812" y2="700" stroke="#191813" stroke-opacity="0.10" stroke-width="1"/>

    <g data-at="0 1 2">
      <text x="70" y="196" font-family="IBM Plex Mono, monospace" font-size="30" fill="#191813" fill-opacity="0.5">example</text>
      <text x="70" y="264" font-family="IBM Plex Mono, monospace" font-size="42" fill="#191813">⟨ x, y | YYXyx, Yx ⟩</text>
      <text x="70" y="348" font-family="IBM Plex Mono, monospace" font-size="30" fill="#191813">r₁ · Σx = 0, Σy = −1</text>
      <text x="70" y="398" font-family="IBM Plex Mono, monospace" font-size="30" fill="#191813">r₂ · Σx = +1, Σy = −1</text>
      <text x="70" y="486" font-family="IBM Plex Mono, monospace" font-size="38" fill="#191813">mass = 0 + 1 + 1 + 1 = <tspan fill="#2B54C4">3</tspan></text>
      <text x="70" y="536" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813" fill-opacity="0.45">trivial pair = 2</text>
    </g>

    <g data-at="1 2">
      <line x1="70" y1="586" x2="740" y2="586" stroke="#191813" stroke-opacity="0.12" stroke-width="1"/>
      <text x="70" y="646" font-family="IBM Plex Mono, monospace" font-size="32" fill="#2B54C4">mass  →  length  →  S</text>
      <text x="70" y="690" font-family="IBM Plex Mono, monospace" font-size="22" fill="#191813" fill-opacity="0.45">tied at rank 1:  51 → 3 → 1</text>
    </g>

    <g data-at="2">
      <text x="880" y="238" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">plain greedy · 3,176,297 nodes · 634/640 at 100k</text>
      <rect x="880" y="256" width="620" height="54" fill="#191813" fill-opacity="0.40"/>
      <text x="880" y="352" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.40">(640 needs 1M)</text>
      <text x="880" y="452" font-family="IBM Plex Mono, monospace" font-size="24" fill="#2B54C4">mass-ranked CoV, rank 1 · 420,426 nodes · 640/640</text>
      <rect x="880" y="470" width="82" height="54" fill="#2B54C4"/>
      <text x="984" y="514" font-family="Figtree" font-weight="700" font-size="56" fill="#2B54C4" letter-spacing="-0.02em">7.6×</text>
      <text x="1160" y="514" font-family="IBM Plex Mono, monospace" font-size="24" fill="#2B54C4">fewer nodes</text>
    </g>

    <g>
      <circle class="dot d0" cx="1440" cy="700" r="7"/>
      <circle class="dot d1" cx="1464" cy="700" r="7"/>
      <circle class="dot d2" cx="1488" cy="700" r="7"/>
    </g>
  </svg></div>
</div>
`);

DECK.register('s14-wall', `
  <header><h1>Still unsolved</h1><div class="kicker">124 classes · AK(3)</div></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree">
    <defs>
      <marker id="s14-ai" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0 1 L7 4 L0 7 Z" fill="#191813"/>
      </marker>
    </defs>

    <rect x="1048" y="70" width="118" height="560" fill="#E05B2B"/>
    <text x="1107" y="430" transform="rotate(-90 1107 430)" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="26" fill="#FAF9F6">floor · total length 13</text>

    <line x1="1228" y1="70" x2="1228" y2="630" stroke="#2B54C4" stroke-width="2" stroke-dasharray="11 7"/>
    <text x="1268" y="430" transform="rotate(-90 1268 430)" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#2B54C4">stably trivial · 12</text>

    <text x="70" y="272" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813">CoV sweep @ 50k · 0 / 124 solved</text>
    <line x1="70" y1="304" x2="1024" y2="304" stroke="#191813" stroke-width="2" marker-end="url(#s14-ai)"/>
    <g>
      <circle cx="1036" cy="304" r="14" fill="none" stroke="#191813" stroke-opacity="0.35" stroke-width="2"/>
      <path d="M1030 298 L1042 310 M1042 298 L1030 310" stroke="#191813" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round"/>
    </g>

    <text x="70" y="452" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813">iterative CoV · 39 / 124 reduced</text>
    <text x="70" y="490" font-family="IBM Plex Mono, monospace" font-size="22" fill="#191813" fill-opacity="0.5">36 of the 39 from the µ-ladder</text>
    <line x1="70" y1="522" x2="1024" y2="522" stroke="#191813" stroke-width="2" marker-end="url(#s14-ai)"/>
    <g>
      <circle cx="1036" cy="522" r="14" fill="none" stroke="#191813" stroke-opacity="0.35" stroke-width="2"/>
      <path d="M1030 516 L1042 528 M1042 516 L1030 528" stroke="#191813" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round"/>
    </g>
    <text x="70" y="566" font-family="IBM Plex Mono, monospace" font-size="22" fill="#E05B2B">shorter start · same floor · 0 solved</text>

    <circle cx="1107" cy="118" r="28" fill="#E05B2B"/>
    <rect x="1105" y="101" width="4" height="18" rx="1.6" fill="#fff"/>
    <circle cx="1107" cy="128" r="2.4" fill="#fff"/>
    <text x="1107" y="168" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="22" fill="#FAF9F6">AK(3)</text>

    <text x="800" y="678" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.40">567M nodes · 182 hours · 0 of 124 solved</text>
  </svg></div>
`);

DECK.register('s15-takeaway', `
  <header><h1>Two ideas solved all 640</h1></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree">
    <defs>
      <marker id="s15-ab" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
        <path d="M0 1 L8 4.5 L0 8 Z" fill="#2B54C4"/>
      </marker>
      <pattern id="s15-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="10" height="10" fill="#2B54C4" fill-opacity="0.10"/>
        <line x1="0" y1="0" x2="0" y2="10" stroke="#2B54C4" stroke-width="3.4" stroke-opacity="0.55"/>
      </pattern>
    </defs>

    <rect x="70" y="16" width="440" height="64" rx="18" fill="#2B54C4" fill-opacity="0.14" stroke="#2B54C4" stroke-width="3"/>
    <text x="290" y="56" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="21" fill="#2B54C4">heuristic — L + 20·S + 2·MK</text>

    <rect x="70" y="96" width="440" height="64" rx="18" fill="#2B54C4" fill-opacity="0.14" stroke="#2B54C4" stroke-width="3"/>
    <text x="290" y="136" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="21" fill="#2B54C4">start — lowest abelian mass</text>

    <line x1="520" y1="48" x2="572" y2="76" stroke="#2B54C4" stroke-width="3" marker-end="url(#s15-ab)"/>
    <line x1="520" y1="128" x2="572" y2="100" stroke="#2B54C4" stroke-width="3" marker-end="url(#s15-ab)"/>

    <circle cx="610" cy="88" r="26" fill="#2B54C4"/>
    <path d="M598 89 L607 100 L625 76" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="654" y="82" font-family="Figtree" font-weight="700" font-size="40" fill="#2B54C4" letter-spacing="-0.02em">640 / 640</text>
    <text x="654" y="120" font-family="IBM Plex Mono, monospace" font-size="21" fill="#2B54C4">solvable set, 7.6× cheaper</text>

    <circle cx="1148" cy="72" r="24" fill="#E05B2B"/>
    <rect x="1146" y="58" width="4" height="16" rx="1.6" fill="#fff"/>
    <circle cx="1148" cy="82" r="2.4" fill="#fff"/>
    <text x="1188" y="82" font-family="IBM Plex Mono, monospace" font-size="24" fill="#E05B2B">124 open problems</text>

    <line x1="70" y1="192" x2="1530" y2="192" stroke="#191813" stroke-opacity="0.10" stroke-width="1.4"/>

    <text x="120" y="240" font-family="Figtree" font-weight="600" font-size="26" fill="#191813">nodes explored</text>
    <line x1="120" y1="620" x2="730" y2="620" stroke="#191813" stroke-opacity="0.25" stroke-width="1.6"/>
    <rect x="145" y="320" width="110" height="300" fill="#191813" fill-opacity="0.14" stroke="#191813" stroke-opacity="0.35" stroke-width="2"/>
    <rect x="345" y="480" width="110" height="140" fill="url(#s15-hatch)" stroke="#2B54C4" stroke-width="2.5" stroke-dasharray="7 5"/>
    <rect x="545" y="580" width="110" height="40" fill="#2B54C4" fill-opacity="0.85"/>
    <text x="200" y="306" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.5">1.00×</text>
    <text x="400" y="466" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#2B54C4">0.47×</text>
    <text x="600" y="566" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#2B54C4">0.13×</text>
    <text x="200" y="656" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="22" fill="#191813">plain greedy</text>
    <text x="400" y="656" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="22" fill="#191813">heuristic</text>
    <text x="600" y="656" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="22" fill="#191813">mass CoV</text>
    <text x="200" y="688" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="19" fill="#191813" fill-opacity="0.45">control</text>
    <text x="400" y="688" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="19" fill="#191813" fill-opacity="0.45">563 → 263</text>
    <text x="600" y="688" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="19" fill="#191813" fill-opacity="0.45">4,963 → 657</text>

    <text x="890" y="240" font-family="Figtree" font-weight="600" font-size="26" fill="#191813">path length</text>
    <line x1="890" y1="620" x2="1500" y2="620" stroke="#191813" stroke-opacity="0.25" stroke-width="1.6"/>
    <rect x="915" y="360" width="110" height="260" fill="#191813" fill-opacity="0.14" stroke="#191813" stroke-opacity="0.35" stroke-width="2"/>
    <rect x="1115" y="326" width="110" height="294" fill="url(#s15-hatch)" stroke="#2B54C4" stroke-width="2.5" stroke-dasharray="7 5"/>
    <rect x="1315" y="418" width="110" height="202" fill="#2B54C4" fill-opacity="0.85"/>
    <text x="970" y="346" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.5">1.00×</text>
    <text x="1170" y="312" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#2B54C4">1.13×</text>
    <text x="1370" y="404" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#2B54C4">0.78×</text>
    <text x="970" y="656" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="22" fill="#191813">plain greedy</text>
    <text x="1170" y="656" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="22" fill="#191813">heuristic</text>
    <text x="1370" y="656" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="22" fill="#191813">mass CoV</text>
    <text x="970" y="688" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="19" fill="#191813" fill-opacity="0.45">control</text>
    <text x="1170" y="688" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="19" fill="#191813" fill-opacity="0.45">23.5 → 26.6</text>
    <text x="1370" y="688" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="19" fill="#191813" fill-opacity="0.45">9 → 7</text>

    <text x="800" y="738" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="19" fill="#191813" fill-opacity="0.40">each idea against its own greedy control · heuristic on 70,723 Aut orbits · CoV on all 640</text>
  </svg></div>
`);

DECK.register('s15b-next', `
  <header><h1>What comes next</h1><div class="kicker">two directions</div></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree">

    <circle cx="300" cy="238" r="30" fill="#2B54C4"/>
    <text x="300" y="249" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="28" fill="#FAF9F6">1</text>
    <text x="372" y="256" font-family="Figtree" font-weight="700" font-size="60" fill="#191813" letter-spacing="-0.02em">PPO with heuristic</text>

    <circle cx="300" cy="428" r="30" fill="#2B54C4"/>
    <text x="300" y="439" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="28" fill="#FAF9F6">2</text>
    <text x="372" y="446" font-family="Figtree" font-weight="700" font-size="60" fill="#191813" letter-spacing="-0.02em">Improved Benchmark besides MS1190</text>

    <line x1="70" y1="596" x2="1530" y2="596" stroke="#191813" stroke-opacity="0.10" stroke-width="1.4"/>
    <text x="800" y="664" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813" fill-opacity="0.7">both aim at the same target &#8212; the <tspan fill="#E05B2B" fill-opacity="1">124 unsolved classes</tspan>, and <tspan fill="#E05B2B" fill-opacity="1">AK(3)</tspan></text>

  </svg></div>
`);

DECK.register('s16-ack', `
  <header><h1>Thank you</h1></header>
  <div class="viz">
    <div style="width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;padding:52px 80px 24px;">
      <div style="font-family:Figtree,sans-serif;font-weight:600;font-size:40px;letter-spacing:-0.02em;line-height:1.2;color:#191813;">Prof. Sergei Gukov</div>
      <div class="mono dim" style="font-size:26px;margin:8px 0 40px;">Math AI Group · Caltech</div>
      <div style="font-family:Figtree,sans-serif;font-weight:600;font-size:40px;letter-spacing:-0.02em;line-height:1.25;color:#191813;">Lucas Fagan<br>Giorgi Butbaia<br>Michele Tarquini</div>
      <div class="mono dim" style="font-size:26px;margin:8px 0 0;">mentors · Math AI Group · Caltech</div>
      <div style="font-family:Figtree,sans-serif;font-weight:600;font-size:40px;letter-spacing:-0.02em;line-height:1.2;color:#191813;margin-top:34px;">Claude</div>
      <div class="mono dim" style="font-size:26px;margin:8px 0 0;">Anthropic &#183; search code &#183; figures &#183; this deck</div>
      <svg viewBox="0 0 160 160" width="160" height="160" style="margin-top:10px;" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true">
          <defs>
            <path id="ka0" fill="none"><animate attributeName="d" values="M146 81.9 C145.6 80.8 144.7 79.5 143.4 78.4;M146 81.9 C145.6 80.8 144.7 79.5 143.4 78.4;M146 81.9 C145.6 80.8 144.7 79.5 143.4 78.4;M146 81.9 C145.6 80.8 144.7 79.5 143.4 78.4;M146 82.1 C145.6 81.1 144.8 80 143.5 79.1;M145.9 82.8 C145.6 82.2 144.9 81.6 143.9 81.2;M145.9 83.7 C145.6 83.8 145 83.7 144.1 83.8;M145.8 84.7 C145.6 85.4 145 86 144.3 86.7;M145.8 85.3 C145.5 86.6 145.1 87.9 144.5 89.2;M145.4 86.1 C145.2 87.9 144.8 89.6 144.4 91.3;M145.6 86.6 C145.4 88.3 145.1 90 144.7 91.7;M145.6 86.8 C145.4 88.5 145.1 90.3 144.8 92.1;M145.7 86.8 C145.5 88.6 145.2 90.3 144.9 92.1;M145.7 86.8 C145.5 88.6 145.2 90.3 144.9 92.1;M145.7 86.8 C145.5 88.6 145.2 90.3 144.9 92.1;M145.7 86.8 C145.5 88.6 145.2 90.3 144.9 92.1;M145.7 86.8 C145.5 88.6 145.2 90.3 144.9 92.1;M145.7 86.8 C145.5 88.6 145.2 90.3 144.9 92.1;M145.6 86.6 C145.4 88.3 145.1 90 144.7 91.7;M145.7 85.6 C145.4 87.1 145.1 88.6 144.6 90.1;M145.8 84.7 C145.6 85.4 145 86 144.3 86.7;M145.9 83.2 C145.6 83 144.9 82.6 144 82.4;M146 82.1 C145.6 81.1 144.8 80 143.5 79.1;M146 81.9 C145.6 80.8 144.7 79.5 143.4 78.4;M146 81.9 C145.6 80.8 144.7 79.5 143.4 78.4" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka1" fill="none"><animate attributeName="d" values="M143.4 78.4 C142 77.4 140.1 76.4 137.9 75.6;M143.4 78.4 C142 77.4 140.1 76.4 137.9 75.6;M143.4 78.4 C142 77.4 140.1 76.4 137.9 75.6;M143.4 78.4 C142 77.4 140.1 76.4 137.9 75.6;M143.5 79.1 C142.3 78.2 140.5 77.3 138.6 76.7;M143.9 81.2 C142.9 80.7 141.4 80.3 139.8 80.1;M144.1 83.8 C143.2 83.9 142 84 140.7 84.3;M144.3 86.7 C143.6 87.4 142.6 88.1 141.5 88.8;M144.5 89.2 C144 90.4 143.2 91.7 142.4 93;M144.4 91.3 C144 93 143.4 94.7 142.9 96.3;M144.7 91.7 C144.4 93.4 143.9 95.1 143.4 96.7;M144.8 92.1 C144.4 93.8 144 95.6 143.4 97.3;M144.9 92.1 C144.6 93.9 144.1 95.6 143.7 97.4;M144.9 92.1 C144.6 93.9 144.1 95.6 143.7 97.4;M144.9 92.1 C144.6 93.9 144.1 95.6 143.7 97.4;M144.9 92.1 C144.6 93.9 144.1 95.6 143.7 97.4;M144.9 92.1 C144.6 93.9 144.1 95.6 143.7 97.4;M144.9 92.1 C144.6 93.9 144.1 95.6 143.7 97.4;M144.7 91.7 C144.4 93.4 143.9 95.1 143.4 96.7;M144.6 90.1 C144.1 91.6 143.4 93.1 142.7 94.5;M144.3 86.7 C143.6 87.4 142.6 88.1 141.5 88.8;M144 82.4 C143 82.3 141.7 82.1 140.2 82.1;M143.5 79.1 C142.3 78.2 140.5 77.3 138.6 76.7;M143.4 78.4 C142 77.4 140.1 76.4 137.9 75.6;M143.4 78.4 C142 77.4 140.1 76.4 137.9 75.6" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka2" fill="none"><animate attributeName="d" values="M137.9 75.6 C135.7 74.9 133 74.3 130.3 74.1;M137.9 75.6 C135.7 74.9 133 74.3 130.3 74.1;M137.9 75.6 C135.7 74.9 133 74.3 130.3 74.1;M137.9 75.6 C135.7 74.9 133 74.3 130.3 74.1;M138.6 76.7 C136.6 76.1 134.1 75.7 131.6 75.6;M139.8 80.1 C138.2 79.9 136.1 79.8 134.1 80;M140.7 84.3 C139.3 84.5 137.7 84.9 136 85.4;M141.5 88.8 C140.4 89.6 139.1 90.4 137.8 91.3;M142.4 93 C141.5 94.2 140.5 95.5 139.5 96.8;M142.9 96.3 C142.3 98 141.6 99.7 140.8 101.3;M143.4 96.7 C142.8 98.4 142.2 100 141.5 101.6;M143.4 97.3 C142.9 99 142.3 100.7 141.6 102.4;M143.7 97.4 C143.2 99.1 142.7 100.8 142 102.5;M143.7 97.4 C143.2 99.1 142.7 100.8 142 102.5;M143.7 97.4 C143.2 99.1 142.7 100.8 142 102.5;M143.7 97.4 C143.2 99.1 142.7 100.8 142 102.5;M143.7 97.4 C143.2 99.1 142.7 100.8 142 102.5;M143.7 97.4 C143.2 99.1 142.7 100.8 142 102.5;M143.4 96.7 C142.8 98.4 142.2 100 141.5 101.6;M142.7 94.5 C141.9 96 141.1 97.4 140.2 98.9;M141.5 88.8 C140.4 89.6 139.1 90.4 137.8 91.3;M140.2 82.1 C138.7 82.1 136.9 82.3 135 82.6;M138.6 76.7 C136.6 76.1 134.1 75.7 131.6 75.6;M137.9 75.6 C135.7 74.9 133 74.3 130.3 74.1;M137.9 75.6 C135.7 74.9 133 74.3 130.3 74.1" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka3" fill="none"><animate attributeName="d" values="M130.3 74.1 C127.6 73.9 124.5 74 121.7 74.5;M130.3 74.1 C127.6 73.9 124.5 74 121.7 74.5;M130.3 74.1 C127.6 73.9 124.5 74 121.7 74.5;M130.3 74.1 C127.6 73.9 124.5 74 121.7 74.5;M131.6 75.6 C129.2 75.5 126.3 75.7 123.8 76.2;M134.1 80 C132.1 80.2 129.8 80.6 127.6 81.3;M136 85.4 C134.3 85.9 132.5 86.6 130.7 87.5;M137.8 91.3 C136.4 92.2 134.9 93.2 133.5 94.3;M139.5 96.8 C138.4 98 137.3 99.3 136.1 100.6;M140.8 101.3 C140.1 102.9 139.3 104.4 138.4 106;M141.5 101.6 C140.8 103.2 140 104.8 139.2 106.3;M141.6 102.4 C140.9 104.1 140.2 105.7 139.4 107.3;M142 102.5 C141.4 104.3 140.7 105.9 139.9 107.6;M142 102.5 C141.4 104.3 140.7 105.9 139.9 107.6;M142 102.5 C141.4 104.3 140.7 105.9 139.9 107.6;M142 102.5 C141.4 104.3 140.7 105.9 139.9 107.6;M142 102.5 C141.4 104.3 140.7 105.9 139.9 107.6;M142 102.5 C141.4 104.3 140.7 105.9 139.9 107.6;M141.5 101.6 C140.8 103.2 140 104.8 139.2 106.3;M140.2 98.9 C139.3 100.3 138.2 101.7 137.2 103.1;M137.8 91.3 C136.4 92.2 134.9 93.2 133.5 94.3;M135 82.6 C133.2 83 131.1 83.5 129.1 84.2;M131.6 75.6 C129.2 75.5 126.3 75.7 123.8 76.2;M130.3 74.1 C127.6 73.9 124.5 74 121.7 74.5;M130.3 74.1 C127.6 73.9 124.5 74 121.7 74.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka4" fill="none"><animate attributeName="d" values="M121.7 74.5 C118.9 75 116 75.9 113.6 77.2;M121.7 74.5 C118.9 75 116 75.9 113.6 77.2;M121.7 74.5 C118.9 75 116 75.9 113.6 77.2;M121.7 74.5 C118.9 75 116 75.9 113.6 77.2;M123.8 76.2 C121.2 76.8 118.5 77.7 116.2 78.9;M127.6 81.3 C125.4 82 123.1 82.9 121.1 84.1;M130.7 87.5 C128.9 88.3 127 89.3 125.3 90.5;M133.5 94.3 C132.1 95.3 130.6 96.5 129.2 97.7;M136.1 100.6 C134.9 101.9 133.7 103.2 132.5 104.5;M138.4 106 C137.4 107.5 136.5 109 135.4 110.5;M139.2 106.3 C138.3 107.9 137.4 109.4 136.4 110.9;M139.4 107.3 C138.5 108.9 137.6 110.5 136.6 112.1;M139.9 107.6 C139.2 109.3 138.3 110.9 137.4 112.5;M139.9 107.6 C139.2 109.3 138.3 110.9 137.4 112.5;M139.9 107.6 C139.2 109.3 138.3 110.9 137.4 112.5;M139.9 107.6 C139.2 109.3 138.3 110.9 137.4 112.5;M139.9 107.6 C139.2 109.3 138.3 110.9 137.4 112.5;M139.9 107.6 C139.2 109.3 138.3 110.9 137.4 112.5;M139.2 106.3 C138.3 107.9 137.4 109.4 136.4 110.9;M137.2 103.1 C136.1 104.5 135 105.9 133.9 107.3;M133.5 94.3 C132.1 95.3 130.6 96.5 129.2 97.7;M129.1 84.2 C127.1 85 125.1 86 123.2 87.1;M123.8 76.2 C121.2 76.8 118.5 77.7 116.2 78.9;M121.7 74.5 C118.9 75 116 75.9 113.6 77.2;M121.7 74.5 C118.9 75 116 75.9 113.6 77.2" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka5" fill="none"><animate attributeName="d" values="M113.6 77.2 C111.1 78.5 108.9 80.2 107.2 82.1;M113.6 77.2 C111.1 78.5 108.9 80.2 107.2 82.1;M113.6 77.2 C111.1 78.5 108.9 80.2 107.2 82.1;M113.6 77.2 C111.1 78.5 108.9 80.2 107.2 82.1;M116.2 78.9 C113.9 80.1 111.7 81.8 110 83.6;M121.1 84.1 C119.1 85.3 117.2 86.8 115.6 88.4;M125.3 90.5 C123.6 91.7 121.9 93.1 120.5 94.6;M129.2 97.7 C127.8 99 126.4 100.3 125.1 101.7;M132.5 104.5 C131.3 105.9 130 107.2 128.8 108.6;M135.4 110.5 C134.4 111.9 133.3 113.3 132.1 114.7;M136.4 110.9 C135.4 112.3 134.3 113.8 133.2 115.1;M136.6 112.1 C135.7 113.6 134.6 115.1 133.5 116.6;M137.4 112.5 C136.5 114.1 135.5 115.7 134.5 117.3;M137.4 112.5 C136.5 114.1 135.5 115.7 134.5 117.3;M137.4 112.5 C136.5 114.1 135.5 115.7 134.5 117.3;M137.4 112.5 C136.5 114.1 135.5 115.7 134.5 117.3;M137.4 112.5 C136.5 114.1 135.5 115.7 134.5 117.3;M137.4 112.5 C136.5 114.1 135.5 115.7 134.5 117.3;M136.4 110.9 C135.4 112.3 134.3 113.8 133.2 115.1;M133.9 107.3 C132.7 108.6 131.5 110 130.3 111.3;M129.2 97.7 C127.8 99 126.4 100.3 125.1 101.7;M123.2 87.1 C121.3 88.3 119.5 89.7 118 91.3;M116.2 78.9 C113.9 80.1 111.7 81.8 110 83.6;M113.6 77.2 C111.1 78.5 108.9 80.2 107.2 82.1;M113.6 77.2 C111.1 78.5 108.9 80.2 107.2 82.1" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka6" fill="none"><animate attributeName="d" values="M107.2 82.1 C105.5 84 104.2 86.4 103.4 88.8;M107.2 82.1 C105.5 84 104.2 86.4 103.4 88.8;M107.2 82.1 C105.5 84 104.2 86.4 103.4 88.8;M107.2 82.1 C105.5 84 104.2 86.4 103.4 88.8;M110 83.6 C108.4 85.5 107 87.7 106.1 90;M115.6 88.4 C114 90 112.6 92 111.5 93.9;M120.5 94.6 C119 96.1 117.7 97.7 116.5 99.5;M125.1 101.7 C123.8 103.1 122.6 104.6 121.4 106.1;M128.8 108.6 C127.6 109.9 126.3 111.3 125.1 112.6;M132.1 114.7 C130.9 116 129.7 117.3 128.4 118.6;M133.2 115.1 C132 116.5 130.8 117.9 129.6 119.1;M133.5 116.6 C132.4 118 131.2 119.4 129.9 120.8;M134.5 117.3 C133.4 118.8 132.3 120.3 131.1 121.8;M134.5 117.3 C133.4 118.8 132.3 120.3 131.1 121.8;M134.5 117.3 C133.4 118.8 132.3 120.3 131.1 121.8;M134.5 117.3 C133.4 118.8 132.3 120.3 131.1 121.8;M134.5 117.3 C133.4 118.8 132.3 120.3 131.1 121.8;M134.5 117.3 C133.4 118.8 132.3 120.3 131.1 121.8;M133.2 115.1 C132 116.5 130.8 117.9 129.6 119.1;M130.3 111.3 C129.1 112.7 127.9 114 126.6 115.3;M125.1 101.7 C123.8 103.1 122.6 104.6 121.4 106.1;M118 91.3 C116.4 92.8 115.1 94.6 113.9 96.4;M110 83.6 C108.4 85.5 107 87.7 106.1 90;M107.2 82.1 C105.5 84 104.2 86.4 103.4 88.8;M107.2 82.1 C105.5 84 104.2 86.4 103.4 88.8" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka7" fill="none"><animate attributeName="d" values="M103.4 88.8 C102.6 91.2 102.3 93.9 102.3 96.5;M103.4 88.8 C102.6 91.2 102.3 93.9 102.3 96.5;M103.4 88.8 C102.6 91.2 102.3 93.9 102.3 96.5;M103.4 88.8 C102.6 91.2 102.3 93.9 102.3 96.5;M106.1 90 C105.2 92.3 104.7 94.9 104.5 97.4;M111.5 93.9 C110.4 95.9 109.7 98.2 109.1 100.3;M116.5 99.5 C115.3 101.2 114.4 103.1 113.5 105;M121.4 106.1 C120.3 107.7 119.2 109.3 118.1 110.9;M125.1 112.6 C123.9 114 122.7 115.4 121.4 116.7;M128.4 118.6 C127.1 119.8 125.7 121 124.3 122.1;M129.6 119.1 C128.3 120.4 127 121.7 125.6 122.8;M129.9 120.8 C128.7 122.2 127.3 123.5 126 124.7;M131.1 121.8 C129.9 123.2 128.6 124.7 127.3 126;M131.1 121.8 C129.9 123.2 128.6 124.7 127.3 126;M131.1 121.8 C129.9 123.2 128.6 124.7 127.3 126;M131.1 121.8 C129.9 123.2 128.6 124.7 127.3 126;M131.1 121.8 C129.9 123.2 128.6 124.7 127.3 126;M131.1 121.8 C129.9 123.2 128.6 124.7 127.3 126;M129.6 119.1 C128.3 120.4 127 121.7 125.6 122.8;M126.6 115.3 C125.4 116.6 124.1 117.9 122.8 119.2;M121.4 106.1 C120.3 107.7 119.2 109.3 118.1 110.9;M113.9 96.4 C112.8 98.3 112 100.3 111.2 102.4;M106.1 90 C105.2 92.3 104.7 94.9 104.5 97.4;M103.4 88.8 C102.6 91.2 102.3 93.9 102.3 96.5;M103.4 88.8 C102.6 91.2 102.3 93.9 102.3 96.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka8" fill="none"><animate attributeName="d" values="M102.3 96.5 C102.2 99.1 102.8 101.9 103.2 104.5;M102.3 96.5 C102.2 99.1 102.8 101.9 103.2 104.5;M102.3 96.5 C102.2 99.1 102.8 101.9 103.2 104.5;M102.3 96.5 C102.2 99.1 102.8 101.9 103.2 104.5;M104.5 97.4 C104.2 99.9 104.5 102.6 104.7 105;M109.1 100.3 C108.5 102.5 108.2 104.9 107.8 107.1;M113.5 105 C112.7 106.8 112 108.9 111.3 110.8;M118.1 110.9 C117.1 112.5 116.1 114.1 115.1 115.7;M121.4 116.7 C120.2 118.1 119 119.4 117.7 120.7;M124.3 122.1 C122.9 123.3 121.4 124.3 119.9 125.3;M125.6 122.8 C124.2 124 122.7 125.1 121.2 126.2;M126 124.7 C124.6 126 123.2 127.2 121.7 128.3;M127.3 126 C126 127.4 124.6 128.7 123.1 130;M127.3 126 C126 127.4 124.6 128.7 123.1 130;M127.3 126 C126 127.4 124.6 128.7 123.1 130;M127.3 126 C126 127.4 124.6 128.7 123.1 130;M127.3 126 C126 127.4 124.6 128.7 123.1 130;M127.3 126 C126 127.4 124.6 128.7 123.1 130;M125.6 122.8 C124.2 124 122.7 125.1 121.2 126.2;M122.8 119.2 C121.5 120.4 120.1 121.7 118.7 122.8;M118.1 110.9 C117.1 112.5 116.1 114.1 115.1 115.7;M111.2 102.4 C110.5 104.4 110 106.6 109.5 108.7;M104.5 97.4 C104.2 99.9 104.5 102.6 104.7 105;M102.3 96.5 C102.2 99.1 102.8 101.9 103.2 104.5;M102.3 96.5 C102.2 99.1 102.8 101.9 103.2 104.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka9" fill="none"><animate attributeName="d" values="M103.2 104.5 C103.7 107 104.5 109.7 105 111.8;M103.2 104.5 C103.7 107 104.5 109.7 105 111.8;M103.2 104.5 C103.7 107 104.5 109.7 105 111.8;M103.2 104.5 C103.7 107 104.5 109.7 105 111.8;M104.7 105 C104.8 107.4 105.4 109.9 105.6 111.9;M107.8 107.1 C107.5 109.3 107.4 111.5 107.1 113.3;M111.3 110.8 C110.6 112.7 110 114.7 109.2 116.4;M115.1 115.7 C114 117.3 113.1 118.9 111.9 120.3;M117.7 120.7 C116.4 122 115.1 123.3 113.7 124.4;M119.9 125.3 C118.4 126.3 116.9 127.3 115.3 128.1;M121.2 126.2 C119.8 127.3 118.2 128.3 116.6 129.2;M121.7 128.3 C120.2 129.5 118.6 130.6 117 131.6;M123.1 130 C121.6 131.3 120.1 132.5 118.5 133.6;M123.1 130 C121.6 131.3 120.1 132.5 118.5 133.6;M123.1 130 C121.6 131.3 120.1 132.5 118.5 133.6;M123.1 130 C121.6 131.3 120.1 132.5 118.5 133.6;M123.1 130 C121.6 131.3 120.1 132.5 118.5 133.6;M123.1 130 C121.6 131.3 120.1 132.5 118.5 133.6;M121.2 126.2 C119.8 127.3 118.2 128.3 116.6 129.2;M118.7 122.8 C117.3 124 115.9 125.2 114.4 126.2;M115.1 115.7 C114 117.3 113.1 118.9 111.9 120.3;M109.5 108.7 C108.9 110.7 108.6 112.9 108.1 114.7;M104.7 105 C104.8 107.4 105.4 109.9 105.6 111.9;M103.2 104.5 C103.7 107 104.5 109.7 105 111.8;M103.2 104.5 C103.7 107 104.5 109.7 105 111.8" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka10" fill="none"><animate attributeName="d" values="M105 111.8 C105.5 113.9 106.2 115.9 106.2 117.1;M105 111.8 C105.5 113.9 106.2 115.9 106.2 117.1;M105 111.8 C105.5 113.9 106.2 115.9 106.2 117.1;M105 111.8 C105.5 113.9 106.2 115.9 106.2 117.1;M105.6 111.9 C105.8 113.9 106.1 115.6 106 116.8;M107.1 113.3 C106.8 115.2 106.6 116.9 106.1 118.1;M109.2 116.4 C108.5 118.1 107.8 119.8 106.9 121;M111.9 120.3 C110.8 121.8 109.6 123.2 108.3 124.4;M113.7 124.4 C112.3 125.6 110.9 126.7 109.4 127.7;M115.3 128.1 C113.7 129 112.1 129.8 110.4 130.5;M116.6 129.2 C115 130.1 113.4 131 111.7 131.8;M117 131.6 C115.4 132.6 113.8 133.6 112.1 134.4;M118.5 133.6 C116.9 134.8 115.2 135.8 113.5 136.8;M118.5 133.6 C116.9 134.8 115.2 135.8 113.5 136.8;M118.5 133.6 C116.9 134.8 115.2 135.8 113.5 136.8;M118.5 133.6 C116.9 134.8 115.2 135.8 113.5 136.8;M118.5 133.6 C116.9 134.8 115.2 135.8 113.5 136.8;M118.5 133.6 C116.9 134.8 115.2 135.8 113.5 136.8;M116.6 129.2 C115 130.1 113.4 131 111.7 131.8;M114.4 126.2 C113 127.3 111.4 128.3 109.9 129.1;M111.9 120.3 C110.8 121.8 109.6 123.2 108.3 124.4;M108.1 114.7 C107.6 116.5 107.1 118.2 106.4 119.5;M105.6 111.9 C105.8 113.9 106.1 115.6 106 116.8;M105 111.8 C105.5 113.9 106.2 115.9 106.2 117.1;M105 111.8 C105.5 113.9 106.2 115.9 106.2 117.1" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka11" fill="none"><animate attributeName="d" values="M106.2 117.1 C106.3 118.3 106.2 119 105.6 119.1;M106.2 117.1 C106.3 118.3 106.2 119 105.6 119.1;M106.2 117.1 C106.3 118.3 106.2 119 105.6 119.1;M106.2 117.1 C106.3 118.3 106.2 119 105.6 119.1;M106 116.8 C105.9 117.9 105.6 118.7 105 118.8;M106.1 118.1 C105.6 119.3 105 120.2 104.1 120.6;M106.9 121 C105.9 122.3 104.9 123.4 103.7 124;M108.3 124.4 C107 125.5 105.6 126.6 104.1 127.3;M109.4 127.7 C107.9 128.7 106.3 129.6 104.7 130.3;M110.4 130.5 C108.8 131.2 107.1 131.9 105.4 132.5;M111.7 131.8 C110 132.6 108.3 133.4 106.6 134.1;M112.1 134.4 C110.4 135.3 108.7 136.1 106.9 136.9;M113.5 136.8 C111.8 137.8 110.1 138.8 108.3 139.6;M113.5 136.8 C111.8 137.8 110.1 138.8 108.3 139.6;M113.5 136.8 C111.8 137.8 110.1 138.8 108.3 139.6;M113.5 136.8 C111.8 137.8 110.1 138.8 108.3 139.6;M113.5 136.8 C111.8 137.8 110.1 138.8 108.3 139.6;M113.5 136.8 C111.8 137.8 110.1 138.8 108.3 139.6;M111.7 131.8 C110 132.6 108.3 133.4 106.6 134.1;M109.9 129.1 C108.3 130 106.7 130.8 105 131.5;M108.3 124.4 C107 125.5 105.6 126.6 104.1 127.3;M106.4 119.5 C105.7 120.8 104.9 121.8 103.8 122.3;M106 116.8 C105.9 117.9 105.6 118.7 105 118.8;M106.2 117.1 C106.3 118.3 106.2 119 105.6 119.1;M106.2 117.1 C106.3 118.3 106.2 119 105.6 119.1" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka12" fill="none"><animate attributeName="d" values="M105.6 119.1 C104.9 119.2 103.9 118.7 102.6 117.8;M105.6 119.1 C104.9 119.2 103.9 118.7 102.6 117.8;M105.6 119.1 C104.9 119.2 103.9 118.7 102.6 117.8;M105.6 119.1 C104.9 119.2 103.9 118.7 102.6 117.8;M105 118.8 C104.3 119 103.2 118.5 102 117.7;M104.1 120.6 C103.2 120.9 102 120.7 100.8 120.2;M103.7 124 C102.5 124.6 101.2 124.8 99.7 124.7;M104.1 127.3 C102.6 128 101 128.5 99.4 128.8;M104.7 130.3 C103 131 101.3 131.6 99.6 132;M105.4 132.5 C103.7 133 101.9 133.5 100.2 134;M106.6 134.1 C104.8 134.8 103 135.4 101.2 135.9;M106.9 136.9 C105.2 137.6 103.4 138.3 101.5 138.9;M108.3 139.6 C106.4 140.5 104.6 141.3 102.7 142;M108.3 139.6 C106.4 140.5 104.6 141.3 102.7 142;M108.3 139.6 C106.4 140.5 104.6 141.3 102.7 142;M108.3 139.6 C106.4 140.5 104.6 141.3 102.7 142;M108.3 139.6 C106.4 140.5 104.6 141.3 102.7 142;M108.3 139.6 C106.4 140.5 104.6 141.3 102.7 142;M106.6 134.1 C104.8 134.8 103 135.4 101.2 135.9;M105 131.5 C103.3 132.1 101.6 132.7 99.8 133.1;M104.1 127.3 C102.6 128 101 128.5 99.4 128.8;M103.8 122.3 C102.8 122.8 101.6 122.8 100.3 122.4;M105 118.8 C104.3 119 103.2 118.5 102 117.7;M105.6 119.1 C104.9 119.2 103.9 118.7 102.6 117.8;M105.6 119.1 C104.9 119.2 103.9 118.7 102.6 117.8" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka13" fill="none"><animate attributeName="d" values="M102.6 117.8 C101.3 116.8 99.5 115.2 97.7 113.5;M102.6 117.8 C101.3 116.8 99.5 115.2 97.7 113.5;M102.6 117.8 C101.3 116.8 99.5 115.2 97.7 113.5;M102.6 117.8 C101.3 116.8 99.5 115.2 97.7 113.5;M102 117.7 C100.7 116.9 99 115.5 97.3 113.9;M100.8 120.2 C99.5 119.7 97.9 118.7 96.3 117.5;M99.7 124.7 C98.3 124.6 96.7 124 95.1 123.2;M99.4 128.8 C97.7 129 96 129 94.3 128.7;M99.6 132 C97.9 132.4 96.1 132.6 94.3 132.7;M100.2 134 C98.4 134.4 96.6 134.8 94.9 135.1;M101.2 135.9 C99.4 136.4 97.6 136.9 95.7 137.3;M101.5 138.9 C99.7 139.5 97.9 140 96 140.4;M102.7 142 C100.8 142.7 98.8 143.3 96.9 143.8;M102.7 142 C100.8 142.7 98.8 143.3 96.9 143.8;M102.7 142 C100.8 142.7 98.8 143.3 96.9 143.8;M102.7 142 C100.8 142.7 98.8 143.3 96.9 143.8;M102.7 142 C100.8 142.7 98.8 143.3 96.9 143.8;M102.7 142 C100.8 142.7 98.8 143.3 96.9 143.8;M101.2 135.9 C99.4 136.4 97.6 136.9 95.7 137.3;M99.8 133.1 C98.1 133.5 96.3 133.8 94.5 134;M99.4 128.8 C97.7 129 96 129 94.3 128.7;M100.3 122.4 C98.9 122.1 97.3 121.3 95.8 120.3;M102 117.7 C100.7 116.9 99 115.5 97.3 113.9;M102.6 117.8 C101.3 116.8 99.5 115.2 97.7 113.5;M102.6 117.8 C101.3 116.8 99.5 115.2 97.7 113.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka14" fill="none"><animate attributeName="d" values="M97.7 113.5 C95.9 111.8 93.7 109.6 91.7 107.5;M97.7 113.5 C95.9 111.8 93.7 109.6 91.7 107.5;M97.7 113.5 C95.9 111.8 93.7 109.6 91.7 107.5;M97.7 113.5 C95.9 111.8 93.7 109.6 91.7 107.5;M97.3 113.9 C95.6 112.4 93.6 110.4 91.7 108.5;M96.3 117.5 C94.8 116.4 93 114.8 91.3 113.2;M95.1 123.2 C93.5 122.5 91.8 121.3 90.2 120.2;M94.3 128.7 C92.6 128.4 90.8 127.9 89.1 127.2;M94.3 132.7 C92.5 132.7 90.7 132.6 88.9 132.4;M94.9 135.1 C93.1 135.3 91.3 135.6 89.5 135.7;M95.7 137.3 C93.9 137.7 92 138 90.1 138.3;M96 140.4 C94.1 140.9 92.2 141.2 90.3 141.5;M96.9 143.8 C94.9 144.3 92.9 144.8 90.9 145.1;M96.9 143.8 C94.9 144.3 92.9 144.8 90.9 145.1;M96.9 143.8 C94.9 144.3 92.9 144.8 90.9 145.1;M96.9 143.8 C94.9 144.3 92.9 144.8 90.9 145.1;M96.9 143.8 C94.9 144.3 92.9 144.8 90.9 145.1;M96.9 143.8 C94.9 144.3 92.9 144.8 90.9 145.1;M95.7 137.3 C93.9 137.7 92 138 90.1 138.3;M94.5 134 C92.7 134.1 90.9 134.2 89.1 134.1;M94.3 128.7 C92.6 128.4 90.8 127.9 89.1 127.2;M95.8 120.3 C94.2 119.3 92.5 117.9 90.8 116.5;M97.3 113.9 C95.6 112.4 93.6 110.4 91.7 108.5;M97.7 113.5 C95.9 111.8 93.7 109.6 91.7 107.5;M97.7 113.5 C95.9 111.8 93.7 109.6 91.7 107.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka15" fill="none"><animate attributeName="d" values="M91.7 107.5 C89.6 105.4 87.4 103.1 85.4 100.9;M91.7 107.5 C89.6 105.4 87.4 103.1 85.4 100.9;M91.7 107.5 C89.6 105.4 87.4 103.1 85.4 100.9;M91.7 107.5 C89.6 105.4 87.4 103.1 85.4 100.9;M91.7 108.5 C89.7 106.6 87.6 104.4 85.7 102.4;M91.3 113.2 C89.6 111.7 87.8 109.9 86 108.3;M90.2 120.2 C88.5 119 86.9 117.5 85.2 116.2;M89.1 127.2 C87.3 126.6 85.6 125.7 83.9 124.8;M88.9 132.4 C87.1 132.2 85.3 131.8 83.6 131.3;M89.5 135.7 C87.7 135.9 85.9 136 84.1 136;M90.1 138.3 C88.3 138.5 86.4 138.7 84.5 138.8;M90.3 141.5 C88.4 141.8 86.4 142 84.5 142.1;M90.9 145.1 C88.9 145.4 86.8 145.7 84.8 145.8;M90.9 145.1 C88.9 145.4 86.8 145.7 84.8 145.8;M90.9 145.1 C88.9 145.4 86.8 145.7 84.8 145.8;M90.9 145.1 C88.9 145.4 86.8 145.7 84.8 145.8;M90.9 145.1 C88.9 145.4 86.8 145.7 84.8 145.8;M90.9 145.1 C88.9 145.4 86.8 145.7 84.8 145.8;M90.1 138.3 C88.3 138.5 86.4 138.7 84.5 138.8;M89.1 134.1 C87.3 134 85.5 133.8 83.7 133.5;M89.1 127.2 C87.3 126.6 85.6 125.7 83.9 124.8;M90.8 116.5 C89.2 115.2 87.5 113.5 85.8 112;M91.7 108.5 C89.7 106.6 87.6 104.4 85.7 102.4;M91.7 107.5 C89.6 105.4 87.4 103.1 85.4 100.9;M91.7 107.5 C89.6 105.4 87.4 103.1 85.4 100.9" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka16" fill="none"><animate attributeName="d" values="M85.4 100.9 C83.3 98.8 81.2 96.6 79.3 94.7;M85.4 100.9 C83.3 98.8 81.2 96.6 79.3 94.7;M85.4 100.9 C83.3 98.8 81.2 96.6 79.3 94.7;M85.4 100.9 C83.3 98.8 81.2 96.6 79.3 94.7;M85.7 102.4 C83.7 100.5 81.8 98.4 80 96.7;M86 108.3 C84.3 106.6 82.5 104.9 80.8 103.5;M85.2 116.2 C83.6 114.9 82 113.5 80.4 112.3;M83.9 124.8 C82.2 123.9 80.6 122.9 79 121.9;M83.6 131.3 C81.8 130.8 80.1 130.2 78.4 129.6;M84.1 136 C82.3 136 80.5 136 78.7 135.9;M84.5 138.8 C82.6 138.9 80.6 139 78.7 138.9;M84.5 142.1 C82.6 142.2 80.6 142.3 78.7 142.2;M84.8 145.8 C82.7 146 80.7 146 78.6 146;M84.8 145.8 C82.7 146 80.7 146 78.6 146;M84.8 145.8 C82.7 146 80.7 146 78.6 146;M84.8 145.8 C82.7 146 80.7 146 78.6 146;M84.8 145.8 C82.7 146 80.7 146 78.6 146;M84.8 145.8 C82.7 146 80.7 146 78.6 146;M84.5 138.8 C82.6 138.9 80.6 139 78.7 138.9;M83.7 133.5 C81.9 133.2 80.1 132.8 78.4 132.4;M83.9 124.8 C82.2 123.9 80.6 122.9 79 121.9;M85.8 112 C84.1 110.6 82.5 109 80.9 107.6;M85.7 102.4 C83.7 100.5 81.8 98.4 80 96.7;M85.4 100.9 C83.3 98.8 81.2 96.6 79.3 94.7;M85.4 100.9 C83.3 98.8 81.2 96.6 79.3 94.7" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka17" fill="none"><animate attributeName="d" values="M79.3 94.7 C77.4 92.8 75.7 90.9 74.2 89.6;M79.3 94.7 C77.4 92.8 75.7 90.9 74.2 89.6;M79.3 94.7 C77.4 92.8 75.7 90.9 74.2 89.6;M79.3 94.7 C77.4 92.8 75.7 90.9 74.2 89.6;M80 96.7 C78.2 94.9 76.4 93.2 74.9 92;M80.8 103.5 C79.2 102 77.5 100.6 75.9 99.5;M80.4 112.3 C78.9 111.1 77.3 109.9 75.8 108.9;M79 121.9 C77.4 121 75.8 120 74.3 119.1;M78.4 129.6 C76.6 129 75 128.3 73.3 127.7;M78.7 135.9 C76.9 135.8 75.1 135.7 73.3 135.5;M78.7 138.9 C76.8 138.9 74.9 138.8 73 138.6;M78.7 142.2 C76.7 142.2 74.8 142.1 72.9 141.9;M78.6 146 C76.5 145.9 74.5 145.8 72.4 145.6;M78.6 146 C76.5 145.9 74.5 145.8 72.4 145.6;M78.6 146 C76.5 145.9 74.5 145.8 72.4 145.6;M78.6 146 C76.5 145.9 74.5 145.8 72.4 145.6;M78.6 146 C76.5 145.9 74.5 145.8 72.4 145.6;M78.6 146 C76.5 145.9 74.5 145.8 72.4 145.6;M78.7 138.9 C76.8 138.9 74.9 138.8 73 138.6;M78.4 132.4 C76.6 132 74.9 131.5 73.1 131;M79 121.9 C77.4 121 75.8 120 74.3 119.1;M80.9 107.6 C79.2 106.3 77.6 105 76.1 103.9;M80 96.7 C78.2 94.9 76.4 93.2 74.9 92;M79.3 94.7 C77.4 92.8 75.7 90.9 74.2 89.6;M79.3 94.7 C77.4 92.8 75.7 90.9 74.2 89.6" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka18" fill="none"><animate attributeName="d" values="M74.2 89.6 C72.6 88.2 71.3 87.1 70.1 86.5;M74.2 89.6 C72.6 88.2 71.3 87.1 70.1 86.5;M74.2 89.6 C72.6 88.2 71.3 87.1 70.1 86.5;M74.2 89.6 C72.6 88.2 71.3 87.1 70.1 86.5;M74.9 92 C73.4 90.7 72 89.7 70.7 89.1;M75.9 99.5 C74.4 98.4 72.8 97.4 71.4 96.9;M75.8 108.9 C74.2 107.9 72.7 107.1 71.2 106.4;M74.3 119.1 C72.7 118.2 71.2 117.4 69.6 116.7;M73.3 127.7 C71.6 127 70 126.4 68.3 125.7;M73.3 135.5 C71.5 135.3 69.7 135 67.9 134.7;M73 138.6 C71.2 138.4 69.3 138.1 67.4 137.8;M72.9 141.9 C70.9 141.7 69 141.4 67.1 141;M72.4 145.6 C70.4 145.3 68.4 145 66.4 144.6;M72.4 145.6 C70.4 145.3 68.4 145 66.4 144.6;M72.4 145.6 C70.4 145.3 68.4 145 66.4 144.6;M72.4 145.6 C70.4 145.3 68.4 145 66.4 144.6;M72.4 145.6 C70.4 145.3 68.4 145 66.4 144.6;M72.4 145.6 C70.4 145.3 68.4 145 66.4 144.6;M73 138.6 C71.2 138.4 69.3 138.1 67.4 137.8;M73.1 131 C71.4 130.5 69.7 129.9 68 129.4;M74.3 119.1 C72.7 118.2 71.2 117.4 69.6 116.7;M76.1 103.9 C74.5 102.9 73 102 71.4 101.4;M74.9 92 C73.4 90.7 72 89.7 70.7 89.1;M74.2 89.6 C72.6 88.2 71.3 87.1 70.1 86.5;M74.2 89.6 C72.6 88.2 71.3 87.1 70.1 86.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka19" fill="none"><animate attributeName="d" values="M70.1 86.5 C69 85.9 68.1 85.8 67.2 86.2;M70.1 86.5 C69 85.9 68.1 85.8 67.2 86.2;M70.1 86.5 C69 85.9 68.1 85.8 67.2 86.2;M70.1 86.5 C69 85.9 68.1 85.8 67.2 86.2;M70.7 89.1 C69.4 88.6 68.4 88.5 67.3 88.8;M71.4 96.9 C69.9 96.3 68.5 96 67 96.1;M71.2 106.4 C69.6 105.8 68.1 105.3 66.5 105.1;M69.6 116.7 C68 116 66.5 115.4 64.9 114.9;M68.3 125.7 C66.7 125.1 65 124.5 63.4 123.9;M67.9 134.7 C66.1 134.4 64.4 134.1 62.6 133.7;M67.4 137.8 C65.5 137.5 63.7 137.1 61.8 136.6;M67.1 141 C65.2 140.6 63.3 140.2 61.5 139.7;M66.4 144.6 C64.4 144.2 62.4 143.6 60.4 143;M66.4 144.6 C64.4 144.2 62.4 143.6 60.4 143;M66.4 144.6 C64.4 144.2 62.4 143.6 60.4 143;M66.4 144.6 C64.4 144.2 62.4 143.6 60.4 143;M66.4 144.6 C64.4 144.2 62.4 143.6 60.4 143;M66.4 144.6 C64.4 144.2 62.4 143.6 60.4 143;M67.4 137.8 C65.5 137.5 63.7 137.1 61.8 136.6;M68 129.4 C66.3 128.8 64.6 128.3 62.9 127.8;M69.6 116.7 C68 116 66.5 115.4 64.9 114.9;M71.4 101.4 C69.9 100.8 68.4 100.4 66.9 100.3;M70.7 89.1 C69.4 88.6 68.4 88.5 67.3 88.8;M70.1 86.5 C69 85.9 68.1 85.8 67.2 86.2;M70.1 86.5 C69 85.9 68.1 85.8 67.2 86.2" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka20" fill="none"><animate attributeName="d" values="M67.2 86.2 C66.3 86.6 65.7 87.6 64.8 89;M67.2 86.2 C66.3 86.6 65.7 87.6 64.8 89;M67.2 86.2 C66.3 86.6 65.7 87.6 64.8 89;M67.2 86.2 C66.3 86.6 65.7 87.6 64.8 89;M67.3 88.8 C66.2 89.2 65.2 90.1 64.1 91.2;M67 96.1 C65.6 96.1 64.3 96.5 62.8 97.2;M66.5 105.1 C65 104.8 63.4 104.8 61.7 104.9;M64.9 114.9 C63.3 114.4 61.6 114.1 60 113.8;M63.4 123.9 C61.7 123.4 60.1 122.8 58.4 122.4;M62.6 133.7 C60.8 133.3 59.1 132.8 57.4 132.3;M61.8 136.6 C60 136.1 58.2 135.6 56.4 135;M61.5 139.7 C59.6 139.2 57.8 138.6 56 137.9;M60.4 143 C58.5 142.4 56.6 141.7 54.7 141;M60.4 143 C58.5 142.4 56.6 141.7 54.7 141;M60.4 143 C58.5 142.4 56.6 141.7 54.7 141;M60.4 143 C58.5 142.4 56.6 141.7 54.7 141;M60.4 143 C58.5 142.4 56.6 141.7 54.7 141;M60.4 143 C58.5 142.4 56.6 141.7 54.7 141;M61.8 136.6 C60 136.1 58.2 135.6 56.4 135;M62.9 127.8 C61.2 127.3 59.5 126.7 57.8 126.3;M64.9 114.9 C63.3 114.4 61.6 114.1 60 113.8;M66.9 100.3 C65.4 100.1 63.9 100.3 62.3 100.7;M67.3 88.8 C66.2 89.2 65.2 90.1 64.1 91.2;M67.2 86.2 C66.3 86.6 65.7 87.6 64.8 89;M67.2 86.2 C66.3 86.6 65.7 87.6 64.8 89" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka21" fill="none"><animate attributeName="d" values="M64.8 89 C63.9 90.4 63.2 92.5 62 94.5;M64.8 89 C63.9 90.4 63.2 92.5 62 94.5;M64.8 89 C63.9 90.4 63.2 92.5 62 94.5;M64.8 89 C63.9 90.4 63.2 92.5 62 94.5;M64.1 91.2 C63 92.4 62 94.2 60.6 95.8;M62.8 97.2 C61.3 97.8 59.8 98.8 58.2 99.8;M61.7 104.9 C60.1 105 58.4 105.4 56.6 105.7;M60 113.8 C58.3 113.5 56.6 113.4 54.9 113.3;M58.4 122.4 C56.7 121.9 55 121.5 53.3 121.1;M57.4 132.3 C55.6 131.8 53.9 131.2 52.2 130.6;M56.4 135 C54.6 134.3 52.9 133.6 51.2 132.9;M56 137.9 C54.2 137.2 52.4 136.5 50.7 135.7;M54.7 141 C52.8 140.2 51 139.3 49.2 138.4;M54.7 141 C52.8 140.2 51 139.3 49.2 138.4;M54.7 141 C52.8 140.2 51 139.3 49.2 138.4;M54.7 141 C52.8 140.2 51 139.3 49.2 138.4;M54.7 141 C52.8 140.2 51 139.3 49.2 138.4;M54.7 141 C52.8 140.2 51 139.3 49.2 138.4;M56.4 135 C54.6 134.3 52.9 133.6 51.2 132.9;M57.8 126.3 C56.1 125.8 54.4 125.3 52.7 124.8;M60 113.8 C58.3 113.5 56.6 113.4 54.9 113.3;M62.3 100.7 C60.7 101.1 59.1 101.7 57.4 102.5;M64.1 91.2 C63 92.4 62 94.2 60.6 95.8;M64.8 89 C63.9 90.4 63.2 92.5 62 94.5;M64.8 89 C63.9 90.4 63.2 92.5 62 94.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka22" fill="none"><animate attributeName="d" values="M62 94.5 C60.9 96.5 59.6 98.9 58 100.9;M62 94.5 C60.9 96.5 59.6 98.9 58 100.9;M62 94.5 C60.9 96.5 59.6 98.9 58 100.9;M62 94.5 C60.9 96.5 59.6 98.9 58 100.9;M60.6 95.8 C59.3 97.5 57.8 99.6 56.1 101.2;M58.2 99.8 C56.6 100.8 54.8 102.2 53 103.2;M56.6 105.7 C54.8 106.1 53 106.7 51.1 107.1;M54.9 113.3 C53.1 113.2 51.4 113.2 49.6 113.2;M53.3 121.1 C51.6 120.7 49.9 120.4 48.1 120;M52.2 130.6 C50.5 130 48.9 129.3 47.2 128.6;M51.2 132.9 C49.4 132.1 47.8 131.3 46.1 130.4;M50.7 135.7 C48.9 134.9 47.2 134 45.6 133;M49.2 138.4 C47.5 137.5 45.7 136.4 44.1 135.4;M49.2 138.4 C47.5 137.5 45.7 136.4 44.1 135.4;M49.2 138.4 C47.5 137.5 45.7 136.4 44.1 135.4;M49.2 138.4 C47.5 137.5 45.7 136.4 44.1 135.4;M49.2 138.4 C47.5 137.5 45.7 136.4 44.1 135.4;M49.2 138.4 C47.5 137.5 45.7 136.4 44.1 135.4;M51.2 132.9 C49.4 132.1 47.8 131.3 46.1 130.4;M52.7 124.8 C50.9 124.3 49.2 123.9 47.5 123.4;M54.9 113.3 C53.1 113.2 51.4 113.2 49.6 113.2;M57.4 102.5 C55.6 103.2 53.8 104.1 51.9 104.9;M60.6 95.8 C59.3 97.5 57.8 99.6 56.1 101.2;M62 94.5 C60.9 96.5 59.6 98.9 58 100.9;M62 94.5 C60.9 96.5 59.6 98.9 58 100.9" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka23" fill="none"><animate attributeName="d" values="M58 100.9 C56.4 102.8 54.5 104.9 52.4 106.3;M58 100.9 C56.4 102.8 54.5 104.9 52.4 106.3;M58 100.9 C56.4 102.8 54.5 104.9 52.4 106.3;M58 100.9 C56.4 102.8 54.5 104.9 52.4 106.3;M56.1 101.2 C54.4 102.9 52.4 104.6 50.4 105.8;M53 103.2 C51.1 104.3 49.1 105.5 47 106.2;M51.1 107.1 C49.2 107.6 47.2 108.2 45.1 108.5;M49.6 113.2 C47.7 113.1 45.9 113.2 44 113.1;M48.1 120 C46.4 119.6 44.6 119.3 42.9 118.9;M47.2 128.6 C45.6 127.8 44 127 42.4 126.1;M46.1 130.4 C44.5 129.6 42.9 128.6 41.3 127.6;M45.6 133 C44 132.1 42.3 131 40.8 130;M44.1 135.4 C42.4 134.3 40.8 133.1 39.3 131.9;M44.1 135.4 C42.4 134.3 40.8 133.1 39.3 131.9;M44.1 135.4 C42.4 134.3 40.8 133.1 39.3 131.9;M44.1 135.4 C42.4 134.3 40.8 133.1 39.3 131.9;M44.1 135.4 C42.4 134.3 40.8 133.1 39.3 131.9;M44.1 135.4 C42.4 134.3 40.8 133.1 39.3 131.9;M46.1 130.4 C44.5 129.6 42.9 128.6 41.3 127.6;M47.5 123.4 C45.8 122.9 44 122.4 42.3 121.8;M49.6 113.2 C47.7 113.1 45.9 113.2 44 113.1;M51.9 104.9 C50 105.7 48 106.6 45.9 107.1;M56.1 101.2 C54.4 102.9 52.4 104.6 50.4 105.8;M58 100.9 C56.4 102.8 54.5 104.9 52.4 106.3;M58 100.9 C56.4 102.8 54.5 104.9 52.4 106.3" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka24" fill="none"><animate attributeName="d" values="M52.4 106.3 C50.3 107.6 47.8 108.6 45.3 109;M52.4 106.3 C50.3 107.6 47.8 108.6 45.3 109;M52.4 106.3 C50.3 107.6 47.8 108.6 45.3 109;M52.4 106.3 C50.3 107.6 47.8 108.6 45.3 109;M50.4 105.8 C48.3 107 45.9 107.9 43.6 108.2;M47 106.2 C44.9 107 42.7 107.6 40.5 107.7;M45.1 108.5 C43.1 108.8 41 109.2 38.9 109.1;M44 113.1 C42.2 113 40.2 112.9 38.4 112.5;M42.9 118.9 C41.2 118.5 39.4 118 37.7 117.4;M42.4 126.1 C40.8 125.2 39.3 124.3 37.8 123.3;M41.3 127.6 C39.8 126.6 38.3 125.5 36.8 124.4;M40.8 130 C39.3 128.9 37.8 127.7 36.3 126.5;M39.3 131.9 C37.7 130.7 36.2 129.4 34.8 128.1;M39.3 131.9 C37.7 130.7 36.2 129.4 34.8 128.1;M39.3 131.9 C37.7 130.7 36.2 129.4 34.8 128.1;M39.3 131.9 C37.7 130.7 36.2 129.4 34.8 128.1;M39.3 131.9 C37.7 130.7 36.2 129.4 34.8 128.1;M39.3 131.9 C37.7 130.7 36.2 129.4 34.8 128.1;M41.3 127.6 C39.8 126.6 38.3 125.5 36.8 124.4;M42.3 121.8 C40.6 121.3 38.9 120.7 37.3 119.9;M44 113.1 C42.2 113 40.2 112.9 38.4 112.5;M45.9 107.1 C43.8 107.7 41.6 108.2 39.5 108.2;M50.4 105.8 C48.3 107 45.9 107.9 43.6 108.2;M52.4 106.3 C50.3 107.6 47.8 108.6 45.3 109;M52.4 106.3 C50.3 107.6 47.8 108.6 45.3 109" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka25" fill="none"><animate attributeName="d" values="M45.3 109 C42.9 109.4 40.3 109.3 37.8 108.6;M45.3 109 C42.9 109.4 40.3 109.3 37.8 108.6;M45.3 109 C42.9 109.4 40.3 109.3 37.8 108.6;M45.3 109 C42.9 109.4 40.3 109.3 37.8 108.6;M43.6 108.2 C41.3 108.5 38.7 108.3 36.5 107.6;M40.5 107.7 C38.4 107.9 36.1 107.7 34 107.1;M38.9 109.1 C36.9 109.1 34.7 108.9 32.8 108.3;M38.4 112.5 C36.5 112.2 34.6 111.8 32.8 111.1;M37.7 117.4 C36 116.8 34.2 116.2 32.6 115.3;M37.8 123.3 C36.3 122.3 34.9 121.2 33.5 120;M36.8 124.4 C35.4 123.3 34 122.1 32.6 120.9;M36.3 126.5 C34.9 125.3 33.5 124.1 32.2 122.7;M34.8 128.1 C33.4 126.8 32.1 125.4 30.8 124;M34.8 128.1 C33.4 126.8 32.1 125.4 30.8 124;M34.8 128.1 C33.4 126.8 32.1 125.4 30.8 124;M34.8 128.1 C33.4 126.8 32.1 125.4 30.8 124;M34.8 128.1 C33.4 126.8 32.1 125.4 30.8 124;M34.8 128.1 C33.4 126.8 32.1 125.4 30.8 124;M36.8 124.4 C35.4 123.3 34 122.1 32.6 120.9;M37.3 119.9 C35.6 119.2 34 118.4 32.5 117.4;M38.4 112.5 C36.5 112.2 34.6 111.8 32.8 111.1;M39.5 108.2 C37.4 108.3 35.2 108.1 33.3 107.5;M43.6 108.2 C41.3 108.5 38.7 108.3 36.5 107.6;M45.3 109 C42.9 109.4 40.3 109.3 37.8 108.6;M45.3 109 C42.9 109.4 40.3 109.3 37.8 108.6" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka26" fill="none"><animate attributeName="d" values="M37.8 108.6 C35.4 107.9 32.9 106.6 30.8 104.9;M37.8 108.6 C35.4 107.9 32.9 106.6 30.8 104.9;M37.8 108.6 C35.4 107.9 32.9 106.6 30.8 104.9;M37.8 108.6 C35.4 107.9 32.9 106.6 30.8 104.9;M36.5 107.6 C34.2 106.9 31.8 105.7 29.9 104;M34 107.1 C32 106.4 30 105.3 28.4 103.9;M32.8 108.3 C30.9 107.7 29.1 106.8 27.5 105.6;M32.8 111.1 C31 110.4 29.3 109.5 27.8 108.4;M32.6 115.3 C31 114.4 29.5 113.4 28.1 112.3;M33.5 120 C32.1 118.8 30.8 117.6 29.5 116.3;M32.6 120.9 C31.3 119.6 30 118.3 28.8 117;M32.2 122.7 C30.9 121.4 29.6 120.1 28.4 118.6;M30.8 124 C29.5 122.6 28.3 121.1 27.2 119.6;M30.8 124 C29.5 122.6 28.3 121.1 27.2 119.6;M30.8 124 C29.5 122.6 28.3 121.1 27.2 119.6;M30.8 124 C29.5 122.6 28.3 121.1 27.2 119.6;M30.8 124 C29.5 122.6 28.3 121.1 27.2 119.6;M30.8 124 C29.5 122.6 28.3 121.1 27.2 119.6;M32.6 120.9 C31.3 119.6 30 118.3 28.8 117;M32.5 117.4 C31 116.4 29.5 115.4 28.2 114.2;M32.8 111.1 C31 110.4 29.3 109.5 27.8 108.4;M33.3 107.5 C31.3 106.9 29.4 105.9 27.8 104.6;M36.5 107.6 C34.2 106.9 31.8 105.7 29.9 104;M37.8 108.6 C35.4 107.9 32.9 106.6 30.8 104.9;M37.8 108.6 C35.4 107.9 32.9 106.6 30.8 104.9" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka27" fill="none"><animate attributeName="d" values="M30.8 104.9 C28.6 103.1 26.6 100.8 25.2 98.3;M30.8 104.9 C28.6 103.1 26.6 100.8 25.2 98.3;M30.8 104.9 C28.6 103.1 26.6 100.8 25.2 98.3;M30.8 104.9 C28.6 103.1 26.6 100.8 25.2 98.3;M29.9 104 C28 102.4 26.2 100.2 24.9 97.9;M28.4 103.9 C26.7 102.5 25.2 100.7 24.2 98.7;M27.5 105.6 C26 104.4 24.6 102.8 23.6 101.1;M27.8 108.4 C26.3 107.3 24.9 105.9 23.8 104.4;M28.1 112.3 C26.7 111.1 25.4 109.7 24.3 108.3;M29.5 116.3 C28.3 115 27.1 113.6 26 112.2;M28.8 117 C27.6 115.7 26.5 114.3 25.4 112.8;M28.4 118.6 C27.2 117.2 26.1 115.8 25 114.3;M27.2 119.6 C26 118.1 25 116.5 24 114.9;M27.2 119.6 C26 118.1 25 116.5 24 114.9;M27.2 119.6 C26 118.1 25 116.5 24 114.9;M27.2 119.6 C26 118.1 25 116.5 24 114.9;M27.2 119.6 C26 118.1 25 116.5 24 114.9;M27.2 119.6 C26 118.1 25 116.5 24 114.9;M28.8 117 C27.6 115.7 26.5 114.3 25.4 112.8;M28.2 114.2 C26.9 112.9 25.6 111.5 24.6 110.1;M27.8 108.4 C26.3 107.3 24.9 105.9 23.8 104.4;M27.8 104.6 C26.2 103.4 24.8 101.6 23.8 99.8;M29.9 104 C28 102.4 26.2 100.2 24.9 97.9;M30.8 104.9 C28.6 103.1 26.6 100.8 25.2 98.3;M30.8 104.9 C28.6 103.1 26.6 100.8 25.2 98.3" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka28" fill="none"><animate attributeName="d" values="M25.2 98.3 C23.8 95.8 22.7 92.8 22.2 90;M25.2 98.3 C23.8 95.8 22.7 92.8 22.2 90;M25.2 98.3 C23.8 95.8 22.7 92.8 22.2 90;M25.2 98.3 C23.8 95.8 22.7 92.8 22.2 90;M24.9 97.9 C23.6 95.6 22.7 92.8 22.2 90.2;M24.2 98.7 C23.1 96.8 22.4 94.4 22 92.2;M23.6 101.1 C22.6 99.4 21.9 97.4 21.5 95.5;M23.8 104.4 C22.7 102.9 21.9 101.1 21.3 99.3;M24.3 108.3 C23.2 106.8 22.3 105.2 21.6 103.5;M26 112.2 C24.9 110.8 23.9 109.3 23 107.8;M25.4 112.8 C24.3 111.4 23.3 109.9 22.4 108.4;M25 114.3 C24 112.8 23 111.2 22.1 109.6;M24 114.9 C23 113.3 22.1 111.7 21.2 110.1;M24 114.9 C23 113.3 22.1 111.7 21.2 110.1;M24 114.9 C23 113.3 22.1 111.7 21.2 110.1;M24 114.9 C23 113.3 22.1 111.7 21.2 110.1;M24 114.9 C23 113.3 22.1 111.7 21.2 110.1;M24 114.9 C23 113.3 22.1 111.7 21.2 110.1;M25.4 112.8 C24.3 111.4 23.3 109.9 22.4 108.4;M24.6 110.1 C23.5 108.6 22.6 106.9 21.9 105.3;M23.8 104.4 C22.7 102.9 21.9 101.1 21.3 99.3;M23.8 99.8 C22.8 98 22.1 95.9 21.7 93.8;M24.9 97.9 C23.6 95.6 22.7 92.8 22.2 90.2;M25.2 98.3 C23.8 95.8 22.7 92.8 22.2 90;M25.2 98.3 C23.8 95.8 22.7 92.8 22.2 90" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka29" fill="none"><animate attributeName="d" values="M22.2 90 C21.7 87.1 21.7 83.9 22.2 81.1;M22.2 90 C21.7 87.1 21.7 83.9 22.2 81.1;M22.2 90 C21.7 87.1 21.7 83.9 22.2 81.1;M22.2 90 C21.7 87.1 21.7 83.9 22.2 81.1;M22.2 90.2 C21.8 87.6 21.8 84.7 22.3 82.1;M22 92.2 C21.6 90 21.7 87.6 22 85.4;M21.5 95.5 C21.2 93.5 21.1 91.3 21.4 89.4;M21.3 99.3 C20.8 97.5 20.5 95.5 20.5 93.6;M21.6 103.5 C20.9 101.8 20.4 99.9 20.1 98.1;M23 107.8 C22.1 106.3 21.2 104.7 20.5 103.1;M22.4 108.4 C21.4 106.9 20.5 105.4 19.8 103.8;M22.1 109.6 C21.1 108.1 20.3 106.4 19.5 104.8;M21.2 110.1 C20.4 108.4 19.6 106.7 18.9 105;M21.2 110.1 C20.4 108.4 19.6 106.7 18.9 105;M21.2 110.1 C20.4 108.4 19.6 106.7 18.9 105;M21.2 110.1 C20.4 108.4 19.6 106.7 18.9 105;M21.2 110.1 C20.4 108.4 19.6 106.7 18.9 105;M21.2 110.1 C20.4 108.4 19.6 106.7 18.9 105;M22.4 108.4 C21.4 106.9 20.5 105.4 19.8 103.8;M21.9 105.3 C21.2 103.6 20.6 101.9 20.2 100.1;M21.3 99.3 C20.8 97.5 20.5 95.5 20.5 93.6;M21.7 93.8 C21.4 91.7 21.4 89.4 21.8 87.4;M22.2 90.2 C21.8 87.6 21.8 84.7 22.3 82.1;M22.2 90 C21.7 87.1 21.7 83.9 22.2 81.1;M22.2 90 C21.7 87.1 21.7 83.9 22.2 81.1" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka30" fill="none"><animate attributeName="d" values="M22.2 81.1 C22.7 78.4 23.9 75.6 25.3 73.3;M22.2 81.1 C22.7 78.4 23.9 75.6 25.3 73.3;M22.2 81.1 C22.7 78.4 23.9 75.6 25.3 73.3;M22.2 81.1 C22.7 78.4 23.9 75.6 25.3 73.3;M22.3 82.1 C22.7 79.6 23.7 77 25 75;M22 85.4 C22.4 83.3 23.2 81.1 24.1 79.3;M21.4 89.4 C21.6 87.5 22.3 85.5 23 83.9;M20.5 93.6 C20.5 91.8 20.8 89.9 21.3 88.2;M20.1 98.1 C19.8 96.3 19.7 94.4 19.8 92.7;M20.5 103.1 C19.7 101.5 19.1 99.9 18.5 98.2;M19.8 103.8 C19 102.2 18.3 100.6 17.6 99;M19.5 104.8 C18.8 103.1 18.1 101.5 17.5 99.8;M18.9 105 C18.2 103.3 17.6 101.6 17.1 99.9;M18.9 105 C18.2 103.3 17.6 101.6 17.1 99.9;M18.9 105 C18.2 103.3 17.6 101.6 17.1 99.9;M18.9 105 C18.2 103.3 17.6 101.6 17.1 99.9;M18.9 105 C18.2 103.3 17.6 101.6 17.1 99.9;M18.9 105 C18.2 103.3 17.6 101.6 17.1 99.9;M19.8 103.8 C19 102.2 18.3 100.6 17.6 99;M20.2 100.1 C19.8 98.4 19.5 96.6 19.4 94.8;M20.5 93.6 C20.5 91.8 20.8 89.9 21.3 88.2;M21.8 87.4 C22.1 85.3 22.8 83.3 23.6 81.6;M22.3 82.1 C22.7 79.6 23.7 77 25 75;M22.2 81.1 C22.7 78.4 23.9 75.6 25.3 73.3;M22.2 81.1 C22.7 78.4 23.9 75.6 25.3 73.3" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka31" fill="none"><animate attributeName="d" values="M25.3 73.3 C26.7 71.1 28.7 69.1 30.7 67.8;M25.3 73.3 C26.7 71.1 28.7 69.1 30.7 67.8;M25.3 73.3 C26.7 71.1 28.7 69.1 30.7 67.8;M25.3 73.3 C26.7 71.1 28.7 69.1 30.7 67.8;M25 75 C26.2 72.9 28 71.1 29.7 69.9;M24.1 79.3 C25.1 77.5 26.4 75.9 27.8 74.8;M23 83.9 C23.8 82.2 24.8 80.7 25.9 79.5;M21.3 88.2 C21.8 86.5 22.5 84.9 23.3 83.5;M19.8 92.7 C19.9 90.9 20.2 89.2 20.5 87.6;M18.5 98.2 C17.9 96.6 17.4 94.9 17 93.3;M17.6 99 C17 97.4 16.4 95.7 16 94;M17.5 99.8 C16.9 98.1 16.3 96.3 15.9 94.6;M17.1 99.9 C16.5 98.2 16 96.4 15.6 94.6;M17.1 99.9 C16.5 98.2 16 96.4 15.6 94.6;M17.1 99.9 C16.5 98.2 16 96.4 15.6 94.6;M17.1 99.9 C16.5 98.2 16 96.4 15.6 94.6;M17.1 99.9 C16.5 98.2 16 96.4 15.6 94.6;M17.1 99.9 C16.5 98.2 16 96.4 15.6 94.6;M17.6 99 C17 97.4 16.4 95.7 16 94;M19.4 94.8 C19.3 93.1 19.3 91.4 19.4 89.7;M21.3 88.2 C21.8 86.5 22.5 84.9 23.3 83.5;M23.6 81.6 C24.5 79.9 25.7 78.3 26.9 77.1;M25 75 C26.2 72.9 28 71.1 29.7 69.9;M25.3 73.3 C26.7 71.1 28.7 69.1 30.7 67.8;M25.3 73.3 C26.7 71.1 28.7 69.1 30.7 67.8" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka32" fill="none"><animate attributeName="d" values="M30.7 67.8 C32.8 66.5 35.3 65.6 37.5 65.4;M30.7 67.8 C32.8 66.5 35.3 65.6 37.5 65.4;M30.7 67.8 C32.8 66.5 35.3 65.6 37.5 65.4;M30.7 67.8 C32.8 66.5 35.3 65.6 37.5 65.4;M29.7 69.9 C31.5 68.6 33.7 67.9 35.6 67.6;M27.8 74.8 C29.1 73.6 30.7 72.7 32.2 72.3;M25.9 79.5 C27 78.3 28.2 77.3 29.4 76.6;M23.3 83.5 C24.1 82.2 25.1 81 26 80;M20.5 87.6 C20.9 86 21.5 84.5 22 83.2;M17 93.3 C16.6 91.6 16.3 89.9 16 88.3;M16 94 C15.5 92.3 15.1 90.6 14.8 88.9;M15.9 94.6 C15.4 92.8 15.1 91.1 14.8 89.3;M15.6 94.6 C15.2 92.9 14.9 91.1 14.7 89.3;M15.6 94.6 C15.2 92.9 14.9 91.1 14.7 89.3;M15.6 94.6 C15.2 92.9 14.9 91.1 14.7 89.3;M15.6 94.6 C15.2 92.9 14.9 91.1 14.7 89.3;M15.6 94.6 C15.2 92.9 14.9 91.1 14.7 89.3;M15.6 94.6 C15.2 92.9 14.9 91.1 14.7 89.3;M16 94 C15.5 92.3 15.1 90.6 14.8 88.9;M19.4 89.7 C19.5 88.1 19.8 86.5 20.1 85;M23.3 83.5 C24.1 82.2 25.1 81 26 80;M26.9 77.1 C28.1 75.9 29.6 75 30.9 74.5;M29.7 69.9 C31.5 68.6 33.7 67.9 35.6 67.6;M30.7 67.8 C32.8 66.5 35.3 65.6 37.5 65.4;M30.7 67.8 C32.8 66.5 35.3 65.6 37.5 65.4" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka33" fill="none"><animate attributeName="d" values="M37.5 65.4 C39.7 65.2 42 65.7 43.9 66.6;M37.5 65.4 C39.7 65.2 42 65.7 43.9 66.6;M37.5 65.4 C39.7 65.2 42 65.7 43.9 66.6;M37.5 65.4 C39.7 65.2 42 65.7 43.9 66.6;M35.6 67.6 C37.5 67.4 39.6 67.7 41.3 68.4;M32.2 72.3 C33.7 71.8 35.3 71.8 36.6 72.1;M29.4 76.6 C30.5 75.9 31.7 75.6 32.8 75.3;M26 80 C26.8 79 27.8 78.3 28.6 77.7;M22 83.2 C22.6 81.9 23.2 80.7 23.8 79.7;M16 88.3 C15.8 86.6 15.6 84.9 15.5 83.3;M14.8 88.9 C14.5 87.2 14.3 85.5 14.2 83.8;M14.8 89.3 C14.5 87.5 14.3 85.8 14.1 84;M14.7 89.3 C14.4 87.5 14.2 85.8 14.1 84;M14.7 89.3 C14.4 87.5 14.2 85.8 14.1 84;M14.7 89.3 C14.4 87.5 14.2 85.8 14.1 84;M14.7 89.3 C14.4 87.5 14.2 85.8 14.1 84;M14.7 89.3 C14.4 87.5 14.2 85.8 14.1 84;M14.7 89.3 C14.4 87.5 14.2 85.8 14.1 84;M14.8 88.9 C14.5 87.2 14.3 85.5 14.2 83.8;M20.1 85 C20.3 83.5 20.7 82.2 21 80.9;M26 80 C26.8 79 27.8 78.3 28.6 77.7;M30.9 74.5 C32.2 73.9 33.6 73.6 34.8 73.6;M35.6 67.6 C37.5 67.4 39.6 67.7 41.3 68.4;M37.5 65.4 C39.7 65.2 42 65.7 43.9 66.6;M37.5 65.4 C39.7 65.2 42 65.7 43.9 66.6" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka34" fill="none"><animate attributeName="d" values="M43.9 66.6 C45.7 67.6 47.4 69.3 48.6 71;M43.9 66.6 C45.7 67.6 47.4 69.3 48.6 71;M43.9 66.6 C45.7 67.6 47.4 69.3 48.6 71;M43.9 66.6 C45.7 67.6 47.4 69.3 48.6 71;M41.3 68.4 C43 69.1 44.5 70.5 45.7 71.9;M36.6 72.1 C37.9 72.3 39.2 72.9 40.2 73.6;M32.8 75.3 C33.8 75.1 34.8 75.1 35.6 75.2;M28.6 77.7 C29.4 77.1 30.2 76.7 30.8 76.3;M23.8 79.7 C24.4 78.6 25 77.7 25.4 76.9;M15.5 83.3 C15.4 81.6 15.4 79.9 15.4 78.3;M14.2 83.8 C14 82 14 80.3 14 78.6;M14.1 84 C14 82.2 14 80.4 14 78.6;M14.1 84 C14 82.2 14 80.4 14 78.6;M14.1 84 C14 82.2 14 80.4 14 78.6;M14.1 84 C14 82.2 14 80.4 14 78.6;M14.1 84 C14 82.2 14 80.4 14 78.6;M14.1 84 C14 82.2 14 80.4 14 78.6;M14.1 84 C14 82.2 14 80.4 14 78.6;M14.2 83.8 C14 82 14 80.3 14 78.6;M21 80.9 C21.4 79.7 21.8 78.5 22.1 77.4;M28.6 77.7 C29.4 77.1 30.2 76.7 30.8 76.3;M34.8 73.6 C36 73.6 37.1 73.9 38 74.3;M41.3 68.4 C43 69.1 44.5 70.5 45.7 71.9;M43.9 66.6 C45.7 67.6 47.4 69.3 48.6 71;M43.9 66.6 C45.7 67.6 47.4 69.3 48.6 71" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka35" fill="none"><animate attributeName="d" values="M48.6 71 C49.8 72.6 50.7 74.8 51.3 76.7;M48.6 71 C49.8 72.6 50.7 74.8 51.3 76.7;M48.6 71 C49.8 72.6 50.7 74.8 51.3 76.7;M48.6 71 C49.8 72.6 50.7 74.8 51.3 76.7;M45.7 71.9 C46.8 73.3 47.7 75.2 48.2 76.8;M40.2 73.6 C41.2 74.3 42 75.4 42.4 76.3;M35.6 75.2 C36.4 75.3 37 75.7 37.4 75.9;M30.8 76.3 C31.4 76 31.8 75.8 32.2 75.5;M25.4 76.9 C25.9 76 26.2 75.3 26.5 74.4;M15.4 78.3 C15.4 76.6 15.5 74.9 15.7 73.3;M14 78.6 C14.1 76.9 14.2 75.1 14.4 73.4;M14 78.6 C14.1 76.8 14.2 75 14.4 73.2;M14 78.6 C14.1 76.8 14.2 75 14.3 73.2;M14 78.6 C14.1 76.8 14.2 75 14.3 73.2;M14 78.6 C14.1 76.8 14.2 75 14.3 73.2;M14 78.6 C14.1 76.8 14.2 75 14.3 73.2;M14 78.6 C14.1 76.8 14.2 75 14.3 73.2;M14 78.6 C14.1 76.8 14.2 75 14.3 73.2;M14 78.6 C14.1 76.9 14.2 75.1 14.4 73.4;M22.1 77.4 C22.4 76.2 22.6 75.2 22.9 74;M30.8 76.3 C31.4 76 31.8 75.8 32.2 75.5;M38 74.3 C38.9 74.7 39.6 75.4 40 76;M45.7 71.9 C46.8 73.3 47.7 75.2 48.2 76.8;M48.6 71 C49.8 72.6 50.7 74.8 51.3 76.7;M48.6 71 C49.8 72.6 50.7 74.8 51.3 76.7" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka36" fill="none"><animate attributeName="d" values="M51.3 76.7 C51.8 78.6 52 80.8 51.7 82.5;M51.3 76.7 C51.8 78.6 52 80.8 51.7 82.5;M51.3 76.7 C51.8 78.6 52 80.8 51.7 82.5;M51.3 76.7 C51.8 78.6 52 80.8 51.7 82.5;M48.2 76.8 C48.7 78.4 48.8 80.3 48.5 81.7;M42.4 76.3 C42.9 77.2 43.1 78.3 42.9 79.1;M37.4 75.9 C37.8 76.1 38 76.5 38 76.6;M32.2 75.5 C32.5 75.2 32.6 74.9 32.6 74.4;M26.5 74.4 C26.8 73.6 26.9 72.8 27 71.8;M15.7 73.3 C15.9 71.6 16.1 69.9 16.4 68.2;M14.4 73.4 C14.6 71.7 14.9 70 15.3 68.3;M14.4 73.2 C14.6 71.5 14.9 69.7 15.2 67.9;M14.3 73.2 C14.5 71.4 14.8 69.7 15.1 67.9;M14.3 73.2 C14.5 71.4 14.8 69.7 15.1 67.9;M14.3 73.2 C14.5 71.4 14.8 69.7 15.1 67.9;M14.3 73.2 C14.5 71.4 14.8 69.7 15.1 67.9;M14.3 73.2 C14.5 71.4 14.8 69.7 15.1 67.9;M14.3 73.2 C14.5 71.4 14.8 69.7 15.1 67.9;M14.4 73.4 C14.6 71.7 14.9 70 15.3 68.3;M22.9 74 C23.1 72.9 23.2 71.8 23.4 70.6;M32.2 75.5 C32.5 75.2 32.6 74.9 32.6 74.4;M40 76 C40.5 76.6 40.6 77.4 40.6 77.8;M48.2 76.8 C48.7 78.4 48.8 80.3 48.5 81.7;M51.3 76.7 C51.8 78.6 52 80.8 51.7 82.5;M51.3 76.7 C51.8 78.6 52 80.8 51.7 82.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka37" fill="none"><animate attributeName="d" values="M51.7 82.5 C51.4 84.2 50.5 85.8 49.3 86.8;M51.7 82.5 C51.4 84.2 50.5 85.8 49.3 86.8;M51.7 82.5 C51.4 84.2 50.5 85.8 49.3 86.8;M51.7 82.5 C51.4 84.2 50.5 85.8 49.3 86.8;M48.5 81.7 C48.2 83.1 47.5 84.4 46.5 85.2;M42.9 79.1 C42.8 79.9 42.3 80.6 41.6 80.9;M38 76.6 C37.9 76.8 37.6 76.9 37.2 76.6;M32.6 74.4 C32.6 73.9 32.4 73.4 32.2 72.6;M27 71.8 C27.1 70.8 27 69.8 27 68.5;M16.4 68.2 C16.7 66.6 17.1 64.9 17.5 63.2;M15.3 68.3 C15.6 66.6 16.1 64.9 16.6 63.2;M15.2 67.9 C15.6 66.2 16 64.4 16.6 62.7;M15.1 67.9 C15.4 66.1 15.9 64.4 16.3 62.6;M15.1 67.9 C15.4 66.1 15.9 64.4 16.3 62.6;M15.1 67.9 C15.4 66.1 15.9 64.4 16.3 62.6;M15.1 67.9 C15.4 66.1 15.9 64.4 16.3 62.6;M15.1 67.9 C15.4 66.1 15.9 64.4 16.3 62.6;M15.1 67.9 C15.4 66.1 15.9 64.4 16.3 62.6;M15.3 68.3 C15.6 66.6 16.1 64.9 16.6 63.2;M23.4 70.6 C23.5 69.3 23.6 68 23.7 66.6;M32.6 74.4 C32.6 73.9 32.4 73.4 32.2 72.6;M40.6 77.8 C40.5 78.3 40.1 78.7 39.5 78.8;M48.5 81.7 C48.2 83.1 47.5 84.4 46.5 85.2;M51.7 82.5 C51.4 84.2 50.5 85.8 49.3 86.8;M51.7 82.5 C51.4 84.2 50.5 85.8 49.3 86.8" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka38" fill="none"><animate attributeName="d" values="M49.3 86.8 C48 87.8 46.2 88.5 44.3 88.4;M49.3 86.8 C48 87.8 46.2 88.5 44.3 88.4;M49.3 86.8 C48 87.8 46.2 88.5 44.3 88.4;M49.3 86.8 C48 87.8 46.2 88.5 44.3 88.4;M46.5 85.2 C45.4 85.9 43.8 86.4 42.3 86.2;M41.6 80.9 C40.9 81.2 39.8 81.2 38.8 80.8;M37.2 76.6 C36.8 76.3 36.1 75.9 35.5 75;M32.2 72.6 C32 71.8 31.6 70.8 31.3 69.6;M27 68.5 C26.9 67.3 26.8 65.9 26.7 64.4;M17.5 63.2 C18 61.5 18.5 59.8 19.1 58.2;M16.6 63.2 C17.2 61.6 17.8 60 18.5 58.4;M16.6 62.7 C17.1 61 17.7 59.3 18.4 57.6;M16.3 62.6 C16.8 60.9 17.3 59.2 18 57.5;M16.3 62.6 C16.8 60.9 17.3 59.2 18 57.5;M16.3 62.6 C16.8 60.9 17.3 59.2 18 57.5;M16.3 62.6 C16.8 60.9 17.3 59.2 18 57.5;M16.3 62.6 C16.8 60.9 17.3 59.2 18 57.5;M16.3 62.6 C16.8 60.9 17.3 59.2 18 57.5;M16.6 63.2 C17.2 61.6 17.8 60 18.5 58.4;M23.7 66.6 C23.8 65.1 23.9 63.6 24 62;M32.2 72.6 C32 71.8 31.6 70.8 31.3 69.6;M39.5 78.8 C39 78.8 38.1 78.6 37.3 77.9;M46.5 85.2 C45.4 85.9 43.8 86.4 42.3 86.2;M49.3 86.8 C48 87.8 46.2 88.5 44.3 88.4;M49.3 86.8 C48 87.8 46.2 88.5 44.3 88.4" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka39" fill="none"><animate attributeName="d" values="M44.3 88.4 C42.5 88.4 40.1 87.7 38.3 86.4;M44.3 88.4 C42.5 88.4 40.1 87.7 38.3 86.4;M44.3 88.4 C42.5 88.4 40.1 87.7 38.3 86.4;M44.3 88.4 C42.5 88.4 40.1 87.7 38.3 86.4;M42.3 86.2 C40.8 86 38.9 85.3 37.5 84;M38.8 80.8 C37.8 80.3 36.4 79.4 35.4 78.1;M35.5 75 C34.9 74.2 34 73 33.4 71.6;M31.3 69.6 C31 68.4 30.6 66.9 30.3 65.3;M26.7 64.4 C26.6 62.9 26.5 61.2 26.6 59.5;M19.1 58.2 C19.7 56.5 20.4 54.9 21.2 53.3;M18.5 58.4 C19.2 56.7 20 55.2 20.8 53.6;M18.4 57.6 C19.1 55.9 19.8 54.3 20.6 52.7;M18 57.5 C18.6 55.7 19.3 54.1 20.1 52.4;M18 57.5 C18.6 55.7 19.3 54.1 20.1 52.4;M18 57.5 C18.6 55.7 19.3 54.1 20.1 52.4;M18 57.5 C18.6 55.7 19.3 54.1 20.1 52.4;M18 57.5 C18.6 55.7 19.3 54.1 20.1 52.4;M18 57.5 C18.6 55.7 19.3 54.1 20.1 52.4;M18.5 58.4 C19.2 56.7 20 55.2 20.8 53.6;M24 62 C24.2 60.4 24.3 58.6 24.6 56.9;M31.3 69.6 C31 68.4 30.6 66.9 30.3 65.3;M37.3 77.9 C36.4 77.3 35.3 76.3 34.5 74.9;M42.3 86.2 C40.8 86 38.9 85.3 37.5 84;M44.3 88.4 C42.5 88.4 40.1 87.7 38.3 86.4;M44.3 88.4 C42.5 88.4 40.1 87.7 38.3 86.4" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka40" fill="none"><animate attributeName="d" values="M38.3 86.4 C36.5 85.2 34.7 83.1 33.6 80.8;M38.3 86.4 C36.5 85.2 34.7 83.1 33.6 80.8;M38.3 86.4 C36.5 85.2 34.7 83.1 33.6 80.8;M38.3 86.4 C36.5 85.2 34.7 83.1 33.6 80.8;M37.5 84 C36 82.8 34.4 80.9 33.5 78.8;M35.4 78.1 C34.4 76.8 33.3 75.1 32.7 73.2;M33.4 71.6 C32.7 70.1 32 68.3 31.7 66.5;M30.3 65.3 C30 63.7 29.8 61.9 29.7 60.1;M26.6 59.5 C26.7 57.8 26.8 55.9 27.1 54.1;M21.2 53.3 C22 51.7 22.8 50.1 23.8 48.6;M20.8 53.6 C21.7 52.1 22.6 50.6 23.6 49.1;M20.6 52.7 C21.5 51.1 22.4 49.5 23.4 47.9;M20.1 52.4 C20.8 50.7 21.7 49.1 22.6 47.5;M20.1 52.4 C20.8 50.7 21.7 49.1 22.6 47.5;M20.1 52.4 C20.8 50.7 21.7 49.1 22.6 47.5;M20.1 52.4 C20.8 50.7 21.7 49.1 22.6 47.5;M20.1 52.4 C20.8 50.7 21.7 49.1 22.6 47.5;M20.1 52.4 C20.8 50.7 21.7 49.1 22.6 47.5;M20.8 53.6 C21.7 52.1 22.6 50.6 23.6 49.1;M24.6 56.9 C24.9 55.1 25.3 53.3 25.8 51.6;M30.3 65.3 C30 63.7 29.8 61.9 29.7 60.1;M34.5 74.9 C33.7 73.6 32.8 71.8 32.2 70;M37.5 84 C36 82.8 34.4 80.9 33.5 78.8;M38.3 86.4 C36.5 85.2 34.7 83.1 33.6 80.8;M38.3 86.4 C36.5 85.2 34.7 83.1 33.6 80.8" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka41" fill="none"><animate attributeName="d" values="M33.6 80.8 C32.4 78.5 31.6 75.6 31.5 72.9;M33.6 80.8 C32.4 78.5 31.6 75.6 31.5 72.9;M33.6 80.8 C32.4 78.5 31.6 75.6 31.5 72.9;M33.6 80.8 C32.4 78.5 31.6 75.6 31.5 72.9;M33.5 78.8 C32.5 76.8 31.8 74.1 31.6 71.6;M32.7 73.2 C32 71.3 31.6 69 31.5 66.9;M31.7 66.5 C31.3 64.7 31.1 62.5 31.2 60.6;M29.7 60.1 C29.7 58.2 29.8 56.2 30.1 54.4;M27.1 54.1 C27.4 52.3 27.8 50.4 28.5 48.7;M23.8 48.6 C24.7 47 25.8 45.6 26.9 44.2;M23.6 49.1 C24.6 47.7 25.7 46.2 26.8 44.8;M23.4 47.9 C24.3 46.4 25.4 44.9 26.5 43.4;M22.6 47.5 C23.5 45.9 24.5 44.3 25.5 42.7;M22.6 47.5 C23.5 45.9 24.5 44.3 25.5 42.7;M22.6 47.5 C23.5 45.9 24.5 44.3 25.5 42.7;M22.6 47.5 C23.5 45.9 24.5 44.3 25.5 42.7;M22.6 47.5 C23.5 45.9 24.5 44.3 25.5 42.7;M22.6 47.5 C23.5 45.9 24.5 44.3 25.5 42.7;M23.6 49.1 C24.6 47.7 25.7 46.2 26.8 44.8;M25.8 51.6 C26.4 49.8 27 48.1 27.8 46.4;M29.7 60.1 C29.7 58.2 29.8 56.2 30.1 54.4;M32.2 70 C31.7 68.1 31.3 65.9 31.3 63.9;M33.5 78.8 C32.5 76.8 31.8 74.1 31.6 71.6;M33.6 80.8 C32.4 78.5 31.6 75.6 31.5 72.9;M33.6 80.8 C32.4 78.5 31.6 75.6 31.5 72.9" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka42" fill="none"><animate attributeName="d" values="M31.5 72.9 C31.3 70.1 31.6 67.1 32.4 64.4;M31.5 72.9 C31.3 70.1 31.6 67.1 32.4 64.4;M31.5 72.9 C31.3 70.1 31.6 67.1 32.4 64.4;M31.5 72.9 C31.3 70.1 31.6 67.1 32.4 64.4;M31.6 71.6 C31.5 69.1 31.8 66.3 32.5 63.9;M31.5 66.9 C31.5 64.7 31.8 62.3 32.5 60.3;M31.2 60.6 C31.3 58.6 31.6 56.5 32.2 54.8;M30.1 54.4 C30.4 52.5 31 50.7 31.8 49.1;M28.5 48.7 C29.1 47 29.9 45.4 30.9 44;M26.9 44.2 C28.1 42.8 29.3 41.5 30.6 40.3;M26.8 44.8 C27.9 43.5 29.2 42.1 30.4 40.9;M26.5 43.4 C27.6 42 28.8 40.6 30.1 39.2;M25.5 42.7 C26.6 41.2 27.7 39.7 28.9 38.2;M25.5 42.7 C26.6 41.2 27.7 39.7 28.9 38.2;M25.5 42.7 C26.6 41.2 27.7 39.7 28.9 38.2;M25.5 42.7 C26.6 41.2 27.7 39.7 28.9 38.2;M25.5 42.7 C26.6 41.2 27.7 39.7 28.9 38.2;M25.5 42.7 C26.6 41.2 27.7 39.7 28.9 38.2;M26.8 44.8 C27.9 43.5 29.2 42.1 30.4 40.9;M27.8 46.4 C28.6 44.8 29.6 43.2 30.7 41.9;M30.1 54.4 C30.4 52.5 31 50.7 31.8 49.1;M31.3 63.9 C31.4 61.8 31.7 59.6 32.3 57.7;M31.6 71.6 C31.5 69.1 31.8 66.3 32.5 63.9;M31.5 72.9 C31.3 70.1 31.6 67.1 32.4 64.4;M31.5 72.9 C31.3 70.1 31.6 67.1 32.4 64.4" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka43" fill="none"><animate attributeName="d" values="M32.4 64.4 C33.2 61.7 34.5 59 36 56.8;M32.4 64.4 C33.2 61.7 34.5 59 36 56.8;M32.4 64.4 C33.2 61.7 34.5 59 36 56.8;M32.4 64.4 C33.2 61.7 34.5 59 36 56.8;M32.5 63.9 C33.2 61.4 34.4 58.9 35.8 56.9;M32.5 60.3 C33.1 58.2 34.2 56.2 35.4 54.6;M32.2 54.8 C32.9 53.1 33.8 51.4 35 50.1;M31.8 49.1 C32.6 47.6 33.7 46.1 34.9 45.1;M30.9 44 C31.9 42.6 33.1 41.3 34.5 40.3;M30.6 40.3 C31.9 39.1 33.2 37.9 34.7 36.9;M30.4 40.9 C31.7 39.6 33 38.3 34.4 37.2;M30.1 39.2 C31.3 37.8 32.7 36.5 34 35.3;M28.9 38.2 C30.1 36.8 31.4 35.3 32.7 34;M28.9 38.2 C30.1 36.8 31.4 35.3 32.7 34;M28.9 38.2 C30.1 36.8 31.4 35.3 32.7 34;M28.9 38.2 C30.1 36.8 31.4 35.3 32.7 34;M28.9 38.2 C30.1 36.8 31.4 35.3 32.7 34;M28.9 38.2 C30.1 36.8 31.4 35.3 32.7 34;M30.4 40.9 C31.7 39.6 33 38.3 34.4 37.2;M30.7 41.9 C31.8 40.5 33.1 39.3 34.5 38.3;M31.8 49.1 C32.6 47.6 33.7 46.1 34.9 45.1;M32.3 57.7 C32.9 55.9 33.9 54 35.1 52.5;M32.5 63.9 C33.2 61.4 34.4 58.9 35.8 56.9;M32.4 64.4 C33.2 61.7 34.5 59 36 56.8;M32.4 64.4 C33.2 61.7 34.5 59 36 56.8" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka44" fill="none"><animate attributeName="d" values="M36 56.8 C37.5 54.6 39.5 52.7 41.5 51.2;M36 56.8 C37.5 54.6 39.5 52.7 41.5 51.2;M36 56.8 C37.5 54.6 39.5 52.7 41.5 51.2;M36 56.8 C37.5 54.6 39.5 52.7 41.5 51.2;M35.8 56.9 C37.1 54.9 39 53 40.9 51.6;M35.4 54.6 C36.6 53 38.2 51.6 39.8 50.5;M35 50.1 C36.1 48.8 37.6 47.7 39.1 47;M34.9 45.1 C36.1 44 37.6 43.1 39.1 42.6;M34.5 40.3 C35.8 39.3 37.3 38.6 38.9 38;M34.7 36.9 C36.1 35.9 37.6 34.9 39.2 34.1;M34.4 37.2 C35.8 36 37.2 34.9 38.7 33.8;M34 35.3 C35.4 34 36.8 32.8 38.3 31.7;M32.7 34 C34 32.6 35.4 31.3 36.9 30;M32.7 34 C34 32.6 35.4 31.3 36.9 30;M32.7 34 C34 32.6 35.4 31.3 36.9 30;M32.7 34 C34 32.6 35.4 31.3 36.9 30;M32.7 34 C34 32.6 35.4 31.3 36.9 30;M32.7 34 C34 32.6 35.4 31.3 36.9 30;M34.4 37.2 C35.8 36 37.2 34.9 38.7 33.8;M34.5 38.3 C35.8 37.3 37.3 36.5 38.8 35.9;M34.9 45.1 C36.1 44 37.6 43.1 39.1 42.6;M35.1 52.5 C36.3 51.1 37.8 49.8 39.4 49;M35.8 56.9 C37.1 54.9 39 53 40.9 51.6;M36 56.8 C37.5 54.6 39.5 52.7 41.5 51.2;M36 56.8 C37.5 54.6 39.5 52.7 41.5 51.2" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka45" fill="none"><animate attributeName="d" values="M41.5 51.2 C43.5 49.8 45.8 48.8 48.1 48.3;M41.5 51.2 C43.5 49.8 45.8 48.8 48.1 48.3;M41.5 51.2 C43.5 49.8 45.8 48.8 48.1 48.3;M41.5 51.2 C43.5 49.8 45.8 48.8 48.1 48.3;M40.9 51.6 C42.8 50.3 45 49.3 47.1 48.8;M39.8 50.5 C41.5 49.5 43.5 48.8 45.4 48.5;M39.1 47 C40.6 46.3 42.4 46 44.2 45.9;M39.1 42.6 C40.7 42 42.4 41.8 44.1 41.7;M38.9 38 C40.5 37.4 42.2 37.1 43.9 36.9;M39.2 34.1 C40.7 33.3 42.3 32.6 44 31.9;M38.7 33.8 C40.2 32.7 41.8 31.7 43.4 30.8;M38.3 31.7 C39.8 30.5 41.4 29.4 43 28.4;M36.9 30 C38.4 28.7 39.9 27.5 41.5 26.4;M36.9 30 C38.4 28.7 39.9 27.5 41.5 26.4;M36.9 30 C38.4 28.7 39.9 27.5 41.5 26.4;M36.9 30 C38.4 28.7 39.9 27.5 41.5 26.4;M36.9 30 C38.4 28.7 39.9 27.5 41.5 26.4;M36.9 30 C38.4 28.7 39.9 27.5 41.5 26.4;M38.7 33.8 C40.2 32.7 41.8 31.7 43.4 30.8;M38.8 35.9 C40.4 35.3 42.1 34.8 43.7 34.5;M39.1 42.6 C40.7 42 42.4 41.8 44.1 41.7;M39.4 49 C41 48.1 42.8 47.6 44.7 47.4;M40.9 51.6 C42.8 50.3 45 49.3 47.1 48.8;M41.5 51.2 C43.5 49.8 45.8 48.8 48.1 48.3;M41.5 51.2 C43.5 49.8 45.8 48.8 48.1 48.3" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka46" fill="none"><animate attributeName="d" values="M48.1 48.3 C50.4 47.7 52.9 47.6 55.1 48;M48.1 48.3 C50.4 47.7 52.9 47.6 55.1 48;M48.1 48.3 C50.4 47.7 52.9 47.6 55.1 48;M48.1 48.3 C50.4 47.7 52.9 47.6 55.1 48;M47.1 48.8 C49.3 48.3 51.7 48.2 53.9 48.6;M45.4 48.5 C47.3 48.1 49.4 48.2 51.5 48.5;M44.2 45.9 C46 45.8 48 46.1 49.9 46.5;M44.1 41.7 C45.9 41.6 47.7 41.9 49.5 42.2;M43.9 36.9 C45.6 36.7 47.4 36.8 49.2 36.9;M44 31.9 C45.6 31.3 47.3 30.7 49 30.2;M43.4 30.8 C45 29.9 46.6 29 48.3 28.2;M43 28.4 C44.6 27.4 46.2 26.4 47.9 25.6;M41.5 26.4 C43.1 25.2 44.8 24.2 46.5 23.2;M41.5 26.4 C43.1 25.2 44.8 24.2 46.5 23.2;M41.5 26.4 C43.1 25.2 44.8 24.2 46.5 23.2;M41.5 26.4 C43.1 25.2 44.8 24.2 46.5 23.2;M41.5 26.4 C43.1 25.2 44.8 24.2 46.5 23.2;M41.5 26.4 C43.1 25.2 44.8 24.2 46.5 23.2;M43.4 30.8 C45 29.9 46.6 29 48.3 28.2;M43.7 34.5 C45.4 34.2 47.2 34.1 49 34.1;M44.1 41.7 C45.9 41.6 47.7 41.9 49.5 42.2;M44.7 47.4 C46.6 47.2 48.6 47.3 50.5 47.7;M47.1 48.8 C49.3 48.3 51.7 48.2 53.9 48.6;M48.1 48.3 C50.4 47.7 52.9 47.6 55.1 48;M48.1 48.3 C50.4 47.7 52.9 47.6 55.1 48" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka47" fill="none"><animate attributeName="d" values="M55.1 48 C57.4 48.5 59.8 49.6 61.8 51;M55.1 48 C57.4 48.5 59.8 49.6 61.8 51;M55.1 48 C57.4 48.5 59.8 49.6 61.8 51;M55.1 48 C57.4 48.5 59.8 49.6 61.8 51;M53.9 48.6 C56.1 49.1 58.4 50 60.4 51.3;M51.5 48.5 C53.5 48.9 55.6 49.7 57.5 50.7;M49.9 46.5 C51.8 46.9 53.7 47.6 55.6 48.3;M49.5 42.2 C51.4 42.5 53.2 43 55 43.5;M49.2 36.9 C51 37 52.8 37.2 54.6 37.5;M49 30.2 C50.7 29.7 52.4 29.3 54.2 29;M48.3 28.2 C50 27.4 51.7 26.6 53.4 25.9;M47.9 25.6 C49.6 24.7 51.3 23.9 53.1 23.1;M46.5 23.2 C48.2 22.2 49.9 21.2 51.7 20.4;M46.5 23.2 C48.2 22.2 49.9 21.2 51.7 20.4;M46.5 23.2 C48.2 22.2 49.9 21.2 51.7 20.4;M46.5 23.2 C48.2 22.2 49.9 21.2 51.7 20.4;M46.5 23.2 C48.2 22.2 49.9 21.2 51.7 20.4;M46.5 23.2 C48.2 22.2 49.9 21.2 51.7 20.4;M48.3 28.2 C50 27.4 51.7 26.6 53.4 25.9;M49 34.1 C50.7 34 52.6 34.1 54.3 34.2;M49.5 42.2 C51.4 42.5 53.2 43 55 43.5;M50.5 47.7 C52.5 48.1 54.6 48.8 56.5 49.7;M53.9 48.6 C56.1 49.1 58.4 50 60.4 51.3;M55.1 48 C57.4 48.5 59.8 49.6 61.8 51;M55.1 48 C57.4 48.5 59.8 49.6 61.8 51" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka48" fill="none"><animate attributeName="d" values="M61.8 51 C63.9 52.4 65.8 54.5 67.4 56.6;M61.8 51 C63.9 52.4 65.8 54.5 67.4 56.6;M61.8 51 C63.9 52.4 65.8 54.5 67.4 56.6;M61.8 51 C63.9 52.4 65.8 54.5 67.4 56.6;M60.4 51.3 C62.4 52.5 64.4 54.4 66 56.2;M57.5 50.7 C59.5 51.6 61.4 53 63.2 54.3;M55.6 48.3 C57.5 49.1 59.4 50 61.2 50.9;M55 43.5 C56.8 44 58.7 44.6 60.4 45.1;M54.6 37.5 C56.4 37.7 58.2 38 59.9 38.3;M54.2 29 C55.9 28.6 57.7 28.4 59.5 28.1;M53.4 25.9 C55.2 25.3 56.9 24.7 58.8 24.1;M53.1 23.1 C54.8 22.4 56.6 21.7 58.5 21.1;M51.7 20.4 C53.6 19.5 55.4 18.7 57.3 18;M51.7 20.4 C53.6 19.5 55.4 18.7 57.3 18;M51.7 20.4 C53.6 19.5 55.4 18.7 57.3 18;M51.7 20.4 C53.6 19.5 55.4 18.7 57.3 18;M51.7 20.4 C53.6 19.5 55.4 18.7 57.3 18;M51.7 20.4 C53.6 19.5 55.4 18.7 57.3 18;M53.4 25.9 C55.2 25.3 56.9 24.7 58.8 24.1;M54.3 34.2 C56.1 34.3 57.9 34.5 59.6 34.6;M55 43.5 C56.8 44 58.7 44.6 60.4 45.1;M56.5 49.7 C58.5 50.5 60.4 51.7 62.2 52.8;M60.4 51.3 C62.4 52.5 64.4 54.4 66 56.2;M61.8 51 C63.9 52.4 65.8 54.5 67.4 56.6;M61.8 51 C63.9 52.4 65.8 54.5 67.4 56.6" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka49" fill="none"><animate attributeName="d" values="M67.4 56.6 C69 58.8 70.2 61.6 71.2 63.9;M67.4 56.6 C69 58.8 70.2 61.6 71.2 63.9;M67.4 56.6 C69 58.8 70.2 61.6 71.2 63.9;M67.4 56.6 C69 58.8 70.2 61.6 71.2 63.9;M66 56.2 C67.7 58 69.1 60.4 70.3 62.3;M63.2 54.3 C65 55.6 66.7 57.2 68.2 58.6;M61.2 50.9 C63.1 51.7 64.8 52.7 66.5 53.4;M60.4 45.1 C62.1 45.6 63.8 46.1 65.4 46.5;M59.9 38.3 C61.6 38.5 63.4 38.7 65 38.8;M59.5 28.1 C61.3 27.9 63.1 27.7 64.8 27.6;M58.8 24.1 C60.6 23.6 62.4 23.1 64.2 22.7;M58.5 21.1 C60.3 20.5 62.1 20 64 19.6;M57.3 18 C59.2 17.3 61.2 16.7 63.1 16.2;M57.3 18 C59.2 17.3 61.2 16.7 63.1 16.2;M57.3 18 C59.2 17.3 61.2 16.7 63.1 16.2;M57.3 18 C59.2 17.3 61.2 16.7 63.1 16.2;M57.3 18 C59.2 17.3 61.2 16.7 63.1 16.2;M57.3 18 C59.2 17.3 61.2 16.7 63.1 16.2;M58.8 24.1 C60.6 23.6 62.4 23.1 64.2 22.7;M59.6 34.6 C61.4 34.7 63.1 34.9 64.9 34.9;M60.4 45.1 C62.1 45.6 63.8 46.1 65.4 46.5;M62.2 52.8 C64 53.9 65.7 55.2 67.4 56.2;M66 56.2 C67.7 58 69.1 60.4 70.3 62.3;M67.4 56.6 C69 58.8 70.2 61.6 71.2 63.9;M67.4 56.6 C69 58.8 70.2 61.6 71.2 63.9" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka50" fill="none"><animate attributeName="d" values="M71.2 63.9 C72.3 66.1 73.1 68.5 73.8 70.2;M71.2 63.9 C72.3 66.1 73.1 68.5 73.8 70.2;M71.2 63.9 C72.3 66.1 73.1 68.5 73.8 70.2;M71.2 63.9 C72.3 66.1 73.1 68.5 73.8 70.2;M70.3 62.3 C71.6 64.3 72.5 66.4 73.4 67.9;M68.2 58.6 C69.7 59.9 71 61.3 72.4 62.3;M66.5 53.4 C68.2 54.1 69.8 54.9 71.4 55.3;M65.4 46.5 C67.1 46.8 68.7 47.1 70.3 47.2;M65 38.8 C66.7 38.9 68.3 39 69.9 38.9;M64.8 27.6 C66.6 27.4 68.4 27.3 70.2 27.2;M64.2 22.7 C66.1 22.3 68 22 69.9 21.7;M64 19.6 C65.9 19.1 67.8 18.8 69.7 18.5;M63.1 16.2 C65.1 15.7 67.1 15.2 69.1 14.9;M63.1 16.2 C65.1 15.7 67.1 15.2 69.1 14.9;M63.1 16.2 C65.1 15.7 67.1 15.2 69.1 14.9;M63.1 16.2 C65.1 15.7 67.1 15.2 69.1 14.9;M63.1 16.2 C65.1 15.7 67.1 15.2 69.1 14.9;M63.1 16.2 C65.1 15.7 67.1 15.2 69.1 14.9;M64.2 22.7 C66.1 22.3 68 22 69.9 21.7;M64.9 34.9 C66.6 35 68.3 34.9 69.9 34.9;M65.4 46.5 C67.1 46.8 68.7 47.1 70.3 47.2;M67.4 56.2 C69 57.3 70.5 58.4 72 59.1;M70.3 62.3 C71.6 64.3 72.5 66.4 73.4 67.9;M71.2 63.9 C72.3 66.1 73.1 68.5 73.8 70.2;M71.2 63.9 C72.3 66.1 73.1 68.5 73.8 70.2" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka51" fill="none"><animate attributeName="d" values="M73.8 70.2 C74.5 71.9 74.8 73.3 75.4 74.1;M73.8 70.2 C74.5 71.9 74.8 73.3 75.4 74.1;M73.8 70.2 C74.5 71.9 74.8 73.3 75.4 74.1;M73.8 70.2 C74.5 71.9 74.8 73.3 75.4 74.1;M73.4 67.9 C74.3 69.4 74.9 70.7 75.8 71.4;M72.4 62.3 C73.7 63.3 74.9 64.1 76.1 64.4;M71.4 55.3 C73 55.8 74.5 56.1 75.9 56.1;M70.3 47.2 C71.8 47.2 73.4 47.2 74.9 46.9;M69.9 38.9 C71.5 38.8 73.1 38.5 74.7 38.2;M70.2 27.2 C72 27.1 73.8 27 75.6 26.9;M69.9 21.7 C71.7 21.5 73.6 21.3 75.5 21.2;M69.7 18.5 C71.6 18.2 73.6 18 75.5 17.9;M69.1 14.9 C71.1 14.6 73.2 14.3 75.2 14.2;M69.1 14.9 C71.1 14.6 73.2 14.3 75.2 14.2;M69.1 14.9 C71.1 14.6 73.2 14.3 75.2 14.2;M69.1 14.9 C71.1 14.6 73.2 14.3 75.2 14.2;M69.1 14.9 C71.1 14.6 73.2 14.3 75.2 14.2;M69.1 14.9 C71.1 14.6 73.2 14.3 75.2 14.2;M69.9 21.7 C71.7 21.5 73.6 21.3 75.5 21.2;M69.9 34.9 C71.6 34.8 73.3 34.6 74.9 34.3;M70.3 47.2 C71.8 47.2 73.4 47.2 74.9 46.9;M72 59.1 C73.4 59.8 74.8 60.4 76.2 60.6;M73.4 67.9 C74.3 69.4 74.9 70.7 75.8 71.4;M73.8 70.2 C74.5 71.9 74.8 73.3 75.4 74.1;M73.8 70.2 C74.5 71.9 74.8 73.3 75.4 74.1" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka52" fill="none"><animate attributeName="d" values="M75.4 74.1 C76 74.8 76.4 75 77.3 74.7;M75.4 74.1 C76 74.8 76.4 75 77.3 74.7;M75.4 74.1 C76 74.8 76.4 75 77.3 74.7;M75.4 74.1 C76 74.8 76.4 75 77.3 74.7;M75.8 71.4 C76.6 72 77.4 72.2 78.4 71.9;M76.1 64.4 C77.4 64.8 78.6 64.8 79.9 64.5;M75.9 56.1 C77.4 56.2 78.8 56 80.3 55.6;M74.9 46.9 C76.4 46.7 77.9 46.3 79.3 45.8;M74.7 38.2 C76.3 37.9 77.8 37.5 79.4 37;M75.6 26.9 C77.4 26.9 79.2 26.9 80.9 26.9;M75.5 21.2 C77.4 21.1 79.3 21.1 81.3 21.1;M75.5 17.9 C77.4 17.8 79.4 17.7 81.3 17.8;M75.2 14.2 C77.3 14 79.3 14 81.4 14;M75.2 14.2 C77.3 14 79.3 14 81.4 14;M75.2 14.2 C77.3 14 79.3 14 81.4 14;M75.2 14.2 C77.3 14 79.3 14 81.4 14;M75.2 14.2 C77.3 14 79.3 14 81.4 14;M75.2 14.2 C77.3 14 79.3 14 81.4 14;M75.5 21.2 C77.4 21.1 79.3 21.1 81.3 21.1;M74.9 34.3 C76.6 34.1 78.2 33.8 79.9 33.4;M74.9 46.9 C76.4 46.7 77.9 46.3 79.3 45.8;M76.2 60.6 C77.5 60.8 78.8 60.7 80.2 60.3;M75.8 71.4 C76.6 72 77.4 72.2 78.4 71.9;M75.4 74.1 C76 74.8 76.4 75 77.3 74.7;M75.4 74.1 C76 74.8 76.4 75 77.3 74.7" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka53" fill="none"><animate attributeName="d" values="M77.3 74.7 C78.2 74.4 79.5 73.4 80.9 72.1;M77.3 74.7 C78.2 74.4 79.5 73.4 80.9 72.1;M77.3 74.7 C78.2 74.4 79.5 73.4 80.9 72.1;M77.3 74.7 C78.2 74.4 79.5 73.4 80.9 72.1;M78.4 71.9 C79.5 71.7 80.7 70.8 82.1 69.7;M79.9 64.5 C81.2 64.2 82.5 63.4 83.9 62.5;M80.3 55.6 C81.7 55.1 83.1 54.4 84.6 53.6;M79.3 45.8 C80.8 45.3 82.3 44.6 83.8 43.8;M79.4 37 C81 36.6 82.6 36 84.3 35.5;M80.9 26.9 C82.7 26.9 84.5 26.9 86.3 26.9;M81.3 21.1 C83.2 21.1 85.1 21.3 87 21.4;M81.3 17.8 C83.3 17.8 85.2 17.9 87.1 18.1;M81.4 14 C83.5 14.1 85.5 14.2 87.6 14.4;M81.4 14 C83.5 14.1 85.5 14.2 87.6 14.4;M81.4 14 C83.5 14.1 85.5 14.2 87.6 14.4;M81.4 14 C83.5 14.1 85.5 14.2 87.6 14.4;M81.4 14 C83.5 14.1 85.5 14.2 87.6 14.4;M81.4 14 C83.5 14.1 85.5 14.2 87.6 14.4;M81.3 21.1 C83.2 21.1 85.1 21.3 87 21.4;M79.9 33.4 C81.5 33.1 83.2 32.7 84.9 32.3;M79.3 45.8 C80.8 45.3 82.3 44.6 83.8 43.8;M80.2 60.3 C81.6 60 83 59.2 84.4 58.3;M78.4 71.9 C79.5 71.7 80.7 70.8 82.1 69.7;M77.3 74.7 C78.2 74.4 79.5 73.4 80.9 72.1;M77.3 74.7 C78.2 74.4 79.5 73.4 80.9 72.1" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka54" fill="none"><animate attributeName="d" values="M80.9 72.1 C82.4 70.9 84.1 69.1 85.9 67.4;M80.9 72.1 C82.4 70.9 84.1 69.1 85.9 67.4;M80.9 72.1 C82.4 70.9 84.1 69.1 85.9 67.4;M80.9 72.1 C82.4 70.9 84.1 69.1 85.9 67.4;M82.1 69.7 C83.5 68.7 85.1 67.1 86.8 65.5;M83.9 62.5 C85.3 61.6 86.8 60.3 88.4 58.9;M84.6 53.6 C86 52.8 87.5 51.7 89 50.5;M83.8 43.8 C85.3 43 86.9 42.1 88.5 41.2;M84.3 35.5 C85.9 34.9 87.6 34.3 89.3 33.8;M86.3 26.9 C88.1 27 89.8 27 91.6 27.2;M87 21.4 C88.8 21.6 90.7 21.9 92.6 22.2;M87.1 18.1 C89.1 18.3 91 18.6 92.9 19;M87.6 14.4 C89.6 14.7 91.6 15 93.6 15.4;M87.6 14.4 C89.6 14.7 91.6 15 93.6 15.4;M87.6 14.4 C89.6 14.7 91.6 15 93.6 15.4;M87.6 14.4 C89.6 14.7 91.6 15 93.6 15.4;M87.6 14.4 C89.6 14.7 91.6 15 93.6 15.4;M87.6 14.4 C89.6 14.7 91.6 15 93.6 15.4;M87 21.4 C88.8 21.6 90.7 21.9 92.6 22.2;M84.9 32.3 C86.6 31.9 88.3 31.5 90 31.1;M83.8 43.8 C85.3 43 86.9 42.1 88.5 41.2;M84.4 58.3 C85.8 57.4 87.3 56.2 88.8 55;M82.1 69.7 C83.5 68.7 85.1 67.1 86.8 65.5;M80.9 72.1 C82.4 70.9 84.1 69.1 85.9 67.4;M80.9 72.1 C82.4 70.9 84.1 69.1 85.9 67.4" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka55" fill="none"><animate attributeName="d" values="M85.9 67.4 C87.7 65.6 89.6 63.5 91.6 61.4;M85.9 67.4 C87.7 65.6 89.6 63.5 91.6 61.4;M85.9 67.4 C87.7 65.6 89.6 63.5 91.6 61.4;M85.9 67.4 C87.7 65.6 89.6 63.5 91.6 61.4;M86.8 65.5 C88.5 63.8 90.4 61.8 92.3 59.9;M88.4 58.9 C90 57.6 91.6 56 93.3 54.4;M89 50.5 C90.5 49.4 92.1 48 93.7 46.8;M88.5 41.2 C90.1 40.4 91.7 39.4 93.5 38.6;M89.3 33.8 C91 33.3 92.7 32.8 94.5 32.4;M91.6 27.2 C93.4 27.3 95.1 27.4 96.9 27.6;M92.6 22.2 C94.5 22.6 96.3 23 98.2 23.4;M92.9 19 C94.8 19.4 96.7 19.8 98.5 20.3;M93.6 15.4 C95.6 15.8 97.6 16.4 99.6 17;M93.6 15.4 C95.6 15.8 97.6 16.4 99.6 17;M93.6 15.4 C95.6 15.8 97.6 16.4 99.6 17;M93.6 15.4 C95.6 15.8 97.6 16.4 99.6 17;M93.6 15.4 C95.6 15.8 97.6 16.4 99.6 17;M93.6 15.4 C95.6 15.8 97.6 16.4 99.6 17;M92.6 22.2 C94.5 22.6 96.3 23 98.2 23.4;M90 31.1 C91.8 30.8 93.5 30.5 95.3 30.3;M88.5 41.2 C90.1 40.4 91.7 39.4 93.5 38.6;M88.8 55 C90.3 53.7 91.9 52.2 93.6 50.8;M86.8 65.5 C88.5 63.8 90.4 61.8 92.3 59.9;M85.9 67.4 C87.7 65.6 89.6 63.5 91.6 61.4;M85.9 67.4 C87.7 65.6 89.6 63.5 91.6 61.4" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka56" fill="none"><animate attributeName="d" values="M91.6 61.4 C93.6 59.4 95.8 57 97.8 55;M91.6 61.4 C93.6 59.4 95.8 57 97.8 55;M91.6 61.4 C93.6 59.4 95.8 57 97.8 55;M91.6 61.4 C93.6 59.4 95.8 57 97.8 55;M92.3 59.9 C94.2 58 96.2 55.9 98.1 54.1;M93.3 54.4 C95 52.9 96.8 51.2 98.5 49.7;M93.7 46.8 C95.3 45.6 96.9 44.2 98.6 43.2;M93.5 38.6 C95.2 37.9 96.9 37.1 98.7 36.6;M94.5 32.4 C96.2 32 98.1 31.7 99.8 31.6;M96.9 27.6 C98.7 27.8 100.5 28.1 102.2 28.4;M98.2 23.4 C100 23.9 101.8 24.5 103.6 25.1;M98.5 20.3 C100.4 20.8 102.2 21.4 104 22.1;M99.6 17 C101.5 17.6 103.4 18.3 105.3 19;M99.6 17 C101.5 17.6 103.4 18.3 105.3 19;M99.6 17 C101.5 17.6 103.4 18.3 105.3 19;M99.6 17 C101.5 17.6 103.4 18.3 105.3 19;M99.6 17 C101.5 17.6 103.4 18.3 105.3 19;M99.6 17 C101.5 17.6 103.4 18.3 105.3 19;M98.2 23.4 C100 23.9 101.8 24.5 103.6 25.1;M95.3 30.3 C97.1 30.1 98.9 30 100.7 30;M93.5 38.6 C95.2 37.9 96.9 37.1 98.7 36.6;M93.6 50.8 C95.2 49.4 96.9 47.9 98.6 46.6;M92.3 59.9 C94.2 58 96.2 55.9 98.1 54.1;M91.6 61.4 C93.6 59.4 95.8 57 97.8 55;M91.6 61.4 C93.6 59.4 95.8 57 97.8 55" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka57" fill="none"><animate attributeName="d" values="M97.8 55 C99.9 52.9 102 50.8 103.8 49.2;M97.8 55 C99.9 52.9 102 50.8 103.8 49.2;M97.8 55 C99.9 52.9 102 50.8 103.8 49.2;M97.8 55 C99.9 52.9 102 50.8 103.8 49.2;M98.1 54.1 C100.1 52.3 102.1 50.4 103.8 48.9;M98.5 49.7 C100.2 48.3 102 46.8 103.6 45.8;M98.6 43.2 C100.2 42.1 101.9 41.1 103.5 40.5;M98.7 36.6 C100.4 36 102.2 35.6 103.9 35.5;M99.8 31.6 C101.6 31.5 103.4 31.6 105.2 31.8;M102.2 28.4 C104 28.8 105.7 29.1 107.5 29.6;M103.6 25.1 C105.4 25.7 107.1 26.4 108.9 27.1;M104 22.1 C105.8 22.8 107.6 23.5 109.3 24.3;M105.3 19 C107.2 19.8 109 20.7 110.8 21.6;M105.3 19 C107.2 19.8 109 20.7 110.8 21.6;M105.3 19 C107.2 19.8 109 20.7 110.8 21.6;M105.3 19 C107.2 19.8 109 20.7 110.8 21.6;M105.3 19 C107.2 19.8 109 20.7 110.8 21.6;M105.3 19 C107.2 19.8 109 20.7 110.8 21.6;M103.6 25.1 C105.4 25.7 107.1 26.4 108.9 27.1;M100.7 30 C102.4 30 104.2 30.2 106 30.5;M98.7 36.6 C100.4 36 102.2 35.6 103.9 35.5;M98.6 46.6 C100.2 45.4 102 44.1 103.5 43.2;M98.1 54.1 C100.1 52.3 102.1 50.4 103.8 48.9;M97.8 55 C99.9 52.9 102 50.8 103.8 49.2;M97.8 55 C99.9 52.9 102 50.8 103.8 49.2" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka58" fill="none"><animate attributeName="d" values="M103.8 49.2 C105.7 47.6 107.4 46.1 108.8 45.3;M103.8 49.2 C105.7 47.6 107.4 46.1 108.8 45.3;M103.8 49.2 C105.7 47.6 107.4 46.1 108.8 45.3;M103.8 49.2 C105.7 47.6 107.4 46.1 108.8 45.3;M103.8 48.9 C105.5 47.5 107.2 46.2 108.5 45.5;M103.6 45.8 C105.2 44.7 106.7 43.8 108 43.5;M103.5 40.5 C105.1 39.9 106.7 39.5 108.1 39.6;M103.9 35.5 C105.7 35.4 107.4 35.5 108.9 35.9;M105.2 31.8 C106.9 32 108.6 32.4 110.3 33;M107.5 29.6 C109.2 30.1 110.9 30.6 112.6 31.2;M108.9 27.1 C110.6 27.9 112.3 28.7 113.9 29.6;M109.3 24.3 C111.1 25.1 112.8 26 114.4 27;M110.8 21.6 C112.5 22.5 114.3 23.6 115.9 24.6;M110.8 21.6 C112.5 22.5 114.3 23.6 115.9 24.6;M110.8 21.6 C112.5 22.5 114.3 23.6 115.9 24.6;M110.8 21.6 C112.5 22.5 114.3 23.6 115.9 24.6;M110.8 21.6 C112.5 22.5 114.3 23.6 115.9 24.6;M110.8 21.6 C112.5 22.5 114.3 23.6 115.9 24.6;M108.9 27.1 C110.6 27.9 112.3 28.7 113.9 29.6;M106 30.5 C107.7 30.8 109.5 31.2 111.2 31.8;M103.9 35.5 C105.7 35.4 107.4 35.5 108.9 35.9;M103.5 43.2 C105.1 42.4 106.7 41.7 108 41.5;M103.8 48.9 C105.5 47.5 107.2 46.2 108.5 45.5;M103.8 49.2 C105.7 47.6 107.4 46.1 108.8 45.3;M103.8 49.2 C105.7 47.6 107.4 46.1 108.8 45.3" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka59" fill="none"><animate attributeName="d" values="M108.8 45.3 C110.1 44.4 111.2 43.9 111.9 44.2;M108.8 45.3 C110.1 44.4 111.2 43.9 111.9 44.2;M108.8 45.3 C110.1 44.4 111.2 43.9 111.9 44.2;M108.8 45.3 C110.1 44.4 111.2 43.9 111.9 44.2;M108.5 45.5 C109.8 44.8 110.8 44.5 111.6 44.7;M108 43.5 C109.3 43.1 110.5 43.1 111.4 43.6;M108.1 39.6 C109.5 39.6 110.8 40 111.9 40.8;M108.9 35.9 C110.5 36.3 112.1 37 113.5 37.9;M110.3 33 C111.9 33.6 113.5 34.3 115 35.2;M112.6 31.2 C114.3 31.8 116 32.5 117.6 33.3;M113.9 29.6 C115.5 30.5 117.1 31.4 118.7 32.4;M114.4 27 C116 27.9 117.7 29 119.2 30;M115.9 24.6 C117.6 25.7 119.2 26.9 120.7 28.1;M115.9 24.6 C117.6 25.7 119.2 26.9 120.7 28.1;M115.9 24.6 C117.6 25.7 119.2 26.9 120.7 28.1;M115.9 24.6 C117.6 25.7 119.2 26.9 120.7 28.1;M115.9 24.6 C117.6 25.7 119.2 26.9 120.7 28.1;M115.9 24.6 C117.6 25.7 119.2 26.9 120.7 28.1;M113.9 29.6 C115.5 30.5 117.1 31.4 118.7 32.4;M111.2 31.8 C112.8 32.4 114.5 33.2 116 34;M108.9 35.9 C110.5 36.3 112.1 37 113.5 37.9;M108 41.5 C109.3 41.4 110.5 41.6 111.6 42.2;M108.5 45.5 C109.8 44.8 110.8 44.5 111.6 44.7;M108.8 45.3 C110.1 44.4 111.2 43.9 111.9 44.2;M108.8 45.3 C110.1 44.4 111.2 43.9 111.9 44.2" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka60" fill="none"><animate attributeName="d" values="M111.9 44.2 C112.5 44.4 112.7 45.4 112.7 46.7;M111.9 44.2 C112.5 44.4 112.7 45.4 112.7 46.7;M111.9 44.2 C112.5 44.4 112.7 45.4 112.7 46.7;M111.9 44.2 C112.5 44.4 112.7 45.4 112.7 46.7;M111.6 44.7 C112.3 45 112.6 45.9 112.8 47.1;M111.4 43.6 C112.3 44.1 113 45 113.5 46.3;M111.9 40.8 C113.1 41.5 114 42.7 114.9 44;M113.5 37.9 C114.9 38.8 116.1 40 117.3 41.3;M115 35.2 C116.5 36.1 118 37.2 119.3 38.3;M117.6 33.3 C119.2 34.1 120.8 34.9 122.3 35.9;M118.7 32.4 C120.2 33.4 121.7 34.5 123.2 35.6;M119.2 30 C120.7 31.1 122.2 32.3 123.7 33.5;M120.7 28.1 C122.3 29.3 123.8 30.6 125.2 31.9;M120.7 28.1 C122.3 29.3 123.8 30.6 125.2 31.9;M120.7 28.1 C122.3 29.3 123.8 30.6 125.2 31.9;M120.7 28.1 C122.3 29.3 123.8 30.6 125.2 31.9;M120.7 28.1 C122.3 29.3 123.8 30.6 125.2 31.9;M120.7 28.1 C122.3 29.3 123.8 30.6 125.2 31.9;M118.7 32.4 C120.2 33.4 121.7 34.5 123.2 35.6;M116 34 C117.6 34.9 119 35.9 120.5 37;M113.5 37.9 C114.9 38.8 116.1 40 117.3 41.3;M111.6 42.2 C112.6 42.8 113.4 43.9 114.1 45.2;M111.6 44.7 C112.3 45 112.6 45.9 112.8 47.1;M111.9 44.2 C112.5 44.4 112.7 45.4 112.7 46.7;M111.9 44.2 C112.5 44.4 112.7 45.4 112.7 46.7" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka61" fill="none"><animate attributeName="d" values="M112.7 46.7 C112.6 48 112.1 50.1 111.7 52.2;M112.7 46.7 C112.6 48 112.1 50.1 111.7 52.2;M112.7 46.7 C112.6 48 112.1 50.1 111.7 52.2;M112.7 46.7 C112.6 48 112.1 50.1 111.7 52.2;M112.8 47.1 C113 48.4 112.7 50.2 112.6 52.2;M113.5 46.3 C114 47.6 114.3 49.4 114.6 51.3;M114.9 44 C115.8 45.4 116.4 47.1 117.1 48.9;M117.3 41.3 C118.4 42.6 119.4 44.1 120.4 45.6;M119.3 38.3 C120.7 39.5 121.9 40.8 123.1 42.1;M122.3 35.9 C123.8 36.8 125.3 37.8 126.8 38.9;M123.2 35.6 C124.6 36.7 126 37.9 127.4 39.1;M123.7 33.5 C125.1 34.7 126.5 35.9 127.8 37.3;M125.2 31.9 C126.6 33.2 127.9 34.6 129.2 36;M125.2 31.9 C126.6 33.2 127.9 34.6 129.2 36;M125.2 31.9 C126.6 33.2 127.9 34.6 129.2 36;M125.2 31.9 C126.6 33.2 127.9 34.6 129.2 36;M125.2 31.9 C126.6 33.2 127.9 34.6 129.2 36;M125.2 31.9 C126.6 33.2 127.9 34.6 129.2 36;M123.2 35.6 C124.6 36.7 126 37.9 127.4 39.1;M120.5 37 C121.9 38.1 123.2 39.3 124.5 40.5;M117.3 41.3 C118.4 42.6 119.4 44.1 120.4 45.6;M114.1 45.2 C114.8 46.6 115.2 48.4 115.7 50.2;M112.8 47.1 C113 48.4 112.7 50.2 112.6 52.2;M112.7 46.7 C112.6 48 112.1 50.1 111.7 52.2;M112.7 46.7 C112.6 48 112.1 50.1 111.7 52.2" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka62" fill="none"><animate attributeName="d" values="M111.7 52.2 C111.3 54.4 110.7 57 110.3 59.6;M111.7 52.2 C111.3 54.4 110.7 57 110.3 59.6;M111.7 52.2 C111.3 54.4 110.7 57 110.3 59.6;M111.7 52.2 C111.3 54.4 110.7 57 110.3 59.6;M112.6 52.2 C112.4 54.2 112 56.7 111.9 59.2;M114.6 51.3 C114.9 53.1 115 55.4 115.3 57.6;M117.1 48.9 C117.7 50.6 118.2 52.6 118.9 54.6;M120.4 45.6 C121.4 47.2 122.2 48.9 123 50.5;M123.1 42.1 C124.3 43.4 125.5 44.8 126.6 46.3;M126.8 38.9 C128.2 40 129.5 41.2 130.8 42.5;M127.4 39.1 C128.7 40.4 130 41.7 131.2 43;M127.8 37.3 C129.1 38.6 130.4 39.9 131.6 41.4;M129.2 36 C130.5 37.4 131.7 38.9 132.8 40.4;M129.2 36 C130.5 37.4 131.7 38.9 132.8 40.4;M129.2 36 C130.5 37.4 131.7 38.9 132.8 40.4;M129.2 36 C130.5 37.4 131.7 38.9 132.8 40.4;M129.2 36 C130.5 37.4 131.7 38.9 132.8 40.4;M129.2 36 C130.5 37.4 131.7 38.9 132.8 40.4;M127.4 39.1 C128.7 40.4 130 41.7 131.2 43;M124.5 40.5 C125.8 41.8 127 43.1 128.2 44.5;M120.4 45.6 C121.4 47.2 122.2 48.9 123 50.5;M115.7 50.2 C116.2 52 116.5 54.2 117 56.2;M112.6 52.2 C112.4 54.2 112 56.7 111.9 59.2;M111.7 52.2 C111.3 54.4 110.7 57 110.3 59.6;M111.7 52.2 C111.3 54.4 110.7 57 110.3 59.6" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka63" fill="none"><animate attributeName="d" values="M110.3 59.6 C109.9 62.2 109.5 65 109.5 67.6;M110.3 59.6 C109.9 62.2 109.5 65 109.5 67.6;M110.3 59.6 C109.9 62.2 109.5 65 109.5 67.6;M110.3 59.6 C109.9 62.2 109.5 65 109.5 67.6;M111.9 59.2 C111.7 61.6 111.5 64.3 111.7 66.9;M115.3 57.6 C115.6 59.8 115.9 62.1 116.4 64.4;M118.9 54.6 C119.5 56.5 120.1 58.5 120.8 60.5;M123 50.5 C123.9 52.2 124.8 53.9 125.7 55.6;M126.6 46.3 C127.7 47.7 128.7 49.2 129.7 50.7;M130.8 42.5 C132.1 43.7 133.3 45.1 134.5 46.4;M131.2 43 C132.4 44.3 133.6 45.7 134.6 47.1;M131.6 41.4 C132.8 42.8 133.9 44.2 135 45.7;M132.8 40.4 C134 41.9 135 43.5 136 45.1;M132.8 40.4 C134 41.9 135 43.5 136 45.1;M132.8 40.4 C134 41.9 135 43.5 136 45.1;M132.8 40.4 C134 41.9 135 43.5 136 45.1;M132.8 40.4 C134 41.9 135 43.5 136 45.1;M132.8 40.4 C134 41.9 135 43.5 136 45.1;M131.2 43 C132.4 44.3 133.6 45.7 134.6 47.1;M128.2 44.5 C129.3 45.8 130.5 47.3 131.5 48.7;M123 50.5 C123.9 52.2 124.8 53.9 125.7 55.6;M117 56.2 C117.4 58.3 117.8 60.5 118.5 62.6;M111.9 59.2 C111.7 61.6 111.5 64.3 111.7 66.9;M110.3 59.6 C109.9 62.2 109.5 65 109.5 67.6;M110.3 59.6 C109.9 62.2 109.5 65 109.5 67.6" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka64" fill="none"><animate attributeName="d" values="M109.5 67.6 C109.5 70.3 109.7 73 110.5 75.5;M109.5 67.6 C109.5 70.3 109.7 73 110.5 75.5;M109.5 67.6 C109.5 70.3 109.7 73 110.5 75.5;M109.5 67.6 C109.5 70.3 109.7 73 110.5 75.5;M111.7 66.9 C112 69.4 112.3 72.1 113.2 74.5;M116.4 64.4 C117 66.6 117.6 68.9 118.6 70.9;M120.8 60.5 C121.6 62.4 122.4 64.4 123.5 66.2;M125.7 55.6 C126.6 57.3 127.5 59 128.5 60.6;M129.7 50.7 C130.8 52.2 131.8 53.8 132.7 55.3;M134.5 46.4 C135.6 47.8 136.7 49.3 137.7 50.8;M134.6 47.1 C135.7 48.6 136.7 50 137.7 51.5;M135 45.7 C136 47.2 137 48.8 137.9 50.4;M136 45.1 C137 46.7 137.9 48.3 138.8 49.9;M136 45.1 C137 46.7 137.9 48.3 138.8 49.9;M136 45.1 C137 46.7 137.9 48.3 138.8 49.9;M136 45.1 C137 46.7 137.9 48.3 138.8 49.9;M136 45.1 C137 46.7 137.9 48.3 138.8 49.9;M136 45.1 C137 46.7 137.9 48.3 138.8 49.9;M134.6 47.1 C135.7 48.6 136.7 50 137.7 51.5;M131.5 48.7 C132.6 50.1 133.6 51.6 134.6 53.1;M125.7 55.6 C126.6 57.3 127.5 59 128.5 60.6;M118.5 62.6 C119.1 64.7 119.9 66.8 120.9 68.8;M111.7 66.9 C112 69.4 112.3 72.1 113.2 74.5;M109.5 67.6 C109.5 70.3 109.7 73 110.5 75.5;M109.5 67.6 C109.5 70.3 109.7 73 110.5 75.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka65" fill="none"><animate attributeName="d" values="M110.5 75.5 C111.2 78 112.2 80.5 113.8 82.5;M110.5 75.5 C111.2 78 112.2 80.5 113.8 82.5;M110.5 75.5 C111.2 78 112.2 80.5 113.8 82.5;M110.5 75.5 C111.2 78 112.2 80.5 113.8 82.5;M113.2 74.5 C114 76.9 115.2 79.2 116.8 81.1;M118.6 70.9 C119.6 73 120.8 75.1 122.3 76.8;M123.5 66.2 C124.5 68 125.7 69.8 127 71.4;M128.5 60.6 C129.5 62.2 130.5 63.8 131.6 65.4;M132.7 55.3 C133.7 56.8 134.7 58.3 135.7 59.8;M137.7 50.8 C138.6 52.2 139.5 53.8 140.3 55.4;M137.7 51.5 C138.6 53 139.5 54.6 140.3 56.2;M137.9 50.4 C138.9 51.9 139.7 53.6 140.5 55.2;M138.8 49.9 C139.6 51.6 140.4 53.3 141.1 55;M138.8 49.9 C139.6 51.6 140.4 53.3 141.1 55;M138.8 49.9 C139.6 51.6 140.4 53.3 141.1 55;M138.8 49.9 C139.6 51.6 140.4 53.3 141.1 55;M138.8 49.9 C139.6 51.6 140.4 53.3 141.1 55;M138.8 49.9 C139.6 51.6 140.4 53.3 141.1 55;M137.7 51.5 C138.6 53 139.5 54.6 140.3 56.2;M134.6 53.1 C135.6 54.6 136.6 56.1 137.5 57.7;M128.5 60.6 C129.5 62.2 130.5 63.8 131.6 65.4;M120.9 68.8 C121.9 70.7 123.1 72.6 124.5 74.3;M113.2 74.5 C114 76.9 115.2 79.2 116.8 81.1;M110.5 75.5 C111.2 78 112.2 80.5 113.8 82.5;M110.5 75.5 C111.2 78 112.2 80.5 113.8 82.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka66" fill="none"><animate attributeName="d" values="M113.8 82.5 C115.4 84.5 117.6 86.3 119.9 87.6;M113.8 82.5 C115.4 84.5 117.6 86.3 119.9 87.6;M113.8 82.5 C115.4 84.5 117.6 86.3 119.9 87.6;M113.8 82.5 C115.4 84.5 117.6 86.3 119.9 87.6;M116.8 81.1 C118.3 83 120.4 84.8 122.5 86;M122.3 76.8 C123.8 78.6 125.6 80.2 127.4 81.5;M127 71.4 C128.3 73 129.8 74.5 131.3 75.9;M131.6 65.4 C132.7 66.9 133.9 68.4 135.1 69.8;M135.7 59.8 C136.7 61.3 137.7 62.8 138.6 64.3;M140.3 55.4 C141.2 56.9 141.9 58.6 142.5 60.2;M140.3 56.2 C141 57.7 141.8 59.4 142.4 61;M140.5 55.2 C141.2 56.9 141.9 58.5 142.5 60.2;M141.1 55 C141.8 56.7 142.4 58.4 142.9 60.1;M141.1 55 C141.8 56.7 142.4 58.4 142.9 60.1;M141.1 55 C141.8 56.7 142.4 58.4 142.9 60.1;M141.1 55 C141.8 56.7 142.4 58.4 142.9 60.1;M141.1 55 C141.8 56.7 142.4 58.4 142.9 60.1;M141.1 55 C141.8 56.7 142.4 58.4 142.9 60.1;M140.3 56.2 C141 57.7 141.8 59.4 142.4 61;M137.5 57.7 C138.4 59.2 139.3 60.7 140.1 62.3;M131.6 65.4 C132.7 66.9 133.9 68.4 135.1 69.8;M124.5 74.3 C125.9 76 127.6 77.5 129.3 78.8;M116.8 81.1 C118.3 83 120.4 84.8 122.5 86;M113.8 82.5 C115.4 84.5 117.6 86.3 119.9 87.6;M113.8 82.5 C115.4 84.5 117.6 86.3 119.9 87.6" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka67" fill="none"><animate attributeName="d" values="M119.9 87.6 C122.2 88.9 125 89.8 127.6 90.3;M119.9 87.6 C122.2 88.9 125 89.8 127.6 90.3;M119.9 87.6 C122.2 88.9 125 89.8 127.6 90.3;M119.9 87.6 C122.2 88.9 125 89.8 127.6 90.3;M122.5 86 C124.7 87.3 127.3 88.2 129.6 88.8;M127.4 81.5 C129.2 82.8 131.3 83.8 133.2 84.5;M131.3 75.9 C132.8 77.2 134.5 78.4 136 79.3;M135.1 69.8 C136.2 71.2 137.5 72.5 138.6 73.8;M138.6 64.3 C139.5 65.8 140.4 67.3 141.3 68.8;M142.5 60.2 C143.2 61.9 143.7 63.6 144.2 65.3;M142.4 61 C143 62.6 143.6 64.3 144 66;M142.5 60.2 C143.1 61.9 143.7 63.7 144.1 65.4;M142.9 60.1 C143.5 61.8 144 63.6 144.4 65.4;M142.9 60.1 C143.5 61.8 144 63.6 144.4 65.4;M142.9 60.1 C143.5 61.8 144 63.6 144.4 65.4;M142.9 60.1 C143.5 61.8 144 63.6 144.4 65.4;M142.9 60.1 C143.5 61.8 144 63.6 144.4 65.4;M142.9 60.1 C143.5 61.8 144 63.6 144.4 65.4;M142.4 61 C143 62.6 143.6 64.3 144 66;M140.1 62.3 C141 63.8 141.8 65.4 142.4 66.9;M135.1 69.8 C136.2 71.2 137.5 72.5 138.6 73.8;M129.3 78.8 C131 80.1 132.9 81.2 134.6 82.1;M122.5 86 C124.7 87.3 127.3 88.2 129.6 88.8;M119.9 87.6 C122.2 88.9 125 89.8 127.6 90.3;M119.9 87.6 C122.2 88.9 125 89.8 127.6 90.3" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka68" fill="none"><animate attributeName="d" values="M127.6 90.3 C130.2 90.8 133.1 90.7 135.4 90.4;M127.6 90.3 C130.2 90.8 133.1 90.7 135.4 90.4;M127.6 90.3 C130.2 90.8 133.1 90.7 135.4 90.4;M127.6 90.3 C130.2 90.8 133.1 90.7 135.4 90.4;M129.6 88.8 C132 89.3 134.5 89.4 136.6 89.2;M133.2 84.5 C135.1 85.2 137.2 85.6 138.9 85.8;M136 79.3 C137.5 80.3 139.1 81.1 140.5 81.7;M138.6 73.8 C139.8 75 140.9 76.2 141.9 77.2;M141.3 68.8 C142.1 70.2 142.9 71.7 143.5 73.1;M144.2 65.3 C144.6 67 145 68.7 145.3 70.4;M144 66 C144.5 67.6 144.9 69.3 145.2 71;M144.1 65.4 C144.6 67.2 144.9 68.9 145.2 70.7;M144.4 65.4 C144.8 67.1 145.1 68.9 145.3 70.7;M144.4 65.4 C144.8 67.1 145.1 68.9 145.3 70.7;M144.4 65.4 C144.8 67.1 145.1 68.9 145.3 70.7;M144.4 65.4 C144.8 67.1 145.1 68.9 145.3 70.7;M144.4 65.4 C144.8 67.1 145.1 68.9 145.3 70.7;M144.4 65.4 C144.8 67.1 145.1 68.9 145.3 70.7;M144 66 C144.5 67.6 144.9 69.3 145.2 71;M142.4 66.9 C143.1 68.5 143.8 70.1 144.3 71.6;M138.6 73.8 C139.8 75 140.9 76.2 141.9 77.2;M134.6 82.1 C136.3 82.9 138.2 83.5 139.7 83.9;M129.6 88.8 C132 89.3 134.5 89.4 136.6 89.2;M127.6 90.3 C130.2 90.8 133.1 90.7 135.4 90.4;M127.6 90.3 C130.2 90.8 133.1 90.7 135.4 90.4" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka69" fill="none"><animate attributeName="d" values="M135.4 90.4 C137.8 90.2 140.1 89.4 141.7 88.6;M135.4 90.4 C137.8 90.2 140.1 89.4 141.7 88.6;M135.4 90.4 C137.8 90.2 140.1 89.4 141.7 88.6;M135.4 90.4 C137.8 90.2 140.1 89.4 141.7 88.6;M136.6 89.2 C138.8 89.1 140.8 88.5 142.3 87.9;M138.9 85.8 C140.5 86 142.1 85.8 143.3 85.6;M140.5 81.7 C141.8 82.4 143 82.8 143.9 83.1;M141.9 77.2 C142.9 78.3 143.8 79.2 144.5 80.1;M143.5 73.1 C144.2 74.5 144.8 75.9 145.2 77.3;M145.3 70.4 C145.6 72.1 145.8 73.9 145.9 75.6;M145.2 71 C145.5 72.8 145.7 74.5 145.8 76.2;M145.2 70.7 C145.5 72.5 145.7 74.2 145.9 76;M145.3 70.7 C145.6 72.5 145.8 74.2 145.9 76;M145.3 70.7 C145.6 72.5 145.8 74.2 145.9 76;M145.3 70.7 C145.6 72.5 145.8 74.2 145.9 76;M145.3 70.7 C145.6 72.5 145.8 74.2 145.9 76;M145.3 70.7 C145.6 72.5 145.8 74.2 145.9 76;M145.3 70.7 C145.6 72.5 145.8 74.2 145.9 76;M145.2 71 C145.5 72.8 145.7 74.5 145.8 76.2;M144.3 71.6 C144.8 73.2 145.2 74.8 145.5 76.3;M141.9 77.2 C142.9 78.3 143.8 79.2 144.5 80.1;M139.7 83.9 C141.2 84.3 142.6 84.4 143.7 84.4;M136.6 89.2 C138.8 89.1 140.8 88.5 142.3 87.9;M135.4 90.4 C137.8 90.2 140.1 89.4 141.7 88.6;M135.4 90.4 C137.8 90.2 140.1 89.4 141.7 88.6" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka70" fill="none"><animate attributeName="d" values="M141.7 88.6 C143.4 87.8 144.7 86.7 145.4 85.5;M141.7 88.6 C143.4 87.8 144.7 86.7 145.4 85.5;M141.7 88.6 C143.4 87.8 144.7 86.7 145.4 85.5;M141.7 88.6 C143.4 87.8 144.7 86.7 145.4 85.5;M142.3 87.9 C143.8 87.2 144.9 86.2 145.6 85.3;M143.3 85.6 C144.4 85.4 145.3 84.9 145.8 84.4;M143.9 83.1 C144.8 83.4 145.5 83.5 145.8 83.6;M144.5 80.1 C145.1 81 145.6 81.8 145.9 82.6;M145.2 77.3 C145.6 78.7 145.9 80 146 81.4;M145.9 75.6 C146 77.4 146 79.1 145.9 80.9;M145.8 76.2 C146 77.9 146 79.7 146 81.4;M145.9 76 C146 77.8 146 79.6 146 81.4;M145.9 76 C146 77.8 146 79.6 146 81.4;M145.9 76 C146 77.8 146 79.6 146 81.4;M145.9 76 C146 77.8 146 79.6 146 81.4;M145.9 76 C146 77.8 146 79.6 146 81.4;M145.9 76 C146 77.8 146 79.6 146 81.4;M145.9 76 C146 77.8 146 79.6 146 81.4;M145.8 76.2 C146 77.9 146 79.7 146 81.4;M145.5 76.3 C145.8 77.9 146 79.4 146 81;M144.5 80.1 C145.1 81 145.6 81.8 145.9 82.6;M143.7 84.4 C144.7 84.5 145.5 84.3 145.8 84.1;M142.3 87.9 C143.8 87.2 144.9 86.2 145.6 85.3;M141.7 88.6 C143.4 87.8 144.7 86.7 145.4 85.5;M141.7 88.6 C143.4 87.8 144.7 86.7 145.4 85.5" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
            <path id="ka71" fill="none"><animate attributeName="d" values="M145.4 85.5 C146.1 84.4 146.3 83.1 146 81.9;M145.4 85.5 C146.1 84.4 146.3 83.1 146 81.9;M145.4 85.5 C146.1 84.4 146.3 83.1 146 81.9;M145.4 85.5 C146.1 84.4 146.3 83.1 146 81.9;M145.6 85.3 C146.2 84.3 146.3 83.2 146 82.1;M145.8 84.4 C146.2 84 146.3 83.3 145.9 82.8;M145.8 83.6 C146.2 83.7 146.2 83.7 145.9 83.7;M145.9 82.6 C146.1 83.3 146.1 84 145.8 84.7;M146 81.4 C146.1 82.7 146 84 145.8 85.3;M145.9 80.9 C145.8 82.6 145.7 84.4 145.4 86.1;M146 81.4 C145.9 83.1 145.8 84.9 145.6 86.6;M146 81.4 C145.9 83.2 145.8 85 145.6 86.8;M146 81.4 C145.9 83.2 145.8 85 145.7 86.8;M146 81.4 C145.9 83.2 145.8 85 145.7 86.8;M146 81.4 C145.9 83.2 145.8 85 145.7 86.8;M146 81.4 C145.9 83.2 145.8 85 145.7 86.8;M146 81.4 C145.9 83.2 145.8 85 145.7 86.8;M146 81.4 C145.9 83.2 145.8 85 145.7 86.8;M146 81.4 C145.9 83.1 145.8 84.9 145.6 86.6;M146 81 C146 82.5 145.9 84.1 145.7 85.6;M145.9 82.6 C146.1 83.3 146.1 84 145.8 84.7;M145.8 84.1 C146.2 83.9 146.2 83.5 145.9 83.2;M145.6 85.3 C146.2 84.3 146.3 83.2 146 82.1;M145.4 85.5 C146.1 84.4 146.3 83.1 146 81.9;M145.4 85.5 C146.1 84.4 146.3 83.1 146 81.9" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></path>
          </defs>
          <use href="#ka56" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka56" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka57" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka57" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka55" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka55" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka58" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka58" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka54" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka54" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka59" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka59" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka53" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka53" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka42" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka42" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka41" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka41" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka43" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka43" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka40" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka40" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka44" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka44" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka60" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka60" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka52" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka52" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka39" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka39" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka45" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka45" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka61" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka61" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka67" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka67" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka38" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka38" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka66" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka66" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka46" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka46" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka51" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka51" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka68" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka68" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka65" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka65" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka62" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka62" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka64" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka64" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka47" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka47" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka63" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka63" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka37" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka37" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka69" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka69" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka50" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka50" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka48" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka48" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka49" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka49" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka36" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka36" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka70" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka70" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka35" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka35" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka71" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka71" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka34" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka34" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka33" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka33" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka0" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka0" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka32" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka32" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka23" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka23" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka22" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka22" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka24" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka24" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka1" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka1" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka21" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka21" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka31" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka31" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka8" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka8" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka25" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka25" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka9" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka9" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka7" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka7" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka30" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka30" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka26" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka26" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka2" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka2" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka20" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka20" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka6" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka6" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka10" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka10" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka29" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka29" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka27" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka27" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka28" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka28" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka5" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka5" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka3" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka3" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka4" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka4" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka19" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka19" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka11" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka11" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka18" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka18" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka12" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka12" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka17" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka17" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka13" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka13" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka16" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka16" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka14" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka14" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
          <use href="#ka15" stroke="#FAF9F6" stroke-linecap="butt" stroke-width="12.0"><animate attributeName="stroke-width" values="12;12;12;11.92;11.5;10.78;9.84;8.78;7.69;6.64;5.72;5.03;4.65;4.6;4.6;4.6;4.6;4.81;5.76;7.19;8.83;10.37;11.52;12;12" keyTimes="0;0.042;0.083;0.125;0.167;0.208;0.25;0.292;0.333;0.375;0.417;0.458;0.5;0.542;0.583;0.625;0.667;0.708;0.75;0.792;0.833;0.875;0.917;0.958;1" dur="16s" repeatCount="indefinite"/></use>
          <use href="#ka15" stroke="#2B54C4" stroke-width="4.6" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
`);

DECK.register('s16b-questions', `
  <div class="viz">
    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
      <div style="font-family:Figtree,sans-serif;font-weight:700;font-size:132px;letter-spacing:-0.035em;color:#191813;">Questions</div>
    </div>
  </div>
`);

DECK.register('s17-qr', `
  <header><h1>Feedback</h1><div class="kicker">Summer Seminar Day 2026</div></header>
  <div class="viz">
    <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:30px;">
      <div style="background:#fff;border:1px solid rgba(25,24,19,0.15);padding:26px;">
        <img src="qr_feedback.png" alt="feedback QR code" style="display:block;width:360px;height:360px;">
      </div>
      <div style="font-family:Figtree,sans-serif;font-weight:700;font-size:46px;letter-spacing:-0.02em;color:#191813;">Avigya Paudel</div>
      <div class="mono dim" style="font-size:24px;">scan to send feedback</div>
    </div>
  </div>
`);

DECK.register('a1-asrun', `
<div class="step-root" data-steps="2" data-step="0">
  <header><h1>Appendix · S and max knots</h1><div class="kicker">L + 20·S + 2·MK</div></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree" fill="#191813">

    <g data-at="0">
      <text x="110" y="46" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#191813" fill-opacity="0.5">worked example</text>

      <text x="110" y="130" font-family="Figtree" font-weight="600" font-size="32" fill="#191813">knots = blocks</text>

      <text x="200" y="212" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#191813">r₁</text>
      <rect x="230" y="178" width="116" height="50" rx="7" fill="#E05B2B" fill-opacity="0.13" stroke="#E05B2B" stroke-width="1.8" stroke-dasharray="7 5"/>
      <text x="249.3" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#E05B2B">y</text>
      <text x="288.0" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#E05B2B">y</text>
      <text x="326.7" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#E05B2B">y</text>
      <rect x="356" y="178" width="116" height="50" rx="7" fill="#2B54C4" fill-opacity="0.13" stroke="#2B54C4" stroke-width="1.8"/>
      <text x="375.3" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <text x="414.0" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <text x="452.7" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <rect x="482" y="178" width="116" height="50" rx="7" fill="#E05B2B" fill-opacity="0.13" stroke="#E05B2B" stroke-width="1.8" stroke-dasharray="7 5"/>
      <text x="501.3" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#E05B2B">y</text>
      <text x="540.0" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#E05B2B">y</text>
      <text x="578.7" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#E05B2B">y</text>
      <rect x="608" y="178" width="116" height="50" rx="7" fill="#2B54C4" fill-opacity="0.13" stroke="#2B54C4" stroke-width="1.8"/>
      <text x="627.3" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <text x="666.0" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <text x="704.7" y="212" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <text x="800" y="212" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#191813">→  2 knots</text>

      <text x="200" y="294" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#191813">r₂</text>
      <rect x="230" y="260" width="32" height="50" rx="7" fill="#E05B2B" fill-opacity="0.13" stroke="#E05B2B" stroke-width="1.8" stroke-dasharray="7 5"/>
      <text x="246.0" y="294" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#E05B2B">y</text>
      <rect x="272" y="260" width="74" height="50" rx="7" fill="#2B54C4" fill-opacity="0.13" stroke="#2B54C4" stroke-width="1.8"/>
      <text x="290.5" y="294" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <text x="327.5" y="294" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <rect x="356" y="260" width="32" height="50" rx="7" fill="#E05B2B" fill-opacity="0.13" stroke="#E05B2B" stroke-width="1.8" stroke-dasharray="7 5"/>
      <text x="372.0" y="294" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#E05B2B">y</text>
      <rect x="398" y="260" width="32" height="50" rx="7" fill="#2B54C4" fill-opacity="0.13" stroke="#2B54C4" stroke-width="1.8"/>
      <text x="414.0" y="294" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <rect x="440" y="260" width="32" height="50" rx="7" fill="#E05B2B" fill-opacity="0.13" stroke="#E05B2B" stroke-width="1.8" stroke-dasharray="7 5"/>
      <text x="456.0" y="294" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#E05B2B">y</text>
      <rect x="482" y="260" width="74" height="50" rx="7" fill="#2B54C4" fill-opacity="0.13" stroke="#2B54C4" stroke-width="1.8"/>
      <text x="500.5" y="294" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <text x="537.5" y="294" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="28" fill="#2B54C4">x</text>
      <text x="800" y="294" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#191813">→  3 knots</text>

      <text x="110" y="366" font-family="Figtree" font-weight="600" font-size="34" fill="#2B54C4">MK = max(2, 3) = 3</text>
      
      <line x1="110" y1="404" x2="1490" y2="404" stroke="#191813" stroke-opacity="0.12" stroke-width="1"/>

      <text x="110" y="470" font-family="Figtree" font-weight="600" font-size="32" fill="#191813">S = smaller mean block</text>

      <text x="440" y="536" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="21" fill="#191813" fill-opacity="0.4">r₁</text>
      <text x="700" y="536" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="21" fill="#191813" fill-opacity="0.4">r₂</text>

      <text x="110" y="580" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#2B54C4">x-blocks</text>
      <text x="400" y="580" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#2B54C4">3</text>
      <text x="480" y="580" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#2B54C4">3</text>
      <text x="620" y="580" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#2B54C4">2</text>
      <text x="700" y="580" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#2B54C4">1</text>
      <text x="780" y="580" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#2B54C4">2</text>
      <text x="900" y="580" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#2B54C4">mean 2.2</text>

      <text x="110" y="628" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#E05B2B">y-blocks</text>
      <text x="400" y="628" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#E05B2B">3</text>
      <text x="480" y="628" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#E05B2B">3</text>
      <text x="620" y="628" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#E05B2B">1</text>
      <text x="700" y="628" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#E05B2B">1</text>
      <text x="780" y="628" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#E05B2B">1</text>
      <text x="900" y="628" font-family="'IBM Plex Mono', monospace" font-size="26" fill="#E05B2B">mean 1.8</text>

      <text x="110" y="694" font-family="Figtree" font-weight="600" font-size="34" fill="#2B54C4">S = min(2.2, 1.8) = 1.8</text>
          </g>

    <g data-at="1">
      <text x="180" y="48" font-family="'IBM Plex Mono', monospace" font-size="28">S = min(mean x-run, mean y-run)</text>
      <rect x="1100" y="30" width="22" height="22" fill="#2B54C4"/>
      <text x="1132" y="48" font-family="'IBM Plex Mono', monospace" font-size="22">solved</text>
      <rect x="1260" y="30" width="22" height="22" fill="#E05B2B"/>
      <text x="1292" y="48" font-family="'IBM Plex Mono', monospace" font-size="22">unsolved</text>
      <line x1="150" y1="133.3" x2="1480" y2="133.3" stroke="#191813" stroke-opacity="0.12" stroke-width="1"/>
      <line x1="150" y1="240" x2="1480" y2="240" stroke="#191813" stroke-opacity="0.12" stroke-width="1"/>
      <line x1="150" y1="346.7" x2="1480" y2="346.7" stroke="#191813" stroke-opacity="0.12" stroke-width="1"/>
      <line x1="150" y1="453.3" x2="1480" y2="453.3" stroke="#191813" stroke-opacity="0.12" stroke-width="1"/>
      <line x1="150" y1="80" x2="150" y2="560" stroke="#191813" stroke-width="1.5"/>
      <line x1="150" y1="560" x2="1480" y2="560" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="80" x2="156" y2="80" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="133.3" x2="156" y2="133.3" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="240" x2="156" y2="240" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="346.7" x2="156" y2="346.7" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="453.3" x2="156" y2="453.3" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="560" x2="156" y2="560" stroke="#191813" stroke-width="1.5"/>
      <text x="128" y="88" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">450</text>
      <text x="128" y="141" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">400</text>
      <text x="128" y="248" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">300</text>
      <text x="128" y="355" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">200</text>
      <text x="128" y="461" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">100</text>
      <text x="128" y="568" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">0</text>
      <rect x="162" y="105.6" width="70" height="454.4" fill="#2B54C4"/>
      <rect x="248" y="312.5" width="70" height="247.5" fill="#E05B2B"/>
      <rect x="382" y="534.4" width="70" height="25.6" fill="#2B54C4"/>
      <rect x="602" y="370.1" width="70" height="189.9" fill="#2B54C4"/>
      <rect x="688" y="446.9" width="70" height="113.1" fill="#E05B2B"/>
      <rect x="908" y="406.4" width="70" height="153.6" fill="#E05B2B"/>
      <rect x="1042" y="551.5" width="70" height="8.5" fill="#2B54C4"/>
      <rect x="1262" y="555.7" width="70" height="4.3" fill="#2B54C4"/>
      <rect x="1348" y="487.5" width="70" height="72.5" fill="#E05B2B"/>
      <text x="197" y="130" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="26" fill="#FAF9F6">426</text>
      <text x="283" y="336" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="26" fill="#FAF9F6">232</text>
      <text x="417" y="526" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="20" fill="#2B54C4">24</text>
      <text x="637" y="412" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="22" fill="#FAF9F6">178</text>
      <text x="723" y="492" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="22" fill="#FAF9F6">106</text>
      <text x="943" y="448" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="22" fill="#FAF9F6">144</text>
      <text x="1077" y="544" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="20" fill="#2B54C4">8</text>
      <text x="1297" y="548" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="20" fill="#2B54C4">4</text>
      <text x="1383" y="528" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="22" fill="#FAF9F6">68</text>
      <text x="240" y="598" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24">1.0</text>
      <text x="460" y="598" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24">1.2</text>
      <text x="680" y="598" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24">1.25</text>
      <text x="900" y="598" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24">1.4</text>
      <text x="1120" y="598" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24">1.5</text>
      <text x="1340" y="598" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24">1.75</text>
      <text x="800" y="648" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.45">S · cyclic runs · 1,190</text>
      <line x1="830" y1="80" x2="830" y2="560" stroke="#E05B2B" stroke-width="2.4" stroke-dasharray="10 8"/>
      <text x="850" y="120" font-family="Figtree" font-weight="600" font-size="32" fill="#E05B2B">S ≥ 1.4</text>
      <text x="850" y="158" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#E05B2B">212 unsolved · 12 solved</text>
    </g>

    <g data-at="2">
      <text x="180" y="48" font-family="'IBM Plex Mono', monospace" font-size="28">MK = max knots over the two relators</text>
      <rect x="1020" y="30" width="22" height="22" fill="#2B54C4"/>
      <text x="1052" y="48" font-family="'IBM Plex Mono', monospace" font-size="22">solved · 113</text>
      <rect x="1260" y="30" width="22" height="22" fill="#E05B2B"/>
      <text x="1292" y="48" font-family="'IBM Plex Mono', monospace" font-size="22">unsolved · 124</text>
      <line x1="150" y1="200" x2="1480" y2="200" stroke="#191813" stroke-opacity="0.12" stroke-width="1"/>
      <line x1="150" y1="320" x2="1480" y2="320" stroke="#191813" stroke-opacity="0.12" stroke-width="1"/>
      <line x1="150" y1="440" x2="1480" y2="440" stroke="#191813" stroke-opacity="0.12" stroke-width="1"/>
      <line x1="150" y1="80" x2="150" y2="560" stroke="#191813" stroke-width="1.5"/>
      <line x1="150" y1="560" x2="1480" y2="560" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="80" x2="156" y2="80" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="200" x2="156" y2="200" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="320" x2="156" y2="320" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="440" x2="156" y2="440" stroke="#191813" stroke-width="1.5"/>
      <line x1="144" y1="560" x2="156" y2="560" stroke="#191813" stroke-width="1.5"/>
      <text x="128" y="88" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">120</text>
      <text x="128" y="208" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">90</text>
      <text x="128" y="328" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">60</text>
      <text x="128" y="448" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">30</text>
      <text x="128" y="568" text-anchor="end" font-family="'IBM Plex Mono', monospace" font-size="22">0</text>
      <rect x="220" y="156" width="70" height="404" fill="#2B54C4"/>
      <rect x="310" y="468" width="70" height="92" fill="#E05B2B"/>
      <rect x="520" y="512" width="70" height="48" fill="#2B54C4"/>
      <rect x="610" y="212" width="70" height="348" fill="#E05B2B"/>
      <rect x="910" y="524" width="70" height="36" fill="#E05B2B"/>
      <rect x="1210" y="540" width="70" height="20" fill="#E05B2B"/>
      <text x="255" y="180" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="26" fill="#FAF9F6">101</text>
      <text x="345" y="492" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="22" fill="#FAF9F6">23</text>
      <text x="555" y="504" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="20" fill="#2B54C4">12</text>
      <text x="645" y="236" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="26" fill="#FAF9F6">87</text>
      <text x="945" y="516" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="20" fill="#E05B2B">9</text>
      <text x="1245" y="532" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-weight="700" font-size="20" fill="#E05B2B">5</text>
      <text x="300" y="598" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24">2</text>
      <text x="600" y="598" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24">3</text>
      <text x="900" y="598" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24">4</text>
      <text x="1200" y="598" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24">5</text>
      <text x="800" y="648" text-anchor="middle" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#191813" fill-opacity="0.45">MK · 237 Aut-minimal orbits</text>
      <line x1="750" y1="80" x2="750" y2="560" stroke="#E05B2B" stroke-width="2.4" stroke-dasharray="10 8"/>
      <text x="770" y="120" font-family="Figtree" font-weight="600" font-size="32" fill="#E05B2B">MK ≥ 4</text>
      <text x="770" y="158" font-family="'IBM Plex Mono', monospace" font-size="24" fill="#E05B2B">14 unsolved · 0 solved</text>
    </g>

    <g>
      <circle class="dot d0" cx="776" cy="736" r="7"/>
      <circle class="dot d1" cx="800" cy="736" r="7"/>
      <circle class="dot d2" cx="824" cy="736" r="7"/>
    </g>
  </svg></div>
</div>
`);

DECK.register('a2-path', `
  <header><h1>Appendix · cheaper nodes, longer paths</h1></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree">
    <line x1="90" y1="560" x2="1410" y2="560" stroke="#191813" stroke-width="1.5"/>
    <line x1="90" y1="560" x2="90" y2="548" stroke="#191813" stroke-width="1.5"/>
    <text x="90" y="588" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">0</text>
    <text x="530" y="588" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">10</text>
    <line x1="530" y1="560" x2="530" y2="548" stroke="#191813" stroke-width="1.5"/>
    <text x="970" y="588" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">20</text>
    <line x1="970" y1="560" x2="970" y2="548" stroke="#191813" stroke-width="1.5"/>
    <text x="1410" y="588" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">30</text>
    <line x1="1410" y1="560" x2="1410" y2="548" stroke="#191813" stroke-width="1.5"/>

    <text x="90" y="188" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813">length · 23.5</text>
    <rect x="90" y="206" width="1034" height="70" fill="#191813" fill-opacity="0.40"/>
    <text x="1140" y="252" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813">23.5</text>

    <text x="90" y="368" font-family="IBM Plex Mono, monospace" font-size="26" fill="#2B54C4">heuristic · 26.6</text>
    <rect x="90" y="386" width="1170" height="70" fill="#2B54C4"/>
    <text x="1276" y="432" font-family="IBM Plex Mono, monospace" font-size="26" fill="#2B54C4">26.6</text>

    <text x="800" y="690" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.40">the heuristic spends moves to save nodes · 70,502 both-solved</text>
  </svg></div>
`);

DECK.register('a3-cap', `
  <header><h1>Appendix · raising the cap doesn't help</h1></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree">
    <text x="800" y="250" text-anchor="middle" font-family="Figtree" font-weight="700" font-size="52" fill="#191813" letter-spacing="-0.02em">L = 24  ≡  L = 48</text>
    <text x="800" y="302" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813" fill-opacity="0.40">byte-identical visited sets · 16 / 16 runs</text>

    <line x1="560" y1="370" x2="1040" y2="370" stroke="#191813" stroke-opacity="0.14" stroke-width="1.5"/>

    <text x="800" y="470" text-anchor="middle" font-family="Figtree" font-weight="700" font-size="52" fill="#E05B2B" letter-spacing="-0.02em">0 / 1,800</text>
    <text x="800" y="522" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813" fill-opacity="0.40">over-cap candidates solve</text>
  </svg></div>
`);

DECK.register('a4-beam', `
  <header><h1>Appendix · a CoV beam beats the oracle</h1></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree">
    <line x1="120" y1="400" x2="1480" y2="400" stroke="#191813" stroke-width="1.5"/>
    <line x1="120" y1="400" x2="120" y2="388" stroke="#191813" stroke-width="1.5"/>
    <line x1="573" y1="400" x2="573" y2="388" stroke="#191813" stroke-width="1.5"/>
    <line x1="1027" y1="400" x2="1027" y2="388" stroke="#191813" stroke-width="1.5"/>
    <line x1="1480" y1="400" x2="1480" y2="388" stroke="#191813" stroke-width="1.5"/>
    <text x="120" y="432" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">0</text>
    <text x="573" y="432" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">20</text>
    <text x="1027" y="432" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">40</text>
    <text x="1480" y="432" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">60</text>

    <circle cx="777" cy="400" r="11" fill="#191813"/>
    <text x="777" y="520" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">greedy · 29</text>
    <line x1="777" y1="412" x2="777" y2="488" stroke="#191813" stroke-opacity="0.25" stroke-width="1.5"/>

    <circle cx="1095" cy="400" r="11" fill="#191813"/>
    <text x="1078" y="248" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">fair-budget heuristic · 43</text>
    <line x1="1095" y1="388" x2="1095" y2="268" stroke="#191813" stroke-opacity="0.25" stroke-width="1.5"/>

    <circle cx="1140" cy="400" r="13" fill="none" stroke="#191813" stroke-opacity="0.35" stroke-width="2.2"/>
    <text x="1140" y="580" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">oracle best-CoV · 45</text>
    <line x1="1140" y1="414" x2="1140" y2="548" stroke="#191813" stroke-opacity="0.25" stroke-width="1.5"/>

    <circle cx="1231" cy="400" r="18" fill="#2B54C4"/>
    <path d="M1222 401 L1228 409 L1242 390" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="1252" y="188" text-anchor="start" font-family="IBM Plex Mono, monospace" font-size="24" fill="#2B54C4">CoV beam K=4 · 49</text>
    <line x1="1231" y1="380" x2="1231" y2="208" stroke="#2B54C4" stroke-opacity="0.35" stroke-width="1.5"/>
  </svg></div>
`);

DECK.register('a5-relabel', `
  <header><h1>Appendix · relabels inflated the CoV headline</h1></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree">
    <line x1="90" y1="560" x2="1410" y2="560" stroke="#191813" stroke-width="1.5"/>
    <line x1="90" y1="560" x2="90" y2="548" stroke="#191813" stroke-width="1.5"/>
    <text x="90" y="588" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">0</text>
    <text x="750" y="588" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">4×</text>
    <line x1="750" y1="560" x2="750" y2="548" stroke="#191813" stroke-width="1.5"/>
    <text x="1410" y="588" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813">8×</text>
    <line x1="1410" y1="560" x2="1410" y2="548" stroke="#191813" stroke-width="1.5"/>

    <text x="90" y="188" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813" fill-opacity="0.40">all CoVs · median cut 7.58×</text>
    <rect x="90" y="206" width="1251" height="70" fill="#191813" fill-opacity="0.40"/>
    <text x="1360" y="252" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813">7.58×</text>

    <text x="90" y="368" font-family="IBM Plex Mono, monospace" font-size="26" fill="#2B54C4">non-automorphic only · 3.62×</text>
    <rect x="90" y="386" width="597" height="70" fill="#2B54C4"/>
    <text x="704" y="432" font-family="IBM Plex Mono, monospace" font-size="26" fill="#2B54C4">3.62×</text>

    <text x="800" y="690" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.40">87% of CoV candidates are relabelings</text>
  </svg></div>
`);

DECK.register('a6-timeline', `
  <header><h1>Appendix · AK(3) in the literature</h1></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree">
    <defs>
      <marker id="a6-ai" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0 1 L7 4 L0 7 Z" fill="#191813" fill-opacity="0.35"/>
      </marker>
    </defs>

    <line x1="90" y1="380" x2="1510" y2="380" stroke="#191813" stroke-opacity="0.35" stroke-width="2" marker-end="url(#a6-ai)"/>

    <circle cx="220" cy="380" r="11" fill="#191813"/>
    <text x="220" y="428" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.40">Aug 2024</text>
    <text x="220" y="268" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="30" fill="#191813">Shehper v1</text>
    <text x="220" y="308" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="26" fill="#191813">trivialization claimed</text>

    <circle cx="620" cy="380" r="11" fill="#191813"/>
    <text x="620" y="428" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.40">Jan 2025</text>
    <text x="620" y="268" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="30" fill="#191813">Lisitsa</text>
    <text x="620" y="308" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="26" fill="#191813">follow-up work</text>

    <circle cx="1020" cy="380" r="11" fill="#191813"/>
    <text x="1020" y="428" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.40">Feb 2025</text>
    <text x="1020" y="268" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="30" fill="#191813">Shehper v2</text>
    <text x="1020" y="308" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="26" fill="#191813">claim rescinded</text>

    <circle cx="1420" cy="380" r="22" fill="#E05B2B"/>
    <rect x="1418" y="364" width="4" height="16" rx="1.5" fill="#fff"/>
    <circle cx="1420" cy="388" r="2.2" fill="#fff"/>
    <text x="1420" y="428" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#E05B2B">today</text>
    <text x="1420" y="288" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="30" fill="#E05B2B">open</text>
  </svg></div>
`);

DECK.register('a7-trivial', `
  <header><h1>Appendix · how we know the group is 1</h1></header>
  <div class="viz"><svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid meet" font-family="Figtree">
    <g transform="translate(280, 210)">
      <circle r="48" fill="none" stroke="#191813" stroke-width="2"/>
      <text y="2" text-anchor="middle" dominant-baseline="middle" font-family="IBM Plex Mono, monospace" font-size="36" fill="#191813">1</text>
    </g>
    <text x="280" y="292" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="30" fill="#191813">balanced</text>
    <text x="280" y="338" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.55">2 generators, 2 rules</text>

    <g transform="translate(800, 210)">
      <circle r="48" fill="none" stroke="#191813" stroke-width="2"/>
      <text y="2" text-anchor="middle" dominant-baseline="middle" font-family="IBM Plex Mono, monospace" font-size="36" fill="#191813">2</text>
    </g>
    <text x="800" y="292" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="30" fill="#191813">abelianization</text>
    <text x="800" y="338" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#191813" fill-opacity="0.55">letter-counts · det ±1</text>

    <g transform="translate(1320, 210)">
      <circle r="48" fill="none" stroke="#2B54C4" stroke-width="2"/>
      <text y="2" text-anchor="middle" dominant-baseline="middle" font-family="IBM Plex Mono, monospace" font-size="36" fill="#2B54C4">3</text>
    </g>
    <text x="1320" y="292" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="30" fill="#2B54C4">helper letter</text>
    <text x="1320" y="338" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#2B54C4">add z → it trivializes</text>

    <line x1="200" y1="430" x2="1400" y2="430" stroke="#191813" stroke-opacity="0.12" stroke-width="1.5"/>

    <text x="800" y="510" text-anchor="middle" font-family="Figtree" font-weight="600" font-size="34" fill="#191813">the group is 1</text>
    <text x="800" y="562" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="26" fill="#191813" fill-opacity="0.55">AC forbids the helper letter</text>
    <text x="800" y="640" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="24" fill="#E05B2B">AK(3) is stably trivial · still no AC path</text>
  </svg></div>
`);
