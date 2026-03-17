class Node { constructor(k, v) { this.k = k; this.v = v; this.p = this.n = null; } }
class LRUCache {
  constructor(c) { this.c = c; this.m = new Map(); this.h = new Node(); this.t = new Node(); this.h.n = this.t; this.t.p = this.h; }
  _rem(n) { n.p.n = n.n; n.n.p = n.p; }
  _add(n) { n.n = this.h.n; n.p = this.h; this.h.n.p = n; this.h.n = n; }
  get(k) { if (!this.m.has(k)) return -1; let n = this.m.get(k); this._rem(n); this._add(n); return n.v; }
  put(k, v) { if (this.m.has(k)) this._rem(this.m.get(k)); let n = new Node(k, v); this._add(n); this.m.set(k, n); if (this.m.size > this.c) { let l = this.t.p; this._rem(l); this.m.delete(l.k); } }
}
const cache = new LRUCache(2);
cache.put(1, 1); cache.put(2, 2);
console.log(cache.get(1)); cache.put(3, 3);
console.log(cache.get(2));
