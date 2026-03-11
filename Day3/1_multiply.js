function multiplyArgs(...args) {
  if (args.length === 0) {
    console.log(0);
    return;
  }
  let total = 1;
  for (let i = 0; i < args.length; i++) {
    total *= args[i];
  }
  console.log(total);
}

// Example
multiplyArgs(1, 2, 3, 4); // 24
multiplyArgs(5, 10, 2);   // 100
