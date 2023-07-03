import React, { useState } from "react";
import photo from "@/assets/Profile_whitOutBg.png";
import Image from "next/image";


const AboutPage = () => {
    return (
        <section
            id="about"
            className="flex h-full w-full flex-col items-center justify-center py-12 gap-7">
            <h1 className="text-6xl">About me</h1>
            <div className="flex items-center gap-9 flex-wrap">
                <div className="flex items-center justify-center h-60 bg-teal-500 -rotate-12 rounded-[20%]">
                    <div className="w-60 h-52 overflow-hidden rotate-12">
                        <Image
                            src={photo}
                            alt="photo"
                            loading="lazy"
                            className="w-96"
                        />
                    </div>
                </div>
                <span className="max-w-3xl text-xl mt-4">
                    Full stack developer with experience in React,
                    Express, PostgreSQL, Tailwind, among other technologies on the market. I
                    love working in a team and I also have experience in individual work. My
                    background in the commercial area has allowed me to develop listening and
                    understanding skills to understand the needs of clients and the work team.
                    I consider myself a communicative person, capable of managing my emotions
                    in moments of tension and skillful in solving problems.
                </span>
            </div>
        </section>
    );
};

export default AboutPage;
