import ComponentType from "../../types/ComponentType";
import type GameObject from "../gameObject/GameObject";

abstract class Component {
  public enabled: boolean = true;
  public componentType: ComponentType = ComponentType.Behaviour;
  public gameObject: GameObject | null = null;

  public SetGameObject(gameObject: GameObject | null) {
    this.gameObject = gameObject;
  }
}

export default Component;
