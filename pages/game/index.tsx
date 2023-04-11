import Game from "@/components/game/Game";
import GameMenu from "@/components/game/GameMenu";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from{transform: translateY(200px);}
    to{transform: translateY(0);}
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 0 48px;
  background-color: ${({ theme }) => theme.colors.purple};
  overflow: hidden;
`;

const BottomBanner = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0;
  height: 200px;
  width: 100%;
  border-radius: 60px 60px 0px 0px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  animation: ${slideIn} 0.3s ease-in-out;
`;

export default function GamePage() {
  const [points, setPoints] = useState();
  const [winner, setWinner] = useState();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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
    let newBoard = [
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
    ];
    setBoard(newBoard);
    setCurrentPlayer(1);
  }

  function toggleMenu() {
    setMenuIsOpen((prevState) => !prevState);
  }

  return (
    <StyledWrapper>
      <Game
        board={board}
        resetGame={resetGame}
        toggleMenu={toggleMenu}
        counterPosition={counterPosition}
        chooseCounterPosition={chooseCounterPosition}
        changeCurrentPlayer={changeCurrentPlayer}
        player={currentPlayer}
      />
      <BottomBanner></BottomBanner>
      {menuIsOpen && <GameMenu toggleMenu={toggleMenu} resetGame={resetGame} />}
    </StyledWrapper>
  );
}
