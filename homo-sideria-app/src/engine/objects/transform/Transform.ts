import Vector3 from "../../types/Vector3";

class Transform {
  public position: Vector3 = Vector3.Zero;
  public rotation: Vector3 = Vector3.Zero;
  public scale: Vector3 = Vector3.Zero;

  public children: Transform[] = [];
  public parent: Transform | null = null;

  constructor(parent: Transform | null = null) {
    if (parent) {
      this.position = parent.position;
      this.rotation = parent.rotation;
      this.scale = parent.scale;
    }
  }

  public Translate(translation: Vector3) {
    this.position = this.position.Add(translation);
  }

  public Rotate(rotation: Vector3) {
    this.rotation = this.rotation.Add(rotation);
  }

  public AppendChild(child: Transform) {
    this.children.push(child);
    if (child.parent !== this) {
      child.SetParent(this);
    }
  }

  public SetParent(parent: Transform) {
    this.parent = parent;
    if (parent.children.indexOf(this) === -1) {
      parent.AppendChild(this);
    }
  }
}

export default Transform;
