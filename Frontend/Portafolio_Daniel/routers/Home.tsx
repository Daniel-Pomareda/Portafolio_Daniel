import React from "react";
import Presentacion from "../components/Presentacion";
import AcercaDeMi from "../components/AcercaDeMi";
import Contact from "../components/Contact";
import Card_Experiencia from "../components/Card_Experiencia";
import Card_Proyectos from "../components/Card_Proyectos";

const Home: React.FC = () => {

  // 

  return (
      <main>
        <div><Presentacion/></div>
        <div><AcercaDeMi/></div>
        <div><Card_Experiencia/></div>
        <div><Card_Proyectos/></div>
        <div><Contact/></div>
      </main>
  )
}

export default Home