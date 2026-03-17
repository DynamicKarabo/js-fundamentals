function search(g, w) {
  const dfs = (r, c, i) => {
    if (i === w.length) return true;
    if (r < 0 || r >= g.length || c < 0 || c >= g[0].length || g[r][c] !== w[i]) return false;
    const t = g[r][c]; g[r][c] = '#';
    const found = dfs(r+1,c,i+1) || dfs(r-1,c,i+1) || dfs(r,c+1,i+1) || dfs(r,c-1,i+1);
    g[r][c] = t; return found;
  };
  return g.some((row, r) => row.some((_, c) => dfs(r, c, 0)));
}

const g = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']];
console.log(search(g, "ABCCED"), search(g, "SEE"), search(g, "ABCB"));
