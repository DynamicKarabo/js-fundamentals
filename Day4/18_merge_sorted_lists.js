class Node { constructor(v) { this.v = v; this.next = null; } }
function merge(l1, l2) {
  if (!l1) return l2; if (!l2) return l1;
  if (l1.v < l2.v) { l1.next = merge(l1.next, l2); return l1; }
  l2.next = merge(l1, l2.next); return l2;
}
const show = (h) => {
  let c = h, res = []; while (c) { res.push(c.v); c = c.next; }
  console.log(res.join(' -> ') + ' -> null');
}
const a = new Node(1); a.next = new Node(3);
const b = new Node(2); b.next = new Node(4);
show(merge(a, b));
