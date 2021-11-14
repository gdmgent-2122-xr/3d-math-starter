export abstract class Matrix {
  protected _columns: number
  protected _elements: number[]
  protected _rows: number

  /**
   * Constructs a two-by-two matrix.
   * @param {number} rows
   * @param {number} columns
   */
  constructor(rows: number = 2, columns: number = 0) {
    // @todo …
  }

  public get columns(): number {
    // @todo …
  }

  public get rows(): number {
    // @todo …
  }

  /**
   * Returns the matrix as a flat array of numbers.
   * @returns {number[]}
   */
  public toArray(): number[] {
    // @todo …
  }

  /**
   * Returns the matrix as an array of numbers in rows and columns.
   * @returns {number[][]}
   */
  public toArrayNested(): number[][] {
    // @todo …
  }
}
