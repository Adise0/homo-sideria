import type MeshRenderer from "../../components/meshRenderer/MeshRenderer";
import ComponentType from "../../types/ComponentType";
import type Component from "../component/Component";
import type Transform from "../transform/Transform";

class GameObject {
  private _enabled: boolean = true;
  public static allComponents: Component[] = [];

  public get enabled(): boolean {
    return this._enabled;
  }
  public readonly transform: Transform;

  public components: Component[] = [];

  constructor(transform: Transform) {
    this.transform = transform;
  }

  public AddComponent<ComponentType extends Component>(
    component: ComponentType,
  ) {
    this.components.push(component);
    GameObject.allComponents.push(component);
  }

  public SetEnabled(enabled: boolean) {
    this._enabled = enabled;
  }

  public static GetRenderers(): MeshRenderer[] {
    return this.allComponents.filter(
      (c) => c.componentType == ComponentType.Renderer,
    ) as MeshRenderer[];
  }
}

export default GameObject;
