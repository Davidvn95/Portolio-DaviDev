import logoJS from "@/assets/Skills/JSlogo.svg";
import logoReact from "@/assets/Skills/ReactLogo.svg";
import logoNext from "@/assets/Skills/NextLogo.svg";
import logoTS from "@/assets/Skills/TSlogo.svg";
import logoRedux from "@/assets/Skills/ReduxLogo.svg";
import logoNode from "@/assets/Skills/NodeLogo.svg";
import logoPosgres from "@/assets/Skills/PostgresLogo";
import logoTailwind from "@/assets/Skills/TailwindLogo.svg";
import logoHtml from "@/assets/Skills/HTMLlogo.svg";
import logoCSS from "@/assets/Skills/CSSlogo.svg";
import logoSequelize from "@/assets/Skills/SequelizeLogo.svg";

export const Links = [
    {
        label: "Home",
        route: "/#home",
    },
    {
        label: "About",
        route: "/#about",
    },
    {
        label: "Skills",
        route: "/#skills",
    },
    {
        label: "Projects",
        route: "/#projects",
    },
    {
        label: "Contact",
        route: "/#contact",
    },
];

export const SocialLinks = [
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/david-de-jes%C3%BAs-vergara-navarro-62169225a/",
        image: "https://cdn-icons-png.flaticon.com/128/3128/3128219.png ",
    },
    {
        name: "Github",
        link: "https://github.com/Davidvn95",
        image: "https://cdn-icons-png.flaticon.com/128/4926/4926624.png",
    },
    {
        name: "Telegram",
        link: "https://t.me/David_Vn95",
        image: "https://cdn-icons-png.flaticon.com/128/4701/4701496.png",
    },
];

export const myProjects = [
    {
        name: "Memory Game",
        image: "/Project-Memory.mp4",
        linkCode: "https://github.com/Davidvn95/Memory_Game",
        linkDemo: "https://memory-game-pink-two.vercel.app/",
    },
];

export const mySkills = [
    { name: "HTML", image: logoHtml },
    { name: "CSS", image: logoCSS },
    { name: "JavaScript", image: logoJS },
    { name: "TypeScript", image: logoTS },
    { name: "React", image: logoReact },
    { name: "Next JS", image: logoNext },
    { name: "Tailwind CSS", image: logoTailwind },
    { name: "Redux", image: logoRedux },
    { name: "Node JS", image: logoNode },
    {
        name: "PostgreSQL",
        image: logoPosgres,
    },
    {
        name: "Sequelize",
        image: logoSequelize,
    },
];
