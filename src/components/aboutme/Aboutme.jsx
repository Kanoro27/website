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
                <div className="head w-full h-24 content-center justify-center text-center">
                    <motion.h1 className="text-4xl z-[20] font-bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, }}>Who am I❔</motion.h1>
                </div>
                <div className="container w-full h-full flex flex-col relative justify-center content-center gap-10">
                    <div className="content h-[45%] w-full z-10 absolute top-4 ${videoLoaded ? 'visible' : 'invisible'} gap-3">
                        <motion.h1 className="text-2xl font-normal text-balance" initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 4, duration: 0.5, ease: "easeOut" }}>
                            Hey! My name is Praveen Kumar S, and I am now doing my Final Year <span>Bachelor of Engineering in Artificial Intelligence and Data Science</span> at the CMR Institute of Technology. Aspiring <span>Machine Learning Expert</span> has experience with a range of machine learning models, including <span>classification, regression, and convolution neural networks</span>. I am not only proficient in machine learning, but also in front-end programming using <span>HTML, CSS3, JavaScript, React, TailwindCSS, Vite, and Angular</span>.
                        </motion.h1>
                    </div>
                    <div className="experience h-[55%] w-full flex flex-col justify-start gap-4">
                        <motion.h1 className="w-full text-4xl z-[20] font-bold text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, }}>Experience📜</motion.h1>
                        <div className="experience-container w-full h-full flex flex-row gap-5">

                            <div className="experience w-full m-auto h-full text-center justify-center items-center content-center">
                                <p className="flex flex-col gap-2">
                                    <h1 className=" text-lg font-medium">
                                        🔮 Machine Learning with Python (Research based)
                                    </h1>
                                    <div className="w-full">
                                        🚀 Varcons Technologies Pvt. Ltd
                                    </div>
                                    <div className="justify-around flex flex-row">
                                        <div>Feb 2024</div>
                                        <div>March 2024</div>
                                    </div>
                                    <div>
                                        <ul className="text-start">
                                            <li className="flex flex-row"><div>&#128161;</div><div> Explored NLP fundamentals and worked on lip movement to speech translation project.</div></li>
                                            <li className="flex flex-row"><div>&#128161;</div><div> Refined the Frontend Interface using HTML, CSS and Flask for better usability.</div></li>
                                            <li className="flex flex-row"><div>&#128161;</div><div>  Improved datasets by providing 10 videos spoken on different topics in English and documented errors faced by
                                                video transcription.</div></li>
                                        </ul>
                                    </div>
                                    <div className="font-bold">🚨 Skills:</div>
                                    <div>Python, NLP, HTML, CSS, JS, Flask</div>
                                </p>
                            </div>
                            <div className="experience w-full m-auto h-full text-center justify-center items-center content-center">
                                <p className="flex flex-col gap-2">
                                    <h1 className=" text-lg font-medium">
                                        🔮 Machine Learning Intern
                                    </h1>
                                    <div className="w-full">
                                        🚀 testAIng Solutions Pvt Ltd.
                                    </div>
                                    <div className="justify-around flex flex-row">
                                        <div>May 2023</div>
                                        <div>June 2023</div>
                                    </div>
                                    <div>
                                        <ul className="text-start">
                                            <li className="flex flex-row"><div>&#128161;</div><div>I developed three robust classification models using Convolutional Neural Networks for various machine learning applications.</div></li>
                                            <li className="flex flex-row"><div>&#128161;</div><div>I authored four articles sharing my insights on the learning outcomes of CNNs and ChatGPT.</div></li>
                                            <li className="flex flex-row"><div>&#128161;</div><div>I actively contributed to the machine learning community by sharing my research and mentoring others in a Scrum.</div></li>
                                        </ul>
                                    </div>
                                    <div className="font-bold">🚨 Skills:</div>
                                    <div>Python, Keras, Pytorch, Convolution Neural Networks</div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme