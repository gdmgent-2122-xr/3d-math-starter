import { Vector2 } from "."

describe("Vector2", () => {
  test("default vector", () => {
    const vectorV = new Vector2()
    const arrayV = vectorV.toArray()
    const objectV = vectorV.toObject()
    expect(arrayV.length).toBe(2)
    expect(arrayV).toStrictEqual([0, 0])
    expect(objectV).toStrictEqual({ x: 0, y: 0 })
  })

  test("custom vector", () => {
    const vectorV = new Vector2(1, 2)
    const arrayV = vectorV.toArray()
    const objectV = vectorV.toObject()
    expect(arrayV.length).toBe(2)
    expect(arrayV).toStrictEqual([1, 2])
    expect(objectV).toStrictEqual({ x: 1, y: 2 })
  })
})
