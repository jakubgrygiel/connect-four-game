import getWinner from "@/utils/gameRules";
import { useState } from "react";
import styled from "styled-components";

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

export default function Board() {
  const [board, setBoard] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);

  let testBoard: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 2, 0, 0, 0],
    [0, 1, 2, 2, 0, 0, 0],
    [1, 1, 1, 1, 2, 2, 2],
  ];

  return (
    <StyledWrapper>
      <BottomLayer></BottomLayer>
      <MiddleLayer></MiddleLayer>
      <TopLayer></TopLayer>
    </StyledWrapper>
  );
}
