import "./SobreMi.css";
import { cleanPage } from "../../utils/cleanPage";
import data from "../../data/data";

export const SobreMi = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `


<div class="container-SobreMi">
<div class="mi-descripcion">
<h2>Hola, Bienvenidos!!!</h2>
<h1>¡Soy ${data.name}!</h1>

<p>${data.aboutMe}</p>
</div>

<div class="container-img">
<img src="${data.avatar}" alt="Mi foto de perfil">

</div>
</div>
`;
};
