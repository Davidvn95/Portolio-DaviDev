"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMoon } from "@fortawesome/free-solid-svg-icons";
import { colorTheme } from "@/features/handleColor";

const Customize = () => {
    const [color, setColor] = useState<string>("teal-500");

    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleColorTheme = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const newColor = event.currentTarget.id;
        setColor(newColor);
        colorTheme(color, newColor)
    }
    return (
        <div className="fixed flex flex-row-reverse top-24 z-50 gap-4">
            <div className="flex flex-col gap-4">
                <div className="w-5 h-5 flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                        icon={faGear}
                        className={`text-${color} cursor-pointer animate-spin`}
                        onClick={handleClick}
                    />
                </div>
            </div>
            {open && (<div className="grid grid-cols-3 gap-2 items-center justify-center border-r border-r-slate-300/[.2] px-3">
                <div onClick={handleColorTheme} id="teal-500" className="rounded-l-full rounded-b-full -rotate-45 text-white bg-teal-500 w-4 h-4 cursor-pointer">'</div>
                <div onClick={handleColorTheme} id="orange-500" className="rounded-l-full rounded-b-full -rotate-45 text-white bg-orange-500 w-4 h-4 cursor-pointer">'</div>
                <div onClick={handleColorTheme} id="red-500" className="rounded-l-full rounded-b-full -rotate-45 text-white bg-red-500 w-4 h-4 cursor-pointer">'</div>
                <div onClick={handleColorTheme} id="lime-500" className="rounded-l-full rounded-b-full -rotate-45 text-white bg-lime-500 w-4 h-4 cursor-pointer">'</div>
                <div onClick={handleColorTheme} id="indigo-500" className="rounded-l-full rounded-b-full -rotate-45 text-white bg-indigo-500 w-4 h-4 cursor-pointer">'</div>
                <div onClick={handleColorTheme} id="violet-700" className="rounded-l-full rounded-b-full -rotate-45 text-white bg-violet-700 w-4 h-4 cursor-pointer">'</div>
            </div>)}
        </div>
    );
};

export default Customize;
