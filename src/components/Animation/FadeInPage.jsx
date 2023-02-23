import React from "react";
import { motion } from "framer-motion";

const SlideInPage = ({ children }) => {
    const variants = {
        initial: { opacity: 0, x: 0, y: 30 },
        animate: { opacity: 1, x: 0, y: 0 },
    };

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 2.0, type: "spring", delay: 0.8, damping: 15 }}
        >
            <>{children}</>
        </motion.div>
    );
};

export default SlideInPage;
