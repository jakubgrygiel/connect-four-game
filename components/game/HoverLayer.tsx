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
  const { changeCounterPosition } = useContext(GameContext);

  return (
    <StyledWrapper>
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(0)}
        onClick={() => changeCounterPosition(0)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(1)}
        onClick={() => changeCounterPosition(1)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(2)}
        onClick={() => changeCounterPosition(2)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(3)}
        onClick={() => changeCounterPosition(3)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(4)}
        onClick={() => changeCounterPosition(4)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(5)}
        onClick={() => changeCounterPosition(5)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(6)}
        onClick={() => changeCounterPosition(6)}
      />
    </StyledWrapper>
  );
}
