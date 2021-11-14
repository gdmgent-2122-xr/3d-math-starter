import { add, areParallel, getMagnitude, getUnitVector, subtract, Vector2, Vector3 } from "."

describe("add two vectors", () => {
  describe("two-dimensional vectors", () => {
    test("[1,3] plus [-8,-6] is equal to [-7,-3]", () => {
      const vectorA = new Vector2(1, 3)
      const vectorB = new Vector2(-8, -6)
      const vectorC = add(vectorA, vectorB)
      const arrayC = vectorC.toArray()
      expect(arrayC).toStrictEqual([-7, -3])
    })
  })

  describe("three-dimensional vectors", () => {
    test("[1,3,5] plus [2,-4,6] is equal to [3,-1,11]", () => {
      const vectorA = new Vector3(1, 3, 5)
      const vectorB = new Vector3(-8, -6, -4)
      const vectorC = add(vectorA, vectorB)
      const arrayC = vectorC.toArray()
      expect(arrayC).toStrictEqual([-7, -3, 1])
    })
  })
})

describe("are two vectors parallel", () => {
  describe("two-dimensional vectors", () => {
    test.todo(
      "[1,1] is parallel to [3,3]" /*, () => {
      const vectorA = new Vector2(1, 1)
      const vectorB = new Vector2(3, 3)
      const parallel = areParallel(vectorA, vectorB)
      expect(parallel).toBe(true)
    }*/
    )

    test.todo(
      "[1,1] is parallel to [-1,-1]" /*, () => {
      const vectorA = new Vector2(1, 1)
      const vectorB = new Vector2(-1, -1)
      const parallel = areParallel(vectorA, vectorB)
      expect(parallel).toBe(true)
    }*/
    )

    test("[1,1] is not parallel to [1,2]", () => {
      const vectorA = new Vector2(1, 1)
      const vectorB = new Vector2(1, 2)
      const parallel = areParallel(vectorA, vectorB)
      expect(parallel).toBe(false)
    })
  })

  describe("three-dimensional vectors", () => {
    test("[1,1,1] is parallel to [3,3,3]", () => {
      const vectorA = new Vector3(1, 1, 1)
      const vectorB = new Vector3(3, 3, 3)
      const parallel = areParallel(vectorA, vectorB)
      expect(parallel).toBe(true)
    })

    test("[1,1,1] is parallel to [-1,-1,-1]", () => {
      const vectorA = new Vector3(1, 1, 1)
      const vectorB = new Vector3(-1, -1, -1)
      const parallel = areParallel(vectorA, vectorB)
      expect(parallel).toBe(true)
    })

    test("[1,1,1] is not parallel to [1,2,3]", () => {
      const vectorA = new Vector3(1, 1, 1)
      const vectorB = new Vector3(1, 2, 3)
      const parallel = areParallel(vectorA, vectorB)
      expect(parallel).toBe(false)
    })
  })
})

describe("are two vectors perpendicular", () => {
  describe("two-dimensional vectors", () => {})

  describe("three-dimensional vectors", () => {})
})

describe("cross product of two vectors", () => {
  describe("two-dimensional vectors", () => {})

  describe("three-dimensional vectors", () => {})
})

describe("dot product of two vectors", () => {
  describe("two-dimensional vectors", () => {})

  describe("three-dimensional vectors", () => {})
})

describe("magnitude of a vector", () => {
  describe("two-dimensional vectors", () => {
    test("magnitude of [1,1] is sqrt(2)", () => {
      const vectorV = new Vector2(1, 1)
      const magnitudeV = getMagnitude(vectorV)
      expect(magnitudeV).toBe(Math.sqrt(2))
    })

    test("magnitude of [2,2] is sqrt(8)", () => {
      const vectorV = new Vector2(2, 2)
      const magnitudeV = getMagnitude(vectorV)
      expect(magnitudeV).toBe(Math.sqrt(8))
    })
  })

  describe("three-dimensional vectors", () => {
    test("magnitude of [1,1,1] is sqrt(3)", () => {
      const vectorV = new Vector3(1, 1, 1)
      const magnitudeV = getMagnitude(vectorV)
      expect(magnitudeV).toBe(Math.sqrt(3))
    })

    test("magnitude of [3,3,3] is sqrt(27)", () => {
      const vectorV = new Vector3(3, 3, 3)
      const magnitudeV = getMagnitude(vectorV)
      expect(magnitudeV).toBe(Math.sqrt(27))
    })
  })
})

