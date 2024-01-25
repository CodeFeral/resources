// static classes

export class Mathematics {
  private constructor() { }

  static readonly TAU = (Math.PI * 2);
  static readonly HALF_PI = (Math.PI / 2);

  static degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  static radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }
}

export class CollisionDetection {
  private constructor() { }

  static pointToPoint(ax: number, ay: number, bx: number,
    by: number): boolean {
    if (ax === bx && ay === by) {
      return true;
    }
    return false;
  }

  static pointToCircle(pX: number, pY: number, cX: number, cY: number, cR: number): boolean {
    const xDistance = pX - cX;
    const yDistance = pY - cY;
    const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

    if (distance <= cR) {
      return true;
    }
    return false;
  }

  static circleToCircle(aX: number, aY: number, aR: number, bX: number, bY: number, bR: number): boolean {
    const xDistance = aX - bX;
    const yDistance = aY - bY;
    const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

    if (distance <= aR + bR) {
      return true;
    }
    return false;
  }

  static pointToRectangle(pX: number, pY: number, rX: number, rY: number, rW: number, rH: number): boolean {
    if (
      pX >= rX &&
      pX <= rX + rW &&
      pY >= rY &&
      pY <= rY + rH
    ) {
      return true;
    }
    return false;
  }

  static rectangleToRectangle(aX: number, aY: number, aW: number, aH: number, bX: number, bY: number, bW: number, bH: number): boolean {
    if (
      aX + aW >= bX &&
      aX <= bX + bW &&
      aY + aH >= bY &&
      aY <= bY + bH
    ) {
      return true;
    }
    return false;
  }

  static circleToRectangle(cX: number, cY: number, cR: number, rX: number, rY: number, rW: number, rH: number): boolean {
    let xClosestEdge = cX;
    let yClosestEdge = cY;

    if (cX < rX) {
      xClosestEdge = rX;
    } else if (cX > rX + rW) {
      xClosestEdge = rX + rW;
    }

    if (cY < rY) {
      yClosestEdge = rY;
    } else if (cY > rY + rH) {
      yClosestEdge = rY + rH;
    }

    const xDistance = cX - xClosestEdge;
    const yDistance = cY - yClosestEdge;
    const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

    if (distance <= cR) {
      return true;
    }
    return false;
  }

}

// constructor classes

export class Vector {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y
  }

  static zero(): Vector {
    return new Vector(0, 0);
  }

  static distance(a: Vector, b: Vector): number {
    return Math.sqrt(
      Math.pow(a.x - b.x, 2) +
      Math.pow(a.y - b.y, 2)
    );
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
      throw new Error('Cannot divide by zero');
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

export class Grid {
  readonly columns: number;
  readonly rows: number;

  private data: any[][];

  constructor(columns: number = 10, rows: number = 10) {
    this.columns = columns;
    this.rows = rows;

    this.data = [];
    this.reset();
  }

  isValidPosition(x: number, y: number): boolean {
    return (
      x >= 0 &&
      x < this.columns &&
      y >= 0 &&
      y < this.rows
    )
  }

  get(x: number, y: number): any {
    if (this.isValidPosition(x, y)) {
      return this.data[x][y];
    }
    return null;
  }


  set(x: number, y: number, value: any): void {
    if (this.isValidPosition(x, y)) {
      this.data[x][y] = value;
    } else {
      throw new Error(`Invalid position: [${x}, ${y}]`);
    }
  }

  getData(): any[][] {
    return this.data;
  }

  reset(): void {
    this.data = [];
    for (let x = 0; x < this.columns; x++) {
      this.data.push([]);
    }
  }

  toString(): string {
    let output = '';
    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        output += `[${this.data[x][y]}]`;
      }
      output += '\n';
    }
    return output;
  }
}
