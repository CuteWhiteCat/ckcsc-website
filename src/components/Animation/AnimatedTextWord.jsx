import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
    const words = text.split(" ");

    const container_variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                duration: 1.0,
                staggerChildren: 0.12,
                delayChildren: 0.04 * i,
            },
        }),
    };

    const child_variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 2.0,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                duration: 2.0,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            variants={container_variants}
            className="flex overflow-hidden"
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child_variants}
                    className="mr-2 text-center text-xl font-normal tracking-wider xl:text-3xl xl:mr-4"
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextWord;
