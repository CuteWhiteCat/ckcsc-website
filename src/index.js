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
    if (document.body.scrollTop > 0) {
        console.log(1);
        window.scrollTo(0, -1);
        document.body.scrollTop = 0;
    }
    window.scrollTo(0, -1);
    document.body.scrollTop = 0;

    setTimeout(() => {
        document.getElementById("logo").style.opacity = "1";
        document.getElementById("logo").style.transform = "translateY(0px)";
    }, 1000);
    setTimeout(() => {
        document.getElementById("navitems-1").style.opacity = "1";
    }, 1100);
    setTimeout(() => {
        document.getElementById("navitems-2").style.opacity = "1";
    }, 1200);
    setTimeout(() => {
        document.getElementById("navitems-3").style.opacity = "1";
    }, 1300);
    setTimeout(() => {
        document.getElementById("navitems-4").style.opacity = "1";
    }, 1400);
};
