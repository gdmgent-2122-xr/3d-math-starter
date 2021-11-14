import {
  Identity2,
  Identity3,
  Identity4,
  Matrix2,
  Matrix3,
  Matrix4,
  add,
  multiply,
  subtract,
} from "."

describe("add two matrices", () => {
  describe("two-by-two matrices", () => {
    test("[1,3,5,7] plus [-8,-6,-4,-2] is equal to [-7,-3,1,5]", () => {
      const matrixA = new Matrix2(
        ...[1, 3], //
        ...[5, 7]
      )
      const matrixB = new Matrix2(
        ...[-8, -6], //
        ...[-4, -2]
      )
      const matrixC = add(matrixA, matrixB)
      const arrayC = matrixC.toArray()
      expect(arrayC).toStrictEqual([
        ...[-7, -3], //
        ...[1, 5],
      ])
    })
  })

  describe("three-by-three matrices", () => {
    test("[1,3,5,7,9,11,13,15,17] plus [-8,-6,-4,-2,0,2,4,6] is equal to [-7,-3,1,5,9,13,17,21,25]", () => {
      const matrixA = new Matrix3(
        ...[1, 3, 5], //
        ...[7, 9, 11],
        ...[13, 15, 17]
      )
      const matrixB = new Matrix3(
        ...[-8, -6, -4], //
        ...[-2, 0, 2],
        ...[4, 6, 8]
      )
      const matrixC = add(matrixA, matrixB)
      const arrayC = matrixC.toArray()
      expect(arrayC).toStrictEqual([
        ...[-7, -3, 1], //
        ...[5, 9, 13],
        ...[17, 21, 25],
      ])
    })
  })

  describe("four-by-four matrices", () => {
    test("[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31] plus [-8,-6,-4,-2,0,2,4,6,8,10,12,14,16,18,20,22] is equal to [-7,-3,-1,5,9,13,17,21,25,29,33,37,41,45,49,53]", () => {
      const matrixA = new Matrix4(
        ...[1, 3, 5, 7],
        ...[9, 11, 13, 15],
        ...[17, 19, 21, 23],
        ...[25, 27, 29, 31]
      )
      const matrixB = new Matrix4(
        ...[-8, -6, -4, -2],
        ...[0, 2, 4, 6],
        ...[8, 10, 12, 14],
        ...[16, 18, 20, 22]
      )
      const matrixC = add(matrixA, matrixB)
      const arrayC = matrixC.toArray()
      expect(arrayC).toStrictEqual([
        ...[-7, -3, 1, 5],
        ...[9, 13, 17, 21],
        ...[25, 29, 33, 37],
        ...[41, 45, 49, 53],
      ])
    })
  })
})

