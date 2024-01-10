/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/box.glb -K -k 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Box(props) {
  const { nodes, materials } = useGLTF('models/box.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="2af0fb51f0be4c3a815b60e243374b70fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode">
              <group name="Camera001" position={[735.889, 495.831, 692.579]} rotation={[-Math.PI, 0.756, 2.68]} scale={100}>
                <group name="Object_7" />
              </group>
              <group name="Camera002" position={[284.129, 293.564, 720.872]} rotation={[3.118, 0.958, 2.971]} scale={100}>
                <group name="Object_9" />
              </group>
              <group name="Light001" position={[407.625, 590.386, -100.545]} rotation={[1.89, 0.881, -2.045]} scale={100}>
                <group name="Object_4" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_5" />
                </group>
              </group>
              <group name="Light002" position={[122.749, 204.988, -328.155]} rotation={[1.769, -0.107, -2.463]} scale={100}>
                <group name="Object_22" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_23" />
                </group>
              </group>
              <group name="Light003" position={[-450.966, 376.75, 177.155]} rotation={[1.174, -0.775, 1.184]} scale={100}>
                <group name="Object_25" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_26" />
                </group>
              </group>
              <group name="Light004" position={[-512.955, 204.988, -328.155]} rotation={[1.693, -0.044, 2.48]} scale={100}>
                <group name="Object_28" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_29" />
                </group>
              </group>
              <group name="Light005" position={[-512.955, 204.988, 310.689]} rotation={[1.516, -0.118, 0.817]} scale={100}>
                <group name="Object_31" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_32" />
                </group>
              </group>
              <group name="Light006" position={[183.491, 204.988, 310.689]} rotation={[1.464, 0.075, -0.925]} scale={100}>
                <group name="Object_34" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_35" />
                </group>
              </group>
              <group name="SurpriseBox" position={[0.873, 16.259, -1.52]} rotation={[-Math.PI / 2, 0, 1.607]} scale={15.549}>
                <group name="Text001" position={[-0.384, -1.048, -0.658]} rotation={[Math.PI / 2, 0, 0]} scale={2.139}>
                  <mesh castShadow receiveShadow  name="Text001_Mario?_0" geometry={nodes['Text001_Mario?_0'].geometry} material={materials.Mario} />
                </group>
                <group name="Text002" position={[0.369, 1.02, -0.658]} rotation={[-Math.PI / 2, 0.07, Math.PI]} scale={2.139}>
                  <mesh castShadow receiveShadow  name="Text002_Mario?_0" geometry={nodes['Text002_Mario?_0'].geometry} material={materials.Mario} />
                </group>
                <group name="Text003" position={[1.05, -0.388, -0.658]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={2.139}>
                  <mesh castShadow receiveShadow  name="Text003_Mario?_0" geometry={nodes['Text003_Mario?_0'].geometry} material={materials.Mario} />
                </group>
                <group name="Text004" position={[-1.039, 0.396, -0.658]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={2.139}>
                  <mesh castShadow receiveShadow  name="Text004_Mario?_0" geometry={nodes['Text004_Mario?_0'].geometry} material={materials.Mario} />
                </group>
                <mesh castShadow receiveShadow  name="SurpriseBox_Material039_0" geometry={nodes.SurpriseBox_Material039_0.geometry} material={materials['Material.039']} />
                <mesh castShadow receiveShadow  name="SurpriseBox_Material042_0" geometry={nodes.SurpriseBox_Material042_0.geometry} material={materials['Material.042']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/box.glb')
