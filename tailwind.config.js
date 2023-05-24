/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "azul-oscuro": "#000009",
                "azul-claro": "#010025",
                "orange-text": "#F28504",
            },
            fontFamily: {
                satisfy: ["Satisfy", "cursive"],
                roboto: ["Roboto", "monospace"],
            },
        },
    },
    plugins: [],
};