describe("multiply two matrices", () => {
  describe("two-by-two matrices", () => {
    test("[1,3,5,7] times I2 remains unchanged", () => {
      const arrayA = [
        ...[1, 3], //
        ...[5, 7], //
      ]
      const matrixA = new Matrix2(...arrayA)
      const matrixI = new Identity2()
      const matrixR = multiply(matrixA, matrixI)
      const arrayR = matrixR.toArray()
      expect(arrayR).toStrictEqual(arrayA)
    })
    test("[1,3,5,7] times [2,4,6,8] equals [20,28,52,76]", () => {
      const matrixA = new Matrix2(
        ...[1, 3], //
        ...[5, 7]
      )
      const matrixB = new Matrix2(
        ...[2, 4], //
        ...[6, 8]
      )
      const matrixR = multiply(matrixA, matrixB)
      const arrayR = matrixR.toArray()
      expect(arrayR).toStrictEqual([
        ...[20, 28], //
        ...[52, 76],
      ])
    })
    test("[2,4,6,8] times [1,3,5,7] equals [22,34,46,74]", () => {
      const matrixA = new Matrix2(
        ...[2, 4], //
        ...[6, 8]
      )
      const matrixB = new Matrix2(
        ...[1, 3], //
        ...[5, 7]
      )
      const matrixR = multiply(matrixA, matrixB)
      const arrayR = matrixR.toArray()
      expect(arrayR).toStrictEqual([
        ...[22, 34], //
        ...[46, 74],
      ])
    })
  })

  describe("three-by-three matrices", () => {
    test("[1,3,5,7,9,11,13,15,17] times I3 remains unchanged", () => {
      const arrayA = [
        ...[1, 3, 5], //
        ...[7, 9, 11],
        ...[13, 15, 17],
      ]
      const matrixA = new Matrix3(...arrayA)
      const matrixI = new Identity3()
      const matrixR = multiply(matrixA, matrixI)
      const arrayR = matrixR.toArray()
      expect(arrayR).toStrictEqual(arrayA)
    })
    test("[1,3,5,7,9,11,13,15,17] times [2,4,6,8,10,12,14,16,18] equals [96,114,132,240,294,348,384,474,564]", () => {
      const matrixA = new Matrix3(
        ...[1, 3, 5], //
        ...[7, 9, 11],
        ...[13, 15, 17]
      )
      const matrixB = new Matrix3(
        ...[2, 4, 6], //
        ...[8, 10, 12],
        ...[14, 16, 18]
      )
      const matrixR = multiply(matrixA, matrixB)
      const arrayR = matrixR.toArray()
      expect(arrayR).toStrictEqual([
        ...[96, 114, 132], //
        ...[240, 294, 348],
        ...[384, 474, 564],
      ])
    })
    test("[2,4,6,8,10,12,14,16,18] times [1,3,5,7,9,11,13,15,17] equals [108,132,156,234,294,354,360,456,552]", () => {
      const matrixA = new Matrix3(
        ...[2, 4, 6], //
        ...[8, 10, 12],
        ...[14, 16, 18]
      )
      const matrixB = new Matrix3(
        ...[1, 3, 5], //
        ...[7, 9, 11],
        ...[13, 15, 17]
      )
      const matrixR = multiply(matrixA, matrixB)
      const arrayR = matrixR.toArray()
      expect(arrayR).toStrictEqual([
        ...[108, 132, 156], //
        ...[234, 294, 354],
        ...[360, 456, 552],
      ])
    })
  })

  describe("four-by-four matrices", () => {
    test("[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31] times I4 remains unchanged]", () => {
      const arrayA = [
        ...[1, 3, 5, 7], //
        ...[9, 11, 13, 15],
        ...[17, 19, 21, 23],
        ...[25, 27, 29, 31],
      ]
      const matrixA = new Matrix4(...arrayA)
      const matrixI = new Identity4()
      const matrixR = multiply(matrixA, matrixI)
      const arrayR = matrixR.toArray()
      expect(arrayR).toStrictEqual(arrayA)
    })
  })
  test("[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31] times [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32] equals [304,336,368,400,752,848,944,1040,1200,1360,1520,1680,1648,1872,2096,2320]", () => {
    const matrixA = new Matrix4(
      ...[1, 3, 5, 7], //
      ...[9, 11, 13, 15],
      ...[17, 19, 21, 23],
      ...[25, 27, 29, 31]
    )
    const matrixB = new Matrix4(
      ...[2, 4, 6, 8], //
      ...[10, 12, 14, 16],
      ...[18, 20, 22, 24],
      ...[26, 28, 30, 32]
    )
    const matrixR = multiply(matrixA, matrixB)
    const arrayR = matrixR.toArray()
    expect(arrayR).toStrictEqual([
      ...[304, 336, 368, 400], //
      ...[752, 848, 944, 1040],
      ...[1200, 1360, 1520, 1680],
      ...[1648, 1872, 2096, 2320],
    ])
  })
  test("[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32] times [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31] equals [340,380,420,460,756,860,964,1068,1172,1340,1508,1676,1588,1820,2052,2284]", () => {
    const matrixA = new Matrix4(
      ...[2, 4, 6, 8], //
      ...[10, 12, 14, 16],
      ...[18, 20, 22, 24],
      ...[26, 28, 30, 32]
    )
    const matrixB = new Matrix4(
      ...[1, 3, 5, 7], //
      ...[9, 11, 13, 15],
      ...[17, 19, 21, 23],
      ...[25, 27, 29, 31]
    )
    const matrixR = multiply(matrixA, matrixB)
    const arrayR = matrixR.toArray()
    expect(arrayR).toStrictEqual([
      ...[340, 380, 420, 460], //
      ...[756, 860, 964, 1068],
      ...[1172, 1340, 1508, 1676],
      ...[1588, 1820, 2052, 2284],
    ])
  })
})

describe("subtract two matrices", () => {
  describe("two-by-two matrices", () => {
    test("[1,3,5,7] minus [8,6,4,2] is equal to [-7,-3,1,5]", () => {
      const matrixA = new Matrix2(
        ...[1, 3], //
        ...[5, 7]
      )
      const matrixB = new Matrix2(
        ...[8, 6], //
        ...[4, 2]
      )
      const matrixC = subtract(matrixA, matrixB)
      const arrayC = matrixC.toArray()
      expect(arrayC).toStrictEqual([
        ...[-7, -3], //
        ...[1, 5],
      ])
    })
  })

  describe("three-by-three matrices", () => {
    test("[1,3,5,7,9,11,13,15,17] minus [8,6,4,2,0,-2,-4,-6] is equal to [-7,-3,1,5,9,13,17,21,25]", () => {
      const matrixA = new Matrix3(
        ...[1, 3, 5], //
        ...[7, 9, 11],
        ...[13, 15, 17]
      )
      const matrixB = new Matrix3(
        ...[8, 6, 4], //
        ...[2, 0, -2],
        ...[-4, -6, -8]
      )
      const matrixC = subtract(matrixA, matrixB)
      const arrayC = matrixC.toArray()
      expect(arrayC).toStrictEqual([
        ...[-7, -3, 1], //
        ...[5, 9, 13],
        ...[17, 21, 25],
      ])
    })
  })

  describe("four-by-four matrices", () => {
    test("[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31] minus [8,6,4,2,0,-2,-4,-6,-8,-10,-12,-14,-16,-18,-20,-22] is equal to [-7,-3,-1,5,9,13,17,21,25,29,33,37,41,45,49,53]", () => {
      const matrixA = new Matrix4(
        ...[1, 3, 5, 7],
        ...[9, 11, 13, 15],
        ...[17, 19, 21, 23],
        ...[25, 27, 29, 31]
      )
      const matrixB = new Matrix4(
        ...[8, 6, 4, 2],
        ...[0, -2, -4, -6],
        ...[-8, -10, -12, -14],
        ...[-16, -18, -20, -22]
      )
      const matrixC = subtract(matrixA, matrixB)
      const arrayC = matrixC.toArray()
      expect(arrayC).toStrictEqual([
        ...[-7, -3, 1, 5],
        ...[9, 13, 17, 21],
        ...[25, 29, 33, 37],
        ...[41, 45, 49, 53],
      ])
    })
  })
})
