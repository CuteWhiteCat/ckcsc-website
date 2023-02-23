import React, { useEffect } from "react";
import { easeInOut, motion } from "framer-motion";

const variants = {
    initial: { filter: "blur(0px)" },
    animate: { filter: "blur(4px)" },
    exit: { filter: "blur(0px)" },
};

const Hero = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2, type: easeInOut }}
                id="hero_bg"
                className="background-filter bg-cover bg-center mt-[24px]"
            ></motion.div>
            <div id="hero_title">
                <h1 className="leading-relaxed text-2xl max-w-[300px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center font-['PingFangUltraLight'] text-white xl:text-[2.8rem] xl:max-w-[900px]">
                    ChengKong Computer Study Club
                    <span className="leading-relaxed mt-2 text-[20px] max-w-[300px] mx-auto text-center flex flex-col justify-center font-['PingFangThin'] xl:text-[1.5rem] xl:max-w-[900px] xl:mt-0 xl:tracking-widest">
                        成功高中電子計算機研習社
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default Hero;
