export function colorTheme(currentColor: string, newColor: string) {

    // Section home
    const profile = document.getElementById('profile');
    const profession = document.getElementById('profession');
    const downloadButton = document.getElementById("downloadButton")
    const talkButton = document.getElementById("talkButton")

    // Section social
    const Linkedin = document.getElementById("Linkedin")
    const Github = document.getElementById("Github")
    const Telegram = document.getElementById("Telegram")

    // Section Nav
    const Home = document.getElementById("Home")
    const About = document.getElementById("About")
    const Projects = document.getElementById("Projects")
    const Contact = document.getElementById("Contact")
    const Skills = document.getElementById("Skills")

    // Section About

    // Section projects

    profile?.classList.toggle(`bg-${currentColor}`)
    profile?.classList.toggle(`bg-${newColor}`)
    profession?.classList.toggle(`text-${currentColor}`)
    profession?.classList.toggle(`text-${newColor}`)
    downloadButton?.classList.toggle(`bg-${currentColor}`)
    downloadButton?.classList.toggle(`bg-${newColor}`)
    talkButton?.classList.toggle(`bg-${currentColor}`)
    talkButton?.classList.toggle(`bg-${newColor}`)

    Linkedin?.classList.toggle(`bg-${currentColor}`)
    Linkedin?.classList.toggle(`bg-${newColor}`)
    Github?.classList.toggle(`bg-${currentColor}`)
    Github?.classList.toggle(`bg-${newColor}`)
    Telegram?.classList.toggle(`bg-${currentColor}`)
    Telegram?.classList.toggle(`bg-${newColor}`)

    // Home?.classList.toggle(`border-${currentColor}`)
    // Home?.classList.toggle(`border-${newColor}`)
    // Home?.classList.toggle(`hover:text-${currentColor}`)
    // Home?.classList.toggle(`Hover:text-${newColor}`)
    // About?.classList.toggle(`bg-${currentColor}`)
}

