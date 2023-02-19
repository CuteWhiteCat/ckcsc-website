import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Events from "./components/Events";
import Sources from "./components/Sources";
import Footer from "./components/Footer/Footer";

import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <div>
            <Navbar />
            <AnimatePresence mode="wait" initial={true}>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/sources" element={<Sources />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default App;
