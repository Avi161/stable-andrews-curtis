# Speaker notes — The Stable Andrews–Curtis Conjecture

Deck: open `index.html` in Chrome. `F` = fullscreen (or the **present ⤢** pill, bottom left), `m` = the slide menu (the **☰** button, top left — click any title to jump), `→`/`space` = next, `←` = back, `a` = jump to Q&A appendix, `Home`/`End` = first/last core slide. `↓` (or `n`) = **skip the rest of this slide's sub-steps and move on**, `↑` (or `p`) = back a whole slide; on any stepped slide a faint **`skip parts →`** pill also sits above the slide counter, bottom right, if you would rather click it. Slides 5, 6, 8, 9, 11, 12, 13, and 15 are **click-throughs** (appendix 1 too); slide 6 auto-plays its first S-move on one press. Slides carry almost no words by design — **you** are the words. One idea per slide, ~50 seconds each. The deck is **4:3 (1440×1080)** as SFP requires; it letterboxes cleanly on any screen. Core is **22 slides**.

**Logistics (Thu Aug 20):** your talk is at **1:20 PM, first block** — pick up your name tag in the **Jorgensen lobby by 12:30 PM**. Find the room beforehand. Own laptop; projector, laser pointer, and wireless advancer are provided. Practice one advance with the clicker before the block starts. Format: **15 minutes + 2–3 min Q&A**. The core script below plays at ~15.

---

## The first minute — memorize this verbatim

> Hi, I'm Avigya. This summer, in Professor Gukov's lab, working with Lucas Fagan, Giorgi Butbaia, and Michele Tarquini, I worked on a sixty-year-old open problem called the Andrews–Curtis conjecture. It's about the simplest object in algebra: the trivial group — the group that is just the identity element and nothing else. *(pause)* Here's the strange part: a *description* of the trivial group can be extraordinarily complicated. A group is given by generators and rules. Capitals are inverses: X is x-inverse, Y is y-inverse. Both presentations on this slide describe the trivial group. The left one — ⟨ x, y | x, y ⟩ — obviously. The right one — ⟨ x, y | YYXyx, Yx ⟩ — also collapses to the identity — we can prove it — but you can't see it by looking. In general, deciding whether a set of rules describes the trivial group is undecidable. The complexity isn't in the object. It's in the description.

That lands you on slide 2 at ~1:00. From there, the descent begins.

---

## Per-slide script (~45–60 s each)

### 1 · Title — The Andrews–Curtis Conjecture (0:00)
First two sentences of the memorized minute. Smile, breathe, don't rush.

### 2 · Both are balanced presentations of the trivial group (0:40)
Rest of the memorized minute. Point at the kicker: X is x-inverse, Y is y-inverse. Then the left card — ⟨ x, y | x, y ⟩ — then the right — ⟨ x, y | YYXyx, Yx ⟩. Both are the trivial group. End on "complexity isn't in the object, it's in the description."

