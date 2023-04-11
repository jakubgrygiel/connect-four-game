import styled from "styled-components";
import TopBoardLayer from "./TopBoardLayer";
import MiddleBoardLayer from "./MiddleBoardLayer";

const BottomLayer = styled.div`
  position: absolute;
  top: 0;
  height: 594px;
  width: 632px;
  background-image: url("/assets/images/board-layer-black-large.svg");
  background-repeat: no-repeat;
`;

interface IBoardLayerProps {
  counterPosition: number | undefined;
  player: number;
  board: number[][];
  changeCurrentPlayer: () => void;
}

export default function BoardLayer({ board }: IBoardLayerProps) {
  return (
    <>
      <BottomLayer></BottomLayer>
      <MiddleBoardLayer board={board} />
      <TopBoardLayer />
    </>
  );
}
