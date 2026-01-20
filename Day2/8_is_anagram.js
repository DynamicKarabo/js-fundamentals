function isAnagram(str1, str2) {
    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");
    console.log(sorted1 === sorted2);
}

// Example
isAnagram("listen", "silent");
