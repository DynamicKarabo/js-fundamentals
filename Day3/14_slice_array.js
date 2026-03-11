function sliceArray(arr, start, end) {
  let result = [];
  // Use length if end is not provided
  let actualEnd = end === undefined ? arr.length : end;
  
  for (let i = start; i < actualEnd && i < arr.length; i++) {
    result.push(arr[i]);
  }
  console.log(result);
}

// Example
sliceArray([1, 2, 3, 4, 5], 1, 3); // [2, 3]
sliceArray([1, 2, 3, 4, 5], 2);    // [3, 4, 5]
