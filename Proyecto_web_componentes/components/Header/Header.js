import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { changeTheme } from "../Navbar/Navbar";




const Header =()=>{
    const headerElement = document.createElement("header");
    headerElement.innerHTML = `${Navbar()}`;
    

    
    document.body.appendChild(headerElement);
    changeTheme();
}

export default Header;