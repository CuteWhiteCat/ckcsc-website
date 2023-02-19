import React from 'react'
import { motion } from 'framer-motion'

const HoverUnderline = ({ children }) => {
    const variants = {
        hidden: {
            textDecoration: "none"
        },
        hover: {
            textDecoration: "underline"
        }
    };

    return (
        <motion.div variants={variants} initial="hidden" whileHover="hover">
            {children}
        </motion.div>
    )
}

export default HoverUnderline