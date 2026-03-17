function reverse(h) {
  let p = null, c = h;
  while (c) { let n = c.next; c.next = p; p = c; c = n; }
  return p;
}
class Node { constructor(d) { this.d = d; this.next = null; } }
const show = (h) => {
  let c = h, res = []; while (c) { res.push(c.d); c = c.next; }
  console.log(res.join(' -> ') + ' -> null');
}
const h = new Node(1); h.next = new Node(2); h.next.next = new Node(3);
show(h); show(reverse(h));
