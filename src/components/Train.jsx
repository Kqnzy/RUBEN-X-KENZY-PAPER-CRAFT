import { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { SRGBColorSpace, MeshBasicMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

function Train(props) {
  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const { nodes } = useGLTF('/blenderscene/3dmodels/train.glb')
  const texturetrain = useTexture('/blenderscene/images/train/train.png')
  const textureroue = useTexture('/blenderscene/images/train/roue.png')

  texturetrain.colorSpace = SRGBColorSpace
  texturetrain.flipY = true

  const material = new MeshBasicMaterial({ map: texturetrain, transparent: true, depthTest: false })

  const scroll = useScroll()

  useFrame(() => {
    ref.current.position.x = scroll.offset * 10 - 5
    ref2.current.rotation.z = scroll.offset * Math.PI * -2
    ref3.current.rotation.z = scroll.offset * Math.PI * -2
  })

  return (
    <group ref={ref} {...props}>
      {/* {['TRAIN1', 'TRAIN2', 'TRAIN3'].map((name) => (
        <mesh
          key={name}
          geometry={nodes[name].geometry}
          material={material}
          position={nodes[name].position}
          rotation={nodes[name].rotation}
          scale={nodes[name].scale}
        />
      ))} */}

      <mesh>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={texturetrain} transparent={true} depthTest={false} />
      </mesh>
      <mesh ref={ref2} position={[-0.2, -1, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={textureroue} transparent={true} depthTest={false} />
      </mesh>
      <mesh ref={ref3} position={[-1, -1, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={textureroue} transparent={true} depthTest={false} />
      </mesh>
    </group>
  )
}

export default Train

