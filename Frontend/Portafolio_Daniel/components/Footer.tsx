import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-scroll';


const Footer: React.FC = () =>  {

    return (
        <div>
            <Row className="mb-3 estilo-seccion-footer">
                <Col className='estilo-seccion-columnas-footer'>
                    <section>
                        DP
                    </section>
                    <br />
                    <section>
                    Soy Daniel Pomareda, Reclutador IT y Programador Web Junior, escribeme para cualquier consulte que desee realizar.  
                    </section>
                    <br />
                    <section>
                        <div>
                            <a href='https://www.instagram.com/danielpomareda/'><img src="public/instagram.png" className='iconos-redes-sociales' alt="icono-instagram"/></a>
                            <a href='https://twitter.com/DanielPomareda'><img src="public/twitter.png" className='iconos-redes-sociales' alt="icono-twitter"/></a>
                            <a href='https://www.linkedin.com/in/itrecruiter-daniel-henry-pomareda-castro/'><img src="public/linkedin.png" className='iconos-redes-sociales' alt="icono-linkedin"/></a>
                            <a href='https://github.com/Daniel-Pomareda'><img src="public/github.png" className='iconos-redes-sociales' alt="icono-github"/></a>
                        </div>
                    </section>
                    <br />
                </Col>
                <Col>
                    <section>
                    <br />
                        <Link to="acercaDeMi" duration={500}>Acerca de Mi</Link><br /><br />
                        <Link to="experiencia" duration={500}>Experiencia</Link><br /><br />
                        <Link to="proyectos" duration={500}>Proyectos</Link><br /><br />
                        <Link to="contacto" duration={500}>Contacto</Link><br /><br />
                    </section>
                </Col>
                <Col>
                    <section>
                    <br />
                        <p><img src="public/correo.png" className='iconos-redes-sociales' alt="icono-correo"/> pomaredaniel@gmail.com</p>
                        <p><img src="public/lugar.png" className='iconos-redes-sociales' alt="icono-lugar"/> Lima, Peru</p>
                    <br />
                    </section>
                </Col>
            </Row>
            <div className='creditos'>
                Creado por Daniel Pomareda, Actualizado el año 2024.
            </div>
        </div>
    );
};

export default Footer;

//<a href='https://www.facebook.com/people/Daniel-Pomareda-Castro/1456454378/'><img src="public/facebook.png" className='iconos-redes-sociales' alt="icono-facebook"/></a>