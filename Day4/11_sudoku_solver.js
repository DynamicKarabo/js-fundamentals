function solve(b) {
  for (let r = 0; r < 9; r++)
    for (let c = 0; c < 9; c++)
      if (b[r][c] === 0) {
        for (let v = 1; v <= 9; v++)
          if (ok(b, r, c, v)) {
            b[r][c] = v;
            if (solve(b)) return true;
            b[r][c] = 0;
          }
        return false;
      }
  return true;
}
function ok(b, r, c, v) {
  for (let i = 0; i < 9; i++) {
    const br = 3*Math.floor(r/3)+Math.floor(i/3), bc = 3*Math.floor(c/3)+i%3;
    if (b[r][i] === v || b[i][c] === v || b[br][bc] === v) return false;
  }
  return true;
}

let board = [[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]];
if (solve(board)) console.log(board.slice(0, 3));
