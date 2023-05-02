import {
  getPossibleCounterLocations,
  getPriority,
  getPriorityBetween,
  getPriorityForEachLocation,
} from "@/utils/cpuLogic";

const testBoard1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 2, 2, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 2, 1, 1, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

describe("CPU logic", () => {
  test("check if the cpu selects the all placing locations", () => {
    const expected = [
      [-1, -1],
      [7, 4],
      [7, 5],
      [6, 6],
      [6, 7],
      [4, 8],
      [8, 9],
    ];
    expect(getPossibleCounterLocations(testBoard1)).toEqual(
      expect.arrayContaining(expected)
    );
  });
  test("check if priorities are right, [1, 1, 1]", () => {
    expect(getPriority([1, 1, 1])).toBe(18);
  });
  test("check if priorities are right, [0,1,2]", () => {
    expect(getPriority([0, 1, 2])).toBe(0);
  });
  test("check if priorities are right, [1,0,2]", () => {
    expect(getPriority([1, 0, 2])).toBe(0);
  });
  test("check if priorities are right, [2,2,2]", () => {
    expect(getPriority([2, 2, 2])).toBe(100);
  });
  test("check if priorities are right, [2,2,1]", () => {
    expect(getPriority([2, 2, 1])).toBe(3);
  });
  test("check if priorities are right, [1, 0, 0, 2, 2]", () => {
    expect(getPriorityBetween([1, 0, 0, 2, 2])).toBe(0);
  });
  test("check if priorities are right, [1, 2, 0, 2, 2]", () => {
    expect(getPriorityBetween([1, 2, 0, 2, 2])).toBe(100);
  });
  test("check if priorities are right, [1, 1, 0, 2, 2]", () => {
    expect(getPriorityBetween([1, 1, 0, 2, 2])).toBe(0);
  });
  test("check if all given priorities are right", () => {
    const expected = [-1, 8, 4, 4, 4, 18, 1];
    expect(getPriorityForEachLocation(testBoard1)).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
