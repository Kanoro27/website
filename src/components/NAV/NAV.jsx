import './navbar.css'
import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar.jsx"

const NAV = () => {
  const handleProjectClick = () => {
    const contactSection = document.getElementById("Projects");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar h-24 content-center">
      <Sidebar />
      <div className="wrapper flex justify-between max-w-7xl m-auto">
        <motion.span
          className='content-center font-semibold'
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <a href="#Homepage">Kanoro DEV</a>
        </motion.span>
        <motion.div
          className='navy content-center font-semibold flex flex-row gap-4'
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <button className='text-lg font-bold' onClick={handleProjectClick}>Projects</button>

        </motion.div>
        <div className="social flex content-center gap-2">
          <a href="https://www.linkedin.com/in/spraveenkumar/" target="_blank">
            <motion.img
              src="/linkedin.png"
              className="max-h-6"
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }} />
          </a>
          <a href="https://github.com/Kanoro27" target="_blank">
            <motion.img
              src="/github.png"
              className="max-h-6"
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }} />
          </a>
          <a href="https://www.instagram.com/madcapgenesis/" target="_blank">
            <motion.img
              src="/instagram.png"
              className="max-h-6"
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }} />
          </a>
          {/* <a href="">
            <motion.img
              src="/twitter.png"
              className="max-h-6"
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }} />
          </a> */}
          <a href="https://www.facebook.com/spraveen.kumar.739326" target="_blank">
            <motion.img
              src="/facebook.png"
              className="max-h-6"
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NAV