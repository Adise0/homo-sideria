import { useCallback, useMemo, useState } from "react";
import GameContextValue from "./types/GameContextValue";
import GameContext from "./GameContext.creator";
import { Object3D } from "three";

const GameContextProvider = ({ children }: React.PropsWithChildren) => {
  const [player, setPlayer] = useState<Object3D>({} as Object3D);
  const subscribePlayer = useCallback((player: Object3D) => {
    setPlayer(player);
  }, []);

  const contextValue = useMemo<GameContextValue>(
    () => ({
      player,
      subscribePlayer,
    }),
    [player, subscribePlayer],
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
