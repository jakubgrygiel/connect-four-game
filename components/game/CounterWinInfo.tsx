import styled, { keyframes } from "styled-components";

const showIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const StyledWrapper = styled.div<ICounterWinInfoProps>`
  position: absolute;
  top: ${({ position }) => position.y * 88 + 18}px;
  left: ${({ position }) => position.x * 88 + 18}px;
  height: 75px;
  width: 70px;
  background-image: url("/assets/images/winning-counter-large.svg");
  background-position: center;
  background-repeat: no-repeat;
  animation: ${showIn} 0.5s ease-in-out;
`;

interface ICounterWinInfoProps {
  position: { x: number; y: number };
}

export default function CounterWinInfo({ position }: ICounterWinInfoProps) {
  return <StyledWrapper position={position} />;
}
