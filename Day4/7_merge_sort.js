function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const m = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, m)), right = mergeSort(arr.slice(m));
  let res = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) res.push(left[i++]);
    else res.push(right[j++]);
  }
  return res.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
console.log(mergeSort([5, 1, 3]));
console.log(mergeSort([]));
