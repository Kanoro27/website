import { useRef } from "react"
import "./parallax.css"
import {motion,useScroll,useTransform} from "framer-motion"

const Parallax = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start start","end start"],
  })
  const yText = useTransform(scrollYProgress, [0, 1], ["-200%", "400%"] )
  const yBg = useTransform(scrollYProgress, [0,1], ["-100%","300%"])
  const xBg = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"])
  return (
    <div className="parallax w-full h-full flex justify-center content-center items-center relative overflow-hidden">
      <motion.div style={{ x: xBg}} className="stars w-full h-full absolute" ></motion.div>
      <motion.span className="absolute text-6xl font-extrabold" style={{ y: yText }}>What Did I do?</motion.span>
      <motion.div className="planets w-full h-1/2 absolute top-0 left-0" style={{ y: yBg }}></motion.div>
      <motion.div className="mountains w-full h-full absolute over"  ></motion.div>
    </div>
  ) 
}

export default Parallax