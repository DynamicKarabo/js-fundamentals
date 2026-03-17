function bfs(root) {
  if (!root) return [];
  const res = [], q = [root];
  while (q.length) {
    const n = q.shift();
    res.push(n.v);
    if (n.left) q.push(n.left);
    if (n.right) q.push(n.right);
  }
  return res;
}

class Node {
  constructor(v) { this.v = v; this.left = this.right = null; }
}

const n1 = new Node(1), n2 = new Node(2), n3 = new Node(3);
n1.left = n2; n1.right = n3;
n2.left = new Node(4); n2.right = new Node(5);

console.log(bfs(n1)); // [1, 2, 3, 4, 5]
console.log(bfs(new Node(1))); // [1]
