import "./Footer.css"


const template = () =>{
    return `
    <p>&copy; 2024 Deiby Gorrin. Todos los derechos reservados.</p>
    `
}

const Footer = ()=>{
    const footerElement = document.createElement("footer");
    footerElement.id = "Footer-CV"
    footerElement.innerHTML = template();
    document.body.appendChild(footerElement);
    
}

export default Footer;