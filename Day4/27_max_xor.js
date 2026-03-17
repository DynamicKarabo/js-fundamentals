function findMaxXOR(a) {
  let max = 0;
  for (let i = 0; i < a.length; i++)
    for (let j = i; j < a.length; j++)
      max = Math.max(max, a[i] ^ a[j]);
  return max;
}
console.log(findMaxXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]));
console.log(findMaxXOR([1, 2, 3, 4, 5]));
