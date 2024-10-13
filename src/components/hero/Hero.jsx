import "./hero.css"
import {easeInOut, motion} from "framer-motion"

const textVariants= {
  initial: {
    x:-200,
    opacity: 0,
  },
  animate: {
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1, 
      ease:"easeInOut"
    }
  },
}

const slideVariants= {
  initial: {
    x:-300,
  },
  animate: {
    x:0,
    transition:{
      duration:10,
      repeat:Infinity, 
      repeatType:"mirror",
      staggerChildren:0.3
    }
  },
}
const Hero = () => {
  return (
    <div className="hero overflow-hidden flex flex-row w-full">
      <motion.div className="slidingTextContainer absolute font-black flex flex-col top-0 justify-center items-center content-center overflow-hidden" variants={slideVariants} initial="initial" animate="animate">
        <motion.span className="overflow-y-hidden" variants={slideVariants} initial="initial" animate="animate">Video-Editor</motion.span>
        <motion.span className="overflow-y-hidden" variants={slideVariants} initial="initial" animate="animate">Freelancer</motion.span>
        <motion.span className="overflow-y-hidden" variants={slideVariants} initial="initial" animate="animate">UI-Designer</motion.span>
      </motion.div> 
      <motion.div className="wrapper h-full m-auto w-1/2" variants={textVariants} initial="initial" animate="animate">
        <motion.div className="textContainer h-full flex flex-col justify-center gap-7" variants={textVariants}>
          <motion.h2 className="text-2xl font-bold mr-auto" variants={textVariants}>PRAVEEN KUMAR S</motion.h2>
          <motion.h1 className="text-7xl font-medium w-full" variants={textVariants}>ML Engineer and Web Developer</motion.h1>
          <motion.div className="buttons font-normal" variants={textVariants}>
            <motion.button initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1,  }}>Latest Work</motion.button>
            <motion.button initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1,  }}>Contact Me</motion.button>
            <motion.button initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1,  }}>Download CV</motion.button>
          </motion.div>
          <div className="flex flex-row items-center">
            <motion.img className="w-12" src="/scroll.png" variants={textVariants} initial={{ y: 0 }} animate={{ y: 20 }} transition={{ duration: 2, repeat: Infinity, }} />
            <motion.span variants={textVariants} initial={{ y: 0 }} animate={{ y: 20 }} transition={{ duration: 2, repeat: Infinity, }}>About Me</motion.span>
          </div>
        </motion.div>
      </motion.div> 
      <motion.div className="imageContainer top-0 right-0 h-full flex flex-row-reverse">
        <button></button><motion.img className="" src="/hero.png" initial={{scale:0.5,opacity:0}} animate={{scale:1.2,opacity:1}} transition={{duration:1.5,ease:"easeInOut"}} />
      </motion.div>
    </div>
  )
}

export default Hero