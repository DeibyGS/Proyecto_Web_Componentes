import "./Navbar.css";
import data from "../../data/data";

const Navbar = ()=>{
    return `
    <a id="Home" href="#"><p>${data.name} </p></a>
    <nav>
<ul id="site-navigation">
<li>
        <a href="#" id="RecentlyProjects" class="btn-nav-bar">Proyectos Recientes</a>
    </li>
    <li>
        <a href="#" id="MyStudies" class="btn-nav-bar">Mis Estudios</a>
    </li>
    <li>
        <a href="#" id="AboutMe" class="btn-nav-bar">Sobre Mí</a>   
    </li>
     <li>
        <a href="#" id="Contac-Me" class="btn-nav-bar">Contáctame</a>   
    </li>
    <li>
        <button id="themeBtn">☀️</button>
    </li>
    
</ul>
    <img src="./icons/menu-kebab.png" alt="Menu Kebab" id="menu-kebab" class="hidden-kebab"/>
</nav>
    `
}

export const changeText = ()=>{
    const selectTheme = document.getElementById("themeBtn");
    if(selectTheme.innerText === "☀️"){
        selectTheme.innerText = "🌙";
    }else{
        selectTheme.innerText = "☀️"
    }
}

export const changeTheme = ()=>{
    document.getElementById("themeBtn").addEventListener("click", () =>{
        document.body.classList.toggle("light");
        changeText();
    })
}



export default Navbar;