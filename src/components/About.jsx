import React, { useEffect } from "react";
import { motion } from "framer-motion";

import AnimatedTextWord from "./Animation/AnimatedTextWord";
import SlideInPage from "./Animation/SlideInPage";
import Bold from "./Bold";

import Icon from "../Images/Icon.png";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-hidden flex flex-col justify-center items-center about-us">
            <AnimatedTextWord text="關於我們 About Us" />
            <SlideInPage>
                <div className="dark-box-shadow grid grid-cols-1 xl:grid-cols-2 xl:gap-5">
                    <img className="icon-img" alt="icon" src={Icon}></img>
                    <span className="w-[30vw]  text-base hidden xl:text-xl xl:block xl:leading-relaxed">
                        <span className="text-3xl tracking-wider font-[PingFangRegular]">
                            成功高中電子計算機研習社35屆
                        </span>
                        <br />
                        <span className="font-[PingFangLight]">
                            ChengKong Computer Study Club 35th
                        </span>
                        <br />
                        <br />
                        我們是一個成功高中內的資訊社團 在 <Bold>C++</Bold>、
                        <Bold>Python</Bold>、<Bold>JavaScript</Bold>、
                        <Bold>Unity</Bold> 或 <Bold>Arduino </Bold>等都有所涉略
                        同時我們也有豐富的課程與活動讓學弟妹參與 讓你不只會打
                        code 還能交到志同道合的朋友
                        <br />
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 800,
                                damping: 20,
                                duration: 0.001,
                            }}
                            className="mt-5 mb-5 button-linear tracking-widest"
                        >
                            <a
                                href="//reurl.cc/GXM5Xd"
                                target="_blank"
                                rel="noreferrer"
                            >
                                了解更多
                            </a>
                        </motion.button>
                        <br />
                        <span className="text-2xl font-[PingFangRegular] tracking-wide text-blue-100">
                            學弟加電研，電研歡迎你!
                        </span>
                    </span>
                    <span className="mb-10 block xl:hidden">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            transition={{
                                type: "spring",
                                stiffness: 1000,
                                damping: 50,
                            }}
                            className="mt-5 -mb-5 button-linear tracking-widest"
                        >
                            <a
                                href="//reurl.cc/GXM5Xd"
                                target="_blank"
                                rel="noreferrer"
                            >
                                IG介紹
                            </a>
                        </motion.button>
                        <br />
                    </span>
                </div>
            </SlideInPage>
        </div>
    );
};

export default About;
