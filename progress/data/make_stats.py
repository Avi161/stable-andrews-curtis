"""Build progress/stats.js -- every number the progress deck shows.

Nothing on a slide is typed by hand: slides_p.js reads window.P, and window.P is
written here from

  * the ACSolverX records, read with `git show <branch>:<path>` from a clone
    (--acsx, default ../ACSolverX next to this repo) -- the hash-free solver lives
    at research/ac_hashfree_cascade_20260914 on claude/vigilant-babbage-nnbuj0;
  * a checkout of that same branch (--code) for the two recognisers that are
    re-run here (BS donor shape, Britton preflight);
  * the same-machine re-runs in this directory (subset60_rows.csv,
    same_machine_runs.json: one 4-core Linux container, one core per run,
    NUMBA_NUM_THREADS=1, 2026-09-22).

A handful of numbers exist only as prose in a results file; they are in CITED
below, each with its file and branch.

    python3 progress/data/make_stats.py --acsx ../ACSolverX --code <checkout>
"""
from __future__ import annotations

import argparse
import ast
import collections
import csv
import gzip
import io
import json
import math
import statistics
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
VB = 'origin/claude/vigilant-babbage-nnbuj0'          # = origin/codex/theory-patterns-3h
RC = 'origin/claude/results-collection-org-wmvpxu'
REC = 'research/ac_hashfree_cascade_20260914/records'

# Numbers that exist only as prose in a results file (not re-derivable from a record here).
CITED = {
    # AC19 Aut-min census, how the count moved (1,000 nodes / units per row)
    'census_greedy_1k': (66086, 'results/heuristic_search/ac19_autmin_10k/RESULTS.md@claude/ac19-leftover-solver-notebook-6yan6d'),
    'census_s20_1k': (68475, 'results/heuristic_search/ac19_autmin_10k/RESULTS.md@claude/ac19-leftover-solver-notebook-6yan6d'),
    'census_cascade501': (70649, 'results/heuristic_search/ac19_cascade_screen/RESULTS.md@claude/ac19-leftover-solver-notebook-6yan6d'),
    'census_notable_policy': (72562, 'results/heuristic_search/ac19_K3p_notable_full_1k/SUMMARY.json@claude/ac19-theorem-strength-8v1wp6 (72,562 / 72,562 replayed as elementary AC moves)'),
    'table_policy_elementary': (42304643, 'results/heuristic_search/ac19_ball14_cascade_full_1k/replay_check.json@claude/ac19-theorem-strength-8v1wp6 (72,779 / 72,779 replayed)'),
    'cascade501_substitution_only': (27164, 'results/heuristic_search/ac19_cascade_screen/RESULTS.md@claude/ac19-leftover-solver-notebook-6yan6d'),
    'cascade501_aut_assisted': (43485, 'same (paths with basis changes; AC by transport, not expanded in that run)'),
    'census_table14': (72779, 'results/heuristic_search/ac19_ball14_cascade_full_1k/SUMMARY.json@claude/ac19-theorem-strength-8v1wp6'),
    'table14_states': (12803449, 'research/residual_20260909/BACKWARD_TABLE.md@claude/ac19-theorem-strength-8v1wp6'),
    'table14_root_hits': (66151, 'results/heuristic_search/ac19_ball14_cascade_full_1k/SUMMARY.json@claude/ac19-theorem-strength-8v1wp6'),
    # the node ladder on the census (fixed basis, unsolved after each budget)
    'ladder_budgets': ([10000, 100000, 1000000, 5000000, 10000000], 'results/heuristic_search/leftovers_{1m,5m}, ac19_10m@claude/ac19-leftover-solver-notebook-6yan6d'),
    'ladder_s20': ([259, 39, 14, 9, 9], 'same'),
    'ladder_greedy': ([831, 222, 88, 31, 28], 'same'),
    'ladder_core_hours': (215, 'row seconds of the 1M/5M/10M rungs, same branch'),
    # shorter is harder (ORIGINALS_AT_10M / WORKED_EXAMPLE)
    'orig_rows': (40, 'results/heuristic_search/ac19_orig_10m/RESULTS.md@claude/ac19-leftover-solver-notebook-6yan6d'),
    'orig_orbits': (28, 'same'),
    'orig_median_nodes': (5720, 'same'),
    'orig_peak_before': (29, 'results/heuristic_search/ac19_orig_10m/WORKED_EXAMPLE.md, same branch'),
    'orig_peak_after': (49, 'same'),
    # BS check at every popped state, old cascade on the census
    'bsprobe_unsolved_before': (2130, 'results/heuristic_search/ac19_bs_probe/RESULTS.md@claude/ac19-leftover-solver-notebook-6yan6d'),
    'bsprobe_unsolved_after': (1200, 'same'),
    'bsprobe_nodes_pct': (-10.1, 'same'),
    'bsprobe_wall_pct': (5.9, 'same'),
    # old MS-640 cascade as recorded (macOS arm64, one thread)
    'cascade_ms640_search_rec': (2.357, 'results/heuristic_search/goal_frontiers/MS640_RESULTS.md@claude/vigilant-babbage-nnbuj0'),
    'cascade_ms640_batch_rec': (6.322, 'same'),
    'cascade_ms640_units': (22075, 'results/heuristic_search/goal_frontiers/ms640_1k/summary.json, same branch'),
    'cascade_ms640_rewrite': (254, 'same'),
    'cascade_ms640_s40': (386, 'same'),
    'greedy_ms640_nodes': (3176297, 'same (saved greedy, 1,000,000 nodes, cap 24)'),
    'greedy_ms640_path': (23533, 'results/heuristic_search/goal_frontiers/MS640_RESULTS.md@claude/vigilant-babbage-nnbuj0 (saved greedy paths)'),
    # census policy route audit (which rule closed the row)
    'policy_route_plain': (43406, 'research/residual_20260909/THEOREMS_PROOFS_AND_FREQUENCY.md@claude/ac19-theorem-strength-8v1wp6'),
    'policy_route_bs': (24983, 'same'),
    'policy_route_bs12': (24599, 'same'),
    'policy_route_primitive': (3564, 'same'),
    'policy_route_twoblock': (99, 'same'),
}


