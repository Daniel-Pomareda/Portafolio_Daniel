import React from 'react';
import { Link } from 'react-scroll';

const Presentacion: React.FC = () =>  {

    return (
        <div className="presentacion-inicial">
            <div >¡ Hola Amig@ 👋 !</div>
            <div >Que tal, como te va  </div>
            <div >Mi nombre es: </div>
            <div className="nombre-grande">Daniel Pomareda</div>
            <div>Reclutador IT y Desarrollador Web Junior</div>             
            <br></br>
            <div> Te invito a que puedas navegar por la pagina web y dejes tu comentario si deseas, tu aporte no solo me ayudará a mi, sino  a todas las personas que puedan verlo. </div>
            <br></br>
            <div> ¡ Un Abrazo !</div>             
            <br></br>
            <button><Link to="proyectos" duration={500}>Ver Proyectos Realizados</Link></button>
        </div>
    );
};

export default Presentacion;