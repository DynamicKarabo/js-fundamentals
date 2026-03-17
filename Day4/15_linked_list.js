class Node { constructor(d) { this.d = d; this.next = null; } }
class LinkedList {
  constructor() { this.head = null; }
  insert(d) {
    const n = new Node(d);
    if (!this.head) return this.head = n;
    let c = this.head; while (c.next) c = c.next; c.next = n;
  }
  delete(d) {
    if (!this.head) return;
    if (this.head.d === d) return this.head = this.head.next;
    let c = this.head; while (c.next && c.next.d !== d) c = c.next;
    if (c.next) c.next = c.next.next;
  }
  search(d) {
    let c = this.head; while (c) { if (c.d === d) return true; c = c.next; }
    return false;
  }
  display() {
    let c = this.head, res = []; while (c) { res.push(c.d); c = c.next; }
    console.log(res.join(' -> ') + ' -> null');
  }
}

const list = new LinkedList();
[10, 20, 30].forEach(v => list.insert(v));
list.display(); list.delete(20); list.display();
console.log(list.search(30));