### 3 · Does a path always exist? (1:40)
> Those three moves — invert, conjugate, multiply — never change the group. Starting from ⟨ x, y | YYXyx, Yx ⟩, Andrews and Curtis asked: does a path of those moves *always* reach the trivial presentation, ⟨ x, y | x, y ⟩? Most branches are dead ends. Sixty years later — nobody knows. *(pause)* Here's my roadmap: the substitution we search with; then the main work this summer — stable Andrews–Curtis, Lemma 11, and change of variables; then the census, 640 plus 550 down to 124, and what greedy and a heuristic actually buy; and I'll finish on the one presentation everybody gets stuck on. *(that sentence is the spoken roadmap the judges score — don't skip it)*

### 4 · Three moves (2:20)
> You prove it with three elementary moves that never change the group. Invert: ⟨ x, y | xy, Yx ⟩ becomes ⟨ x, y | YX, Yx ⟩ — only r₁ changes.

> Conjugate by a generator: xy → (x)xy(X) → xxyX. So ⟨ x, y | xxyX, Yx ⟩. g is x, y, X, or Y — not an arbitrary word.

> Multiply: both relators, then r₁ becomes r₁ r₂. xy · Yx, yY cancel, r₁ is xx. ⟨ x, y | xx, Yx ⟩. Repeat freely — the group never changes.

### 5 · An example (2:55) — click through, 5 presses

A deliberately small warm-up, not the presentation from slide 2 — that one comes back on slide 6 with S-moves. ⟨ x, y | yX, Xyx ⟩: two relators, five letters, and it dies in **three moves, one of each kind**, in the same order the moves are numbered on slide 4. Each press adds a row and the rows stay, so by the end the whole trivialization is on screen at once. The changed relator is in blue. Watch the presentation physically shrink down the page.

0. "Take ⟨ x, y | yX, Xyx ⟩ — two relators, five letters between them. It is the trivial group: the first relator says y equals x, the second says a conjugate of y is trivial, so y is trivial, so x is."
1. "Move 1, invert. yX read backwards with every letter flipped is xY. ⟨ x, y | xY, Xyx ⟩."
2. "Move 2, conjugate. Glue x on the left of r₂ and X on the right — the two orange tiles: x·Xyx·X."
3. "Now cancel. The x and X at the front annihilate, and what is left is yxX — the X has rotated round to the back, where it meets the x and cancels too. r₂ is just y. **That is the move worth remembering — conjugation is a rotation, and rotating a word can expose a cancellation you could not see before.**" The rotation panel under the row is the same thing in one line: Xyx → yxX, first letter to the back. It comes back on the very next slide as the rotate inside an S-move.
4. "Move 3, multiply. Glue r₂ onto the back of r₁ — the orange tile: xY·y."
5. "The Y and y cancel, r₁ is x. ⟨ x, y | x, y ⟩. Trivial, in three moves — one invert, one conjugate, one multiply. The group never changed; only the description did."

If you are tight on time: press straight through and only narrate steps 2–3.

### 6 · One S-move (3:45) — click through, 6 presses
Alphabet on the tiles: x-family blue, y-family orange, and **inverses are set noticeably larger than their generators** — `X` towers over `x`, `Y` over `y` — so nobody has to judge upper vs lower case from the back of the room. Say "X-inverse" out loud the first time; after that the size does the work. The four labels in the blue frame are *parts of one S-move*, not four S-moves. **The whole first S-move plays on one press.** From step 1, one `→` starts rotate → concatenate → cancel → cyclic-reduce and runs itself for ~15s, then parks on the result; beats 2–5 below are one continuous animation, not four clicks. Talk over it — the notes below are paced to the beats. If you need to stop it, `←` cancels the chain. Rotate: tiles *jump* — leftmost letters hop up and land on the right; the rest slide left. Both relators stay on screen. Ghost tiles are an r₂ *copy* inside the product; the filled r₂ slot never leaves.

0. "You can't search with the elementary moves directly — one letter at a time, the tree explodes. One substitution, the S-move, packages those three moves. Formally: replace one relator by a rotation of itself times a rotation of the other, or its inverse, then cancel. The other relator stays put. Those four labels are parts of that one move."
1. "Same first relator as slide 4: r₁ is YYXyx. r₂ is YYx — one extra Y, so we can actually rotate a copy of it. One S-move: k₁ = 3, k₂ = 2, written into r₁. No invert. Both relators stay."
2. *(auto, ~6.9s)* "Watch the boxes jump. r₁ left by three: the left Y hops up and lands toward the right; then the next Y; then X. y and x slide left. Same on r₂, left by two. After the jump: ⟨ yxYYX, xYY ⟩. Both relators still on screen."
3. *(auto, ~2.6s)* "Concatenate into r₁. The product is the new r₁: yxYYX · xYY. The filled r₂ is still YYx — it never left its slot."
4. *(auto, ~3.5s)* "Xx cancel. What remains of r₁ is yxYYYY. r₂ is still YYx."
5. *(end of the chain — waits for you)* "Cyclic reduce, then Booth. The leading y hops to the end: xYYYYy. Yy cancel, leaving xYYY. Then x hops: YYYx. ⟨ x, y | YYYx, YYx ⟩."
6. "S-move 2: invert a copy of r₂, multiply into r₁. YYYx · Xyy. Three inverse pairs cancel from the join. ⟨ Y, YYx ⟩. r₂ still YYx."
7. "S-move 3, into r₂: invert a copy, multiply. Y · Xyy. Ends cancel. ⟨ Y, Xy ⟩."
8. "Last S-move: ⟨ Y, Xy ⟩ to ⟨ Y, X ⟩. Trivial — equivalent to ⟨ x, y | x, y ⟩. Four S-moves."

If tight: 0→2 (let it run to 5)→8. Presses: 0, 1, 2, then 6, 7, 8 — six.

### 7 · Four S-moves, fourteen elementary AC (4:30)
No clicks. Both relators stay in the path. Cyclic reduce is free, so the count is fourteen, not fifteen.

"The whole path: fourteen elementary AC moves, four substitutions. That is why we search over S-moves from here on."

### 8 · Stable Andrews–Curtis (5:05) — click through, 3 steps
This is the main work of the summer. Do not rush it.

0. "Ordinary Andrews–Curtis forbids adding letters. Stable AC adds two moves. Stabilize: ⟨ x, y | r₁, r₂ ⟩ to ⟨ x, y, z | r₁, r₂, z ⟩ — a new generator z, and a new relator z. Destabilize is the reverse: ⟨ x, y, z | r₁, r₂, z ⟩ to ⟨ x, y | r₁, r₂ ⟩, when that extra relator is the extra generator. With these, does a path always exist?"
1. "Lemma 11, from Shehper and coauthors: if you have an extra letter y, and a relator that says y is equal to a word w in the old letters, then you may replace y by w everywhere and drop y. Intuitively: if an extra letter is defined as a word, substitute and drop it. That is the corridor we actually use."
2. *(the example — everything blue is the same thing)* "Concretely. Top line, two relators in x and y, and the word Xy shows up three times — those are the blue pieces. Read the lemma backwards: call that word z. Bottom line, every blue Xy has become a single blue z, and we carry one extra relator, Z times Xy, which is exactly the sentence *z equals Xy*. Same group, one more letter, much shorter relators. Read it downwards it's a stabilize; read it upwards — substitute Xy back in and drop z — it's a destabilize. That is Lemma 11 in both directions, and it is the move the next slide is built on."

If tight: one sentence on stabilize/destabilize, then click straight to the example on step 2.

### 9 · Change of variables (5:50) — click through, 5 steps
Same presentation as slide 2. Point at the letters; do not narrate a commuting square.

0. Animated — let the tiles land before you speak. "Take ⟨ x, y | YYXyx, Yx ⟩. Pick any word in the old letters: z = Xy." Then, as the two tiles swap and flip: "and z inverse is that word read backwards with every letter inverted — Y x. So z stands for the word, z inverse for its inverse. That is the whole trick."
1. "Stabilize: add generator z and relator ZXy. That is z = Xy. ⟨ x, y, z | YYXyx, Yx, ZXy ⟩."
2. Animated — before stays on top, the two rules pop in, then the result. "Every copy of the word becomes z, every copy of its inverse becomes z inverse. Xy inside r₁ becomes z — YYzx. r₂ is Yx, which is z inverse — just Z. The third relator is the definition, so it stays. And now x appears exactly once, in YYzx — so x = Zyy. That is the isolate."
3. Animated, ~3.5 s in three beats — let each land. "x = Zyy, so X = YYz. Substitute *every* occurrence: the x at the end of r₁ becomes Zyy, the X in the third relator becomes YYz. Now look at r₁ — YYz·Zyy. The z and Z cancel, the y's cancel, the whole relator freely reduces to nothing. It says nothing any more. So x has no relator holding it and we destabilize it away: ⟨ y, z | Z, ZYYzy ⟩. That is Lemma 11 — substitute first, drop second."
4. "Relabel y, z to x, y. Back to two generators: ⟨ x, y | Y, YXXyx ⟩."

If tight: 0 then 4. Steps 0, 2 and 3 each run 2.5–3.5 s of animation — pause, don't talk over them.

### 10 · A benchmark subset of 1,190 presentations (6:35)
No clicks. The 1,190 only — not S, not MK, not “long blocks.” Those live in appendix 1, only if asked or if you have time.

> The whole family: one thousand one hundred ninety Miller–Schupp presentations. Six hundred forty we can solve. Five hundred fifty we cannot. The previous paper — Two-Hump, the appendix — reduced those 550 to 261 unsolved classes.

### 11 · Cost of a change of variables (7:15) — click through, 2 steps

Log–log, both axes nodes explored, dashed `y = x`. One dot = one (presentation, rewrite) pair where **both** the plain run and the rewritten run finished inside the 10,000-node budget: 66 presentations × 45 CoVs, 546 such pairs. Orange above the line, blue below. **Step 1** overlays the black diamonds — for each presentation, the cheapest CoV that solved it. The denominator is 40, not 66: those are the presentations where plain greedy *and* at least one CoV both finished in budget. Split is 37 fewer nodes / 1 equal / 2 more. The nine rescues (greedy failed, a CoV solved) are deliberately **not** on the slide — say them yourself. The slide says CoV throughout; say "change of variables" in full the first time, then CoV.

> Every dot is one presentation solved twice: once plain, once after a change of variables. The horizontal axis is what plain greedy cost, the vertical axis what the rewrite cost. Above the dashed line the rewrite used more nodes; below it, fewer. Two hundred and eighty-eight used fewer. Two hundred and thirty-five used more. Twenty-three were unchanged. So on its own, a change of variables is about as likely to hurt as to help. *(click)* Now the diamonds — for each presentation, the cheapest change of variables that solved it. Forty presentations are in this comparison: those plain greedy solved and at least one change of variables also solved. On thirty-seven of the forty, the best one uses fewer nodes than plain greedy; the median is two and a half times fewer. On the other three, no change of variables beat plain greedy at all — doing nothing is not one of the forty-five options, so the best available one can still be worse. And nine further presentations get solved that plain greedy could not solve. So a change of variables is only useful if you can choose the right one. That is the next slide.

This sets up slide 16; do not give away the answer here. If you are running long this is the **first slide to drop** — press `↓` (or the `skip parts →` pill) on slide 14 and go straight to mass.

### 12 · The subset-60 benchmark (7:50) — click through, 2 steps
How the benchmark was built, and what the change of variables buys. Say the numbers; don't read the bars. The left column on step 0 is *nodes explored* — the bin edges run 3–10 up to 170k–575k, so you can point at the bottom two rows when you say "the hardest bins".

0. "Six hundred forty presentations, sorted by what plain greedy costs on each, then cut into ten bins — each bin three point four times harder than the one below. Take six from every bin. The two hardest bins only hold six, so those go in whole. That's the sixty, and forty-five of them are distinct up to change of variables."
1. "Both arms solve all sixty, so these are like-for-like. Nodes explored: on the mean, greedy burns forty-five thousand against two thousand four hundred — nineteen times fewer. On the median, thirteen hundred against thirty-four — thirty-eight times fewer. And the paths come down too: mean a hundred and forty-three moves to ninety-seven, median forty-six to sixteen."

Each panel is scaled to its own greedy bar — mean and median bars are not comparable across panels; the ratio inside each panel is the point. If asked "best CoV means what?": the cheapest of eleven to a hundred and seventy-three transformed starts — an oracle, not a single search. The beam that runs without the oracle is appendix `a4`. If asked about the path numbers: the CoV path is counted in the new coordinates, so it is not a certificate for the original pair.

### 13 · 261 problems are really 124 (8:40) — click through, 4 steps
261 is the previous paper's count, not ours. This work is 261 → 124. The pair on this slide is two unsolved Miller–Schupp presentations — neither is in the 640.

0. "Two leftover presentations. Both unsolved. Left: ⟨ YYYYXyyyx, YXYxx ⟩. Right: ⟨ YYYYXyyyx, YXXYx ⟩. Same first word, different second word. They look like two problems."
1. "An automorphism: send y to y-inverse. Watch the arrows — every Y becomes y, every y becomes Y; x does not move. You can see the map and both rows at once. The left presentation is now ⟨ yyyyXYYYx, yXyxx ⟩ — still not the right-hand one."
2. "Invert: reverse each relator and invert the letters. ⟨ yyyyXYYYx, yXyxx ⟩ becomes ⟨ XyyyxYYYY, XXYxY ⟩. The other presentation is already canonical — they still don't match."
3. "Rotate to lex-min. Tiles hop, one letter at a time. Both become ⟨ YYYYXyyyx, YXXYx ⟩. Same problem. That one map — y to y-inverse — does 88 percent of the Aut merging. Add short move-paths, and the previous paper's 261 collapses to 124 genuinely distinct hard problems. That's the enemy's real size."

If tight: click 0→3 and say the Aut in one sentence.

### 14 · A better heuristic: 221 → 39 (9:20)
> So we put structure into the ranking. Instead of ordering moves by length alone, we rank by length plus twenty times S plus two times the knot count. Then we validated at scale: seventy thousand seven hundred twenty-three distinct starting presentations, both rankings, out to a budget of a hundred thousand nodes. At ten thousand, plain length still has eight hundred and thirty-one unsolved and the new heuristic two hundred and fifty-nine. Run both out to a hundred thousand: length leaves 221, the heuristic 39. Five times fewer, and it never loses a presentation length could solve. In the hardest bin it turns 95 solves into 277. *(this is your headline — slow down)*

The x axis is a log node budget — the four points are the run's own checkpoints, ten, twenty-five, fifty and a hundred thousand. The +182 −0 flips panel is gone from the slide; if someone asks whether the new heuristic ever loses one, the answer is still no — 182 gained, none lost.

Say the path-length line out loud rather than let someone find it: **23.5 → 26.6, so the proofs get about three moves longer**. That is the trade and it is a good one — you are buying five times fewer unsolved and half the nodes with three extra moves. If pushed: length-only search optimises the thing it is measured on, so of course it wins on path; S and MK buy *reachability*, not brevity.

### 15 · Abelian mass heuristic (10:10) — click through, 3 steps

Two columns. On the left, **step 0** is mass itself — the formula and a worked example, set large — and **step 1** adds the tie-break chain under it. **Step 2** fills the right column with the two bars and the 7.6×.

> The picker for those hundred-odd CoVs turns out to be arithmetic. Count each letter's surplus over its inverse — four numbers, add them up. That's the abelian mass. It measures how far the presentation is from trivial in the abelianization, and no amount of word-inflation can fake it. One pass, no search. Take the worked example at the bottom: ⟨ x, y | YYXyx, Yx ⟩. In the first relator the x's cancel — one x, one X — so that's zero; the y's leave one over, so one. The second relator gives one and one. Mass three. The trivial pair scores two, so this one sits one step off trivial in the abelianization. Rank the rewrites by mass, take the best one, search. On all 640 Miller–Schupp presentations: every single one solves at rank one, with seven point six times fewer nodes than plain greedy. Plain greedy only reaches six hundred thirty-four of the six hundred forty inside a hundred thousand nodes — it needs a million to finish the rest. Mass-ranked, all six hundred forty fall at rank one.

The rule is a **chain, not one key**, and the second line on the slide says why. Abelian mass is an integer, so it ties constantly: on the 60-presentation study it leaves rank 1 tied on **51 of 60** — meaning on most of the deck mass does not pick the start at all, the arbitrary order of the z-words does. Break those ties by **total length** and it drops to **3**; add **S** as the third key and it drops to **1**. That chain, `abel → length → S`, is the deployed arm: 420,426 nodes. Mass alone, tie-broken at random, costs 458,688 — so the tie-breakers are worth about 8% of the node bill, and much more than that in honesty. (For contrast: length as the *first* key ties on 14 and solves 633/640, not 640.)

### 16 · Two letters away from solved (10:55)
> This is the famous test case, Akbulut–Kirby three. The top presentation? Our solver reduces it in twelve moves. Now flip just these two letters — *(point at the orange tiles)* — and you get AK(3). No human, no computer, has ever solved it. Nobody's proven it impossible either. It has been sitting there since 1985, two letters away from solved. *(pause — this is your best moment; let the room feel it)*

This slide used to sit at position 6, before anyone knew what the solver was. It lands harder here: the room has just watched you solve all 640, so "twelve moves" means something and "never solved" costs something. It is also the on-ramp to slide 18 — say the last line, then walk straight into the wall.

### 17 · Still unsolved (11:45)
> Now the honest slide. The 124 hard classes — and AK(3). The full change-of-variables sweep, fifty thousand nodes on every class: zero of a hundred and twenty-four. What the iterative loop *did* buy is a better starting point. Running change of variables repeatedly, each step keeping the shorter representative, reduced thirty-nine of the hundred and twenty-four — thirty-six of those from the µ-ladder, which drove the total µ from seven hundred eighty-nine down to six hundred ninety-nine. So we start those thirty-nine from strictly shorter presentations. And from those shorter starts the search still floors at total length thirteen, one above the line where stable triviality is known. Five hundred sixty-seven million nodes, a hundred and eighty-two hours, zero solved. We didn't break the wall. We mapped it precisely — and knowing exactly where a wall is, is how walls eventually come down.

Two rows only now; the stable-AC, orbit-ladder and rank-4-and-5 rows are cut. Numbers, if pressed: 39 reduced out of 124, 36 by the µ-ladder (`mu_ladder_r256_b64`, 2–9 hops each, mean µ drop 2.5) and 3 from an external length table; total letters across all 124 fall 2,446 → 2,356. The point of the second row is that the reduction is real and the floor is unmoved.

### 18 · Two ideas solved all 640 (12:35)
> So: two ideas. A heuristic that reads structure, not just length. A starting point chosen by arithmetic, not luck. Together they made everything solvable cheap — and they compressed sixty years of mystery into 124 sharply-defined problems, two attractor floors, twenty-one moves apart. The question we leave with: these moves clearly aren't enough — what *moves the floor*?

The chart is deliberately **relative**: each bar is that idea’s cost divided by its own plain-greedy control, because the two ideas were validated on different benchmarks and their raw numbers do not share an axis. The heuristic is the 70,723 AC19 Aut orbits, scored on the 70,502 both arms solve: 563.3 → 263.2 nodes (0.47×), 23.5 → 26.6 path (1.13×). The CoV picker is all 640 Miller–Schupp: 4,963 → 657 mean nodes (0.13×, the 7.6× the slide quotes), median path 9 → 7 (0.78×). Greedy’s 3,176,297 total is at budget 1,000,000, where all 640 finally solve; the CoV’s 420,426 is at 100,000.

**If asked why the heuristic’s path bar goes up:** it does, and that is the honest trade. `L + 20·S + 2·MK` is a *search ordering*, not a shortest-path objective — it buys reach and node cost by walking through states plain greedy would never rank highly, so the paths it returns run about 13% longer. Nodes explored is what decides whether a presentation is solved at all; path length is not. The CoV picker wins on both because it changes the starting point rather than the ordering.

**If asked why the heuristic isn’t on the 640:** it was never run there. Its validation set is AC19; the 640 census varies the *start* (abelian mass, shortest pair) over plain-greedy search. Running the heuristic across all 640 is the obvious next experiment.

### 19 · What comes next (13:15)

Two lines on the screen, nothing else. Everything below is spoken, not shown.

> Two things I would do next. First, put these heuristics inside a learned policy: PPO, with the reward shaped by L plus twenty S plus two MK instead of raw length, and the start state chosen by abelian mass — train on the six hundred forty, test on the hundred and twenty-four. The point is to let a policy find the ordering a fixed rule cannot. Second, better benchmarks. Of the sixty presentations we picked, only forty-five are actually distinct up to change of variables — so deduplicate by Aut-orbit before you count anything, stratify by greedy cost, and publish the bins. Both directions aim at the same target: the hundred and twenty-four, and AK(3).

**If asked why PPO and not the search you already have:** the search is only as good as the ordering you hand it, and every ordering here was hand-picked; a policy can learn one. **If asked whether PPO has been tried on AC:** yes — the Two-Hump paper's PPO agent. What is new is the reward and the start-state distribution, both of which came out of this summer's census. **This slide is the first thing to cut if you are over.**

### 20 · Thank you (13:45)
> Thank you to Professor Gukov and the Math AI Group, and to Lucas Fagan, Giorgi Butbaia, and Michele Tarquini who mentored me all summer. I'm happy to take questions.

The slide also carries a **Claude** line under the mentors. You do not have to read it; one clause is enough if you want to — "and Claude, which paired with me on the search code, the figures, and this deck."

### 21 · Questions

One word on the screen. Say nothing; take the first question.

### 22 · Feedback QR (14:05)
Advance to it as you invite questions and **leave it up for the whole Q&A** — the audience scans it while you answer. Nothing to say beyond "there's a QR code if you'd like to leave feedback."

**Total: ~14:45.** If the click-through ran long, you are already into overtime — skip the QR line and go straight to questions with the QR up.

---

## Timing checkpoints

| Clock | You should be at |
|---|---|
| 2:55 | starting slide 5 (example) |
| 5:05 | starting slide 8 (stable AC) |
| 6:35 | starting slide 10 (640 + 550) |
| 7:50 | starting slide 12 (subset-60) |
| 9:20 | starting slide 14 (better heuristic) |
| 10:55 | starting slide 16 (AK(3)) |
| 12:35 | starting slide 18 (takeaway) |

Running long? Cuts, in order: skip-click the example (straight to the end); skip-click slide 6 (0→2→5→8); one sentence on slide 7 (14 = 4); skip-click slide 8 (straight to Lemma 11, then its example); skip-click slide 9 (0→3); one sentence on slide 10 (1,190 = 640 + 550); **drop slide 11 entirely** (cost of a CoV — it is the newest and the most droppable, and its point survives as one sentence on slide 15); cut slide 12 to step 1 only (skip the bins); skip-click slide 13 (0→3); drop the hard-bin sentence on 14; compress mass to "rank by letter-surplus, 640 at rank one"; cut slide 19 to one sentence. **Never cut slide 16** — AK(3) is the emotional centre of the talk.

## Stretch material (only if your session runs generous)

Don't add slides — add dwell. Stretch: slide 17 (tell the 1985 story: AK(n) family, proposed counterexamples, the topology connection — 4-manifolds — one extra minute), slide 8 (say Lemma 11 in one concrete sentence: extra letter defined as a word, substitute, drop it), slide 11 (walk the 640 / 550 bar), slide 14 (221 → 39), slide 15 (name a couple of the dots — the worst rewrite here is 30× more expensive than doing nothing), slide 16 (walk the worked idea: a rewrite can hide length but not letter-surplus), slide 18 (describe the two floors: two attractors, 21 certified moves apart, 71/29 split). After slide 18 you may pull appendix `a1` (S and MK — only if asked / if time), `a6` (literature timeline: an August 2024 machine-learning claim on AK(3)-adjacent presentations was rescinded in February 2025 — the problem is genuinely open) and `a4` (the CoV beam reaching 49/60, beating the oracle 45/60). That's ~21–22.

---

## Q&A prep (2–3 min; paraphrase every question back before answering)

Appendix slides: press `a`, then arrows. a1 S and MK — worked example, then the two histograms (only if asked / if time) · a2 path lengths · a3 length cap · a4 CoV beam · a5 relabels · a6 literature timeline · a7 how we know the group is trivial.

**Appendix 1 — only if asked / if time. Now three clicks.** **Click 0 is the worked example**, and it is the one to open with if the question was "what *is* a knot?" Two relators, r₁ = yyyxxxyyyxxx and r₂ = yxxyxyxx, drawn as coloured blocks. Cut each ring into maximal single-generator blocks — the boxes on screen. r₁ falls into yyy·xxx·yyy·xxx, two x-blocks, so **2 knots**; r₂ falls into y·xx·y·x·y·xx, three x-blocks, so **3 knots**; MK is the larger, **3**. (The count is forced to agree whichever generator you count on — a cyclic word containing both letters always has equally many x-blocks and y-blocks. A pure power scores 0, not 1: nothing is squashed inside anything.) Then S from the same picture: pool every block from both relators, x-blocks 3, 3, 2, 1, 2 → mean 2.2, y-blocks 3, 3, 1, 1, 1 → mean 1.8, and **S is the smaller, 1.8** — the mean run length of the *thinner* generator. This pair sits above the S ≥ 1.4 cut and below the MK ≥ 4 cut. **Click 1 is the S histogram**: cyclic runs on the 1,190. Mixed words sit at 1.0; unsolved mass sits further right. The dashed cut is S ≥ 1.4: two hundred twelve unsolved, twelve solved. **Click 2 is the MK histogram**, on the 237 Aut-minimal census orbits (113 solved + 124 unsolved) — not the 70k validation set; that number is slide 14. MK ≥ 4 is fourteen unsolved, zero solved. These are the two features in L + 20·S + 2·MK. Do not mention RECOMMENDED or xyimb.

- **"How do you know it's even the trivial group?"** → appendix a7. Balanced: two generators, two rules. Necessary check: the abelianization is trivial (letter-count matrix has det ±1). Sufficient in practice: you may add a helper letter — that's *stable* AC — and AK(3) then trivializes. So the group is 1. Andrews–Curtis forbids the helper; that's the open part.
- **"Why does abelian mass work?"** — AC moves act on the letter-count matrix as invertible integer row operations; the abelianization is a true invariant. Mass is the distance the abelianization still has to travel, and a substitution can't fake it by inflating words. Within a presentation, mass correlates +0.81 with search cost.
- **"Is the 7.6× a fair comparison?"** — no slide (old a1). It's the *deployed* cost — run rank 1, stop at first solve: 420,426 nodes. If you insist on running all three ranks on every presentation, 8,447,944 — more expensive than greedy's 3,176,297. Early stopping is part of the method.
- **"Did you try machine learning?"** — Prior work by others used reinforcement learning on this problem. We deliberately went classical this summer: interpretable features, validated on 70k orbits, reproducible on a laptop CPU. Learned move-proposers on top of this baseline are natural future work.
- **"Do you think the conjecture is false?"** — Honest answer: the data is agnostic. What we can say is the failure isn't random — everything funnels into exactly two attractors, 21 moves apart, at length 13. That's structure. Either these moves are genuinely insufficient — or AK(3) is a real counterexample. Both would be important.
- **"Why 13? Is it your length cap?"** → appendix a3. No — doubling the cap from 24 to 48 gives byte-identical search sets, and 1,800 over-cap candidates all floor at 13 too. The wall is intrinsic to the move system, not the budget.
- **"Doesn't the heuristic find worse solutions?"** → appendix a2. Slightly longer proofs (mean path 23.5 → 26.6) — it spends moves to save nodes. For existence questions, nodes are the scarce resource.
- **"What's S intuitively?"** → appendix a1, click 0 for the worked example, click 1 for the histogram. How well-mixed the word is: cyclic runs, S = min of the two mean run lengths. Substitution moves get traction from alternation; long single-letter blocks give them nothing to grab.
- **"What's MK / why those two features?"** → appendix a1, click 0 for the worked example, click 2 for the histogram. MK is max knots over the two relators — the other term in L + 20·S + 2·MK. The 237-orbit buckets are the Miller–Schupp Aut-minimal census, not the 70k run.
- **"What would you do next?"** — Two directions: richer move classes (the CoV beam already beats the oracle, appendix a4), and understanding what invariant pins the floor at 13 — if we can name it, we can attack it.
- Unknown question? "I don't know, but here's how I'd find out" — judges score honest handling above bluffing.

---

## Delivery cheat sheet (from the Hixon "Memorable Talks" workshop)

- **Memorize minute one.** Nerves live in the first 60 seconds; a memorized open kills them.
- Project to the back of the room. Vary pace. The three planned pauses (slides 4, 6, 16) are written into the script — take them fully; 3 seconds feels long to you and right to the room.
- Face the audience, not the screen. Your slides have almost no words — there is nothing to read up there, which forces the right habit.
- First person, active voice: "I tried, it failed, so I wondered."
- Practice once with the clicker/advancer before your block starts.
- Every slide title is the takeaway. If you blank, read the title and expand it — that's the whole design.
- Bring the deck three ways: laptop, USB copy of the whole `final/` folder (it works offline — fonts are local), and the PDF backup.
- Dress professionally; stay for your whole block; enjoy the AK(3) slide — genuine enthusiasm is literally on the judging rubric.
