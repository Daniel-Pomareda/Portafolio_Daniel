import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { scroller } from 'react-scroll';


const CustomNavbar: React.FC = () =>  {

    const handleScrollTo = (element: string) => {
            scroller.scrollTo(element, {
                duration: 500,
                delay: 0,
        });
    };
    
    return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top" >
        <Container>
            <Navbar.Brand href="#home">DP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link onClick={() => handleScrollTo('acercaDeMi')}>Acerca de Mi</Nav.Link>
                    <Nav.Link onClick={() => handleScrollTo('experiencia')}>Experiencia</Nav.Link>
                    <Nav.Link onClick={() => handleScrollTo('proyectos')}>Proyectos</Nav.Link>
                    <Nav.Link onClick={() => handleScrollTo('contacto')}>Contacto</Nav.Link>
                        <Nav>
                            <Button className='botones-navbar' variant="primary">Registrarse</Button>{' '}
                            <Button className='botones-navbar' variant="primary">Iniciar Sesión</Button>{' '}
                        </Nav>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default CustomNavbar;

        /*
        <div className="navbar-container">
            <Link to ="/">D</Link>
            <nav>
                <Link to="/">Logo de empresa</Link>
                <Link to="/about">Acerca de mi</Link>
                <Link to="/experience">Experiencia</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/contact">Contacto</Link>
            </nav>
            <button><Link to="/register">Registrarse</Link></button>
            <button><Link to="/login">Iniciar sesión</Link></button>
            <button>Cambiar el Fondo</button>
        </div>*/