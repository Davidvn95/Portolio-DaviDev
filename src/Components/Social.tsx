"use client";
import React from "react";
import { SocialLinks } from "@/Utils/Constants";
import Link from "next/link";


interface Props{
    image: string;
    link: string;
    name: string;
}

const Media : React.FC<Props> =({image, link, name}) => {
    return (
        <Link href={link} target="_blank" id={name} className="w-7 h-7 p-1 rounded-full bg-teal-500">
            <img src={image} alt={name} className="w-full h-full rounded-full object-contain" />
        </Link>
    );
}

const Social = () => {
    return (
        <div className="flex flex-col items-center justify-center absolute inset-y-0 left-0 gap-24">
            <div
                className="flex flex-col h-32 justify-center rounded-lg gap-5">
                {SocialLinks.map(({name, link, image})=><Media key={name} image={image} link={link} name={name}/>)}
            </div>
        </div>
    );
};

export default Social;
