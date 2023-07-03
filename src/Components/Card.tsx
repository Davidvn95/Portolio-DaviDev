import React from "react";
import Link from "next/link";

interface Props {
    name: string;
    image: string;
    linkCode: string;
    linkDemo: string;
}

const Card: React.FC<Props> = ({ name, image, linkCode, linkDemo }) => {
    return (
        <div className="flex flex-col items-center justify-center border rounded-xl gap-3 pb-2">
            <video className="w-72 rounded-t-xl" autoPlay loop muted src={image} />
            <h2 className="text-2xl">{name}</h2>
            <div className="flex gap-12">
                <Link href={linkCode} target="blank">
                    <button className="flex items-center gap-2 bg-amber-100/[.3] px-2 rounded-md">
                        <img
                            src={"https://cdn-icons-png.flaticon.com/128/59/59118.png"}
                            alt="github.ico"
                            width={20}
                            height={20}
                            loading="lazy"
                        />
                        code
                    </button>
                </Link>
                <Link href={linkDemo} target="blank">
                    <button className="flex items-center gap-2 bg-amber-100/[.3] px-2 rounded-md">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/3059/3059430.png"
                            alt=""
                            width={20}
                            height={20}
                        />
                        visit
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
