import "./aboutme.css"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";

const Aboutme = () => {

    const videoRef = useRef();
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        videoRef.current.load();

        videoRef.current.addEventListener('loadeddata', () => {
            setVideoLoaded(true);
        });
    }, []);

    return (
        <div className="aboutme w-full h-full relative overflow-hidden">
            <div className="video-container absolute z-0 top-1/2 -bottom1/2 w-full h-full object-cover overflow-hidden">
                <video ref={videoRef} autoPlay muted loop className="object-contain w-full h-[70vh] overflow-hidden">
                    <source src="/blackhole.webm" type="video/webm" />
                </video>
            </div>
            <div className="wrapper h-full max-w-[1280px] m-auto ">
                <div className="container w-full h-full flex flex-row justify-center content-center gap-10">
                    <div className="content h-full w-1/2 m-auto justify-center z-10 flex flex-col ${videoLoaded ? 'visible' : 'invisible'} gap-3">
                        <motion.h2 className="text-3xl font-bold" initial={{ opacity: 1, x: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ delay:4, duration: 0.3, ease: "easeOut" }}>Who am I?</motion.h2>
                        <motion.h1 className="text-2xl font-normal text-balance" initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 4, duration: 0.5, ease: "easeOut" }}>
                            Hey! My name is Praveen Kumar S, and I am now doing my Final Year <span>Bachelor of Engineering in Artificial Intelligence and Data Science</span> at the CMR Institute of Technology. Aspiring <span>Machine Learning Expert</span> has experience with a range of machine learning models, including <span>classification, regression, and convolution neural networks</span>. I am not only proficient in machine learning, but also in front-end programming using <span>HTML, CSS3, JavaScript, React, TailwindCSS, Vite, and Angular</span>.
                        </motion.h1>
                    </div>
                    <motion.div className="codeimage flex flex-col h-full m-y-auto justify-center w-1/2 z-[1] overflow-hidden" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ delay: 0.4, duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}>
                        <motion.img src="/code.png" initial={{ x: 0, scale: 1 }} animate={{ x: 0, scale: 1 }} transition={{ delay: 4, duration: 0.4, ease: "easeOut" }} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme