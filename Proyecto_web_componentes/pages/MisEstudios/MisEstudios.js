import "./MisEstudios.css";
import {cleanPage} from "../../utils/cleanPage";
import data from "../../data/data";


    export const MisEstudios = ()=>{
    const main = document.querySelector("main");
    cleanPage(main);
    renderBtn(main);
    const div = document.createElement("div");
    div.classList.add("div-container-tarjetas");
    const ul = document.createElement("ul");
    ul.classList.add("container-tarjetas");
    
    data.education.study.forEach(element =>{
        const divtitle = document.createElement("div");
        divtitle.classList.add("container-divtitle");
        divtitle.innerHTML = `
        <div class="title-card" id="show-tarjetas">
        <span>${element.degree}</span>
        <span class="fas fa-angle-down"></span>
        <span class="fas fa-angle-up hidden-span"></span>
        </div>
        `;
        const li = document.createElement("li");
        li.classList.add("tarjeta","tarjeta-Estudios","tarjeta-hidden");
        li.innerHTML =`
        <p><span class="title-Study">Universidad:</span> ${element.university}</p>
        <p><span class="title-Study">Ciudad:</span> ${element.city}</p>
        <p><span class="title-Study">Año de Graduación:</span> ${element.graduationYear}</p>

        `;
        showTarjetas(divtitle, li);
        ul.appendChild(divtitle);
        ul.appendChild(li);
       
    }) 

    div.appendChild(ul);
    main.appendChild(div);

    const btnMicurso = document.getElementById("btn-MisCursos");
    btnMicurso.addEventListener("click",()=>{
    MisCursos();  
});

   

}

    const MisCursos = ()=>{
    const main = document.querySelector("main");
    cleanPage(main);
    renderBtn(main);
    const div = document.createElement("div");
    div.classList.add("div-container-tarjetas");
    const ul = document.createElement("ul");
    ul.classList.add("container-tarjetas");
    data.education.relevantCourses.forEach(element=>{
        const divtitle = document.createElement("div");
        divtitle.classList.add("container-divtitle");
        divtitle.innerHTML = `
        <div class="title-card" id="show-tarjetas">
        <span>${element.Title}</span>
        <span class="fas fa-angle-down"></span>
        <span class="fas fa-angle-up hidden-span"></span>
        </div>
        `;
        const li = document.createElement("li");
        li.classList.add("tarjeta","tarjeta-cursos","tarjeta-hidden");
        li.innerHTML = `
        <div class="container-descripcion-cursos">
        <p><span class="title-Study">Instituto:</span> ${element.Institute}</p>
        <p><span class="title-Study">Año de Graduación:</span> ${element.graduationYear}</p>
        <p><span class="title-Study">Tecnologías:</span> ${element.Tecnology.join("- ")}</p>
        </div>
        <div class="container-img-cursos">
        <img src="${element.imgTitle}" alt="${element.Title}" class="img-cursos">
        </div>

        `;
        showTarjetas(divtitle, li);
        ul.appendChild(divtitle);
        ul.appendChild(li);
    })
    div.appendChild(ul);
    main.appendChild(div);

    const btnMisEstudios = document.getElementById("btn-MisEstudios");
    btnMisEstudios.addEventListener("click",()=>{
        MisEstudios();  
    })
    

}

const renderBtn = ()=>{
    const main = document.querySelector("main");
    main.innerHTML =`
    <div class="container-btnStudy">
    <button class="btn-study" id="btn-MisEstudios">Mis Estudios</button>
    <button class="btn-study" id="btn-MisCursos">Mis Cursos</button>
    </div>
    `
}

const showTarjetas = (divtitle, li)=>{
    divtitle.addEventListener("click", () => {
        li.classList.toggle("tarjeta-hidden");
        const span = divtitle.querySelector(".fa-angle-down");
    span.classList.toggle("fa-angle-up");
        });
}


