import type Component from "../component/Component";
import type Transform from "../transform/Transform";

class GameObject {
  private _enabled: boolean = true;
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
  }

  public SetEnabled(enabled: boolean) {
    this._enabled = enabled;
  }
}

export default GameObject;
