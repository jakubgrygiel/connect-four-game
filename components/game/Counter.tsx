import styled from "styled-components";

const StyledWrapper = styled.img`
  position: absolute;
`;

export default function Counter() {
  return (
    <StyledWrapper
      src="/assets/images/counter-red-large.svg"
      alt="image of counter"
    />
  );
}
