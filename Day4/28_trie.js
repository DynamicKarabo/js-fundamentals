class TrieNode { constructor() { this.c = {}; this.isEnd = false; } }
class Trie {
  constructor() { this.root = new TrieNode(); }
  insert(w) {
    let n = this.root;
    for (let c of w) { if (!n.c[c]) n.c[c] = new TrieNode(); n = n.c[c]; }
    n.isEnd = true;
  }
  search(w, p = false) {
    let n = this.root;
    for (let c of w) { if (!n.c[c]) return false; n = n.c[c]; }
    return p || n.isEnd;
  }
  startsWith(pre) { return this.search(pre, true); }
}
const t = new Trie(); t.insert('apple');
console.log(t.search('apple'), t.search('app'), t.startsWith('app'));
