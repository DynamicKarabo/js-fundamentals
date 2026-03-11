function findMax(...args) {
  if (args.length === 0) {
    console.log(undefined);
    return;
  }
  let max = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
  }
  console.log(max);
}

// Example
findMax(1, 5, 2, 9, 3); // 9
findMax(-10, -5, -20);  // -5
