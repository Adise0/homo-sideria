import type { Object3D } from "three";

interface GameContextValue {
  player: Object3D;
  subscribePlayer: (player: Object3D) => void;
}

export default GameContextValue;
