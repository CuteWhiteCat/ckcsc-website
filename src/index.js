import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// Navbar Animation
window.onload = function () {
    setTimeout(() => {
        document.getElementById("logo").style.opacity = "1";
        document.getElementById("logo").style.transform = "translateY(0px)";
    }, 1200);
    setTimeout(() => {
        document.getElementById("navitems-1").style.opacity = "1";
    }, 1300);
    setTimeout(() => {
        document.getElementById("navitems-2").style.opacity = "1";
    }, 1400);
    setTimeout(() => {
        document.getElementById("navitems-3").style.opacity = "1";
    }, 1500);
    setTimeout(() => {
        document.getElementById("navitems-4").style.opacity = "1";
    }, 1600);
};
