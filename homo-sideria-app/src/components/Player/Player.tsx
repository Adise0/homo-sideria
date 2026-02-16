import { useEffect, useRef } from "react";
import PlayerController from "../PlayerController/PlayerController";
import useGame from "../../context/useGame";
import { Object3D } from "three";
import { PointerLockControls } from "@react-three/drei";

const Player = () => {
  const { subscribePlayer } = useGame();
  const playerRef = useRef<Object3D>({} as any);

  useEffect(() => subscribePlayer(playerRef.current), [subscribePlayer]);

  return (
    <group ref={playerRef}>
      <PointerLockControls />
      <PlayerController />
    </group>
  );
};

export default Player;
