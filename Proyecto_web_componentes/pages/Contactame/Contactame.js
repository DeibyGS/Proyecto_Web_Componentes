import "./Contactame.css";
import { cleanPage } from "../../utils/cleanPage";
import { EnlaceRedes } from "../../utils/EnlaceRedes";
import data from "../../data/data";
import { linkPage } from "../../utils/linkPage";
import { SobreMi } from "../SobreMi/SobreMi";
import emailjs from "emailjs-com";

export const Contactame = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <div class="container-contactame">
      <div class="contacto">
        <h1>Contáctame</h1>
        <p>Para más información, puedes enviarme un correo a 
          <a href="mailto:${data.email}" target="_blank">${data.email}</a>
        </p>
        <p>Acá mi <a href="#" id="resumen">resumen.</a></p>
        <div class="Contacto-Redes">
          ${EnlaceRedes(
            "./icons/github.png",
            "Github",
            "https://github.com/deiybg"
          )}
          ${EnlaceRedes(
            "./icons/linkedin.png",
            "Linkedin",
            "https://www.linkedin.com/in/deibygorrin/"
          )}
        </div>
      </div>
      <div class="container-form">
        <form id="contact-form">
          <fieldset>
            <legend>Solicitar Información</legend>
            
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
            
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required/>

            <label for="subject">Asunto:</label>
            <input type="text" id="subject" name="subject" required />
            
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4"></textarea>
            
            <button type="submit">Enviar</button>
          </fieldset>
        </form>
      </div>
    </div>
  `;

  const resumen = document.getElementById("resumen");
  resumen.addEventListener("click", (e) => {
    e.preventDefault();
    linkPage("#resumen", SobreMi);
  });

  // 🚀 Aquí conectamos EmailJS
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_re33c0l", // 🔹 tu Service ID
        "template_f6rh3i9", // 🔹 tu Template ID
        form,
        "ul5i6V6RTSUPPyYZp" // 🔹 tu Public Key
      )
      .then(
        () => {
          alert("✅ Mensaje enviado con éxito");
          form.reset(); // 🔹 limpia todos los campos después del envío
        },
        (err) => alert("❌ Error al enviar: " + JSON.stringify(err))
      );
  });
};
