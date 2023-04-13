import styled from "styled-components";
import Counter from "./Counter";

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 550px;
  width: 632px;
`;

interface IMiddleBoardLayerProps {
  board: number[][];
}

export default function MiddleBoardLayer({ board }: IMiddleBoardLayerProps) {
  function renderCounters() {
    return board.map((row, i) => {
      return row.map((col, j) => {
        if (col !== 0) {
          return (
            <Counter
              key={`${j - 3}-${i - 3}`}
              player={col}
              position={{ x: j - 3, y: i - 3 }}
            />
          );
        }
      });
    });
  }

  return <StyledWrapper>{renderCounters()}</StyledWrapper>;
}
