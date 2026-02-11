import { Canvas } from "@react-three/fiber";
import Skybox from "./components/Skybox/Skybox";
import styled from "styled-components";
import { PointerLockControls } from "@react-three/drei";
import Sun from "./components/Sun/Sun";
import PlayerController from "./components/PlayerController/PlayerController";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(0, 0%, 0%);
`;

const App = () => {
  return (
    <Wrapper>
      <Canvas
        gl={{ logarithmicDepthBuffer: true }}
        camera={{ near: 1, far: 1000000 }}
      >
        <PointerLockControls />
        <PlayerController />
        <Skybox />
        <Sun />

        <ambientLight intensity={0.01} />
        <>
          <mesh position={[0, 0, -10]} scale={[5, 5, 5]}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </>
      </Canvas>
    </Wrapper>
  );
};

export default App;
