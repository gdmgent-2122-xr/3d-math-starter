import { Matrix4 } from "."

describe("Matrix4", () => {
  test("default matrix", () => {
    const matrixM = new Matrix4()
    const arrayM = matrixM.toArray()
    const nestedM = matrixM.toArrayNested()
    expect(arrayM.length).toBe(16)
    expect(arrayM).toStrictEqual([
      ...[0, 0, 0, 0], //
      ...[0, 0, 0, 0],
      ...[0, 0, 0, 0],
      ...[0, 0, 0, 0],
    ])
    expect(nestedM).toStrictEqual([
      [0, 0, 0, 0], //
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ])
  })

  test("custom matrix", () => {
    const matrixM = new Matrix4(
      ...[1, 2, 3, 4], //
      ...[5, 6, 7, 8],
      ...[9, 10, 11, 12],
      ...[13, 14, 15, 16]
    )
    const arrayM = matrixM.toArray()
    const nestedM = matrixM.toArrayNested()
    expect(arrayM.length).toBe(16)
    expect(arrayM).toStrictEqual([
      ...[1, 2, 3, 4], //
      ...[5, 6, 7, 8],
      ...[9, 10, 11, 12],
      ...[13, 14, 15, 16],
    ])
    expect(nestedM).toStrictEqual([
      [1, 2, 3, 4], //
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ])
  })

  test("set matrix", () => {
    const matrixM = new Matrix4()
    matrixM.set(
      ...[1, 2, 3, 4], //
      ...[5, 6, 7, 8],
      ...[9, 10, 11, 12],
      ...[13, 14, 15, 16]
    )
    const arrayM = matrixM.toArray()
    const nestedM = matrixM.toArrayNested()
    expect(arrayM.length).toBe(16)
    expect(arrayM).toStrictEqual([
      ...[1, 2, 3, 4], //
      ...[5, 6, 7, 8],
      ...[9, 10, 11, 12],
      ...[13, 14, 15, 16],
    ])
    expect(nestedM).toStrictEqual([
      [1, 2, 3, 4], //
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ])
  })
})