def git_show(acsx, ref, path, binary=False):
    out = subprocess.run(['git', '-C', str(acsx), 'show', f'{ref}:{path}'], check=True, capture_output=True).stdout
    return out if binary else out.decode()


def jsonl(acsx, ref, path):
    raw = git_show(acsx, ref, path, binary=True)
    if path.endswith('.gz'):
        raw = gzip.decompress(raw)
    return [json.loads(line) for line in raw.decode().splitlines() if line.strip()]


def csv_rows(acsx, ref, path):
    raw = git_show(acsx, ref, path, binary=True)
    if path.endswith('.gz'):
        raw = gzip.decompress(raw)
    return list(csv.DictReader(io.StringIO(raw.decode())))


def med(v):
    return statistics.median(v) if v else None


def summ(v):
    v = [x for x in v if x is not None]
    return dict(n=len(v), total=sum(v), mean=round(sum(v) / len(v), 2), median=med(v), max=max(v)) if v else None


# ---------------------------------------------------------------- BS donor shape
# copied from research/residual_20260909/theorem_frequency.py@claude/ac19-theorem-strength-8v1wp6

def cyclic_runs(word):
    if not word:
        return []
    runs = []
    for letter in word:
        if runs and runs[-1][0] == letter:
            runs[-1][1] += 1
        else:
            runs.append([letter, 1])
    if len(runs) > 1 and runs[0][0] == runs[-1][0]:
        runs[0][1] += runs.pop()[1]
    return [(letter, n) for letter, n in runs]


