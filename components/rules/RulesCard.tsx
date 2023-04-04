import Link from "next/link";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 480px;
  padding: 34px;
  padding-bottom: 54px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 40px;
`;

const CheckIcon = styled.div`
  position: absolute;
  bottom: -40px;

  svg {
    g {
      g {
        circle {
          transition: fill 0.3s ease-in-out;
        }
      }
    }
  }

  &:hover {
    svg {
      g {
        g {
          circle:nth-child(1) {
            fill: ${({ theme }) => theme.colors.darkPurple};
          }
          circle:nth-child(2) {
            fill: ${({ theme }) => theme.colors.darkPurple};
          }
        }
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 56px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.purple};
`;

const Paragraph = styled.p`
  opacity: 0.66;
`;

const Rules = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
`;

const RulesList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
`;

const Rule = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 18px;
  list-style: none;

  span:nth-child(1) {
  }

  span:nth-child(2) {
    opacity: 0.66;
  }
`;

export default function RulesCard() {
  return (
    <StyledWrapper>
      <Title>RULES</Title>
      <Rules>
        <Subtitle>OBJECTIVE</Subtitle>
        <Paragraph>
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </Paragraph>
        <Subtitle>HOW TO PLAY</Subtitle>
        <RulesList>
          <Rule>
            <span>1</span>
            <span>Red goes first in the first game.</span>
          </Rule>
          <Rule>
            <span>2</span>
            <span>
              Players must alternate turns, and only one disc can be dropped in
              each turn.{" "}
            </span>
          </Rule>
          <Rule>
            <span>3</span>
            <span>
              The game ends when there is a 4-in-a-row or a stalemate.
            </span>
          </Rule>
          <Rule>
            <span>4</span>
            <span>
              The starter of the previous game goes second on the next game.
            </span>
          </Rule>
        </RulesList>
      </Rules>
      <CheckIcon>
        <Link href="/">
          <svg
            width="70px"
            height="75px"
            viewBox="0 0 70 75"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>icon-check</title>
            <g
              id="Designs"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="icon-check">
                <circle
                  id="Oval-Copy-37"
                  fill="#000000"
                  cx="35"
                  cy="35"
                  r="35"
                ></circle>
                <circle
                  id="Oval-Copy-38"
                  fill="#000000"
                  cx="35"
                  cy="40"
                  r="35"
                ></circle>
                <circle
                  id="Oval-Copy-39"
                  fill="#FD6687"
                  cx="35"
                  cy="35"
                  r="32"
                ></circle>
                <polyline
                  id="Path"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  points="20 34.5819497 30.2640104 44.84596 50.1099704 25"
                ></polyline>
              </g>
            </g>
          </svg>
        </Link>
      </CheckIcon>
    </StyledWrapper>
  );
}