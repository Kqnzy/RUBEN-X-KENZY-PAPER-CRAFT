import { useGLTF, useTexture } from '@react-three/drei'
import { SRGBColorSpace, MeshBasicMaterial } from 'three'

export default function Fond(props) {
  const { nodes } = useGLTF('/blenderscene/3dmodels/train.glb')
  const texturefond = useTexture('/blenderscene/images/fond.jpg')

  texturefond.colorSpace = SRGBColorSpace
  texturefond.flipY = false

  const material = new MeshBasicMaterial({ map: texturefond })

  return (
    <group {...props}>
      <mesh
        geometry={nodes.FOND.geometry}
        material={material}
        position={nodes.FOND.position}
        rotation={nodes.FOND.rotation}
        scale={nodes.FOND.scale}
      />
    </group>
  )
}
