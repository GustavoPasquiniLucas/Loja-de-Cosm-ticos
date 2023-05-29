
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/navbar/navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Contato from './pages/contato';
import Sobre from './pages/sobre';



function App() {

  return (
    <>
     <NavBar></NavBar>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contato" element={<Contato/>}/>
    <Route path="/sobre" element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>
   
   </>

   
  )
    }
export default App
