import { Matrix3 } from "."

describe("Matrix3", () => {
  test("default matrix", () => {
    const matrixM = new Matrix3()
    const arrayM = matrixM.toArray()
    const nestedM = matrixM.toArrayNested()
    expect(arrayM.length).toBe(9)
    expect(arrayM).toStrictEqual([
      ...[0, 0, 0], //
      ...[0, 0, 0],
      ...[0, 0, 0],
    ])
    expect(nestedM).toStrictEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  })

  test("custom matrix", () => {
    const matrixM = new Matrix3(
      ...[1, 2, 3], //
      ...[4, 5, 6],
      ...[7, 8, 9]
    )
    const arrayM = matrixM.toArray()
    const nestedM = matrixM.toArrayNested()
    expect(arrayM.length).toBe(9)
    expect(arrayM).toStrictEqual([
      ...[1, 2, 3], //
      ...[4, 5, 6],
      ...[7, 8, 9],
    ])
    expect(nestedM).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  })

  test("set matrix", () => {
    const matrixM = new Matrix3()
    matrixM.set(
      ...[1, 2, 3], //
      ...[4, 5, 6],
      ...[7, 8, 9]
    )
    const arrayM = matrixM.toArray()
    const nestedM = matrixM.toArrayNested()
    expect(arrayM.length).toBe(9)
    expect(arrayM).toStrictEqual([
      ...[1, 2, 3], //
      ...[4, 5, 6],
      ...[7, 8, 9],
    ])
    expect(nestedM).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  })
})
