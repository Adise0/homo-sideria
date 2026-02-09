class Vector3 {
  public static Zero: Vector3 = new Vector3(0, 0, 0);

  public x: number = 0;
  public y: number = 0;
  public z: number = 0;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public Add = (other: Vector3) =>
    new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);

  public Substract = (other: Vector3) =>
    new Vector3(this.x - other.x, this.y - other.y, this.z - other.z);

  public Multiply = (other: Vector3) =>
    new Vector3(this.x * other.x, this.y * other.y, this.z * other.z);

  public Divide = (other: Vector3) =>
    new Vector3(this.x / other.x, this.y / other.y, this.z / other.z);

  public static Distance = (a: Vector3, b: Vector3) => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = a.z - b.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };

  public ToArr(): [number, number, number] {
    return [this.x, this.y, this.z];
  }
}

export default Vector3;
