

export async function loadComponent(id, file) {

    const element = document.querySelector(id);

    const response = await fetch(file);

    const html = await response.text();

    element.innerHTML = html;

}
export function themeSwitch() {

    const themeBtn = document.querySelector(".theme-btn");
    const body = document.body;

    themeBtn.addEventListener("click", () => {

        body.classList.toggle("theme");
    })
}