function rotateArray(arr, k) {
    k = k % arr.length;
    let rotated = arr.slice(-k).concat(arr.slice(0, arr.length - k));
    console.log(rotated);
}

// Example
rotateArray([1, 2, 3, 4, 5], 2);
