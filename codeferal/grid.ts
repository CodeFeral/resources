// wip
// TODO
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
    return x >= 0 && x < this.columns && y >= 0 && y < this.rows;
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
    let output = "";
    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        output += `[${this.data[x][y]}]`;
      }
      output += "\n";
    }
    return output;
  }
}
