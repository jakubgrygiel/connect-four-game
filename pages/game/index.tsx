import Game from "@/components/game/Game";
import { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 48px;
  background-color: ${({ theme }) => theme.colors.purple};
`;

const BottomBanner = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0;
  height: 200px;
  width: 100%;
  border-radius: 60px 60px 0px 0px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
`;

export default function GamePage() {
  const [points, setPoints] = useState();
  const [winner, setWinner] = useState();

  return (
    <StyledWrapper>
      <Game />
      <BottomBanner></BottomBanner>
    </StyledWrapper>
  );
}
