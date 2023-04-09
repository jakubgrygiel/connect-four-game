import { useState } from "react";
import styled from "styled-components";
import TopBoardLayer from "./TopBoardLayer";

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

export default function BoardLayer() {
  return (
    <>
      <BottomLayer></BottomLayer>
      <MiddleLayer></MiddleLayer>
      <TopBoardLayer />
    </>
  );
}
