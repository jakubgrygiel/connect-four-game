import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Board from "./Board";
import Points from "./Points";
import TopMenuWrapper from "./TopMenuWrapper";
import BoardWrapper from "./BoardWrapper";

const fadeIn = keyframes`
    from{opacity:0;}
    to{opacity:0.5;}
`;

const showIn = keyframes`
    from{transform: scale(0);}
    to{transform: scale(1);}
`;

const StyledWrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 54px;
  height: 100%;
  width: 100%;
`;
interface IPlayer {
  player: number;
}
interface IGameProps {
  toggleMenu: () => void;
}

export default function Game({ toggleMenu }: IGameProps) {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [counterPosition, setCounterPosition] = useState<number | undefined>();
  const [board, setBoard] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  useEffect(() => {
    if (typeof counterPosition === "number") {
      addNewCounter();
    }
    setCounterPosition(undefined);
  }, [counterPosition]);

  function chooseCounterPosition(col: number) {
    setCounterPosition(col);
  }

  function addNewCounter() {
    let indexToPutCounter: number | undefined;
    let newBoard = [...board];
    let newCounterPosition = counterPosition! + 3;

    if (newBoard[3][newCounterPosition] > 0) return;

    for (let i = 3; i < newBoard.length - 3; i++) {
      if (newBoard[i][newCounterPosition] > 0) {
        indexToPutCounter = i - 1;
        break;
      }
    }
    if (indexToPutCounter !== undefined && indexToPutCounter >= 3) {
      newBoard[indexToPutCounter][newCounterPosition] = currentPlayer;
      setBoard(newBoard);
      changeCurrentPlayer();
    }
    if (!indexToPutCounter) {
      newBoard[newBoard.length - 4][newCounterPosition] = currentPlayer;
      setBoard(newBoard);
      changeCurrentPlayer();
    }
  }

  function changeCurrentPlayer() {
    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  }

  function resetGame() {
    setBoard([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
    setCurrentPlayer(1);
  }

  return (
    <StyledWrapper>
      <TopMenuWrapper toggleMenu={toggleMenu} resetGame={resetGame} />
      <BoardWrapper
        board={board}
        counterPosition={counterPosition}
        chooseCounterPosition={chooseCounterPosition}
        changeCurrentPlayer={changeCurrentPlayer}
        player={currentPlayer}
      />
    </StyledWrapper>
  );
}
