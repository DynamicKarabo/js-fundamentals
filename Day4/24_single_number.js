const findSingle = a => a.reduce((res, n) => res ^ n, 0);
console.log(findSingle([4, 1, 2, 1, 2]), findSingle([2, 2, 1]), findSingle([1]));
