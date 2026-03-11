function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  console.log(result);
}

// Example
power(2, 3); // 8
power(5, 2); // 25
