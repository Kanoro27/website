import "../sidebar.css"
import {animate, motion} from "framer-motion"

const Togglebutton = ({setOpen}) => {
  return (
    <button onClick={()=>setOpen((prev) => !prev)} className="w-12 h-12 fixed top-6 left-6 bg-transparent border-none cursor-pointer flex justify-center items-center">
      <motion.img src="/plus.png" className="h-5"
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