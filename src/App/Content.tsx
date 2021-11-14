import { MathUtils } from "three"
import React, { useEffect, useRef } from "react"
import { Html, Line, Sphere } from "@react-three/drei"
import { useControls } from "leva"

import {
  Scale,
  Translation,
  RotationX,
  RotationY,
  RotationZ,
  Matrix4,
  multiply,
} from "../utils/Math/Matrices"

const Content = () => {
  const { axesHelper, gridHelper } = useControls("Helpers", {
    axesHelper: { label: "Axes", value: true },
    gridHelper: { label: "Grid", value: false },
  })
  const { aPoint, bPoint, cPoint } = useControls("Points", {
    aPoint: { label: "Point A", max: 10, min: -10, step: 0.1, value: { x: 1, y: 1, z: 1 } },
    bPoint: { label: "Point B", max: 10, min: -10, step: 0.1, value: { x: 2, y: 2, z: 2 } },
    cPoint: { label: "Point C", max: 10, min: -10, step: 0.1, value: { x: 1, y: 1, z: 2 } },
  })
  const { rotation, scale, translation } = useControls("Transformations", {
    rotation: { label: "Rotation", max: 360, min: -360, step: 10, value: { γ: 0, β: 0, α: 0 } },
    scale: { label: "Scale", value: 1 },
    translation: {
      label: "Translation",
      max: 10,
      min: -10,
      step: 0.1,
      value: { x: 0, y: 0, z: 0 },
    },
  })

  const aPrimePointRef = useRef()
  const bPrimePointRef = useRef()
  const cPrimePointRef = useRef()

  const rotationXMatrix = new RotationX()
  const rotationYMatrix = new RotationY()
  const rotationZMatrix = new RotationZ()
  const scaleMatrix = new Scale()
  const translationMatrix = new Translation()

  const aVectorMatrix = new Matrix4(
    ...[aPoint.x, 0, 0, 0],
    ...[aPoint.y, 0, 0, 0],
    ...[aPoint.z, 0, 0, 0],
    ...[1, 0, 0, 0]
  )
  const bVectorMatrix = new Matrix4(
    ...[bPoint.x, 0, 0, 0],
    ...[bPoint.y, 0, 0, 0],
    ...[bPoint.z, 0, 0, 0],
    ...[1, 0, 0, 0]
  )
  const cVectorMatrix = new Matrix4(
    ...[cPoint.x, 0, 0, 0],
    ...[cPoint.y, 0, 0, 0],
    ...[cPoint.z, 0, 0, 0],
    ...[1, 0, 0, 0]
  )
  const aPrimeVectorMatrix = new Matrix4()
  const bPrimeVectorMatrix = new Matrix4()
  const cPrimeVectorMatrix = new Matrix4()

  useEffect(() => {
    scaleMatrix.setUniform(scale)
    rotationXMatrix.set(MathUtils.degToRad(rotation.γ))
    rotationYMatrix.set(MathUtils.degToRad(rotation.β))
    rotationZMatrix.set(MathUtils.degToRad(rotation.α))
    translationMatrix.set(translation.x, translation.y, translation.z)
    const rotationMatrix = multiply(rotationXMatrix, multiply(rotationYMatrix, rotationZMatrix))
    const transformationMatrix = multiply(scaleMatrix, multiply(rotationMatrix, translationMatrix))
    aPrimeVectorMatrix.set(...multiply(transformationMatrix, aVectorMatrix).toArray())
    bPrimeVectorMatrix.set(...multiply(transformationMatrix, bVectorMatrix).toArray())
    cPrimeVectorMatrix.set(...multiply(transformationMatrix, cVectorMatrix).toArray())
    const aPrimePoint = {
      x: aPrimeVectorMatrix.toArray()[0],
      y: aPrimeVectorMatrix.toArray()[4],
      z: aPrimeVectorMatrix.toArray()[8],
    }
    const bPrimePoint = {
      x: bPrimeVectorMatrix.toArray()[0],
      y: bPrimeVectorMatrix.toArray()[4],
      z: bPrimeVectorMatrix.toArray()[8],
    }
    const cPrimePoint = {
      x: cPrimeVectorMatrix.toArray()[0],
      y: cPrimeVectorMatrix.toArray()[4],
      z: cPrimeVectorMatrix.toArray()[8],
    }

    if (aPrimePointRef.current) {
      const aPrime = aPrimePointRef.current as any
      aPrime.position.x = aPrimePoint.x
      aPrime.position.y = aPrimePoint.y
      aPrime.position.z = aPrimePoint.z
    }
    if (bPrimePointRef.current) {
      const bPrime = bPrimePointRef.current as any
      bPrime.position.x = bPrimePoint.x
      bPrime.position.y = bPrimePoint.y
      bPrime.position.z = bPrimePoint.z
    }
    if (cPrimePointRef.current) {
      const cPrime = cPrimePointRef.current as any
      cPrime.position.x = cPrimePoint.x
      cPrime.position.y = cPrimePoint.y
      cPrime.position.z = cPrimePoint.z
    }
  })

  const stylePoints = {
    borderBottom: "1px white solid",
    color: "white",
    marginBottom: "1em",
    paddingLeft: "2em",
  }
  return (
    <>
      {axesHelper && <axesHelper />}
      {gridHelper && <gridHelper />}

      <Sphere args={[0.05]} position={[aPoint.x, aPoint.y, aPoint.z]}>
        <meshBasicMaterial color={"red"} />
        <Html style={stylePoints}>a</Html>
      </Sphere>
      <Line
        color="yellow"
        dashed={false}
        lineWidth={1}
        opacity={0.5}
        points={[
          [aPoint.x, aPoint.y, aPoint.z],
          [bPoint.x, bPoint.y, bPoint.z],
        ]}
        transparent={true}
      />
      <Sphere args={[0.05]} position={[bPoint.x, bPoint.y, bPoint.z]}>
        <meshBasicMaterial color={"green"} />
        <Html style={stylePoints}>b</Html>
      </Sphere>
      <Line
        color="cyan"
        dashed={false}
        lineWidth={1}
        opacity={0.5}
        points={[
          [bPoint.x, bPoint.y, bPoint.z],
          [cPoint.x, cPoint.y, cPoint.z],
        ]}
        transparent={true}
      />
      <Sphere args={[0.05]} position={[cPoint.x, cPoint.y, cPoint.z]}>
        <meshBasicMaterial color={"blue"} />
        <Html style={stylePoints}>c</Html>
      </Sphere>
      <Line
        color="magenta"
        dashed={false}
        lineWidth={1}
        opacity={0.5}
        points={[
          [cPoint.x, cPoint.y, cPoint.z],
          [aPoint.x, aPoint.y, aPoint.z],
        ]}
        transparent={true}
      />

      <Sphere args={[0.05]} ref={aPrimePointRef}>
        <meshBasicMaterial color={"red"} />
        <Html style={stylePoints}>a&prime;</Html>
      </Sphere>
      <Sphere args={[0.05]} ref={bPrimePointRef}>
        <meshBasicMaterial color={"green"} />
        <Html style={stylePoints}>b&prime;</Html>
      </Sphere>
      <Sphere args={[0.05]} ref={cPrimePointRef}>
        <meshBasicMaterial color={"blue"} />
        <Html style={stylePoints}>c&prime;</Html>
      </Sphere>
      <Sphere args={[0.05]} position={[0, 0, 0]}>
        <meshBasicMaterial />
        <Html>o</Html>
      </Sphere>
    </>
  )
}

export default Content
