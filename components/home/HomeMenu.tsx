import Link from "next/link";
import styled, { keyframes } from "styled-components";

const showIn = keyframes`
    from{transform: scale(0);}
    to{transform: scale(1);}
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  width: 480px;
  padding: 70px 40px 60px 40px;
  background-color: ${({ theme }) => theme.colors.purple};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 40px;
  animation: ${showIn} 0.3s cubic-bezier(0.67, 0.36, 0.39, 1.36);
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  a {
    width: 100%;
    text-decoration: none;
  }
`;

const Button: any = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.darkPurple};
    box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.darkPurple};
  }
`;

const StartGameBtn = styled(Button)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.yellow};

  img {
    position: absolute;
    right: 20px;
  }
`;

const RulesBtn = styled(Button)``;

export default function HomeMenu() {
  return (
    <StyledWrapper>
      <img src="/assets/images/logo.svg" alt="game logo" />
      <BtnsWrapper>
        <Link href="/game">
          <StartGameBtn>
            PLAY VS PLAYER{" "}
            <img src="/assets/images/player-vs-player.svg" alt="game logo" />
          </StartGameBtn>
        </Link>
        <Link href="/rules">
          <RulesBtn>GAME RULES</RulesBtn>
        </Link>
      </BtnsWrapper>
    </StyledWrapper>
  );
}
