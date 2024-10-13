import "./sidebar.css"
import Togglebutton from "./togglebutton/Togglebutton.jsx"
import Links from "./links/Links.jsx"
import { useState } from "react"
import {motion} from "framer-motion"

const sidebar = () => {
  const [open,setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setIsOpen(false);
  };

  const variants ={
    open: {
      clipPath:"circle(1200px at 48px 48px)",
      transition:{
        type:"spring",
        stiffness:20,
        ease: "easeInOut"
      }
    },
    closed:{
      clipPath:"circle(20px at 48px 48px)",
      transition: {
        duration: 0.25,
        type:"spring",
        stiffness: 400,
        damping: 40,
        ease: "easeIn"
      }
    }
  };

  const backdropvariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    },
    closed:{
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }      
    }
  }
  
  const toggleButtonImage = open ? "/plus.png" : "/menu-burger.png";

  return (
    <motion.div className="sidebar flex flex-col content-center justify-center text-black"
                initial={false} 
                animate={open ? "open" : "closed"}
                >
        {open && (<motion.div className="backdrop top-0 left-96 right-full fixed w-full h-full"
                              onClick={handleClose}
                              variants={backdropvariants}></motion.div>)}
        <motion.div className="bg top-0 left-0 bottom-0 w-96"
                    variants={variants}
                    >
           <Links />
        </motion.div>
      <Togglebutton setOpen={setOpen} imageSrc={toggleButtonImage} />
    </motion.div>
  )
}

export default sidebar