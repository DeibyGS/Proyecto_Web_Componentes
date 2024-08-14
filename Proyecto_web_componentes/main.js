import './style.css'
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import { linkPage } from './utils/linkPage';
import { Contactame } from './pages/Contactame/Contactame';
import { SobreMi } from './pages/SobreMi/SobreMi';
import { MisEstudios } from './pages/MisEstudios/MisEstudios';







const init = ()=>{
  Header();
  Footer();
  linkPage("#Home", Contactame);
  linkPage("#Contac-Me", Contactame);
  linkPage("#AboutMe", SobreMi);
  linkPage("#MyStudies", MisEstudios);
  

};


init();