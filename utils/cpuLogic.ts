// priority, can be multiplied
// 100 - cpu has 3 counters
// 18 - player has 3 counters
// 6 - player has 2 counters
// 3 - cpu has 2 counters
// 1 - cpu has 1 counter
// 0 - else

// virtual board
// game board i = 3 to 8, j = 3 to 9

function getPossibleCounterLocations(board: number[][]): number[][] {
  let newBoard = JSON.parse(JSON.stringify(board));
  let locations: number[][] = [];
  for (let i = 8; i > 2; i--) {
    for (let j = 3; j < 10; j++) {
      let emptyLocationAlreadyFound = locations.some(
        (location) => location[1] === j
      );

      if (!emptyLocationAlreadyFound && newBoard[i][j] === 0) {
        locations[j - 3] = [i, j];
      }
      if (!emptyLocationAlreadyFound && i === 3 && newBoard[i][j] !== 0) {
        locations[j - 3] = [-1, -1];
      }
    }
  }
  return locations;
}

function getPriorityForEachLocation(board: number[][]) {
  const locations = getPossibleCounterLocations(board);
  let newBoard = JSON.parse(JSON.stringify(board));
  let priorities = locations.map((location) => {
    if (location.toString() === "-1,-1") return -1;
    let scoreArr = [];
    scoreArr.push(getPriority(getRightArr(newBoard, location)));
    scoreArr.push(getPriority(getBottomRightArr(newBoard, location)));
    scoreArr.push(getPriority(getBottomArr(newBoard, location)));
    scoreArr.push(getPriority(getBottomLeftArr(newBoard, location)));
    scoreArr.push(getPriority(getLeftArr(newBoard, location)));
    scoreArr.push(getPriority(getTopLeftArr(newBoard, location)));
    scoreArr.push(getPriority(getTopArr(newBoard, location)));
    scoreArr.push(getPriority(getTopRightArr(newBoard, location)));
    scoreArr.push(
      getPriorityBetween(getVerticalBetweenArr(newBoard, location))
    );
    scoreArr.push(
      getPriorityBetween(getHorizontalBetweenArr(newBoard, location))
    );
    scoreArr.push(getPriorityBetween(getFallingBetweenArr(newBoard, location)));
    scoreArr.push(getPriorityBetween(getRisingBetweenArr(newBoard, location)));
    const scoreSum = scoreArr.reduce((a: number, b: number) => a + b, 0);
    return scoreSum;
  });
  return priorities;
}

function getPriority(counterArr: number[]): number {
  let newCounterArr = [...counterArr];
  if (counterArr[0] === 0) return 0;
  for (let i = 1; i < newCounterArr.length; i++) {
    if (newCounterArr[i] !== newCounterArr[i - 1]) {
      if (i === 1 && newCounterArr[i - 1] === 1) {
        return 0;
      }
      if (i === 1 && newCounterArr[i - 1] === 2) {
        return 1;
      }
      if (i === 2 && newCounterArr[i - 1] === 1) {
        return 6;
      }
      if (i === 2 && newCounterArr[i - 1] === 2) {
        return 3;
      }
    }
    if (i === 2 && counterArr[i] === 1) {
      return 18;
    }
    if (i === 2 && counterArr[i] === 2) {
      return 100;
    }
  }
  return 0;
}

function getPriorityBetween(arr: number[]) {
  if (
    arr.toString() === "0,1,0,1,0" ||
    arr.toString() === "2,1,0,1,0" ||
    arr.toString() === "0,1,0,1,2" ||
    arr.toString() === "2,1,0,1,2"
  )
    return 6;
  if (arr.toString() === "0,1,0,1,1" || arr.toString() === "1,1,0,1,0")
    return 18;
  if (arr.toString() === "1,1,0,1,1") return 24;
  if (
    arr.toString() === "0,2,0,2,0" ||
    arr.toString() === "0,2,0,2,1" ||
    arr.toString() === "1,2,0,2,0" ||
    arr.toString() === "1,2,0,2,1"
  )
    return 6;
  if (
    arr.toString() === "0,2,0,2,2" ||
    arr.toString() === "2,2,0,2,0" ||
    arr.toString() === "1,2,0,2,2" ||
    arr.toString() === "2,2,0,2,1"
  )
    return 100;
  if (arr.toString() === "2,2,0,2,2") return 100;
  return 0;
}

