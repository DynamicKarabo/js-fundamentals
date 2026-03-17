function dfs(g, n, vis = new Set(), res = []) {
  if (!n || vis.has(n)) return;
  vis.add(n); res.push(n);
  (g[n] || []).forEach(m => dfs(g, m, vis, res));
  return res;
}

console.log(dfs({A: ['B', 'C'], B: ['D'], C: ['E'], D: [], E: []}, 'A'));
console.log(dfs({1: [2, 3], 2: [4], 3: [], 4: []}, 1));
