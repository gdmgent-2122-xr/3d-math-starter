import { Scale } from "."

describe("Scale", () => {
  test("default scale matrix", () => {
    const matrixS = new Scale()
    const arrayS = matrixS.toArray()
    const nestedS = matrixS.toArrayNested()
    expect(arrayS.length).toBe(16)
    expect(arrayS).toStrictEqual([
      ...[1, 0, 0, 0],
      ...[0, 1, 0, 0],
      ...[0, 0, 1, 0],
      ...[0, 0, 0, 1],
    ])
    expect(nestedS).toStrictEqual([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ])
  })
  test("custom scale matrix", () => {
    const matrixS = new Scale(2, 3, 4)
    const arrayS = matrixS.toArray()
    const nestedS = matrixS.toArrayNested()
    expect(arrayS.length).toBe(16)
    expect(arrayS).toStrictEqual([
      ...[2, 0, 0, 0],
      ...[0, 3, 0, 0],
      ...[0, 0, 4, 0],
      ...[0, 0, 0, 1],
    ])
    expect(nestedS).toStrictEqual([
      [2, 0, 0, 0],
      [0, 3, 0, 0],
      [0, 0, 4, 0],
      [0, 0, 0, 1],
    ])
  })
})
