import React from "react";
import Image from "next/image";
import profile from "@/assets/Profile_whitOutBg.png";
import Link from "next/link";
import Social from "./Social";

const HomePage = () => {
    return (
        <section
            id="home"
            className="grid w-full h-screen relative">
            <div className="flex flex-row-reverse flex-wrap items-center justify-center gap-14">
                <Social />
                <div id="profile" className="rounded-full w-80 overflow-hidden bg-teal-500">
                    <Image src={profile} alt="profile" loading="lazy" className="w-full object-cover -mt-2" />
                </div>
                <div className="items-start max-w-2xl">
                    <h1 className="text-5xl mb-3">Hi!, 👋</h1>
                    <div className="flex items-center">
                        <h1 className="text-5xl overflow-hidden h-16 animate-type whitespace-nowrap">
                            I'm David Vergara
                        </h1>
                        <span className="inline-block w-1 h-9 ml-2 bg-white animate-cursor"></span>
                    </div>
                    <span id="profession" className="text-2xl font-extralight text-teal-500">
                        Full Stack Developer
                    </span>
                    <p className="mt-7 text-xl max-w-xl">
                        Passionate about creating high quality websites that empower businesses
                        and improve the lives of society.
                    </p>
                    <div className=" flex mt-7 gap-7">
                        <Link href="https://drive.google.com/file/d/14qeIDbJjlHVauydswWv3TV7u7OR4ZTzd/view?usp=share_link">
                            <button id="downloadButton" className="grid place-items-center gap-4 bg-teal-500 rounded-md px-4 py-2 font-bold">
                                <span>Download CV</span>
                            </button>
                        </Link>
                        <Link href="https://drive.google.com/file/d/14qeIDbJjlHVauydswWv3TV7u7OR4ZTzd/view?usp=share_link">
                            <button id="talkButton" className="grid place-items-center gap-4 bg-teal-500 rounded-md px-4 py-2 font-bold">
                                <span>let's talk</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
