function countSubstring(str, sub) {
    let count = 0;
    for (let i = 0; i <= str.length - sub.length; i++) {
        if (str.slice(i, i + sub.length) === sub) count++;
    }
    console.log(count);
}

// Example
countSubstring("hello hello world", "hello");
