import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Flag(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/colombia-flag.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions['KeyAction'].play();
  },[])
  return (
    <group position={[3.13, .43, 1.6]}  scale={[.15, .2, .2]}  rotation-y={-Math.PI / 6.2}ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="root_1">
                  <group
                    name="GLTF_SceneRootNode_2"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="RootNode_(gltf_orientation_matrix)_0_3"
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <group name="RootNode_(model_correction_matrix)_1_4">
                        <group name="root_2_5">
                          <group
                            name="GLTF_SceneRootNode_3_6"
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group name="Flag_ShapeKeys_2_4_7">
                              <group name="mesh_0_5_8">
                                <group name="mesh_0_9">
                                  <mesh
                                    name="mesh_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_0.geometry}
                                    material={materials.Flag}
                                    morphTargetDictionary={
                                      nodes.mesh_0.morphTargetDictionary
                                    }
                                    morphTargetInfluences={
                                      nodes.mesh_0.morphTargetInfluences
                                    }
                                  />
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('models/colombia-flag.glb')
