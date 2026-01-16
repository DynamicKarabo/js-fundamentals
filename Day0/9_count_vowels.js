let str = "hello world";
let count = 0;
let vowels = "aeiou";

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i].toLowerCase())) {
    count++;
  }
}

console.log(count);
