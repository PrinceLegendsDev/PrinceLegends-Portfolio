

export async function loadComponent(id, file) {

    const element = document.querySelector(id);

    const response = await fetch(file);

    const html = await response.text();

    element.innerHTML = html;

}
