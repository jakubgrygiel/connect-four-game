import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 584px;
  width: 632px;
  background-image: url("/assets/images/board-layer-white-large.svg");
  background-repeat: no-repeat;
`;

interface ITopBoardLayerProps {
  counterPosition: number | undefined;
}

export default function TopBoardLayer({
  counterPosition,
}: ITopBoardLayerProps) {
  const [board, setBoard] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);

  useEffect(() => {
    if (typeof counterPosition === "number") {
      addNewCounter();
    }
  }, [counterPosition]);

  useEffect(() => {
    console.log(board);
  }, [board]);

  function addNewCounter() {
    let indexToPutCounter: number | undefined;
    let newBoard = [...board];
    if (newBoard[0][counterPosition!] > 0) return;

    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i][counterPosition!] > 0) {
        indexToPutCounter = i - 1;
        break;
      }
    }
    if (indexToPutCounter) {
      newBoard[indexToPutCounter][counterPosition!] = 1;
      setBoard(newBoard);
    }
    if (!indexToPutCounter) {
      newBoard[newBoard.length - 1][counterPosition!] = 1;
      setBoard(newBoard);
    }
  }

  let testBoard: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 2, 0, 0, 0],
    [0, 1, 2, 2, 0, 0, 0],
    [1, 1, 1, 1, 2, 2, 2],
  ];

  return <StyledWrapper></StyledWrapper>;
}
