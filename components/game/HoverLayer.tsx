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
}

export default function HoverLayer({ changeHoveredColumn }: IHoverLayerProps) {
  return (
    <StyledWrapper>
      <HoverElement onMouseEnter={() => changeHoveredColumn(0)} />
      <HoverElement onMouseEnter={() => changeHoveredColumn(1)} />
      <HoverElement onMouseEnter={() => changeHoveredColumn(2)} />
      <HoverElement onMouseEnter={() => changeHoveredColumn(3)} />
      <HoverElement onMouseEnter={() => changeHoveredColumn(4)} />
      <HoverElement onMouseEnter={() => changeHoveredColumn(5)} />
      <HoverElement onMouseEnter={() => changeHoveredColumn(6)} />
    </StyledWrapper>
  );
}
