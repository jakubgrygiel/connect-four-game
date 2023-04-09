import getWinner from "@/utils/gameRules";
import { useState } from "react";
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
  chooseCounterPosition: (col: number) => void;
}

export default function HoverLayer({
  changeHoveredColumn,
  chooseCounterPosition,
}: IHoverLayerProps) {
  return (
    <StyledWrapper>
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(0)}
        onClick={() => chooseCounterPosition(0)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(1)}
        onClick={() => chooseCounterPosition(1)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(2)}
        onClick={() => chooseCounterPosition(2)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(3)}
        onClick={() => chooseCounterPosition(3)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(4)}
        onClick={() => chooseCounterPosition(4)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(5)}
        onClick={() => chooseCounterPosition(5)}
      />
      <HoverElement
        onMouseEnter={() => changeHoveredColumn(6)}
        onClick={() => chooseCounterPosition(6)}
      />
    </StyledWrapper>
  );
}
