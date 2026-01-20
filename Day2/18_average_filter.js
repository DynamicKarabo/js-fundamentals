function averageFilter(arr) {
    let sum = 0;
    for (let num of arr) sum += num;
    let avg = sum / arr.length;

    let result = arr.filter(x => x > avg);
    console.log(result);
}

// Example
averageFilter([1, 2, 3, 4, 5]);
