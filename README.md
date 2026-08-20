# The Stable Andrews–Curtis Conjecture

Slide deck for a Caltech SURF talk on the stable Andrews–Curtis conjecture — change of variables and heuristic search for evaluations.

**View the deck: https://avi161.github.io/stable-andrews-curtis/**

Avigya Paudel · Prof. Sergei Gukov, Math AI Group, Caltech · Lucas Fagan · Giorgi Butbaia · Michele Tarquini

## Running it

Open `index.html` in Chrome — everything (fonts included) is local, no build step, no network.

| key | action |
| --- | --- |
| `→` / `space` | next step or slide |
| `←` | back |
| `↓` / `n` | skip the rest of this slide's sub-steps |
| `↑` / `p` | back a whole slide |
| `f` | fullscreen (or the **present ⤢** pill) |
| `m` | slide menu |
| `a` | jump to the Q&A appendix |
| `Home` / `End` | first / last core slide |

23 core slides plus a Q&A appendix, designed at 4:3 (1440×1080) and letterboxed to fit any screen.

## Files

- `index.html` — stage, styling, step machinery, keyboard and menu navigation
- `slides_a.js`, `slides_b.js`, `slides_c.js` — the slides, registered into `DECK.ORDER`
- `fonts/` — Figtree and IBM Plex Mono, subset to woff2
- `SPEAKER_NOTES.md` — per-slide script and timing
- `AC_slides_4x3.pdf` — static PDF backup of the deck
- `serve.py`, `remote.html` — optional local server and phone remote for presenting
