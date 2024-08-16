import './style.css'
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import { linkPage } from './utils/linkPage';
import { ProyectosRecientes } from './pages/ProyectosRecientes/ProyectosRecientes';
import { MisEstudios } from './pages/MisEstudios/MisEstudios';
import { SobreMi } from './pages/SobreMi/SobreMi';
import { Contactame } from './pages/Contactame/Contactame';







const init = ()=>{
  
  Header();
  Footer();
  linkPage("#Home", Contactame);
  linkPage("#RecentlyProjects", ProyectosRecientes);
  linkPage("#MyStudies", MisEstudios);
  linkPage("#AboutMe", SobreMi);
  linkPage("#Contac-Me", Contactame);
 

};




init();