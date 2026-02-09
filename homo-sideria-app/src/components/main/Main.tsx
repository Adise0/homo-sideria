import { Canvas } from "@react-three/fiber";

const Main = () => {
  return (
    <Canvas>
      <ambientLight />
      <mesh rotation={[0.4, 0.2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default Main;
