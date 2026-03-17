function maxSlidingWindow(a, k) {
  let q = [], res = [];
  for (let i = 0; i < a.length; i++) {
    while (q.length && a[q[q.length-1]] <= a[i]) q.pop();
    q.push(i);
    if (q[0] === i - k) q.shift();
    if (i >= k - 1) res.push(a[q[0]]);
  }
  return res;
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
