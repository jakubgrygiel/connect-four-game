import styled, { keyframes } from "styled-components";

const largeImgRed = "/assets/images/counter-red-large.svg";
const largeImgYellow = "/assets/images/counter-yellow-large.svg";
const smallImgRed = "/assets/images/counter-red-small.svg";
const smallImgYellow = "/assets/images/counter-yellow-small.svg";

const drop = (position: { x: number; y: number }) => keyframes`
  from{
    transform: translateY(${position.y * -88}px);
  }
  to{
    transform: translateY(0);
  }
`;

const dropMobile = (position: { x: number; y: number }) => keyframes`
  from{
    transform: translateY(${position.y * -47}px);
  }
  to{
    transform: translateY(0);
  }
`;

const StyledWrapper = styled.div<ICounterProps>`
  position: absolute;
  top: ${({ position }) => position.y * 88 + 18}px;
  left: ${({ position }) => position.x * 88 + 18}px;
  height: 75px;
  width: 70px;
  background-image: url(${({ player }) =>
    player === 1 ? largeImgRed : largeImgYellow});
  background-position: center;
  background-repeat: no-repeat;
  animation: ${({ position }) => drop(position)} 0.5s
    cubic-bezier(0.82, 1.49, 0.53, 0.8);

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    top: ${({ position }) => position.y * 47 - 8}px;
    left: ${({ position }) => position.x * 47 - 1 + 3 * 47}px;

    background-image: url(${({ player }) =>
      player === 1 ? smallImgRed : smallImgYellow});

    animation: ${({ position }) => dropMobile(position)} 0.5s
      cubic-bezier(0.82, 1.49, 0.53, 0.8);
  }
`;

interface ICounterProps {
  player: number;
  position: { x: number; y: number };
}

export default function Counter({ player, position }: ICounterProps) {
  return <StyledWrapper player={player} position={position} />;
}
