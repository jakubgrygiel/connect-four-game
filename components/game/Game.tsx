import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Board from "./Board";
import Points from "./Points";

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

const TopWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 632px;
  margin-top: 48px;
  animation: ${fadeIn} 0.3s linear;
`;

const Logo = styled.div`
  z-index: -1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Btn = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border: none;
  border-radius: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  animation: ${showIn} 0.3s cubic-bezier(0.67, 0.36, 0.39, 1.36);
`;

const Turn = styled.div`
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
  background-image: url("/assets/images/turn-background-red.svg");
  background-repeat: no-repeat;
`;

const TurnTitle = styled.h3`
  font-size: 16px;
`;

const Time = styled.p`
  font-size: 56px;
`;

interface IGameProps {
  toggleMenu: () => void;
}

export default function Game({ toggleMenu }: IGameProps) {
  function handleClickOpenMenu() {
    toggleMenu();
  }

  return (
    <StyledWrapper>
      <TopWrapper>
        <Btn onClick={handleClickOpenMenu}>MENU</Btn>
        <Logo>
          <img src="/assets/images/logo.svg" alt="game logo" />
        </Logo>
        <Btn>RESTART</Btn>
      </TopWrapper>
      <BoardWrapper>
        <Points player="1" points={12} />
        <Board />
        <Points player="2" points={23} />
        <Turn>
          <TurnTitle>PLAYER 1’S TURN</TurnTitle>
          <Time>3s</Time>
        </Turn>
      </BoardWrapper>
    </StyledWrapper>
  );
}
