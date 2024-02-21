import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Element} from 'react-scroll';

// import { Link } from 'react-router-dom';

interface formato_proyecto {
  id: string;
  imagen: string;
  titulo: string;
  texto: string;
  rol: string;
  tecnologias: string;
  link: string;
}

const Card_Proyectos: React.FC = () =>  {

  const proyectos: formato_proyecto[] = [
    {
        id:crypto.randomUUID(),
        imagen: '/public/Fotos_Odontologos_Back/odontologos_back0.png',
        titulo: "Clinica Odontologica Back",
        texto: "Se realizo: Gestion de CRUD para Guardar datos en Base de datos conectando el Back con Base de datos, Validacion de Datos, Gestion de Logs, Gestion de Errores",
        rol: "Rol: Desarrollador Back",
        tecnologias: "Herramientas: HTML, Javascript, Java, Sprintboot, Lombok, log4j, Hibernate, Mongo DB",
        link: 'https://github.com/Daniel-Pomareda/proyecto_Java_Clinica2'
    },
    {
        id:crypto.randomUUID(),
        imagen: '/public/Fotos_Odontologos_Front/odontologo_front0.png',
        titulo: "Clinica Odontologica Front",
        texto: "Se realizo: Renderizado de Tarjetas, llamado al API, From con avisos de Validacion, Agregar a favoritos, Guardar en RAM con useMemo(), useContext(), Funcion Dark-Light de la pagina",
        rol: "Rol: Desarrollador Front",
        tecnologias: "Herramientas: React-Hooks, Javascript, Node, Vite, NPM",
        link: 'https://github.com/Daniel-Pomareda/Examen_Final_Front_c2'
    },
    {
        id:crypto.randomUUID(),
        imagen: "/public/Fotos_Sonidos_Reservados/sonidos_reservados0.png",
        titulo: "Reserva de Instrumentos Musicales",
        texto: "Se realizo: Trabajo en equipo, Pagina para reservar instrumentos musicales, Agrega favoritos, Historial y USER/ADMIN, compartir en Redes el producto Favoritos y Calificar Producto",
        rol: "Rol: Testing Funcional y Scrum Master",
        tecnologias: "Herramientas: React-Hooks, Vite, NPM, Bootstrap, Javascript, Java, Sprintboot, Sprintboot, Spring Security, JWT, Hibernate, MySql, AWS, EC2, S3, AIM, Testing, Swagger, Postman",
        link: 'https://github.com/E5-Intrumentos-Musicales/E5-PI-instrumentosMusicales'
    },
]

    return (
      <Element name="proyectos">
      <h1>Proyectos</h1>
      <div className='estilo-seccion-proyectos'>
        {proyectos.map(proyecto => (
          <Card key={proyecto.id} className='estilo-proyecto'>
            <Card.Img variant="top" src={proyecto.imagen} />
            <Card.Body>
              <Card.Title>{proyecto.titulo}</Card.Title>
              <Card.Text>{proyecto.texto}</Card.Text>
              <Card.Text>{proyecto.rol}</Card.Text>
              <Card.Text>{proyecto.tecnologias}</Card.Text>
              <Button variant="primary"><a href={proyecto.link} className='boton-github-proyectos'>Ver Codigo</a></Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Element>
  );
};

export default Card_Proyectos;