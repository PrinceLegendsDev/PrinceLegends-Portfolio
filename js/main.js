import { loadComponent } from "./component.js";
import { setNavigation } from "./navigation.js";
import { displayProject } from "./project-render.js"
import { themeSwitch } from "./component.js"


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

    displayProject()

}


startApp();