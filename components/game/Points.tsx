import GameContext from "@/context/game-context";
import { useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div<IPlayer>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-width: 150px;
  padding: 28px;
  padding-top: 46px;
  border: 3px solid #000000;
  box-shadow: 0px 10px 0px #000000;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    padding: 16px 42px;
    gap: 24px;
    flex-direction: ${({ player }) => (player === 1 ? "row" : "row-reverse")};
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    flex-direction: column;
    gap: 10px;
    padding: 10px 35px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 16px;
  }
`;

const Num = styled.p`
  font-size: 56px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 32px;
  }
`;

const Img = styled.img<IPlayer>`
  position: absolute;
  top: -24px;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    top: calc(50% - 24px);
    left: ${({ player }) => (player === 1 ? "-24px" : "auto")};
    right: ${({ player }) => (player === 2 ? "-24px" : "auto")};
    flex-direction: ${({ player }) => (player === 1 ? "row" : "row-reverse")};
  }
`;

interface IPlayer {
  player: number;
}

interface IPointsProps {
  player: number;
  points: number;
}

export default function Points({ player, points }: IPointsProps) {
  const { cpu } = useContext(GameContext);

  return (
    <StyledWrapper player={player}>
      <Title>{player === 2 && cpu ? "CPU" : `PLAYER ${player}`}</Title>
      <Num>{points}</Num>
      {player === 1 ? (
        <Img
          src="assets/images/player-one.svg"
          alt="player 1 icon"
          player={1}
        />
      ) : cpu ? (
        <Img src="assets/images/cpu.svg" alt="cpu player icon" player={2} />
      ) : (
        <Img
          src="assets/images/player-two.svg"
          alt="player 2 icon"
          player={2}
        />
      )}
    </StyledWrapper>
  );
}
