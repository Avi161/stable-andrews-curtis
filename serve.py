#!/usr/bin/env python3
"""Serve the deck, and let a second device drive it.

    python3 serve.py            # then open the printed URLs

Plain `python3 -m http.server` still works for the deck; it just has no /_poll, so
the remote link stays dark and everything else behaves the same.  Here the phone
sends a COMMAND ("next"), never a slide number: the deck decides what next means, so
sub-steps advance from the phone exactly as they do from the keyboard.
"""
import http.server, json, os, socket, socketserver, threading, urllib.parse

PORT = int(os.environ.get("PORT", "8777"))
HERE = os.path.dirname(os.path.abspath(__file__))

_lock = threading.Condition()
_state = {"rev": 0, "cmd": "", "slide": 1, "n": 1, "step": 0, "steps": 0}


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=HERE, **kw)

    def _json(self, obj):
        body = json.dumps(obj).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        u = urllib.parse.urlparse(self.path)
        q = urllib.parse.parse_qs(u.query)
        one = lambda k, d="": (q.get(k) or [d])[0]

        if u.path == "/_poll":                      # long poll: the deck waits here
            since = int(one("since", "-1") or -1)
            with _lock:
                if since >= 0:
                    _lock.wait_for(lambda: _state["rev"] > since, timeout=25)
                snap = dict(_state)
            return self._json(snap)

        if u.path == "/_cmd":                       # the phone presses a button
            with _lock:
                _state["rev"] += 1
                _state["cmd"] = one("a")
                _lock.notify_all()
                snap = dict(_state)
            return self._json(snap)

        if u.path == "/_pos":                       # the deck reports where it is
            with _lock:
                for k in ("slide", "n", "step", "steps"):
                    _state[k] = int(one(k, str(_state[k])) or 0)
                snap = dict(_state)
            return self._json(snap)

        if u.path == "/_where":                     # the phone's status line
            with _lock:
                snap = dict(_state)
            return self._json(snap)

        return super().do_GET()

    def log_message(self, *a):
        pass                                        # a talking server ruins a talk


def lan_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"
    finally:
        s.close()


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


if __name__ == "__main__":
    ip = lan_ip()
    print("deck    http://localhost:%d/index.html" % PORT)
    print("remote  http://%s:%d/remote.html   (same wifi, open on your phone)" % (ip, PORT))
    Server(("", PORT), Handler).serve_forever()
