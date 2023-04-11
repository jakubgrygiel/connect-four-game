// virtual board
// game board i = 3 to 8, j = 3 to 9

function getMatch(arr: number[]) {
  const match = arr.every((el) => el === arr[0]);
  if (match) {
    return true;
  }
  return false;
}

function checkRight(board: number[][], winningNum: number, position: number[]) {
  let arr: number[] = [];
  let coord: number[][] = [];
  for (let j = 0; j < winningNum; j++) {
    arr.push(board[position[0]][position[1] + j]);
    coord.push([position[0], position[1] + j]);
  }
  const match = getMatch(arr);
  if (match) return { match: true, coord: coord, winner: arr[0] };
  return { match: false, coord: [], winner: 0 };
}

function checkLeft(board: number[][], winningNum: number, position: number[]) {
  let arr: number[] = [];
  let coord: number[][] = [];
  for (let j = 0; j < winningNum; j++) {
    arr.push(board[position[0]][position[1] - j]);
    coord.push([position[0], position[1] - j]);
  }
  const match = getMatch(arr);
  if (match) return { match: true, coord: coord, winner: arr[0] };
  return { match: false, coord: [], winner: 0 };
}

function checkTop(board: number[][], winningNum: number, position: number[]) {
  let arr: number[] = [];
  let coord: number[][] = [];
  for (let i = 0; i < winningNum; i++) {
    arr.push(board[position[0] - i][position[1]]);
    coord.push([position[0] - i, position[1]]);
  }
  const match = getMatch(arr);
  if (match) return { match: true, coord: coord, winner: arr[0] };
  return { match: false, coord: [], winner: 0 };
}

function checkBottom(
  board: number[][],
  winningNum: number,
  position: number[]
) {
  let arr: number[] = [];
  let coord: number[][] = [];
  for (let i = 0; i < winningNum; i++) {
    arr.push(board[position[0] + i][position[1]]);
    coord.push([position[0] + i, position[1]]);
  }
  const match = getMatch(arr);
  if (match) return { match: true, coord: coord, winner: arr[0] };
  return { match: false, coord: [], winner: 0 };
}

function checkTopRight(
  board: number[][],
  winningNum: number,
  position: number[]
) {
  let arr: number[] = [];
  let coord: number[][] = [];
  for (let i = 0; i < winningNum; i++) {
    arr.push(board[position[0] - i][position[1] + i]);
    coord.push([position[0] - i, position[1] + i]);
  }
  const match = getMatch(arr);
  if (match) return { match: true, coord: coord, winner: arr[0] };
  return { match: false, coord: [], winner: 0 };
}

function checkBottomRight(
  board: number[][],
  winningNum: number,
  position: number[]
) {
  let arr: number[] = [];
  let coord: number[][] = [];
  for (let i = 0; i < winningNum; i++) {
    arr.push(board[position[0] + i][position[1] + i]);
    coord.push([position[0] + i, position[1] + i]);
  }
  const match = getMatch(arr);
  if (match) return { match: true, coord: coord, winner: arr[0] };
  return { match: false, coord: [], winner: 0 };
}

function checkBottomLeft(
  board: number[][],
  winningNum: number,
  position: number[]
) {
  let arr: number[] = [];
  let coord: number[][] = [];
  for (let i = 0; i < winningNum; i++) {
    arr.push(board[position[0] + i][position[1] - i]);
    coord.push([position[0] + i, position[1] - i]);
  }
  const match = getMatch(arr);
  if (match) return { match: true, coord: coord, winner: arr[0] };
  return { match: false, coord: [], winner: 0 };
}

function checkTopLeft(
  board: number[][],
  winningNum: number,
  position: number[]
) {
  let arr: number[] = [];
  let coord: number[][] = [];
  for (let i = 0; i < winningNum; i++) {
    arr.push(board[position[0] - i][position[1] - i]);
    coord.push([position[0] - i, position[1] - i]);
  }
  const match = getMatch(arr);
  if (match) return { match: true, coord: coord, winner: arr[0] };
  return { match: false, coord: [], winner: 0 };
}

