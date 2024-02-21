import React from 'react';
import { Element} from 'react-scroll';

// import { Link } from 'react-router-dom';
// https://v4.brittanychiang.com/
const AcercaDeMi: React.FC = () =>  {

    const handleDownloadPDF_Espanol = () => {
        const pdfFilePath = '/public/CV - DANIEL HENRY POMAREDA CASTRO - OK.pdf';
    
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.target = '_blank';
        link.download = 'CV - DANIEL HENRY POMAREDA CASTRO - OK.pdf';
    
        link.click();
    };

    const handleDownloadPDF_Ingles = () => {
        const pdfFilePath = '/public/Resume - Daniel Pomareda Developer.pdf';
    
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.target = '_blank';
        link.download = 'Resume - Daniel Pomareda Developer.pdf';
    
        link.click();
    };

    return (
        <Element name="acercaDeMi" className="element acerca-de-mi">
            <h1>Acerca de mi</h1>
            <br></br>
            <div>
                El sector de la Tecnologia siempre me ha interesante desde muy joven, siempre he tenido la curiosidad de entender como funcionan las cosas, ya que tengo tanto familiares como amigos que estan en este sector, aunque tambien me llamaba la atención la idea de poder ayudar a los demás, fue por ello que decidi estudiar la carrera de Psicología, pero con la idea en la mente que en algun momento tambien estudiaría algun tema relacionado a la Tecnologia, o en este caso, lo que es el Desarrollo Web.
            </div>
            <br></br>
            <div> 
                Por ello, hoy en dia me dedico al Reclutamiento de Tecnologia y tambien realizo trabajos como Desarrollador Web, Me gradue en la carrera de Psicologia en el año 2015 en la Universidad San Martin de Porres y despues de un tiempo de pude llevar la Especializacion "Certified Tech Developer" en Digital House en Diciembre 2023.
            </div>
            <br></br>
            <div>
                Tengo más de 8 años realizando actividades de Reclutamiento, 3 años realizando Reclutamiento de Perfiles Tecnologicos y unos cuandos meses Desarrollando Pagina Web, pude trabajar en diversos sectores como: Consultoria, Tecnologia, Agencia de Publicidad, Mantenimiento Electrico - Mineria, Salud Ocupacional, Tranporte de Carga, Retail, Banco, etc. Hoy en día me especializo en el Reclutamiento del Sector Tecnologico.
            </div>
            <br></br>
            <div>
                Me considero una persona apasionada por sus labores, flexible para adaptarse a los cambios y de continuo aprendizaje, con muy interes en los conocimientos Tecnologicos e Innovadores, siempre en busqueda de lograr los mejores resultados en el menor tiempo posible.
            </div>
            <br></br>
            <br></br>
            <button onClick={handleDownloadPDF_Espanol}>Descargar Curriculum en Español</button>
            <button onClick={handleDownloadPDF_Ingles}>Descargar Curriculum en Ingles</button>
            <br></br>
            <br></br>
            <br></br>
            <h2>Principales Tecnologías</h2>
            <br></br>
            <div>
                <img className="formato-icono-tecnologia" src="../public/icono-React.png" alt="icono-React"/>
                <img className="formato-icono-tecnologia" src="../public/icono-Node.png" alt="icono-Node"/>
                <img className="formato-icono-tecnologia" src="../public/icono-Java.png" alt="icono-Java"/>
                <img className="formato-icono-tecnologia" src="../public/icono-Springboot.jpeg" alt="icono-Springboot"/>
                <img className="formato-icono-tecnologia" src="../public/icono-MySQL.jpg" alt="icono-MySQL"/>
                <img className="formato-icono-tecnologia" src="../public/icono-Mongodb.jpg" alt="icono-Mongodb"/>
                <img className="formato-icono-tecnologia" src="../public/icono-Github.jpg" alt="icono-Github"/>
                <img className="formato-icono-tecnologia" src="../public/icono-Aws.png" alt="icono-Aws"/>
            </div>
            <br></br>
            <br></br>
            <h2>Otras Tecnologías</h2>
            <br></br>
            <div>
                HTML, CSS, Visual Code, SASS, Flexbox, Javascript, Typescript, Node, React, Hooks, Vite, Npm, SQL, Mysql, MongoDB, Scrum, Api Rest, Java, IntelliJ, Springboot, Lombok, h2, Docker, JWT, AWS, Vagrant, Bash, Virtual box, Github, GitLab, Ansible, Selenium, Postman, Swagger, Junit, Funcional Testing.
            </div>
            <br></br>
            <br></br>
        </Element>
    );
};

export default AcercaDeMi;