import { Identity4 } from "."

describe("Identity4", () => {
  test("default identity matrix", () => {
    const matrixI = new Identity4()
    const arrayI = matrixI.toArray()
    const nestedI = matrixI.toArrayNested()
    expect(arrayI.length).toBe(16)
    expect(arrayI).toStrictEqual([
      ...[1, 0, 0, 0],
      ...[0, 1, 0, 0],
      ...[0, 0, 1, 0],
      ...[0, 0, 0, 1],
    ])
    expect(nestedI).toStrictEqual([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ])
  })
})
