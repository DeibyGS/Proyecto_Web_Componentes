import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { changeTheme } from "../Navbar/Navbar";




const Header =()=>{
    const headerElement = document.createElement("header");
    headerElement.innerHTML = `${Navbar()}`;
    

    
    document.body.appendChild(headerElement);
    changeTheme();

const abrir = headerElement.querySelector("#abrir");
const cerrar = headerElement.querySelector("#cerrar");
const nav = headerElement.querySelector("#nav");


abrir.addEventListener("click", ()=>{
nav.classList.add("visible");
});

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");

});
}

export default Header;