import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%' }}
      shadows
      camera={{
        // Slightly angled perspective — gives the 2.5D feel
        position: [0, -4, 12],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

     
    </Canvas>
  )
}
