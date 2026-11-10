import { projects } from "./projects.js";
import { industry } from "./industry.js";


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


export function displayIndustry () {

    const industryBox = document.querySelector(".industry-box");

    if(!industryBox) return;

    industryBox.innerHTML = "";

    industry.forEach(industry => {

        const box = document.createElement("article");
        box.classList.add("industry-wrapper");

        box.innerHTML =`
        <div class="industry-image">

          <img src="${industry.image}" 
          alt="${industry.name}">

        </div>
        
        <div class="industry-description">
    
        <h2>${industry.name}</h2>
        <p>${industry.description}</p>

        <a href="${industry.link}" target="_blank">
        talk to us
        </a>

        </div>
        `;

        industryBox.appendChild(box);

    });

}