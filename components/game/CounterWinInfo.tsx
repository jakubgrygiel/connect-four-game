import styled, { keyframes } from "styled-components";

const largeImg = "/assets/images/winning-counter-large.svg";
const smallImg = "/assets/images/winning-counter-small.svg";

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
  background-image: url(${largeImg});
  background-position: center;
  background-repeat: no-repeat;
  animation: ${showIn} 0.5s ease-in-out;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    top: ${({ position }) => position.y * 47 - 10}px;
    left: ${({ position }) => position.x * 47 - 1 + 3 * 47}px;

    background-image: url(${smallImg});
  }
`;

interface ICounterWinInfoProps {
  position: { x: number; y: number };
}

export default function CounterWinInfo({ position }: ICounterWinInfoProps) {
  return <StyledWrapper position={position} />;
}
