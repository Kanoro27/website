import './navbar.css'
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar.jsx"

const NAV = () => {
  return (
    <div className="navbar h-24 content-center">
        <Sidebar/>
        <div className="wrapper flex justify-between max-w-7xl m-auto">
            <motion.span 
              className='content-center font-semibold'
              initial={{opacity:0.5,scale:0.5}}
              animate={{opacity:1,scale:1}}
              transition={{duration:0.5}}>
                Kanoro DEV
            </motion.span>
            <div className="social flex content-center gap-2">
              <a href="">
                <motion.img 
                  src="/linkedin.png" 
                  className="max-h-6" 
                  initial={{opacity:0.5,scale:0.5}}
                  animate={{opacity:1,scale:1}}
                  transition={{duration:0.5}}/>
              </a>
              <a href="">
                <motion.img 
                  src="/github.png" 
                  className="max-h-6" 
                  initial={{opacity:0.5,scale:0.5}}
                  animate={{opacity:1,scale:1}}
                  transition={{duration:0.5}}/>
              </a>
              <a href="">
                <motion.img 
                  src="/instagram.png" 
                  className="max-h-6" 
                  initial={{opacity:0.5,scale:0.5}}
                  animate={{opacity:1,scale:1}}
                  transition={{duration:0.5}}/>
              </a>
              <a href="">
                <motion.img 
                  src="/twitter.png" 
                  className="max-h-6" 
                  initial={{opacity:0.5,scale:0.5}}
                  animate={{opacity:1,scale:1}}
                  transition={{duration:0.5}}/>
              </a>
              <a href="">
                <motion.img 
                  src="/facebook.png" 
                  className="max-h-6" 
                  initial={{opacity:0.5,scale:0.5}}
                  animate={{opacity:1,scale:1}}
                  transition={{duration:0.5}}/>
              </a>   
            </div>
        </div>
    </div>
  )
}

export default NAV