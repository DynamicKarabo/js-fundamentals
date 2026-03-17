class BSTNode {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}

class BST {
  constructor() { this.root = null; }

  insert(v) { this.root = this._ins(this.root, v); }
  _ins(n, v) {
    if (!n) return new BSTNode(v);
    if (v < n.v) n.left = this._ins(n.left, v);
    else n.right = this._ins(n.right, v);
    return n;
  }

  search(v, n = this.root) {
    if (!n) return false;
    if (n.v === v) return true;
    return v < n.v ? this.search(v, n.left) : this.search(v, n.right);
  }

  delete(v) { this.root = this._del(this.root, v); }
  _del(n, v) {
    if (!n) return null;
    if (v < n.v) n.left = this._del(n.left, v);
    else if (v > n.v) n.right = this._del(n.right, v);
    else {
      if (!n.left) return n.right;
      if (!n.right) return n.left;
      n.v = this._min(n.right);
      n.right = this._del(n.right, n.v);
    }
    return n;
  }

  _min(n) {
    while (n.left) n = n.left;
    return n.v;
  }
}

const bst = new BST();
[50, 30, 70, 20, 40, 60, 80].forEach(v => bst.insert(v));
console.log(bst.search(40)); // true
console.log(bst.search(100)); // false
bst.delete(20);
bst.delete(30);
console.log(bst.search(30)); // false
console.log(bst.search(40)); // true
