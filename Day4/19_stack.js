class Stack {
  constructor() { this.i = []; }
  push(v) { this.i.push(v); }
  pop() { return this.i.pop(); }
  peek() { return this.i[this.i.length - 1]; }
  isEmpty() { return !this.i.length; }
}
const s = new Stack();
s.push(10); s.push(20);
console.log(s.pop(), s.peek(), s.isEmpty());
