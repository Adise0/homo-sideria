import { Canvas } from "@react-three/fiber";
import Skybox from "./components/Skybox/Skybox";
import styled from "styled-components";
import Sun from "./components/Sun/Sun";
import Player from "./components/Player/Player";

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
        <Player />
        <Skybox />
        <Sun />

        <ambientLight intensity={0.01} />
        <>
          <mesh position={[500, 0, 500]} scale={[10, 10, 10]}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </>
      </Canvas>
    </Wrapper>
  );
};

export default App;
