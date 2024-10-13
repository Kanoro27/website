/* eslint-disable react/prop-types */
import "./portfolio.css"
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion"
import { useRef, createContext, useContext, useState } from "react"

const items = [
    {
        id: 1,
        image: "/projectimage.jpg",
        title: "Project 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nesciunt tempora iusto reprehenderit eos, vitae quaerat natus harum et hic, architecto sed eligendi non. Nobis quidem tempore unde pariatur saepe.",
    },
    {
        id: 2,
        image: "/projectimage.jpg",
        title: "Project 2",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nesciunt tempora iusto reprehenderit eos, vitae quaerat natus harum et hic, architecto sed eligendi non. Nobis quidem tempore unde pariatur saepe.",
    },
    {
        id: 3,
        image: "/projectimage.jpg",
        title: "Project 3",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nesciunt tempora iusto reprehenderit eos, vitae quaerat natus harum et hic, architecto sed eligendi non. Nobis quidem tempore unde pariatur saepe.",
    }
]


const otheritems = [
    {
        id: 1,
        image: "/projectimage.jpg",
        title: "Project 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nesciunt tempora iusto reprehenderit eos, vitae quaerat natus harum et hic, architecto sed eligendi non. Nobis quidem tempore unde pariatur saepe.",
    },
    {
        id: 2,
        image: "/projectimage.jpg",
        title: "Project 2",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nesciunt tempora iusto reprehenderit eos, vitae quaerat natus harum et hic, architecto sed eligendi non. Nobis quidem tempore unde pariatur saepe.",
    },
    {
        id: 3,
        image: "/projectimage.jpg",
        title: "Project 3",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nesciunt tempora iusto reprehenderit eos, vitae quaerat natus harum et hic, architecto sed eligendi non. Nobis quidem tempore unde pariatur saepe.",
    }
    ,
    {
        id: 4,
        image: "/projectimage.jpg",
        title: "Project 3",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nesciunt tempora iusto reprehenderit eos, vitae quaerat natus harum et hic, architecto sed eligendi non. Nobis quidem tempore unde pariatur saepe.",
    }
]

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"])

    return (
        <section ref={ref} className="w-full">
            <div className="container w-full h-full flex items-center justify-center content-center m-auto">
                <div className="wrapper max-w-[1366px] m-auto h-full flex flex-row items-center justify-center content-center justify-items-center gap-9">
                    <div className="imageContainer flex-[1] h-1/2 overflow-hidden">
                        <img className="object-cover w-full h-full" src={item.image} alt="" />
                    </div>
                    <motion.div className="textContainer w-full flex-[1] flex flex-wrap items-start" style={{ y }} transition={{
                        duration
                            : 0.5
                    }}>
                        <h2 className="text-4xl font-semibold w-full" >{item.title}</h2>
                        <p className="text-gray-200 text-lg w-full">{item.description}</p>
                        <div className="button w-full gap-2 font-medium flex flex-row">
                            <button className="w-1/4">Source Code</button>
                            <button className="w-1/4">See Demo</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const OtherSingle = ({ item }) => {

    const ref = useRef()

    // const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

    // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"])

    return (
        <div className="projectContainer w-1/4  h-1/2 p-2 flex flex-col gap-2 justify-center content-center">
            <div className="imageContainer object-contain w-full p-auto">
                <img className="object-cover w-[95%] m-auto" src={item.image} alt="" />
            </div>
            <div className="textContainer justify-center content-center w-full">
                <p className="text-center font-medium text-lg">{item.title}</p>
            </div>
            <div className="button w-full gap-2 font-medium flex flex-row">
                <button className="w-[45%] m-auto">Source Code</button>
                <button className="w-[45%] m-auto">See Demo</button>
            </div>
        </div>
    )
}


const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio relative w-full" ref={ref}>
            <div className="progress sticky top-0 left-0 h-28 w-full p-auto text-center justify-center content-center text-3xl font-bold">
                <h1 className="top-0 left-0 h-24 p-auto text-center justify-center content-center">Projects</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar w-full h-[6px] bg-[aliceblue]"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
            <section className="otherProjects w-full">
                <div className="container w-full h-28"></div>
                <h1 className="w-full text-center font-semibold text-2xl h-12">Others that you might want to look into.</h1>
                <div className="wrapper flex flex-wrap max-w-[1366px] m-auto h-[calc(100%-7rem-3rem-3rem)]">
                    {otheritems.map(item => (
                        <OtherSingle item={item} key={item.id} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Portfolio