function detectCycle(h) {
  let s = h, f = h;
  while (f && f.next) {
    s = s.next; f = f.next.next;
    if (s === f) return true;
  }
  return false;
}
class Node { constructor(v) { this.v = v; this.next = null; } }
const h = new Node(1), n2 = new Node(2);
h.next = n2; n2.next = new Node(3); n2.next.next = n2;
console.log(detectCycle(h));
console.log(detectCycle(new Node(1)));
