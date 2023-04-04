import Game from "@/components/game/Game";
import GameMenu from "@/components/game/GameMenu";
import { useState } from "react";
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

  function toggleMenu() {
    setMenuIsOpen((prevState) => !prevState);
  }

  return (
    <StyledWrapper>
      <Game toggleMenu={toggleMenu} />
      <BottomBanner></BottomBanner>
      {menuIsOpen && <GameMenu toggleMenu={toggleMenu} />}
    </StyledWrapper>
  );
}
