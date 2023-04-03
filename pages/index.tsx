import HomeMenu from "@/components/home/HomeMenu";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 48px;
`;

export default function Home() {
  return (
    <StyledWrapper>
      <HomeMenu />
    </StyledWrapper>
  );
}
