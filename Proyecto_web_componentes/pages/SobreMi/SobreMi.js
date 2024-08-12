import "./SobreMi.css";
import {cleanPage} from "../../utils/cleanPage"

export const SobreMi = ()=>{
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML= 
    `


<div class="container-SobreMi">
<div class="mi-descripcion">
<h2>Hola, Bienvenidos!!!</h2>
<h1>¡Soy Deiby Gorrin!</h1>

<p>Un apasionado del diseño web y del desarrollo de aplicaciones multiplataforma (DAM).A mis 32 años, he decidido dar un giro significativo en mi carrera profesional y aventurarme en el fascinante mundo de la programación.</p>
<p>
Actualmente, me encuentro trabajando en el sector de la hostelería, una industria que me ha enseñado la importancia de la atención al detalle, la gestión del tiempo y el servicio al cliente. Sin embargo, mi verdadera pasión siempre ha sido la tecnología y el diseño. Esta pasión me ha llevado a iniciar estudios en Diseño Web y Desarrollo de Aplicaciones Multiplataforma, con el firme objetivo de transformar mi carrera y dedicarme a lo que realmente me apasiona.</p>
</div>

<div class="container-img">
<img src="./icons/My-Foto.jpg" alt="Mi foto de perfil">

</div>
</div>
`};

