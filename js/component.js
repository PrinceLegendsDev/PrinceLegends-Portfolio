

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

export function setupContactForm() {

    const form = document.querySelector("#form");

    if (!form) return;

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        const whatsappMessage = `
Hello TECH LEGENDS,

I came across your portfolio and would like to discuss a project.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `.trim();

        const phoneNumber = "260775544529";

        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");
    });
}