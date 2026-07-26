

export async function loadComponent(id, file) {

    const element = document.querySelector(id);

    const response = await fetch(file);

    const html = await response.text();

    element.innerHTML = html;

}
export function themeSwitch() {

    const body = document.body;

    const themeBtn = document.querySelector(".theme-btn");

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "light") {
        body.classList.add("theme");
    }

    themeBtn.addEventListener("click", () => {

        body.classList.toggle("theme");

        if(body.classList.contains("theme")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

    });
}