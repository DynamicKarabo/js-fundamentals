function inorder(n, res = []) {
  if (n) {
    inorder(n.left, res);
    res.push(n.v);
    inorder(n.right, res);
  }
  return res;
}

class Node {
  constructor(v) { this.v = v; this.left = this.right = null; }
}

const build = (arr) => {
  const nodes = arr.map(v => v ? new Node(v) : null);
  nodes.forEach((n, i) => {
    if (n) {
      if (2*i+1 < nodes.length) n.left = nodes[2*i+1];
      if (2*i+2 < nodes.length) n.right = nodes[2*i+2];
    }
  });
  return nodes[0];
};

console.log(inorder(build([10, 5, 15, 2, 7, 12, 20]))); // [2, 5, 7, 10, 12, 15, 20]
console.log(inorder(new Node(5))); // [5]
