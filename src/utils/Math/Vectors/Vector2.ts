import { Vector } from "./Vector"

interface Vector2Object {
  x: number
  y: number
}

export class Vector2 extends Vector {
  /**
   * Constructs a two-dimensional vector.
   * @param {number} x
   * @param {number} y
   */
  constructor(/* … */) {
    super(/* … */)
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
  toObject(): Vector2Object {
    // @todo …
  }
}
