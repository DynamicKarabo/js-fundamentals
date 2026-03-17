function heapSort(a) {
  const h = (arr, s, i) => {
    let l = i, left = 2*i+1, right = 2*i+2;
    if (left < s && arr[left] > arr[l]) l = left;
    if (right < s && arr[right] > arr[l]) l = right;
    if (l !== i) { [arr[i], arr[l]] = [arr[l], arr[i]]; h(arr, s, l); }
  };
  const n = a.length;
  for (let i = Math.floor(n/2)-1; i >= 0; i--) h(a, n, i);
  for (let i = n-1; i > 0; i--) { [a[0], a[i]] = [a[i], a[0]]; h(a, i, 0); }
  return a;
}

console.log(heapSort([12, 11, 13, 5, 6, 7]));
console.log(heapSort([1, 3, 2, 4, 5]));
