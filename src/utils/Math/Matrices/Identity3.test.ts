import { Identity3 } from "."

describe("Identity3", () => {
  test("default identity matrix", () => {
    const matrixI = new Identity3()
    const arrayI = matrixI.toArray()
    const nestedI = matrixI.toArrayNested()
    expect(arrayI.length).toBe(9)
    expect(arrayI).toStrictEqual([
      ...[1, 0, 0], //
      ...[0, 1, 0],
      ...[0, 0, 1],
    ])
    expect(nestedI).toStrictEqual([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
  })
})
