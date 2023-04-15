import GameContext from "@/context/game-context";
import { useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  top: -36px;
  width: 100%;
  padding-left: 33px;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding-left: 8px;
  }
`;

const PointerElement = styled.img<IPointer>`
  transform: ${({ position }) => `translateX(${position * 88}px)`};
  transition: transform 0.3s cubic-bezier(0.98, 1.57, 0.78, 0.83);

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    transform: ${({ position }) => `translateX(${position * 47}px)`};
  }
`;

interface IPointer {
  position: number;
}

interface IPointerProps {
  position: number;
}

export default function Pointer({ position }: IPointerProps) {
  const { currentPlayer } = useContext(GameContext);

  return (
    <StyledWrapper>
      <PointerElement
        position={position}
        src={
          currentPlayer === 1
            ? "/assets/images/marker-red.svg"
            : "/assets/images/marker-yellow.svg"
        }
        alt="icon of pointer"
      />
    </StyledWrapper>
  );
}
