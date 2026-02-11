import { Environment, PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Player from "./player/Player";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(0, 0%, 0%);
`;

const App = () => {
  return (
    <Wrapper>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Environment files="/assets/HDR_blue_nebulae-1.hdr" background />
        <PointerLockControls />
        <Player />
        {/* <ambientLight intensity={0.5} /> */}
        <directionalLight position={[0, 0, 150]} intensity={1} />
        <mesh position={[-40, 0, -50]}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </Wrapper>
  );
};

export default App;
