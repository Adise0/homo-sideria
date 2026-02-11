import { Environment } from "@react-three/drei";

const Skybox = () => {
  return <Environment files="/assets/space.hdr" background />;
};

export default Skybox;
