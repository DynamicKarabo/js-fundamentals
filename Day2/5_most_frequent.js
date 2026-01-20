function mostFrequent(arr) {
    let count = {};
    let maxElement = arr[0];
    let maxCount = 1;

    for (let item of arr) {
        count[item] = (count[item] || 0) + 1;
        if (count[item] > maxCount) {
            maxCount = count[item];
            maxElement = item;
        }
    }
    console.log(maxElement);
}

// Example
mostFrequent([1, 2, 2, 3, 3, 3, 4]);
