import { loadComponent } from "./component.js";
import { setNavigation } from "./navigation.js";
import { displayProject } from "./project-render.js"


async function startApp(){

    await loadComponent(
        "#header",
        "components/nav.html"
    );


    await loadComponent(
        "#footer",
        "components/footer.html"
    );


    setNavigation();

    displayProject()

}


startApp();