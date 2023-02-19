import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedTextWord from "./Animation/AnimatedTextWord";

const Courses = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-hidden flex flex-col justify-center items-center courses">
            <AnimatedTextWord className="mt-20" text="課程介紹 Courses" />
            <div className="overflow-hidden h-[265vh] grid grid-cols-1 text-center">
                <motion.div
                    className="mt-[2vw] container flex items-center justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.3,
                        delay: 0.3,
                        type: "spring",
                        bounce: 0.3,
                    }}
                    variants={{
                        visible: { opacity: 1, x: 0, y: 0 },
                        hidden: { opacity: 0, x: -100, y: 0 },
                    }}
                >
                    <div className="grid grid-cols-2">
                        <h1>語法班</h1>
                        <h1>alan Orz</h1>
                    </div>
                </motion.div>
                <motion.div
                    className="container flex items-center justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.3,
                        delay: 0.3,
                        type: "spring",
                        bounce: 0.3,
                    }}
                    variants={{
                        visible: { opacity: 1, x: 0, y: 0 },
                        hidden: { opacity: 0, x: 100, y: 0 },
                    }}
                >
                    <div className="grid grid-cols-2">
                        <h1>算法班</h1>
                        <h1>alan Orz</h1>
                    </div>
                </motion.div>
                <motion.div
                    className="container flex items-center justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.3,
                        delay: 0.3,
                        type: "spring",
                        bounce: 0.3,
                    }}
                    variants={{
                        visible: { opacity: 1, x: 0, y: 0 },
                        hidden: { opacity: 0, x: -100, y: 0 },
                    }}
                >
                    <div className="grid grid-cols-2">
                        <h1>多元班</h1>
                        <h1>alan Orz</h1>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Courses;
