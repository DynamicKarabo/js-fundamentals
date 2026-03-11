function reverse(input) {
  let result = "";
  if (Array.isArray(input)) {
    let reversedArr = [];
    for (let i = input.length - 1; i >= 0; i--) {
      reversedArr.push(input[i]);
    }
    console.log(reversedArr);
  } else {
    for (let i = input.length - 1; i >= 0; i--) {
      result += input[i];
    }
    console.log(result);
  }
}

// Example
reverse("hello");     // "olleh"
reverse([1, 2, 3, 4]); // [4, 3, 2, 1]
