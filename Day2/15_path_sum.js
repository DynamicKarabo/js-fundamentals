function pathSum(arr, target) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
        if (sum === target) return console.log(true);
    }
    console.log(false);
}

// Example
pathSum([1, 2, 3, 4], 5);
