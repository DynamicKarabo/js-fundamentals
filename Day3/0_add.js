function sumArgs(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  console.log(total);
}

// Example
sumArgs(1, 2, 3, 4, 5); // 15
sumArgs(10, -2, 7);     // 15
