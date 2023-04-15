import { useContext, useState } from "react";
import styled from "styled-components";
import Pointer from "./Pointer";
import HoverLayer from "./HoverLayer";
import BoardLayer from "./BoardLayers";
import GameContext from "@/context/game-context";

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
  const { boardIsBlocked } = useContext(GameContext);
  const [hoverColumn, setHoverColumn] = useState<number>(0);

  function changeHoveredColumn(col: number) {
    setHoverColumn(col);
  }

  return (
    <StyledWrapper>
      {!boardIsBlocked && <Pointer position={hoverColumn} />}
      <BoardLayer />
      <HoverLayer changeHoveredColumn={changeHoveredColumn} />
    </StyledWrapper>
  );
}
