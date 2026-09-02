

export function setNavigation() {

    const menuBtn = document.querySelector(".menu-btn");
    const closeMenu = document.querySelector(".close-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (!menuBtn || !closeMenu || !navMenu) return;

    const openMenu = () => {
        navMenu.classList.add("open");
        document.body.classList.add("no-scroll");
    };

    const closeNavigation = () => {
        navMenu.classList.remove("open");
        document.body.classList.remove("no-scroll");
    };

    menuBtn.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", closeNavigation);
}