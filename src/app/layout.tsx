import "./globals.css";
import { NavBar } from "@/Components/NavBar";

export const metadata = {
    title: "Davidev Portfolio",
    description: "David Vergara's professional web portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                />
                <link rel="icon" href="/faviconOrange.ico" sizes="any" />
            </head>
            <body className="w-full max-w-7xl mx-auto px-8 text-white bg-azul-claro font-roboto">
                <NavBar />
                {/* <Customize /> */}
                {children}
            </body>
        </html>
    );
}
