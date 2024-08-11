import './style.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { linkPage } from './utils/linkPage';
import { Contactame } from './pages/Contactame/Contactame';





const init = ()=>{
  Header();
  linkPage("#Contac-Me",Contactame);
  Footer();
  
};


init();