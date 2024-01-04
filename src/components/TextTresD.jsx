
import {
    Text3D
  } from "@react-three/drei";
  import { motion } from "framer-motion-3d";
  import { useMotionValue,animate } from "framer-motion";
  import { useFrame, useThree } from "@react-three/fiber";
  import { useEffect, useRef, useState } from "react";
  import * as THREE from "three";




const skills = [
    {
        title: "Html / Css / Sass",
        level: 90,
    },
    {
        title: "Angular",
        level: 80,
    },
    {
        title: "Javascript",
        level: 70,
    },
    {
        title: "Typescript",
        level: 60,
    },
    {
        title: "Illustration / Branding",
        level: 60,
    },
    {
        title: "UX / UI",
        level: 50,
    },
    {
        title: "3D Modeling",
        level: 40,
    },
];
const languages = [
{
    title: "🇪🇸 Spanish",
    level: 100,
},
{
    title: "🇺🇸 English",
    level: 80,
},
];
const TextTresD = () => {
    const ref = useRef();
    const { width: w, height: h } = useThree((state) => state.viewport);
    return ( 

        <motion.group>      
            <Text3D
                position={[-2, 2.4, 3.8]}
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
                rotation={[0, 1.1, 0]} 
                lineHeight={0.5}
                letterSpacing={0.2}
                
                >
                {`I'm\nEdisson\nFuquene`}
                <meshStandardMaterial shadowSide={THREE.BackSide} color="#F7A90B"/>
                

            </Text3D>
        </motion.group>
        
        
     );
}
 
export default TextTresD;

