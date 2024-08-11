import "./Contactame.css";
import { cleanPage } from "../../utils/cleanPage";

export const Contactame = ()=>{
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <div class="container-contactame">
    <div class="contactame">
    <h1>Contactame</h1>
    <p>Para más información, puedes enviarme un correo a <a href="mailto:deibygorrin@icloud.com target="_blank">deibygorrin@icloud.com</a>
    <p>Acá mi <a href="#">resumen.</a>
    </div>
   <form action="/submit-form" method="POST" ">
    <fieldset>
        <legend>Solitar Información</legend>
        
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required/>

        <label for="name">Asunto:</label>
        <input type="text" id="aunto" name="name" required />
        
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4"></textarea>
        
        <button type="submit">Enviar</button>
    </fieldset>
</form>
    </div>
    `
}