function getConditions(
  winningNum: number,
  board: number[][],
  i: number,
  j: number
) {
  return {
    topLeft:
      board[i][j] !== 0 &&
      i - (winningNum - 1) <= -1 &&
      j - (winningNum - 1) <= -1 &&
      i + (winningNum - 1) < board.length &&
      j + (winningNum - 1) < board[i].length,
    top:
      board[i][j] !== 0 &&
      i - (winningNum - 1) <= -1 &&
      j - (winningNum - 1) > -1 &&
      i + (winningNum - 1) < board.length &&
      j + (winningNum - 1) < board[i].length,
    topRight:
      board[i][j] !== 0 &&
      i - (winningNum - 1) <= -1 &&
      j + (winningNum - 1) >= board[i].length &&
      j - (winningNum - 1) > -1 &&
      i + (winningNum - 1) < board.length,
    bottomRight:
      board[i][j] !== 0 &&
      i + (winningNum - 1) >= board.length &&
      j + (winningNum - 1) >= board[i].length &&
      i - (winningNum - 1) > -1 &&
      j - (winningNum - 1) > -1,
    bottom:
      board[i][j] !== 0 &&
      i + (winningNum - 1) >= board.length &&
      i - (winningNum - 1) > -1 &&
      j - (winningNum - 1) > -1 &&
      j + (winningNum - 1) < board[i].length,
    bottomLeft:
      board[i][j] !== 0 &&
      j - (winningNum - 1) <= -1 &&
      i + (winningNum - 1) >= board.length &&
      i - (winningNum - 1) > -1 &&
      j + (winningNum - 1) < board[i].length,
    center:
      board[i][j] !== 0 &&
      i - (winningNum - 1) > -1 &&
      j - (winningNum - 1) > -1 &&
      i + (winningNum - 1) < board.length &&
      j + (winningNum - 1) < board[i].length,
  };
}

