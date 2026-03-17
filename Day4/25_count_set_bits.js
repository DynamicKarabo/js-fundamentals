function countSetBits(n) {
  let count = 0;
  while (n > 0) { n &= (n - 1); count++; }
  return count;
}
console.log(countSetBits(5), countSetBits(7), countSetBits(8));
