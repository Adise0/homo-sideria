import { useGLTF } from "@react-three/drei";

const Spaceship = (props: any) => {
  const { scene } = useGLTF("/models/Spaceship.gltf");

  return <primitive object={scene} {...props} />;
};

export default Spaceship;
