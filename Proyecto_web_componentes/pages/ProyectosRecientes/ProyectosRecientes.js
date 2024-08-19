import {cleanPage} from "../../utils/cleanPage";
import data from "../../data/data";
import { EnlaceRedes } from "../../utils/EnlaceRedes";



export const ProyectosRecientes = ()=>{
const main = document.querySelector("main");
cleanPage(main);
const div = document.createElement("div");
    div.classList.add("div-container-tarjetas");
    const ul = document.createElement("ul");
    ul.classList.add("container-tarjetas");
    data.projects.forEach(element=>{
        const divtitle = document.createElement("div");
        divtitle.classList.add("container-divtitle");
        divtitle.innerHTML = `
        <div class="title-card" id="show-tarjetas">
        <span>${element.title}</span>
        <span class="fas fa-angle-down"></span>
        <span class="fas fa-angle-up hidden-span"></span>
        </div>
        `;
        const li = document.createElement("li");
        li.classList.add("tarjeta","tarjeta-cursos","tarjeta-hidden");
        li.innerHTML = `
        <div class="container-descripcion-cursos">
        <p><span class="title-Study">Descripción:</span> ${element.description}</p>
        <div class="Contacto-Redes">
    ${EnlaceRedes("./icons/github.png","Github", element.linkGithub)}
    ${EnlaceRedes("./icons/link.png","Link a página",element.preview)}
    </div>
        </div>
        
        <div class="container-img-cursos">
        <img src="${element.imgProject}" alt="${element.title}" class="img-cursos">
        </div>

        `;
        showTarjetas(divtitle, li);
        ul.appendChild(divtitle);
        ul.appendChild(li);
    })
    div.appendChild(ul);
    main.appendChild(div);

};

const showTarjetas = (divtitle, li)=>{
    divtitle.addEventListener("click", () => {
        li.classList.toggle("tarjeta-hidden");
        const span = divtitle.querySelector(".fa-angle-down");
    span.classList.toggle("fa-angle-up");
        });
}