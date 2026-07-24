

export function setNavigation() {

    const menuBtn = document.querySelector(".menu-btn")
    const CloseMenu = document.querySelector(".close-btn")
    const navMenu = document.querySelector(".nav-menu")

    menuBtn.addEventListener("click", () => {
        navMenu.classList.add("open")
        document.body.classList.add("no-scroll");
    })

    CloseMenu.addEventListener("click", () => {
        navMenu.classList.remove("open")
        document.body.classList.remove("no-scroll");
    })
}