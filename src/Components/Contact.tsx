import React from "react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex min-h-96 w-full flex-col items-center justify-center py-12 gap-7">
            <h1 className="text-6xl">Contact me</h1>
            <form
                action=""
                className="flex flex-col gap-7 shadow-sm shadow-slate-500 p-4 rounded-lg">
                <div className="flex flex-col border rounded-lg p-2 gap-1 w-80 px-4">
                    <label htmlFor="name" className="-mt-6 bg-azul-claro w-fit p-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="write here your message"
                        className="bg-transparent focus:outline-0"
                    />
                </div>
                <div className="flex flex-col border rounded-lg p-2 gap-1 w-80 px-4">
                    <label htmlFor="email" className="-mt-6 bg-azul-claro w-fit p-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="write here your message"
                        className="bg-transparent focus:outline-0 aut"
                    />
                </div>
                <div className="flex flex-col border rounded-lg p-2 gap-1 w-80 h-56 px-4">
                    <label htmlFor="body" className="-mt-6 bg-azul-claro w-fit p-1">
                        Message
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        placeholder="write here your message"
                        className="bg-transparent h-full w-full items-start justify-start focus:outline-0"
                    />
                </div>
            </form>
        </section>
    );
};

export default Contact;
