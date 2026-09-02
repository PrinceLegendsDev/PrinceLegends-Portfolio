import { projects } from "./projects.js";


export function displayProjects() {

    const container = document.querySelector("#projects");

    if (!container) return;

    container.innerHTML = "";


    projects.forEach(project => {

        const card = document.createElement("article");

        card.classList.add("project-card");


        card.innerHTML = `

            <div class="project-image">
                <img 
                    src="${project.image}" 
                    alt="${project.title}"
                    loading="lazy"
                >
            </div>


            <div class="project-content">

                <h2>${project.title}</h2>

                <p>${project.description}</p>


                <ul class="project-features">

                    ${project.features
                        .map(feature => `<li>${feature}</li>`)
                        .join("")}

                </ul>


                <div class="tech-used">

                    ${project.technologies
                        .map(tech => `<span>${tech}</span>`)
                        .join("")}

                </div>


                <div class="project-actions">

                    <a 
                        href="${project.gitHubLink}" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Code
                    </a>

                    <a 
                        href="${project.liveCodeLink}" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Live
                    </a>

                </div>

            </div>
        `;


        container.appendChild(card);

    });

}