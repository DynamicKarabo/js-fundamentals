function combine(n, k, s = 1, cur = [], res = []) {
  if (cur.length === k) return res.push([...cur]);
  for (let i = s; i <= n; i++) {
    cur.push(i); combine(n, k, i + 1, cur, res); cur.pop();
  }
  return res;
}

console.log(combine(4, 2));
console.log(combine(3, 1));
