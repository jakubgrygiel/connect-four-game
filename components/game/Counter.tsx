import styled, { keyframes } from "styled-components";

const drop = (position: { x: number; y: number }) => keyframes`
  from{
    transform: translateY(${position.y * -88}px);
  }
  to{
    transform: translateY(0);
  }
`;

const StyledWrapper = styled.img<ICounterProps>`
  position: absolute;
  top: ${({ position }) => position.y * 88 + 18}px;
  left: ${({ position }) => position.x * 88 + 18}px;
  animation: ${({ position }) => drop(position)} 0.3s ease-in-out;
`;

interface ICounterProps {
  player: number;
  position: { x: number; y: number };
}

export default function Counter({ player, position }: ICounterProps) {
  return (
    <StyledWrapper
      src={
        player === 1
          ? "/assets/images/counter-red-large.svg"
          : "/assets/images/counter-yellow-large.svg"
      }
      alt="image of counter"
      player={player}
      position={position}
    />
  );
}
