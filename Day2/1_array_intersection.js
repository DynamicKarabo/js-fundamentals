function arrayIntersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  console.log(result);
}

// Example
arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]);
