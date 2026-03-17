class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(rootValue) {
    this.root = new TreeNode(rootValue);
  }

  insert(value) {
    const q = [this.root];
    while (q.length) {
      const n = q.shift();
      if (!n.left) return n.left = new TreeNode(value);
      q.push(n.left);
      if (!n.right) return n.right = new TreeNode(value);
      q.push(n.right);
    }
  }

  inorder(n = this.root, res = []) {
    if (n) {
      this.inorder(n.left, res);
      res.push(n.value);
      this.inorder(n.right, res);
    }
    return res;
  }

  preorder(n = this.root, res = []) {
    if (n) {
      res.push(n.value);
      this.preorder(n.left, res);
      this.preorder(n.right, res);
    }
    return res;
  }

  postorder(n = this.root, res = []) {
    if (n) {
      this.postorder(n.left, res);
      this.postorder(n.right, res);
      res.push(n.value);
    }
    return res;
  }
}

const tree = new BinaryTree(10);
[5, 15, 2, 7].forEach(v => tree.insert(v));
console.log(tree.inorder());   // [2, 5, 7, 10, 15]
console.log(tree.preorder());  // [10, 5, 2, 7, 15]
console.log(tree.postorder()); // [2, 7, 5, 15, 10]
