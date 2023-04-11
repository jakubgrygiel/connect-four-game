import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 28px;
  padding-top: 46px;
  border: 3px solid #000000;
  box-shadow: 0px 10px 0px #000000;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  img {
    position: absolute;
    top: -24px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  text-align: center;
`;

const Num = styled.p`
  font-size: 56px;
  text-align: center;
`;

interface IPointsProps {
  player: string;
  points: number;
}

export default function Points({ player, points }: IPointsProps) {
  return (
    <StyledWrapper>
      <Title>PLAYER {player}</Title>
      <Num>{points}</Num>
      {player === "1" ? (
        <img src="assets/images/player-one.svg" alt="player 1 icon" />
      ) : (
        <img src="assets/images/player-two.svg" alt="player 2 icon" />
      )}
    </StyledWrapper>
  );
}
