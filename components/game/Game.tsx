import styled from "styled-components";
import TopMenuWrapper from "./TopMenuWrapper";
import BoardWrapper from "./BoardWrapper";

const StyledWrapper = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

interface IGameProps {
  toggleMenu: () => void;
}

export default function Game({ toggleMenu }: IGameProps) {
  return (
    <StyledWrapper>
      <TopMenuWrapper toggleMenu={toggleMenu} />
      <BoardWrapper />
    </StyledWrapper>
  );
}
