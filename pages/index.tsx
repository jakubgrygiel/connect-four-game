import HomeMenu from "@/components/home/HomeMenu";
import GameContext from "@/context/game-context";
import { useContext, useEffect } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 48px;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

export default function Home() {
  const { quitGame } = useContext(GameContext);

  useEffect(() => {
    console.log("home is open");
    quitGame();
  }, []);

  return (
    <StyledWrapper>
      <HomeMenu />
    </StyledWrapper>
  );
}
