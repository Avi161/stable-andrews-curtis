/* progress/comments.js — per-slide review comments. No server, no tokens.
   c: open/close · pin: next click on the slide anchors the note · ⌘/Ctrl+Enter: save draft
   sinks: commit on GitHub (prefilled new-file page) · copy markdown · download · write to repo (serve.py only) */
(function () {
  var REPO = 'Avi161/stable-andrews-curtis', DIR = 'progress/comments';
  /* comments land on the branch the deck is published from; override with ?branch=<name> */
  var BRANCH = new URLSearchParams(location.search).get('branch') || 'main';
  var KEY = 'acprog.comments.v1', URL_MAX = 7000;
  var api = DECK.api;
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } }
  function store() { try { localStorage.setItem(KEY, JSON.stringify(drafts)); } catch (e) {} }
  var drafts = load(), committed = [], pinning = false, pending = null;

  var pill = document.createElement('button');
  pill.type = 'button'; pill.className = 'cmt-pill'; pill.title = 'comment on this slide  (c)';
  api.stage.appendChild(pill);
  var pins = document.createElement('div'); pins.className = 'cmt-pins'; api.stage.appendChild(pins);
  var panel = document.createElement('aside'); panel.className = 'cmt-panel';
  panel.innerHTML =
    '<div class="cmt-head"><span class="where"></span><button type="button" data-a="close" title="close (esc)">\u00d7</button></div>' +
    '<ol class="cmt-list"></ol>' +
    '<textarea class="cmt-text" placeholder="what should change on this slide?"></textarea>' +
    '<div class="cmt-row"><button type="button" data-a="pin">pin \u25ce</button><button type="button" data-a="add" class="primary">save \u2318\u21b5</button></div>' +
    '<div class="cmt-row"><span class="count"></span></div>' +
    '<div class="cmt-row"><button type="button" data-a="gh">commit on GitHub \u2197</button><button type="button" data-a="copy">copy md</button>' +
    '<button type="button" data-a="dl">download</button><button type="button" data-a="local" hidden>write to repo</button>' +
    '<button type="button" data-a="clear">clear sent</button></div>';
  document.body.appendChild(panel);
  var ta = panel.querySelector('textarea');

  function slideInfo() {
    var sec = api.slides[api.current()], h = sec.querySelector('h1');
    return { slide: sec.id, n: api.current() + 1, step: api.stepNow(),
             title: h ? h.textContent.replace(/\s+/g, ' ').trim() : sec.id };
  }
  function isOpen() { return document.body.classList.contains('cmt-open'); }
  function toggle(on) { document.body.classList.toggle('cmt-open', on === undefined ? !isOpen() : on); render(); if (isOpen()) ta.focus(); }
  function unsent() { return drafts.filter(function (c) { return !c.sent; }); }

  function render() {
    var s = slideInfo();
    panel.querySelector('.where').textContent = 'slide ' + s.n + ' \u00b7 ' + s.slide + (s.step ? ' \u00b7 step ' + s.step : '');
    var here = committed.concat(drafts).filter(function (c) { return c.slide === s.slide; });
    var ol = panel.querySelector('.cmt-list'); ol.innerHTML = '';
    pins.innerHTML = '';
    here.forEach(function (c, k) {
      var li = document.createElement('li');
      li.className = c.committed ? 'committed' : (c.sent ? 'sent' : '');
      li.textContent = (k + 1) + '. ' + (c.done ? '\u2713 ' : '') + c.text;
      ol.appendChild(li);
      if (c.x != null) {
        var p = document.createElement('div');
        p.className = 'cmt-pin' + (c.done ? ' fixed' : c.committed ? ' committed' : '');
        p.style.left = c.x + 'px'; p.style.top = c.y + 'px'; p.textContent = k + 1;
        pins.appendChild(p);
      }
    });
    var u = unsent().length;
    pill.innerHTML = 'comment \u270e' + (u ? '<span class="n">' + u + '</span>' : '');
    panel.querySelector('.count').textContent = u + ' unsent \u00b7 ' + drafts.length + ' saved here';
    panel.querySelector('[data-a="pin"]').classList.toggle('on', pinning || !!pending);
  }

  function md(list) {
    return list.map(function (c) {
      var meta = { id: c.id, deck: 'progress', slide: c.slide, n: c.n, step: c.step, x: c.x, y: c.y, at: c.at, url: c.url };
      return '### ' + c.n + ' \u00b7 ' + c.title + (c.step ? ' \u00b7 step ' + c.step : '') + '\n' +
             '<!-- comment ' + JSON.stringify(meta) + ' -->\n' +
             '- [ ] ' + c.text.replace(/\n/g, '\n  ') + '\n';
    }).join('\n');
  }
  function stamp() { return new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, ''); } /* 20260922T194012Z */
  function markSent(list) { list.forEach(function (c) { c.sent = true; }); store(); render(); }

  function add() {
    var t = ta.value.trim(); if (!t) return;
    var s = slideInfo(), at = new Date().toISOString().replace(/\.\d+/, '');
    drafts.push({ id: 'c-' + stamp() + '-' + Math.random().toString(16).slice(2, 4), slide: s.slide, n: s.n, step: s.step,
                  title: s.title, text: t, x: pending ? pending.x : null, y: pending ? pending.y : null, at: at,
                  url: location.origin + location.pathname + (s.step ? '?step=' + s.step : '') + '#' + s.n });
    ta.value = ''; pending = null; store(); render();
  }
  function ghURL(body) {
    return 'https://github.com/' + REPO + '/new/' + BRANCH + '/' + DIR +
           '?filename=' + encodeURIComponent(stamp() + '.md') + '&value=' + encodeURIComponent(body);
  }
  function copy(text) {
    if (navigator.clipboard) return navigator.clipboard.writeText(text);
    var t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select();
    document.execCommand('copy'); t.remove(); return Promise.resolve();
  }
  function download(text) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/markdown' }));
    a.download = 'comments-' + stamp() + '.md'; a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  panel.addEventListener('click', function (e) {
    e.stopPropagation();
    var b = e.target.closest('button'); if (!b) return;
    var a = b.getAttribute('data-a'), list = unsent(), body = md(list);
    if (a === 'close') toggle(false);
    else if (a === 'add') add();
    else if (a === 'pin') { pinning = !pinning; document.body.classList.toggle('cmt-pinning', pinning); render(); }
    else if (a === 'copy' && list.length) copy(body).then(function () { markSent(list); });
    else if (a === 'dl' && list.length) { download(body); markSent(list); }
    else if (a === 'gh' && list.length) {
      var u = ghURL(body);
      if (u.length > URL_MAX) { copy(body); download(body); alert('Too long for one link: copied + downloaded instead. Paste into progress/COMMENTS.md.'); }
      else window.open(u, '_blank', 'noopener');
      markSent(list);
    }
    else if (a === 'local' && list.length) {
      fetch('/_comments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ md: body }) })
        .then(function (r) { if (!r.ok) throw 0; markSent(list); }).catch(function () { alert('serve.py did not accept the comments'); });
    }
    else if (a === 'clear') { drafts = unsent(); store(); render(); }
  });
  ta.addEventListener('keydown', function (e) { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); add(); } });
  pill.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });

  /* pin mode swallows exactly one click on the stage, before the deck's click-to-advance sees it */
  document.addEventListener('click', function (e) {
    if (!pinning || panel.contains(e.target)) return;
    var r = api.stage.getBoundingClientRect(), s = r.width / 1440;
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return;
    e.stopPropagation(); e.preventDefault();
    pending = { x: Math.round((e.clientX - r.left) / s), y: Math.round((e.clientY - r.top) / s) };
    pinning = false; document.body.classList.remove('cmt-pinning'); render(); ta.focus();
  }, true);

  window.addEventListener('keydown', function (e) {
    var typing = e.target.closest && e.target.closest('input, textarea, select, [contenteditable]');
    if (e.key === 'Escape' && (isOpen() || pinning)) { e.preventDefault(); pinning = false; document.body.classList.remove('cmt-pinning'); toggle(false); }
    else if (!typing && (e.key === 'c' || e.key === 'C') && !e.metaKey && !e.ctrlKey) { e.preventDefault(); toggle(); }
  }, true);
  window.addEventListener('hashchange', render);
  document.addEventListener('keyup', function () { if (isOpen()) render(); });   /* follow step/slide changes */
  window.addEventListener('deck:show', function () { if (isOpen()) render(); });

  /* committed comments, read-only: what Claude will see */
  fetch('COMMENTS.md', { cache: 'no-store' }).then(function (r) { return r.ok ? r.text() : ''; }).then(function (t) {
    var re = /<!-- comment (\{.*?\}) -->\n- \[( |x)\] ([^\n]*)/g, m;
    while ((m = re.exec(t))) {
      try { var c = JSON.parse(m[1]); c.text = m[3]; c.done = m[2] === 'x'; c.committed = true; committed.push(c); } catch (e) {}
    }
    render();
  }).catch(function () {});
  /* serve.py present? then offer 'write to repo' */
  fetch('/_comments').then(function (r) { if (r.ok) panel.querySelector('[data-a="local"]').hidden = false; }).catch(function () {});
  render();
})();