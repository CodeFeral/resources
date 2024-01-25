export class Mathematics {
  private constructor() { }
  // static

  static readonly TAU = Math.PI * 2;
  static readonly HALF_PI = Math.PI / 2;

  static degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  static radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }
}
