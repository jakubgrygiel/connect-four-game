import GameContext from "@/context/game-context";
import { useContext } from "react";
import styled from "styled-components";

const redBg = "/assets/images/turn-background-red.svg";
const yellowBg = "/assets/images/turn-background-yellow.svg";

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
  color: ${({ player, theme }) =>
    player === 1 ? theme.colors.white : theme.colors.black};
  background-image: url(${({ player }) => (player === 1 ? redBg : yellowBg)});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    bottom: -124px;
    height: 150px;
    width: 190px;
  }
`;

const TurnTitle = styled.h3`
  font-size: 16px;
`;

const Time = styled.p`
  font-size: 56px;
`;

const Winner = styled.div`
  position: absolute;
  bottom: -120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 285px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
`;

const WinnerPlayer = styled.p`
  font-size: 20px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    font-size: 16px;
  }
`;

const WinTitle = styled.p`
  font-size: 56px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    font-size: 36px;
  }
`;

const PlayAgainBtn = styled.button`
  cursor: pointer;
  height: 40px;
  padding: 10px 22px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border: none;
  border-radius: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

interface IPlayer {
  player: number;
}

export default function TurnWinnerWrapper() {
  const { currentPlayer, seconds, winner, boardIsBlocked, playAgain } =
    useContext(GameContext);

  function handleClick() {
    playAgain();
  }

  return !boardIsBlocked ? (
    <Turn player={currentPlayer}>
      <TurnTitle>PLAYER {currentPlayer}’S TURN</TurnTitle>
      <Time>{seconds}s</Time>
    </Turn>
  ) : (
    <Winner>
      <WinnerPlayer>PLAYER {winner}</WinnerPlayer>
      <WinTitle>WINS</WinTitle>
      <PlayAgainBtn onClick={handleClick}>PLAY AGAIN</PlayAgainBtn>
    </Winner>
  );
}
