import { Matrix2 } from "./Matrix2"
import { Matrix3 } from "./Matrix3"
import { Matrix4 } from "./Matrix4"

/**
 * Adds two given matrices.
 * @param {Matrix2} matrixA First two-by-two matrix.
 * @param {Matrix2} matrixB Second two-by-two matrix.
 * @returns {Matrix2} Two-by-two matrix.
 */
function add(matrixA: Matrix2, matrixB: Matrix2): Matrix2
/**
 * Adds two given matrices.
 * @param {Matrix3} matrixA First three-by-three matrix.
 * @param {Matrix3} matrixB Second three-by-three matrix.
 * @returns {Matrix3} Three-by-three matrix.
 */
function add(matrixA: Matrix3, matrixB: Matrix3): Matrix3
/**
 * Adds two given matrices.
 * @param {Matrix4} matrixA First four-by-four matrix.
 * @param {Matrix4} matrixB Second four-by-four matrix.
 * @returns {Matrix4} Four-by-four matrix.
 */
function add(matrixA: Matrix4, matrixB: Matrix4): Matrix4
function add(matrixA: any, matrixB: any): any {
  // @todo …
}

/**
 * Multiplies two given matrices.
 * @param {Matrix2} matrixA First two-by-two matrix.
 * @param {Matrix2} matrixB Second two-by-two matrix.
 * @returns {Matrix2} Two-by-two matrix.
 */
function multiply(matrixA: Matrix2, matrixB: Matrix2): Matrix2
/**
 * Multiplies two given matrices.
 * @param {Matrix3} matrixA First three-by-three matrix.
 * @param {Matrix3} matrixB Second three-by-three matrix.
 * @returns {Matrix3} Three-by-three matrix.
 */
function multiply(matrixA: Matrix3, matrixB: Matrix3): Matrix3
/**
 * Multiplies two given matrices.
 * @param {Matrix4} matrixA First four-by-four matrix.
 * @param {Matrix4} matrixB Second four-by-four matrix.
 * @returns {Matrix4} Four-by-four matrix.
 */
function multiply(matrixA: Matrix4, matrixB: Matrix4): Matrix4
function multiply(matrixA: any, matrixB: any): any {
  // @todo …
}

/**
 * Subtracts two given matrices.
 * @param {Matrix2} matrixA First two-by-two matrix.
 * @param {Matrix2} matrixB Second two-by-two matrix.
 * @returns {Matrix2} Two-by-two matrix.
 */
function subtract(matrixA: Matrix2, matrixB: Matrix2): Matrix2
/**
 * Subtracts two given matrices.
 * @param {Matrix3} matrixA First three-by-three matrix.
 * @param {Matrix3} matrixB Second three-by-three matrix.
 * @returns {Matrix3} Three-by-three matrix.
 */
function subtract(matrixA: Matrix3, matrixB: Matrix3): Matrix3
/**
 * Subtracts two given matrices.
 * @param {Matrix4} matrixA First four-by-four matrix.
 * @param {Matrix4} matrixB Second four-by-four matrix.
 * @returns {Matrix4} Four-by-four matrix.
 */
function subtract(matrixA: Matrix4, matrixB: Matrix4): Matrix4
function subtract(matrixA: any, matrixB: any): any {
  // @todo …
}

export { add, multiply, subtract }
