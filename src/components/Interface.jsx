import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";


const Section = (props) => {
  const { children,mobileTop } = props;

  return (
    
    <motion.section
    className={`
    relative
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start
    ${mobileTop ? "justify-start lg:justify-center" : "justify-center"}
    `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ProjectsSectionOne />
      <ProjectsSectionTwo />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      
      <h1 className="text-white mt-12 font-extrabold text-2xl sm:text-2xl  md:text-4xl md:mt-0">
        Graphic<br /> Designer
      </h1>
      
      <motion.p
        className=" text-gray-600 mt-4 font-thin text-sm sm:text-1xl md:text-2xl text-white"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        Experience in:
        <br />
        Programming, UX - UI,
        <br />
        Branding and a lover of 
        <br />
        sports and drawing.
      </motion.p>
      
      <div onClick={() => setSection(1)} className='absolute button-scroll cursor-pointer xs:bottom-10  w-full flex justify-center items-center'>
       
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        
      </div>
    </Section>
  );
};

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

const SkillsSection = () => {
  return (

    <Section mobileTop>
     
      <motion.div  whileInView={"visible"}>
        
        <div className="flex skill-section items-baseline lg:pt-0  flex-col md:flex-row md:flex-nowrap">
          
          <div className=" space-y-4">
            
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="ml-5">
            
            <div className="space-y-4">
              {languages.map((lng, index) => (
                <div className="w-64" key={index}>
                  <motion.h3
                    className="text-xl font-bold text-gray-100"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {lng.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-indigo-500 rounded-full "
                      style={{ width: `${lng.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
 
  return (
    <Section mobileTop>


      <div className="flex flex-col gap-4  flex-1  xl:justify-center  p-4">
        <h1 className="text-white text-5xl font-extrabold ">
          Novae
        </h1>
        
        <motion.p
          className="text-lg text-gray-600 mt-4 font-thin text-white"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          mobile design and landing page for 
          <br />
          white label redemption and rewards
          <br />
          application for traveling customers
        </motion.p>
        <a href="https://novae.io/#/home" className="button-links font-thin">Live 👉</a>
     
      </div>


    </Section>
  );
};
const ProjectsSectionOne = () => {
 
  return (
    <Section mobileTop>
      <div className="flex flex-col gap-4  flex-1   p-4">
        <h1 className="text-white text-5xl font-extrabold ">
          EL TIEMPO
        </h1>
        
        <motion.p
          className="text-lg text-gray-600 mt-4 font-thin text-white"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          UX design, programming and support of 
          <br />
          the multiplatform web for the largest 
          <br />
          newspaper in Colombia called EL TIEMPO.
        </motion.p>
        <a href="https://www.eltiempo.com/" className="button-links font-thin">Live 👉</a>
     
      </div>
    </Section>
  );
};
const ProjectsSectionTwo = () => {
 
  return (
    <Section mobileTop>
      <div className="flex flex-col gap-4  flex-1   p-4">
        <h1 className="text-white text-5xl font-extrabold ">
          Valemas
        </h1>
        
        <motion.p
          className="text-lg text-gray-600 mt-4 font-thin text-white"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          Multi-platform B2B white label model for 
          <br />
          building customer loyalty by earning points
          <br />
          and redeeming them for rewards.
        </motion.p>
        <a href="https://www.eltiempo.com/" className="button-links font-thin">Live 👉</a>
     
      </div>
    </Section>
  );
};
const ContactSection = () => {
  return (
    <Section mobileTop>
      
      <div className="flex flex-col gap-4  flex-1   p-4">
        <h1 className="text-white text-5xl font-extrabold ">
          UX - UI Design
        </h1>
        
        <motion.p
          className="text-lg  text-gray-600 mt-4 font-thin text-white"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          As a designer I have also worked on 
          <br />
          multiple projects from the conception
          <br />
          of the idea to the execution of the project.
          <br />
          I'll wait while you take a look at my behance
        </motion.p>
        <a href="https://www.behance.net/edissonjavier" className="button-links font-thin">Live 👉</a>
     
      </div>
    </Section>
  );
};