def bs_donor_shape(word):
    runs = cyclic_runs(word)
    if len(runs) != 4:
        return None
    letters = [letter.lower() for letter, _ in runs]
    if letters[0] != letters[2] or letters[1] != letters[3] or letters[0] == letters[1]:
        return None
    for stable in (0, 1):
        b0, b1 = runs[stable], runs[(stable + 2) % 4]
        if b0[1] != 1 or b1[1] != 1 or b0[0] == b1[0]:
            continue
        a0, a1 = runs[(stable + 1) % 4], runs[(stable + 3) % 4]
        e0 = a0[1] if a0[0].islower() else -a0[1]
        e1 = a1[1] if a1[0].islower() else -a1[1]
        m, n = abs(e0), abs(e1)
        return {'m': min(m, n), 'positive_bs': (e0 > 0) != (e1 > 0), 'consecutive': abs(m - n) == 1,
                'stable': letters[stable]}
    return None


def bs_root(pair, preflight=None, canon=None):
    """Smallest m of a consecutive BS(m,m+1) donor whose companion has stable exponent +-1."""
    best = None
    for i in (0, 1):
        s = bs_donor_shape(pair[i])
        if not (s and s['positive_bs'] and s['consecutive']):
            continue
        g = s['stable']
        e = sum(1 if c == g else -1 for c in pair[1 - i] if c.lower() == g)
        if abs(e) == 1 and (best is None or s['m'] < best):
            best = s['m']
    if best is None:
        return None, None
    ok = None
    if preflight is not None:
        try:
            ok = preflight(canon(*pair))['status'] == 'accept'
        except Exception:
            ok = False
    return best, ok


def bs_table(pairs, preflight, canon):
    by_m, acc, acc_m = collections.Counter(), collections.Counter(), collections.Counter()
    for p in pairs:
        m, ok = bs_root(p, preflight, canon)
        if m is None:
            continue
        by_m[m] += 1
        acc_m[m] += bool(ok)
        acc[('m1' if m == 1 else 'mgt1', bool(ok))] += 1
    total = sum(by_m.values())
    return dict(rows=len(pairs), bs=total, m1=by_m[1], mgt1=total - by_m[1],
                by_m={str(k): v for k, v in sorted(by_m.items())},
                accept_by_m={str(k): acc_m[k] for k in sorted(by_m)},
                accept_m1=acc[('m1', True)], accept_mgt1=acc[('mgt1', True)],
                stall_m1=acc[('m1', False)], stall_mgt1=acc[('mgt1', False)])


SYMBOL = {1: 'x', -1: 'X', 2: 'y', -2: 'Y'}
INV = {'x': 'X', 'X': 'x', 'y': 'Y', 'Y': 'y'}


def cyc_reduce(w):
    s = []
    for ch in w:
        if s and s[-1] == INV[ch]:
            s.pop()
        else:
            s.append(ch)
    i = 0
    while len(s) - 2 * i > 1 and s[i] == INV[s[len(s) - 1 - i]]:
        i += 1
    return ''.join(s[i:len(s) - i])


def apply_phi(phi, w):
    """Apply 'x->yyx, y->Y' to a word and cyclically reduce."""
    m = {}
    for part in phi.split(','):
        a, b = part.strip().split('->')
        m[a] = b
    for a in 'xy':
        m[a.upper()] = ''.join(INV[ch] for ch in reversed(m[a]))
    return cyc_reduce(''.join(m[ch] for ch in w))


def names_all(costs):
    return {r['name'] for r in costs}


def get_rows(costs):
    return len({r['name'] for r in costs})


def ms640_pairs(text):
    rows = [ast.literal_eval(line) for line in text.splitlines() if line.strip()]
    return [tuple(''.join(SYMBOL[n] for n in half if n) for half in (r[:24], r[24:])) for r in rows]


# ---------------------------------------------------------------- main

