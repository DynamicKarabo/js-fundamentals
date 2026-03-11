function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  console.log(count);
}

// Example
countOccurrences([1, 2, 3, 2, 4, 2], 2); // 3
countOccurrences(["a", "b", "a"], "c");    // 0
