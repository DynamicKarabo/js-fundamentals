function subsets(a, i = 0, cur = [], res = []) {
  res.push([...cur]);
  for (let j = i; j < a.length; j++) {
    cur.push(a[j]); subsets(a, j + 1, cur, res); cur.pop();
  }
  return res;
}

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
