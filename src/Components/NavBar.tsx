"use client";

import React, { useEffect, useState } from "react";
import { Links } from "@/Utils/Constants";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import LogoSvg from "./LogoSvg";

export function NavBar() {
    const [path, setPath] = useState<string>(() => window.location.hash || "#home");
    
    useEffect(() => {
        function handleScroll() {
            const currentScrollPos = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const percentaje = Math.round((currentScrollPos / maxScroll) * 100);
            // console.log(percentaje);
            
            if (percentaje >= 95) {
                setPath("#contact");
                window.history.replaceState(null, "", "#contact");
            }
            else if (percentaje >= 80) {
                setPath("#projects");
                window.history.replaceState(null, "", "#projects");
            }
            else if (percentaje >= 45) {
                setPath("#skills");
                window.history.replaceState(null, "", "#skills");
            }
            else if (percentaje >= 18) {
                setPath("#about");
                window.history.replaceState(null, "", "#about");
            }
            else {
                setPath("#home");
                window.history.replaceState(null, "", "#home");
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            id="navBar"
            className="grid items-center bg-azul-claro z-50 inset-x-0 fixed top-0">
            <div className="flex justify-between w-full max-w-7xl p-4 px-10 m-auto">
                {/* <Image src={Logo} alt="Logo" className="object-fill w-48 fill-current text-red-600"/> */}
                <LogoSvg className="bject-fill w-48" fillColor="white" />

                <ul className="font-extralight text-lg flex items-end justify-between gap-14">
                    {Links.map(({ label, route }) => {
                        const className = `/${path}` === route && "border-b-4 border-teal-500";
                        return (
                            <Link href={route} key={route}>
                                <li
                                    id={label}
                                    key={route}
                                    className={`${className} hover:text-teal-500 p-1`}
                                    onClick={() => setPath(route.slice(1))}>
                                    {label}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
}
