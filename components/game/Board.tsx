import getWinner from "@/utils/gameRules";
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

const BottomLayer = styled.div`
  position: absolute;
  top: 0;
  height: 594px;
  width: 632px;
  background-image: url("/assets/images/board-layer-black-large.svg");
  background-repeat: no-repeat;
`;

const MiddleLayer = styled.div`
  position: absolute;
  top: 0;
  height: 550px;
  width: 632px;
`;

const TopLayer = styled.div`
  position: absolute;
  top: 0;
  height: 584px;
  width: 632px;
  background-image: url("/assets/images/board-layer-white-large.svg");
  background-repeat: no-repeat;
`;

interface IPosition {
  position: number;
}

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
