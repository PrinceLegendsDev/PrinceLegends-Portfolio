import { loadComponent } from "./component.js";
import { setNavigation } from "./navigation.js";
import { displayProjects } from "./project-render.js"
import { themeSwitch, setupContactForm } from "./component.js"


async function startApp(){

    await loadComponent(
        "#header",
        "components/nav.html"
    );

    themeSwitch()

    await loadComponent(
        "#footer",
        "components/footer.html"
    );


    setNavigation();

    displayProjects();

    setupContactForm();

}


startApp();