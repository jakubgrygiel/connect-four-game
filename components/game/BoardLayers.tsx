import styled from "styled-components";
import TopBoardLayer from "./TopBoardLayer";
import MiddleBoardLayer from "./MiddleBoardLayer";

const largeBoard = "/assets/images/board-layer-black-large.svg";
const smallBoard = "/assets/images/board-layer-black-small.svg";

const BottomLayer = styled.div`
  position: absolute;
  top: 0;
  height: 594px;
  width: 632px;
  background-image: url(${largeBoard});
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    height: 320px;
    width: 335px;
    background-image: url(${smallBoard});
  }
`;

export default function BoardLayer() {
  return (
    <>
      <BottomLayer></BottomLayer>
      <MiddleBoardLayer />
      <TopBoardLayer />
    </>
  );
}
