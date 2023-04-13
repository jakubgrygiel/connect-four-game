import getWinner, { initialBoard } from "@/utils/gameRules";
import { createContext, useEffect, useState } from "react";

interface IContext {
  points: { player1: number; player2: number };
  currentPlayer: number;
  counterColPosition: number | undefined;
  board: number[][];
  winningCounters: number[][] | undefined;
  changeCurrentPlayer: () => void;
  changeCounterPosition: (col: number) => void;
  startGame: () => void;
  resetGame: () => void;
}

interface IGameContextProvider {
  children: React.ReactNode;
}

const GameContext = createContext<IContext>({
  points: { player1: 0, player2: 0 },
  currentPlayer: 1,
  counterColPosition: undefined,
  board: [],
  winningCounters: [],
  changeCurrentPlayer: () => {},
  changeCounterPosition: (col: number) => {},
  startGame: () => {},
  resetGame: () => {},
});

export function GameContextProvider({ children }: IGameContextProvider) {
  const [points, setPoints] = useState();
  const [winner, setWinner] = useState<number | undefined>();
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [counterColPosition, setCounterColPosition] = useState<
    number | undefined
  >();
  const [board, setBoard] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [winningCounters, setWinningCounters] = useState<
    number[][] | undefined
  >();

  useEffect(() => {
    if (typeof counterColPosition === "number") {
      addNewCounter();
    }
    setCounterColPosition(undefined);
  }, [counterColPosition]);

  useEffect(() => {
    const { winnerNum, winningCounters } = getWinner(board);
    setWinner(winnerNum);
    setWinningCounters(winningCounters);
  }, [board]);

  function changeCounterPosition(col: number) {
    setCounterColPosition(col);
  }

  function changeCurrentPlayer() {
    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  }

  function addNewCounter() {
    let indexToPutCounter: number | undefined;
    let newBoard = JSON.parse(JSON.stringify(board));
    let newCounterPosition = counterColPosition! + 3;

    if (newBoard[3][newCounterPosition] > 0) return;

    for (let i = 3; i < newBoard.length - 3; i++) {
      if (newBoard[i][newCounterPosition] > 0) {
        indexToPutCounter = i - 1;
        break;
      }
    }
    if (indexToPutCounter !== undefined && indexToPutCounter >= 3) {
      newBoard[indexToPutCounter][newCounterPosition] = currentPlayer;
      setBoard(newBoard);
      changeCurrentPlayer();
    }
    if (!indexToPutCounter) {
      newBoard[newBoard.length - 4][newCounterPosition] = currentPlayer;
      setBoard(newBoard);
      changeCurrentPlayer();
    }
  }

  function startGame() {}

  function resetGame() {
    const cleanBoard = JSON.parse(JSON.stringify(initialBoard));
    setBoard(cleanBoard);
    setCurrentPlayer(1);
  }

  const context: IContext = {
    points: { player1: 0, player2: 0 },
    currentPlayer: currentPlayer,
    counterColPosition: counterColPosition,
    board: board,
    winningCounters: winningCounters,
    changeCurrentPlayer: changeCurrentPlayer,
    changeCounterPosition: changeCounterPosition,
    startGame: startGame,
    resetGame: resetGame,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
}

export default GameContext;
