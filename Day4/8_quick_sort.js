function quickSort(a) {
  if (a.length <= 1) return a;
  const p = a[0], left = [], right = [];
  for (let i = 1; i < a.length; i++) a[i] < p ? left.push(a[i]) : right.push(a[i]);
  return [...quickSort(left), p, ...quickSort(right)];
}

console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));
console.log(quickSort([3, 1, 4, 1, 5, 9]));
