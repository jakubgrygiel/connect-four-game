import styled from "styled-components";

const largeBoard = "/assets/images/board-layer-white-large.svg";
const smallBoard = "/assets/images/board-layer-white-small.svg";

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 584px;
  width: 632px;
  background-image: url(${largeBoard});
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    height: 310px;
    width: 335px;
    background-image: url(${smallBoard});
  }
`;

export default function TopBoardLayer() {
  return <StyledWrapper></StyledWrapper>;
}
