/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "azul-oscuro": "#000012",
                "azul-claro": "#010020",
                "azul-profile": "#010032",
                "orange-text": "#F28504",
                "purple-bg": "#1D0636",
                "gold-text": "#FFC300",
                "green-text": "#00FF7F",
            },
            fontFamily: {
                satisfy: ["Satisfy", "cursive"],
                roboto: ["Roboto", "monospace"],
            },
        },
    },
    plugins: [],
};
