function nQueens(n) {
  const res = [], board = Array(n).fill(0).map(() => Array(n).fill('.'));
  const solve = (r) => {
    if (r === n) return res.push(board.map(row => row.join('')));
    for (let c = 0; c < n; c++) {
      if (isValid(r, c)) {
        board[r][c] = 'Q';
        solve(r + 1);
        board[r][c] = '.';
      }
    }
  };
  const isValid = (r, c) => {
    for (let i = 0; i < r; i++) {
      if (board[i][c] === 'Q' || (board[i].indexOf('Q') !== -1 && (Math.abs(r-i) === Math.abs(c-board[i].indexOf('Q'))))) return false;
    }
    return true;
  };
  solve(0);
  return res;
}

console.log(nQueens(4).length);
console.log(nQueens(1));
