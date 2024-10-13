// import "../sidebar.css"
// import { motion } from "framer-motion"

// const variants = {
//   open: {
//     staggerChildren: 0.1,
//   },
//   closed: {
//     staggerChildren: 0.05,
//     staggerDirection: -1
//   }
// }

// const itemVariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//   }
// }
// const Links = () => {

//   const items = ["Homepage", "About Me", "Projects", "Contact"];

//   return (
//     <motion.div className="links"
//       variants={variants}>
//       {items.map((item) => (
//         <motion.a className="text-2xl font-medium"
//           href={`#${item}`}
//           key={item}
//           variants={itemVariants}
//           transition={{ duration: 0.3 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           {item}
//         </motion.a>
//       ))}
//     </motion.div>
//   )
// }

// export default Links

import React from 'react';
import { motion } from "framer-motion"

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  }
};

const Links = () => {
  const items = ["Homepage", "About Me", "Projects", "Contact"];

  const handleLinkClick = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      console.error(`Element with ID "${sectionId}" not found.`);
    }
  };

  return (
    <motion.div className="links">
      {items.map((item) => (
        <motion.a
          className="text-2xl font-medium"
          key={item}
          variants={itemVariants}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleLinkClick(item)} // Call handleLinkClick on click
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;