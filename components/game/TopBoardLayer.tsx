import styled from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 584px;
  width: 632px;
  background-image: url("/assets/images/board-layer-white-large.svg");
  background-repeat: no-repeat;
`;

export default function TopBoardLayer() {
  return <StyledWrapper></StyledWrapper>;
}
