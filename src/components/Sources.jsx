import React, { useEffect } from "react";

import AnimatedTextWord from "./Animation/AnimatedTextWord";
import FadeInPage from "./Animation/FadeInPage"

const Sources = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-hidden flex flex-col justify-center items-center about-us">
            <AnimatedTextWord className="mt-20" text="相關資源 Sources" />
            <FadeInPage>
                <div className="sources-container-1 xl:sources-container">
                    <h3 className="sources-title underline underline-offset-8 decoration-[#525252] text-xl font-[PingFangMedium] tracking-wider mb-5 xl:mb-3">課堂簡報</h3>
                    <span className="sources-title text-[20px] ml-1 xl:ml-4">
                        <a
                            className="link"
                            href="https://slides.com/patrickh/c"
                            target="_blank"
                            rel="noreferrer" >C++ 語法
                        </a>
                    </span>
                    <span className="sources-title text-[20px] ml-1 xl:ml-4">
                        <a
                            className="link"
                            href="https://slides.com/patrickh/c"
                            target="_blank"
                            rel="noreferrer" >C++ 語法
                        </a>
                    </span>
                </div>
            </FadeInPage>
        </div>
    );
};

export default Sources;