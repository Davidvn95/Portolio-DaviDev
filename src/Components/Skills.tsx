import React from "react";
import { mySkills } from "@/Utils/Constants";
import Image from "next/image";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex min-h-96 w-full flex-col items-center justify-center py-12 gap-7">
            <h1 className="text-6xl">My Skills</h1>
            <div className="grid grid-cols-3 gap-7 gap-x-14 px-12 w-full items-center justify-center">
          {mySkills.map((skill) => {
                  // console.log(typeof skill.image);
                  
                    return (
                        <div className="flex items-center justify-around w-full h-auto p-1 border rounded-xl">
                            {typeof skill.image !== "string" ? (
                                <Image
                                    src={skill.image}
                                    alt={skill.name}
                                    loading="lazy"
                                    className="rounded-2xl w-20 h-20 "
                                />
                            ) : (
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="rounded-2xl w-20 h-20 "
                                />
                            )}
                            <span className="text-2xl font-semibold">{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
