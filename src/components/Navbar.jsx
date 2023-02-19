import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

import Navbar_Icon from "../Images/Navbar_Icon.png";

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div id="navbar" className="sticky top-0 w-full bg-gray-900 z-50">
            <div className="sticky flex justify-between items-center h-16 max-w-[1024px] mx-auto px-4 text-white bg-gray-900 z-50">
                <Link id="logo" to="/">
                    <motion.div
                        initial="initial"
                        whileHover="hover"
                        animate="initial"
                        className="flex items-center"
                    >
                        <motion.img
                            src={Navbar_Icon}
                            alt="Navbar_Icon"
                            width="40"
                            className="mb-[2px]"
                            variants={{
                                initial: {
                                    rotate: 0,
                                },
                                hover: {
                                    rotate: -15,
                                },
                            }}
                            transition={{
                                type: "spring",
                                damping: 20,
                            }}
                        ></motion.img>
                        <motion.h1
                            className="ml-[3px] mt-[5px] w-full font-semibold text-3xl font-['Baloo_Da_2']  text-orange-200"
                            variants={{
                                initial: {
                                    scale: 1,
                                },
                                hover: {
                                    scale: 1.05,
                                },
                            }}
                            transition={{
                                type: "spring",
                                bounce: 0.3,
                                damping: 10,
                            }}
                        >
                            CKCSC
                        </motion.h1>
                    </motion.div>
                </Link>
                <ul id="navitems" className="hidden xl:flex">
                    <li
                        id="navitems-1"
                        className="p-4 font-['PingFangRegular'] font-normal text-[1rem] tracking-wider"
                    >
                        <NavLink to="/about/">關於</NavLink>
                    </li>
                    <li
                        id="navitems-2"
                        className="p-4 font-['PingFangRegular'] font-normal text-[1rem] tracking-wider"
                    >
                        <NavLink to="/courses/">課程</NavLink>
                    </li>
                    <li
                        id="navitems-3"
                        className="navitems p-4 font-['PingFangRegular'] font-normal text-[1rem] tracking-wider"
                    >
                        <NavLink to="/events/">活動</NavLink>
                    </li>
                    <li
                        id="navitems-4"
                        className="navitems p-4 font-['PingFangLight'] font-normal text-[1rem] tracking-wider"
                    >
                        <NavLink to="/sources/">Source</NavLink>
                    </li>
                </ul>
                <div
                    className={
                        nav
                            ? "xl:hidden fixed right-[-90%] align-end text-right top-0 w-[40%] h-full border-l border-l-gray-900 bg-slate-800 ease-in-out duration-300"
                            : "xl:hidden fixed align-end text-right right-[-2%] top-0 w-[40%] h-full border-l border-l-gray-900 bg-slate-800 ease-in-out duration-500"
                    }
                >
                    <ul className="pt-28 p-4">
                        <li className="leading-6 font-['PingFangRegular'] text-[1.1rem] p-4 pt-6 tracking-wider">
                            <Link to="/about/">關於</Link>
                        </li>
                        <li className="leading-6 font-['PingFangRegular'] text-[1.1rem] p-4 pt-6 tracking-wider">
                            <Link to="/courses/">課程</Link>
                        </li>
                        <li className="leading-6 font-['PingFangRegular'] text-[1.1rem] p-4 pt-6 tracking-wider">
                            <Link to="/events/">活動</Link>
                        </li>
                        <li className="leading-6 font-['PingFangLight'] text-[1.1rem] p-4 pt-6 tracking-wide">
                            <Link to="/sources/">Source</Link>
                        </li>
                    </ul>
                </div>
                <div onClick={handleNav} className="block xl:hidden">
                    {nav ? (
                        <AiOutlineMenu className="relative mr-3" size={20} />
                    ) : (
                        <AiOutlineClose className="relative mr-3" size={20} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
