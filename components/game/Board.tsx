import { useState } from "react";
import styled from "styled-components";
import Pointer from "./Pointer";
import HoverLayer from "./HoverLayer";
import BoardLayer from "./BoardLayers";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 594px;
  width: 632px;
  padding: 48px;
`;

export default function Board() {
  const [hoverColumn, setHoverColumn] = useState<number>(0);

  function changeHoveredColumn(col: number) {
    setHoverColumn(col);
  }

  return (
    <StyledWrapper>
      <Pointer position={hoverColumn} />
      <BoardLayer />
      <HoverLayer changeHoveredColumn={changeHoveredColumn} />
    </StyledWrapper>
  );
}
