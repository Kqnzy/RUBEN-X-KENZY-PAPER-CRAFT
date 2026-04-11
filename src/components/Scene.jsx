import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ScrollControls } from '@react-three/drei'
import Train from './Train'
import Fond from './Fond'


export default function Scene() {
  return (
    <Canvas
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%' }}
      shadows
      camera={{
        position: [0, -4, 12],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
    >
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <Fond />

      <ScrollControls pages={5} damping={0.1}>
        <Train />
      </ScrollControls>

    </Canvas>
  )
}
