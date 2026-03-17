const findMissing = a => {
  let n = a.length, expected = (n * (n + 1)) / 2, actual = a.reduce((s, x) => s + x, 0);
  return expected - actual;
}
console.log(findMissing([3, 0, 1]), findMissing([9, 6, 4, 2, 3, 5, 7, 0, 1]));