def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--acsx', type=Path, default=HERE.parents[2] / 'ACSolverX')
    ap.add_argument('--code', type=Path, required=True, help='checkout of claude/vigilant-babbage-nnbuj0')
    ap.add_argument('--out', type=Path, default=HERE.parent / 'stats.js')
    a = ap.parse_args()
    X = a.acsx
    sys.path.insert(0, str(a.code))
    from experiments.equivalence_classes.lib.words import canon_pair
    from research.supermoves_20260908.bs_preflight import preflight

    P = {'sources': {'acsx_branch': VB, 'records': REC, 'cited': {k: v[1] for k, v in CITED.items()}}}
    for k, (v, _) in CITED.items():
        P[k] = v

    # ---- headline coverage, all at 1,000 units per row
    def sm(name):
        return json.loads(git_show(X, VB, f'{REC}/{name}.summary.json'))
    head = {}
    for key, name in [('census', 'final3_census'), ('extended', 'final3_extended'), ('u727', 'final3_u727'),
                      ('s2000', 'final3_s2000'), ('ac1m_reps', 'final3_ac1m_reps'), ('ac1m_raw', 'final3_ac1m_raw'),
                      ('ac1m_21_b10000', 'final3_ac1m_21_b10000'), ('ms640', 'final3_ms640_hybrid'),
                      ('ms640_protocol', 'final3_ms640_hybrid_protocol'), ('census_fast', 'census_fast_len_perms')]:
        head[key] = {k: v for k, v in sm(name).items() if not isinstance(v, (dict, list))}
    raw = head['ac1m_raw']
    head['ac1m_all_rows'] = raw['rows'] + raw['skipped_already_run']
    head['ac1m_all_solved'] = raw['solved'] + raw['skipped_solved_there']
    pol = json.loads(git_show(X, RC, 'results/heuristic_search/ac19_final_policy_full_1k/SUMMARY.json'))
    head['policy_solved'] = pol.get('solved') or pol.get('n_solved')
    P['head'] = head

    # ---- census: solved vs budget, new solver vs the census policy (both 1,000 per row)
    census = jsonl(X, VB, f'{REC}/final3_census.jsonl.gz')
    new_units = [r['units'] for r in census if r['solved']]
    stages = collections.Counter(r['stage'] for r in census if r['solved'])
    policy_nodes = []
    listing = subprocess.run(['git', '-C', str(X), 'ls-tree', '--name-only', RC,
                              'results/heuristic_search/ac19_final_policy_full_1k/'],
                             check=True, capture_output=True, text=True).stdout.split()
    for path in listing:
        if path.endswith('.jsonl') and '/rows_' in path:
            for r in jsonl(X, RC, path):
                if r.get('solved'):
                    policy_nodes.append(r['nodes_explored'])
    budgets = [5, 10, 15, 20, 30, 40, 50, 75, 100, 128, 150, 200, 300, 500, 750, 1000]
    cross = next(b for b in range(1, 1001) if sum(u <= b for u in new_units) >= len(policy_nodes))
    P['census_curve'] = dict(budgets=budgets, new=[sum(u <= b for u in new_units) for b in budgets],
                             policy=[sum(u <= b for u in policy_nodes) for b in budgets],
                             new_total_units=sum(new_units), policy_total_units=sum(policy_nodes) + 1000 * (72779 - len(policy_nodes)),
                             new_crosses_policy_at=cross, policy_solved=len(policy_nodes), rows=len(census),
                             stages=dict(stages), new_units=summ(new_units))
    dyn = [r for r in census if r['solved'] and not r.get('explicit_rank2', True)]
    P['census_stable_certs'] = len(dyn)
    ms_rec = jsonl(X, VB, f'{REC}/final3_ms640_hybrid.jsonl')
    P['ms640_stages'] = dict(collections.Counter(r['stage'] for r in ms_rec if r['solved']))

    ext = jsonl(X, VB, f'{REC}/final3_extended.jsonl.gz')
    eu = sorted(r['units'] for r in ext if r['solved'])
    P['extended'] = dict(rows=len(ext), solved=len(eu), median=med(eu), p99=eu[int(0.99 * len(eu))], max=eu[-1],
                         stages=dict(collections.Counter(r['stage'] for r in ext if r['solved'])),
                         stable=sum(1 for r in ext if r['solved'] and not r.get('explicit_rank2', True)))

    # ---- the 727 policy leftovers: what each ingredient buys, on the same 180 rows
    def solved_names(path):
        return {r['name'] for r in jsonl(X, VB, path) if r.get('solved')}, {r['name'] for r in jsonl(X, VB, path)}
    s180, n180 = solved_names(f'{REC}/controls/u727_sorted_nonielsen_len_partial180.jsonl')
    ladder = []
    for label, path in [('no memory', f'{REC}/controls/u727_memoryless_bestfirst_len_partial604.jsonl'),
                        ('closed set', f'{REC}/controls/u727_sorted_nonielsen_len_partial180.jsonl'),
                        ('+ Nielsen edges', f'{REC}/u727_bf_len_sorted_nielsen.jsonl'),
                        ('+ signed perms', None),
                        ('+ define / eliminate', f'{REC}/final3_u727.jsonl')]:
        if path is None:
            sN, _ = solved_names(f'{REC}/u727_bf_len_sorted_nielsen.jsonl')
            sP, _ = solved_names(f'{REC}/left54_perms.jsonl')
            got = (sN | sP) & n180
        else:
            got = solved_names(path)[0] & n180
        ladder.append(dict(label=label, solved=len(got)))
    whole = {}
    for label, path in [('nielsen', f'{REC}/u727_bf_len_sorted_nielsen.jsonl'), ('hybrid', f'{REC}/final3_u727.jsonl')]:
        s, n = solved_names(path)
        whole[label] = dict(solved=len(s), rows=len(n))
    P['ladder180'] = dict(rows=len(n180), steps=ladder, whole727=whole)

    # the nine rows no fixed-basis arm solved at 10,000,000 nodes
    nine = ['ac19_16286', 'ac19_27254', 'ac19_28131', 'ac19_44381', 'ac19_50841', 'ac19_51034',
            'ac19_59576', 'ac19_65753', 'ac19_7284']
    u727 = {r['name']: r for r in jsonl(X, VB, f'{REC}/final3_u727.jsonl')}
    P['nine'] = [dict(name=n, units=u727[n]['units'], steps=u727[n].get('path_length')) for n in nine]

    # dynamic rank on the 41 rows the rank-two engine leaves at 1,000
    left31 = jsonl(X, VB, f'{REC}/left31_fast_hash_perms_b20k.jsonl')
    hy41 = {r['name']: r for r in jsonl(X, VB, f'{REC}/hy41_p5r2.jsonl')}
    cen = {r['name']: r for r in census}
    names41 = list(hy41)
    P['dyn41'] = dict(rows=len(names41),
                      rank2_units=summ([r['units'] for r in left31 if r['solved']]),
                      hybrid_units=summ([cen[n]['units'] for n in names41 if cen[n]['solved']]),
                      pairs=[dict(name=r['name'], rank2=r['units'], hybrid=cen[r['name']]['units'])
                             for r in left31 if r['solved'] and r['name'] in cen])

    # ---- AC-move cost of the certificates (substitutions + Nielsen maps; signed perms free)
    moves = {}
    for key, name in [('ms640', 'acmoves_ms640.csv.gz'), ('census', 'acmoves_ac19_census.csv.gz'),
                      ('extended', 'acmoves_ac19_extended.csv.gz')]:
        rows = csv_rows(X, VB, f'{REC}/{name}')
        ac = [int(r['ac_moves']) for r in rows if r['ac_moves'] not in ('', 'None') and r.get('stable') in ('0', 'False', '')]
        moves[key] = summ(ac)
        moves[key]['substitution'] = sum(int(r['substitution']) for r in rows if r['substitution'])
        moves[key]['nielsen'] = sum(int(r['nielsen']) for r in rows if r['nielsen'])
    P['acmoves'] = moves

    # ---- BS(m, m+1) at the root
    ms = ms640_pairs(git_show(X, VB, 'data/ms640_solved.txt'))
    aut = csv_rows(X, VB, 'data/AC19_extended_aut_min.csv')
    aut_pairs = [(r['r1'], r['r2']) for r in aut]
    P['bs'] = dict(ms640=bs_table(ms, preflight, canon_pair), ac19_autmin=bs_table(aut_pairs, preflight, canon_pair))

    # ---- every hash-free census certificate expanded to elementary AC moves (decode_hashfree_census.py)
    P['ac_decode'] = json.loads((HERE / 'hashfree_census_ac_decode.json').read_text())

    # ---- fixed-basis budget ladder on the census: unsolved after each budget
    LB = 'origin/claude/ac19-leftover-solver-notebook-6yan6d'
    costs = csv_rows(X, LB, 'results/heuristic_search/ac19_autmin_10k/ac19_autmin_10k_costs.csv')
    lad = {'greedy': [], 's20_mk2': []}
    for arm in lad:
        nodes = [int(r['nodes_explored']) if r['solved'] == '1' else None for r in costs if r['arm'] == arm]
        for b in (100, 1000, 10000):
            lad[arm].append(sum(1 for v in nodes if v is None or v > b))
    # 100 and 1,000 from the full 10k run's per-row costs; 10k -> 10M is the archived chain each rung was run on
    P['ladder_full'] = dict(budgets=[100, 1000] + P['ladder_budgets'],
                            greedy=lad['greedy'][:2] + P['ladder_greedy'], s20=lad['s20_mk2'][:2] + P['ladder_s20'],
                            rows=get_rows(costs), check_10k=dict(greedy=lad['greedy'][2], s20=lad['s20_mk2'][2]))

    # ---- per-row nodes and path at the budget where each arm first solves, grouped by difficulty
    best = {'greedy': {}, 's20_mk2': {}}
    for r in costs:
        if r['solved'] == '1':
            best[r['arm']][r['name']] = (int(r['nodes_explored']), int(r['path_length']))
    rungs = {'greedy': ['hsearch_ac19_hard100k/ac19_unsolved10k_baseline_b100000_mrl48.jsonl',
                        'ac19_unescalated/leftovers_1m_greedy_b100000_mrl48.jsonl',
                        'leftovers_1m/leftovers_1m_greedy_b1000000_mrl48.jsonl',
                        'ac19_unescalated/leftovers_1m_greedy_b1000000_mrl48.jsonl',
                        'leftovers_5m/leftovers_5m_greedy_b5000000_mrl64.jsonl',
                        'ac19_10m/ac19_10m_greedy_b10000000_mrl64.jsonl'],
             's20_mk2': ['hsearch_ac19_hard100k/ac19_unsolved10k_s20_mk2_b100000_mrl48.jsonl',
                         'ac19_unescalated/leftovers_1m_s20_mk2_b100000_mrl48.jsonl',
                         'leftovers_1m/leftovers_1m_s20_mk2_b1000000_mrl48.jsonl',
                         'leftovers_5m/leftovers_5m_s20_mk2_b5000000_mrl64.jsonl',
                         'ac19_10m/ac19_10m_s20_mk2_b10000000_mrl64.jsonl']}
    for arm, files in rungs.items():
        for f in files:
            for r in jsonl(X, LB, 'results/heuristic_search/' + f):
                if r.get('solved') and r['name'] not in best[arm]:
                    best[arm][r['name']] = (r['nodes_explored'], r['path_length'])
    both = [n for n in best['greedy'] if n in best['s20_mk2']]
    edges = [100, 1000, 10000, 100000, 1000000, 5000000, 10000000]
    bins = []
    for i, e in enumerate(edges):
        lo = 0 if i == 0 else edges[i - 1]
        names = [n for n in both if lo < max(best['greedy'][n][0], best['s20_mk2'][n][0]) <= e]
        d = dict(lo=lo, hi=e, n=len(names))
        for arm, key in (('greedy', 'g'), ('s20_mk2', 's')):
            nd = [best[arm][n][0] for n in names]
            pl = [best[arm][n][1] for n in names]
            d[key] = dict(nodes_mean=round(sum(nd) / len(nd), 1), nodes_median=med(nd),
                          path_mean=round(sum(pl) / len(pl), 1), path_median=med(pl)) if names else None
        bins.append(d)
    P['difficulty'] = dict(bins=bins, both=len(both), rows=len(names_all(costs)),
                           greedy_only=sum(1 for n in best['greedy'] if n not in best['s20_mk2']),
                           s20_only=sum(1 for n in best['s20_mk2'] if n not in best['greedy']),
                           unsolved=dict(greedy=len(names_all(costs)) - len(best['greedy']),
                                         s20=len(names_all(costs)) - len(best['s20_mk2'])))

    # ---- originals of the 28 orbits greedy cannot solve at 10M: the same moves from both starting points
    OD = 'results/heuristic_search/ac19_orig_10m'
    runs10m = {r['name']: r for r in jsonl(X, LB, f'{OD}/ac19_orig_10m_greedy_b10000000_mrl64.jsonl')}
    trans = {r['name']: r for r in jsonl(X, LB, f'{OD}/ac19_orig_10m_transported_greedy.jsonl')}
    origs = []
    for row in csv_rows(X, LB, f'{OD}/ac19_orig_10m_originals.csv'):
        n, t = row['original'], trans[row['original']]
        path = runs10m[n]['path']
        po = [len(a) + len(b) for a, b in path]
        pr = [len(apply_phi(t['phi'], a)) + len(apply_phi(t['phi'], b)) for a, b in path]
        origs.append(dict(orbit=row['autmin'], original=n, nodes=int(row['nodes_explored']), moves=int(row['path_length']),
                          rep_moves=int(row['autmin_path_length']), phi=t['phi'], tail=t['tail_moves'],
                          start_orig=po[0], start_rep=pr[0], peak_orig=max(po), peak_rep=max(pr), prof_orig=po, prof_rep=pr))
    P['originals'] = origs
    runs = json.loads((HERE / 'same_machine_runs.json').read_text())
    P['runs'] = runs

    # ---- subset-60
    rows = list(csv.DictReader(open(HERE / 'subset60_rows.csv')))

    def col(c, cond=None):
        out = []
        for r in rows:
            if cond and not cond(r):
                continue
            try:
                out.append(float(r[c]))
            except (TypeError, ValueError):
                pass
        return out
    s60 = dict(rows=len(rows),
               greedy=dict(solved=len(col('greedy1M_saved_nodes')), nodes=summ(col('greedy1M_saved_nodes')),
                           path=summ(col('greedy1M_saved_path'))),
               greedy10k=dict(solved=sum(r['greedy10k_solved'] == 'True' for r in rows)),
               s20_10k=dict(solved=sum(r['s20mk2_10k_solved'] == 'True' for r in rows),
                            path=summ(col('s20mk2_10k_path', lambda r: r['s20mk2_10k_solved'] == 'True'))),
               cascade=dict(solved=len(col('oldcascade_units')), units=summ(col('oldcascade_units')),
                            pops=summ(col('oldcascade_pops')), subs=summ(col('oldcascade_substitution')),
                            nielsen=summ(col('oldcascade_nielsen')), ac=summ(col('oldcascade_ac_moves')),
                            steps=summ(col('oldcascade_steps')), wall=runs['s60_OLDCASCADE_b1000']['search_wall_s'],
                            winners=dict(collections.Counter(r['oldcascade_winner'] for r in rows))),
               new=dict(solved=sum(r['H_solved'] == 'True' for r in rows), units=summ(col('H_units')),
                        pops=summ(col('H_pops')), subs=summ(col('H_substitution')), nielsen=summ(col('H_nielsen')),
                        perm=summ(col('H_perm')), ac=summ(col('H_ac_moves')), steps=summ(col('H_steps')),
                        wall=runs['s60_H']['search_wall_s'], batch=runs['s60_H']['batch_wall_s'],
                        stages=dict(collections.Counter(r['H_stage'] for r in rows))),
               per_row=[dict(id=r['id'], bin=int(r['bin']), greedy=float(r['greedy1M_saved_nodes']),
                             greedy_path=float(r['greedy1M_saved_path']), new=float(r['H_units']),
                             new_subs=float(r['H_substitution']), cascade=float(r['oldcascade_units']))
                        for r in rows])
    P['s60'] = s60

    # ---- MS-640 BS(1,2) example: ms622
    P['ms622'] = json.loads((HERE / 'ms622_profile.json').read_text())

    a.out.write_text('/* generated by progress/data/make_stats.py -- do not edit */\nwindow.P = ' +
                     json.dumps(P, separators=(',', ':')) + ';\n')
    print('wrote', a.out, a.out.stat().st_size, 'bytes')


if __name__ == '__main__':
    main()
