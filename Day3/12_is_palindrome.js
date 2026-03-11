function isPalindrome(str) {
  let cleanStr = str.toLowerCase();
  let reversed = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversed += cleanStr[i];
  }
  console.log(cleanStr === reversed);
}

// Example
isPalindrome("racecar"); // true
isPalindrome("hello");   // false
