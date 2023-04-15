import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Board from "./Board";
import Points from "./Points";
import GameContext from "@/context/game-context";
import TurnWinnerWrapper from "./TurnWinnerWrapper";

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
  width: 100%;
  animation: ${showIn} 0.3s cubic-bezier(0.67, 0.36, 0.39, 1.36);

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: column;
    gap: 32px;
  }
`;

const PointsTabletWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 632px;
  padding: 0 12px;
  @media (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: none;
  }
`;

const PointsDesktopWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    display: none;
  }
`;

export default function BoardWrapper() {
  const { points } = useContext(GameContext);

  return (
    <StyledWrapper>
      <PointsTabletWrapper>
        <Points player={1} points={points.player1} />
        <Points player={2} points={points.player2} />
      </PointsTabletWrapper>
      <PointsDesktopWrapper>
        <Points player={1} points={points.player1} />
      </PointsDesktopWrapper>

      <Board />
      <PointsDesktopWrapper>
        <Points player={2} points={points.player2} />
      </PointsDesktopWrapper>
      <TurnWinnerWrapper />
    </StyledWrapper>
  );
}
