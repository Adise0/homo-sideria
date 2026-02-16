import { useContext } from "react";
import GameContext from "./GameContext.creator";

const useGame = () => {
  const value = useContext(GameContext);
  return value;
};

export default useGame;
