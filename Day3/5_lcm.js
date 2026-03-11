function lcm(a, b) {
  // First find GCD
  let x = a;
  let y = b;
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  let gcd = x;

  // LCM = (a * b) / GCD
  let result = (a * b) / gcd;
  console.log(result);
}

// Example
lcm(12, 18); // 36
lcm(5, 7);   // 35
