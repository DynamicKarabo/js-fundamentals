function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
}

// Example
sumArray([1, 2, 3, 4, 5]); // 15
sumArray([10, 20, 30]);    // 60
