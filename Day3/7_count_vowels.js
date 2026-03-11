function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}

// Example
countVowels("hello world"); // 3
countVowels("Javascript");  // 3
