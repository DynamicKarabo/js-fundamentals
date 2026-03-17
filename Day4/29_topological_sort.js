function topologicalSort(n, e) {
  let g = Array.from({length: n}, () => []), deg = Array(n).fill(0), res = [];
  e.forEach(([u, v]) => { g[u].push(v); deg[v]++; });
  let q = []; deg.forEach((d, i) => { if (d === 0) q.push(i); });
  while (q.length) {
    let u = q.shift(); res.push(u);
    g[u].forEach(v => { if (--deg[v] === 0) q.push(v); });
  }
  return res.length === n ? res : [];
}
console.log(topologicalSort(4, [[1,0], [2,0], [3,1], [3,2]]));
console.log(topologicalSort(2, [[0,1]]));
