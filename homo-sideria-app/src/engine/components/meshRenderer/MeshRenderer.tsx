import { BufferGeometry, Material, Mesh, Object3D } from "three";
import Component from "../../objects/component/Component";
import ComponentType from "../../types/ComponentType";

class MeshRenderer extends Component {
  public mesh: Mesh;
  public componentType: ComponentType = ComponentType.Renderer;

  constructor(material: Material, geometry: BufferGeometry) {
    super();
    this.mesh = new Mesh(geometry, material);
    this.mesh.frustumCulled = true;
  }

  public getObject3D(): Object3D {
    return this.mesh;
  }

  public applyTransform() {
    const t = this.gameObject!.transform;
    this.mesh.position.set(t.position.x, t.position.y, t.position.z);
    this.mesh.rotation.set(t.rotation.x, t.rotation.y, t.rotation.z);
    this.mesh.scale.set(t.scale.x, t.scale.y, t.scale.z);
  }
}

export default MeshRenderer;
