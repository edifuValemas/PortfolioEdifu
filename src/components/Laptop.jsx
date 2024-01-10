/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/Laptop.glb -K -k 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop(props) {
  const { nodes, materials } = useGLTF('models/Laptop.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group name="Laptop_01_Cube025">
          <mesh name="Laptop_01_Cube025-Mesh" geometry={nodes['Laptop_01_Cube025-Mesh'].geometry} material={materials['1A1A1A']} />
          <mesh name="Laptop_01_Cube025-Mesh_1" geometry={nodes['Laptop_01_Cube025-Mesh_1'].geometry} material={materials['039BE5']} />
          <mesh name="Laptop_01_Cube025-Mesh_2" geometry={nodes['Laptop_01_Cube025-Mesh_2'].geometry} material={materials.F44336} />
          <mesh name="Laptop_01_Cube025-Mesh_3" geometry={nodes['Laptop_01_Cube025-Mesh_3'].geometry} material={materials.FF9800} />
          <mesh name="Laptop_01_Cube025-Mesh_4" geometry={nodes['Laptop_01_Cube025-Mesh_4'].geometry} material={materials['455A64']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/Laptop.glb')
