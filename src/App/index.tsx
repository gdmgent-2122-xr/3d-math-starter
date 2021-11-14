import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import Content from "./Content"

const App = () => {
  return (
    <Canvas
      camera={{ zoom: 200 }}
      className="canvas"
      linear={false}
      orthographic={true}
      shadows={true}
    >
      <ambientLight intensity={1} />
      <OrbitControls enableDamping={true} enablePan={true} enableZoom={true} />
      <Content />
    </Canvas>
  )
}

export default App
