import GameContext from "@/context/game-context";
import { useContext } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const HoverElement = styled.div``;

interface IHoverLayerProps {
  changeHoveredColumn: (col: number) => void;
}

export default function HoverLayer({ changeHoveredColumn }: IHoverLayerProps) {
  const { changeCounterPosition, boardIsBlocked } = useContext(GameContext);

  return (
    <StyledWrapper>
      <HoverElement
        onMouseEnter={() => !boardIsBlocked && changeHoveredColumn(0)}
        onClick={() => !boardIsBlocked && changeCounterPosition(0)}
      />
      <HoverElement
        onMouseEnter={() => !boardIsBlocked && changeHoveredColumn(1)}
        onClick={() => !boardIsBlocked && changeCounterPosition(1)}
      />
      <HoverElement
        onMouseEnter={() => !boardIsBlocked && changeHoveredColumn(2)}
        onClick={() => !boardIsBlocked && changeCounterPosition(2)}
      />
      <HoverElement
        onMouseEnter={() => !boardIsBlocked && changeHoveredColumn(3)}
        onClick={() => !boardIsBlocked && changeCounterPosition(3)}
      />
      <HoverElement
        onMouseEnter={() => !boardIsBlocked && changeHoveredColumn(4)}
        onClick={() => !boardIsBlocked && changeCounterPosition(4)}
      />
      <HoverElement
        onMouseEnter={() => !boardIsBlocked && changeHoveredColumn(5)}
        onClick={() => !boardIsBlocked && changeCounterPosition(5)}
      />
      <HoverElement
        onMouseEnter={() => !boardIsBlocked && changeHoveredColumn(6)}
        onClick={() => !boardIsBlocked && changeCounterPosition(6)}
      />
    </StyledWrapper>
  );
}
