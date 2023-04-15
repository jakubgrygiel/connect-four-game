import GameContext from "@/context/game-context";
import { useContext } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from{opacity:0;}
    to{opacity:0.5;}
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 632px;
  padding: 48px 0;
  animation: ${fadeIn} 0.3s linear;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    padding: 24px 0;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    width: 335px;
  }
`;

const Logo = styled.div`
  z-index: -1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    img {
      width: 40px;
    }
  }
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

interface ITopMenuWrapperProps {
  toggleMenu: () => void;
}

export default function TopMenuWrapper({ toggleMenu }: ITopMenuWrapperProps) {
  const { resetGame, stopGame } = useContext(GameContext);

  function handleClickOpenMenu() {
    toggleMenu();
    stopGame();
  }

  function handleResetGame() {
    resetGame();
  }

  return (
    <StyledWrapper>
      <Btn onClick={handleClickOpenMenu}>MENU</Btn>
      <Logo>
        <img src="/assets/images/logo.svg" alt="game logo" />
      </Logo>
      <Btn onClick={handleResetGame}>RESTART</Btn>
    </StyledWrapper>
  );
}
