import { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 594px;
  width: 632px;
  padding: 48px;
`;

const BottomLayer = styled.div`
  position: absolute;
  top: 0;
  height: 594px;
  width: 632px;
  background-image: url("/assets/images/board-layer-black-large.svg");
  background-repeat: no-repeat;
`;

const MiddleLayer = styled.div`
  position: absolute;
  top: 0;
  height: 550px;
  width: 632px;
`;

const TopLayer = styled.div`
  position: absolute;
  top: 0;
  height: 584px;
  width: 632px;
  background-image: url("/assets/images/board-layer-white-large.svg");
  background-repeat: no-repeat;
`;

export default function Board() {
  const [board, setBoard] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);

  let testBoard: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 2, 0, 0, 0],
    [0, 1, 2, 2, 0, 0, 0],
    [1, 1, 1, 1, 2, 2, 2],
  ];

  function checkRight(
    board: number[][],
    winningNum: number,
    position: number[]
  ) {
    let arr: number[] = [];
    let coord: number[][] = [];
    for (let j = 0; j < winningNum; j++) {
      arr.push(board[position[0]][position[1] + j]);
      coord.push([position[0], position[1] + j]);
    }
    const match = arr.every((el) => el === arr[0]);
    if (match) {
      return { match: true, coord: coord };
    }
    return {
      match: false,
      coord: [],
    };
  }

  function checkLeft(
    board: number[][],
    winningNum: number,
    position: number[]
  ) {
    let arr: number[] = [];
    let coord: number[][] = [];
    for (let j = 0; j < winningNum; j++) {
      arr.push(board[position[0]][position[1] - j]);
      coord.push([position[0], position[1] - j]);
    }
    const match = arr.every((el) => el === arr[0]);
    if (match) {
      return { match: true, coord: coord };
    }
    return {
      match: false,
      coord: [],
    };
  }

  function checkTop(board: number[][], winningNum: number, position: number[]) {
    let arr: number[] = [];
    let coord: number[][] = [];
    for (let i = 0; i < winningNum; i++) {
      arr.push(board[position[0] - i][position[1]]);
      coord.push([position[0] - i, position[1]]);
    }
    const match = arr.every((el) => el === arr[0]);
    if (match) {
      return { match: true, coord: coord };
    }
    return {
      match: false,
      coord: [],
    };
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
    const match = arr.every((el) => el === arr[0]);
    if (match) {
      return { match: true, coord: coord };
    }
    return {
      match: false,
      coord: [],
    };
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
    const match = arr.every((el) => el === arr[0]);
    if (match) {
      return { match: true, coord: coord };
    }
    return {
      match: false,
      coord: [],
    };
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
    const match = arr.every((el) => el === arr[0]);
    if (match) {
      return { match: true, coord: coord };
    }
    return {
      match: false,
      coord: [],
    };
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
    const match = arr.every((el) => el === arr[0]);
    if (match) {
      return { match: true, coord: coord };
    }
    return {
      match: false,
      coord: [],
    };
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
    const match = arr.every((el) => el === arr[0]);
    if (match) {
      return { match: true, coord: coord };
    }
    return {
      match: false,
      coord: [],
    };
  }

  function getWinner(board: number[][], winningNum: number) {
    const start = Date.now();
    let coord: number[][] = [];
    loop1: for (let i = 0; i < board.length; i++) {
      loop2: for (let j = 0; j < board[i].length; j++) {
        if (
          board[i][j] !== 0 &&
          i - (winningNum - 1) <= -1 &&
          j - (winningNum - 1) <= -1 &&
          i + (winningNum - 1) < board.length &&
          j + (winningNum - 1) < board[i].length
        ) {
          console.log("1", i, j);
          const checkingRight = checkRight(board, winningNum, [i, j]);
          if (checkingRight.match) {
            coord = checkingRight.coord;
            break loop1;
          }
          const checkingBottomRight = checkBottomRight(board, winningNum, [
            i,
            j,
          ]);
          if (checkingBottomRight.match) {
            coord = checkingBottomRight.coord;
            break loop1;
          }
          const checkingBottom = checkBottom(board, winningNum, [i, j]);
          if (checkingBottom.match) {
            coord = checkingBottom.coord;
            break loop1;
          }
        }
        if (
          board[i][j] !== 0 &&
          i - (winningNum - 1) <= -1 &&
          j - (winningNum - 1) > -1 &&
          i + (winningNum - 1) < board.length &&
          j + (winningNum - 1) < board[i].length
        ) {
          console.log("2", i, j);
          const checkingRight = checkRight(board, winningNum, [i, j]);
          if (checkingRight.match) {
            coord = checkingRight.coord;
            break loop1;
          }
          const checkingBottomRight = checkBottomRight(board, winningNum, [
            i,
            j,
          ]);
          if (checkingBottomRight.match) {
            coord = checkingBottomRight.coord;
            break loop1;
          }
          const checkingBottom = checkBottom(board, winningNum, [i, j]);
          if (checkingBottom.match) {
            coord = checkingBottom.coord;
            break loop1;
          }
          const checkingBottomLeft = checkBottomLeft(board, winningNum, [i, j]);
          if (checkingBottomLeft.match) {
            coord = checkingBottomLeft.coord;
            break loop1;
          }
          const checkingLeft = checkLeft(board, winningNum, [i, j]);
          if (checkingLeft.match) {
            coord = checkingLeft.coord;
            break loop1;
          }
        }
        if (
          board[i][j] !== 0 &&
          i - (winningNum - 1) <= -1 &&
          j + (winningNum - 1) >= board[i].length &&
          j - (winningNum - 1) > -1 &&
          i + (winningNum - 1) < board.length
        ) {
          console.log("3", i, j);
          const checkingBottom = checkBottom(board, winningNum, [i, j]);
          if (checkingBottom.match) {
            coord = checkingBottom.coord;
            break loop1;
          }
          const checkingBottomLeft = checkBottomLeft(board, winningNum, [i, j]);
          if (checkingBottomLeft.match) {
            coord = checkingBottomLeft.coord;
            break loop1;
          }
          const checkingLeft = checkLeft(board, winningNum, [i, j]);
          if (checkingLeft.match) {
            coord = checkingLeft.coord;
            break loop1;
          }
        }
        if (
          board[i][j] !== 0 &&
          i + (winningNum - 1) >= board.length &&
          j + (winningNum - 1) >= board[i].length &&
          i - (winningNum - 1) > -1 &&
          j - (winningNum - 1) > -1
        ) {
          console.log("4", i, j);
          const checkingLeft = checkLeft(board, winningNum, [i, j]);
          if (checkingLeft.match) {
            coord = checkingLeft.coord;
            break loop1;
          }
          const checkingTopLeft = checkTopLeft(board, winningNum, [i, j]);
          if (checkingTopLeft.match) {
            coord = checkingTopLeft.coord;
            break loop1;
          }
          const checkingTop = checkTop(board, winningNum, [i, j]);
          if (checkingTop.match) {
            coord = checkingTop.coord;
            break loop1;
          }
        }
        if (
          board[i][j] !== 0 &&
          i + (winningNum - 1) >= board.length &&
          i - (winningNum - 1) > -1 &&
          j - (winningNum - 1) > -1 &&
          j + (winningNum - 1) < board[i].length
        ) {
          console.log("5", i, j);
          const checkingLeft = checkLeft(board, winningNum, [i, j]);
          if (checkingLeft.match) {
            coord = checkingLeft.coord;
            break loop1;
          }
          const checkingTopLeft = checkTopLeft(board, winningNum, [i, j]);
          if (checkingTopLeft.match) {
            coord = checkingTopLeft.coord;
            break loop1;
          }
          const checkingTop = checkTop(board, winningNum, [i, j]);
          if (checkingTop.match) {
            coord = checkingTop.coord;
            break loop1;
          }
          const checkingTopRight = checkTopRight(board, winningNum, [i, j]);
          if (checkingTopRight.match) {
            coord = checkingTopRight.coord;
            break loop1;
          }
          const checkingRight = checkRight(board, winningNum, [i, j]);
          if (checkingRight.match) {
            coord = checkingRight.coord;
            break loop1;
          }
        }
        if (
          board[i][j] !== 0 &&
          j - (winningNum - 1) <= -1 &&
          i + (winningNum - 1) >= board.length &&
          i - (winningNum - 1) > -1 &&
          j + (winningNum - 1) < board[i].length
        ) {
          console.log("6", i, j);
          const checkingTop = checkTop(board, winningNum, [i, j]);
          if (checkingTop.match) {
            coord = checkingTop.coord;
            break loop1;
          }
          const checkingTopRight = checkTopRight(board, winningNum, [i, j]);
          if (checkingTopRight.match) {
            coord = checkingTopRight.coord;
            break loop1;
          }
          const checkingRight = checkRight(board, winningNum, [i, j]);
          if (checkingRight.match) {
            coord = checkingRight.coord;
            break loop1;
          }
        }
        if (
          board[i][j] !== 0 &&
          i - (winningNum - 1) > -1 &&
          j - (winningNum - 1) > -1 &&
          i + (winningNum - 1) < board.length &&
          j + (winningNum - 1) < board[i].length
        ) {
          console.log("7", i, j);
          const checkingTop = checkTop(board, winningNum, [i, j]);
          if (checkingTop.match) {
            coord = checkingTop.coord;
            break loop1;
          }
          const checkingTopRight = checkTopRight(board, winningNum, [i, j]);
          if (checkingTopRight.match) {
            coord = checkingTopRight.coord;
            break loop1;
          }
          const checkingRight = checkRight(board, winningNum, [i, j]);
          if (checkingRight.match) {
            coord = checkingRight.coord;
            break loop1;
          }
          const checkingBottomRight = checkBottomRight(board, winningNum, [
            i,
            j,
          ]);
          if (checkingBottomRight.match) {
            coord = checkingBottomRight.coord;
            break loop1;
          }
          const checkingBottom = checkBottom(board, winningNum, [i, j]);
          if (checkingBottom.match) {
            coord = checkingBottom.coord;
            break loop1;
          }
          const checkingBottomLeft = checkBottomLeft(board, winningNum, [i, j]);
          if (checkingBottomLeft.match) {
            coord = checkingBottomLeft.coord;
            break loop1;
          }
          const checkingLeft = checkLeft(board, winningNum, [i, j]);
          if (checkingLeft.match) {
            coord = checkingLeft.coord;
            break loop1;
          }
          const checkingTopLeft = checkTopLeft(board, winningNum, [i, j]);
          if (checkingTopLeft.match) {
            coord = checkingTopLeft.coord;
            break loop1;
          }
        }
      }
    }
    console.log(coord);
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
  }

  getWinner(testBoard, 4);

  return (
    <StyledWrapper>
      <BottomLayer></BottomLayer>
      <MiddleLayer></MiddleLayer>
      <TopLayer></TopLayer>
    </StyledWrapper>
  );
}
