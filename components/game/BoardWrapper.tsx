import { useContext } from "react";
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
  color: ${({ player, theme }) =>
    player === 1 ? theme.colors.white : theme.colors.black};
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

const Winner = styled.div`
  position: absolute;
  bottom: -114px;
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
`;

const WinTitle = styled.p`
  font-size: 56px;
  text-align: center;
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

export default function BoardWrapper() {
  const { currentPlayer, points, seconds, winner, boardIsBlocked, playAgain } =
    useContext(GameContext);

  function handleClick() {
    playAgain();
  }

  return (
    <StyledWrapper>
      <Points player="1" points={points.player1} />
      <Board />
      <Points player="2" points={points.player2} />
      {!boardIsBlocked && (
        <Turn player={currentPlayer}>
          <TurnTitle>PLAYER {currentPlayer}’S TURN</TurnTitle>
          <Time>{seconds}s</Time>
        </Turn>
      )}
      {boardIsBlocked && (
        <Winner>
          <WinnerPlayer>PLAYER {winner}</WinnerPlayer>
          <WinTitle>WINS</WinTitle>
          <PlayAgainBtn onClick={handleClick}>PLAY AGAIN</PlayAgainBtn>
        </Winner>
      )}
    </StyledWrapper>
  );
}
