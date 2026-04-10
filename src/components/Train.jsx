import { forwardRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { SRGBColorSpace, MeshBasicMaterial } from 'three'

const Train = forwardRef(function Train(props, ref) {
  const { nodes } = useGLTF('/blenderscene/3dmodels/train.glb')
  const texturetrain = useTexture('/blenderscene/images/train.png')

  texturetrain.colorSpace = SRGBColorSpace
  texturetrain.flipY = false

  const material = new MeshBasicMaterial({ map: texturetrain, transparent: true })

  return (
    <group ref={ref} {...props}>
      {['TRAIN1', 'TRAIN2', 'TRAIN3'].map((name) => (
        <mesh
          key={name}
          geometry={nodes[name].geometry}
          material={material}
          position={nodes[name].position}
          rotation={nodes[name].rotation}
          scale={nodes[name].scale}
        />
      ))}
    </group>
  )
})

export default Train
