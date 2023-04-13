import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import Board from "./Board";
import Points from "./Points";
import GameContext from "@/context/game-context";

const fadeIn = keyframes`
    from{opacity:0;}
    to{opacity:0.5;}
`;

const showIn = keyframes`
    from{transform: scale(0);}
    to{transform: scale(1);}
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  animation: ${showIn} 0.3s cubic-bezier(0.67, 0.36, 0.39, 1.36);
`;

const Turn = styled.div<IPlayer>`
  position: absolute;
  bottom: -114px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 165px;
  width: 197px;
  padding-top: 24px;
  color: ${({ theme }) => theme.colors.white};
  background-image: url(${({ player }) =>
    player === 1
      ? "/assets/images/turn-background-red.svg"
      : "/assets/images/turn-background-yellow.svg"});
  background-repeat: no-repeat;
`;

const TurnTitle = styled.h3`
  font-size: 16px;
`;

const Time = styled.p`
  font-size: 56px;
`;
interface IPlayer {
  player: number;
}

export default function BoardWrapper() {
  const { currentPlayer, points } = useContext(GameContext);

  return (
    <StyledWrapper>
      <Points player="1" points={points.player1} />
      <Board />
      <Points player="2" points={points.player2} />
      <Turn player={currentPlayer}>
        <TurnTitle>PLAYER {currentPlayer}’S TURN</TurnTitle>
        <Time>3s</Time>
      </Turn>
    </StyledWrapper>
  );
}
