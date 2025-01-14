/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/cellphone.glb -K -k 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {
  useVideoTexture
} from "@react-three/drei";
export function CellPhone(props) {
  
  const textureCel1 = useVideoTexture("textures/celProject1.mp4",{loop:true})
  const { nodes, materials } = useGLTF('models/cellphone.glb')
  return (

    <group {...props} dispose={null}>
      <group name="Scene">
        
        <mesh name="MobilePhone_Phone_Main_0" geometry={nodes.MobilePhone_Phone_Main_0.geometry} material={materials.Phone_Main} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} 
        >
          
          </mesh>
        <mesh 
          name="Screen" 
          geometry={nodes.Screen.geometry} 
          
          position={[0, 0, 0.001]} rotation={[Math.PI / 2, 0, 3.109]} scale={0.01} >
          <meshBasicMaterial map={textureCel1} toneMapped={true} forceSinglePass={true}/>
         
        </mesh>
      </group>
     
    </group>
   
  )
}

useGLTF.preload('models/cellphone.glb')
