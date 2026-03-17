const isPowerOfTwo = n => n > 0 && (n & (n - 1)) === 0;
console.log(isPowerOfTwo(16), isPowerOfTwo(15), isPowerOfTwo(0), isPowerOfTwo(1));
