import React from "react";
import Image from "next/image";
import profile from "@/assets/Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useChangePath from "@/Hooks/useChangePath";

const HomePage = () => {

    return (
        <section
            id="home"
            className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image src={profile} alt="profile" className="rounded-full w-64 h-64" />
            <div className="items-start">
                <div className="flex items-center">
                    <h1 className="font-roboto text-4xl overflow-hidden h-12 animate-type whitespace-nowrap">
                        Hi!, I'm David Vergara
                    </h1>
                    <span className="inline-block w-1 h-10 ml-2 bg-white animate-cursor"></span>
                </div>
                <span className="font-roboto text-2xl font-extralight text-orange-text">
                    A Full Stack Developer
                </span>
            </div>
            <Link href="/#about">
                <div className="absolute bottom-0 inset-x-1/2 animate-bounce -ml-6">
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="w-14 text-white opacity-20 -mb-8"
                    />
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="w-14 text-white opacity-40"
                    />
                </div>
            </Link>
        </section>
    );
};

export default HomePage;
