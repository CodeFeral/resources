export class CollisionDetection {
  private constructor() { }
  // static

  static pointToPoint(ax: number, ay: number, bx: number, by: number): boolean {
    if (ax === bx && ay === by) {
      return true;
    }
    return false;
  }

  static pointToCircle(
    pX: number,
    pY: number,
    cX: number,
    cY: number,
    cR: number,
  ): boolean {
    const xDistance = pX - cX;
    const yDistance = pY - cY;
    const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

    if (distance <= cR) {
      return true;
    }
    return false;
  }

  static circleToCircle(
    aX: number,
    aY: number,
    aR: number,
    bX: number,
    bY: number,
    bR: number,
  ): boolean {
    const xDistance = aX - bX;
    const yDistance = aY - bY;
    const distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

    if (distance <= aR + bR) {
      return true;
    }
    return false;
  }

  static pointToRectangle(
    pX: number,
    pY: number,
    rX: number,
    rY: number,
    rW: number,
    rH: number,
  ): boolean {
    if (pX >= rX && pX <= rX + rW && pY >= rY && pY <= rY + rH) {
      return true;
    }
    return false;
  }

  static rectangleToRectangle(
    aX: number,
    aY: number,
    aW: number,
    aH: number,
    bX: number,
    bY: number,
    bW: number,
    bH: number,
  ): boolean {
    if (aX + aW >= bX && aX <= bX + bW && aY + aH >= bY && aY <= bY + bH) {
      return true;
    }
    return false;
  }

  static circleToRectangle(
    cX: number,
    cY: number,
    cR: number,
    rX: number,
    rY: number,
    rW: number,
    rH: number,
  ): boolean {
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
