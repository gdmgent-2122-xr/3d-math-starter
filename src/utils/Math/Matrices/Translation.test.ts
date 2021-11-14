import { Translation } from "."

describe("Translation", () => {
  test("default translation matrix", () => {
    const matrixR = new Translation()
    const arrayR = matrixR.toArray()
    const nestedR = matrixR.toArrayNested()
    expect(arrayR.length).toBe(16)
    expect(arrayR).toStrictEqual([
      ...[1, 0, 0, 0], //
      ...[0, 1, 0, 0],
      ...[0, 0, 1, 0],
      ...[0, 0, 0, 1],
    ])
    expect(nestedR).toStrictEqual([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ])
  })
  test("custom translation matrix", () => {
    const matrixR = new Translation(2, 3, 4)
    const arrayR = matrixR.toArray()
    const nestedR = matrixR.toArrayNested()
    expect(arrayR.length).toBe(16)
    expect(arrayR).toStrictEqual([
      ...[1, 0, 0, 2],
      ...[0, 1, 0, 3],
      ...[0, 0, 1, 4],
      ...[0, 0, 0, 1],
    ])
    expect(nestedR).toStrictEqual([
      [1, 0, 0, 2],
      [0, 1, 0, 3],
      [0, 0, 1, 4],
      [0, 0, 0, 1],
    ])
  })
})
