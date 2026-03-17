function hasCycle(g) {
  const vis = new Set(), stack = new Set();
  const check = (n) => {
    if (stack.has(n)) return true;
    if (vis.has(n)) return false;
    vis.add(n); stack.add(n);
    if ((g[n] || []).some(m => check(m))) return true;
    stack.delete(n);
    return false;
  };
  return Object.keys(g).some(n => check(n));
}

console.log(hasCycle({0: [1], 1: [2], 2: [0]}));
console.log(hasCycle({0: [1], 1: [2], 2: []}));
