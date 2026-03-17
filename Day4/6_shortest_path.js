function shortestPath(g, s, e) {
  let q = [[s]], vis = new Set([s]);
  while (q.length) {
    let p = q.shift(), n = p[p.length-1];
    if (n === e) return p;
    (g[n] || []).forEach(m => {
      if (!vis.has(m)) { vis.add(m); q.push([...p, m]); }
    });
  }
  return null;
}

console.log(shortestPath({A: ['B', 'C'], B: ['D'], C: ['E'], D: ['F'], E: [], F: []}, 'A', 'F'));
console.log(shortestPath({A: ['B'], B: ['C']}, 'A', 'C'));
