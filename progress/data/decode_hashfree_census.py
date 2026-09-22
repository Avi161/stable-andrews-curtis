"""Expand every hash-free census certificate into elementary AC moves and replay it.

For each of the 72,779 AC19 Aut-min rows take the hash-free engine's rank-two
certificate (final hybrid when it has no define/eliminate step; otherwise the
rank-two fast engine's certificate from census_fast_len_perms at 1,000 units,
left31_fast_hash_perms_b20k / census41_fast_v2, or the 9 re-runs), then run
research/supermoves_20260908/certificate_decoder.decode_elementary, which
transports the basis changes and replays the elementary path to (x, y)."""
import sys, json, gzip, os, time, collections
from multiprocessing import Pool
sys.path.insert(0, '.')
REC = 'research/ac_hashfree_cascade_20260914/records'

def jl(p):
    op = gzip.open if p.endswith('.gz') else open
    with op(p, 'rt') as f:
        return [json.loads(l) for l in f if l.strip()]

def has_dyn(r): return any(s['kind'] == 'dyn' for s in r.get('steps', []))

def build(nine_path):
    cen = jl(f'{REC}/final3_census.jsonl.gz')
    alt = {}
    for src in [f'{REC}/census_fast_len_perms.jsonl.gz', f'{REC}/left31_fast_hash_perms_b20k.jsonl',
                f'{REC}/census41_fast_v2.jsonl', nine_path]:
        for r in jl(src):
            if r.get('solved') and r.get('steps') is not None and not has_dyn(r) and r['name'] not in alt:
                alt[r['name']] = (os.path.basename(src), r['units'], r['steps'])
    jobs = []
    for r in cen:
        if not has_dyn(r):
            jobs.append((r['name'], r['r1'], r['r2'], 'final3_census', r['units'], r['steps']))
        else:
            src, units, steps = alt[r['name']]
            jobs.append((r['name'], r['r1'], r['r2'], src, units, steps))
    return jobs

def work(job):
    name, r1, r2, src, units, steps = job
    from research.ac_hashfree_cascade_20260914 import acmoves
    try:
        h = acmoves.decode_counts((r1, r2), steps)
        return (name, src, units, h['total'], h['multiply'], None)
    except Exception as e:
        return (name, src, units, None, None, f'{type(e).__name__}: {e}'[:300])

if __name__ == '__main__':
    t0 = time.time()
    jobs = build(sys.argv[1])
    with Pool(4) as p:
        res = p.map(work, jobs, chunksize=200)
    fails = [r for r in res if r[5]]
    by_src = collections.Counter(r[1] for r in res)
    over = [r for r in res if r[2] > 1000]
    tot = sum(r[3] for r in res if r[3])
    summ = dict(rows=len(res), decoded_and_replayed=len(res) - len(fails), failures=len(fails), failure_examples=fails[:10],
                certificate_source=dict(by_src), rows_needing_more_than_1000_units=len(over),
                max_units=max(r[2] for r in res), elementary_moves_total=tot,
                elementary_moves_max=max(r[3] for r in res if r[3]), wall_s=round(time.time() - t0, 1))
    json.dump(summ, open(sys.argv[2], 'w'), indent=1)
    with gzip.open(sys.argv[3], 'wt') as f:
        f.write('name,certificate_source,units,elementary_moves,ac_multiplies,error\n')
        for r in res:
            f.write(','.join('' if v is None else str(v).replace(',', ';') for v in r) + '\n')
    print(json.dumps(summ, indent=1))
