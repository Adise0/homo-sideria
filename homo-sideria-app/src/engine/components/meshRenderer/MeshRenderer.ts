import type { Material, Mesh } from "three";
import Component from "../../objects/component/Component";

class MeshRenderer extends Component {
  public material: Material;
  public mesh: Mesh;

  constructor(material: Material, mesh: Mesh) {
    super();
    this.material = material;
    this.mesh = mesh;
  }
}

export default MeshRenderer;
