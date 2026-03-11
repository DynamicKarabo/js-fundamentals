function isPrime(num) {
  if (num <= 1) {
    console.log(false);
    return;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(false);
      return;
    }
  }
  console.log(true);
}

// Example
isPrime(7);  // true
isPrime(10); // false
isPrime(1);  // false
