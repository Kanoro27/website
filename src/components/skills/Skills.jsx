import "./skills.css"
import {motion} from "framer-motion"

const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const revealElements = (element,depth=0) => {
  element.animate.transition.delay = depth * 0.5; // Adjust the delay as needed
  element.animate.opacity = 1;

  if (element.children.length > 0) {
    element.children.forEach((child) => {
      revealElements(child, element.depth + 1);
    });
  }
};


const Skills = () => { 
  const reveal = (element) => {
    revealElements(element,0);
  };  
  return (
    <motion.div className="skills w-full h-full relative" variants={variant} initial="hidden" animate="visible" onMouseEnter={reveal}>
      <div className="video-container absolute z-[-1] w-full h-full object-cover overflow-hidden">
        <video autoPlay muted loop className="object-fill w-full h-full overflow-hidden">
          <source src="/hacker.webm" type="video/webm" />
        </video>
      </div>
      <div className="wrapper w-full h-full content-center justify-center z-[999]">
        <div className="head w-full h-24 content-center justify-center text-center">
          <motion.h1 className="text-4xl z-[999] font-bold" initial={{ opacity: 0 }} whileInView={{opacity:1}} transition={{duration:0.6,}}>What I do.</motion.h1>
        </div>
        <div className="skill-list h-[calc(100vh-96px)] w-full flex flex-row justify-center content-center m-auto max-w-[1366px]">
          <div className="programming w-1/2 h-full m-auto">
            <div className="program-skills w-full h-full m-auto flex flex-wrap justify-center content-center items-center gap-10">
              <motion.div className="container w-full m-auto flex flex-wrap justify-center content-center items-center gap-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, }}>
                <div className="t-container text-center text-2xl m-auto w-full font-semibold">Languages</div>
                <img src="/python.png" className="h-[70px]" />
                <img src="/java.png" className="h-[70px]" />
                <img src="/mysql.png" className="h-[70px]" />
              </motion.div>
              <motion.div className="container w-full m-auto flex flex-wrap justify-center content-center items-center gap-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, }}>
                <div className="t-container text-center text-2xl m-auto w-full font-semibold">Web Technologies</div>
                <img src="/html.png" alt="" className="h-[60px] " />
                <img src="/css.png" alt="" className="h-[60px] " />
                <img src="/js.png" alt="" className="h-[60px] " />
                <img src="/sass.png" alt="" className="h-[60px] " />
                <img src="/bootstrap.png" alt="" className="h-[60px] " />
                <img src="/flask.png" alt="" className="h-[60px] " />
                <img src="/react.png" alt="" className="h-[60px] " />
                <img src="/tailwind.png" alt="" className="h-[60px]" />
                <img src="/framermotion.png" alt="" className="h-[60px]" />
                <img src="/nodejs.png" alt="" className="h-[60px]" />
              </motion.div>
              <motion.div className="container w-full m-auto flex flex-wrap justify-center content-center items-center gap-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, }}>
                <div className="t-container text-center text-2xl m-auto w-full font-semibold">Softwares</div>
                <img src="/vsc.png" alt="" className="h-[60px] " />
                <img src="/googlecolab.png" alt="" className="h-[60px] " />
                <img src="/jupyter.png" alt="" className="h-[60px] " />
              </motion.div>
            </div>
          </div>
          <div className="machinelearning w-1/2 h-full m-auto">
            <div className="program-skills w-full h-full m-auto flex flex-wrap justify-center content-center items-center gap-10">
              <motion.div className="container w-full m-auto flex flex-wrap justify-center content-center gap-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, }}>
                <div className="t-container text-center text-2xl m-auto w-full font-semibold">Machine Learning</div>
                <img src="/tensorflow.png" className="h-[60px]" />
                <img src="/keras.png" className="h-[60px]" />
                <img src="/pytorch.png" className="h-[60px]" />
                <img src="/pandas.png" className="h-[60px]" />
                <img src="/numpy.png" className="h-[60px]" />
                <img src="/matplotlib.png" className="h-[60px]" />
              </motion.div>
              <motion.div className="container w-full m-auto flex flex-wrap justify-center content-center items-center gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration:4, }}>
                <div className="t-container text-center text-2xl m-auto w-full font-semibold">Other Tools</div>
                <img src="/pp.png" className="h-[60px]" />
                <img src="/ae.png" className="h-[60px]" />
                <img src="/ps.png" className="h-[60px]" />
                <img src="/ai.png" className="h-[60px]" />
                <img src="/lr.png" className="h-[60px]" />
                <img src="/figma.png" className="h-[60px]" />
                <img src="/davinciresolve.png" className="h-[60px]" />                
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills