import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll,ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useEffect, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { Cursor } from "./components/Cursor";
import { Leva } from "leva";
import {ContactHtml} from "./components/ContactHtml";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(true);
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);


  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 600,
          damping: 60,
          restDelta: 0.0001,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 45 }}>
          <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={6} damping={0.2}>
          <ScrollManager section={section} onSectionChange={setSection}/>
          <Scroll>
            <Experience section = {section} menuOpened={menuOpened}/>
          </Scroll>
          
          <Scroll html>
            <Interface  setSection={setSection}/>
          </Scroll>
        </ScrollControls>
      
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <ContactHtml/>
        <Cursor/>
      </MotionConfig>
      <Leva hidden/>
    </>
  );
}

export default App;
