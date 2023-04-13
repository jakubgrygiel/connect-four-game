import styled from "styled-components";
import Counter from "./Counter";
import { useContext } from "react";
import GameContext from "@/context/game-context";
import CounterWinInfo from "./CounterWinInfo";

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 550px;
  width: 632px;
`;

export default function MiddleBoardLayer() {
  const { board, winningCounters } = useContext(GameContext);

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

  function renderWinningInfo() {
    if (winningCounters) {
      console.log(winningCounters);
      return winningCounters.map((row) => {
        return (
          <CounterWinInfo
            key={`info-${row[1] - 3}-${row[0] - 3}`}
            position={{ x: row[1] - 3, y: row[0] - 3 }}
          />
        );
      });
    }
  }

  return (
    <StyledWrapper>
      {renderCounters()}
      {renderWinningInfo()}
    </StyledWrapper>
  );
}
