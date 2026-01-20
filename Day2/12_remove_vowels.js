function removeVowels(str) {
    let vowels = "aeiouAEIOU";
    let result = "";
    for (let char of str) {
        if (!vowels.includes(char)) result += char;
    }
    console.log(result);
}

// Example
removeVowels("hello world");
