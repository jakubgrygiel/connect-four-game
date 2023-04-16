import getWinner, { initialBoard, initialTime } from "@/utils/gameRules";
import { createContext, useEffect, useState } from "react";

interface IContext {
  gameIsOn: boolean;
  boardIsBlocked: boolean;
  seconds: number;
  currentPlayer: number;
  winner: number | undefined;
  points: { player1: number; player2: number };
  board: number[][];
  counterColPosition: number | undefined;
  winningCounters: number[][] | undefined;
  changeCurrentPlayer: () => void;
  changeCounterPosition: (col: number) => void;
  startGame: () => void;
  stopGame: () => void;
  playAgain: () => void;
  resetGame: () => void;
  quitGame: () => void;
}

interface IGameContextProvider {
  children: React.ReactNode;
}

const GameContext = createContext<IContext>({
  gameIsOn: true,
  boardIsBlocked: false,
  seconds: 0,
  currentPlayer: 1,
  winner: undefined,
  points: { player1: 0, player2: 0 },
  board: [],
  counterColPosition: undefined,
  winningCounters: [],
  changeCurrentPlayer: () => {},
  changeCounterPosition: (col: number) => {},
  startGame: () => {},
  stopGame: () => {},
  playAgain: () => {},
  resetGame: () => {},
  quitGame: () => {},
});

export function GameContextProvider({ children }: IGameContextProvider) {
  const [boardIsBlocked, setBoardIsBlocked] = useState(false);
  const [gameIsOn, setGameIsOn] = useState(false);
  const [seconds, setSeconds] = useState(initialTime);
  const [points, setPoints] = useState({ player1: 0, player2: 0 });
  const [winner, setWinner] = useState<number | undefined>();
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [counterColPosition, setCounterColPosition] = useState<
    number | undefined
  >();
  const [winningCounters, setWinningCounters] = useState<
    number[][] | undefined
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

  useEffect(() => {
    if (typeof counterColPosition === "number") {
      addNewCounter();
    }
    setCounterColPosition(undefined);
  }, [counterColPosition]);

  useEffect(() => {
    const isFull = checkIfBoardIsFull();
    const { winnerNum, winningCounters } = getWinner(board);
    if (winnerNum) {
      showWinner(winnerNum, winningCounters);
      return;
    }
    if (isFull) {
      resetBoard();
    }
  }, [board]);

  useEffect(() => {
    if (boardIsBlocked) return;
    if (gameIsOn && seconds < 0) {
      currentPlayer === 1 && showWinner(2, undefined);
      currentPlayer === 2 && showWinner(1, undefined);
      return;
    }
    if (gameIsOn && seconds >= 0) {
      const interval = setInterval(
        () => setSeconds((prevState) => prevState - 1),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [gameIsOn, seconds]);

  function checkIfBoardIsFull() {
    let newBoard = JSON.parse(JSON.stringify(board));
    let isFull = true;
    loop1: for (let i = 3; i < newBoard.length - 3; i++) {
      for (let j = 3; j < newBoard[i].length - 3; j++) {
        if (newBoard[i][j] === 0) {
          isFull = false;
          break loop1;
        }
      }
    }
    return isFull;
  }

  function changeCounterPosition(col: number) {
    setCounterColPosition(col);
  }

  function changeCurrentPlayer() {
    setSeconds(initialTime);
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

  function showWinner(
    winnerNum: number | undefined,
    winningCounters: number[][] | undefined
  ) {
    setWinner(winnerNum);
    setWinningCounters(winningCounters);
    stopGame();
    setBoardIsBlocked(true);
    let newPoints = { ...points };
    if (winnerNum === 1) {
      setPoints({ ...newPoints, player1: newPoints.player1 + 1 });
    }
    if (winnerNum === 2) {
      setPoints({ ...newPoints, player2: newPoints.player2 + 1 });
    }
  }

  function resetBoard() {
    const cleanBoard = JSON.parse(JSON.stringify(initialBoard));
    setBoard(cleanBoard);
    setCurrentPlayer(1);
    setSeconds(initialTime);
    setWinner(undefined);
    setWinningCounters(undefined);
    setBoardIsBlocked(false);
  }

  function playAgain() {
    resetBoard();
    setGameIsOn(true);
    setBoardIsBlocked(false);
  }

  function startGame() {
    setGameIsOn(true);
  }

  function stopGame() {
    setGameIsOn(false);
  }

  function resetGame() {
    resetBoard();
    setGameIsOn(true);
    setPoints({ player1: 0, player2: 0 });
  }

  function quitGame() {
    resetBoard();
    setGameIsOn(false);
    setPoints({ player1: 0, player2: 0 });
  }

  const context: IContext = {
    gameIsOn: gameIsOn,
    boardIsBlocked: boardIsBlocked,
    seconds: seconds,
    points: points,
    winner: winner,
    currentPlayer: currentPlayer,
    counterColPosition: counterColPosition,
    board: board,
    winningCounters: winningCounters,
    changeCurrentPlayer: changeCurrentPlayer,
    changeCounterPosition: changeCounterPosition,
    startGame: startGame,
    stopGame: stopGame,
    playAgain: playAgain,
    resetGame: resetGame,
    quitGame: quitGame,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
}

export default GameContext;
