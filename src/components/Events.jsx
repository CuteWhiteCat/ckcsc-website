import React, { useEffect } from "react";
import AnimatedTextWord from "./Animation/AnimatedTextWord";

const Events = () => {
    window.onload = function () {
        if (document.body.scrollTop > 0) {
            console.log(1);
            window.scrollTo(0, -1);
            document.body.scrollTop = 0;
        }
        window.scrollTo(0, -1);
        document.body.scrollTop = 0;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-hidden flex flex-col justify-center items-center about-us">
            <AnimatedTextWord className="mt-20" text="活動介紹 Events" />
            <div className="sources-container"></div>
        </div>
    );
};

export default Events;
