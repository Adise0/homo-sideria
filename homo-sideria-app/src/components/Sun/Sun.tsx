import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Sun = () => {
  return (
    <>
      <directionalLight intensity={5} position={[0, 0, -20000]} />
      <>
        <mesh position={[0, 0, -20000]} scale={[1000, 1000, 1000]}>
          <sphereGeometry />
          <meshBasicMaterial color={[10, 6, 2]} />
        </mesh>
      </>
      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={1.0}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </>
  );
};

export default Sun;
