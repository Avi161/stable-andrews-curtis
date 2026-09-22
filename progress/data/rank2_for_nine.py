import sys, json, time, gzip, csv
sys.path.insert(0, '.')
import numba; numba.set_num_threads(1)
from research.ac_hashfree_cascade_20260914 import hfcascade, verify
nine = ['ac19_17417','ac19_21735','ac19_31624','ac19_33204','ac19_56260','ac19_57787','ac19_65876','ac19_69315','ac19_71557']
rows = {r['name']: (r['r1'], r['r2']) for r in csv.DictReader(open('data/AC19_extended_aut_min.csv'))}
out = open(sys.argv[1], 'w')
for n in nine:
    pair = rows[n]
    for budget in (20000, 100000, 500000):
        t = time.time()
        res = hfcascade.solve(pair, budget=budget, engine='fast', score='length', closed_set='hash', nielsen=True, perms=True, gate_when='pop')
        w = time.time() - t
        if res['solved']:
            verify.replay(pair, res['steps'], None)
            kinds = {}
            for s in res['steps']: kinds[s['kind']] = kinds.get(s['kind'], 0) + 1
            rec = dict(name=n, r1=pair[0], r2=pair[1], solved=True, units=res['units'], budget=budget, wall=round(w, 2), kinds=kinds, verified=True, steps=res['steps'])
            print(n, 'solved rank-two', res['units'], 'units @budget', budget, kinds, f'{w:.1f}s', flush=True)
            out.write(json.dumps(rec) + '\n'); out.flush()
            break
        print(n, 'not at', budget, f'{w:.1f}s', flush=True)
    else:
        out.write(json.dumps(dict(name=n, solved=False)) + '\n')
