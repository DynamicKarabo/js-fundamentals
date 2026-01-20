function findDuplicates(arr) {
    let seen = {};
    let duplicates = [];
    for (let item of arr) {
        seen[item] = (seen[item] || 0) + 1;
    }
    for (let key in seen) {
        if (seen[key] > 1) duplicates.push(key);
    }
    console.log(duplicates);
}

// Example
findDuplicates([1, 2, 2, 3, 4, 4, 4, 5]);
