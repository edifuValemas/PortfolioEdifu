import {
  Text3D,
  Environment,
  useScroll,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { motion } from "framer-motion-3d";
import { useMotionValue,animate } from "framer-motion";
import { useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Projects } from "./Projects";
import { Ballon } from "./Ballon";
import { Background } from "./Background";
import {Flag} from "./Flag";
import React from "react";
import TextTresD from "./TextTresD";
import CanvasLoader from "./Loader";


export const Experience = (props) => {
  
  const ref = useRef();
  const { width: w, height: h } = useThree((state) => state.viewport);
  const { menuOpened} = props;
  const { viewport } = useThree();
  const data = useScroll();
  const [section, setSection] = useState(0);
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
     
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
     
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();
  const [characterAnimation, setCharacterAnimation] = useState("Jump");
  useEffect(() => {
    setCharacterAnimation("Jump");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Standing" : "Run");
    }, 900);
  }, [section]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

  });
  const { animation } = useControls({
    animation: {
      value: "Standing",
      options: ["Dancing", "Run", "Standing", "Jump"],
    },
  });
  return (   
    <>    
      <Background />
      <TextTresD/>
      <motion.group 
        position={[1.2,.6, 4.8]}
        rotation={[0, -0.20, 0]}
        scale={[.5, .5, .5]}
        animate= {""+ section}
        variants={{
          0: {
            scaleX: 0.6,
            scaleY: 0.6,
            scaleZ: 0.6,
          },
          1: {
            y: -viewport.height + 1.5,
            x: 0,
            z: 7,
         
            scaleX: 0.8,
            scaleY: 0.8,
            scaleZ: 0.8,
          },
          2: {
          
            x: -2,
            y: -viewport.height * 2.1 + 0.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
          3: {
            y: -viewport.height * 3.4 + 1,
            x: 1,
            z: 1,
            rotateX: 0,
            rotateY: -Math.PI / 7,
            rotateZ: 0,
            scaleX: 2.6,
            scaleY: 2.6,
            scaleZ: 2.6,
          },
        }}
        >

          <directionalLight castShadow={true} color={"#FBC138"} position={[-4, 10, -4.7]} intensity={1} />
          <Avatar  animation={characterAnimation}/>
 
     

      </motion.group>     
      <motion.group  
        position={[1, 3, 4]}
        animate={{    
          y: section === -1 ? -viewport.height : 1.5,
        
        }}>
        <Suspense fallback={<CanvasLoader />}>
          <Float speed={2} floatIntensity={2} scale={.5}>
            <Ballon/>                
          </Float>  
        </Suspense>
            
      </motion.group>
      <ambientLight intensity={.1}/>
      <Environment preset="sunset" />
   
      <hemisphereLight groundColor={"#000000"} intensity={.2}/>
      <motion.group
        position={[1.2, 2, 3.3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 6.3}
        animate={{
          y: section === 0 ? 1 : 0,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Flag/>
          <Office section = {section}/>
          <group ref={characterContainerAboutRef}  position={[2.284, -0.429, 1.834]} rotation={[0, 0.391, 0]} scale={0.393}>
          </group>
        </Suspense>
       
       
      </motion.group>
        
        {/* SKILLS */}
      <motion.group
          position={[0, -1.5, -10]}
          animate= {""+ section}
          variants={{
          0: {
            scaleX: 0,
            scaleY: 0,
            scaleZ: 0,
            opacity:0
          },
          1: {
            y: -viewport.height + 1.5,
            x: 0,
            z: 6,
            opacity:1,
            scaleX: 0.2,
            scaleY: 0.2,
            scaleZ: 0.2,
          },
          2: {
          
            opacity:0
          },
          3: {
            opacity:0
          },
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
      <Projects/>
      <motion.group
      animate= {""+ section}
        variants={{
        0: {
          scaleX: 0,
          scaleY: 0,
          scaleZ: 0,
          opacity:0
        },
        1: {
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
          opacity:1
        },
        2: {
          scaleX: 0,
          scaleY: 0,
          scaleZ: 0,
          opacity:0
        },
        3: {
          scaleX: 0,
          scaleY: 0,
          scaleZ: 0,
          opacity:0
        },
      }}>      
        <Text3D
            position={[1.2, 0, 1.1]}
            position-y={-viewport.height * 1.0 + 1}
            scale={[.5, .5, .5]}
            ref={ref}
            size={w / 15}
            maxWidth={[-w / 5, -h * 3, 3]}
            font={"fonts/gt.json"}
            curveSegments={10}
            brevelSegments={5}
            castShadow={true} 
            bevelEnabled
            receiveShadow={true}
            bevelSize={0.04}
            height={.2}
            rotation={[0, -1, 0]} 
            lineHeight={0.5}
            letterSpacing={0.2}
            
            >
            {`SKILLS`}
            <meshStandardMaterial shadowSide={THREE.BackSide} color="#B667E5"/>
        </Text3D>
      </motion.group>


      <motion.group
          animate= {""+ section}
          variants={{
          0: {
            scaleX: 0,
            scaleY: 0,
            scaleZ: 0,
            opacity:0
          },
          1: {
            scaleX: 0,
            scaleY: 0,
            scaleZ: 0,
            opacity:0
          },
          2: {
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            opacity:1
          },
          3: {
            scaleX: 0,
            scaleY: 0,
            scaleZ: 0,
            opacity:0
          },
        }}
      >   
           
        <Text3D
            position={[1, 0, 1.1]}
            position-y={-viewport.height * 1.9 + 1}
            scale={[.5, .5, .5]}
            ref={ref}
            size={w / 13}
            maxWidth={[-w / 5, -h * 3, 3]}
            font={"fonts/gt.json"}
            curveSegments={10}
            brevelSegments={5}
            castShadow={true} 
            bevelEnabled
            receiveShadow={true}
            bevelSize={0.04}
            height={.2}
            rotation={[0, .3, 0]} 
            lineHeight={0.5}
            letterSpacing={0.2}
            
            >
            {`PROJECTS`}
            <meshStandardMaterial shadowSide={THREE.BackSide} color="#FFD60D"/>
        </Text3D>
        
      </motion.group>
      <motion.group
       animate= {""+ section}
          variants={{
          0: {
            scaleX: 0,
            scaleY: 0,
            scaleZ: 0,
            opacity:0
          },
          1: {
            scaleX: 0,
            scaleY: 0,
            scaleZ: 0,
            opacity:0
          },
          2: {
            scaleX: 0,
            scaleY: 0,
            scaleZ: 0,
            opacity:0
          },
          3: {
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
            opacity:1
          },
        }}
      >      
        <Text3D
            position={[-4, 0, 1.1]}
            position-y={-viewport.height * 3 + 1}
            scale={[.5, .5, .5]}
            ref={ref}
            size={w / 13}
            maxWidth={[-w / 5, -h * 3, 3]}
            font={"fonts/gt.json"}
            curveSegments={10}
            brevelSegments={5}
            castShadow={true} 
            bevelEnabled
            receiveShadow={true}
            bevelSize={0.04}
            height={.2}
            rotation={[0, 1, -.02]} 
            lineHeight={0.5}
            letterSpacing={0.2}
            
            >
            {`CONTACT`}
            <meshStandardMaterial shadowSide={THREE.BackSide} color="#B667E5"/>
        </Text3D>
        
      </motion.group>
   
    </>
  );
};
