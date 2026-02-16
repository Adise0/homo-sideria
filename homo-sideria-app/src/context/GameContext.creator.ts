import { createContext } from "react";
import GameContextValue from "./types/GameContextValue";

const GameContext = createContext<GameContextValue>({} as GameContextValue);
GameContext.displayName = "Game context";
export default GameContext;
