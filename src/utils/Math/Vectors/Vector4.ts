import { Vector } from "./Vector"

interface Vector3Object {
  x: number
  y: number
  z: number
}

interface Vector4Object {
  x: number
  y: number
  z: number
  w: number
}

export class Vector4 extends Vector {
  protected _z: number = 0
  protected _w: number = 0

  /**
   * Constructs a four-dimensional vector.
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} w
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
   * Converts vector to an three-dimensional array.
   * @returns {Array<number>}
   */
  toArray3(): Array<number> {
    // @todo …
  }

  /**
   * Converts vector to an object.
   * @returns {Vector4Object}
   */
  toObject(): Vector4Object {
    // @todo …
  }

  /**
   * Converts vector to a three-dimensional object.
   * @returns {Vector3Object}
   */
  toObject3(): Vector3Object {
    // @todo …
  }
}