function choosePlacingLocation(prioritiesArr: number[]): number {
  const highest = Math.max(...prioritiesArr);
  const index = prioritiesArr.findIndex((n) => n === highest);
  return index;
}

function getVerticalBetweenArr(board: number[][], position: number[]) {
  let arr = [
    board[position[0] - 2][position[1]],
    board[position[0] - 1][position[1]],
    board[position[0]][position[1]],
    board[position[0] + 1][position[1]],
    board[position[0] + 2][position[1]],
  ];
  return arr;
}

function getHorizontalBetweenArr(board: number[][], position: number[]) {
  let arr = [
    board[position[0]][position[1] - 2],
    board[position[0]][position[1] - 1],
    board[position[0]][position[1]],
    board[position[0]][position[1] + 1],
    board[position[0]][position[1] + 2],
  ];
  return arr;
}

function getFallingBetweenArr(board: number[][], position: number[]) {
  let arr = [
    board[position[0] - 2][position[1]],
    board[position[0] - 1][position[1]],
    board[position[0]][position[1]],
    board[position[0]][position[1] + 1],
    board[position[0]][position[1] + 2],
  ];
  return arr;
}

function getRisingBetweenArr(board: number[][], position: number[]) {
  let arr = [
    board[position[0]][position[1] - 2],
    board[position[0]][position[1] - 1],
    board[position[0]][position[1]],
    board[position[0] + 1][position[1]],
    board[position[0] + 2][position[1]],
  ];
  return arr;
}

function getRightArr(board: number[][], position: number[]) {
  let arr: number[] = [];
  for (let j = 1; j < 4; j++) {
    arr.push(board[position[0]][position[1] + j]);
  }
  return arr;
}

function getLeftArr(board: number[][], position: number[]) {
  let arr: number[] = [];
  for (let j = 1; j < 4; j++) {
    arr.push(board[position[0]][position[1] - j]);
  }
  return arr;
}

function getTopArr(board: number[][], position: number[]) {
  let arr: number[] = [];
  let winningCounters: number[][] = [];
  for (let i = 1; i < 4; i++) {
    arr.push(board[position[0] - i][position[1]]);
  }
  return arr;
}

function getBottomArr(board: number[][], position: number[]) {
  let arr: number[] = [];
  let winningCounters: number[][] = [];
  for (let i = 1; i < 4; i++) {
    arr.push(board[position[0] + i][position[1]]);
  }
  return arr;
}

function getTopRightArr(board: number[][], position: number[]) {
  let arr: number[] = [];
  for (let i = 1; i < 4; i++) {
    arr.push(board[position[0] - i][position[1] + i]);
  }
  return arr;
}

function getBottomRightArr(board: number[][], position: number[]) {
  let arr: number[] = [];
  for (let i = 1; i < 4; i++) {
    arr.push(board[position[0] + i][position[1] + i]);
  }
  return arr;
}

function getBottomLeftArr(board: number[][], position: number[]) {
  let arr: number[] = [];
  for (let i = 1; i < 4; i++) {
    arr.push(board[position[0] + i][position[1] - i]);
  }
  return arr;
}

function getTopLeftArr(board: number[][], position: number[]) {
  let arr: number[] = [];
  for (let i = 1; i < 4; i++) {
    arr.push(board[position[0] - i][position[1] - i]);
  }
  return arr;
}

export {
  getPossibleCounterLocations,
  getPriority,
  getPriorityBetween,
  choosePlacingLocation,
  getPriorityForEachLocation,
};
