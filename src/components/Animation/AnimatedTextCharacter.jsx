import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text }) => {
    const letters = Array.from(text);

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
            x: 0,
            transition: {
                type: "spring",
                duration: 2.0,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
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
            whileInView="visible"
        >
            {letters.map((letter, index) => (
                <motion.span
                    variants={child_variants}
                    className="text-center font-normal tracking-wider"
                    key={index}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextCharacter;
