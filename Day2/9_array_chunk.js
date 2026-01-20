function arrayChunk(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    console.log(result);
}

// Example
arrayChunk([1, 2, 3, 4, 5], 2);
