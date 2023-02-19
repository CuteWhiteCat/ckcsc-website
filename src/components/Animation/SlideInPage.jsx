import React from "react";
import { motion } from "framer-motion";

const SlideInPage = ({ children }) => {
    const variants = {
        initial: { opacity: 0, x: -50, y: 0 },
        animate: { opacity: 1, x: 0, y: 0 },
    };

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.8, type: "spring", delay: 0.5 }}
            style={{ position: "relative" }}
        >
            <>{children}</>
        </motion.div>
    );
};

export default SlideInPage;
