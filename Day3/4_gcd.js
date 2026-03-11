function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log(a);
}

// Example
gcd(48, 18); // 6
gcd(10, 5);  // 5
