import styled from "styled-components";

const StyledWrapper = styled.div<ICounterWinInfoProps>`
  position: absolute;
  top: ${({ position }) => position.y * 88 + 18}px;
  left: ${({ position }) => position.x * 88 + 18}px;
  height: 75px;
  width: 70px;
  background-image: url("/assets/images/winning-counter-large.svg");
  background-position: center;
  background-repeat: no-repeat;
`;

interface ICounterWinInfoProps {
  position: { x: number; y: number };
}

export default function CounterWinInfo({ position }: ICounterWinInfoProps) {
  return <StyledWrapper position={position} />;
}
