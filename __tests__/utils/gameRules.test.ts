import getWinner, { getMatch } from "@/utils/gameRules";

const winningBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 2, 1, 1, 1, 2, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 2, 1, 2, 1, 2, 0, 0, 0],
  [0, 0, 0, 1, 2, 1, 1, 1, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const loosingBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 1, 2, 1, 2, 1, 2, 0, 0, 0],
  [0, 0, 0, 1, 2, 1, 2, 1, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

describe("Game Rules", () => {
  test("getMatch return true for [1,1,1,1]", () => {
    expect(getMatch([1, 1, 1, 1])).toBe(true);
  });
  test("getMatch return false for [1,0,1,1]", () => {
    expect(getMatch([1, 0, 1, 1])).toBe(false);
  });
  test("getWinner return looser info for loosing board", () => {
    expect(getWinner(loosingBoard)).toEqual({
      winnerNum: 0,
      winningCounters: [],
    });
  });
  test("getWinner return winner data for winning board", () => {
    expect(getWinner(winningBoard)).toEqual({
      winnerNum: 1,
      winningCounters: [
        [5, 6],
        [6, 7],
        [7, 8],
        [8, 9],
      ],
    });
  });
});
