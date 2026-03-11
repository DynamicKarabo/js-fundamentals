function fibNth(n) {
  if (n <= 0) {
    console.log(0);
    return;
  }
  if (n === 1) {
    console.log(1);
    return;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  console.log(b);
}

// Example
fibNth(5); // 5 (0, 1, 1, 2, 3, 5)
fibNth(7); // 13
