export abstract class Vector {
  protected _x: number
  protected _y: number

  /**
   * Constructs a two-dimensional vector.
   * @param {number} x
   * @param {number} y
   */
  constructor(/* … */) {
    // @todo …
  }

  /**
   * Converts vector to any array of numbers.
   * @returns {Array<number>}
   */
  abstract toArray(): Array<number>

  /**
   * Converts vector to an object.
   * @returns {Object}
   */
  abstract toObject(): Object
}
