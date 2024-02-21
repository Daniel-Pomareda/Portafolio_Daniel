import React from 'react';
import Layout from "./Layout";
import DetallePaginaWeb from "../routers/DetallePaginaWeb";
import Card_Experiencia from "../components/Card_Experiencia";
import Card_Proyectos from "../components/Card_Proyectos";
import Home from "../routers/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App: React.FC = () =>  {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/DetallePaginaWeb" element={<DetallePaginaWeb/>}/>
            <Route path="/Card_Experiencia" element={<Card_Experiencia/>}/>
            <Route path="/Card_Proyectos" element={<Card_Proyectos/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
//<Route path="*" element={<NoPages/>}/>
/*

*/
export default App
