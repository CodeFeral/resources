export class Vector {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  static zero(): Vector {
    return new Vector(0, 0);
  }

  static distance(a: Vector, b: Vector): number {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  set(x: number, y: number): Vector {
    this.x = x;
    this.y = y;
    return this;
  }

  add(vector: Vector): Vector {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  subtract(vector: Vector): Vector {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }

  multiply(scalar: number): Vector {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  divide(scalar: number): Vector {
    if (scalar === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.x /= scalar;
    this.y /= scalar;
    return this;
  }

  normalize(): Vector {
    const magnitude = this.getMagnitude();
    return magnitude === 0 ? this : this.divide(magnitude);
  }

  copy(): Vector {
    return new Vector(this.x, this.y);
  }

  getMagnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  getAngle(): number {
    return Math.atan2(this.y, this.x);
  }

  toString(): string {
    return `[${this.x}, ${this.y}]`;
  }
}
