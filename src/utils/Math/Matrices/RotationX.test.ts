import { RotationX } from "."

describe("RotationX", () => {
  test("default rotation matrix", () => {
    const matrixR = new RotationX()
    const arrayR = matrixR.toArray()
    const nestedR = matrixR.toArrayNested()
    expect(arrayR.length).toBe(16)
    expect(arrayR).toStrictEqual([
      ...[1, 0, 0, 0],
      ...[0, 1, -0, 0],
      ...[0, 0, 1, 0],
      ...[0, 0, 0, 1],
    ])
    expect(nestedR).toStrictEqual([
      [1, 0, 0, 0],
      [0, 1, -0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ])
  })
})