describe("scalar multiplication of a vector", () => {
  describe("two-dimensional vectors", () => {})

  describe("three-dimensional vectors", () => {})
})

describe("unit vector of a vector", () => {
  describe("two-dimensional vectors", () => {
    test("unit vector of [0,1] is [0,1]", () => {
      const vectorV = new Vector2(0, 1)
      const vectorU = getUnitVector(vectorV)
      const arrayU = vectorU.toArray()
      expect(arrayU).toStrictEqual([0, 1])
    })

    test("unit vector of [0,2] is [0,1]", () => {
      const vectorV = new Vector2(0, 2)
      const vectorU = getUnitVector(vectorV)
      const arrayU = vectorU.toArray()
      expect(arrayU).toStrictEqual([0, 1])
    })

    test("unit vector of [1,0] is [1,0]", () => {
      const vectorV = new Vector2(1, 0)
      const vectorU = getUnitVector(vectorV)
      const arrayU = vectorU.toArray()
      expect(arrayU).toStrictEqual([1, 0])
    })

    test("unit vector of [2,0] is [1,0]", () => {
      const vectorV = new Vector2(3, 0)
      const vectorU = getUnitVector(vectorV)
      const arrayU = vectorU.toArray()
      expect(arrayU).toStrictEqual([1, 0])
    })

    test("unit vector of [2,0] is [1,0]", () => {
      const vectorV = new Vector2(3, 0)
      const vectorU = getUnitVector(vectorV)
      const arrayU = vectorU.toArray()
      expect(arrayU).toStrictEqual([1, 0])
    })

    test("unit vector of [1,1] is [PI/4,PI/4]", () => {
      const vectorV = new Vector2(1, 1)
      const vectorU = getUnitVector(vectorV)
      const objectU = vectorU.toObject()
      expect(objectU.x).toBeCloseTo(Math.cos(Math.PI / 4), 15)
      expect(objectU.y).toBeCloseTo(Math.sin(Math.PI / 4), 15)
    })

    test("unit vector of [3,3] is [PI/4,PI/4]", () => {
      const vectorV = new Vector2(3, 3)
      const vectorU = getUnitVector(vectorV)
      const objectU = vectorU.toObject()
      expect(objectU.x).toBeCloseTo(Math.cos(Math.PI / 4), 15)
      expect(objectU.y).toBeCloseTo(Math.sin(Math.PI / 4), 15)
    })

    test("unit vector of [-3,-3] is [-PI/4,-PI/4]", () => {
      const vectorV = new Vector2(-3, -3)
      const vectorU = getUnitVector(vectorV)
      const objectU = vectorU.toObject()
      expect(objectU.x).toBeCloseTo(-Math.cos(Math.PI / 4), 15)
      expect(objectU.y).toBeCloseTo(-Math.sin(Math.PI / 4), 15)
    })

    test("unit vector of [2,0] is [1,0]", () => {
      const vectorV = new Vector2(3, 0)
      const vectorU = getUnitVector(vectorV)
      const arrayU = vectorU.toArray()
      expect(arrayU).toStrictEqual([1, 0])
    })
  })

  describe("three-dimensional vectors", () => {
    test("unit vector of [0,1,0] is [0,1,0]", () => {
      const vectorV = new Vector3(0, 1, 0)
      const vectorU = getUnitVector(vectorV)
      const arrayU = vectorU.toArray()
      expect(arrayU).toStrictEqual([0, 1, 0])
    })

    test("unit vector of [0,2,0] is [0,1,0]", () => {
      const vectorV = new Vector3(0, 2, 0)
      const vectorU = getUnitVector(vectorV)
      const arrayU = vectorU.toArray()
      expect(arrayU).toStrictEqual([0, 1, 0])
    })
  })
})

describe("subtract two vectors", () => {
  describe("two-dimensional vectors", () => {
    test("[1,3] minus [8,6] is equal to [7,3]", () => {
      const vectorA = new Vector2(1, 3)
      const vectorB = new Vector2(8, 6)
      const vectorC = subtract(vectorA, vectorB)
      const arrayC = vectorC.toArray()
      expect(arrayC).toStrictEqual([7, 3])
    })
  })

  describe("three-dimensional vectors", () => {
    test("[1,3,5] minus [8,6,4] is equal to [7,3,-1]", () => {
      const vectorA = new Vector3(1, 3, 5)
      const vectorB = new Vector3(8, 6, 4)
      const vectorC = subtract(vectorA, vectorB)
      const arrayC = vectorC.toArray()
      expect(arrayC).toStrictEqual([7, 3, -1])
    })
  })
})
