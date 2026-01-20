function caseCounter(str) {
    let upper = 0, lower = 0;
    for (let char of str) {
        if (char >= "A" && char <= "Z") upper++;
        else if (char >= "a" && char <= "z") lower++;
    }
    console.log({ uppercase: upper, lowercase: lower });
}

// Example
caseCounter("Hello World");
