
import { projects } from "./projects.js";





export function displayProject() {


    const container = document.querySelector("#projects");

    console.log(container);


    projects.forEach(project => {


        const card = document.createElement("article");


        card.classList.add("project-card");


        card.innerHTML = `

        
        <div class="project-image">

        
        <img src="${project.image}" alt="${project.title}">

        
        </div>

        
        <div class="project-content">
        

        <h2>${project.title}</h2>

        <p>${project.description}</p>
        
        
        <ul>

        
        ${project.features.map(feature => 


            `<li>${feature}</li>`


        ).join("")}
        

        </ul>
        

        <div class="tech-used">

        
        ${project.technologies.map(tech => 


            `<span>${tech}</span>`


        ).join("")}

        </div>


        <div class="project-actions">

         <a href="${project.github}" target="_blank">
                   GitHub
         </a>

        <a href="${project.demo}" target="_blank">
              Live Demo
         </a>

        </div>
        
            </div>

        
        </div>


        `;

        container.appendChild(card);



    })


}
