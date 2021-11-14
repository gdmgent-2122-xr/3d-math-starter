import { Vector3 } from "."

describe("Vector3", () => {
  test("default vector", () => {
    const vectorV = new Vector3()
    const arrayV = vectorV.toArray()
    const objectV = vectorV.toObject()
    expect(arrayV.length).toBe(3)
    expect(arrayV).toStrictEqual([0, 0, 0])
    expect(objectV).toStrictEqual({ x: 0, y: 0, z: 0 })
  })

  test("custom vector", () => {
    const vectorV = new Vector3(1, 2, 3)
    const arrayV = vectorV.toArray()
    const objectV = vectorV.toObject()
    expect(arrayV.length).toBe(3)
    expect(arrayV).toStrictEqual([1, 2, 3])
    expect(objectV).toStrictEqual({ x: 1, y: 2, z: 3 })
  })
})
