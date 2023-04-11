import { useEffect, useState } from "react";
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

interface IBoardProps {
  player: number;
  board: number[][];
  counterPosition: number | undefined;
  chooseCounterPosition: (col: number) => void;
  changeCurrentPlayer: () => void;
}

export default function Board({
  changeCurrentPlayer,
  chooseCounterPosition,
  counterPosition,
  board,
  player,
}: IBoardProps) {
  const [hoverColumn, setHoverColumn] = useState<number>(0);

  function changeHoveredColumn(col: number) {
    setHoverColumn(col);
  }

  return (
    <StyledWrapper>
      <Pointer position={hoverColumn} player={player} />
      <BoardLayer
        counterPosition={counterPosition}
        player={player}
        board={board}
        changeCurrentPlayer={changeCurrentPlayer}
      />
      <HoverLayer
        changeHoveredColumn={changeHoveredColumn}
        chooseCounterPosition={chooseCounterPosition}
      />
    </StyledWrapper>
  );
}
