import getWinner from "@/utils/gameRules";
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

interface IBoardProps {
  player: number;
  changeCurrentPlayer: () => void;
}

export default function Board({ changeCurrentPlayer, player }: IBoardProps) {
  const [hoverColumn, setHoverColumn] = useState<number>(0);
  const [counterPosition, setCounterPosition] = useState<number | undefined>();

  useEffect(() => {
    setCounterPosition(undefined);
  }, [counterPosition]);

  function changeHoveredColumn(col: number) {
    setHoverColumn(col);
  }

  function chooseCounterPosition(col: number) {
    setCounterPosition(col);
  }

  return (
    <StyledWrapper>
      <Pointer position={hoverColumn} />
      <BoardLayer
        counterPosition={counterPosition}
        player={player}
        changeCurrentPlayer={changeCurrentPlayer}
      />
      <HoverLayer
        changeHoveredColumn={changeHoveredColumn}
        chooseCounterPosition={chooseCounterPosition}
      />
    </StyledWrapper>
  );
}
