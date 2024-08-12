import "./Navbar.css"

const Navbar = ()=>{
    return `
    <a id="Home" href="#"><p>Deiby Gorrin</p></a>
    <nav>
<ul id="site-navigation">
<li>
        <a href="#" id="Recently-Projetcs">Proyectos Recientes</a>
    </li>
    <li>
        <a href="#" id="My-Study">Mis Estudios</a>
    </li>
    <li>
        <a href="#" id="AboutMe">Sobre Mí</a>   
    </li>
     <li>
        <a href="#" id="Contac-Me">Contáctame</a>   
    </li>
    <li>
        <button id="themeBtn">☀️</button>
    </li>
</ul>
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