import { Vector2, Vector3 } from "."

const ACCUMULATOR_INITIAL_VALUE = 0

/**
 * Adds two given vectors.
 * @param {Vector2} vectorA First two-dimensional vector.
 * @param {Vector2} vectorB Second two-dimensional vector.
 * @returns {Vector2} Two-dimensional vector.
 */
function add(vectorA: Vector2, vectorB: Vector2): Vector2
/**
 * Adds two given vectors.
 * @param {Vector3} vectorA First three-dimensional vector.
 * @param {Vector3} vectorB Second three-dimensional vector.
 * @returns {Vector3} Three-dimensional vector.
 */
function add(vectorA: Vector3, vectorB: Vector3): Vector3
function add(vectorA: any, vectorB: any): any {
  // @todo …
}

/**
 * Calculates if the given vectors are parallel.
 * @param {Vector2} vectorA First two-dimensional vector.
 * @param {Vector2} vectorB Second two-dimensional vector.
 * @returns {boolean} Are the vectors parallel.
 */
function areParallel(vectorA: Vector2, vectorB: Vector2): boolean
/**
 * Calculates if the given vectors are parallel.
 * @param {Vector3} vectorA First three-dimensional vector.
 * @param {Vector3} vectorB Second three-dimensional vector.
 * @returns {boolean} Are the vectors parallel.
 */
function areParallel(vectorA: Vector3, vectorB: Vector3): boolean
function areParallel(vectorA: any, vectorB: any): any {
  // @todo …
}

/**
 * Calculates if the given vectors are perpendicular.
 * @param {Vector2} vectorA First two-dimensional vector.
 * @param {Vector2} vectorB Second two-dimensional vector.
 * @returns {boolean} Are the vectors perpendicular.
 */
function arePerpendicular(vectorA: Vector2, vectorB: Vector2): boolean
/**
 * Calculates if the given vectors are perpendicular.
 * @param {Vector3} vectorA First three-dimensional vector.
 * @param {Vector3} vectorB Second three-dimensional vector.
 * @returns {boolean} Are the vectors perpendicular.
 */
function arePerpendicular(vectorA: Vector3, vectorB: Vector3): boolean
function arePerpendicular(vectorA: any, vectorB: any): boolean {
  // @todo …
}

/**
 * Calculates the dot product of two given vectors.
 * @param {Vector2} vectorA First two-dimensional vector.
 * @param {Vector2} vectorB Second two-dimensional vector.
 * @returns {Vector3} Three-dimensional vector.
 */
function getCrossProduct(vectorA: Vector2, vectorB: Vector2): Vector3
/**
 * Calculates the dot product of two given vectors.
 * @param {Vector3} vectorA First three-dimensional vector.
 * @param {Vector3} vectorB Second three-dimensional vector.
 * @returns {Vector3} Three-dimensional vector.
 */
function getCrossProduct(vectorA: Vector3, vectorB: Vector3): Vector3
function getCrossProduct(vectorA: any, vectorB: any): any {
  // @todo …
}

/**
 *
 * @param vectorA
 * @param vectorB
 * @returns {number}
 */
function getDotProduct(vectorA: Vector2, vectorB: Vector2): number
/**
 *
 * @param {Vector3} vectorA
 * @param {Vector3} vectorB
 * @returns {number}
 */
function getDotProduct(vectorA: Vector3, vectorB: Vector3): number
function getDotProduct(vectorA: any, vectorB: any): any {
  // @todo …
}

/**
 * Calculates the magnitude of a given vector.
 * @param {Vector2} vector Two-dimensional vector.
 * @returns {number} Magnitude of the vector.
 */
function getMagnitude(vector: Vector2): number
/**
 * Calculates the magnitude of a given vector.
 * @param {Vector3} vector Three-dimensional vector.
 * @returns {number} Magnitude of the vector.
 */
function getMagnitude(vector: Vector3): number
function getMagnitude(vector: any): any {
  /* … */
}

/**
 * Multiplies a given vector by a scalar.
 * @param {number} scalar Scalar value.
 * @param {Vector2} vector Two-dimensional vector.
 * @returns {Vector2} Two-dimensional vector.
 */
function getScalarMultiplication(scalar: number, vector: Vector2): Vector2
/**
 * Multiplies a given vector by a scalar.
 * @param {number} scalar Scalar value.
 * @param {Vector3} vector Three-dimensional vector.
 * @returns {Vector3} Three-dimensional vector.
 */
function getScalarMultiplication(scalar: number, vector: Vector3): Vector3
function getScalarMultiplication(scalar: number, vector: any): any {
  // @todo …
}

/**
 * Calculates unit vector for a given vector.
 * @param {Vector2} vector Given two-dimensional vector.
 * @returns {Vector2} Two-dimensional unit vector.
 */
function getUnitVector(vector: Vector2): Vector2
/**
 * Calculates unit vector for a given vector.
 * @param {Vector3} vector Given three-dimensional vector.
 * @returns {Vector3} Three-dimensional unit vector.
 */
function getUnitVector(vector: Vector3): Vector3
function getUnitVector(vector: any): Vector2 | Vector3 {
  // @todo …
}

/**
 * Subtracts two given vectors.
 * @param {Vector2} vectorA First two-dimensional vector.
 * @param {Vector2} vectorB Second two-dimensional vector.
 * @returns {Vector2} Two-dimensional vector.
 */
function subtract(vectorA: Vector2, vectorB: Vector2): Vector2
/**
 * Subtracts two given vectors.
 * @param {Vector3} vectorA First three-dimensional vector.
 * @param {Vector3} vectorB Second three-dimensional vector.
 * @returns {Vector3} Three-dimensional vector.
 */
function subtract(vectorA: Vector3, vectorB: Vector3): Vector3
function subtract(vectorA: any, vectorB: any): any {
  // @todo …
}

export {
  add,
  areParallel,
  arePerpendicular,
  getCrossProduct,
  getDotProduct,
  getMagnitude,
  getScalarMultiplication,
  getUnitVector,
  subtract,
}
