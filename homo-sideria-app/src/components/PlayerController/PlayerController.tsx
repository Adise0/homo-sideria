import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

const PlayerController = () => {
  const { camera } = useThree();
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

  useFrame((_, dt) => {
    const speed = 10 * dt;

    if (keys["KeyW"]) camera.translateZ(-speed);
    if (keys["KeyS"]) camera.translateZ(speed);
    if (keys["KeyA"]) camera.translateX(-speed);
    if (keys["KeyD"]) camera.translateX(speed);
  });

  useEffect(() => {
    const down = (e: any) => setKeys((k) => ({ ...k, [e.code]: true }));
    const up = (e: any) => setKeys((k) => ({ ...k, [e.code]: false }));

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return <></>;
};

export default PlayerController;
