import { createContext } from "react";

const GameContext = createContext(null);

export function GameContextProvider({ children }) {
  const context = {};

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
}

export default GameContext;