function checkForMatch(
  winningNum: number,
  board: number[][],
  i: number,
  j: number
) {
  const { topLeft, top, topRight, bottomRight, bottom, bottomLeft, center } =
    getConditions(winningNum, board, i, j);

  if (topLeft) {
    const checkingRight = checkRight(board, winningNum, [i, j]);
    if (checkingRight.match) return checkingRight;

    const checkingBottomRight = checkBottomRight(board, winningNum, [i, j]);
    if (checkingBottomRight.match) return checkingBottomRight;

    const checkingBottom = checkBottom(board, winningNum, [i, j]);
    if (checkingBottom.match) return checkingBottom;
  }
  if (top) {
    const checkingRight = checkRight(board, winningNum, [i, j]);
    if (checkingRight.match) return checkingRight;

    const checkingBottomRight = checkBottomRight(board, winningNum, [i, j]);
    if (checkingBottomRight.match) return checkingBottomRight;

    const checkingBottom = checkBottom(board, winningNum, [i, j]);
    if (checkingBottom.match) return checkingBottom;

    const checkingBottomLeft = checkBottomLeft(board, winningNum, [i, j]);
    if (checkingBottomLeft.match) return checkingBottomLeft;

    const checkingLeft = checkLeft(board, winningNum, [i, j]);
    if (checkingLeft.match) return checkingLeft;
  }
  if (topRight) {
    const checkingBottom = checkBottom(board, winningNum, [i, j]);
    if (checkingBottom.match) return checkingBottom;

    const checkingBottomLeft = checkBottomLeft(board, winningNum, [i, j]);
    if (checkingBottomLeft.match) return checkingBottomLeft;

    const checkingLeft = checkLeft(board, winningNum, [i, j]);
    if (checkingLeft.match) return checkingLeft;
  }
  if (bottomRight) {
    const checkingLeft = checkLeft(board, winningNum, [i, j]);
    if (checkingLeft.match) return checkingLeft;

    const checkingTopLeft = checkTopLeft(board, winningNum, [i, j]);
    if (checkingTopLeft.match) return checkingTopLeft;

    const checkingTop = checkTop(board, winningNum, [i, j]);
    if (checkingTop.match) return checkingTop;
  }
  if (bottom) {
    const checkingLeft = checkLeft(board, winningNum, [i, j]);
    if (checkingLeft.match) return checkingLeft;

    const checkingTopLeft = checkTopLeft(board, winningNum, [i, j]);
    if (checkingTopLeft.match) return checkingTopLeft;

    const checkingTop = checkTop(board, winningNum, [i, j]);
    if (checkingTop.match) return checkingTop;

    const checkingTopRight = checkTopRight(board, winningNum, [i, j]);
    if (checkingTopRight.match) return checkingTopRight;

    const checkingRight = checkRight(board, winningNum, [i, j]);
    if (checkingRight.match) return checkingRight;
  }
  if (bottomLeft) {
    const checkingTop = checkTop(board, winningNum, [i, j]);
    if (checkingTop.match) return checkingTop;

    const checkingTopRight = checkTopRight(board, winningNum, [i, j]);
    if (checkingTopRight.match) return checkingTopRight;

    const checkingRight = checkRight(board, winningNum, [i, j]);
    if (checkingRight.match) return checkingRight;
  }
  if (center) {
    const checkingTop = checkTop(board, winningNum, [i, j]);
    if (checkingTop.match) return checkingTop;

    const checkingTopRight = checkTopRight(board, winningNum, [i, j]);
    if (checkingTopRight.match) return checkingTopRight;

    const checkingRight = checkRight(board, winningNum, [i, j]);
    if (checkingRight.match) return checkingRight;

    const checkingBottomRight = checkBottomRight(board, winningNum, [i, j]);
    if (checkingBottomRight.match) return checkingBottomRight;

    const checkingBottom = checkBottom(board, winningNum, [i, j]);
    if (checkingBottom.match) return checkingBottom;

    const checkingBottomLeft = checkBottomLeft(board, winningNum, [i, j]);
    if (checkingBottomLeft.match) return checkingBottomLeft;

    const checkingLeft = checkLeft(board, winningNum, [i, j]);
    if (checkingLeft.match) return checkingLeft;

    const checkingTopLeft = checkTopLeft(board, winningNum, [i, j]);
    if (checkingTopLeft.match) return checkingTopLeft;
  }

  return { match: false, coord: [], winner: 0 };
}

function checkForMatch2(
  winningNum: number,
  board: number[][],
  i: number,
  j: number
) {
  if (board[i][j] === 0) return { match: false, coord: [], winner: 0 };

  const checkingRight = checkRight(board, winningNum, [i, j]);
  if (checkingRight.match) return checkingRight;

  const checkingBottomRight = checkBottomRight(board, winningNum, [i, j]);
  if (checkingBottomRight.match) return checkingBottomRight;

  const checkingBottom = checkBottom(board, winningNum, [i, j]);
  if (checkingBottom.match) return checkingBottom;

  const checkingBottomLeft = checkBottomLeft(board, winningNum, [i, j]);
  if (checkingBottomLeft.match) return checkingBottomLeft;

  const checkingLeft = checkLeft(board, winningNum, [i, j]);
  if (checkingLeft.match) return checkingLeft;

  const checkingTopLeft = checkTopLeft(board, winningNum, [i, j]);
  if (checkingTopLeft.match) return checkingTopLeft;

  const checkingTop = checkTop(board, winningNum, [i, j]);
  if (checkingTop.match) return checkingTop;

  const checkingTopRight = checkTopRight(board, winningNum, [i, j]);
  if (checkingTopRight.match) return checkingTopRight;

  return { match: false, coord: [], winner: 0 };
}

function getWinner(board: number[][]) {
  let winningNum = 4;
  let coord: number[][] = [];
  let winner: number = 0;
  loop1: for (let i = 3; i < board.length - 3; i++) {
    for (let j = 3; j < board[i].length - 3; j++) {
      const checking = checkForMatch2(winningNum, board, i, j);
      if (checking.match) {
        coord = checking.coord;
        winner = checking.winner;
        break loop1;
      }
    }
  }
  return { winner, coord };
}

export default getWinner;
