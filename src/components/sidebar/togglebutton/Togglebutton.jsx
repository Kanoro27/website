import "../sidebar.css"
import {animate, motion} from "framer-motion"
import { useState } from "react";

const Togglebutton = ({ setOpen, imageSrc }) => {

  const [isOpen,setIsOpen] = useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
    setIsOpen(!isOpen)
  }
  return (
    // <button onClick={()=>} className="w-12 h-12 fixed top-6 left-6 bg-transparent border-none cursor-pointer flex justify-center items-center">
    <button onClick={handleClick} className="w-12 h-12 fixed top-6 left-6 bg-transparent border-none cursor-pointer flex justify-center items-center">
      <motion.img src={imageSrc} className="h-5"
                                  initial={false}
                                  variants={{
                                    open : {
                                      rotate:135,
                                    },
                                    closed: {
                                      rotate:0,
                                      transition:{
                                        duration:0.25,
                                        ease: "easeInOut",
                                      }
                                    }
                                  }}
                                  />
    </button>
  );
};

export default Togglebutton