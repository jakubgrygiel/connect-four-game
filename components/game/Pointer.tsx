import styled from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  top: -36px;
  width: 100%;
  padding-left: 33px;
`;

const PointerElement = styled.img<IPointer>`
  transform: ${({ position }) => `translateX(${position * 88}px)`};
  transition: transform 0.3s ease-in-out;
`;

interface IPointer {
  position: number;
  player: number;
}

export default function Pointer({ position, player }: IPointer) {
  return (
    <StyledWrapper>
      <PointerElement
        position={position}
        src={
          player === 1
            ? "/assets/images/marker-red.svg"
            : "/assets/images/marker-yellow.svg"
        }
        alt="icon of pointer"
      />
    </StyledWrapper>
  );
}
