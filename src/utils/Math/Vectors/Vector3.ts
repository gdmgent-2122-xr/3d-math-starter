import { Vector } from "./Vector"

interface Vector3Object {
  x: number
  y: number
  z: number
}

export class Vector3 extends Vector {
  protected _z: number = 0

  /**
   * Constructs a three-dimensional vector.
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  constructor(/* … */) {
    super(/* … */)
    // @todo …
  }

  /**
   * Converts vector to an array.
   * @returns {Array<number>}
   */
  toArray(): Array<number> {
    // @todo …
  }

  /**
   * Converts vector to an object.
   * @returns {Vector3Object}
   */
  toObject(): Vector3Object {
    // @todo …
  }
}
