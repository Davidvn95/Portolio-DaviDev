import HomePage from "@/Components/Home";
import AboutPage from "@/Components/About";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Customize from "@/Components/Customize";
import Contact from "@/Components/Contact";

export default function Home() {
    return (
        <main className="flex flex-col items-end">
            <Customize />
            <HomePage />
            <hr className="border-slate-50/[.1] w-[90%] m-auto" />
            <AboutPage />
            <hr className="border-slate-50/[.1] w-[90%] m-auto" />
            <Skills />
            <hr className="border-slate-50/[.1] w-[90%] m-auto" />
            <Projects />
            <hr className="border-slate-50/[.1] w-[90%] m-auto" />
            <Contact />
        </main>
    );
}
