import { Identity2 } from "."

describe("Identity2", () => {
  test("default identity matrix", () => {
    const matrixI = new Identity2()
    const arrayI = matrixI.toArray()
    const nestedI = matrixI.toArrayNested()
    expect(arrayI.length).toBe(4)
    expect(arrayI).toStrictEqual([
      ...[1, 0], //
      ...[0, 1],
    ])
    expect(nestedI).toStrictEqual([
      [1, 0],
      [0, 1],
    ])
  })
})
