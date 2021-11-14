import { Matrix2 } from "."

describe("Matrix2", () => {
  test("default matrix", () => {
    const matrixM = new Matrix2()
    const arrayM = matrixM.toArray()
    const nestedM = matrixM.toArrayNested()
    expect(arrayM.length).toBe(4)
    expect(arrayM).toStrictEqual([
      ...[0, 0], //
      ...[0, 0],
    ])
    expect(nestedM).toStrictEqual([
      [0, 0],
      [0, 0],
    ])
  })

  test("custom matrix", () => {
    const matrixM = new Matrix2(
      ...[1, 2], //
      ...[3, 4]
    )
    const arrayM = matrixM.toArray()
    const nestedM = matrixM.toArrayNested()
    expect(arrayM.length).toBe(4)
    expect(arrayM).toStrictEqual([
      ...[1, 2], //
      ...[3, 4],
    ])
    expect(nestedM).toStrictEqual([
      [1, 2],
      [3, 4],
    ])
  })

  test("set matrix", () => {
    const matrixM = new Matrix2()
    matrixM.set(
      ...[1, 2], //
      ...[3, 4]
    )
    const arrayM = matrixM.toArray()
    const nestedM = matrixM.toArrayNested()
    expect(arrayM.length).toBe(4)
    expect(arrayM).toStrictEqual([
      ...[1, 2], //
      ...[3, 4],
    ])
    expect(nestedM).toStrictEqual([
      [1, 2],
      [3, 4],
    ])
  })
})
