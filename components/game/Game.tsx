import styled, { keyframes } from "styled-components";
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

interface IGameProps {
  board: number[][];
  player: number;
  counterPosition: number | undefined;
  toggleMenu: () => void;
  resetGame: () => void;
  chooseCounterPosition: (col: number) => void;
  changeCurrentPlayer: () => void;
}

export default function Game({
  board,
  player,
  counterPosition,
  toggleMenu,
  resetGame,
  chooseCounterPosition,
  changeCurrentPlayer,
}: IGameProps) {
  return (
    <StyledWrapper>
      <TopMenuWrapper toggleMenu={toggleMenu} resetGame={resetGame} />
      <BoardWrapper
        board={board}
        counterPosition={counterPosition}
        chooseCounterPosition={chooseCounterPosition}
        changeCurrentPlayer={changeCurrentPlayer}
        player={player}
      />
    </StyledWrapper>
  );
}
