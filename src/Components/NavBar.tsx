"use client";

import React, { useEffect, useState } from "react";
import { Links } from "@/Utils/Constants";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/assets/Logo.svg'

export function NavBar() {

    const[path, setPath] = useState<string>("")

    useEffect(() => { 
        if(path === "") setPath("#home")
        
    },[])

    return (
        <header className="flex items-end p-4 justify-between fixed inset-x-0">
            <Image src={Logo} alt="Logo" />

            <ul className="text-white font-roboto font-extralight text-lg flex items-end justify-between gap-14">
                {Links.map(({ label, route }) => {
                    const className = `/${path}` === route && "border-b-2 border-orange-text";
                    return (
                        <li key={route} className={`${className}`} onClick={()=>setPath(route.slice(1))}>
                            <Link href={route}>{label}</Link>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}
